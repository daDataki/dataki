'use client';

import React, { useState, useEffect } from 'react';

const words = ['strategy', 'design', 'technology', 'content', 'data', 'media'];

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
      'font-antonio max-sm:text-5xl text-7xl md:text-[150px] font-semibold uppercase  translate-y-0 text-white font-bold scale-110 z-10', // Principal (Centro)
      'font-antonio uppercase blur-[2px] max-sm:text-5xl text-8xl font-bold max-sm:-translate-y-[80px] -translate-y-[120px] text-gray-500 max-sm:opacity-50 opacity-30 z-0', // Primer arriba
      'font-antonio uppercase blur-[3px] max-sm:text-5xl text-8xl font-bold max-sm:-translate-y-[150px] -translate-y-[220px] text-gray-400 max-sm:opacity-30 opacity-15 z-0', // Segundo arriba
      'font-antonio uppercase blur-[2px] max-sm:text-5xl text-8xl font-bold max-sm:translate-y-[80px] translate-y-[120px] md:translate-y-[220px] text-gray-500 max-sm:opacity-50 opacity-30 z-0', // Primer abajo
      'font-antonio uppercase blur-[3px] max-sm:text-5xl text-8xl font-bold translate-y-[140px] translate-y-[220px] md:translate-y-[320px] text-gray-400 max-sm:opacity-30 opacity-15 z-0', // Segundo abajo
    ];

    return positionClasses[offset] || 'opacity-0 hidden'; // Ocultar fuera del rango visible
  };

  return (
    <div className="relative bg-black text-white w-full max-sm:h-[calc(80vh-80px)]  h-screen overflow-hidden flex flex-col justify-center items-center max-sm:pt-0 pt-[500px] max-sm:pb-0 pb-[600px]">
       <div className=' absolute max-sm:top-0 top-20 flex flex-col justify-center items-center md:text-xl lg:text-2xl pt-16 uppercase'><p>services</p></div>
       <div className='max-sm:hidden absolute w-full top-52 flex justify-end mr-32 md:text-xl lg:text-xl items-center font-Poppins uppercase'><p>keep <br /> scrolling</p></div>
       <div className='max-sm:hidden absolute top-52 xl:top-1/2 left-12 md:left-0'> <p className='font-Poppins md:ml-16  md:text-xl md-text-xl lg:text-2xl uppercase'>we focus on</p></div>
      <ul className="relative  h-full">
        {words.map((word, index) => {
          const offset = (index - currentIndex + words.length) % words.length; // Cálculo del desplazamiento relativo
          const isMain = offset === 0; // Verifica si es el elemento principal

          return (
            <li
              key={index}
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${getPositionClass(offset)}`}
            >
              <div className="flex text-center">
                <div className="font-antonio uppercase ">{word}</div>
                {isMain && (
                  <span className="ml-1 text-easternBlue text-5xl font-bold">
                    {index + 1}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <div className='absolute max-sm:hidden top-[60%] md:top-[68%] left-[55%]'> <ul className='w-full list-disc pl-5   z-10 md:text-xl lg:text-xl md:leading-[40px] lg:leading-[30px] font-Poppins font-semibold uppercase'>
                <li>Go-to-market.</li>
                <li>Growth.</li>
                <li>Digital marketing.</li>
                <li>Product.</li>
                <li>Brand positioning.</li>
                <li>Digital transformation consulting.</li>
                <li>Consumer research.</li>
              </ul></div>
    </div>
  );
}


