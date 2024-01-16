import React from "../icons/React.astro";
import Html from "../icons/HtmlIcon.astro";
import Css from "../icons/Css.astro";
import Laravel from "../icons/Laravel.astro";
import Php from "../icons/Php.astro";
import Vite from "../icons/Vite.astro";
import JavaScript from "../icons/JavaScript.astro";
import AstroI from "../icons/AstroI.astro";
import Mysql from "../icons/Mysql.astro";

export const TAGS = {
  HTML: {
    nombre: "HTML",
    clase: "background-color: rgb(227 79 38 /0.3);",
    Icono: Html,
  },
  CSS: {
    nombre: "CSS",
    clase: "background-color: rgb(39 155 211 / 0.3);",
    Icono: Css,
  },
  JavaScript: {
    nombre: "JavaScript",
    clase: "background-color: rgb(240 219 79 / 0.6); ",
    Icono: JavaScript,
  },
  PHP: {
    nombre: "PhP",
    clase: "background-color: rgb(134 137 173 / 0.6); ",
    Icono: Php,
  },
  LARAVEL: {
    nombre: "Laravel",
    clase: "background-color: rgb(0 0 0 / 0.5);",
    Icono: Laravel,
  },
  REACT: {
    nombre: "React",
    clase: "background-color: rgb(7 187 221 / 0.4); ",
    Icono: React,
  },
  Astro: {
    nombre: "Astro",
    clase: "background-color: rgb(0 0 0 / 0.5); ",
    Icono: AstroI,
  },
  Vite: {
    nombre: "Vite",
    clase: "background-color: rgb(0 0 0/ 0.6); ",
    Icono: Vite,
  },
  Mysql: {
    nombre: "MySQL",
    clase: "background-color: rgb(0 117 143 / 0.2); ",
    Icono: Mysql,
  },
};

export const PROYECTOS = [
  /*{
    titulo: "Tienda de muebles",
    descripcion:
      "Página estática de muebles creada con HTML y CSS. Diseñada con entusiasmo para aprender y perfeccionar mis habilidades.",
    fecha: "Enero 2023",
    link: "https://github.com/FMColdays/Tienda-de-muebles",
    imagen: "/img/proyecto2img.webp",
    tecnologias: [TAGS.HTML, TAGS.CSS],
  },
  {
    titulo: "Administrador de pacientes",
    descripcion:
      "Desarrollé un administrador  para el seguimiento de pacientes de una veterinaria para mi aprendizaje en React y Vite.",
    fecha: "Julio 2023",
    link: "https://github.com/FMColdays/citas_react_vite",
    imagen: "/img/proyecto3img.webp",
    tecnologias: [TAGS.REACT, TAGS.Vite],
  },
  */
  {
    titulo: "Evaluación de trastornos emocionales",
    descripcion:
      "Desarrollé una aplicación en Laravel que implementa diversos tests de trastornos emocionales. Estos tests son llevados a cabo por estudiantes universitarios, con la finalidad de explorar y comprender de manera práctica la detección de cada uno de estos trastornos.",
    fecha: "Octubre 2023",
    repositorio: "https://github.com/FMColdays/TrastornoTest",
    pagina: "https://tecnmtest.com/login",
    imagen: "/img/proyecto1img.webp",
    tecnologias: [TAGS.LARAVEL, TAGS.PHP],
  },
  {
    titulo: "Salón de eventos",
    descripcion:
      "Desarrollada desde cero utilizando Laravel, esta aplicación ofrece una gestión de alquiler de salones de eventos. Los salones disponibles están diseñados para adaptarse a diversas necesidades donde los usuarios seleccionar entre una variedad de paquetes personalizables",
    fecha: "Mayo 2023",
    repositorio: ["https://github.com/FMColdays/SalonDeEventos"],
    imagen: "/img/proyecto4img.webp",
    tecnologias: [TAGS.LARAVEL],
  },
  /*{
    titulo: "Cotizador de criptomonedas",
    descripcion:
      "Esta app fue realizada con React y Vite en la cual veremos como tomar 10 criptomonedas y cotizarlas en tiempo real para obtener su precio al momento.",
    fecha: "Febrero 2023",
    link: "https://github.com/FMColdays/cotizador-de-criptomonedas",
    imagen: "/img/proyecto5img.webp",
    tecnologias: [TAGS.REACT, TAGS.Vite],
  },
  {
    titulo: "Control de Presupuesto",
    descripcion:
      "Una aplicación de control de presupuesto desarrollada con React y Vite. Esta herramienta te permite gestionar tus finanzas de manera efectiva, con funciones para realizar un seguimiento detallado de ingresos y gastos, establecer presupuestos mensuales y visualizarlo de manera gráfica.",
    fecha: "Marzo 2023",
    link: "https://github.com/FMColdays/Administrador-de-gastos",
    imagen: "/img/proyecto6img.webp",
    tecnologias: [TAGS.REACT, TAGS.Vite],
  },*/
];
