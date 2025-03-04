'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import './AnimatedAos.css';



export default function AnimatedAos() {
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
        const interval = setInterval(() => {
            // 1️⃣ Ocultar todas las imágenes (se activa la animación de salida)
            setShowSlide1(false);
            setShowSlide2(false);
            setShowSlide3(false);
            setShowSlide4(false);
            setShowSlide5(false);
            setShowSlide6(false);
            setShowSlide7(false);
            setShowBusine(false);
            setShowStrategy(false);
    
            // 2️⃣ Esperamos la duración de la animación de salida antes de volver a mostrar
            setTimeout(() => {
                setShowSlide1(true);
                setShowSlide2(true);
                setShowSlide3(true);
                setShowSlide4(true);
                setShowSlide5(true);
                setShowSlide6(true);
                setShowSlide7(true);
                setShowBusine(true);
                setShowStrategy(true);
            }, 5000); // ⏳ Esperar más de lo que tarda la animación de salida
        }, 8000); // 🔄 Se repite cada 8 segundos
    
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="bg-[#131313] sm:h-[70vh] md:h-[90vh] lg:h-[120vh] xl:h-[140vh] 2xl:h-[160vh] overflow-hidden">
            {/* Título "Busine" */}
            <div className='relative'>
            <AnimatePresence>
                {showBusine && (
                    <motion.h2
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 2 }}
                        exit={{ x: -1000, opacity: 0 }}
                        className="relative top-[9vw] text-end fontSize-gra-desig font-antonio font-medium text-bordered uppercase"
                    >
                        Busine
                    </motion.h2>
                )}
            </AnimatePresence>
            </div>
            
            {/* Imagenes entrando de izquierda y derecha */}
            <div className="flex justify-between items-center">
                <AnimatePresence>
                    {showSlide1 && (
                        <motion.img
                            key="slide1"
                            initial={{ x: -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            exit={{ x: 1000, y: -400, opacity: 0 }}
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
                            exit={{ x: -1000, y: 400, opacity: 0 }}
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
                            transition={{ duration: 2, delay: 1 }}
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
                            transition={{ duration: 2, delay: 2 }}
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
                            transition={{ duration: 1 }}
                            exit={{ x: 300, y: -400, opacity: 0 }}
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
                            transition={{ duration: 1 }}
                            exit={{ x: -300, y: 400, opacity: 0 }}
                            className='relative w-[32.7vw] h-auto top-[-3vw]'
                            src="/images-proyecto/Slide4.png"
                            alt="Aon"
                        />
                    )}
                </AnimatePresence>

            </div>

            {/* Título "Strategy" y Slider 5 */}
            <div className="relative flex justify-between items-center mt-8 ">
                <AnimatePresence>
                    {showStrategy && (
                        <motion.h2
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 2 }}
                            exit={{ x: 1000, opacity: 0 }}
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
                            transition={{ duration: 1, delay: .5 }}
                            exit={{ x: -1000, opacity: 0 }}
                            className='relative w-[21.45vw] h-auto'
                            src="/images-proyecto/Slide5.png"
                            alt="Aon"
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
