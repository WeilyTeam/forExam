# Host: 127.0.0.1  (Version: 5.5.24)
# Date: 2021-06-13 18:36:08
# Generator: MySQL-Front 5.3  (Build 4.13)

/*!40101 SET NAMES utf8 */;

#
# Source for table "imginfo"
#

CREATE TABLE `imginfo` (
  `Id` int(11) NOT NULL,
  `imgurl` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "imginfo"
#

REPLACE INTO `imginfo` VALUES (1,'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2017%2F05%2F02%2FFpwUVDGIFlq1nZBkF-xIY-pUqrMf.jpg%3FimageView2%2F2%2Fw%2F580%2Fh%2F580%2Fq%2F75%2Fformat%2Fjpg&refer=http%3A%2F%2Fimg.yzcdn.cn&app=2002&size=f9999,10000&q='),(1,'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.shejipi.com%2Fwp-content%2Fuploads%2F2017%2F03%2Fbanmaxian8.jpeg&refer=http%3A%2F%2Fcdn.shejipi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626137927&t=148b503c1653324c510aceacd4478f'),(1,'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg4.tbcdn.cn%2Ftfscom%2Fi4%2FTB1EPWvIFXXXXa6XVXXXXXXXXXX_%21%210-item_pic.jpg_310x310.jpg&refer=http%3A%2F%2Fimg4.tbcdn.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626137944&t=570d96e069');

#
# Source for table "music"
#

CREATE TABLE `music` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `url` varchar(300) DEFAULT NULL,
  `singer` varchar(10) DEFAULT NULL,
  `someDesc` varchar(50) DEFAULT NULL,
  `publishTime` date DEFAULT NULL,
  `song` varchar(20) DEFAULT NULL,
  `imginfo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

#
# Data for table "music"
#

REPLACE INTO `music` VALUES (1,49,'https://mp3.9ku.com/hot/2008/09-21/175930.mp3','周杰伦','关于这首歌','2020-05-05','稻香','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi3.article.fd.zol-img.com.cn%2Fg5%2FM00%2F02%2F02%2FChMkJ1egb-CIIUsfAAFe0bF2TYoAAUF3wCDIdIAAV7p389.jpg&refer=http%3A%2F%2Fi3.article.fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?'),(2,49,'https://mp32.9ku.com/upload/128/2020/05/18/1004197.mp3','一支榴莲','关于这首歌','2020-05-05','海底','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi3.article.fd.zol-img.com.cn%2Fg5%2FM00%2F02%2F02%2FChMkJ1egb-CIIUsfAAFe0bF2TYoAAUF3wCDIdIAAV7p389.jpg&refer=http%3A%2F%2Fi3.article.fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?'),(3,48,'https://mp32.9ku.com/upload/128/2018/02/09/875689.mp3','买辣椒也用券','关于这首歌','2020-05-05','起风了','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi3.article.fd.zol-img.com.cn%2Fg5%2FM00%2F02%2F02%2FChMkJ1egb-CIIUsfAAFe0bF2TYoAAUF3wCDIdIAAV7p389.jpg&refer=http%3A%2F%2Fi3.article.fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?'),(4,47,'https://mp32.9ku.com/upload/128/2018/02/09/875689.mp3','原版','关于这首歌','2020-05-05','起风了','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi3.article.fd.zol-img.com.cn%2Fg5%2FM00%2F02%2F02%2FChMkJ1egb-CIIUsfAAFe0bF2TYoAAUF3wCDIdIAAV7p389.jpg&refer=http%3A%2F%2Fi3.article.fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?');

#
# Source for table "users"
#

CREATE TABLE `users` (
  `userPhone` char(11) NOT NULL DEFAULT '',
  `password` varchar(300) NOT NULL DEFAULT '',
  `userId` int(1) NOT NULL AUTO_INCREMENT,
  `userName` varchar(10) NOT NULL DEFAULT '',
  `status` int(11) NOT NULL DEFAULT '1',
  `aboutme` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;

#
# Data for table "users"
#

REPLACE INTO `users` VALUES ('13302220222','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',47,'test',1,'快乐的享受生活'),('15828698745','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',48,'test',1,'快到碗里来'),('123','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',49,'baobao',0,'加入我们吧');
