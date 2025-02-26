"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import "./ImageGrid.css";

export default function ImageGrid() {
  const [applyClasses, setApplyClasses] = useState(false);

  // Referencia para Intersection Observer
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

  return (
    <div ref={ref} className="relative mx-auto w-full sm:mb-16 min-h-screen max-sm:pt-10">
      {/* Animación del título "our CASES" */}
      {isInView && (
        <motion.div className="text-center font-Poppins text-cases text-black font-light py-16 uppercase">
          our CASES
        </motion.div>
      )}

      {/* Sección 'Work' y 'Showcase' para pantallas grandes */}
      <div className="max-sm:hidden sticky top-0">
        {isInView && (
          <div className="relative flex justify-center ">
            {/* Animación de 'WORK' */}
            <motion.h2
              initial={{ opacity: 0, scale: 4 }}  // Empieza con gran tamaño y opacidad 0
              animate={{ opacity: 1, scale: 1 }}  // Se reduce el tamaño y aumenta la opacidad
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}  // Transición suave
              onAnimationComplete={() => setApplyClasses(true)}  // Aplicar clases después de la animación
              className={`relative font-bold font-antonio uppercase ${applyClasses ? "text-work" : ""}`}
            >
              WORK
            </motion.h2>

            {/* Animación de 'Showcase' */}
            <motion.h3
              initial={{ opacity: 0, scale: 4 }}  // Empieza con gran tamaño y opacidad 0
              animate={{ opacity: 1, scale: 1 }}  // Se reduce el tamaño y aumenta la opacidad
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}  // Transición suave
              onAnimationComplete={() => setApplyClasses(true)}  // Aplicar clases después de la animación
              className={`absolute top-[44%] left-[45%] z-10 font-light font-signature text-easternBlue ${applyClasses ? "text-Showcase" : ""}`}
            >
              Showcase
            </motion.h3>
          </div>
        )}
      </div>

      <div className="relative pt-[17%]">
        {/* Contenido con imágenes solo si está en vista */}
        {isInView && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}>

            {/* Primer grupo de imágenes */}
            <div className="flex max-sm:flex-col justify-center items-center sm:justify-between sm:items-end mb-responsive mt-responsivemax-sm:gap-8 max-sm:mb-8 gap-12">
              <div className="relative w-[400px] h-[200px] lg:h-[278px] overflow-hidden width-major">
                <Image src="/images-grid/busy-1.png" alt="busy-1.png" layout="fill" objectFit="cover" />
              </div>
              <div className="relative w-[400px] h-[200px] lg:h-[278px] overflow-hidden width-major sm:-translate-y-1/2">
                <Image src="/images-grid/Maskgroup2.png" alt="Mask group 2" layout="fill" objectFit="cover" />
              </div>
              <div className="relative w-[400px] h-[200px] lg:h-[278px] overflow-hidden width-major">
                <Image src="/images-grid/Mask-group33.png" alt="Mask group 3" layout="fill" objectFit="cover" />
              </div>
            </div>

            {/* Segundo grupo de imágenes */}
            <div className="relative flex max-sm:flex-col justify-center items-center sm:justify-between sm:items-end sm:left-[7.3vw] mb-responsive max-sm:gap-8 max-sm:mb-8 gap-12">
              <div className="relative w-[400px] h-[200px] lg:h-[278px] overflow-hidden width-major">
                <Image src="/images-grid/Mask-group4.png" alt="Mask group 4" layout="fill" objectFit="cover" />
              </div>
              <div className="relative w-[400px] h-[200px] lg:h-[278px] overflow-hidden width-major sm:-translate-y-1/2">
                <Image src="/images-grid/beacon-beach5.png" alt="Beacon Beach" layout="fill" objectFit="cover" />
              </div>
              <div className="relative w-[400px] h-[200px] lg:h-[278px] overflow-hidden width-major sm:-translate-y-[-20%]">
                <Image src="/images-grid/miroshnichenko66.png" alt="Miroshnichenko" layout="fill" objectFit="cover" />
              </div>
            </div>

            {/* Tercer grupo de imágenes */}
            <div className="flex max-sm:flex-col justify-center items-center sm:justify-between sm:items-end max-sm:gap-8 gap-12">
              <div className="relative w-[400px] h-[200px] lg:h-[278px] overflow-hidden width-major">
                <Image src="/images-grid/Macbook-Claro7.png" alt="Macbook Claro" layout="fill" objectFit="cover" />
              </div>
              <div className="relative w-[400px] h-[200px] lg:h-[278px] overflow-hidden width-major sm:-translate-y-1/2">
                <Image src="/images-grid/TC2K_ENTRADA8.png" alt="Forked Road" layout="fill" objectFit="cover" />
              </div>
              <div className="relative w-[400px] h-[200px] lg:h-[278px] overflow-hidden width-major ">
                <Image src="/images-grid/Mask-group-9.png" alt="Rolling Stone" layout="fill" objectFit="cover" />
              </div>
            </div>

          </motion.div>
        )}
      </div>
    </div>
  );
}
