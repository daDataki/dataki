'use client';

import { useEffect, useRef, useState } from 'react';

const images = [
  '/images-proyecto/ClaroSessions-1.png',
  '/images-proyecto/ClaroSessions-4.png',
  '/images-proyecto/ClaroSessions-7.png',
  '/images-proyecto/ClaroSessions-2.png',
  '/images-proyecto/ClaroSessions-5.png',
  '/images-proyecto/ClaroSessions-8.png',
  '/images-proyecto/ClaroSessions-3.png',
  '/images-proyecto/ClaroSessions-6.png',
  '/images-proyecto/ClaroSessions-9.png',
];

export default function ClaroSessions() {
  const [imageIndex, setImageIndex] = useState(0);
  const [left, setLeft] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const containerWidth = containerRef.current?.offsetWidth || 0;
      const imageWidth = imgRef.current?.offsetWidth || 0;
      const nextLeft = left + 20;

      if (nextLeft + imageWidth > containerWidth) {
        setLeft(0); // Reinicia justo al borde izquierdo
        setImageIndex(0);
        return;
      }

      setLeft(nextLeft);
      setImageIndex(prev => (prev + 1) % images.length);
    }, 200); // ✅ cada 50ms

    return () => clearInterval(interval);
  }, [left]);

  return (
    <div
      ref={containerRef}
      className="relative w-[22.29vw] h-[574px] mx-auto overflow-hidden"
      style={{ width: '80vw' }} 
    >
      <img
        ref={imgRef}
        src={images[imageIndex]}
        alt={`img-${imageIndex}`}
        className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-50 ease-linear"
        style={{
          left: `${left}px`,
          width: '22.5vw',
          height: 'auto',
        }}
      />
    </div>
  );
}
