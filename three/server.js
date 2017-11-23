var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var mysql = require('mysql');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var common=require('./lib/common');
var ejs = require('ejs');

//准备工作
var server = express();
server.listen(8080);

// 连接数据库
var db=mysql.createPool({host: 'localhost', user: 'root', password: '', database: 'admin'});
// 正在热映
server.get('/in_theaters',function (req,res) {
	common.parse(req,res,db);
})
// 即将上映
server.get('/coming_soon',function (req,res) {
	common.parse(req,res,db);
})
// top250
server.get('/top250',function (req,res) {
	common.parse(req,res,db);
})
// 电影详情
server.get('/detail',function (req,res) {
	db.query(`SELECT * FROM movie_detail WHERE id = ${req.query.id}`,function (err,data) {
		if (err) {
			res.status(500);
			res.send("数据库错误"+err);
		} else {
			data.forEach(function (ele) {
				ele.images = JSON.parse(ele.images);
			});
			res.send(data[0]);
		}
		res.end()
	})
});

// 特卖
server.get('/temai',function (req,res) {
	common.yunbei(req,res,db,0);
})

server.get('/tongzhuang',function (req,res) {
	common.yunbei(req,res,db,1);
})
server.get('/tushu',function (req,res) {
	common.yunbei(req,res,db,2);
})
server.get('/yongpin',function (req,res) {
	common.yunbei(req,res,db,3);
})
server.get('/haiwai',function (req,res) {
	common.yunbei(req,res,db,4);
})



// server.get('/in_theaters',function (req,res) {
// 	db.query('SELECT COUNT (*) AS c FROM in_theaters',function (err,data) {
// 		if (err) {
// 			res.status(500);
// 			res.send('数据库错误'+err);
// 			res.end();
// 		} else {
// 			var total = data[0].c;

// 			//每页多少
// 			var count = req.query.count || 4;
// 			// 当前页
// 			var page = req.query.page || 1;
// 			console.log(count,page);
// 			db.query(`SELECT * FROM in_theaters LIMIT ${(page - 1) * count},${count}`,function (err,data) {
// 				if (err) {
// 					res.status(500);
// 					res.send('数据库错误'+err);
// 				}else {
// 					data.forEach(function (ele) {
// 						ele.rating = JSON.parse(ele.rating);
// 						ele.directors = JSON.parse(ele.directors);
// 						ele.images = JSON.parse(ele.images);

// 					});
// 					res.send({total,data});
// 				}
// 				res.end();
// 			});
// 		}
// 	});
// })

//静态文件
server.use(express.static('www/'));