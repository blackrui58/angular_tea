/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 50711
Source Host           : localhost:3306
Source Database       : hcb

Target Server Type    : MYSQL
Target Server Version : 50711
File Encoding         : 65001

Date: 2017-09-29 16:32:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for userlist
-- ----------------------------
DROP TABLE IF EXISTS `userlist`;
CREATE TABLE `userlist` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `sex` varchar(20) NOT NULL,
  `age` tinyint(10) NOT NULL,
  `birthday` date NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=133 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userlist
-- ----------------------------
INSERT INTO `userlist` VALUES ('63', '张三', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('64', '李四', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('65', '王武', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('66', '赵柳', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('67', '周泰', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('68', '田璞', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('69', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('70', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('71', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('72', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('73', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('74', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('75', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('76', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('77', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('78', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('79', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('80', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('81', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('82', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('83', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('84', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('85', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('86', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('87', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('88', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('89', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('90', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('91', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('92', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('93', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('94', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('95', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('96', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('97', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('98', '邵静', '男', '38', '2017-03-30', '上海 上海市 静安区');
INSERT INTO `userlist` VALUES ('99', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('100', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('101', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('102', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('103', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('104', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('105', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('106', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('107', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('108', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('109', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('110', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('111', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('112', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('113', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('114', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('115', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('116', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('117', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('118', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('119', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('120', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('121', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('122', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('123', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('124', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('125', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('126', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('127', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('128', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('129', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('130', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('131', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
INSERT INTO `userlist` VALUES ('132', '秦蕴涵', '女', '25', '2011-03-30', '北京 北京市 海淀区');
