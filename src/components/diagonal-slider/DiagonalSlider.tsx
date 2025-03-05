"use client";
import { useEffect, useRef } from "react";

const DiagonalSlider = ({
  left,
  top,
  images,
  speed = 30000, // Velocidad en milisegundos (ajusta aquí)
}: {
  left: string;
  top: string;
  images: string[];
  speed?: number;
}) => {
  const columnRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!columnRef.current) return;

    let position = 0;
    let frameId: number;
    const speedLevels = [0.05, 0.01, 0.1]; // Diferentes velocidades
    let currentSpeed = speedLevels[0]; // Comienza con la velocidad más baja
    const segmentDuration = speed / 6; // Cada segmento de velocidad será un tercio de la duración total
    let timeElapsed = 0; // Tiempo transcurrido para controlar la velocidad

    function animate() {
      if (!columnRef.current) return;

      // Controlar el tiempo transcurrido
      timeElapsed += 16.67; // Aproximadamente 60 FPS (1000ms / 60 = 16.67ms por frame)

      // Cambiar velocidad después de cada fase
      if (timeElapsed >= segmentDuration * 2) {
        currentSpeed = speedLevels[2]; // Fase 3 (más rápido)
      } else if (timeElapsed >= segmentDuration) {
        currentSpeed = speedLevels[1]; // Fase 2 (medio)
      } else {
        currentSpeed = speedLevels[0]; // Fase 1 (más lento)
      }

      // Actualizar la posición
      position -= currentSpeed; // Controla la velocidad del desplazamiento

      // Cuando la posición llegue a -70, reiniciar la posición a 0 y mantener la velocidad
      if (position <= -70) {
        position = 0; // Reinicia la posición
        timeElapsed = 0; // Reinicia el tiempo para la siguiente fase
        currentSpeed = speedLevels[0]; // Establece la velocidad a la más baja
      }
    
      columnRef.current.style.transform = `translateY(${position}%)`;
      frameId = requestAnimationFrame(animate);
    }

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [speed]);

  return (
    <div className={`absolute z-10  rotate-[330deg] ${top} ${left} origin-top`}>
      <div ref={columnRef} className="flex-col gap-20 flex">
        {images.concat(images).map((src, index) => (
          <img
            key={index}
            className="w-48 z-10"
            src={src}
            alt={`imagen-${index}`}
            width={800}
            height={1111}
          />
        ))}
      </div>
    </div>
  );
};

export default DiagonalSlider;
