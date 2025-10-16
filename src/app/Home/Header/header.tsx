'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md backdrop-blur-md">
      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <button onClick={scrollToTop} className="flex items-center gap-2">
            <Image src="/icon.png" alt="Servineo Logo" width={40} height={40} />
            <span className="text-2xl font-bold text-gray-800">Servineo</span>
          </button>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/servicios" className="text-gray-600 hover:text-blue-600 transition-colors">
            Servicios
          </Link>
          <Link href="/ofertas" className="text-gray-600 hover:text-blue-600 transition-colors">
            Ofertas de trabajo
          </Link>
          <Link href="/ayuda" className="text-gray-600 hover:text-blue-600 transition-colors">
            Ayuda
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors">
            Iniciar sesión
          </button>
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Registrarse
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4">
        <button onClick={scrollToTop} className="flex items-center gap-2">
          <Image src="/icon.png" alt="Servineo Logo" width={32} height={32} />
          <span className="text-xl font-bold">Servineo</span>
        </button>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-100 transition-colors">
            Iniciar sesión
          </button>
          <button className="px-3 py-1.5 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Registrarse
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;