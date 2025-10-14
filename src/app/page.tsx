import Carrusel from "./Home/Carrusel/Carrusel";
import { TrabajosRecientes } from '../componets/TrabajosRecientes';
import Footer from './Home/Footer/Footer';
import Mapa from "./Home/Mapa/Mapa";
import { Header } from "../componets/header";

import Buscador from './Home/Buscador/Buscador';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Component */}
      <Header />

      {/* Buscador Component */}
      <div className="w-full p-6 bg-primary text-center">
        <Buscador />
      </div>

      {/* Carrusel Component */}
      <main className="w-full">
        <Carrusel />
      </main>
      
      {/* Mapa Component */}
      <section className="w-full py-8 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Encuentra Servicios Cerca de Ti
          </h2>
          <Mapa />
        </div>
      </section>
      
      {/* Trabajos Recientes Component */}
      <section className="w-full py-8">
        <TrabajosRecientes />
      </section>
      
      {/* Placeholder for Servicios */}
      <section className="w-full py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600">Sección de servicios por implementar</p>
        </div>
      </section>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

