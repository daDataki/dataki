// components/PlyrVideo.js
"use client";
import { useEffect, useRef } from 'react';
import 'plyr/dist/plyr.css';

type PlyrVideoProps = {
    src: string;
  };

export default function PlyrVideo({src}: PlyrVideoProps) {
  const videoRef = useRef(null);

  useEffect(() => {
    const Plyr = require('plyr'); // ⬅️ Carga condicional
    if (videoRef.current) {
      new Plyr(videoRef.current, {
        controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
      });
    }
  }, []);

  return (
    <video ref={videoRef} className="w-full h-auto" playsInline muted>
      <source src={src} type="video/mp4" />
    </video>
  );
}
