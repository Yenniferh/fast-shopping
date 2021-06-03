CREATE DATABASE  IF NOT EXISTS `shop` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `shop`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: shop
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id_category` int(5) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` tinytext,
  PRIMARY KEY (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES 
(5938080,"Netflix","Available on Netflix"),
(2513184,"YouTube","Available on YouTube"),
(7917213,"Disney+","Available on Disney+"),
(9046623,"HBO+","Available on HBO+"),
(3892090,"Amazon Prime","Available on Amazon Prime");
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `id_item` int(9) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `id_product` int unsigned NOT NULL,
  `quantity` int NOT NULL,
  `subtotal` double NOT NULL,
  `id_order` int unsigned NOT NULL,
  PRIMARY KEY (`id_item`),
  KEY `id_product_idx` (`id_product`),
  KEY `id_order_idx` (`id_order`),
  CONSTRAINT `id_order` FOREIGN KEY (`id_order`) REFERENCES `orders` (`id_order`),
  CONSTRAINT `id_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id_order` int(9) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `ordered_at` date NOT NULL,
  `id_user` int unsigned NOT NULL,
  `total` double NOT NULL,
  PRIMARY KEY (`id_order`),
  KEY `id_user_idx` (`id_user`),
  CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `product_categories`
--

DROP TABLE IF EXISTS `product_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_categories` (
  `id_product_cat` int NOT NULL AUTO_INCREMENT,
  `id_prod` int unsigned NOT NULL,
  `id_cat` int unsigned NOT NULL,
  PRIMARY KEY (`id_product_cat`),
  KEY `id_prod_idx` (`id_prod`),
  KEY `id_cat_idx` (`id_cat`),
  CONSTRAINT `id_cat` FOREIGN KEY (`id_cat`) REFERENCES `categories` (`id_category`),
  CONSTRAINT `id_prod` FOREIGN KEY (`id_prod`) REFERENCES `products` (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `product_categories` WRITE;
/*!40000 ALTER TABLE `product_categories` DISABLE KEYS */;
-- (id_prod_cat, id_prod,id_cat)
INSERT INTO `product_categories` VALUES 
(1166602,3683863,2513184),
(1582175,2269042,5938080),
(1532175,2269042,2513184),
(1059422,3666784,5938080),
(1039472,3666784,2513184),
(1705308,9693458,9046623),
(1705109,9693458,5938080),
(1955940,3598047,3892090),
(1064521,7575840,7917213),
(1068521,7575840,3892090),
(1652481,4174891,2513184),
(1491152,4708186,5938080),
(1431172,4708186,2513184),
(1895261,8553708,9046623),
(1895169,8553708,5938080),
(1749182,4572956,5938080),
(1739172,4572956,2513184),
(1513095,4046209,2513184),
(1250829,8322961,2513184),
(1297089,5340464,5938080),
(1237079,5340464,2513184),
(1683418,3923051,2513184),
(1633384,2875410,7917213),
(1034384,2875410,3892090),
(1006001,5720780,7917213),
(1004001,5720780,3892090),
(1299643,7961228,9046623),
(1299149,7961228,5938080),
(1191444,7296847,3892090),
(1881219,4507336,5938080),
(1831279,4507336,2513184),
(1584693,7768262,5938080),
(1534673,7768262,2513184),
(1295928,5725335,2513184),
(1809585,4627477,3892090),
(1108647,4391755,2513184),
(1043519,8106693,2513184),
(1683311,4249016,5938080),
(1633371,4249016,2513184),
(1116958,8443031,2513184),
(1172779,4301780,7917213),
(1074779,4301780,3892090),
(1327143,4806823,2513184),
(1591866,3674658,9046623),
(1591169,3674658,5938080),
(1561058,6765613,2513184),
(1915200,7683220,7917213),
(1014200,7683220,3892090),
(1898405,8146450,7917213),
(1094405,8146450,3892090),
(1719838,8520501,2513184),
(1302411,9037181,2513184),
(1902528,2590696,5938080),
(1932578,2590696,2513184),
(1568184,6130561,2513184),
(1836590,8938204,5938080),
(1836570,8938204,2513184),
(1128696,5147599,2513184),
(1603436,4481848,9046623),
(1603139,4481848,5938080),
(1638698,7749955,2513184),
(1607888,5982424,5938080),
(1637878,5982424,2513184),
(1343185,9631154,5938080),
(1333175,9631154,2513184),
(1289941,4585585,2513184),
(1898379,4887317,3892090),
(1129906,9974570,7917213),
(1024906,9974570,3892090),
(1445337,5371291,2513184),
(1280911,4964160,7917213),
(1084911,4964160,3892090),
(1851776,2105145,2513184),
(1578892,6351071,2513184),
(1456640,3091803,2513184),
(1258519,6054421,2513184),
(1680340,8153575,2513184),
(1604326,4123287,3892090),
(1093612,4757464,5938080),
(1033672,4757464,2513184),
(1613408,8777310,7917213),
(1014408,8777310,3892090),
(1785293,3836683,2513184),
(1765310,9717065,2513184),
(1357295,4428469,2513184),
(1913142,3565583,2513184),
(1629063,6948994,5938080),
(1639073,6948994,2513184),
(1523970,9749749,2513184),
(1663681,4581077,3892090),
(1782337,3691508,9046623),
(1782139,3691508,5938080),
(1910685,5469547,3892090),
(1662654,9116933,2513184),
(1669079,8416596,5938080),
(1639079,8416596,2513184),
(1368208,6056594,5938080),
(1338278,6056594,2513184),
(1604847,7909909,2513184),
(1187048,5697139,2513184),
(1532419,3887553,2513184),
(1660754,7971339,2513184),
(1560141,4436021,2513184),
(1214732,8187210,7917213),
(1014732,8187210,3892090),
(1129464,3509054,5938080),
(1139474,3509054,2513184),
(1860814,3141516,5938080),
(1830874,3141516,2513184),
(1411848,5172415,2513184),
(1776174,4217061,2513184),
(1186153,2983720,7917213),
(1084153,2983720,3892090),
(1045630,6744077,3892090),
(1223586,3497810,7917213),
(1024586,3497810,3892090),
(1806272,8013909,2513184),
(1511839,6458478,9046623),
(1511139,6458478,5938080),
(1308618,9287704,5938080),
(1338678,9287704,2513184),
(1383577,9485069,2513184),
(1514892,2172403,2513184),
(1478019,5656437,3892090),
(1770575,7612822,5938080),
(1730575,7612822,2513184),
(1245225,4057711,2513184),
(1657182,6753605,2513184),
(1426688,6963682,5938080),
(1436678,6963682,2513184),
(1138906,2102636,5938080),
(1138976,2102636,2513184),
(1000718,5488296,5938080),
(1030778,5488296,2513184),
(1132364,9370981,2513184),
(1218150,5570108,9046623),
(1218159,5570108,5938080),
(1427418,9710969,2513184),
(1467431,5938080,7917213),
(1064431,5938080,3892090),
(1643404,2513184,5938080),
(1633474,2513184,2513184),
(1890906,7917213,2513184),
(1788309,9046623,2513184),
(1445483,3892090,7917213),
(1044483,3892090,3892090);
/*!40000 ALTER TABLE `product_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id_product` int(9) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` tinytext,
  `price` double NOT NULL,
  `stock` int NOT NULL,
  PRIMARY KEY (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES 
(3683863,"Hunger Games, The","ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec",26.83,70),
(2269042,"Ethel","pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit",678.2,62),
(3666784,"Ghosts of Mars","sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce",688.16,38),
(9693458,"China 9, Liberty 37 (Amore, piombo e furore)","vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique",580.44,86),
(3598047,"L!fe Happens","nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in",712.13,100),
(7575840,"Brideshead Revisited","rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat",1232.45,47),
(4174891,"Holy Matrimony","quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet",783.43,53),
(4708186,"Legacy, The","cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis",1354.24,42),
(8553708,"High Cost of Living, The","sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat",1296.59,28),
(4572956,"Gold Rush, The","nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam",699.62,57),
(4046209,"Legion of the Dead","sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel",822.44,52),
(8322961,"High on Crack Street: Lost Lives in Lowell","quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend",1132.46,93),
(5340464,"Django Unchained","in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum",925.07,14),
(3923051,"The Time Being","augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer",1475.49,68),
(2875410,"Guantanamera","ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui",313.67,54),
(5720780,"Night Catches Us","massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum",731.95,14),
(7961228,"Episode 3: Enjoy Poverty","duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac",651.57,10),
(7296847,"Camouflage","donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet",349.09,17),
(4507336,"High School High","tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet",976.7,44),
(7768262,"Lana Turner","interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec",610.06,21),
(5725335,"Atomic Rulers of the World","ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue",1270.78,10),
(4627477,"Istanbul","sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo",1002.54,32),
(4391755,"Rocky","tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus",1234.89,35),
(8106693,"Seven Sinners","cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec",386.14,23),
(4249016,"Oppressed Majority","eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id",1246.56,70),
(8443031,"Terrorist","quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel",1075.47,92),
(4301780,"Love Sick Love","nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing",53.1,31),
(4806823,"One Man Against the Organization","elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante",147.45,37),
(3674658,"Fighting Elegy (Kenka erejii)","sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel",309.87,79),
(6765613,"Tess of the Storm Country","semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel",851.47,82),
(7683220,"Class of 92, The","venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis",619.64,88),
(8146450,"Zombies of Mora Tau","quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer",1152.92,95),
(8520501,"Truly Human (Et rigtigt menneske)","malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit",1308.26,20),
(9037181,"Men with Guns","morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede",342.18,44),
(2590696,"To Begin Again (Volver a Empezar)","pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam",425.46,54),
(6130561,"Beyond Silence (Jenseits der Stille)","est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit",1392.93,60),
(8938204,"Stripes","lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum",800.65,36),
(5147599,"H.H. Holmes: America's First Serial Killer","est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl",1038.26,25),
(4481848,"Brandon Teena Story, The","massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam",42.21,80),
(7749955,"Lake Tahoe","aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante",1135.22,41),
(5982424,"Short Film About John Bolton, A","id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc",181.63,80),
(9631154,"Every Which Way But Loose","semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse",48.89,87),
(4585585,"Jönssonligan på Mallorca","molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",1036.28,74),
(4887317,"Sea Gull, The","erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo",382.33,97),
(9974570,"You, Me and Dupree","lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum",1193.3,67),
(5371291,"Escaflowne: The Movie (Escaflowne)","platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat",142.0,94),
(4964160,"Vicky Cristina Barcelona","sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis",509.8,25),
(2105145,"Trinity and Beyond","nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis",693.63,44),
(6351071,"Perfect Fake, A","vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel",13.03,57),
(3091803,"Weight of the Nation","velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo",496.4,47),
(6054421,"Arthur Christmas","mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis",451.3,17),
(8153575,"Must Love Dogs","metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce",64.52,42),
(4123287,"Eating Raoul","donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac",239.76,69),
(4757464,"Lonely Are the Brave","molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur",395.31,73),
(8777310,"I Got the Hook Up","ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at",114.07,41),
(3836683,"War of the Roses, The","phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac",1420.72,18),
(9717065,"Cabin in the Woods, The","iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget",1381.92,32),
(4428469,"Visitors, The (Visiteurs, Les)","purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum",1265.27,92),
(3565583,"Mandela: Long Walk to Freedom","neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in",316.8,21),
(6948994,"Valentin (Valentín)","congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue",1438.54,72),
(9749749,"Head","non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci",1117.68,31),
(4581077,"Surfwise","tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula",340.94,34),
(3691508,"Let the Bullets Fly","primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices",826.22,48),
(5469547,"Rocket from Calabuch, The (Calabuch)","dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet",169.06,60),
(9116933,"Book of Fate, The (Kohtalon kirja)","blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien",982.97,30),
(8416596,"Trouble in Paradise","vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis",409.65,16),
(6056594,"Portrait in Black","eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus",1025.97,42),
(7909909,"Butchered","lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam",1002.47,63),
(5697139,"Moon Zero Two","aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed",171.43,42),
(3887553,"The Deep Six","nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus",36.83,32),
(7971339,"What a Way to Go!","maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi",1464.92,10),
(4436021,"All the Fine Young Cannibals","rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id",1454.19,31),
(8187210,"Happiness Is in the Field","in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut",1148.18,99),
(3509054,"Eklavya: The Royal Guard","consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien",1191.34,40),
(3141516,"Arabian Nights","nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer",784.39,53),
(5172415,"Fallen Sparrow, The","quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus",207.98,75),
(4217061,"Christmas Carol: The Musical","vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a",397.75,75),
(2983720,"River Runs Through It, A","rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend",1331.51,19),
(6744077,"Transmorphers","justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique",1394.22,34),
(3497810,"Yellow Sky","rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor",1102.56,17),
(8013909,"Demoted","sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at",1193.0,52),
(6458478,"Dirty Shame, A","ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac",337.64,17),
(9287704,"Newcastle","ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio",612.84,43),
(9485069,"Day The Earth Froze, The (Sampo)","quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in",340.83,43),
(2172403,"Diary of a Chambermaid","nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci",637.26,24),
(5656437,"Yatterman (Yattâman)","magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum",684.5,14),
(7612822,"South, The (Lomalla)","etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl",765.66,96),
(4057711,"Karol: A Man Who Became Pope","mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui",257.01,95),
(6753605,"Wee Willie Winkie","vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet",1004.52,31),
(6963682,"Nosferatu the Vampyre","tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam",1350.41,58),
(2102636,"To Each His Own Cinema","phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis",724.99,39),
(5488296,"Getting Back to Abnormal","in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu",801.65,57),
(9370981,"Carry on Screaming!","eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in",192.78,51),
(5570108,"Disney Sing Along Songs: Under the Sea","auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim",1336.98,71),
(9710969,"Seance (Kôrei)","proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget",420.15,77),
(5938080,"Raja","augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna",389.94,51),
(2513184,"High Plains Drifter","nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent",1433.45,32),
(7917213,"Love Walked In","sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin",13.04,13),
(9046623,"Life and Times of Allen Ginsberg, The","cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum",52.18,95),
(3892090,"P.S. I Love You","vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum",295.32,28);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int unsigned NOT NULL,
  `full_name` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-02 19:05:44
