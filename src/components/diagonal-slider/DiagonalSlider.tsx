"use client";
import { useEffect, useRef } from "react";

const DiagonalSlider = ({
  left,
  top,
  images,
  reverse = false,
}: {
  left: string;
  top: string;
  images: string[];
  reverse?: boolean;
}) => {
  const columnRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = columnRef.current;
    if (!el) return;

    let position = reverse ? -50 : 0;
    let frameId: number;
    const cycleLength = 50; // % de movimiento

    // Fases con easing suave
    const speedPhases = [
      { start: 0, end: 0.33, min: 0.02, max: 0.05 },
      { start: 0.33, end: 0.66, min: 0.05, max: 0.08 },
      { start: 0.66, end: 1.0, min: 0.08, max: 0.03 },
    ];

    // Easing: easeInOutQuad
    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const getCurrentSpeed = () => {
      const progress = Math.abs(position / cycleLength); // de 0 a 1
      const phase = speedPhases.find(p => progress >= p.start && progress <= p.end);
      if (!phase) return 0.05;

      const phaseProgress = (progress - phase.start) / (phase.end - phase.start); // 0 a 1
      const eased = easeInOutQuad(phaseProgress);
      return phase.min + (phase.max - phase.min) * eased;
    };

    const step = () => {
      if (!el) return;

      const speed = getCurrentSpeed();
      position += reverse ? speed : -speed;
      el.style.transform = `translateY(${position}%)`;

      // Reset cuando llega al final
      if ((!reverse && position <= -50) || (reverse && position >= 0)) {
        el.style.transition = "none";
        position = reverse ? -50 : 0;
        el.style.transform = `translateY(${position}%)`;
        el.getBoundingClientRect(); // Forzar reflow
        el.style.transition = "transform 0.1s linear";
      }

      frameId = requestAnimationFrame(step);
    };

    el.style.transition = "transform 0.1s linear";
    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [reverse]);

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
