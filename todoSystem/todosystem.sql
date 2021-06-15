/*
Navicat MySQL Data Transfer

Source Server         : bendi
Source Server Version : 80019
Source Host           : localhost:3306
Source Database       : todosystem

Target Server Type    : MYSQL
Target Server Version : 80019
File Encoding         : 65001

Date: 2021-06-13 18:14:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `assets_lib`
-- ----------------------------
DROP TABLE IF EXISTS `assets_lib`;
CREATE TABLE `assets_lib` (
  `id` int NOT NULL COMMENT '资源id',
  `link` varchar(255) NOT NULL COMMENT '资源连接',
  `type` varchar(100) NOT NULL COMMENT '资源类型',
  UNIQUE KEY `assets_lib_id_IDX` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of assets_lib
-- ----------------------------

-- ----------------------------
-- Table structure for `todo_log`
-- ----------------------------
DROP TABLE IF EXISTS `todo_log`;
CREATE TABLE `todo_log` (
  `todo_id` int NOT NULL AUTO_INCREMENT COMMENT 'todo的编号',
  `todo_content` varchar(500) NOT NULL COMMENT 'todo内容',
  `todo_status` tinyint(1) unsigned zerofill NOT NULL DEFAULT '0' COMMENT 'todo完成状态（0 未完成 1已完成）',
  `todo_created_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT 'todo创建时间',
  `user_id` int NOT NULL COMMENT 'todo 的用户',
  `todo_set_finish_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'todo 设定的完成时间',
  `todo_shared_status` tinyint NOT NULL DEFAULT '0',
  `follow_number` bigint NOT NULL DEFAULT '0',
  `todo_start_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`todo_id`),
  KEY `todo_id` (`todo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='记录所有的Todo';

-- ----------------------------
-- Records of todo_log
-- ----------------------------
INSERT INTO `todo_log` VALUES ('1', '测试', '0', '0000-00-00 00:00:00', '11', '0000-00-00 00:00:00', '1', '0', '2021-06-12 11:00:38');
INSERT INTO `todo_log` VALUES ('2', '测试按市场', '0', '0000-00-00 00:00:00', '11', '0000-00-00 00:00:00', '0', '0', '2021-06-12 11:00:38');
INSERT INTO `todo_log` VALUES ('3', '测试', '1', '0000-00-00 00:00:00', '12', '2021-06-12 10:19:28', '1', '0', '2021-06-12 11:00:38');
INSERT INTO `todo_log` VALUES ('4', '测试撒打算', '1', '0000-00-00 00:00:00', '12', '2021-06-12 10:20:22', '1', '0', '2021-06-12 11:00:38');
INSERT INTO `todo_log` VALUES ('5', '测撒打算', '1', '0000-00-00 00:00:00', '12', '2021-06-12 10:23:48', '1', '0', '2021-06-12 11:00:38');
INSERT INTO `todo_log` VALUES ('8', '测试用例', '1', '0000-00-00 00:00:00', '12', '2021-06-12 11:02:42', '1', '0', '2021-06-12 11:02:42');
INSERT INTO `todo_log` VALUES ('9', 'csacas', '1', '0000-00-00 00:00:00', '12', '2021-06-12 11:10:05', '0', '0', '2021-06-12 11:10:05');
INSERT INTO `todo_log` VALUES ('10', 'ces', '1', '0000-00-00 00:00:00', '12', '2021-06-12 11:10:43', '1', '0', '2021-06-12 11:10:43');
INSERT INTO `todo_log` VALUES ('11', 'eq', '0', '0000-00-00 00:00:00', '12', '2021-06-12 11:37:03', '0', '0', '2021-06-12 11:37:03');
INSERT INTO `todo_log` VALUES ('12', '打怪兽', '0', '0000-00-00 00:00:00', '11', '2021-06-13 11:11:10', '1', '0', '2021-06-13 11:11:10');
INSERT INTO `todo_log` VALUES ('13', '测试用例', '0', '0000-00-00 00:00:00', '11', '2021-06-13 11:11:35', '0', '0', '2021-06-13 11:11:35');
INSERT INTO `todo_log` VALUES ('14', '测试用例', '0', '0000-00-00 00:00:00', '11', '2021-06-13 11:11:59', '0', '0', '2021-06-13 11:11:59');
INSERT INTO `todo_log` VALUES ('15', '尝试', '0', '0000-00-00 00:00:00', '11', '2021-06-13 11:12:08', '0', '0', '2021-06-13 11:12:08');
INSERT INTO `todo_log` VALUES ('16', 'TODO', '0', '0000-00-00 00:00:00', '11', '2021-06-13 11:12:22', '0', '0', '2021-06-13 11:12:22');
INSERT INTO `todo_log` VALUES ('17', 'cas', '0', '0000-00-00 00:00:00', '11', '2021-06-13 11:59:05', '0', '0', '2021-06-13 11:59:05');
INSERT INTO `todo_log` VALUES ('18', 'test', '0', '0000-00-00 00:00:00', '23', '2021-06-13 18:01:53', '0', '0', '2021-06-13 18:01:53');

-- ----------------------------
-- Table structure for `todo_user`
-- ----------------------------
DROP TABLE IF EXISTS `todo_user`;
CREATE TABLE `todo_user` (
  `user_id` int NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `username` varchar(50) NOT NULL DEFAULT '' COMMENT '用户名',
  `user_account` varchar(50) NOT NULL DEFAULT '' COMMENT '用户账号',
  `user_password` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '用户密码',
  `user_created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '用户创建时间',
  `user_mobile` varchar(20) NOT NULL COMMENT '用户电话',
  `user_sex` int(1) unsigned zerofill NOT NULL DEFAULT '0' COMMENT '用户性别',
  `user_address` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户地址',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_account` (`user_account`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户信息';

-- ----------------------------
-- Records of todo_user
-- ----------------------------
INSERT INTO `todo_user` VALUES ('11', '123', '123', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', '2021-06-11 11:52:58', '18982671694', '0', '西华大学');
INSERT INTO `todo_user` VALUES ('16', '789', '789', '35a9e381b1a27567549b5f8a6f783c167ebf809f1c4d6a9e367240484d8ce281', '2021-06-13 17:14:21', '123', '1', '123');
INSERT INTO `todo_user` VALUES ('17', '908', '908', '5e61b431f3823da05836b2139f9a811c3cc078153ba1853b44519879b7d64af4', '2021-06-13 17:18:48', '908', '0', '908');
INSERT INTO `todo_user` VALUES ('20', '12', '1231', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', '2021-06-13 17:19:57', '123', '123', '123');
INSERT INTO `todo_user` VALUES ('21', '121', '123121', '89aa1e580023722db67646e8149eb246c748e180e34a1cf679ab0b41a416d904', '2021-06-13 17:21:43', '123', '121', '121');
INSERT INTO `todo_user` VALUES ('22', '1233213', '12312321', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', '2021-06-13 17:34:35', '123', '123', '123');
INSERT INTO `todo_user` VALUES ('23', '1233213', '12321', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', '2021-06-13 17:59:58', '123', '1', '123');
