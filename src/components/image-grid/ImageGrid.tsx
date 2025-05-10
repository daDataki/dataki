"use client";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import "./ImageGrid.css";
import CardBack from "../card-grid/CardBack";


export default function ImageGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "10px 0px" });
  // Refs para cada fila
  const row1Ref = useRef(null);
  const isRow1InView = useInView(row1Ref, { once: true, margin: "-50px 0px" });

  const row2Ref = useRef(null);
  const isRow2InView = useInView(row2Ref, { once: true, margin: "-50px 0px" });

  const row3Ref = useRef(null);
  const isRow3InView = useInView(row3Ref, { once: true, margin: "-50px 0px" });

  const ImageItem = ({
    src,
    alt,
    clase,
    index,
    hoveredIndex,
    setHoveredIndex,
  }: {
    src: string;
    alt: string;
    clase: string;
    index: number;
    hoveredIndex: number | null;
    setHoveredIndex: (index: number | null) => void;
  }) => {
    const isBlurred = hoveredIndex !== null && hoveredIndex !== index;

    return (
      <div
        className="relative w-[27.77svw] h-[300px] perspective cursor-pointer"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <motion.div
          className="w-full h-full relative"
          animate={{ rotateY: hoveredIndex === index ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Lado frontal */}
          <div className="absolute w-full h-full backface-hidden">
            <img
              src={src}
              alt={alt}
              className={`${clase} w-full h-full object-cover rounded-md transition-all duration-300 ${isBlurred ? "blur-sm brightness-75" : ""
                }`}
            />
          </div>

          {/* Lado trasero */}
          <div
            className="absolute w-full h-full backface-hidden"
            style={{ transform: "rotateY(180deg)" }}
          >
            <CardBack image={src} />
          </div>
        </motion.div>
      </div>
    );
  };

  const images = [
    "/images-grid/busy-1.png",
    "/images-grid/Maskgroup2.png",
    "/images-grid/Mask-group33.png",
    "/images-grid/Mask-group4.png",
    "/images-grid/beacon-beach5.png",
     "/images-grid/Mask-group-9.png",
    "/images-grid/Macbook-Claro7.png",
    "/images-grid/TC2K_ENTRADA8.png",
    "/images-grid/miroshnichenko66.png",
  ];

  return (
    <div ref={ref} className="relative mx-auto w-full sm:mb-16 min-h-screen max-sm:pt-10">
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

      {/* Grid de imágenes */}
      <div className="relative overflow-hidden px-24">
        {/* Primer fila */}
        <div
          ref={row1Ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center  mb-12 max-sm:mb-8"
        >
          {images.slice(0, 3).map((src, i) => {
            const globalIndex = i;
            return (
              <motion.div
                key={globalIndex}
                initial={{ scale: 0.1, opacity: 0 }}
                animate={isRow1InView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  delay: globalIndex * 0.3,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <ImageItem
                  key={globalIndex}
                  index={globalIndex}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                  clase=""
                  src={src}
                  alt={`image-${globalIndex}`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Segunda fila */}
        <div
          ref={row2Ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center  mb-12 max-sm:mb-8"
        >
          {images.slice(3, 6).map((src, i) => {
            const globalIndex = i + 3;
            return (
              <motion.div
                key={globalIndex}
                initial={{ scale: 0.1, opacity: 0 }}
                animate={isRow2InView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <ImageItem
                  key={globalIndex}
                  index={globalIndex}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                  clase=""
                  src={src}
                  alt={`image-${globalIndex}`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Tercera fila */}
        <div
          ref={row3Ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center  mb-12 max-sm:mb-8"
        >
          {images.slice(6, 9).map((src, i) => {
            const globalIndex = i + 6;
            return (
              <motion.div
                key={globalIndex}
                initial={{ scale: 0.1, opacity: 0 }}
                animate={isRow3InView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <ImageItem
                  key={globalIndex}
                  index={globalIndex}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                  clase=""
                  src={src}
                  alt={`image-${globalIndex}`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
