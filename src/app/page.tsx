import Carrusel from "./Home/Carrusel/Carrusel";
import { TrabajosRecientes } from '../componets/TrabajosRecientes';
import Footer from './Home/Footer/Footer';
import Mapa from "./Home/Mapa/Mapa";

import Buscador from './Home/Buscador/Buscador';
import ServiciosPage from "./servicios/servicios";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 px-4 md:px-12 text-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Encuentra el profesional perfecto
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Conectamos tu hogar con expertos verificados en Cochabamba
          </p>

          {/* Buscador Component */}
          <div className="mb-8">
            <Buscador />
          </div>

          {/* Popular Searches */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
              <span className="font-semibold text-gray-700 text-lg">Búsquedas populares:</span>
              <div className="flex flex-wrap justify-center gap-2">
                {['Plomero', 'Electricista', 'Pintor', 'Carpintero', 'Limpieza', 'Jardineria', 'Soldador', 'Albañil'].map((tag) => (
                  <button 
                    key={tag} 
                    className="px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors duration-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">1,000+</p>
              <p className="text-gray-600 text-lg">Profesionales</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">5,000+</p>
              <p className="text-gray-600 text-lg">Trabajos realizados</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">4.8★</p>
              <p className="text-gray-600 text-lg">Calificación promedio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrusel Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Inspiración para tu hogar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre ideas y proyectos realizados por nuestros profesionales expertos
            </p>
          </div>
          <Carrusel />
        </div>
      </section>
      
      {/* Mapa Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Encuentra Servicios Cerca de Ti
          </h2>
          <Mapa />
        </div>
      </section>
      
      {/* Trabajos Recientes Section */}
      <section className="w-full max-w-7xl mx-auto">
        <TrabajosRecientes />
      </section>

      {/* servicios Component */}
      <ServiciosPage 
        showHero={false} 
        showAllServices={false} 
        showCTA={false} 
        title="Servicios disponibles"
        subtitle="Encuentra el profesional perfecto para cualquier trabajo en tu hogar"
      />
      <div className="text-center my-8">
        <Link href="/servicios" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Ver más
        </Link>
      </div>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

