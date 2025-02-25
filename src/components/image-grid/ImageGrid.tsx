"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import "./ImageGrid.css";

export default function ImageGrid() {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <div className="mx-auto w-full sm:mb-16 min-h-screen overflow-hidden max-sm:pt-10">
      {/* Animación del título "our CASES" */}
      <motion.div
        initial={{ fontSize: "300px", y: "50vh", opacity: 1 }}
        animate={{ fontSize: "64px", y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        onAnimationComplete={() => setAnimationComplete(true)}
        className="text-center text-cases font-Poppins text-black font-light sm:pb-16 lg:pb-28 uppercase"
      >
        our CASES
      </motion.div>

      {/* Animación "WORK" y "Showcase" */}
      {animationComplete && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative flex flex-col sm:hidden items-center justify-center"
        >
          <motion.h2
            initial={{ fontSize: "200px", opacity: 0 }}
            animate={{ fontSize: "80px", opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-work font-bold font-antonio text-black uppercase"
          >
            WORK
          </motion.h2>
          <motion.h3
            initial={{ fontSize: "100px", opacity: 0 }}
            animate={{ fontSize: "48px", opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            className="text-7xl font-light font-signature text-easternBlue"
          >
            Showcase
          </motion.h3>
        </motion.div>
      )}

      {/* Aparece el contenido después de la animación */}
      {animationComplete && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
          {/* Primer grupo de imágenes */}
          <div className="flex max-sm:flex-col justify-center items-center sm:justify-between sm:items-end mb-responsive mt-responsive gap-12">
            <div>
              <Image src="/images-grid/busy-1.png" alt="busy-1.png" className="width-major" width={400} height={278} />
            </div>
            <div>
              <Image src="/images-grid/Maskgroup2.png" alt="Mask group 2" className="width-major sm:-translate-y-1/2" width={400} height={278} />
            </div>
            <div>
              <Image src="/images-grid/Mask-group33.png" alt="Mask group 3" className="width-major" width={400} height={278} />
            </div>
          </div>


          {/* Sección 'Work' para pantallas grandes */}
          <div className="max-sm:hidden absolute inset-0 flex items-center justify-center">
            <h2 className="absolute text-work font-bold font-antonio uppercase top-[22%] sm:top-[29%] md:top-[31%] lg:top-[36%] xl:top-[36%] left-1/2 -translate-x-1/2 -translate-y-1/2 work-major">WORK</h2>
            <h3 className="absolute z-10 text-Showcase font-light font-signature text-easternBlue top-[27%] sm:top-[38%] md:top-[38%] lg:top-[42%] xl:top-[42%] 2xl:top-[41%] left-[57%] -translate-x-1/2 -translate-y-1/2 work-showcase">Showcase</h3>
          </div>

          {/* Segundo grupo de imágenes */}
          <div className="relative flex max-sm:flex-col justify-center items-center sm:justify-between sm:items-end sm:left-[7.3vw] mb-responsive max-sm:gap-8 max-sm:mb-8 gap-12">
            <Image src="/images-grid/Mask-group4.png" alt="Mask group 4" className="width-major" width={400} height={278} />
            <div>
              <Image src="/images-grid/beacon-beach5.png" alt="Beacon Beach" className="width-major sm:-translate-y-1/2" width={400} height={278} />
            </div>
            <div>
              <Image src="/images-grid/miroshnichenko66.png" alt="Miroshnichenko" className="width-major sm:-translate-y-[-20%]" width={400} height={278} />
            </div>
          </div>

          {/* Tercer grupo de imágenes */}
          <div className="flex max-sm:flex-col justify-center items-center sm:justify-between sm:items-end max-sm:gap-8 gap-12">
            <Image src="/images-grid/Macbook-Claro7.png" alt="Macbook Claro" className="width-major" width={400} height={278} />
            <Image src="/images-grid/TC2K_ENTRADA8.png" alt="Mask group 8" className="width-major sm:-translate-y-1/2" width={400} height={278} />
            <Image src="/images-grid/Mask-group-9.png" alt="Workspace" className="width-major" width={400} height={278} />
          </div>
        </motion.div>
      )}
    </div>
  );
}
