import Carrusel from "./Home/Carrusel";
import { TrabajosRecientes } from './Home/TrabajosRecientes';
import Footer from './Home/Footer/Footer';
import Mapa from "./Home/Mapa/Mapa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Placeholder for Header */}
      <div className="w-full p-6 border-b shadow-sm text-center">
        <p className="font-semibold text-lg text-dark-blue">HEADER</p>
      </div>

      {/* Placeholder for Buscador */}
      <div className="w-full p-6 bg-primary text-center">
        <p className="font-semibold text-lg text-white">BUSCADOR</p>
      </div>

      {/* Carrusel Component */}
      <main className="w-full">
        <Carrusel />
        <TrabajosRecientes />
      </main>
      
      {/* Mapa Component - Debajo del Carrusel */}
      <section className="w-full py-8 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Encuentra Servicios Cerca de Ti
          </h2>
          <Mapa />
        </div>
      </section>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

