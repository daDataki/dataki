"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./ImageGrid.css";
import CardBack from "../card-grid/CardBack";
import { imageDataMap as images } from "../card-grid/CardBack";

export default function ImageGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "10px 0px" });
  const gridRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (i: number) => () => {
    if (!gridRef.current) return;
    const cards = gridRef.current.children;

    [...cards].forEach((card, j) => {
      const flip = card.querySelector(".flip-container");
      if (i === j) {
        flip?.classList.add("rotateY-180");
        card.classList.remove("faded");
      } else {
        card.classList.add("faded");
      }
    });
  };

  const handleMouseLeave = () => {
    if (!gridRef.current) return;
    const cards = gridRef.current.children;

    [...cards].forEach((card) => {
      const flip = card.querySelector(".flip-container");
      flip?.classList.remove("rotateY-180");
      card.classList.remove("faded");
    });
  };

  return (
    <div ref={ref} className="relative mx-auto w-full min-h-screen max-sm:pt-10">
      {isInView && (
        <motion.div className="text-center font-Poppins text-cases text-black font-light py-16 uppercase">
          our CASES
        </motion.div>
      )}

      {/* Título grande */}
      <div className="max-sm:hidden sticky top-10">
        {isInView && (
          <div className="relative flex justify-center">
            <motion.h2
              initial={{ opacity: 0, scale: 3, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.2,
              }}
              className="text-[200px] uppercase font-antonio text-black font-bold safari-text-stroke will-change-transform"
            >
              WORK
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, scale: 2.8, y: -50, rotate: -5, x: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, x: 0 }}
              transition={{
                duration: 1,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.2,
              }}
              className="absolute top-[20%] left-[45%] z-10 text-[100px] font-light font-signature text-easternBlue will-change-transform"
            >
              Showcase
            </motion.h3>
          </div>
        )}
      </div>

      {/* Grid de imágenes con giro */}
      <div className="grid grid-cols-3 gap-8 px-24 " ref={gridRef}>
        {images.map(({ src, ...rest }, i) => (
          <div
            key={i}
            className="work-grid-card w-full relative perspective h-[300px] cursor-pointer"
            onMouseEnter={handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flip-container">
              {/* Frente */}
              <div className="flip-side">
                <img
                  className="w-full h-full object-cover inner-image"
                  src={src}
                  alt="front"
                />
              </div>

              {/* Reverso */}
              <div className="flip-side flip-back">
                <CardBack {...rest} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
