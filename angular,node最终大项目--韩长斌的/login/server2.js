//获取模版
var express = require('express');
var mysql = require('mysql');
var bodyParsser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var multer = require('multer');
var crypto = require('crypto');

//创建服务
var server =express();
//监听端口
server.listen(8282);
//静态文件
server.use(express.static('www/'));
//创建数据库连接
var db = mysql.createConnection({
	host:'localhost',
	port:3306,
	user:'root',
	password:'',
	database:'hcb',
	dateStrings:true
})
//解析post数据
server.use(bodyParsser.urlencoded({extended:true}));
//缓存
server.use(cookieParser());
server.use(session({
	resave:true,
	saveUninitialized:false,
	secret:'hanchangbin',
	cookie:{maxAge:24*60*60*1000}
}));
//文件上传
var obj = multer({dest:'www/upload/'});
server.use(obj.any());



//登录验证
server.post('/login',function(req,res){
	// console.log(req.url)
	console.log(req.body)
	var {username,pwd} = req.body;
	//加密方式
	var jiami = crypto.createHash('md5');
	//加密内容
	jiami.update(pwd+'hcb');
	//加密结果
	var jiaPwd = jiami.digest('hex');
	console.log(jiaPwd)
	var SQL= `SELECT * FROM login_user WHERE username='${username}' AND pwd='${jiaPwd}'`;
	db.query(SQL,function(err,data){
		if(err){
			res.status(500);
			res.send('数据库正在维护')
		}else {
			console.log(data)
			if(data.length > 0 ){
				req.session.token = req.body.username;
				res.send({error:0,msg:'登录成功'});
				//记录登录成功的帐号
				
			}else{
				res.send({error:1,msg:'用户名或密码错误'})
			}
		}
	})
})


//注册
server.post('/register',function(req,res){
	console.log(req.body);
	//解构解析
	var {username,pwd} = req.body;
	//加密方式
	var jiami = crypto.createHash('md5');
	//加密内容
	jiami.update(pwd+'hcb');
	//加密结果
	var jiaPwd = jiami.digest('hex');
	//存储数据
	
	var SQL =`SELECT *FROM login_user WHERE username = '${username}'`;
	db.query(SQL,function(err,data){
		if(err){
			res.status(500);
			res.send('数据库正在维护')
		}else {
			if(data.length>0){
				res.send({error:1,msg:'该用户名已注册'});
			}else {
				var SQL =`INSERT INTO login_user (username,pwd) VALUES ('${username}','${jiaPwd}')`;
				db.query(SQL,function(err,data){
					if(err){
						res.status(500);
						res.send('数据库正在维护')
					}else {
						req.session.token = req.body.username;
						res.send({error:0,msg:'注册成功'})
					}
				})
			}
		}
	})
})


//记住账户和密码
server.get('/token',function(req,res){
	//发送登陆成功的存储数据
	res.send(req.session.token);
})


//获取用户列表数据
server.get('/userlist',function(req,res){
	var SQL = `SELECT * FROM userlist`;
	db.query(SQL,function(err,data){
		if(err){
			res.status(500);
			res.send('数据库正在维护');
		}else {
			if(data.length >0){
				res.send(data);
			}else{
				res.send('没有此数据')
			}
		}
	})
})

//获取图书列表信息get请求/bookslist?count=5&page=1
//传送到前台的数据:data,total_page,page
server.get('/bookslist',function(req,res){
	//获取数据的总个数
	var SQL = `SELECT COUNT (*) AS c FROM bookslist`;
	db.query(SQL,function(err,data){
		if(err){
			console.log(111)
			res.status(500);
			res.send('数据库正在维护')
		}else{
			//总数据个数
			var total_count = data[0].c;
			//每页数据个数
			var count = req.query.count||5;
			//共几页
			total_page = Math.ceil(total_count / count);
//			第几页
			var page = req.query.page||1;
			if(page > total_page){
				page = total_page;
			}
			db.query(`SELECT * FROM bookslist ORDER BY id LIMIT ${(page-1)*count},${count}`,function(err,data){
				
				if(err){
					console.log(222)
					res.status(500);
					res.send('数据库正在维护');
				}else{
					console.log('传送成功')
					res.send({data,total_count,page});
				}
			})
			
		}
	})
})
// //删除图书列表目录
server.get('/deletebook',function(req,res){
	//获取参数
	var {id} = req.query;
	db.query(`DELETE FROM bookslist WHERE id = '${id}'`,function(err,data){
		if(err){
			console.log(222)
			res.status(500);
			res.send('数据库正在维护');
		}else {
			res.send({error:0,msg:'删除成功'})
		}
	})
})
//新增图书列表数据
server.post('/addbooklist',function(req,res){
	console.log(req.body)
	var {title,author,date,content} = req.body;
	var SQL =`INSERT INTO bookslist (title,author,date,content) VALUES ('${title}','${author}','${date}','${content}') `;
	db.query(SQL,function(err,data){
		if(err){
			console.log(222)
			res.status(500);
			res.send('数据库正在维护');
		}else {
			res.send('插入成功')
		}
	})
})
//编辑图书列表数据
server.post('/updatebooklist',function(req,res){
	var {id,title,author,date,content} = req.body;
	var SQL =`UPDATE bookslist SET title="${title}",author="${author}",date="${date}",content="${content}" WHERE id="${id}"`;
	db.query(SQL,function(err,data){
		if(err){
			res.status(500);
			res.send('数据库正在维护')
		}else{
			res.send('更新成功')
		}
	})
})
////编辑面板获取数据信息
//server.get('/updatebooklist',function(req,res){
//	console.log(req.query)
//	var {id} = req.query;
////	console.log(id);
////	查询数据
//	var SQL =`SELECT * FROM bookslist WHERE id='${id}'`;
//	db.query(SQL,function(err,data){
//		if(err){
//			res.status(500);
//			res.send('数据库正在维护')
//		}else{
//			if(data.length >0){
//				res.send(data);
//				console.log(data);
//			}else{
//				console.log('没有查询到数据');
//			}
//		}
//	})
//})

//修改密码
server.post('/updatepwd',function(req,res){
	console.log(req.body)
	var {username,pwded,pwd} = req.body;
	//加密方式
	var jiami = crypto.createHash('md5');
	//加密内容
	jiami.update(pwded+'hcb');
	//加密结果
	var jiaPwded = jiami.digest('hex');
	console.log()
	var SQL = `SELECT * FROM login_user WHERE username='${username}' AND pwd='${jiaPwded}'`;
	db.query(SQL,function(err,data){
		if(err){
			res.status(500);
			res.send('数据库正在维护');
		}else {
			if(data.length > 0){
				console.log('下一条');
				//加密方式
				var jiami = crypto.createHash('md5');
				//加密内容
				jiami.update(pwd+'hcb');
				//加密结果
				var jiaPwd = jiami.digest('hex');
				console.log(jiaPwd)
				var SQL = `UPDATE login_user SET pwd='${jiaPwd}' WHERE username='${username}'`;
				db.query(SQL,function(err,data){
					if(err){
						res.status(500);
						res.send('数据库正在维护')
					}else {
						res.send({error:0,msg:'修改成功,请重新登录'})
					}
				})
			}else {
				console.log('错了')
				res.send({error:1,msg:'原密码错误'})
			}
		}
	})
})


