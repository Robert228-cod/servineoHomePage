/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuración para mejorar la compatibilidad con Turbopack
  experimental: {
    // Desactivar temporalmente la optimización de imágenes si causa problemas
    // images: { unoptimized: true },
  },
};

module.exports = nextConfig;