import React from 'react';

const HelpPage = () => {
  const faqs = [
    {
      id: 1,
      question: "¿Cómo puedo contratar un servicio?",
      answer: "Puedes contactarnos directamente a través de nuestro formulario de contacto o llamando al número que aparece en la página. Te asignaremos un consultor que te ayudará con el proceso.",
      icon: "🤝"
    },
    {
      id: 2,
      question: "¿Cuáles son los tiempos de entrega?",
      answer: "Los tiempos varían según el proyecto. Desarrollo web: 2-4 semanas, Apps móviles: 4-8 semanas, Consultoría: 1-2 semanas. Te proporcionaremos un cronograma detallado al iniciar.",
      icon: "⏰"
    },
    {
      id: 3,
      question: "¿Ofrecen soporte post-entrega?",
      answer: "Sí, ofrecemos 3 meses de soporte gratuito después de la entrega, y planes de mantenimiento a largo plazo con descuentos especiales para nuestros clientes.",
      icon: "🛠️"
    },
    {
      id: 4,
      question: "¿Pueden trabajar con mi equipo interno?",
      answer: "Absolutamente. Trabajamos de manera colaborativa con tu equipo, proporcionando capacitación y documentación completa para que puedan dar continuidad al proyecto.",
      icon: "👥"
    },
    {
      id: 5,
      question: "¿Qué tecnologías utilizan?",
      answer: "Utilizamos las tecnologías más modernas y estables: React, Next.js, Node.js, Python, React Native, Flutter, AWS, Docker, y más. Siempre adaptamos la tecnología a las necesidades del proyecto.",
      icon: "💻"
    },
    {
      id: 6,
      question: "¿Cómo es el proceso de trabajo?",
      answer: "Seguimos metodologías ágiles con sprints de 2 semanas, reuniones regulares de seguimiento, y entregables incrementales para que siempre tengas visibilidad del progreso.",
      icon: "📋"
    }
  ];

  const contactMethods = [
    {
      method: "Email",
      value: "contacto@servineo.com",
      icon: "📧",
      description: "Respuesta en menos de 24 horas"
    },
    {
      method: "Teléfono",
      value: "+52 55 1234 5678",
      icon: "📞",
      description: "Lunes a Viernes 9:00 - 18:00"
    },
    {
      method: "WhatsApp",
      value: "+52 55 9876 5432",
      icon: "💬",
      description: "Atención inmediata"
    },
    {
      method: "Chat en vivo",
      value: "Disponible en el sitio",
      icon: "💭",
      description: "Soporte en tiempo real"
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
            Centro de Ayuda
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra respuestas a tus preguntas o contacta directamente con nuestro equipo
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar en preguntas frecuentes..."
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
              🔍
            </button>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((contact, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <span className="text-4xl mb-4 block">{contact.icon}</span>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{contact.method}</h3>
              <p className="text-gray-600 font-semibold mb-2">{contact.value}</p>
              <p className="text-sm text-gray-500">{contact.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Preguntas Frecuentes
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4 mt-1">{faq.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ¿No encontraste lo que buscabas?
          </h2>
          <p className="text-gray-600 mb-6">
            Nuestro equipo de soporte está listo para ayudarte con cualquier pregunta
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-semibold">
              Contactar Soporte
            </button>
            <button className="border border-gray-600 text-gray-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold">
              Enviar Ticket
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Bottom Spacer */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
};

export default HelpPage;