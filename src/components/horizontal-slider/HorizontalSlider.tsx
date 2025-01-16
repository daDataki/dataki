'use client';

import React, { useEffect, useState } from 'react';
import './HorizontalSlider.css'; // Importar estilos adicionales

// Función para dividir las imágenes en grupos
const chunkArray = (arr: string[], size: number) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export default function HorizontalSlider() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Llamada a la API para obtener las imágenes
    fetch('/api/get-images')
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  // Dividir las imágenes en grupos de 9
  const imageGroups = chunkArray(images, 9);

  return (
    <div className="bg-black text-white py-12 overflow-x-hidden">
      <h2 className="text-center text-xl lg:text-3xl font-Poppins font-semibold my-12 lg:my-20 uppercase">
        true partners
      </h2>
      <h1 className="text-center text-6xl lg:text-[220px] font-antonio font-bold my-12 lg:my-20 uppercase">
        they <span className="text-easternBlue">trust us</span>
      </h1>

      {/* Carrusel infinito para cada grupo */}
      <div>
      {imageGroups.map((group, groupIndex) => (

        <div className="slider border-b border-white first:border-t">
          <div className="slide-track">
            {group.map((src, index) => (
              <div key={groupIndex} className="slide ">

                <img
                  key={index}
                  src={src}
                  alt={`Partner logo ${groupIndex * 9 + index}`}
                  className="carousel-image"
                />
              </div>

            ))}
            {group.map((src, index) => (
              <div key={groupIndex} className="slide ">

                <img
                  key={index}
                  src={src}
                  alt={`Partner logo ${groupIndex * 9 + index}`}
                  className="carousel-image"
                />
              </div>
            ))}
          </div>

        </div>
      ))}
      </div>

    </div>
  );
}
