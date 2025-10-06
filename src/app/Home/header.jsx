const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          Mi Sitio
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-gray-600 hover:text-blue-500 transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-600 hover:text-blue-500 transition-colors">
                Acerca de
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 hover:text-blue-500 transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
