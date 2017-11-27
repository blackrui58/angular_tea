/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 50711
Source Host           : localhost:3306
Source Database       : hcb

Target Server Type    : MYSQL
Target Server Version : 50711
File Encoding         : 65001

Date: 2017-09-29 16:32:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for login_user
-- ----------------------------
DROP TABLE IF EXISTS `login_user`;
CREATE TABLE `login_user` (
  `username` varchar(50) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login_user
-- ----------------------------
INSERT INTO `login_user` VALUES ('admin', '34068682b9779be61dea4d658f7e49ee', '1');
INSERT INTO `login_user` VALUES ('韩长斌', '34068682b9779be61dea4d658f7e49ee', '5');
INSERT INTO `login_user` VALUES ('王娜', 'c14efb60f811670211ef002a4291f592', '6');
INSERT INTO `login_user` VALUES ('李易峰', 'b853aaaa01f3c81702ae720cbfc495bb', '7');
INSERT INTO `login_user` VALUES ('蜘蛛侠', '5a264d2173498f438fa59d03e1b5cfcc', '8');
INSERT INTO `login_user` VALUES ('大力水手', 'fb43e24cf8398eb47efc5a8475cd4c61', '9');
INSERT INTO `login_user` VALUES ('金刚狼', '34068682b9779be61dea4d658f7e49ee', '10');
INSERT INTO `login_user` VALUES ('玩玩呢', 'c14efb60f811670211ef002a4291f592', '11');
