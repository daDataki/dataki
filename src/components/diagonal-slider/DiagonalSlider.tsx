"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const DiagonalSlider = ({
  left,
  top,
  images,
  transitionSpeeds,
}: {
  left: string;
  top: string;
  images: string[];
  transitionSpeeds: number[];
}) => {
  const columnRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!columnRef.current) return;

    let position = 0; // Posición inicial (0%)
    let speedIndex = 0; // Controla qué velocidad se usa
    let direction = -1; // -1 = Subiendo, 1 = Bajando
    let timeoutId: NodeJS.Timeout | null = null;

    function animate() {
      if (!columnRef.current) return;

      // Obtener la velocidad actual
      const speed = transitionSpeeds[speedIndex] / 1000;

      // Calcular el nuevo desplazamiento
      position += direction * (100 / transitionSpeeds.length);

      // Aplicar la transformación
      columnRef.current.style.transition = `transform ${speed}s ease-in-out`;
      columnRef.current.style.transform = `translateY(${position}%)`;

      // Avanzar en el índice de velocidad
      speedIndex++;

      // Si se completaron los tres cambios de velocidad, invertir la dirección
      if (speedIndex >= transitionSpeeds.length) {
        speedIndex = 0;
        direction *= -1;
      }

      // Esperar el tiempo de la transición y luego llamar nuevamente a `animate`
      timeoutId = setTimeout(animate, transitionSpeeds[speedIndex]);
    }

    // Iniciar animación
    animate();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (columnRef.current) columnRef.current.style.transition = "none";
    };
  }, [transitionSpeeds]);

  return (
    <div className={`absolute z-10 rotate-[330deg] ${top} ${left} origin-top`}>
      <div ref={columnRef} className="flex-col gap-20 flex">
        {images.map((src, index) => (
          <Image
            key={index}
            className="w-48 z-10"
            src={src}
            alt={`imagen-${index}`}
            layout="intrinsic"
            width={800}
            height={1111}
          />
        ))}
      </div>
    </div>
  );
};

export default DiagonalSlider;
