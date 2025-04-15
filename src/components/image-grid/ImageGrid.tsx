"use client";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import "./ImageGrid.css";
import CardBack from "../card-grid/CardBack";


export default function ImageGrid() {
  const [applyClasses, setApplyClasses] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });
   // Refs para cada fila
   const row1Ref = useRef(null);
   const isRow1InView = useInView(row1Ref, { once: false, margin: "-50px 0px" });
 
   const row2Ref = useRef(null);
   const isRow2InView = useInView(row2Ref, { once: false, margin: "-50px 0px" });
 
   const row3Ref = useRef(null);
   const isRow3InView = useInView(row3Ref, { once: false, margin: "-50px 0px" });

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
    "/images-grid/miroshnichenko66.png",
    "/images-grid/Macbook-Claro7.png",
    "/images-grid/TC2K_ENTRADA8.png",
    "/images-grid/Mask-group-9.png",
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
              initial={{ fontSize: "300px", opacity: 0, scale: 4 }}
              animate={{ fontSize: "-100px", opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              onAnimationComplete={() => setApplyClasses(true)}
              className={`relative font-bold safari-text-stroke font-antonio text-black uppercase ${applyClasses ? "text-work" : ""
                }`}
            >
              WORK
            </motion.h2>
            <motion.h3
              initial={{ fontSize: "300px", opacity: 0, scale: 4 }}
              animate={{ fontSize: "100px", opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              onAnimationComplete={() => setApplyClasses(true)}
              className={`absolute top-[44%] left-[45%] z-10 font-light font-signature text-easternBlue ${applyClasses ? "text-Showcase" : ""
                }`}
            >
              Showcase
            </motion.h3>
          </div>
        )}
      </div>

      {/* Grid de imágenes */}
      <div className="relative overflow-hidden px-24">
        {/* Primer fila */}
        <div ref={row1Ref} className="flex max-sm:flex-col justify-center items-center sm:justify-between sm:items-end mb-responsive mt-responsive max-sm:gap-8 max-sm:mb-8 gap-12">
          {images.slice(0, 3).map((src, i) => {
            const globalIndex = i; // 0, 1, 2
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
        <div ref={row2Ref} className="flex max-sm:flex-col justify-center items-center sm:justify-between sm:items-end mb-responsive max-sm:gap-8 max-sm:mb-8 gap-12">
          {images.slice(3, 6).map((src, i) => {
            const globalIndex = i + 3; // 3, 4, 5
            return (
              <motion.div
                key={globalIndex}
                initial={{ scale: 0.1, opacity: 0 }}
                animate={isRow2InView ? { scale: 1, opacity: 1 } : {}}
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

        {/* Tercera fila */}
        <div ref={row3Ref} className="flex max-sm:flex-col justify-center items-center sm:justify-between sm:items-end mb-responsive max-sm:gap-8 max-sm:mb-8 gap-12">
          {images.slice(6, 9).map((src, i) => {
            const globalIndex = i + 6; // 6, 7, 8
            return (
              <motion.div
                key={globalIndex}
                initial={{ scale: 0.1, opacity: 0 }}
                animate={isRow3InView ? { scale: 1, opacity: 1 } : {}}
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

      </div>
    </div>
  );
}
