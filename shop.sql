/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : shop

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 13/06/2021 15:59:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart`  (
  `cart_id` int NOT NULL AUTO_INCREMENT COMMENT '购物车ID',
  `user_id` int NULL DEFAULT NULL COMMENT '用户ID ',
  `update_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  `amount` tinyint NULL DEFAULT NULL COMMENT '数量',
  `product_id` int NULL DEFAULT NULL COMMENT '产品ID',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `total_price` decimal(10, 2) NULL DEFAULT NULL COMMENT '总价',
  `price` decimal(10, 2) NULL DEFAULT NULL COMMENT '价格',
  PRIMARY KEY (`cart_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES (279, 34, '2021-06-13 15:10:25', 1, 1, '2021-06-13 15:10:25', 200.00, 200.00);
INSERT INTO `cart` VALUES (280, 34, '2021-06-13 15:10:26', 1, 1, '2021-06-13 15:10:26', 200.00, 200.00);
INSERT INTO `cart` VALUES (281, 34, '2021-06-13 15:51:41', 1, 2, '2021-06-13 15:51:41', 300.00, 300.00);
INSERT INTO `cart` VALUES (282, 34, '2021-06-13 15:51:41', 1, 2, '2021-06-13 15:51:41', 300.00, 300.00);
INSERT INTO `cart` VALUES (283, 34, '2021-06-13 15:51:42', 1, 1, '2021-06-13 15:51:42', 200.00, 200.00);
INSERT INTO `cart` VALUES (284, 34, '2021-06-13 15:52:28', 1, 1, '2021-06-13 15:52:28', 200.00, 200.00);

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`  (
  `order_id` int NOT NULL AUTO_INCREMENT COMMENT '订单ID',
  `product_id` int NULL DEFAULT NULL COMMENT '商品ID',
  `user__id` int NULL DEFAULT NULL COMMENT '用户ID',
  ` payment` decimal(20, 0) NULL DEFAULT NULL COMMENT '实付金额',
  `amount` tinyint NULL DEFAULT NULL COMMENT '商品数量',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`order_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order
-- ----------------------------

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `product_id` int NOT NULL AUTO_INCREMENT COMMENT '商品ID',
  `product_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '商品名称',
  `product_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '商品描述',
  `product_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '商品类别',
  `price` decimal(10, 2) NULL DEFAULT NULL COMMENT '价格',
  `stock` int NULL DEFAULT NULL COMMENT '库存',
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '商品图片',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `update_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  PRIMARY KEY (`product_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (1, '智能手机', '爆款手机', '电子', 200.00, 58, 'https://tse2-mm.cn.bing.net/th/id/OIP.gAJgq18dd5Dgn2SjLRwX3QHaHa?w=172&h=180&c=7&o=5&dpr=1.25&pid=1.7', '2021-06-13 15:52:28', '2021-06-13 15:52:28');
INSERT INTO `product` VALUES (2, '智能手机', '爆款手机', '电子', 300.00, 21, 'https://tse3-mm.cn.bing.net/th/id/OIP.6CnBqwxGBzSfw2DzKlxXBQHaO0?w=115&h=180&c=7&o=5&dpr=1.25&pid=1.7', '2021-06-13 15:51:41', '2021-06-13 15:51:41');
INSERT INTO `product` VALUES (3, '老年机', '性能手机', '电子', 50.00, 195, 'https://tse3-mm.cn.bing.net/th/id/OIP.lw2EnlG03aj4y3PNMsntrgHaHW?w=179&h=180&c=7&o=5&dpr=1.25&pid=1.7', '2021-06-13 15:09:36', '2021-06-13 15:09:36');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` int NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '用户名',
  `user_account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '用户账号',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '用户密码',
  `phone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '手机号',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `update_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  `receive_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '收货地址',
  PRIMARY KEY (`user_id`) USING BTREE,
  UNIQUE INDEX `UQ_ACCOUNT`(`user_account`) USING BTREE COMMENT '账号唯一'
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (4, '王五', 'admin', '123', '188888888', '2021-06-10 21:26:19', '2021-06-10 21:26:19', '么有');
INSERT INTO `user` VALUES (6, '王二娃', '小号', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', '18381318296', '2021-06-11 18:34:49', '2021-06-11 18:34:49', NULL);
INSERT INTO `user` VALUES (10, '小鹏', '大号', 'c7e616822f366fb1b5e0756af498cc11d2c0862edcb32ca65882f622ff39de1b', '18381318296', '2021-06-12 19:38:03', '2021-06-12 19:38:03', NULL);
INSERT INTO `user` VALUES (12, '小鹏', '是的', 'c7e616822f366fb1b5e0756af498cc11d2c0862edcb32ca65882f622ff39de1b', '18381318296', '2021-06-12 19:41:28', '2021-06-12 19:41:28', NULL);
INSERT INTO `user` VALUES (16, '小鹏', '是的1', 'c7e616822f366fb1b5e0756af498cc11d2c0862edcb32ca65882f622ff39de1b', '18381318296', '2021-06-12 19:53:09', '2021-06-12 19:53:09', '起飞');
INSERT INTO `user` VALUES (18, '小鹏', '是的2', 'c7e616822f366fb1b5e0756af498cc11d2c0862edcb32ca65882f622ff39de1b', '18381318296', '2021-06-12 19:59:14', '2021-06-12 19:59:14', '起飞');
INSERT INTO `user` VALUES (19, '小鹏', '是的10', 'c7e616822f366fb1b5e0756af498cc11d2c0862edcb32ca65882f622ff39de1b', '18381318296', '2021-06-12 20:00:31', '2021-06-12 20:00:31', '起飞');
INSERT INTO `user` VALUES (20, '小鹏', '是的11', 'c7e616822f366fb1b5e0756af498cc11d2c0862edcb32ca65882f622ff39de1b', '18381318296', '2021-06-12 20:01:51', '2021-06-12 20:01:51', '起飞');
INSERT INTO `user` VALUES (21, '小鹏', '是的13', 'c7e616822f366fb1b5e0756af498cc11d2c0862edcb32ca65882f622ff39de1b', '18381318296', '2021-06-12 20:03:56', '2021-06-12 20:03:56', '起飞');
INSERT INTO `user` VALUES (22, '小鹏', '是的666', 'c7e616822f366fb1b5e0756af498cc11d2c0862edcb32ca65882f622ff39de1b', '18381318296', '2021-06-12 20:05:56', '2021-06-12 20:05:56', '起飞');
INSERT INTO `user` VALUES (25, '小鹏', '是的789', 'c7e616822f366fb1b5e0756af498cc11d2c0862edcb32ca65882f622ff39de1b', '18381318296', '2021-06-12 21:54:09', '2021-06-12 21:54:09', '北京');
INSERT INTO `user` VALUES (27, '小鹏', '是的000', 'c7e616822f366fb1b5e0756af498cc11d2c0862edcb32ca65882f622ff39de1b', '18381318296', '2021-06-12 21:54:50', '2021-06-12 21:54:50', '北京');
INSERT INTO `user` VALUES (28, 'admin', NULL, 'ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb', '18381318296', '2021-06-13 07:41:34', '2021-06-13 07:41:34', '北京市朝阳区');
INSERT INTO `user` VALUES (29, 'admin', NULL, 'ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb', '18381318296', '2021-06-13 07:43:18', '2021-06-13 07:43:18', '北京市朝阳区');
INSERT INTO `user` VALUES (30, '123', NULL, '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b', '1', '2021-06-13 08:02:33', '2021-06-13 08:02:33', '1');
INSERT INTO `user` VALUES (31, '12', '123', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', '123', '2021-06-13 08:05:02', '2021-06-13 08:05:02', '123');
INSERT INTO `user` VALUES (32, '12', NULL, 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', NULL, '2021-06-13 08:05:20', '2021-06-13 08:05:20', NULL);
INSERT INTO `user` VALUES (33, '123', NULL, 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', NULL, '2021-06-13 08:05:47', '2021-06-13 08:05:47', NULL);
INSERT INTO `user` VALUES (34, '111', '111', 'f6e0a1e2ac41945a9aa7ff8a8aaa0cebc12a3bcc981a929ad5cf810a090e11ae', '18381318296', '2021-06-13 08:37:26', '2021-06-13 08:37:26', '北京市朝阳区');

-- ----------------------------
-- Table structure for user_address
-- ----------------------------
DROP TABLE IF EXISTS `user_address`;
CREATE TABLE `user_address`  (
  `user_address_id` int NOT NULL AUTO_INCREMENT COMMENT '收获地址与联系人关系ID',
  `user_id` int NOT NULL COMMENT '联系人ID',
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '收货地址',
  PRIMARY KEY (`user_address_id`) USING BTREE,
  INDEX `PK_USERADDRESS`(`user_id`) USING BTREE,
  CONSTRAINT `PK_USERADDRESS` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_address
-- ----------------------------
INSERT INTO `user_address` VALUES (18, 16, '四川成都');
INSERT INTO `user_address` VALUES (19, 16, '四川成都');
INSERT INTO `user_address` VALUES (20, 16, '四川成都');
INSERT INTO `user_address` VALUES (21, 16, '四川成都');
INSERT INTO `user_address` VALUES (22, 16, '四川成都');
INSERT INTO `user_address` VALUES (23, 16, '四川成都');
INSERT INTO `user_address` VALUES (24, 16, '四川成都');
INSERT INTO `user_address` VALUES (26, 27, '北京');
INSERT INTO `user_address` VALUES (27, 31, '123');
INSERT INTO `user_address` VALUES (28, 34, '北京市朝阳区');
INSERT INTO `user_address` VALUES (29, 34, '四川成都');

SET FOREIGN_KEY_CHECKS = 1;
