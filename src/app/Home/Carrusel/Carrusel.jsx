"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Carrusel.module.css";

const slides = [
  {
    "image": "/Carpinteria.png",
    "title": "Carpintería",
    "subtitle": "Trabajos en madera de calidad",
    "description": "Carpintería y muebles a medida"
  },
  {
    "image": "/Electricistas.png",
    "title": "Electricistas",
    "subtitle": "Soluciones eléctricas seguras",
    "description": "Instalaciones y reparaciones eléctricas"
  },
  {
    "image": "/Limpieza.png",
    "title": "Limpieza",
    "subtitle": "Espacios impecables, vida saludable",
    "description": "Servicios de limpieza para hogares y oficinas"
  },
  {
    "image": "/Pintura.png",
    "title": "Pintura",
    "subtitle": "Renueva tus espacios con color",
    "description": "Pintura de interiores y exteriores"
  },
  {
    "image": "/Plomeria.png",
    "title": "Plomería",
    "subtitle": "Soluciones expertas para tus tuberías",
    "description": "Reparación e instalación de plomería"
  }
];

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.carruselContainer}>
      <div className={styles.slide} style={{ backgroundImage: `url(${slides[currentIndex].image})` }}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <span className={styles.title}>{slides[currentIndex].title}</span>
          <h2 className={styles.subtitle}>{slides[currentIndex].subtitle}</h2>
          <p className={styles.description}>{slides[currentIndex].description}</p>
        </div>
      </div>

      <button onClick={prevSlide} className={`${styles.arrow} ${styles.leftArrow}`}>
        &#10094;
      </button>
      <button onClick={nextSlide} className={`${styles.arrow} ${styles.rightArrow}`}>
        &#10095;
      </button>

      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <span
            key={index}
            className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;