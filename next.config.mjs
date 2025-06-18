/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    domains: ['images.unsplash.com'],
  },
  // Adicione esta configuração para o MapBox
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'mapbox-gl': 'mapbox-gl/dist/mapbox-gl.js',
    };
    return config;
  },
};

export default nextConfig;
