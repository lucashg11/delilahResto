-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 29-01-2021 a las 01:22:52
-- Versión del servidor: 8.0.13-4
-- Versión de PHP: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `EoPSPFonoO`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

/* CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci; */

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'Hamburguesa', '350.00', 'hamburguesa', '2021-01-20 22:25:09', '2021-01-20 22:25:09'),
(2, 'Ensalada', '250.00', 'ensalada', '2021-01-20 22:25:30', '2021-01-20 22:25:30'),
(3, 'Sandwich Veggie', '450.00', 'Sandiwich Veggie', '2021-01-20 23:39:55', '2021-01-20 23:39:55'),
(4, 'Burga ATR1', '350.00', 'Hamburguesa con cheddar y panceta', '2021-01-24 19:51:18', '2021-01-24 19:51:18'),
(5, 'Burga ATR2', '350.00', 'Hamburguesa con cheddar y panceta', '2021-01-24 19:51:23', '2021-01-24 19:51:23');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
/* ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`); */

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
/* ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;*/
COMMIT; 

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
