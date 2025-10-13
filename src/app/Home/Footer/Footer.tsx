
'use client';

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const empresaLinks = [
    'Sobre nosotros', 'Unirte como Flyer', 'Testimonios',
    'Apoyo'
  ];

  const legalLinks = [
    'Términos y condiciones', 'Política de privacidad',
    'Política de cookies'
  ];

  return (
    <footer className="bg-gray-950 text-white font-['Roboto']">
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-1">
        
        {/* Servineo logo + descripción */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-3 text-white">Servineo</h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            La plataforma líder para conectar hogares con profesionales calificados en Cochabamba. 
            Calidad garantizada y servicio confiable.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          
          {/* Empresa */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-2">
              {empresaLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#1AA7ED] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Información legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#1AA7ED] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contáctanos</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-[#1AA7ED] mr-3" />
                <span>Cochabamba, Bolivia</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#1AA7ED] mr-3" />
                <span>+591 4 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#1AA7ED] mr-3" />
                <span>contacto@servineo.bo</span>
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
            <div className="flex flex-col space-y-3 mt-2">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-[#1AA7ED] transition-colors">
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

       
        {/* Descarga nuestra app */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-800 pt-10">
        <div className="flex items-center space-x-4">
          <h3 className="text-lg font-semibold text-white mb-0">Descarga nuestra app</h3>
            <p className="text-gray-400 text-sm mb-0">Gestiona tus servicios desde tu móvil.</p>
          </div>

          <div className="flex space-x-4">
            <div className="bg-black rounded-lg p-3 px-5 cursor-pointer hover:bg-gray-800 transition">
              <div className="text-xs text-gray-400">Disponible en</div>
              <div className="font-semibold text-white">App Store</div>
            </div>
            <div className="bg-black rounded-lg p-3 px-5 cursor-pointer hover:bg-gray-800 transition">
              <div className="text-xs text-gray-400">Consíguelo en</div>
              <div className="font-semibold text-white">Google Play</div>
            </div>
          </div>
        </div>

        {/* Newsletter */}

        <div className="border-t border-gray-800 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            
            {/* Título alineado a la izquierda */}
            <h3 className="text-lg font-semibold text-white whitespace-nowrap">
              Suscríbete a nuestras noticias
            </h3>

            {/* Input y botón alineados a la derecha */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full sm:w-96 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#1AA7ED]"
              />
              <button className="bg-[#2B31E0] hover:bg-[#1f25b8] px-6 py-3 rounded-lg font-medium transition-colors">
                Suscribirse
              </button>
            </div>

          </div>
        </div>
       
        {/* Línea divisora */}
        <div className="border-t border-gray-800" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm text-center">
          <div>© 2025 Servineo. Todos los derechos reservados.</div>
          <div className="flex items-center space-x-4">
            <span>Hecho con ❤️ en Cochabamba</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Sistema operativo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
