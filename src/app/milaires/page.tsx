"use client"

import Hero from '../../components/hero/Hero';
import beacon from '../../../public/images-proyecto/milaires-hero.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './milaires.css'
import ClaroSessions from '@/components/claro-sessions/page';
import Footer from '../../components/footer/Footer'
import PreviousNext from '../../components/previous-next/PreviousNext'
import { useState, useEffect } from "react";




const images = [
  "/images-proyecto/milaires1-slider.png",
  "/images-proyecto/milaires2-slider.png",
  "/images-proyecto/milaires3-slider.png",
];


export default function Milaires() {
  const [currentIndex, setCurrentIndex] = useState(2);
  

  const [visibility, setVisibility] = useState({
    image1: false,
    image2: false,
    image3: false,
    image4: false,
    image5: false,
    image6: false
  });

  // Detectar si la imagen es visible en la pantalla
  const checkVisibility = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    }
    return false;
  };

  // Función para manejar el scroll y actualizar la visibilidad de cada imagen
  useEffect(() => {
    const handleScroll = () => {
      setVisibility(() => ({
        image1: checkVisibility("flip-image-1"),
        image2: checkVisibility("flip-image-2"),
        image3: checkVisibility("flip-image-3"),
        image4: checkVisibility("flip-image-4"),
        image5: checkVisibility("flip-image-5"),
        image6: checkVisibility("flip-image-6"),
      }));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verifica si ya está visible al cargar

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let direction = 1; // 1 para incrementar, -1 para decrementar

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Cambia la dirección si llegas a los límites
        if (prevIndex === images.length - 1) {
          direction = -1; // Cambia a decrementar
        } else if (prevIndex === 0) {
          direction = 1; // Cambia a incrementar
        }

        // Retorna el nuevo índice basado en la dirección
        return prevIndex + direction;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      
    }
  }, [images.length]);

  return (
    <>
      <div className='overflow-clip'>
        <div><Hero
          overlayColor='bg-white'
          textBlack='text-black'
          title="MILAIRES"
          backgroundImage={beacon.src}
          prev='/cis-latam'
          next='/daytona'
          clientInfo={{
            group: "",
            date: "2024-Ongoing",
            name: "MILAIRES",
            categories: [
              "Digital Strategy & Campaigns",
              "Graphic Design",
              "Media",
              "Data Analytics",
            ],
          }}
          aboutInfo={["MILAIRES", <br key="1" />, "Work Showcase"]}
          services={{
            description:
              "MilAires came to us for a comprehensive digital strategy. We manage their social media, tailor campaigns, run data analytics, and design attractive visuals to enhance their presence.",
            list: [
              "Digital Strategy & Campaigns",
              "Graphic Design",
              "Media",
              "Data Analytics",
            ],
          }}
        /></div>
        <div className='relative px-12 pb-40 [background-image:linear-gradient(to_bottom,white_75%,#131313_75%)] bg-no-repeat bg-cover'>
          <div className='absolute top-[11vw]'>
            <h2 className='uppercase font-antonio font-medium text-bordered-miliares font-digital-miliares'>
              digital
            </h2>
          </div>
          <div className='relative flex justify-center z-20 top-[10vw]'>
            <div className='relative w-[52%] right-[10%]'>
              <Image src="/images-proyecto/milaires-phone1.png" alt="milaires-phone1" className=" z-10 top-0 w-full" width={450} height={800} />
              <video className="phone-video z-20" autoPlay loop muted playsInline>
                <source src="/video/milaires-video1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className='absolute w-full top-0 left-[38.5%]  z-10'>
            <div className='relative w-[36%] '>
              <video className="phone-video1" autoPlay loop muted playsInline>
                <source src="/video/milaires-video2.mp4" type="video/mp4" />
              </video>
              <Image src="/images-proyecto/milaires-phone3.png" alt="milaires-phone2" className="w-[50vw] z-50 top-0" width={450} height={800} />
            </div>
          </div>
          <div className='absolute w-full right-12 bottom-[15vw]'>
            <h2 className='uppercase font-antonio font-medium text-bordered-miliares font-digital-miliares text-end'>
              strategy
            </h2>
          </div>
        </div>
        <div className='bg-[#131313] py-12'>
          <div className='px-12'>
            <h2 className='uppercase font-milaires-crafting text-white font-antonio font-normal '>
              crafting engaging  <br /> solutions that drive <br /> digital transformation.
            </h2>
          </div>
          <div className='relative'>
            <h2 className='uppercase font-antonio font-medium text-white font-digital-miliares text-end'>
              graphic
            </h2>
          </div>
          <div className='relative flex justify-between right-12'>
            <motion.div
              id="flip-image-1"
              initial={{ rotateY: 0, scale: 0.3, }}
              animate={{
                rotateY: visibility.image1 ? 360 : 0,
                scale: visibility.image1 ? 1.1 : 1,
              }}
              transition={{
                rotateY: {
                  duration: 1,
                  ease: "easeInOut",
                },
                scale: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            >
              <Image
                src="/images-proyecto/milaires-1.png"
                alt="milaires-1"
                className="w-[23vw] z-50 top-0"
                width={326}
                height={326}
              />
            </motion.div>

            <motion.div
              id="flip-image-2"
              initial={{ rotateY: 0, scale: 0.3 }}
              animate={{
                rotateY: visibility.image1 ? 360 : 0,
                scale: visibility.image1 ? 1.1 : 1,
              }}
              transition={{
                rotateY: {
                  duration: 1,
                  delay: 0.3,
                  ease: "easeInOut",
                },
                scale: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            >
              <Image src="/images-proyecto/milaires-2.png" alt="milaires-2" className="relative top-[-8vw] w-[23vw] z-20" width={326} height={326} />
            </motion.div>
            <motion.div
              id="flip-image-3"
              initial={{ rotateY: 0, scale: 0.3 }}
              animate={{
                rotateY: visibility.image1 ? 360 : 0,
                scale: visibility.image1 ? 1.1 : 1,
              }}
              transition={{
                rotateY: {
                  duration: 1,
                  delay: 0.5,
                  ease: "easeInOut",
                },
                scale: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            >
              <Image src="/images-proyecto/milaires-3.png" alt="milaires-3" className=" w-[23vw] z-50 top-0" width={326} height={326} />
            </motion.div>
          </div>
          <div className='relative flex justify-center gap-14 z-20'>
            <motion.div
              id="flip-image-4"
              initial={{ rotateY: 0, scale: 0.3 }}
              animate={{
                rotateY: visibility.image1 ? 360 : 0,
                scale: visibility.image1 ? 1.1 : 1,
              }}
              transition={{
                rotateY: {
                  duration: 1,
                  delay: 0.7,
                  ease: "easeInOut",
                },
                scale: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            >
              <Image src="/images-proyecto/milaires-4.png" alt="milaires-4" className="relative top-[-4vw] w-[23vw] left-[1vw] z-20 " width={326} height={326} />
            </motion.div>
            <motion.div
              id="flip-image-5"
              initial={{ rotateY: 0, scale: 0.3 }}
              animate={{
                rotateY: visibility.image1 ? 360 : 0,
                scale: visibility.image1 ? 1.1 : 1,
              }}
              transition={{
                rotateY: {
                  duration: 1,
                  delay: 0.9,
                  ease: "easeInOut",
                },
                scale: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            >
              <Image src="/images-proyecto/milaires-5.png" alt="milaires-5" className="relative left-[6vw] top-[4vw]  w-[23vw] z-20" width={326} height={326} />
            </motion.div>
          </div>
          <div className='relative pl-10 top-[-10vw] z-0'>
            <h2 className='uppercase font-antonio font-medium text-white font-digital-miliares'>
              design
            </h2>
          </div>
        </div>
        <div className='[background-image:linear-gradient(to_bottom,#131313_65%,#1A59A7_65%)] bg-no-repeat bg-cover px-12'>
          <div className='relative'>
            <h2 className='uppercase font-antonio font-medium text-white font-digital-miliares text-media'>
              digital
            </h2>
          </div>
          <div className='relative'>
            <h2 className='uppercase font-antonio font-medium text-white font-digital-miliares text-media'>
              campaigns
            </h2>
          </div>
          <div className='relative top-[-15vw] flex w-full overflow-hidden justify-center '>
            <div className="flex justify-center items-center relative">
              {/* Mockup del teléfono transparente */}
              <Image
                className="relative w-[300px] z-20"
                src="/images-proyecto/milaires-phone-transparent-fixed.png"
                alt="Main Image"
                layout="intrinsic"
                width={800}
                height={1111}
              />

              {/* Carrusel desenfocado (fondo) */}
              <div className="w-[74%] absolute z-10">
                <div
                  className="flex gap-8 blur-sm"
                  style={{
                    transform: `translateX(calc(-${currentIndex * 100}% - ${2 * currentIndex}rem))`,
                    transition: '0.2s',
                  }}
                >
                  {images.map((img, index) => (
                    <Image
                      key={index}
                      className="w-full"
                      src={img}
                      alt={`Slide ${index}`}
                      layout="intrinsic"
                      width={800}
                      height={1111}
                      style={{
                        flexShrink: 0
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* "Ventana nítida" donde se ve la imagen sin blur dentro del teléfono */}
              <div
                className="w-[74%] absolute z-30 overflow-hidden"
                style={{
                  width: '220px',    // Ajustá esto al ancho de la pantalla del mockup
                  height: '390px',   // Ajustá esto a la altura de la pantalla
                  top: '85px',      // Posicioná desde arriba
                  left: 'calc(50% - 107px)' // Centrado horizontal (mitad menos la mitad del ancho)
                }}
              >
                <div
                  className="flex gap-8"
                  style={{
                    transform: `translateX(calc(-${currentIndex * 100}% - ${2 * currentIndex}rem))`,
                    transition: '0.2s',
                  }}
                >
                  {images.map((img, index) => (
                    <Image
                      key={index}
                      className="w-full"
                      src={img}
                      alt={`Slide ${index}`}
                      layout="intrinsic"
                      width={800}
                      height={1111}
                      style={{
                        flexShrink: 0
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' bg-[#1A59A7]'>
          <div className='relative top-[-10vw] flex justify-end pr-12'>
            <h2 className='uppercase font-milaires-crafting text-white font-antonio font-normal'>
              Innovative spaces that <br /> redefine urban landscapes <br /> with excellence and design.
            </h2>
          </div>
          <div className='relative flex flex-col justify-center mt-[-8vw] px-24 pb-16'>
            <ClaroSessions
              images={[
                '/images-proyecto/milaires-carousel-1.png',
                '/images-proyecto/milaires-carousel-2.png',
                '/images-proyecto/milaires-carousel-3.png',
                '/images-proyecto/milaires-carousel-4.png',
                '/images-proyecto/milaires-carousel-5.png',
                '/images-proyecto/milaires-carousel-6.png',
                '/images-proyecto/milaires-carousel-7.png',
                '/images-proyecto/milaires-carousel-8.png',
                '/images-proyecto/milaires-carousel-9.png',
                '/images-proyecto/milaires-carousel-10.png',
              ]}
              title={['social', 'media']}
            />
          </div>
          <div className='flex justify-center mt-[-1px] w-full h-screen'>
            <video
              className=" object-cover w-full"
              controls
              playsInline
            >
              <source src="/video/milaires-video3.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className='mt-[-1px] bg-[#162b45]  text-white px-24 z-10'><PreviousNext previousUrl="/cis-latam" nextUrl="/daytona" /></div>
        <div>
          <Footer background="[background:linear-gradient(to_bottom,_#162b45_10%,_black_100%)]"
          />
        </div>
      </div >
    </>
  );
}
