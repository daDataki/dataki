"use client";
import { motion, useInView } from "framer-motion";
import Hero from '../../components/hero/Hero';
import aon from '../../../public/images-proyecto/aon-busy-business.png';
import Image from 'next/image';
import './aon.css'
import PreviousNext from '../../components/previous-next/PreviousNext'
import Footer from '../../components/footer/Footer'
import AnimatedAos from '../../components/animated-aos/AnimatedAos'
import { useRef } from "react";

export default function Aos() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

  return (

    <div className='bg-[#ca262c]'>
      <div>
        <Hero
          title="Aon"
          backgroundImage={aon.src}
          clientInfo={{
            group: "",
            date: "2024 Ongoing",
            name: "Aon",
            categories: [
              "Video Production",
              "Front-End Development",
              "Business & Digital Strategy",
              "graphic & digital design",
            ],
          }}
          aboutInfo="Aon work showcase"
          services={{
            description:
              "Aon trusted us to bring their new division to life, from video production to front-end design, giving them a strong digital foundation.",
            list: [
              "Video Production",
              "Front-End Development",
              "Business & Digital Strategy",
              "graphic & digital design",
            ],
          }}
        />
      </div>
      <div ref={ref} className='pt-24 bg-[#141414] bg-gradient-to-t from-[#5d5d5d]/100 to-transparent'>
        {/* Título */}
        <div className='sticky top-0 fontSize-gra-desig font-antonio font-medium text-bordered px-8'>
          <h2>GRAPHIC</h2>
          <h2>DESIGN</h2>
        </div>

        {/* Contenedor de imágenes */}
        <div className='relative w-full mt-[-31vw]'>
          {/* Imagen de la tele */}
          <Image
            className='relative w-[95vw] h-auto'
            src="/images-proyecto/Aon-Mockup-tele.png"
            alt="Aon"
            width={1382}
            height={896}
          />

          {/* Imagen del globo con animación */}
          <motion.img
            initial={{ y: 0, opacity: 1 }} // Empieza visible en su posición original
            animate={isInView ? { y: -1000 } : { y: 0 }} // Sube cuando entra en vista
            transition={{ duration: 5, ease: "easeOut", delay: 1.5 }} // Suaviza el movimiento
            className="absolute right-[4vw] w-[35vw] h-auto top-16"
            src="/images-proyecto/Aon-Globo.png"
            alt="Aon-globo"
          />
        </div>
      </div>

      <AnimatedAos />
      <div className='w-[80%] my-[5vw] mx-auto bg-[#ca262c]'>
        <PreviousNext className='text-white' />
      </div>
      <div>
        <Footer background="bg-black " />
      </div>
    </div>
  );
}
