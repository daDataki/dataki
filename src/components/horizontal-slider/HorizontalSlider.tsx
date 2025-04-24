import React from 'react';
import './HorizontalSlider.css';
import Image from 'next/image';
import getImages from '@/utils/images';

const chunkArray = (arr: string[], size: number) => {
  const result: string[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size); 
    result.push(chunk);
  }

  return result;
};



export default async function HorizontalSlider() {
  const images = await getImages();

  
  const imageGroups = chunkArray(images, 8);

  return (
    <div className="bg-black text-white max-sm:pt-0 py-12 overflow-x-hidden">
      {images.length > 0 ? (
        <>
          <h2 className="text-center xtext-sm font-Poppins font-normal my-6 sm:my-12 lg:my-20 uppercase">
            true partners
          </h2>
          <h1 className="text-center safari-text-stroke xtext-2xl font-antonio font-bold my-6 sm:my-12 lg:my-20 uppercase">
            they <span className="text-easternBlue">trust us</span>
          </h1>

          {/* Carrusel infinito para cada grupo */}
          <div>
            {imageGroups.map((group, groupIndex) => (
              <div
                key={`group-${groupIndex}`} // Clave para el grupo
                className="slider border-b border-white first:border-t"
              >
                <div className="slide-track">
                  {/* Renderizar imágenes únicas */}
                  {group.map((src, index) => (
                    <div
                      key={`group-${groupIndex}-item-${index}`} // Clave para cada imagen en el grupo
                      className="slide"
                    >
                      <Image
                        src={src}
                        alt={`Partner logo ${groupIndex * 8 + index}`}
                        className="carousel-image"
                        width={200}
                        height={100}
                      />
                    </div>
                  ))}
                  {/* Duplicar imágenes para un efecto de carrusel infinito */}
                  {group.map((src, index) => (
                    <div
                      key={`group-${groupIndex}-duplicate-${index}`} // Clave para duplicados
                      className="slide"
                    >
                      <Image
                        src={src}
                        alt={`Partner logo duplicate ${groupIndex * 8 + index}`}
                        className="carousel-image"
                        width={200}
                        height={100}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-xl text-gray-500">Loading images...</p>
      )}
    </div>
  );
}
