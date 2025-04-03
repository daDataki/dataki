"use client"

import Hero from '../../components/hero/Hero';
import beacon from '../../../public/images-proyecto/vml-hero.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './vml.css'
import Footer from '../../components/footer/Footer'
import PreviousNext from '../../components/previous-next/PreviousNext'
import { useState, useEffect } from "react";




const images = [
  "/images-proyecto/Mesa-de-trabajo1.png",
  "/images-proyecto/Mesa-de-trabajo2.png",
  "/images-proyecto/mesa-3.png",
];


export default function Vml() {
  const [degrees, setDegrees] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [oreoPhones, setOreoPhones] = useState([
    { id: 1, src: "/images-proyecto/oreo1.png", position: 0, },
    { id: 2, src: "/images-proyecto/oreo2.png", position: 1, },
    { id: 3, src: "/images-proyecto/oreo3.png", position: 2, },

  ]);

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
    const interval = setInterval(() => {
      setDegrees((prevDegrees) => (prevDegrees + 4) % 182); // Se reinicia cuando llega a 270°
    }, 100); // Velocidad de giro ajustada para suavidad

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
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

    const intervalAnime = setInterval(() => {
      setOreoPhones(prev => {
        const newPhones = [...prev];

        newPhones.forEach(phone => {
          phone.position = (phone.position + 2) % 3;
        });
        return newPhones;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(intervalAnime);
    }
  }, [images.length]);

  return (
    <>
      <div className='overflow-clip'>
        <div><Hero
          overlayColor='bg-white'
          textBlack='text-black'
          title="VML"
          backgroundImage={beacon.src}
          prev='/daytona'
          next='/aon'
          clientInfo={{
            group: "",
            date: "2020-Ongoing",
            name: "VML USA",
            categories: [
              "Front & back-end Development",
              "Digital Campaigns",
              "Video Production",
              "Graphic Design",
            ],
          }}
          aboutInfo={["VML USA", <br key="1" />, "Work Showcase"]}
          services={{
            description:
              "We teamed up with VML to support their digital campaigns with strong web development and high-quality video production, giving their projects a technological boost.",
            list: [
              "front & back-end Development",
              "Digital Campaigns",
              "Video Production",
              "Graphic Design",
            ],
          }}
        /></div>
        <div className='relative '>
          <video
            className="w-full h-auto object-cover"
            controls
            playsInline
          >
            <source src="/video/VML-SIN-AUDIO.mp4" type="video/mp4" />
          </video>
        </div>
        <div className='relative pt-40 pb-16 px-12 bg-white'>
          <div className='relative'>
            <div>
              <h2 className='font-antonio font-bold uppercase text-caption1 text-black'>
                hellman&apos;s
              </h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h2 className='sticky top-0 fontSize-fluid font-antonio font-medium text-bordered uppercase'>
                FRONT END
              </h2>
              <Image
                className="relative w-[47vw] h-auto z-10 top-[-4vw]"
                src="/images-proyecto/Hellmans-Mockup.png"
                alt="Hellmans-Mockup"
                layout="intrinsic"
                width={800}
                height={1111}
              />
            </div>
          </div>
        </div>
        <div className='relative flex justify-center items-center bg-[#d8e7f2] py-[11.11vw] px-[13.33vw]'>

          <div className='w-full flex justify-center'>
            <Image
              className="relative w-full"
              src="/images-proyecto/Ellipse-104.png"
              alt="Ellipse-104"
              layout="intrinsic"
              width={800}
              height={1111}
            />
          </div>
          <div className='absolute flex justify-center left-[7vw] items-center top-1/2 -translate-y-[39%]'>

            <div className='relative w-[26.31vw] left-[15vw] h-auto '>
              <Image
                className="relative w-full h-auto"
                src="/images-proyecto/PHONE-110.png"
                alt="PHONE-110"
                layout="intrinsic"
                width={800}
                height={1111}
              />
            </div>
            <div className="relative w-[37.91vw] h-auto z-10">
              <Image
                className="relative w-full h-auto"
                src="/images-proyecto/PHONE-111.png"
                alt="PHONE-111"
                layout="intrinsic"
                width={800}
                height={1111}
              />
              <div className="absolute top-[16.5vw] left-[7.2vw] w-[18vw] h-auto">
                <Image
                  className="relative rotate"
                  style={{
                    transform: `rotate(${degrees}deg)`,
                    transition: "transform 0.1s linear",
                  }}
                  src="/images-proyecto/mayometer-pointer.png"
                  alt="mayometer-pointer"
                  layout="intrinsic"
                  width={800}
                  height={1111}
                />
              </div>
            </div>

            <div className='relative w-[29vw] right-[14vw] top-[-1vw] h-auto '>
              <Image
                className="relative w-full h-auto"
                src="/images-proyecto/PHONE-18.png"
                alt="PHONE-18"
                layout="intrinsic"
                width={800}
                height={1111}
              />
            </div>

          </div>
        </div>
        <div className='relative pt-40 pb-16 px-12 bg-[#3a0f4e] bg-gradient-to-t from-black/100 to-transparent min-h-[150vh]'>
          <div className='relative'>
            <h2 className='font-antonio font-bold uppercase text-caption1 text-white'>
              glade
            </h2>
          </div>
          <div className='sticky top-20 z-0 flex flex-col items-center justify-center py-10'>
            <h2 className='fontSize-fluid font-antonio font-medium text-bordered-back uppercase'>
              BACK END
            </h2>
          </div>
          <div className='relative w-full flex flex-col'>
            <div className='relative flex justify-center items-center w-full top-[8vw] z-20'>
              <Image
                className="relative w-[45vw] h-auto"
                src="/images-proyecto/Glade-Mockup1.png"
                alt="PHONE-110"
                layout="intrinsic"
                width={800}
                height={1111}
              />

              <Image
                className="relative w-[45vw] h-auto z-20"
                src="/images-proyecto/Glade-Mockup3.png"
                alt="PHONE-110"
                layout="intrinsic"
                width={800}
                height={1111}
              />

              <Image
                className="absolute w-[45vw] h-auto z-20"
                src="/images-proyecto/Glade-Mockup2.png"
                alt="PHONE-110"
                layout="intrinsic"
                width={800}
                height={1111}
              />

            </div>

            <div className='relative flex justify-center items-center w-full mt-[-13vw]'>
              <Image
                className="relative w-[45vw] h-auto left-[11vw] z-10"
                src="/images-proyecto/Glade-Mockup4.png"
                alt="PHONE-110"
                layout="intrinsic"
                width={800}
                height={1111}
              />
              <Image
                className="relative w-[45vw] h-auto right-[11vw]"
                src="/images-proyecto/Glade-Mockup5.png"
                alt="PHONE-110"
                layout="intrinsic"
                width={800}
                height={1111}
              />
            </div>
          </div>

        </div>
        <div className='relative w-full flex flex-col pt-20 pb-32 px-12 bg-[#ffcb11]'>
          <div className='relative w-full pb-12'>
            <h2 className='font-antonio font-bold uppercase text-caption1 '>
              Belvita
            </h2>
          </div>
          <div className='absolute w-full top-[40%]'>
            <h2 className='fontSize-fluid font-antonio font-medium text-bordered uppercase'>
              FRONT END
            </h2>
          </div>
          <div className='flex w-full overflow-hidden justify-center'>
            <div className="flex justify-center items-center relative">
              <Image
                className="relative w-[300px] z-10"
                src="/images-proyecto/Hellmans-Mockup2.png"
                alt="Main Image"
                layout="intrinsic"
                width={800}
                height={1111}
              />
              <div className='w-[88%] absolute'>
                <div className='flex gap-8'
                  style={{
                    transform: `translateX(calc(-${currentIndex * 100}% - ${2 * currentIndex}rem))`,
                    transition: '0.2s',
                  }}
                >
                  {images.map((img, index) => (
                    <Image key={index}
                      className="w-[100%]"
                      src={img}
                      alt={`Slide ${1}`}
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
        <div className='w-full py-32 bg-[#E7DCCE] px-12'>
          <div className='w-full sticky top-0'>
            <h2 className=' font-antonio font-bold uppercase text-caption1 text-black'>
              DIGIORNO
            </h2>
          </div>
          <div className="w-full flex justify-center items-center">
      {/* Primera Imagen */}
      <motion.div
        id="flip-image-1"
        className="relative z-10 w-[18vw]"
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: visibility.image1 ? 180 : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <Image
          className="relative w-full"
          src="/images-proyecto/dig1.png"
          alt="Main Image"
          layout="intrinsic"
          width={800}
          height={1111}
        />
      </motion.div>

      {/* Segunda Imagen */}
      <motion.div
        id="flip-image-2"
        className="relative top-[-5vw] z-10 w-[18vw]"
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: visibility.image2 ? 180 : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <Image
          className="relative w-full"
          src="/images-proyecto/dig2.png"
          alt="Second Image"
          layout="intrinsic"
          width={800}
          height={1111}
        />
      </motion.div>

      {/* Tercera Imagen */}
      <motion.div
        id="flip-image-3"
        className="relative z-10 w-[18vw]"
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: visibility.image3 ? 180 : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <Image
          className="relative w-full"
          src="/images-proyecto/dig3.png"
          alt="Third Image"
          layout="intrinsic"
          width={800}
          height={1111}
        />
      </motion.div>
    </div>
    <div className="w-full flex justify-center items-center">
      {/* Cuarta Imagen */}
      <motion.div
        id="flip-image-4"
        className="relative z-10 w-[18vw]"
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: visibility.image4 ? 180 : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <Image
          className="relative w-full"
          src="/images-proyecto/dig4.png"
          alt="Fourth Image"
          layout="intrinsic"
          width={800}
          height={1111}
        />
      </motion.div>

      {/* Quinta Imagen */}
      <motion.div
        id="flip-image-5"
        className="relative top-[-5vw] z-10 w-[18vw]"
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: visibility.image5 ? 180 : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <Image
          className="relative w-full"
          src="/images-proyecto/dig5.png"
          alt="Fifth Image"
          layout="intrinsic"
          width={800}
          height={1111}
        />
      </motion.div>

      {/* Sexta Imagen */}
      <motion.div
        id="flip-image-6"
        className="relative z-10 w-[18vw]"
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: visibility.image6 ? 180 : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <Image
          className="relative w-full"
          src="/images-proyecto/dig6.png"
          alt="Sixth Image"
          layout="intrinsic"
          width={800}
          height={1111}
        />
      </motion.div>
    </div>
        </div>
        <div className='flex flex-col w-full py-32 px-12 bg-[#ffde00]'>
          <div className='relative w-full'>
            <motion.h2
              className='font-antonio font-bold uppercase text-caption1 text-black'
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              RAID
            </motion.h2>
          </div>
          <div className='flex justify-center'>
            <motion.div
              className='relative left-[3vw] top-[6vw] w-[20%]'
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Image
                className="w-full z-10"
                src="/images-proyecto/raid1.png"
                alt="RAID Phone 1"
                layout="intrinsic"
                width={800}
                height={1111}
              />
            </motion.div>
            <motion.div
              className='w-[25%] z-10'
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.2 }} // ⚡ Se activa más rápido
            >
              <Image
                className="w-full z-10"
                src="/images-proyecto/raid2.png"
                alt="RAID Phone 2"
                layout="intrinsic"
                width={800}
                height={1111}
              />
            </motion.div>
            <motion.div
              className='relative right-[3vw] top-[6vw] w-[20%]'
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: false, amount: 0.2 }} // ⚡ Se activa más rápido
            >
              <Image
                className="w-full z-10"
                src="/images-proyecto/raid3.png"
                alt="RAID Phone 3"
                layout="intrinsic"
                width={800}
                height={1111}
              />
            </motion.div>
          </div>
        </div>

        <div className='bg-[#bababa] px-12 py-32 '>
          <div className='flex'>
            <div className='w-1/5'>
              <h2 className='font-antonio font-bold uppercase text-caption1 text-black'>
                OREO
              </h2>
            </div>
            <div className='w-[80%]'>
              <h2 className='fontSize-fluid font-antonio font-medium text-bordered uppercase'>
                FRONT END
              </h2>
            </div>
          </div>
          <div className='flex justify-center items-center w-full relative '>
            {oreoPhones.map((phone, index) => (
              <motion.div
                key={phone.id}
                className='absolute flex justify-end items-center'
                initial={false}
                animate={{
                  left: phone.position === 0 ? '0%' : phone.position === 1 ? '70%' : '40%',
                  top: phone.position === 0 ? '-12vw' : phone.position === 1 ? '-7vw' : '-7vw',
                  x: phone.position === 0
                    ? '55%'
                    : phone.position === 1
                      ? '60%'
                      : '100%',
                  zIndex: phone.position === 1 ? 20 : phone.position === 0 ? 10 : 5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 0.8
                }}
              >
                <Image
                  className={`z-10 ${index === 0 ? "w-[18vw]" : index === 1 ? "w-[18vw]" : "w-[18vw]"
                    }`}
                  src={phone.src}
                  alt={`OREO Phone ${phone.id}`}
                  layout="intrinsic"
                  width={800}
                  height={1111}
                />
              </motion.div>
            ))}
          </div>
          <div className='bg-[#bababa] w-full sm:h-[18vw] lg:h-[24vw] xl:h-[28vw]'>

          </div>
        </div>
        <div className='mt-[-1px] bg-[#bababa]  text-[#131313] px-24 z-10'><PreviousNext previousUrl="/daytona" nextUrl="/aon" /></div>
        <div>
          <Footer background="bg-[#131313] " />
        </div>
      </div>
    </>
  );
}
