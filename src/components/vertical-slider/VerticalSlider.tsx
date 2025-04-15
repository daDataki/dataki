'use client';

import React, { useState, useEffect, useRef } from 'react';
import './VerticalSlider.css';

const words = ['strategy', 'design', 'technology', 'content', 'data', 'media'];

const strategy = [
  "Go-to-market.",
  "Growth.",
  "Digital marketing.",
  "Product.",
  "Brand positioning.",
  "Digital transformation consulting.",
  "Consumer research.",
];

const design = [
  "Graphic design for online and offline media.",
  "UX/UI design for websites and apps.",
  "Custom branding and visual identities.",
  "Social media content creation.",
  "Packaging."
];

const technology = [
  "Front-end & back-end development.",
  "Platform development.",
  "Website performance optimization."
];

const content = [
  "Audiovisual production for any screen.",
  "Social Media Content & management.",
  "UGC.",
  "Motion graphic & 3D.",
  "B2B content",
  "Content creation for online and offline media.",
  "Social media management and visuals."
];

const data = [
  "Campaign performance analysis.",
  "Data collection and reporting.",
  "Insights for strategy optimization.",
  "Custom analytics dashboards.",
];

const media = [
  "Campaign Strategy and Planning.",
  "Platform Selection and Setup.",
  "Ad Creation and Management.",
  "Optimization and Scaling.",
  "Analytics and Reporting.",
];

const wordContentMap: { [key: string]: string[] } = {
  strategy,
  design,
  technology,
  content,
  data,
  media,
};

export default function VerticalSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const top = containerRef.current.offsetTop;
      const scroll = window.scrollY;
      const height = window.innerHeight;
      const scrollInside = scroll - top;

      if (scrollInside >= 0 && scrollInside < height * words.length) {
        const index = Math.floor(scrollInside / height);
        setCurrentIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getPositionClass = (offset: number) => {
    switch (offset) {
      case 0:
        return 'font-antonio text-fluid text-white font-bold uppercase translate-y-0 scale-110 z-10'; // Principal
      case -1:
        return 'font-antonio uppercase blur-[2px] text-fluid-1 text-gray-500 opacity-30 -translate-y-[120px] z-0'; // Uno arriba
      case -2:
        return 'font-antonio uppercase blur-[3px] text-fluid-2 text-gray-400 opacity-15 -translate-y-[220px] z-0'; // Dos arriba
      case 1:
        return 'font-antonio uppercase blur-[2px] text-fluid-2 text-gray-500 opacity-30 translate-y-[120px] z-0'; // Uno abajo
      case 2:
        return 'font-antonio uppercase blur-[3px] text-fluid-1 text-gray-400 opacity-15 translate-y-[220px] z-0'; // Dos abajo
      default:
        return 'opacity-0 hidden';
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-[600vh] ">
      {/* Sticky content */}
      <div className="sticky top-0 h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden">

        {/* Título */}
        <div className='absolute top-0 py-12 flex flex-col justify-center items-center text-we-focus uppercase'>
          <p>services</p>
        </div>

        {/* Texto lateral */}
        <div className='max-sm:hidden absolute top-52 xl:top-1/2 left-12 md:left-0'>
          <p className='hidden font-Poppins md:ml-16 text-we-focus uppercase'>we focus on</p>
        </div>

        {/* Palabras principales */}
        <ul className="relative h-full w-full flex flex-col justify-center items-center">
          {words.map((word, index) => {
            let offset = index - currentIndex;
            if (offset < -2) offset += words.length;
            if (offset > 2) offset -= words.length;
            const isMain = offset === 0;
            return (
              <li
                key={index}
                className={`absolute w-full h-full flex justify-center items-center transition-all duration-500 ${getPositionClass(offset)}`}
              >
                <div className="flex text-center">
                  <div className="font-antonio safari-text-stroke uppercase">{word}</div>
                  {isMain && (
                    <span className="ml-4 text-easternBlue text-5xl font-bold">
                      0{index + 1}
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        {/* Lista de contenido */}
        <div className='absolute max-sm:hidden top-[60%] md:top-[68%] left-[55%]'>
          <ul className='w-full list-disc pl-5 z-10 text-we-focus font-Poppins font-semibold'>
            {wordContentMap[words[currentIndex]]?.map((item, i) => (
              <li key={i} className="text-we-focus">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
