'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Assuming Next.js for useRouter

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const router = useRouter(); // Initialize useRouter

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
        {/* Logo Placeholder */}
        <div className="text-xl font-bold" style={{ color: 'var(--primary-color)' }}>
          Servineo
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex space-x-4" role="menubar">
            <li>
              <a
                href="#services"
                className={`px-2 py-1 border-b-2 border-transparent transition-all duration-200
                    hover:border-[var(--primary-color)] ${activeLink === 'services' ? 'border-[var(--primary-color)] font-semibold' : ''}`}
                style={{ '--primary-color': 'var(--primary-color)' }}
                onClick={() => handleLinkClick('services')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleLinkClick('services');
                }}
                role="menuitem"
                tabIndex={0}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#job-offers"
                className={`px-2 py-1 border-b-2 border-transparent transition-all duration-200
                    hover:border-[var(--primary-color)] ${activeLink === 'job-offers' ? 'border-[var(--primary-color)] font-semibold' : ''}`}
                style={{ '--primary-color': 'var(--primary-color)' }}
                onClick={() => handleLinkClick('job-offers')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleLinkClick('job-offers');
                }}
                role="menuitem"
                tabIndex={0}
              >
                Ofertas de trabajo
              </a>
            </li>
            <li>
              <a
                href="#help"
                className={`px-2 py-1 border-b-2 border-transparent transition-all duration-200
                    hover:border-[var(--primary-color)] ${activeLink === 'help' ? 'border-[var(--primary-color)] font-semibold' : ''}`}
                style={{ '--primary-color': 'var(--primary-color)' }}
                onClick={() => handleLinkClick('help')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleLinkClick('help');
                }}
                role="menuitem"
                tabIndex={0}
              >
                Ayuda
              </a>
            </li>
          </ul>
        </nav>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="px-4 py-2 rounded-md border transition-opacity duration-200 hover:opacity-70"
            style={{
              borderColor: 'var(--primary-color)',
              color: 'var(--primary-color)',
            }}
          >
            Iniciar sesión
          </button>

          <button
            className="px-4 py-2 rounded-md text-white hover:opacity-80 transition-opacity duration-200"
            style={{ backgroundColor: 'var(--primary-color)' }}
            aria-label="Registrarse"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                /* Handle registration action */
              }
            }}
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
            aria-expanded={isOpen}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setIsOpen(!isOpen);
            }}
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
          <nav aria-label="Mobile navigation" role="menu">
            <ul className="flex flex-col items-center space-y-2">
              <li>
                <a
                  href="#services"
                  className={`block px-4 py-2 hover:bg-gray-100 ${activeLink === 'services' ? 'bg-gray-200' : ''}`}
                  style={{ color: 'var(--foreground)' }}
                  onClick={() => handleLinkClick('services')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleLinkClick('services');
                  }}
                  role="menuitem"
                  tabIndex={0}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#job-offers"
                  className={`block px-4 py-2 hover:bg-gray-100 ${activeLink === 'job-offers' ? 'bg-gray-200' : ''}`}
                  style={{ color: 'var(--foreground)' }}
                  onClick={() => handleLinkClick('job-offers')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleLinkClick('job-offers');
                  }}
                  role="menuitem"
                  tabIndex={0}
                >
                  Ofertas de trabajo
                </a>
              </li>
              <li>
                <a
                  href="#help"
                  className={`block px-4 py-2 hover:bg-gray-100 ${activeLink === 'help' ? 'bg-gray-200' : ''}`}
                  style={{ color: 'var(--foreground)' }}
                  onClick={() => handleLinkClick('help')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleLinkClick('help');
                  }}
                  role="menuitem"
                  tabIndex={0}
                >
                  Ayuda
                </a>
              </li>
              <li>
                <button
                  className="block px-4 py-2 text-white rounded-md w-full text-center"
                  style={{ backgroundColor: 'var(--primary-color)' }}
                  aria-label="Iniciar sesión"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      /* Handle login action */
                    }
                  }}
                >
                  Iniciar sesión
                </button>
              </li>
              <li>
                <button
                  className="block px-4 py-2 text-white rounded-md w-full text-center"
                  style={{ backgroundColor: 'var(--primary-color)' }}
                  aria-label="Registrarse"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      /* Handle registration action */
                    }
                  }}
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
