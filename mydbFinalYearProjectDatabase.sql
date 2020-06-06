CREATE DATABASE  IF NOT EXISTS `mydb` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `mydb`;
-- MySQL dump 10.13  Distrib 5.7.30, for Linux (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	5.7.30-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `applicantdetails`
--

DROP TABLE IF EXISTS `applicantdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `applicantdetails` (
  `appid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `college` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `tenthmarks` int(11) DEFAULT NULL,
  `twelfthmarks` int(11) DEFAULT NULL,
  `engggpa` int(11) DEFAULT NULL,
  `skills` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`appid`),
  UNIQUE KEY `applicationid_UNIQUE` (`appid`)
) ENGINE=InnoDB AUTO_INCREMENT=181 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applicantdetails`
--

LOCK TABLES `applicantdetails` WRITE;
/*!40000 ALTER TABLE `applicantdetails` DISABLE KEYS */;
INSERT INTO `applicantdetails` VALUES (1,'Amreen','DSCE','amreen@gmail.com',80,80,9,'yes'),(2,'Zain','DSCE','zain@gmail.com',95,90,8,'yes'),(3,'Avi','DSCE','avi@gmail.com',85,85,9,'yes'),(4,'Aneesh','DSCE','hababi@gmail.com',70,90,9,'yes'),(19,'Avi M ','dsce','avi@gmail.com',60,86,9,'yes'),(32,'Rex AVi','DSCE','avi@gmail.com',80,90,8,'yes'),(55,'REEN','DSCE','ammer@gmail.com',77,88,9,'yes'),(56,'Bhargav','DSCE','bhargav@gmail.com',85,90,9,'yes'),(59,'Amreen Hasheem Siraj','DSCE','amreen.hasheem@gmail.com',99,50,8,'yes'),(66,'Naresh','DSCE','narru@gmail.com',90,85,9,'yes'),(77,'Chris','DSCE','chris@gmail.com',85,99,9,'yes'),(99,'Test User','Test College','test@test.com',90,90,8,'yes'),(180,'Zayd','DSCE','zayd@gmail.com',99,90,9,'yes');
/*!40000 ALTER TABLE `applicantdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userquestionanswer`
--

DROP TABLE IF EXISTS `userquestionanswer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userquestionanswer` (
  `userid` int(11) NOT NULL,
  `serialno` int(11) NOT NULL,
  `questions` varchar(1000) DEFAULT NULL,
  `correctanswers` varchar(1000) DEFAULT NULL,
  `givenanswers` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`userid`,`serialno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userquestionanswer`
--

LOCK TABLES `userquestionanswer` WRITE;
/*!40000 ALTER TABLE `userquestionanswer` DISABLE KEYS */;
INSERT INTO `userquestionanswer` VALUES (103,1,'What is constructor overloading?','A class can have any number of constructors. These constructors will have different list of arguments. It is called constructor overloading. ','A class can have any number of constructors. These constructors will have different list of arguments. It is called constructor overloading. '),(103,2,'What are the fundamental principles of object oriented programming?','Inheritance, Abstraction, Polymorphism, Encapsulation','Inheritance, Abstraction, Polymorphism, Encapsulation'),(103,3,'What is the difference between constructor and method?','Constructor is a special member of a class which is used to create the objects to the class. It is special because it will have same name as class. It will have no return type.','Constructor is a special member of a class which is used to create the objects to the class. It is special because it will have same name as class. It will have no return type.'),(103,4,'Can we overload the main() method?','Yes, we can overload a main() method. A class can have any number of main() methods. But, one of those must be in the form “public static void main(String[] args)” in order to start the execution.','No Answer Given'),(103,5,'What is an operating system?','The operating system is a software program that facilitates computer hardware to communicate and operate with the computer software. It is the most important part of a computer system without it computer is just like a box','It is software system that helps the computer hardware, software and memory communicate'),(103,6,'What is virtual memory?','Virtual memory is a very useful memory management technique which enables processes to execute outside of memory. This technique is especially used when an executing program cannot fit in the physical memory.','Virtual memory is a very useful memory management technique which enables processes to execute outside of memory'),(103,7,'What is the difference between logical address space and physical address space?','Logical address space specifies the address that is generated by CPU. On the other hand physical address space specifies the address that is seen by the memory unit.','Logical address space specifies the address that is generated by CPU. On the other hand physical address space specifies the address that is seen by the memory unit.'),(104,1,'What is the difference between constructor and method?','Constructor is a special member of a class which is used to create the objects to the class. It is special because it will have same name as class. It will have no return type.','Constructor is a special member of a class which is used to create the objects to the class. It is special because it will have same name as class. It will have no return type.'),(104,2,'What is constructor overloading?','A class can have any number of constructors. These constructors will have different list of arguments. It is called constructor overloading. ','A class can have any number of constructors. These constructors will have different list of arguments. It is called constructor overloading. ');
/*!40000 ALTER TABLE `userquestionanswer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `userid` int(11) NOT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `college` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Fname','Lname','testuser','*%Rfhy%&(','test@test.com','1234567890','testcollege'),(103,'Amreen ','Hasheem','amreen_hash','!@#$%tyily','amreen@gmail.com','9945674244','dsce'),(104,'Avishek','M','avi_chaos','86$$%#rf&*','avu@gmail.com','8765325899','bms'),(105,'Zain ','Mehkri','zak_mk','^83#7yh','zak@gmail.com','98642567','pes'),(106,'Aneesh','S','gamer@gmail.com','^3$@79r8(','gamer@gmail.com','8854268655','rv');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-06 13:25:04
