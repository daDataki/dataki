'use client';

import { useEffect, useRef, useState } from 'react';
import './claroSessions.css';

interface ClaroSessionsProps {
  images: string[];
  title: string[];
  width?: string;
  height?: string;
}

export default function ClaroSessions({
  images,
  title,
  width = '80vw',
  height = '574px',
}: ClaroSessionsProps) {
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
        setLeft(0);
        setImageIndex(0);
        return;
      }

      setLeft(nextLeft);
      setImageIndex(prev => (prev + 1) % images.length);
    }, 200);

    return () => clearInterval(interval);
  }, [left, images.length]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto overflow-hidden"
      style={{ width, height }}
    >
      <div className="absolute font-web1 text-bordered flex flex-col top-1/2 -translate-y-1/2">
        {title.map((line, idx) => (
          <span key={idx} className="uppercase font-antonio">
            {line}
          </span>
        ))}
      </div>

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
