"use client";
import { motion, useInView } from "framer-motion";
import Hero from '../../components/hero/Hero';
import aon from '../../../public/images-proyecto/aon-busy-business.png';
import Image from 'next/image';
import './aon.css'
import Footer from '../../components/footer/Footer'
import AnimatedAos from '../../components/animated-aos/AnimatedAos'
import PreviousNext from '../../components/previous-next/PreviousNext'
import { useRef } from "react";
import 'aos/dist/aos.css';




export default function Aos() {

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView = useInView(ref1, { once: false, margin: "-100px 0px" });
  const isInView2 = useInView(ref2, { once: false, margin: "-100px 0px" });

  return (

    <div className='bg-black overflow-clip'>
      <div>
        <Hero
          title="Aon"
          backgroundImage={aon.src}
          prev='/vml'
          next='/vida-estilo'
          clientInfo={{
            group: "",
            date: "2024-Ongoing",
            name: "Aon",
            categories: [
              "Video Production",
              "Front-End Development",
              "Business & Digital Strategy",
              "Graphic & Digital Design",
            ],
          }}
          aboutInfo={<span>Aon <br />Work Showcase</span>}
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
      <div ref={ref1} className='relative  mt-[-2px] bg-gradient-to-t from-[#585858] from-0% via-[#5d5d5d] via-50% to-black to-100%'>
        {/* Título */}
        <div className='sticky top-0 fontSize-gra-desig font-antonio font-medium text-bordered px-24'>
          <h2>GRAPHIC</h2>
          <h2>DESIGN</h2>
        </div>
        <div className='relative flex justify-center w-full'>
          <div className="relative flex justify-center w-full h-auto">
            {/* Contenedor del monitor (posicionamiento relativo) */}
            <div className="relative w-[60vw] h-auto">
              {/* Imagen del monitor */}
              <Image
                className="w-full h-[92%]"
                src="/images-proyecto/Aon-Mockup-tele.png"
                alt="Aon"
                width={1382}
                height={896}
              />

              {/* Video posicionado dentro de la pantalla */}
              <div className="absolute top-[1.5%] left-[9%] w-[82%] h-[81%] overflow-hidden rounded-md">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/video/Globos.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <motion.img
            initial={{ y: 0, opacity: .5 }} // Empieza visible en su posición original
            animate={isInView ? { y: -1000 } : { y: 0 }} // Sube cuando entra en vista
            transition={{ duration: 12, ease: "easeOut", delay: 1 }} // Suaviza el movimiento
            className="absolute right-[25vw] w-[15vw] h-auto top-[25%]"
            src="/images-proyecto/Aon-Globo.png"
            alt="Aon-globo"
          />
        </div>
      </div>

      <AnimatedAos />

      <div className="bg-custom-aon">
        <div className="w-full flex justify-center ">
          <div className="relative w-1/3 flex justify-end "><Image data-aos="zoom-in-right"
            className='relative object-contain left-[5.32vw]'
            src="/images-proyecto/Banner-Hogar-1.png"
            alt="Aon"
            width={504}
            height={796}
          /></div>
          <div className="relative w-[30%] flex justify-start left-[2vw] top-[9.5vw] "><Image data-aos="zoom-in-left"
            className='relative object-contain right-[5vw] '
            src="/images-proyecto/Banner-Petlove-1.png"
            alt="Aon"
            width={400}
            height={647}
          /></div>
        </div>
        <div className="flex">
          <div className="relative w-1/2 flex justify-start items-center left-[5vw] top-[-21vw] "><Image
            className='relative w-[26.25vw] h-auto '
            src="/images-proyecto/Aon-Globo1-2.png"
            alt="Aon"
            width={1382}
            height={896}
          />
          </div>
          <div className="w-1/2 flex justify-end">
            <h2 className="relative top-[4vw] right-[6vw] font-normal font-antonio font-empowering text-white uppercase ">Empowering businesses <br /> with smarter,  safer <br /> solutions  for tomorrow.</h2>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center bg-black bg-gradient-to to-transparent ">
        <div ref={ref2} className="relative w-full px-24">
          <div

            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center w-full z-10"
          >
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: .3 }}
              className="relative w-[38.8vw] h-auto z-20 left-[6vw] top-[2vw] object-contain"
              src="/images-proyecto/LogIn-Eleccion.png"
              alt="LogIn-Eleccion"
            />

            <motion.img
              initial={{ opacity: 0, y: 30 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="relative w-[38.8vw] h-auto right-[9vw] top-[10vw] object-contain z-10"
              src="/images-proyecto/aon-imagen.png"
              alt="aon-imagen"
            />
          </div>
          <div className="flex flex-col  w-full gap-[11vw] ">
            <div className="reltive flex justify-start">
              <h2 className="fontSize-gra-desig font-antonio font-medium text-bordered uppercase">DIGITAL</h2>
            </div>
            <div className="relative flex justify-end top-[15vw] ">
              <h2 className="fontSize-gra-desig font-antonio font-medium text-bordered uppercase">DESIGN</h2>
            </div>
          </div>

        </div>
        <div className="w-full ml-[21.5vw] font-empowering pt-64">
          <h2 className="uppercase font-antonio font-normal text-white">
            Strategies and <br /> visuals aligned <br /> for a changing <br /> world.
          </h2>
        </div>
      </div>
      <div className=' flex w-full z-20'>

        <video
          className="w-full object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/Aon.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='px-24  my-[5vw] mx-auto bg-black'>
        <PreviousNext className='text-white' previousUrl="/vml" nextUrl="/vida-estilo" />
      </div>
      <div>
        <Footer background="bg-black " />
      </div>
    </div >
  );
}
