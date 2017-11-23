var crypto = require('crypto');
module.exports = {
	md5: function (str) {
		var obj = crypto.createHash('md5');
		obj.update(str);
		return obj.digest('hex');
	},
	parse: function (req,res,db) {
		var movie = req.path.substr(1);
		console.log(movie);
		db.query('SELECT COUNT (*) AS c FROM '+movie,function (err,data) {
		if (err) {
			res.status(500);
			res.send('数据库错误'+err);
			res.end();
		} else {
			var total = data[0].c;

			//每页多少
			var count = req.query.count || 4;
			// 当前页
			var page = req.query.page || 1;
			console.log(count,page);
			db.query(`SELECT * FROM ${movie} LIMIT ${(page - 1) * count},${count}`,function (err,data) {
				if (err) {
					res.status(500);
					res.send('数据库错误'+err);
				}else {
					data.forEach(function (ele) {
						ele.rating = JSON.parse(ele.rating);
						ele.directors = JSON.parse(ele.directors);
						ele.images = JSON.parse(ele.images);

					});
					res.send({total,data});
				}
				res.end();
			});
		}
	});
	},
	yunbei: function (req,res,db,index) {
		db.query(`SELECT * FROM temai`,function (err,data) {
		if (err) {
			res.status(500);
			res.send('数据库错误'+err);
			res.end();
		} else {
			res.send(data[index].img);
			res.end();
		}
	});
	}

}