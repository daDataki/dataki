'use client';

import React, { useState, useEffect } from 'react';
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

// Mapeo de palabras a sus respectivos arrays
const wordContentMap: { [key: string]: string[] } = {
  strategy,
  design,
  technology,
  content,
  data,
  media,
};

export default function VerticalSlider({ intervalDuration = 2000 }: { intervalDuration?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (words.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [intervalDuration]);

  const getPositionClass = (offset: number) => {
    const positionClasses = [
      'font-antonio text-fluid font-semibold uppercase  translate-y-0 text-white font-bold scale-110 z-10', // Principal (Centro)
      'font-antonio uppercase blur-[2px] text-fluid-1 font-bold max-sm:-translate-y-[80px] -translate-y-[120px] text-gray-500 max-sm:opacity-50 opacity-30 z-0', // Primer arriba
      'font-antonio uppercase blur-[3px] text-fluid-2 font-bold max-sm:-translate-y-[150px] -translate-y-[220px] text-gray-400 max-sm:opacity-30 opacity-15 z-0', // Segundo arriba
      'font-antonio uppercase blur-[2px] text-fluid-2 font-bold max-sm:translate-y-[80px] translate-y-[120px] md:translate-y-[140px] text-gray-500 max-sm:opacity-50 opacity-30 z-0', // Primer abajo
      'font-antonio uppercase blur-[3px] text-fluid-1 font-bold translate-y-[140px]  md:translate-y-[220px] text-gray-400 max-sm:opacity-30 opacity-15 z-0', // Segundo abajo
    ];

    return positionClasses[offset] || 'opacity-0 hidden'; // Ocultar fuera del rango visible
  };

  return (
    <div className="relative bg-black text-white w-full h-[35vh] sm:h-[50vh]  lg:h-[85vh] xl:h-[120vh] object-cover overflow-hidden flex flex-col justify-center items-center max-sm:pt-0 pt-[330px] max-sm:pb-0 pb-[410px] mt-[-2px]">
      <div className='absolute top-0 flex flex-col justify-center items-center text-we-focus pt-48 uppercase'>
        <p>services</p>
      </div>
      {/* <div className='max-sm:hidden absolute w-full top-52 flex justify-end mr-32 md:text-xl lg:text-xl items-center font-Poppins uppercase'>
        <p>keep <br /> scrolling</p>
      </div> */}
      <div className='max-sm:hidden absolute top-52 xl:top-1/2 left-12 md:left-0'>
        <p className='font-Poppins md:ml-16 text-we-focus uppercase'>we focus on</p>
      </div>
      <ul className="relative h-full ">
        {words.map((word, index) => {
          const offset = (index - currentIndex + words.length) % words.length; // Cálculo del desplazamiento relativo
          const isMain = offset === 0; // Verifica si es el elemento principal
          return (
            <li
              key={index}
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${getPositionClass(offset)}`}
            >
              <div className="flex text-center">
                <div className="font-antonio uppercase">{word}</div>
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
      
      <div  className='absolute max-sm:hidden top-[60%] md:top-[68%] left-[55%]'>
        <ul className='w-full list-disc pl-5 z-10 text-we-focus font-Poppins font-semibold '>
          {wordContentMap[words[currentIndex]]?.map((item, i) => (
            <li key={i} className="text-we-focus">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

