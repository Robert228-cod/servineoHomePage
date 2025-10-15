'use client';
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

// Assuming Next.js for useRouter

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const router = useRouter(); // Initialize useRouter
  const pathname = usePathname(); // Para determinar la sección activa

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close mobile menu on link click
  };
  const handleArrowNavigation = (e) => {
    const focusableItems = Array.from(document.querySelectorAll('header a, header button'));

    const currentIndex = focusableItems.indexOf(document.activeElement);

    if (e.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % focusableItems.length;
      focusableItems[nextIndex].focus();
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + focusableItems.length) % focusableItems.length;
      focusableItems[prevIndex].focus();
      e.preventDefault();
    }
  };

  return (
    <header
      className="sticky top-0 z-50 shadow-md"
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
      onKeyDown={handleArrowNavigation}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-6 flex justify-center">
            {pathname !== '/' && (
              <Link
                href="/"
                aria-label="Volver al inicio"
                className="text-2xl transition-colors duration-200 
                   hover:bg-gray-300 hover:rounded-md p-1"
              >
                ←
              </Link>
            )}
          </div>

          {pathname !== '/' ? (
            <Link
              href="/"
              className="ml-3 font-bold text-xl sm:text-2xl md:text-3xl"
              style={{ color: 'var(--primary-color)' }}
            >
              Servineo
            </Link>
          ) : (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="ml-3 font-bold text-xl sm:text-2xl md:text-3xl"
              style={{ color: 'var(--primary-color)' }}
            >
              Servineo
            </button>
          )}
        </div>

        {/* Desktop Menu (ajustado para tablets) */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex flex-wrap lg:flex-nowrap space-x-2 lg:space-x-4" role="menubar">
            <li>
              <Link
                href="/Servicios"
                className={`px-2 lg:px-3 py-1 text-sm lg:text-base whitespace-nowrap border-b-2 border-transparent transition-all duration-200
            hover:border-[var(--primary-color)] ${pathname.startsWith('/Servicios') ? 'border-[var(--primary-color)] font-semibold' : ''}`}
                style={{ '--primary-color': 'var(--primary-color)' }}
                role="menuitem"
                tabIndex={0}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/Ofertas"
                className={`px-2 lg:px-3 py-1 text-sm lg:text-base whitespace-nowrap border-b-2 border-transparent transition-all duration-200
          hover:border-[var(--primary-color)] ${pathname.startsWith('/Ofertas') ? 'border-[var(--primary-color)] font-semibold' : ''}`}
                style={{ '--primary-color': 'var(--primary-color)' }}
                role="menuitem"
                tabIndex={0}
              >
                Ofertas
              </Link>
            </li>
            <li>
              <Link
                href="/Help"
                className={`px-2 lg:px-3 py-1 text-sm lg:text-base whitespace-nowrap border-b-2 border-transparent transition-all duration-200
          hover:border-[var(--primary-color)] ${pathname.startsWith('/Help') ? 'border-[var(--primary-color)] font-semibold' : ''}`}
                style={{ '--primary-color': 'var(--primary-color)' }}
                role="menuitem"
                tabIndex={0}
              >
                Ayuda
              </Link>
            </li>
          </ul>
        </nav>
        {/* Auth Buttons - Desktop (ajustado para tablets) */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <button
            className="px-3 lg:px-4 py-2 text-sm lg:text-base rounded-md border transition-opacity duration-200 hover:opacity-70 whitespace-nowrap"
            style={{
              borderColor: 'var(--primary-color)',
              color: 'var(--primary-color)',
            }}
          >
            Iniciar sesión
          </button>

          <button
            className="px-3 lg:px-4 py-2 text-sm lg:text-base rounded-md text-white hover:opacity-80 transition-opacity duration-200 whitespace-nowrap"
            style={{ backgroundColor: 'var(--primary-color)' }}
            aria-label="Registrarse"
            tabIndex={0}
          >
            Registrarse
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-2 bg-[var(--background)]">
        {/* Botones a la derecha */}
        <div className="flex items-center space-x-2">
          <Link
            href="/login"
            className="px-3 py-1 text-xs rounded-md border transition-opacity duration-200 hover:opacity-80"
            style={{
              borderColor: 'var(--primary-color)',
              color: 'var(--primary-color)',
            }}
          >
            Iniciar sesión
          </Link>

          <Link
            href="/register"
            className="px-3 py-1 text-xs rounded-md text-white hover:opacity-80 transition-opacity duration-200"
            style={{ backgroundColor: 'var(--primary-color)' }}
          >
            Registrarse
          </Link>
        </div>
      </div>

      {/* Menú inferior fijo */}
      <nav
        className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg z-50 md:hidden"
        style={{ backgroundColor: 'var(--background)' }}
        aria-label="Mobile navigation"
      >
        <div className="flex justify-around items-center py-2">
          <Link
            href="/Servicios"
            className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-300 transform ${
              pathname.startsWith('/Servicios')
                ? 'bg-gray-600 text-white shadow-lg scale-110'
                : 'text-gray-600 hover:text-white hover:bg-gray-500'
            }`}
            onClick={() => handleLinkClick('services')}
          >
            <span className="text-lg mb-1">⚙️</span>
            <span className="text-xs font-medium">Servicios</span>
          </Link>

          <Link
            href="/Ofertas"
            className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-300 transform ${
              pathname.startsWith('/Ofertas')
                ? 'bg-gray-600 text-white shadow-lg scale-110'
                : 'text-gray-600 hover:text-white hover:bg-gray-500'
            }`}
            onClick={() => handleLinkClick('job-offers')}
          >
            <span className="text-lg mb-1">💼</span>
            <span className="text-xs font-medium">Trabajos</span>
          </Link>

          <Link
            href="/Help"
            className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-300 transform ${
              pathname.startsWith('/Help')
                ? 'bg-gray-600 text-white shadow-lg scale-110'
                : 'text-gray-600 hover:text-white hover:bg-gray-500'
            }`}
            onClick={() => handleLinkClick('help')}
          >
            <span className="text-lg mb-1">❓</span>
            <span className="text-xs font-medium">Ayuda</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
