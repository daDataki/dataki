"use client"

import Hero from '../../components/hero/Hero';
import beacon from '../../../public/images-proyecto/beacon-hotel-south-beach.png';
import Image from 'next/image';
import './vida-estilo.css'
import Footer from '../../components/footer/Footer'
import PreviousNext from '../../components/previous-next/PreviousNext'
import { useEffect, useState } from 'react';
import AnimatedSequence from '@/components/animated-sequence/AnimatedSequence';
import DiagonalSlider from '@/components/diagonal-slider/DiagonalSlider';






export default function VidaEstilo() {
  const [brandingHidden, setBrandingHidden] = useState(false);
  const [graphicHidden, setGraphicHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const branding = document.getElementById("branding");
      const graphic = document.getElementById("graphic");
      const design = document.getElementById("design");
      const elevating = document.getElementById("elevating");

      if (!branding || !graphic || !design || !elevating) return;

      const brandingRect = branding.getBoundingClientRect();
      const graphicRect = graphic.getBoundingClientRect();
      const designRect = design.getBoundingClientRect();
      const elevatingReact = elevating.getBoundingClientRect();

      // Ocultar branding cuando graphic esté a 2px de distancia
      if (elevatingReact.top - brandingRect.bottom <= 2) {
        setBrandingHidden(true);
      } else {
        setBrandingHidden(false);
      }

      // Ocultar graphic cuando design esté a 2px de distancia
      if (designRect.top - graphicRect.bottom <= 2) {
        setGraphicHidden(true);
      } else {
        setGraphicHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div className='overflow-clip'>
        <div><Hero
          title="Vida & Estilo"
          backgroundImage={beacon.src}
          prev='/daytona'
          next='/vml'
          clientInfo={{
            group: "Hospitality Group",
            date: "2023-Ongoing",
            name: "Vida & Estilo<br />Hospitality<br />Group",
            categories: [
              "SEO & Data Analytics",
              "Branding & Digital Strategy",
              "Graphic & Web Designs",
              "Online & Social Media Management",
            ],
          }}
          aboutInfo={["Vida & Estilo Hospitality Group", <br key="1" />, "Work Showcase"]}
          services={{
            description:
              "We’re Vida & Estilo’s go-to partner for all things graphic and data. From SEO to design and digital strategies, we support their internal projects to fuel growth and elevate their brand.",
            list: [
              "SEO & Data Analytics",
              "Branding & Digital Strategy",
              "Graphic & Web Design",
              "Online & Social Media Management",
            ],
          }}
        /></div>
        <div className='relative h-[50vh] sm:h-[91vh] md:h-[121vh] lg:h-[158vh] xl:h-[93vw] 2xl:h-[105vw] sm:px-12 bg-black mt-[-1px]'>
          <div className='max-sm:flex max-sm:justify-center sm:sticky font-antonio font-medium fontSize-fluid top-0'>
            <h2 className='uppercase text-bordered'>
              web <br /> design
            </h2>
          </div>
          <div className="hidden relative sm:flex flex-row justify-end w-full h-auto z-10  ">
            {/* Primera imagen (adelante) */}
            <Image
              className="relative w-[70%] xl:w-[50%] !max-w-[800px] right-[2vw] xl:right-[7vw] z-20"
              src="/images-proyecto/Vida&EstiloWeb-1.png"
              alt="vida-estilo"
              layout="intrinsic"
              width={800}
              height={1600}
            />

            {/* Segunda imagen (detrás) */}
            <Image
              className="absolute top-[41%] left-[2vw] xl:left-[8vw] w-[70%] xl:w-[50%] !max-w-[800px] z-10 "
              src="/images-proyecto/Vida&EstiloWeb-2.png"
              alt="vida-estilo"
              layout="intrinsic"
              width={800}
              height={1111}
            />

          </div>

        </div>
        <div className='relative flex flex-col justify-center items-center pt-12 pb-24 px-20 font-antonio fontSize-fluid bg-branding mt-[-1px] h-screen'>
          <h2
            id="branding"
            className={`sticky top-0 uppercase text-bordered-branding sm:left-3 transition-opacity duration-500 ${brandingHidden ? "opacity-0" : "opacity-100"
              }`}
          >
            branding
          </h2>
          <div className='flex flex-col items-center w-full xl:items-start  mt-8 sm:mt-[50%]  md:mt-[15%] lg:mt-[33%] xl:mt-[63%] 2xl:mt-[54%] h-auto'>
            <div className='flex max-lg:justify-center'> <h4 id='elevating' className='relative  uppercase pt-12 pb-32 text-white font-antonio font-medium text-elevating'>Elevating brands <br /> through design, data, <br />   and strategy.
            </h4></div>
            <div
              id="graphic"
              className={`sticky top-0 w-full text-end transition-opacity duration-500 ${graphicHidden ? "opacity-0" : "opacity-100"
                }`}
            >
              <h2 className="uppercase text-bordered-branding sm:left-3">graphic</h2>
            </div>
            <div className=' w-full flex justify-center'>
              <div className="relative w-[70%] z-20">
                {/* Contenedor con overflow-hidden para simular el marco de la pantalla */}
                <div className="absolute bg-blue w-[82%] h-[53%] top-[8%] left-[9%] overflow-hidden ">
                  <div className="relative w-full h-full">
                    {/* Imagen con animación de desplazamiento */}
                    <img
                      className="scrollable-image"
                      src="/images-proyecto/vida-est-image-1.png"
                      alt="vida-estilo"
                    />
                  </div>
                </div>

                {/* Imagen estática de la pantalla */}
                <Image
                  className="z-10"
                  src="/images-proyecto/imac.png"
                  alt="vida-estilo"
                  width={800}
                  height={1111}
                  layout="intrinsic"
                  priority={true}
                />
              </div>
              <div id="design" className="absolute bottom-24 w-fit text-start left-12">
                <h2 className="uppercase text-bordered-branding sm:left-3">design</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-12 px-12 md:py-24  bg-black mt-[-1px]" >
          <AnimatedSequence />
        </div>

        <div className='relative px-[10vw] flex bg-strategy mt-[-1px] h-screen  overflow-hidden'  >
          <DiagonalSlider
            left="left-[-18rem]"
            top="top-0"
            images={["/images-proyecto/image1.png", "/images-proyecto/image2.png", "/images-proyecto/image3.png", "/images-proyecto/image4.png", "/images-proyecto/image5.png"]}

          />
          <DiagonalSlider
            reverse
            left="left-[8rem]"
            top="top-0"
            images={["/images-proyecto/image6.png", "/images-proyecto/image7.png", "/images-proyecto/image8.png", "/images-proyecto/image9.png", "/images-proyecto/image10.png"]}

          />
          <DiagonalSlider
            left="left-[34rem]"
            top="top-0"
            images={["/images-proyecto/image11.png", "/images-proyecto/image5.png", "/images-proyecto/image6.png", "/images-proyecto/image3.png", "/images-proyecto/image2.png"]}

          />
          <DiagonalSlider
            reverse
            left="left-[60rem]"
            top="top-0"
            images={["/images-proyecto/image1.png", "/images-proyecto/image11.png", "/images-proyecto/image7.png", "/images-proyecto/image9.png", "/images-proyecto/image8.png"]}

          />
          <DiagonalSlider
            left="left-[86rem]"
            top="top-0"
            images={["/images-proyecto/image10.png", "/images-proyecto/image11.png", "/images-proyecto/image1.png", "/images-proyecto/image2.png", "/images-proyecto/image3.png"]}

          />

          <div className='absolute fontSize-fluid bottom-0  pb-24  left-12  '><div className=''><h2 className='uppercase font-antonio font-bold text-bordered-strategy '>Digital</h2></div>
            <div className=''><h2 className='uppercase font-antonio font-bold text-bordered-strategy '>Strategy</h2></div>
          </div>
        </div>

        <div className='mt-[-1px] bg-[#68725E] py-8 text-white px-24 z-10'><PreviousNext previousUrl="/daytona" nextUrl="/vml" /></div>
        <div>
          <Footer background="bg-[#131313] " />
        </div>
      </div>
    </>
  );
}
