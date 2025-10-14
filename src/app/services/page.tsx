import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos y responsivos para tu negocio",
      price: "$500 - $2000",
      icon: "🌐",
      features: ["Responsive Design", "SEO Optimizado", "Base de Datos", "Panel Admin"]
    },
    {
      id: 2,
      title: "Aplicaciones Móviles",
      description: "Apps nativas e híbridas para iOS y Android",
      price: "$1000 - $5000",
      icon: "📱",
      features: ["iOS & Android", "Push Notifications", "Offline Mode", "Analytics"]
    },
    {
      id: 3,
      title: "Consultoría IT",
      description: "Asesoramiento técnico para optimizar tu infraestructura",
      price: "$100/hora",
      icon: "🔧",
      features: ["Auditoría", "Optimización", "Migración", "Soporte 24/7"]
    },
    {
      id: 4,
      title: "Marketing Digital",
      description: "Estrategias digitales para aumentar tu presencia online",
      price: "$300 - $1500",
      icon: "📈",
      features: ["SEO/SEM", "Redes Sociales", "Email Marketing", "Analytics"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Spacer */}
      <div className="h-20"></div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas completas para hacer crecer tu negocio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
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
                Solicitar Información
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-gray-600 mb-6">
            Contáctanos y crearemos una solución personalizada para tus necesidades
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

export default ServicesPage;
