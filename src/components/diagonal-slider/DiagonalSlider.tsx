"use client";
import { useEffect, useRef } from "react";

const DiagonalSlider = ({
  left,
  top,
  images,
  //speed = 30000,
  reverse = false,
}: {
  left: string;
  top: string;
  images: string[];
  //speed?: number;
  reverse?: boolean;
}) => {
  const columnRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = columnRef.current;
    if (!el) return;

    // Posición inicial
    let position = reverse ? -50 : 0;
    let frameId: number;
    const pixelsPerFrame = 0.05;

    const step = () => {
      if (!el) return;

      // Mover
      position += reverse ? pixelsPerFrame : -pixelsPerFrame;
      el.style.transform = `translateY(${position}%)`;

      // Cuando llegue a fin, reiniciar sin transición
      if ((!reverse && position <= -50) || (reverse && position >= 0)) {
        el.style.transition = "none";
        position = reverse ? -50 : 0;
        el.style.transform = `translateY(${position}%)`;

        // Forzar reflow para aplicar el nuevo transform sin transición
        el.getBoundingClientRect();

        // Activar transición de nuevo
        el.style.transition = "transform 0.1s linear";
      }

      frameId = requestAnimationFrame(step);
    };

    // Iniciar con transición
    el.style.transition = "transform 0.1s linear";
    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [reverse]);

  // Duplicamos para crear un bucle suave
  const duplicatedImages = [...images, ...images];

  return (
    <div className={`absolute z-10 rotate-[330deg] ${top} ${left} origin-top`}>
      <div ref={columnRef} className="flex flex-col gap-20">
        {duplicatedImages.map((src, i) => (
          <img
            key={i}
            className="w-48 z-10"
            src={src}
            alt={`img-${i}`}
            width={800}
            height={1111}
          />
        ))}
      </div>
    </div>
  );
};

export default DiagonalSlider;
