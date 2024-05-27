-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2024 at 10:40 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `data_mahasiswa`
--

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa_data`
--

CREATE TABLE `mahasiswa_data` (
  `id` int(111) NOT NULL,
  `nim_siswa` int(111) NOT NULL,
  `nama_siswa` varchar(222) NOT NULL,
  `ukt_siswa` int(111) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mahasiswa_data`
--

INSERT INTO `mahasiswa_data` (`id`, `nim_siswa`, `nama_siswa`, `ukt_siswa`) VALUES
(1, 190180132, 'Sigra Maulana', 1000000),
(2, 19018009, 'Epri tarigan', 200000),
(3, 19018129, 'dira ayu', 2400000),
(4, 190181239, 'wahyu tamara', 2400000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mahasiswa_data`
--
ALTER TABLE `mahasiswa_data`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nim_siswa` (`nim_siswa`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mahasiswa_data`
--
ALTER TABLE `mahasiswa_data`
  MODIFY `id` int(111) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
