-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-06-2023 a las 21:55:07
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `reservadb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `codigo_reserva` varchar(255) NOT NULL,
  `fecha_reserva` date NOT NULL,
  `apellido_autor` varchar(255) NOT NULL,
  `nombre_autor` varchar(255) NOT NULL,
  `correo_electronico_autor` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `codigo_reserva`, `fecha_reserva`, `apellido_autor`, `nombre_autor`, `correo_electronico_autor`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, '01', '2023-06-07', 'Benitez', 'Dante', 'benitezdante123@gmail.com', '2023-06-21 19:42:15', '2023-06-21 19:42:15', NULL),
(2, '01', '2023-06-07', 'Benitez', 'Dante', 'benitezdante123@gmail.com', '2023-06-21 19:42:38', '2023-06-21 19:42:38', NULL),
(3, '01', '2023-06-07', 'Benitez', 'Dante', 'benitezdante123@gmail.com', '2023-06-21 19:43:09', '2023-06-21 19:43:09', NULL),
(4, '01', '2023-06-07', 'Benitez', 'Dante', 'benitezdante123@gmail.com', '2023-06-21 19:43:37', '2023-06-21 19:43:37', NULL),
(5, '01', '2023-06-21', 'Benitez', 'Dante', '', '2023-06-21 19:44:09', '2023-06-21 19:44:09', NULL),
(6, '01', '2023-06-21', 'Benitez', 'Dante', 'benitezdante123@gmail.com', '2023-06-21 19:44:13', '2023-06-21 19:44:13', NULL),
(7, '01', '2023-06-21', 'Benitez', 'Dante', 'benitezdante123@gmail.com', '2023-06-21 19:45:19', '2023-06-21 19:45:19', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
