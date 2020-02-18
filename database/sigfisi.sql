-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-02-2020 a las 23:12:58
-- Versión del servidor: 10.3.16-MariaDB
-- Versión de PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sigfisi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aulas`
--

CREATE TABLE `aulas` (
  `id_aula` int(10) NOT NULL,
  `lugar` varchar(100) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `aulas`
--

INSERT INTO `aulas` (`id_aula`, `lugar`, `cantidad`, `create_at`) VALUES
(1, 'Auditorio de la facultad de Ingeniería de Sistemas e Informática', 60, '2020-02-13 21:33:05'),
(2, 'Aula Magna', 40, '2020-02-13 21:33:05'),
(3, 'Laboratorio 3', 20, '2020-02-13 21:33:05');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comprar`
--

CREATE TABLE `comprar` (
  `id_comprar` int(10) NOT NULL,
  `id_usuario` int(10) DEFAULT NULL,
  `id_evento` int(10) DEFAULT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conferencias`
--

CREATE TABLE `conferencias` (
  `id_conferencia` int(10) NOT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `conferencias`
--

INSERT INTO `conferencias` (`id_conferencia`, `fecha_inicio`, `fecha_fin`, `create_at`) VALUES
(1, '2020-02-15', '2020-02-15', '2020-02-13 21:38:07'),
(2, '2020-02-17', '2020-02-18', '2020-02-13 21:38:07'),
(3, '2020-02-15', '2020-02-15', '2020-02-13 21:38:07'),
(4, '2020-02-24', '2020-02-24', '2020-02-13 21:38:07'),
(5, '2020-02-25', '2020-02-27', '2020-02-13 21:38:07'),
(6, '2020-02-28', '2020-02-29', '2020-02-13 21:38:07'),
(7, '2020-03-02', '2020-03-02', '2020-02-13 21:38:07'),
(8, '2020-03-16', '2020-03-19', '2020-02-13 21:38:07'),
(9, '2020-03-25', '2020-03-25', '2020-02-13 21:38:07'),
(10, '2020-03-13', '2020-03-13', '2020-02-13 21:38:07');


INSERT INTO `conferencias` (`id_conferencia`, `fecha_inicio`, `fecha_fin`, `create_at`) VALUES 
(12, '2020-03-13', '2020-03-13', '2020-02-13 21:38:07');
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id_evento` int(10) NOT NULL,
  `titulo` varchar(180) DEFAULT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  `imagen` varchar(300) DEFAULT NULL,
  `categoria` varchar(500) DEFAULT NULL,
  `nom_expositor` varchar(100) DEFAULT NULL,
  `ape_expositor` varchar(100) DEFAULT NULL,
  `id_aula` int(10) DEFAULT NULL,
  `id_conferencia` int(10) DEFAULT NULL,
  `id_solicitud` int(10) DEFAULT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id_evento`, `titulo`, `descripcion`, `imagen`, `categoria`, `nom_expositor`, `ape_expositor`, `id_aula`, `id_conferencia`, `id_solicitud`, `create_at`) VALUES
(1, 'Eneisoft', 'Encuentro nacional de estudiantes de Ingeniería de Software. Se realizarán 5 conferencias con exponentes nacionales e internacionales.', 'https://www.unmsm.edu.pe/eventos/adjuntos/Afiche_V_Encuentro.png', 'Conferencia', 'Julio Javier', 'Perez Huerta', 1, 1, 1, '2020-02-13 21:42:19'),
(2, 'Taller de Investigación', 'Redacción de Artículos Científicos de investigación y monitoreo', 'https://apoyamesoluciones.files.wordpress.com/2009/10/apoyame-soluciones-instituto-investigacion-unmsm.jpg?w=584', 'Taller', 'Carlos Alberto', 'Lopez Castro', 2, 2, 2, '2020-02-13 21:46:55'),
(3, 'Design Thinking', 'Los participantes podrán desarrollar su capacidad y habilidad para liderar el proceso de innovación centrado en las personas y la solución de los problemas.', 'https://www.unmsm.edu.pe/eventos/adjuntos/image003.jpg', 'Conferencia', 'Hector Domingo', 'Loyola Nieves', 1, 3, 3, '2020-02-13 21:55:02'),
(4, 'Taller de Django', 'Se implementará conceptos básicos sobre Python para lograr excelentes sistemas basados en este lenguaje.', 'https://argentinaenpython.com/django-girls-pyconar-2016/flyer.png', 'Taller', 'Victor', 'Alva', 3, 4, 4, '2020-02-13 21:58:27'),
(5, 'Taller de investigación y Posgrado', 'Fortalecimiento de las capacidades en asesoría de tesis de pre y posgrado', 'https://upg.administracion.unmsm.edu.pe/images/a-eventos/Page1.jpg', 'Taller', 'Pablo Andres', 'Aquino Aguiar', 2, 5, 5, '2020-02-13 22:01:33'),
(6, 'Taller de Python', 'Se implementará conceptos básicos sobre Python para lograr excelentes sistemas basados en este lenguaje.', 'https://imgv2-2-f.scribdassets.com/img/document/140387986/original/2efa1135f3/1579837406?v=1', 'Taller', 'Harold Andre', 'Huaccha Tene', 3, 6, 6, '2020-02-13 22:08:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudes`
--

CREATE TABLE `solicitudes` (
  `id_solicitud` int(10) NOT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `solicitudes`
--

INSERT INTO `solicitudes` (`id_solicitud`, `estado`, `create_at`) VALUES
(1, 'proceso', '2020-02-13 21:31:38'),
(2, 'aprobado', '2020-02-13 21:31:38'),
(3, 'aprobado', '2020-02-13 21:31:38'),
(4, 'aprobado', '2020-02-13 21:31:38'),
(5, 'aprobado', '2020-02-13 21:31:38'),
(6, 'proceso', '2020-02-13 21:31:38'),
(7, 'proceso', '2020-02-13 21:31:38'),
(8, 'proceso', '2020-02-13 21:31:38'),
(9, 'proceso', '2020-02-13 21:31:38'),
(10, 'proceso', '2020-02-13 21:31:38');

INSERT INTO `solicitudes` (`id_solicitud`, `estado`, `create_at`) VALUES (12, 'proceso', '2020-02-13 21:31:38');
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(10) NOT NULL,
  `nombres` varchar(45) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `dni` int(8) NOT NULL,
  `celular` int(9) DEFAULT NULL,
  `distrito` varchar(50) DEFAULT NULL,
  `direccion` varchar(200) DEFAULT NULL,
  `correo` varchar(200) DEFAULT NULL,
  `contraseña` varchar(200) DEFAULT NULL,
  `fecha_de_nacimiento` date DEFAULT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombres`, `apellidos`, `dni`, `celular`, `distrito`, `direccion`, `correo`, `contraseña`, `fecha_de_nacimiento`, `create_at`) VALUES
(1, 'Harold Andre', 'Huaccha Tene', 72217680, 978803091, 'Comas', 'Jr. Andahuaylas 123', 'harold.huaccha@unmsm.edu.pe', 'HH12345', '1998-04-24', '2020-02-13 21:28:15'),
(2, 'Javier Miguel', 'Obrea Torres', 62913724, 912034141, 'Lince', 'Av. Pershing 210', 'javier@gmail.com', 'Javier1234', '1990-02-04', '2020-02-13 21:28:15');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aulas`
--
ALTER TABLE `aulas`
  ADD PRIMARY KEY (`id_aula`);

--
-- Indices de la tabla `comprar`
--
ALTER TABLE `comprar`
  ADD PRIMARY KEY (`id_comprar`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_evento` (`id_evento`);

--
-- Indices de la tabla `conferencias`
--
ALTER TABLE `conferencias`
  ADD PRIMARY KEY (`id_conferencia`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id_evento`),
  ADD KEY `id_aula` (`id_aula`),
  ADD KEY `id_conferencia` (`id_conferencia`),
  ADD KEY `id_solicitud` (`id_solicitud`);

--
-- Indices de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD PRIMARY KEY (`id_solicitud`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aulas`
--
ALTER TABLE `aulas`
  MODIFY `id_aula` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `comprar`
--
ALTER TABLE `comprar`
  MODIFY `id_comprar` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `conferencias`
--
ALTER TABLE `conferencias`
  MODIFY `id_conferencia` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id_evento` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  MODIFY `id_solicitud` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comprar`
--
ALTER TABLE `comprar`
  ADD CONSTRAINT `comprar_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `comprar_ibfk_2` FOREIGN KEY (`id_evento`) REFERENCES `eventos` (`id_evento`);

--
-- Filtros para la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD CONSTRAINT `eventos_ibfk_1` FOREIGN KEY (`id_aula`) REFERENCES `aulas` (`id_aula`),
  ADD CONSTRAINT `eventos_ibfk_2` FOREIGN KEY (`id_conferencia`) REFERENCES `conferencias` (`id_conferencia`),
  ADD CONSTRAINT `eventos_ibfk_3` FOREIGN KEY (`id_solicitud`) REFERENCES `solicitudes` (`id_solicitud`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
