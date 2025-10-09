'use client';
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 shadow-md"
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Placeholder */}
        <div className="text-xl font-bold" style={{ color: 'var(--primary-color)' }}>
          Logo
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#services"
                className="hover:text-primary-color"
                style={{ '--primary-color': 'var(--primary-color)' }}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#job-offers"
                className="hover:text-primary-color"
                style={{ '--primary-color': 'var(--primary-color)' }}
              >
                Ofertas de trabajo
              </a>
            </li>
            <li>
              <a
                href="#help"
                className="hover:text-primary-color"
                style={{ '--primary-color': 'var(--primary-color)' }}
              >
                Ayuda
              </a>
            </li>
          </ul>
        </nav>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="px-4 py-2 rounded-md border"
            style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}
          >
            Iniciar sesión
          </button>
          <button
            className="px-4 py-2 rounded-md text-white"
            style={{ backgroundColor: 'var(--primary-color)' }}
          >
            Registrarse
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--foreground)] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-white py-2 shadow-md"
          style={{ backgroundColor: 'var(--background)' }}
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col items-center space-y-2">
              <li>
                <a
                  href="#services"
                  className="block px-4 py-2 hover:bg-gray-100"
                  style={{ color: 'var(--foreground)' }}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#job-offers"
                  className="block px-4 py-2 hover:bg-gray-100"
                  style={{ color: 'var(--foreground)' }}
                >
                  Ofertas de trabajo
                </a>
              </li>
              <li>
                <a
                  href="#help"
                  className="block px-4 py-2 hover:bg-gray-100"
                  style={{ color: 'var(--foreground)' }}
                >
                  Ayuda
                </a>
              </li>
              <li>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-center"
                  style={{ color: 'var(--primary-color)' }}
                >
                  Iniciar sesión
                </button>
              </li>
              <li>
                <button
                  className="block px-4 py-2 bg-primary-color text-white rounded-md w-full text-center"
                  style={{ backgroundColor: 'var(--primary-color)' }}
                >
                  Registrarse
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
