import React from 'react';

const JobsPage = () => {
  const jobOffers = [
    {
      id: 1,
      title: "Desarrollador Frontend React",
      company: "ServiNeo Tech",
      location: "Remoto",
      salary: "$3000 - $5000",
      type: "Tiempo Completo",
      experience: "2-3 años",
      description: "Buscamos un desarrollador frontend con experiencia en React, TypeScript y Next.js",
      requirements: ["React/Next.js", "TypeScript", "Tailwind CSS", "Git"],
      posted: "Hace 2 días",
      icon: "⚛️"
    },
    {
      id: 2,
      title: "Backend Developer Node.js",
      company: "ServiNeo Tech",
      location: "Ciudad de México",
      salary: "$3500 - $6000",
      type: "Tiempo Completo",
      experience: "3-5 años",
      description: "Desarrollador backend para crear APIs robustas y escalables",
      requirements: ["Node.js", "Express", "MongoDB/PostgreSQL", "Docker"],
      posted: "Hace 1 semana",
      icon: "🔧"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "ServiNeo Tech",
      location: "Híbrido",
      salary: "$2500 - $4000",
      type: "Tiempo Completo",
      experience: "2-4 años",
      description: "Diseñador creativo para crear interfaces intuitivas y atractivas",
      requirements: ["Figma", "Adobe Creative Suite", "Principios UX", "Prototipado"],
      posted: "Hace 3 días",
      icon: "🎨"
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "ServiNeo Tech",
      location: "Remoto",
      salary: "$4000 - $7000",
      type: "Tiempo Completo",
      experience: "4-6 años",
      description: "Ingeniero DevOps para automatizar procesos de despliegue",
      requirements: ["AWS/Azure", "Docker/Kubernetes", "CI/CD", "Terraform"],
      posted: "Hace 5 días",
      icon: "🚀"
    },
    {
      id: 5,
      title: "Mobile Developer React Native",
      company: "ServiNeo Tech",
      location: "Remoto",
      salary: "$3200 - $5500",
      type: "Tiempo Completo",
      experience: "2-4 años",
      description: "Desarrollador móvil para crear apps cross-platform",
      requirements: ["React Native", "JavaScript", "iOS/Android", "Redux"],
      posted: "Hace 1 día",
      icon: "📱"
    },
    {
      id: 6,
      title: "Data Analyst",
      company: "ServiNeo Tech",
      location: "Ciudad de México",
      salary: "$2800 - $4500",
      type: "Tiempo Completo",
      experience: "1-3 años",
      description: "Analista de datos para extraer insights valiosos",
      requirements: ["Python/SQL", "Power BI/Tableau", "Excel Avanzado", "Estadística"],
      posted: "Hace 4 días",
      icon: "📊"
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
            Ofertas de Trabajo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Únete a nuestro equipo y forma parte de proyectos innovadores
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow">
            Todos
          </button>
          <button className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Remoto
          </button>
          <button className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Presencial
          </button>
          <button className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Híbrido
          </button>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {jobOffers.map((job) => (
            <div key={job.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{job.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {job.posted}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">📍</span>
                  {job.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">💰</span>
                  {job.salary}
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">⏰</span>
                  {job.type}
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">👨‍💼</span>
                  {job.experience}
                </div>
              </div>

              <p className="text-gray-600 mb-4">{job.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Requisitos:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-semibold">
                Aplicar Ahora
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ¿No encuentras el puesto ideal?
          </h2>
          <p className="text-gray-600 mb-6">
            Envíanos tu CV y te contactaremos cuando tengamos una oportunidad que coincida con tu perfil
          </p>
          <button className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-semibold">
            Enviar CV
          </button>
        </div>
      </div>
      
      {/* Mobile Bottom Spacer */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
};

export default JobsPage;
