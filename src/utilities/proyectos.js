import React from "../icons/React.astro";
import Nodejs from "../icons/Nodejs.astro";
import Html from "../icons/HtmlIcon.astro";
import Css from "../icons/Css.astro";
import Laravel from "../icons/Laravel.astro";
import Php from "../icons/Php.astro";
import Vite from "../icons/Vite.astro";

export const TAGS = {
  REACT: {
    nombre: "react",
    class: "background-color: rgb(7 187 221 / 0.4); ",
    icono: React,
  },
  HTML: {
    nombre: "html",
    class: "background-color: rgb(227 79 38 /0.3);",
    icono: Html,
  },
  CSS: {
    nombre: "css",
    class: "background-color: rgb(39 155 211 / 0.3);",
    icono: Css,
  },
  LARAVEL: {
    nombre: "laravel",
    class: "background-color: rgb(0 0 0 / 0.5);",
    icono: Laravel,
  },
  PHP: {
    nombre: "php",
    class: "background-color: rgb(134 137 173 / 0.6); ",
    icono: Php,
  },
  Vite: {
    nombre: "vite",
    class: "background-color: rgb(0 0 0/ 0.6); ",
    icono: Vite,
  },
};

export const PROYECTOS = [
  {
    titulo: "Evaluación de trastornos emocionales",
    descripcion:
      "Desarrollé una aplicación en Laravel que implementa diversos tests de trastornos emocionales. Estos tests son llevados a cabo por estudiantes universitarios, con la finalidad de explorar y comprender de manera práctica la detección de estos trastornos.",
    fecha: "Enero 2020",
    link: "https://github.com/FMColdays/TrastornoTest",
    imagen: "/img/proyecto1img.webp",
    tecnologias: [TAGS.LARAVEL, TAGS.PHP],
  },
  {
    titulo: "Tienda de muebles",
    descripcion:
      "Página estática de muebles creada con HTML y CSS. Diseñada con entusiasmo para aprender y perfeccionar mis habilidades.",
    fecha: "Enero 2020",
    link: "https://github.com/FMColdays/Tienda-de-muebles",
    imagen: "/img/proyecto2img.webp",
    tecnologias: [TAGS.HTML, TAGS.CSS],
  },
  {
    titulo: "Administrador de pacientes",
    descripcion:
      "Desarrollé un administrador  para el seguimiento de pacientes de una veterinaria para mi aprendizaje en React y Vite.",
    fecha: "Enero 2020",
    link: "https://github.com/FMColdays/citas_react_vite",
    imagen: "/img/proyecto3img.webp",
    tecnologias: [TAGS.REACT, TAGS.Vite],
  },
  {
    titulo: "Salón de eventos",
    descripcion:
      "Creado desde cero con Laravel. Es una aplicación para para rentar salones de eventos los cuales cuentan con diversos paquetes en los cuales puedes incluir servicios extras.",
    fecha: "Enero 2020",
    link: "https://github.com/FMColdays/SalonDeEventos",
    imagen: "/img/proyecto4img.webp",
    tecnologias: [TAGS.LARAVEL],
  },
  {
    titulo: "Cotizador de criptomonedas",
    descripcion:
      "Esta app fue realizada con React y Vite en la cual veremos como tomar 10 criptomonedas y cotizarlas en tiempo real para obtener su precio al momento.",
    fecha: "Enero 2020",
    link: "https://github.com/FMColdays/cotizador-de-criptomonedas",
    imagen: "/img/proyecto5img.webp",
    tecnologias: [TAGS.REACT, TAGS.Vite],
  },
  {
    titulo: "Control de Presupuesto",
    descripcion:
      "Una aplicación de control de presupuesto desarrollada con React y Vite. Esta herramienta te permite gestionar tus finanzas de manera efectiva, con funciones para realizar un seguimiento detallado de ingresos y gastos, establecer presupuestos mensuales y visualizarlo de manera gráfica.",
    fecha: "Enero 2020",
    link: "https://github.com/FMColdays/Administrador-de-gastos",
    imagen: "/img/proyecto6img.webp",
    tecnologias: [TAGS.REACT, TAGS.Vite],
  },
];
