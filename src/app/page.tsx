import Carrusel from "./Home/Carrusel";
import { TrabajosRecientes } from './Home/TrabajosRecientes';

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

      {/* The footer from the original template can be added back here if needed */}
    </div>
  );
}
