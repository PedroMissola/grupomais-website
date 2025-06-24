'use client';

import { useState, useEffect } from 'react';
import NextImage from 'next/image'; // Renomeei para evitar conflito com window.Image

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Variedade",
      description:
        "Nossos produtos possuem equivalência aos variados padrões de medidas e modelos de selos mecânicos encontrados no mercado.",
      image: "/slide1.png",
      bgImage: "/backgrounds/blueimage.png", // Corrigido
    },
    {
      title: "Qualidade",
      description:
        "Cumprimento das normas vigentes adotadas pelos clientes/produtos garantindo assim a qualidade dos produtos.",
      image: "/slide2.png",
      bgImage: "/backgrounds/brownimage.png", // Corrigido
    },
  ];

  // Alternância automática dos slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Pré-carregamento das imagens
  useEffect(() => {
    if (typeof window !== 'undefined') {
      slides.forEach((slide) => {
        const preload1 = new window.Image();
        preload1.src = slide.image;

        const preload2 = new window.Image();
        preload2.src = slide.bgImage;
      });
    }
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center brightness-75"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />

          {/* Conteúdo do slide */}
          <div className="relative z-10 h-full flex flex-col items-center justify-between">
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-xl text-center text-white px-4 md:px-48 max-w-4xl mt-4 drop-shadow-md">
                {slide.description}
              </p>
            </div>

            <div className="md:pb-8">
              <NextImage
                src={slide.image}
                alt={slide.title}
                width={960}
                height={295}
                className="mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
