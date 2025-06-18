'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Variedade",
      description: "Nossos produtos possuem equivalência aos variados padrões de medidas e modelos de selos mecânicos encontrados no mercado.",
      image: "/slide1.webp",
      bgImage: "backgrounds/blueimage.png" // Imagem de fundo para o slide 1
    },
    {
      title: "Qualidade",
      description: "Cumprimento das normas vigentes adotadas pelos clientes/produtos garantindo assim a qualidade dos produtos.",
      image: "/slide2.webp",
      bgImage: "backgrounds/brownimage.png" // Imagem de fundo para o slide 2
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center brightness-75"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
          </div>
          
          {/* Conteúdo do slide */}
          <div className="relative z-10 h-full flex flex-col items-center justify-between">
            <div className='flex flex-col items-center justify-center h-full text-center py-12'>
              <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">{slide.title}</h2>
              <p className='text-xl text-center text-white px-4 md:px-48 max-w-4xl mt-4 drop-shadow-md'>
                {slide.description}
              </p>
            </div>
            
            <div className="pb-8">
              <Image 
                src={slide.image}
                alt={slide.title}
                width={960}
                height={295}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;