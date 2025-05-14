"use client"
import Hero from '../../components/hero/Hero';
import tango from '../../../public/images-proyecto/TC2K_ENTRADA.png';
import Image from 'next/image';
import './tango.css'
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";
import Footer from '../../components/footer/Footer'
import PreviousNext from '../../components/previous-next/PreviousNext'


export default function Tango() {
  const [visibility, setVisibility] = useState({
    image1: false,
    image2: false,
    image3: false,
  });

  const checkVisibility = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    }
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      setVisibility(() => ({
        image1: checkVisibility("flip-image-1"),
        image2: checkVisibility("flip-image-2"),
        image3: checkVisibility("flip-image-3"),

      }));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verifica si ya está visible al cargar

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <div>
        <div><Hero
          title={<h1 className="text-tango-title">TANGO Motorsports</h1>}
          backgroundImage={tango.src}
          prev='/claro'
          next='/aon'
          clientInfo={{
            group: "Hospitality Group",
            date: "2022 - 2024",
            name: "TANGO<br>motorsports",
            categories: [
              "Video Production & Graphic Design",
              "UX/UI & Web Development",
              "Business & Digital Strategy",
              "Graphic Design",
            ],
          }}
          aboutInfo={
            <>
              Tango Motorsports
              <br />
              work showcase
            </>
          }
          services={{
            description:
              "We supported Tango C200 with dynamic videos, sleek web design, and full-stack development, all backed by a strategic vision.",
            list: [
              "Video Production",
              "UX/UI & Web Development",
              "Business & Digital Strategy",
              "Graphic Design",
            ],
          }}
        /></div>
        <div className='flex flex-col w-full'>
          <video
            className="w-full h-video object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/Teaser_ Axion.mp4" type="video/mp4" />
          </video>
        </div>
        <div className='relative bg-[#131313] mt-[-1px] pt-12 pb-16'>
          <Image
            className="absolute z-10 w-full bottom-0"
            src="/images-proyecto/tango-back.png"
            alt="vida-estilo"
            width={800}
            height={1111}
            layout="intrinsic"
            priority={true}
          />
          <h2 className='sticky top-0 mb-32 text-center font-antonio font-medium text-white font-web text-bordered-branding  uppercase'>web <br />
            design</h2>
          <div className="relative w-[70%] z-20 mx-auto">
            {/* Contenedor con overflow-hidden para simular el marco de la pantalla */}
            <div className="absolute bg-blue w-[73.2%] h-[75%] top-[6%] left-[13.8%] overflow-hidden">
              <div className="relative w-full h-full">
                {/* Imagen con animación de desplazamiento */}
                <Image
                  className="absolute w-full scrollable-image"
                  src="/images-proyecto/tango-tc-2000.png"
                  alt="vida-estilo"
                  width={800}
                  height={1111}
                  layout="intrinsic"
                  priority={true}
                />
              </div>
            </div>

            {/* Imagen estática de la pantalla */}
            <Image
              className="z-10 w-full"
              src="/images-proyecto/Claro-Mockup.png"
              alt="vida-estilo"
              width={800}
              height={1111}
              layout="intrinsic"
              priority={true}
            />
          </div>
        </div>
        <div className='relative w-full  flex flex-col justify-start bg-[linear-gradient(to_bottom,_#b91c1c_0%,_#4e1a1c_75%,_#141414_100%)]'>
          <div className='sticky top-0 py-12 flex flex-col items-end text-bordered-branding font-web font-antonio  uppercase z-10 pr-12'>
            <h2 className='uppercase  mr-2'>digital</h2>
            <h2 className='uppercase  mr-2'>strategy</h2>
          </div>
          <Image
            className="absolute w-full z-0 opacity-10"
            src="/images-proyecto/Mask-group-2.png"
            alt="vida-estilo"
            layout="intrinsic"
            width={1440}
            height={859}
          />

          <div className='relative flex justify-center items-center w-full top-[-20vw]  gap-10 z-20'>
            <div>
              <motion.div
                id="flip-image-1"
                className="relative z-10 "
                initial={{ rotateY: 0 }}
                animate={{
                  rotateY: visibility.image1 ? 360 : 0,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
              >
                <Image
                  className="max-sm:hidden relative w-image-iphone"
                  src="/images-proyecto/iPhone-1-Pro.png"
                  alt="vida-estilo"
                  layout="intrinsic"
                  width={375}
                  height={859}
                />
              </motion.div>
            </div>
            <div>
              <motion.div
                id="flip-image-2"
                className="relative"
                initial={{ rotateY: 0 }}
                animate={{
                  rotateY: visibility.image2 ? 360 : 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: "easeInOut",
                }}
              >
                <Image
                  className="relative w-image-iphone"
                  src="/images-proyecto/iPhone-centro-Pro.png"
                  alt="vida-estilo"
                  layout="intrinsic"
                  width={375}
                  height={859}
                />
              </motion.div>
            </div>
            <div>
              <motion.div
                id="flip-image-3"
                className="relative "
                initial={{ rotateY: 0 }}
                animate={{
                  rotateY: visibility.image3 ? 360 : 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
              >
                <Image
                  className="max-sm:hidden relative w-image-iphone"
                  src="/images-proyecto/iPhone-3-Pro.png"
                  alt="vida-estilo"
                  layout="intrinsic"
                  width={375}
                  height={859}
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className='bg-[linear-gradient(to_bottom,_#131313_0%,_#141414_-35%,_#1a1a1a_100%)] mt-[-1px] px-12 pt-28 pb-20'>
          <div className=''>
            <h2 className='font-antonio font-semibold font-performance-tango uppercase text-white'>
              Performance-driven <br /> creativity for the <br /> motorsports world.
            </h2>
          </div>
          <div className='w-full flex flex-col justify-end items-end sticky top-0 mb-[16vw]'>
            <h2 className='relative right-[8vw] font-web font-antonio text-white uppercase'>
              media
            </h2>
            <h2 className='font-web font-antonio text-white  uppercase'>
              offline
            </h2>
          </div>
          <div className='z-10'>
            <div className='w-full flex justify-between'>
              <div className='relative w-[31%] top-[-15vw] z-10'><Image
                className="w-full"
                src="/images-proyecto/tango-media-1.png"
                alt="vida-estilo"
                layout="intrinsic"
                width={375}
                height={859}
              /></div>
              <div className='relative w-[43%] top-[-10vw] z-20'>
                <Image
                  className="w-full"
                  src="/images-proyecto/tango-media-2-1.png"
                  alt="vida-estilo"
                  layout="intrinsic"
                  width={375}
                  height={859}
                />
              </div>

            </div>
            <div className='w-full flex justify-between z-10'>
              <Image
                className="relative w-[38%] top-[-33.5vw] left-1/2 transform -translate-x-[82%]"
                src="/images-proyecto/tango-media-3-1.png"
                alt="vida-estilo"
                layout="intrinsic"
                width={375}
                height={859}
              />
            </div>
          </div>
          <div className='z-0'>
            <h2 className='relative  font-web font-antonio  uppercase text-[#DB0940] z-0'>
              &ONLINE
            </h2>
          </div>
        </div>
        <div className='p-24 mx-auto bg-[linear-gradient(to_bottom,_#1a1a1a_0%,_#1a1a1a_2%,_rgba(202,38,44,0.92)_100%)]'>
          <PreviousNext className='text-white' previousUrl="/claro" nextUrl="/aon" />
        </div>
        <div>
          <Footer background="bg-black " />
        </div>
      </div>
    </>
  );
}
