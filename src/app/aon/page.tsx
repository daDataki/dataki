"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Hero from '../../components/hero/Hero';
import aon from '../../../public/images-proyecto/aon-busy-business.png';
import Image from 'next/image';
import './aon.css'
import PreviousNext from '../../components/previous-next/PreviousNext'
import Footer from '../../components/footer/Footer'
import { useRef, useState, useEffect } from "react";

export default function Aos() {
  const [showSlide1, setShowSlide1] = useState(true);
  const [showSlide2, setShowSlide2] = useState(true);
  const [showSlide3, setShowSlide3] = useState(true);
  const [showSlide4, setShowSlide4] = useState(true);
  const [showSlide5, setShowSlide5] = useState(true);
  const [showSlide6, setShowSlide6] = useState(true);
  const [showSlide7, setShowSlide7] = useState(true);
  const [showBusine, setShowBusine] = useState(true)
  const [showStrategy, setShowStrategy] = useState(true)

  // Ocultar imágenes después de la animación
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowSlide1(false);
    }, 100000);
    const timer2 = setTimeout(() => {
      setShowSlide2(false);
    }, 100000);
    const timer3 = setTimeout(() => {
      setShowSlide3(false);
    }, 100000);
    const timer4 = setTimeout(() => {
      setShowSlide4(false);
    }, 100000);
    const timer5 = setTimeout(() => {
      setShowSlide5(false);
    }, 100000);
    const timer6 = setTimeout(() => {
      setShowSlide6(false);
    }, 100000);
    const timer7 = setTimeout(() => {
      setShowSlide7(false);
    }, 100000);
    const timer8 = setTimeout(() => {
      setShowBusine(false);
    }, 100000);
    const timer9 = setTimeout(() => {
      setShowStrategy(false);
    }, 100000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
      clearTimeout(timer8);
      clearTimeout(timer9);
    };
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

  return (
    <>
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
        <div className="bg-[#131313]">
          {/* Título "Busine" */}
          <AnimatePresence>
          {showBusine && (
            <motion.h2
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 2 }}
              className="relative top-[9vw] text-end fontSize-gra-desig font-antonio font-medium text-bordered uppercase"
            >
              Busine
            </motion.h2>
          )}
          </AnimatePresence>
          {/* Imagenes entrando de izquierda y derecha */}
          <div className="flex justify-between items-center">
            <AnimatePresence>
              {showSlide1 && (
                <motion.img
                  key="slide1"
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  className='relative w-[21.6vw] h-auto'
                  src="/images-proyecto/Slide1.png"
                  alt="Aon"
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {showSlide2 && (
                <motion.img
                  key="slide2"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  className='relative w-[13.75vw] h-auto'
                  src="/images-proyecto/Slide2.png"
                  alt="Aon"
                />
              )}
            </AnimatePresence>
          </div>

          {/* Imagen 6 aparece lentamente, luego Imagen 7 hace lo mismo */}
          <div className="relative flex justify-center top-[-7vw]">
            <AnimatePresence>
              {showSlide6 && (
                <motion.img
                  key="slide6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 3 }}
                  exit={{ opacity: 0 }}
                  className='relative w-[22.7vw] h-auto top-[-7vw]'
                  src="/images-proyecto/Slide6.png"
                  alt="Aon"
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {showSlide7 && (
                <motion.img
                  key="slide7"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  exit={{ opacity: 0 }}
                  className='absolute top-0 w-[40.69vw] h-auto z-10'
                  src="/images-proyecto/Slide7-1.png"
                  alt="Aon"
                />
              )}
            </AnimatePresence>
          </div>

          {/* Más imágenes de izquierda y derecha */}
          <div className="flex justify-between items-center">
            <AnimatePresence>
            {showSlide3 && (
              <motion.img
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className='relative w-[32.7vw] h-auto z-10'
                src="/images-proyecto/Slide3.png"
                alt="Aon"
              />
            )}
            </AnimatePresence>
            <AnimatePresence>
            {showSlide4 && (
              <motion.img
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className='relative w-[32.7vw] h-auto top-[-3vw]'
                src="/images-proyecto/Slide4.png"
                alt="Aon"
              />
            )}
            </AnimatePresence>

          </div>

          {/* Título "Strategy" y Slider 5 */}
          <div className="relative flex justify-between items-center mt-8 pb-[32vw]">
            <AnimatePresence>
            {showStrategy && (
              <motion.h2
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 2 }}
                className="relative top-[-7vw] fontSize-gra-desig font-antonio font-medium text-bordered uppercase"
              >
                strategy
              </motion.h2>
            )}
            </AnimatePresence>

            <AnimatePresence>
              {showSlide5 && (
                <motion.img
                  key="slide5"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                  exit={{ x: 300, opacity: 0 }}
                  className='relative w-[21.45vw] h-auto'
                  src="/images-proyecto/Slide5.png"
                  alt="Aon"
                />
              )}
            </AnimatePresence>
          </div>

          <div className='w-[80%] my-[5vw] mx-auto bg-[#ca262c]'>
            <PreviousNext className='text-white' />
          </div>
          <div>
            <Footer background="bg-black " />
          </div>
        </div>
      </div>
    </>
  );
}
