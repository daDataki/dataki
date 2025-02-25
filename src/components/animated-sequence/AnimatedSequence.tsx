'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import './AnimatedSequence.css';

const images = [
    '/images-proyecto/MIAMI-SPACE-0.png',
    '/images-proyecto/MIAMI-SPACE1-1.png',
    '/images-proyecto/MIAMI-SPACE2-1.png',
];

// Duración en milisegundos de cada paso
const stepTimes = [1500, 500, 500, 500, 500, 500]; // Ajusta cada paso según necesites

export default function AnimatedSequence() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const changeStep = (index: number) => {
            timeout = setTimeout(() => {
                setStep((prev) => (prev + 1) % stepTimes.length);
                changeStep((index + 1) % stepTimes.length);
            }, stepTimes[index]);
        };

        changeStep(0); // Iniciar la secuencia
        return () => clearTimeout(timeout); // Limpiar en desmontaje
    }, []);

    const textSocialVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            y: -150,
            transition: { duration: 1 },
        },
    };

    const textMediaVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 150,
            x: 0,
            transition: { duration: 1 },
        },
    };

    return (
        <div className="relative w-full sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] 2xl:h-[100vh] flex items-center justify-center overflow-hidden bg-black">
            <AnimatePresence>
                {/* Imagen 1, visible en los pasos 0, 1, 2 y desaparece en el paso 3 */}
                {step >= 0 && step <= 2 && (
                    <motion.div
                        key="image1"  // Clave única
                        initial={{ x: '-100%' }}  // La imagen comienza desde la izquierda
                        animate={{ x: step >= 1 ? '0%' : '-100%' }}  // Mueve la imagen de izquierda a derecha en los pasos 1 y 2
                        exit={{ y: '-100%', opacity: 0 }}  // La imagen desaparece hacia arriba y se desvanece en el paso 3
                        transition={{ duration: 1 }}
                        className="absolute left-0 "
                    >
                        <Image src={images[0]} alt="Image 1" width={520} height={520} className='w-[520px] h-[520px] sm:w-[80%] sm:h-[80%] md:w-[90%] md:h-[90%] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] 2xl:w-[520px] 2xl:h-[520px]' />
                    </motion.div>
                )}

                {/* Imagen 2, visible en los pasos 1 y 2 */}
                {step >= 1 && step <= 4 && (
                    <motion.div
                        key="image2"  // Clave única
                        initial={{ x: '100%' }}
                        animate={{ x: step >= 2 ? '0%' : '100%' }}
                        exit={{ x: '-100%', opacity: 0, transition: { duration: 1.5, ease: 'easeInOut' } }}
                        transition={{ duration: 1 }}
                        className="absolute right-0  "
                    >
                        <Image src={images[1]} alt="Image 2" width={520} height={520} className='w-[520px] h-[520px] sm:w-[80%] sm:h-[80%] md:w-[90%] md:h-[90%] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] 2xl:w-[520px] 2xl:h-[520px]' />
                    </motion.div>
                )}

                {/* Texto 'Social' */}
                {step >= 1 && step <= 3 && (
                    <motion.h1
                        key="socialText"  // Clave única
                        className="absolute uppercase font-antonio text-white text-animated font-bold left-[20%] -translate-x-1/2 z-10"
                        initial="hidden"
                        animate="visible"
                        exit={{ y: '-100%', opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
                        variants={textSocialVariants}
                    >
                        Social
                    </motion.h1>
                )}

                {/* Texto 'Media' */}
                {step >= 2 && step <= 3 && (
                    <motion.h1
                        key="mediaText"  // Clave única
                        className="absolute uppercase font-antonio text-white text-animated font-bold left-[40%] -translate-x-1/2 z-10"
                        initial="hidden"
                        animate="visible"
                        exit={{ y: '100%', opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
                        variants={textMediaVariants}
                    >
                        Media
                    </motion.h1>
                )}

                {/* Imagen 3, visible en el paso 3 */}
                {step >= 3 && step <= 4 && (
                    <motion.div
                        key="image3"  // Clave única
                        initial={{ x: '-100%' }}
                        animate={{ x: '0%' }}
                        transition={{ duration: 1 }}
                        exit={{ x: '100%', opacity: 0, transition: { duration: 1.5, ease: 'easeInOut' } }}
                        className="absolute left-0 "
                    >
                        <Image src={images[2]} alt="Image 3" width={520} height={520} className='w-[520px] h-[520px] sm:w-[80%] sm:h-[80%] md:w-[90%] md:h-[90%] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] 2xl:w-[520px] 2xl:h-[520px]' />
                    </motion.div>
                )}

                {/* Texto 'Social Media', visible en el paso 4 */}
                {step >= 5 && step <= 6 && (
                    <motion.h1
                        key="finalText"  // Clave única
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        exit={{
                            opacity: 0,  // Se desvanece
                            filter: 'blur(12px)',  // Se vuelve borroso a medida que desaparece
                            transition: {
                                duration: 1,
                                ease: 'easeInOut',
                            }
                        }}
                        className="absolute text-white text-animated font-antonio font-bold uppercase"
                    >
                        Social Media
                    </motion.h1>
                )}
            </AnimatePresence>
        </div>

    );
}
