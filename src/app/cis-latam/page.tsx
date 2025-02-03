"use client"

import Hero from '@/components/hero/Hero';
import cis from '../../../public/images-proyecto/cis-latam.png';
import './cis-latam.css'
import Image from 'next/image';
import { useState } from "react";
import PreviousNext from '../../components/previous-next/PreviousNext'

const images = [
  "/images-proyecto/Cis-PautaDigital-S01.png",
  "/images-proyecto/CONTENT.png",
  "/images-proyecto/Cis-PautaDigital-S02.png",

];


export default function CisLatam() {
  const [activeIndex, setActiveIndex] = useState(1);

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div>
        <div><Hero
          title="CIS latam"
          backgroundImage={cis.src}
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
          aboutInfo="Cis Latam work showcase"
          services={{
            description:
              "We helped Cis Latam launch with a comprehensive digital and strategic package, covering everything from branding and video production to app design and go-to-market strategy.",
            list: [
              "video & graphic design",
              "Branding & Marketing Campaigns",
              "Digital & Go-To-Market Strategies",
              "App & Web UX/UI Design",
            ],
          }}
        /></div>
        <div className="relative w-full h-[60vh] md:h-[120vh] flex justify-end items-center  bg-black mt-[-1px]">
          <div className="w-full absolute flex justify-center top-1/2 left-1/2 -translate-x-[47%] -translate-y-[70%]">
            <Image
              className="w-[70%] lg:w-[40%]"
              src="/images-proyecto/Ellipse31.png"
              alt="vida-estilo"
              width={879}
              height={879}
            />
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-antonio font-semibold text-[50px]  md:text-[70px] lg:text-[100px] uppercase text-black text-center">
              digital <br /> strategy
            </h2>
          </div>
          <div className='flex justify-center w-full absolute top-1/2 left-1/2 -translate-x-[70%]  lg:-translate-x-[60%] -translate-y-1/2 '><Image
              className="w-[70%] lg:w-[45%]"
              src="/images-proyecto/CisUp-Mockup-Phone.png"
              alt="vida-estilo"
              width={879}
              height={879}
            /></div>    
        </div>
        <div className='flex flex-col w-full mt-[-1px]'>
          <video
            className="w-full h-screen object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/institucional-cisup2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className='bg-black py-28 mt-[-1px]'>
          <div className='relative flex justify-end font-antonio font-semibold fontSize-fluid-branding text-bordered top-[109%] lg:top-[123%] xl:top-[118%] 2xl:top-[110%]'>
            <h2 className='relative uppercase text-bordered-branding '>branding</h2>
            <div className="absolute w-1/4 h-auto top-[88%] pr-0">
              <Image
                className="w-full"
                src="/images-proyecto/Group-42.png"
                alt="vida-estilo"

                width={380} // 
                height={1088}
              />
            </div>
          </div>
          <div className="flex items-center justify-center py-8 md:py-32 mt-6 md:mt-24">
            <button onClick={prevSlide} className="hidden text-3xl font-bold text-white">❮</button>
            <div className="w-full flex justify-around">
              {images.map((src, index) => {
                // Definir si la imagen es la activa (central)
                const isActive = index === activeIndex;
                // Definir si la imagen es adyacente a la activa
                const isAdjacent = index === activeIndex - 1 || index === activeIndex + 1;

                return (
                  <div
                    key={index}
                    className={`relative transition-all duration-500
                    ${isActive ? "scale-100 py-2 md:py-12 bg-white shadow-lg" : ""}
                    ${isAdjacent ? "scale-x-95  scale-y-75" : ""}
                    ${!isActive && !isAdjacent ? "scale-75  scale-y-90" : ""}`}
                    style={{
                      width: isActive ? "25%" : isAdjacent ? "22%" : "15%", // Tamaños dinámicos
                      borderRadius: "12px",
                    }}
                  >
                    <img
                      src={src}
                      alt={`Cis-Slide ${index}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                );
              })}
            </div>
            <button onClick={nextSlide} className="hidden text-3xl font-bold text-white">❯</button>
          </div>
          <div className='w-9/12 flex justify-center'><h2 className='text-white font-antonio font-light text-2xl lg:text-6xl uppercase'>Blending creativity <br /> and strategy for <br /> impactful growth.</h2></div>
        </div>
        <div className="relative w-full bg-black mt-[-1px]">
          <Image
            className="w-full"
            src="/images-proyecto/cis-slider-1.png"
            alt="cis-slider"
            layout="intrinsic"
            width={1447} // 
            height={962}
          />
          <Image
            className="absolute w-[90%] top-[44%] left-1/2 transform -translate-x-1/2 z-10"
            src="/images-proyecto/CisUp-Landing-Mockup.png"
            alt="cis-slider"
            layout="intrinsic"
            width={1835} // 
            height={912}
          />
          <Image
            className="hidden absolute w-9/12 top-[127%] left-1/2 transform -translate-x-1/2 "
            src="/images-proyecto/CisUp-Landing-Screen.png"
            alt="CisUp-Landing-Screen"
            layout="intrinsic"
            width={1051} // 
            height={477}
          />
          <Image
            className="hidden absolute w-9/12 top-[178%] left-1/2 transform -translate-x-1/2 "
            src="/images-proyecto/CisUp-Landing-Screen-3.png"
            alt="CisUp-Landing-Screen"
            layout="intrinsic"
            width={1051} // 
            height={477}
          />
        </div>
        <div className='bg-black h-70'></div>
        <div className='relative flex flex-col rectangulo62 h-[100vh] sm:h-[150vh] md:h-[200vh] lg:h-[240vh] xl:h-[270vh] 2xl:h-[300vh] mt-[-1px]' >
          <div className='relative flex flex-col top-[16%]  font-antonio font-semibold fontSize-fluid-marketing ]'>
            <h2 className='uppercase text-bordered-marketing '>marketing</h2>
            <h2 className='uppercase text-bordered-marketing self-end mr-14 '>campaign</h2>
          </div>
          <div className='relative flex flex-row justify-between top-[2%]'>
            <Image
              className="w-[19%]  "
              src="/images-proyecto/Group-43.png"
              alt="CisUp-Landing-Screen"
              layout="intrinsic"
              width={379} // 
              height={1087}
            />
            <Image
              className="relative w-[65%] top-24 "
              src="/images-proyecto/Cis-PautaDigital-S04-Mailings.png"
              alt="CisUp-Landing-Screen"
              layout="intrinsic"
              width={815} // 
              height={1103}
            />
          </div>
          <div className='absolute w-full bottom-0'>
            <Image
              className="w-full"
              src="/images-proyecto/Frame.png"
              alt="CisUp-Landing-Screen"
              style={{ objectFit: 'contain' }}
              width={379} // 
              height={1087}
            />
          </div>
          <div className='relative top-[25%] lg:top-[18%] 2xl:top-[15%] w-[80%] mx-auto'>
            <PreviousNext />
          </div>
        </div>
      </div>
    </>
  );
}
