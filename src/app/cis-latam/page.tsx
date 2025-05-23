"use client"

import Hero from '@/components/hero/Hero';
import cis from '../../../public/images-proyecto/cis-slider-1.png';
import './cis-latam.css'
import Image from 'next/image';
import PreviousNext from '../../components/previous-next/PreviousNext'
import Footer from '../../components/footer/Footer'
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";




const images = [
  "/images-proyecto/cis-image-1.png",
  "/images-proyecto/cis-image-2.png",
  "/images-proyecto/cis-image-3.png",
  "/images-proyecto/cis-image-4.png",
  "/images-proyecto/cis-image-5.png",
  "/images-proyecto/cis-image-6.png",
  "/images-proyecto/cis-image-7.png",
  "/images-proyecto/cis-image-8.png",
  "/images-proyecto/cis-image-9.png",
  "/images-proyecto/cis-image-10.png",
  "/images-proyecto/cis-image-11.png",
  "/images-proyecto/cis-image-12.png",
  "/images-proyecto/cis-image-13.png",
  "/images-proyecto/cis-image-14.png",


];


export default function CisLatam() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-120px" });

  const [bgColor, setBgColor] = useState("#FFE300");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!videoRef.current || !canvasRef.current) return;
  
      const video = videoRef.current;
      const canvas = canvasRef.current as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");
  
      if (ctx && video) {
        try {
          ctx.drawImage(video, 0, 0, 4, 2);
          const frame = ctx.getImageData(0, 0, 1, 1).data;
          const color = `rgb(${frame[0]}, ${frame[1]}, ${frame[2]})`;
          setBgColor(color);
        } catch (err) {
          console.warn("No se pudo obtener el color del video:", err);
        }
      }
    }, 500);
  
    return () => clearInterval(interval);
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
      <div>
        <div><Hero
          title="CIS latam"
          backgroundImage={cis.src}
          prev='/aon'
          next='/milaires'
          clientInfo={{
            group: "",
            date: "2022 Ongoing",
            name: "CIS LATAM",
            categories: [
              "Video & Graphic Design",
              "Branding & Marketing Campaigns",
              "Digital & Go-To-Market Strategies",
              "App & Web UX/UI Design",
            ],
          }}
          aboutInfo=<>CIS LATAM <br /> work showcase </>
          services={{
            description:
              "We helped CIS LATAM launch with a comprehensive digital and strategic package, covering everything from branding and video production to app design and go-to-market strategy.",
            list: [
              "video & graphic design",
              "Branding & Marketing Campaigns",
              "Digital & Go-To-Market Strategies",
              "App & Web UX/UI Design",
            ],
          }}
        /></div>
        <div className='bg-black pb-28 xl:pb-64 mt-[-1px] pt-12'>
          <div className='relative flex justify-center items-center'>
            <motion.div
              ref={ref}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center items-center w-[53.52vw] h-[53.52vw] rounded-full"
              style={{ backgroundColor: bgColor }}
            >
              <div className="flex flex-col font-antonio font-medium uppercase fontSize-fluid-digital">
                <span>digital</span>
                <span>strategy</span>
              </div>
            </motion.div>

            <div className='absolute w-[45.76vw] top-[8vw] left-4'>
              <video ref={videoRef} className="phone-video-cis z-20" autoPlay loop muted playsInline>
                <source src="/video/cis-registro.mp4" type="video/mp4" />
              </video>
              <canvas ref={canvasRef} width={1} height={1} className="hidden" />
              <Image
                className="w-full"
                src="/images-proyecto/CisUp-Mockup-Phone.png"
                alt="vida-estilo"
                width={879}
                height={879}
              />
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-[-1px] w-full h-screen'>
          <video
            className=" object-cover w-full"
            controls
            playsInline
          >
            <source src="/video/cis-up-v3-1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className='bg-black py-28 mt-[-1px]'>
          <div className='relative w-full flex justify-start font-antonio font-semibold fontSize-fluid-digital top-[109%] lg:top-[123%] xl:top-[118%] 2xl:top-[110%]'>
            <h2 className='relative pl-12 top-[4.5vw] uppercase text-bordered-branding '>branding</h2>
          </div>
          <div className='relative top-0 flex w-full overflow-hidden justify-center '>
            <div className="flex justify-center items-center relative">
              {/* Mockup del teléfono transparente */}
              <Image
                className="relative w-[200px] sm:w-[375px] z-20"
                src="/images-proyecto/CONTENT.png"
                alt="Main Image"
                layout="intrinsic"
                width={800}
                height={1111}
              />

              {/* Carrusel desenfocado (fondo) */}
              <div className="w-[95%] absolute z-10">
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
                className="w-[200px] sm:w-[375px] absolute z-30 left-1/2 max-sm:-translate-x-[100px] sm:-translate-x-[187px] xl:-translate-x-[188px] overflow-hidden"
                
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
        <div className='bg-gradient-to-t from-[#131313] to-[#000000] bg-no-repeat bg-cover w-full pb-8 sm:pb-24 pl-8 sm:pl-24 flex justify-start mt-[-1px]'><h2 className='text-white font-antonio font-light text-2xl lg:text-6xl uppercase'>Blending creativity <br /> and strategy for <br /> impactful growth.</h2></div>
        <div className='relative bg-gradient-to-t from-[#3b2c57] to-[#131313] bg-no-repeat bg-cover mt-[-1px] pt-12'>
          <h2 className='sticky flex justify-center gap-16 top-0 mb-32 text-center font-antonio font-medium text-bordered text-white fontSize-fluid-digital  uppercase'><span>web</span><span>design</span></h2>
          <div className="relative w-full sm:w-[70%] z-20 mx-auto top-[-10vw] ">
            {/* Contenedor con overflow-hidden para simular el marco de la pantalla */}
            <div className="absolute bg-blue w-[73.2%] h-[75%] top-[6%] left-[13.8%] overflow-hidden">
              <div className="relative w-full h-full">
                {/* Imagen con animación de desplazamiento */}
                <Image
                  className="absolute w-full scrollable-image"
                  src="/images-proyecto/cis-scroll.png"
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
          <img
            className="absolute top-[40vw] z-10 w-full h-screen"
            src="/images-proyecto/cis-frame.png"
            alt="vida-estilo"
          />
        </div>
        <div className=' bg-[#3b2c57]  bg-no-repeat bg-cover relative flex flex-col mt-[-1px]' >
          <div className='relative flex flex-col top-[16%]  font-antonio font-semibold'>
            <h2 className='uppercase pl-12 text-bordered font-medium fontSize-fluid-digital'>marketing</h2>
            <h2 className='uppercase pl-12 text-bordered  font-medium  fontSize-fluid-digital'>campaign</h2>
          </div>
          <div className='w-full relative flex flex-row justify-between top-[-20vw]'>
            <Image
              className="w-[17%]  "
              src="/images-proyecto/Group-43.png"
              alt="CisUp-Landing-Screen"
              layout="intrinsic"
              width={379} // 
              height={1087}
            />
            <div className='flex'>
              <div className='relative flex justify-center left-[9vw] top-[10vw]'>
                <img
                  className="absolute w-[60%] top-[14.7%] h-[70%]"
                  src="/images-proyecto/cis-scroll.png"
                  alt="CisUp-Landing-Screen"

                />
                <Image
                  className="relative w-[77%]"
                  src="/images-proyecto/milaires-phone-transparent-fixed.png"
                  alt="CisUp-Landing-Screen"
                  layout="intrinsic"
                  width={815} // 
                  height={1103}
                /></div>
              <div className='relative flex justify-center top-[-10vw] right-[13vw]'>
                <img
                  className="absolute w-[60%] top-[14.7%] h-[72%]"
                  src="/images-proyecto/cis-scroll-2.png"
                  alt="CisUp-Landing-Screen"

                />
                <Image
                  className="relative w-[77%] "
                  src="/images-proyecto/milaires-phone-transparent-fixed.png"
                  alt="CisUp-Landing-Screen"
                  layout="intrinsic"
                  width={815} // 
                  height={1103}
                /></div>
            </div>
          </div>
          <div className='relative text-white top-[-10vw] w-[80%] mx-auto'>
            <PreviousNext previousUrl="/aon" nextUrl="/milaires" />
          </div>
        </div>
        <div>
          <Footer background="bg-black " />
        </div>
      </div>
    </>
  );
}
