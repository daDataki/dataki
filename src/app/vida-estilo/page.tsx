"use client"

import Hero from '../../components/hero/Hero';
import beacon from '../../../public/images-proyecto/beacon-hotel-south-beach.png';
import Image from 'next/image';
import './vida-estilo.css'
import Footer from '../../components/footer/Footer'
import PreviousNext from '../../components/previous-next/PreviousNext'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



export default function VidaEstilo() {
  useEffect(() => {
    const slider = document.querySelector('.slider-container') as HTMLElement;
    const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLElement>;

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Función para mover el slider automáticamente
    const moveSlider = () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      const offset = -currentIndex * 100; // Mover las imágenes en % a la izquierda
      slider.style.transform = `translate(${offset}%, ${offset}%) rotate(45deg)`; // Desplazar en 45 grados
    };

    const intervalId = setInterval(moveSlider, 3000); // Deslizar cada 3 segundos

    /*  // Pausar el slider cuando el mouse está sobre él
      slider.addEventListener('mouseover', () => {
        clearInterval(intervalId); // Detener el slider
      });
  
      // Reanudar el slider cuando el mouse sale
      slider.addEventListener('mouseout', () => {
        setInterval(moveSlider, 3000); // Reanudar el slider
      }); */

    return () => {
      clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonta
    };
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <div>
        <div><Hero
          title="Vida & Estilo"
          backgroundImage={beacon.src}
          clientInfo={{
            group: "Hospitality Group",
            date: "2023 Ongoing",
            name: "Vida & Estilo<br />Hospitality<br />Group",
            categories: [
              "SEO & Data Analytics",
              "Branding & Digital Strategy",
              "Graphic & Web Designs",
              "Online & Social Media Management",
            ],
          }}
          aboutInfo={["Vida & Estilo Hospitality Group", <br key="1" />, "work showcase"]}
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
        <div className='relative h-[50vh] sm:h-[91vh] md:h-[121vh] lg:h-[158vh] xl:h-[93vw] 2xl:h-[105vw] sm:px-52 bg-black mt-[-1px]'>
          <div className='max-sm:flex max-sm:justify-center sm:sticky font-antonio font-semibold fontSize-fluid top-0'>
            <h2 className='uppercase text-bordered text-black'>
              web <br /> design
            </h2>
          </div>
          <div className="hidden relative sm:flex flex-row justify-end w-full h-auto z-10  ">
            {/* Primera imagen (adelante) */}
            <Image
              className="relative w-[70%] xl:w-[50%] !max-w-[800px] right-[2vw] xl:right-[7vw] z-20"
              src="/images-proyecto/vida-estilo.png"
              alt="vida-estilo"
              layout="intrinsic"
              width={800}
              height={1600}
            />

            {/* Segunda imagen (detrás) */}
            <Image
              className="absolute top-[41%] left-[2vw] xl:left-[8vw] w-[70%] xl:w-[50%] !max-w-[800px] z-10 "
              src="/images-proyecto/vida-estilo2.png"
              alt="vida-estilo"
              layout="intrinsic"
              width={800}
              height={1111}
            />

          </div>

        </div>
        <div className='relative flex flex-col justify-center items-center py-12 px-20 font-antonio fontSize-fluid bg-branding mt-[-1px] h-screen'>
          <h2 className='sticky top-0 uppercase text-bordered-branding sm:left-3'>branding</h2>
          <div className='flex flex-col items-center w-full xl:items-start  mt-8 sm:mt-[50%]  md:mt-[15%] lg:mt-[33%] xl:mt-[63%] 2xl:mt-[54%] h-auto'>
            <div className='flex max-lg:justify-center'> <h4 className='relative  uppercase pt-12 pb-32 text-white font-antonio font-medium text-elevating'>Elevating brands <br /> through design, data, <br />   and strategy.
            </h4></div>
            <div className='w-full flex justify-center'><Image
              className="w-[50%]  z-10 "
              src="/images-proyecto/Vida-Estilo-Mockup.png"
              alt="vida-estilo"
              layout="intrinsic"
              width={800}
              height={1111}
            /></div>
          </div>
        </div>

        <div className='relative py-12 px-12 md:py-32 md:px-48 bg-black mt-[-1px]'>
          <div data-aos="fade-down" className="md:hidden text-white font-semibold font-antonio fontSize-fluid-social">
            <h2>Social Media</h2>
          </div>

          <div data-aos="fade-down" className='hidden md:flex flex-col justify-center items-center z-20'>
            <div className='relative w-full flex justify-center'>
              <div className='absolute w-fit top-0 lg:left-[-58px] xl:left-0 uppercase text-white font-semibold font-antonio fontSize-fluid-social z-50'>
                <h2>Social</h2>
              </div>
              <Image
                className=" w-[30%] z-30"
                src="/images-proyecto/MIAMI-SPACE-0.png"
                alt="vida-estilo"
                layout="intrinsic"
                width={800}
                height={800}
              />
            </div>

            <div data-aos="fade-down" className='relative flex flex-col justify-center w-full top-1/2 z-20'>
              <div className='w-full flex justify-center gap-10 mt-[-6vw]'>
                <Image
                  className="relative lg:left-[-88px] xl:left-[-141px] w-[30%] z-30 "
                  src="/images-proyecto/MIAMI-SPACE1-1.png"
                  alt="vida-estilo"
                  layout="intrinsic"
                  width={800}
                  height={800}
                />
                <Image
                  className="w-[30%] relative lg:top-[-67px] xl:top-[-130px] z-30 "
                  src="/images-proyecto/MIAMI-SPACE2-1.png"
                  alt="vida-estilo"
                  layout="intrinsic"
                  width={800}
                  height={800}
                />
                {/* Ajustamos el h2 con z-10 para que esté debajo de las imágenes */}
                <div className='absolute w-full flex justify-end lg:top-[-14px] xl:top-0 uppercase text-white font-semibold font-antonio fontSize-fluid-social z-10'>
                  <h2>Media</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='relative flex flex-col bg-strategy mt-[-1px]'>
          <div className=' w-full z-10'><Image
            className=" w-full z-10 "
            src="/images-proyecto/Mask-group.png"
            alt="vida-estilo"
            layout="intrinsic"
            width={800}
            height={1111}
          /></div>
          <div className='absolute fontSize-fluid-strategy   top-2/3 left-12'><div className=''><h2 className='uppercase font-antonio font-bold text-bordered-strategy '>Digital</h2></div>
            <div className=''><h2 className='uppercase font-antonio font-bold text-bordered-strategy '>Strategy</h2></div></div>
        </div>
        <div><div className=' w-full z-10 mt-[-1px]'><Image
          className=" w-full z-10 "
          src="/images-proyecto/Vida-Estilo-Menu.png"
          alt="vida-estilo"
          layout="intrinsic"
          width={800}
          height={1111}
        /></div></div>
        <div className='relative bg-[#68725E] py-8 mt-[-1px]'>
          <div><h2 className='uppercase text-bordered-data fontSize-fluid-data font-antonio'>Data <br />Analytics </h2></div>
          <div className='max-sm:hidden absolute w-[37%] left-[52%] top-[10%] h-auto z-10'><Image
            className=" w-full z-10 "
            src="/images-proyecto/Profit (1).png"
            alt="vida-estilo"
            layout="intrinsic"
            width={611}
            height={672}
          /></div>
          <div className='relative max-sm:m-auto p-8 sm:left-14 w-1/2 bg-black rounded-2xl top-[-5rem] text-white z-10'>
            <h2 className='text-3xl md:text-4xl xl:text-6xl font-inter font-bold'>Metric evolution</h2>
            <p className='text-xl md:text-xl xl:text-2xl font-inter font-light'>December</p>
            <div className='relative text-xl md:text-2xl xl:text-2xl font-inter font-bold my-6 '>
              <div className='absolute w-[62%] sm:w-[76%] md:w-[70%] top-[48%] left-12 h-auto z-10'><Image
                className=" w-full z-10 "
                src="/images-proyecto/Vector-346.png"
                alt="vida-estilo"
                layout="intrinsic"
                width={800}
                height={1111}
              /></div>
              <div className='absolute w-[58%] sm:w-[66%] md:w-[60%] top-[48%] left-12 h-auto z-10'><Image
                className=" w-full z-10 "
                src="/images-proyecto/Vector-347.png"
                alt="vida-estilo"
                layout="intrinsic"
                width={800}
                height={1111}
              /></div>
              <div className='w-full flex justify-between border-b border-gray-500 py-4 md:py-8'>
                <h4>Clics</h4><h4>Impression</h4>
              </div>
              <div className='max-sm:hidden w-full flex justify-between border-b border-gray-500 font-light py-4 md:py-8'>
                <h4>180</h4><h4>20 mil</h4>
              </div>
              <div className='w-full flex justify-between border-b border-gray-500 font-light py-4 md:py-8'>
                <h4>90</h4><h4>10 mil</h4>
              </div>
              <div className='w-full flex justify-between border-b border-gray-500 font-light py-4 md:py-8'>
                <h4>0</h4><h4>0</h4>
              </div>
            </div>
          </div>
          <div className='sm:hidden w-[50%] m-auto'><Image
            className=" w-full z-10 "
            src="/images-proyecto/Profit (1).png"
            alt="vida-estilo"
            layout="intrinsic"
            width={611}
            height={672}
          /></div>
        </div>
        <div className='mt-[-1px] bg-[#68725E]  text-black'><PreviousNext /></div>
        <div>
          <Footer background="bg-black " />
        </div>
      </div>
    </>
  );
}
