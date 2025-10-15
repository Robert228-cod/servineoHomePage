import React from 'react';

const ServiciosPage = () => {
  const services = [
    {
      id: 1,
      title: 'Electricidad',
      description: 'Instalaciones, reparaciones y mantenimiento eléctrico en tu hogar o negocio',
      price: '$50 - $80 por hora',
      icon: '⚡',
      features: [
        'Instalaciones seguras',
        'Reparaciones rápidas',
        'Mantenimiento preventivo',
        'Certificación',
      ],
    },
    {
      id: 2,
      title: 'Plomería',
      description: 'Solución de fugas, instalación de tuberías y mantenimiento general de agua',
      price: '$40 - $70 por hora',
      icon: '🚰',
      features: [
        'Reparaciones de fugas',
        'Instalación de tuberías',
        'Desagües y sifones',
        'Atención de emergencias',
      ],
    },
    {
      id: 3,
      title: 'Pintura',
      description: 'Pintura de interiores y exteriores con acabados profesionales',
      price: '$30 - $60 por hora',
      icon: '🎨',
      features: [
        'Acabados precisos',
        'Interiores y exteriores',
        'Preparación de superficies',
        'Decoración personalizada',
      ],
    },
    {
      id: 4,
      title: 'Albañilería',
      description: 'Construcción, remodelación y reparaciones en estructuras y edificaciones',
      price: '$45 - $75 por hora',
      icon: '🏗️',
      features: ['Obra nueva', 'Remodelaciones', 'Reparaciones de estructuras', 'Trabajo seguro'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Spacer */}
      <div className="h-20"></div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesionales certificados para electricidad, plomería, pintura y albañilería
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="text-center mb-6">
                <span className="text-6xl mb-4 block">{service.icon}</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full inline-block font-semibold">
                  {service.price}
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800 mb-3">Incluye:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full mt-6 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-semibold">
                Solicitar Servicio
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ¿No encuentras el servicio que necesitas?
          </h2>
          <p className="text-gray-600 mb-6">
            Contáctanos y te conectaremos con el profesional adecuado para tu hogar o negocio
          </p>
          <button className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-semibold">
            Contactar Ahora
          </button>
        </div>
      </div>

      {/* Mobile Bottom Spacer */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
};

export default ServiciosPage;
