-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 29-01-2021 a las 01:24:02
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
-- Estructura de tabla para la tabla `usuarios`
--

/* CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `usuario` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `correoElectronico` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `telefono` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `direccionDeEnvio` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `clave` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `isAdmin` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci; */

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `usuario`, `correoElectronico`, `telefono`, `direccionDeEnvio`, `clave`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(1, 'Juana', 'DiArco', 'juanitaLaTerrible', 'juanita@xxx.com', '123456789', 'Mi casa', '$2b$10$8EMcObP2iJ/dhm/Su5JG3eWhNNnmIK3MfpaeM0LqdcbzprZtSweSS', 1, '2021-01-20 22:20:43', '2021-01-20 22:20:43'),
(2, 'Pablo', 'Marmol', 'pablito', 'pablito@xxx.com', '1234567890', 'Mi otra casa', '$2b$10$6IiEEY0nP8J5D/jNVF2jZOh55axm.w0bPwHM7jN7gF5lpXvs.vWPC', 0, '2021-01-20 22:23:36', '2021-01-20 22:23:36'),
(3, 'Ricardo', 'Ruben', 'admin', 'admin@xxxx.com', '5555 5555', 'MI casa', '$2b$10$kO6qYOA.vCDRKPhXRMwlZeuNgC95uDJ3nXwnqHdiXoiO4TSnKw8bG', 1, '2021-01-24 19:42:47', '2021-01-24 19:42:47'),
(4, 'Ricardo', 'Ruben', 'test', 'test@xxxx.com', '5555 5555', 'MI casa', '$2b$10$fxhN6JvXp1XB5ETcCgLux.it6cJQplKCt18W6jiMwDIeyTseR6dYy', 0, '2021-01-24 19:43:04', '2021-01-24 19:43:04');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
/* ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`); */

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
/* ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5; */
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
