-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-12-30 13:06:32
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zhoushan`
--

-- --------------------------------------------------------

--
-- 表的结构 `collect`
--

CREATE TABLE `collect` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL,
  `user_id` int(10) NOT NULL,
  `landmark_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `comment`
--

CREATE TABLE `comment` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL,
  `landmark_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `comment_time` datetime DEFAULT NULL,
  `comment_content` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `landmark`
--

CREATE TABLE `landmark` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL,
  `title` varchar(32) DEFAULT NULL,
  `subTitle` varchar(64) DEFAULT NULL,
  `price` decimal(8,0) DEFAULT NULL,
  `pic` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `login`
--

CREATE TABLE `login` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL,
  `uname` varchar(32) NOT NULL,
  `upwd` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `login`
--

INSERT INTO `login` (`id`, `uname`, `upwd`) VALUES
(0000000001, 'tom', '123');

-- --------------------------------------------------------

--
-- 表的结构 `shopcart`
--

CREATE TABLE `shopcart` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL,
  `landmark_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `user_info`
--

CREATE TABLE `user_info` (
  `id` int(11) UNSIGNED ZEROFILL NOT NULL,
  `uname` varchar(32) NOT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `sex` varchar(1) DEFAULT NULL,
  `pic` varchar(32) DEFAULT NULL,
  `nickname` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `collect`
--
ALTER TABLE `collect`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `landmark`
--
ALTER TABLE `landmark`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shopcart`
--
ALTER TABLE `shopcart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `collect`
--
ALTER TABLE `collect`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `landmark`
--
ALTER TABLE `landmark`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `login`
--
ALTER TABLE `login`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `shopcart`
--
ALTER TABLE `shopcart`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `user_info`
--
ALTER TABLE `user_info`
  MODIFY `id` int(11) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
