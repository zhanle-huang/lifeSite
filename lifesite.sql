/*
 Navicat Premium Data Transfer

 Source Server         : mydb
 Source Server Type    : MySQL
 Source Server Version : 50539
 Source Host           : localhost:3306
 Source Schema         : lifesite

 Target Server Type    : MySQL
 Target Server Version : 50539
 File Encoding         : 65001

 Date: 18/10/2021 17:57:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for articlecollect
-- ----------------------------
DROP TABLE IF EXISTS `articlecollect`;
CREATE TABLE `articlecollect`  (
  `id` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `articleId` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createTime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `articleId`(`articleId`) USING BTREE,
  INDEX `phone`(`phone`) USING BTREE,
  CONSTRAINT `articlecollect_ibfk_1` FOREIGN KEY (`articleId`) REFERENCES `articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `articlecollect_ibfk_2` FOREIGN KEY (`phone`) REFERENCES `users` (`phone`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of articlecollect
-- ----------------------------
INSERT INTO `articlecollect` VALUES ('1234567890000001', '1234567890000001', '12345678911', NULL);

-- ----------------------------
-- Table structure for articlecomments
-- ----------------------------
DROP TABLE IF EXISTS `articlecomments`;
CREATE TABLE `articlecomments`  (
  `id` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `articleId` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `articleId`(`articleId`) USING BTREE,
  INDEX `phone`(`phone`) USING BTREE,
  CONSTRAINT `articlecomments_ibfk_1` FOREIGN KEY (`articleId`) REFERENCES `articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `articlecomments_ibfk_2` FOREIGN KEY (`phone`) REFERENCES `users` (`phone`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of articlecomments
-- ----------------------------
INSERT INTO `articlecomments` VALUES ('1234567859000002', '1234567890000001', '12345678912', '123456465', NULL);
INSERT INTO `articlecomments` VALUES ('1234567890000001', '1234567890000001', '12345678911', '21111', NULL);

-- ----------------------------
-- Table structure for articles
-- ----------------------------
DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles`  (
  `id` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `categoryId` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `author` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` longblob NULL,
  `readNum` int(10) NOT NULL DEFAULT 0,
  `recommentNum` int(10) NOT NULL DEFAULT 0,
  `likeNum` int(10) NOT NULL DEFAULT 0,
  `createTime` timestamp NULL DEFAULT NULL,
  `updateTime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `categoryId`(`categoryId`) USING BTREE,
  INDEX `author`(`author`) USING BTREE,
  CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categorys` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `articles_ibfk_2` FOREIGN KEY (`author`) REFERENCES `users` (`phone`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of articles
-- ----------------------------
INSERT INTO `articles` VALUES ('1234567890000001', '1234567890000001', '111', '12345678911', NULL, 0, 0, 0, NULL, NULL);
INSERT INTO `articles` VALUES ('1234567890000002', '1234567890000002', '222', '12345678912', NULL, 0, 0, 0, NULL, NULL);

-- ----------------------------
-- Table structure for categorys
-- ----------------------------
DROP TABLE IF EXISTS `categorys`;
CREATE TABLE `categorys`  (
  `id` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `typeName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT NULL,
  `updateTime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of categorys
-- ----------------------------
INSERT INTO `categorys` VALUES ('1234567890000001', '分类1', 'type1', NULL, NULL);
INSERT INTO `categorys` VALUES ('1234567890000002', '分类2', 'type2', NULL, NULL);
INSERT INTO `categorys` VALUES ('1234567890000003', '分类3', 'type3', NULL, NULL);

-- ----------------------------
-- Table structure for demo
-- ----------------------------
DROP TABLE IF EXISTS `demo`;
CREATE TABLE `demo`  (
  `id` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `author` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `downName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `downLoadNum` int(10) NULL DEFAULT 0,
  `readNum` int(10) NULL DEFAULT 0,
  `likeNum` int(10) NULL DEFAULT 0,
  `createTime` timestamp NULL DEFAULT NULL,
  `updateTime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `author`(`author`) USING BTREE,
  CONSTRAINT `demo_ibfk_1` FOREIGN KEY (`author`) REFERENCES `users` (`phone`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of demo
-- ----------------------------
INSERT INTO `demo` VALUES ('1234567890000001', '标题1', '12345678911', 'xxx', '测试1', 0, 0, 0, NULL, NULL);
INSERT INTO `demo` VALUES ('123456789000002', '标题2', '12345678911', 'xxxx', '测试2', 0, 0, 0, NULL, NULL);

-- ----------------------------
-- Table structure for democollect
-- ----------------------------
DROP TABLE IF EXISTS `democollect`;
CREATE TABLE `democollect`  (
  `id` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `demoId` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createTime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `phone`(`phone`) USING BTREE,
  INDEX `demoId`(`demoId`) USING BTREE,
  CONSTRAINT `democollect_ibfk_1` FOREIGN KEY (`phone`) REFERENCES `users` (`phone`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `democollect_ibfk_2` FOREIGN KEY (`demoId`) REFERENCES `demo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of democollect
-- ----------------------------
INSERT INTO `democollect` VALUES ('1234567890000001', '1234567890000001', '12345678911', NULL);
INSERT INTO `democollect` VALUES ('1234567890000002', '123456789000002', '12345678911', NULL);

-- ----------------------------
-- Table structure for leaving
-- ----------------------------
DROP TABLE IF EXISTS `leaving`;
CREATE TABLE `leaving`  (
  `id` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `phone`(`phone`) USING BTREE,
  CONSTRAINT `leaving_ibfk_1` FOREIGN KEY (`phone`) REFERENCES `users` (`phone`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of leaving
-- ----------------------------
INSERT INTO `leaving` VALUES ('1234567890000001', '12345678911', '111', NULL);
INSERT INTO `leaving` VALUES ('1234567890000002', '12345678911', '222', NULL);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `identityType` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1',
  `src` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `token` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT NULL,
  `updateTime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`phone`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('12345678911', '123456', '测试1', NULL, '1', NULL, '0123456789abcdef', NULL, NULL);
INSERT INTO `users` VALUES ('12345678912', '123456', '测试2', NULL, '2', NULL, 'abcdef1234567890', NULL, NULL);

-- ----------------------------
-- View structure for articlecommentview
-- ----------------------------
DROP VIEW IF EXISTS `articlecommentview`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `articlecommentview` AS SELECT
	articlecomments.id, 
	articlecomments.articleId, 
	articlecomments.phone, 
	articlecomments.content, 
	articlecomments.createTime, 
	users.`name` AS userName, 
	users.src AS userSrc
FROM
	users
	INNER JOIN
	articlecomments
	ON 
		users.phone = articlecomments.phone ;

-- ----------------------------
-- View structure for articleview
-- ----------------------------
DROP VIEW IF EXISTS `articleview`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `articleview` AS SELECT
	articles.id, 
	articles.categoryId, 
	articles.title, 
	articles.author, 
	articles.updateTime, 
	articles.createTime, 
	articles.likeNum, 
	articles.readNum, 
	articles.content, 
	articles.recommentNum, 
	categorys.`name` AS categoryName, 
	categorys.typeName AS categoryType, 
	users.`name` AS userName
FROM
	categorys
	INNER JOIN
	articles
	ON 
		categorys.id = articles.categoryId
	INNER JOIN
	users
	ON 
		articles.author = users.phone ;

-- ----------------------------
-- View structure for demoview
-- ----------------------------
DROP VIEW IF EXISTS `demoview`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `demoview` AS SELECT
	demo.id, 
	demo.title, 
	demo.author, 
	demo.path, 
	demo.downName, 
	demo.downLoadNum, 
	demo.readNum, 
	demo.likeNum, 
	demo.createTime, 
	demo.updateTime, 
	users.`name` AS userName, 
	users.src AS userSrc
FROM
	users
	INNER JOIN
	demo
	ON 
		users.phone = demo.author ;

-- ----------------------------
-- View structure for leavingview
-- ----------------------------
DROP VIEW IF EXISTS `leavingview`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `leavingview` AS SELECT
	leaving.id, 
	leaving.phone, 
	leaving.content, 
	leaving.createTime, 
	users.`name` AS userName, 
	users.src AS userSrc
FROM
	users
	INNER JOIN
	leaving
	ON 
		users.phone = leaving.phone ;

SET FOREIGN_KEY_CHECKS = 1;
