import { useState } from 'react';

const Header = () => {
  const [activeItem, setActiveItem] = useState('inicio');

  const menuItems = [
    { id: 'inicio', label: 'Inicio', href: '/', icon: '🏠' },
    { id: 'about', label: 'Acerca de', href: '/about', icon: 'ℹ️' },
    { id: 'contact', label: 'Contacto', href: '/contact', icon: '📞' },
    { id: 'services', label: 'Servicios', href: '/services', icon: '⚙️' }
  ];

  const getActiveColor = (itemId) => {
    switch (itemId) {
      case 'inicio': return 'bg-gradient-to-r from-blue-500 to-purple-600';
      case 'about': return 'bg-gradient-to-r from-green-500 to-teal-600';
      case 'contact': return 'bg-gradient-to-r from-pink-500 to-rose-600';
      case 'services': return 'bg-gradient-to-r from-orange-500 to-red-600';
      default: return 'bg-gray-100';
    }
  };

  return (
    <>
      {/* Header para desktop */}
      <header className="hidden md:block bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">
            ServiNeo
          </div>
          <nav>
            <ul className="flex space-x-6">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.href} 
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeItem === item.id 
                        ? `${getActiveColor(item.id)} text-white shadow-lg transform scale-105` 
                        : 'text-gray-600 hover:text-blue-500 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveItem(item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Header móvil - menú inferior */}
      <div className="md:hidden">
        {/* Spacer para el contenido */}
        <div className="h-16"></div>
        
        {/* Menú inferior fijo */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg z-50">
          <div className="flex justify-around items-center py-2">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-300 transform ${
                  activeItem === item.id
                    ? `${getActiveColor(item.id)} text-white shadow-lg scale-110`
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                <span className="text-lg mb-1">{item.icon}</span>
                <span className="text-xs font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
