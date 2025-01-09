'use client';

import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  const [images, setImages] = useState<string[]>([]);

  // Función para dividir las imágenes en grupos de 8
  const chunkArray = (arr: string[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  useEffect(() => {
    // Llamada a la API para obtener las imágenes
    fetch('/api/get-images')
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  // Dividir las imágenes en grupos de 8
  const imageGroups = chunkArray(images, 8);

  return (
    <>
      <Header />
      <main>
        {/* Sección del video */}
        <div className="relative">
          <video
            className="w-full h-auto object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/Video1_06-01.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Otras secciones de contenido */}
        <div className="flex flex-col">
          {/* Contenido del encabezado */}
          <div className="flex flex-col">
            <div className="my-8 md:my-12 lg:my-20">
              <h4 className="flex flex-col justify-center items-center font-Poppins font-semibold text-xl sm:text-3xl uppercase ">
                <span>Growth &</span> <span>business partner</span>
              </h4>
            </div>
            <div className="flex flex-col justify-center items-center font-antonio font-bold text-4xl md:text-5xl lg:text-8xl mb-8 md:mb-12 lg:mb-20 uppercase ">
              <span>we help companies</span>
              <div>
                <span className="text-easternBlue">bring to life</span>
                <span> their</span>
              </div>
              <span>business vision</span>
            </div>
          </div>
        </div>

        {/* Galería de imágenes */}
        <div className="bg-black text-white py-12">
          <h2 className="text-center text-3xl font-Poppins font-semibold my-20 uppercase">
            true partners
          </h2>
          <h1 className="text-center text-[220px] font-antonio font-bold mb-20 uppercase">
            they <span className='text-easternBlue'>trust us</span>
          </h1>

          {/* Sección que agrupa las imágenes en 8 */}
          <div className="">
            {imageGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="grid grid-cols-8 gap-8 border-t  border-solid border-white py-12 px-12"
              >
                {group.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Partner logo ${groupIndex * 8 + index}`}
                    className="w-36 h-auto object-contain"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
