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


export default function Aos() {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

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
              "Graphic & digital design",
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
      <div ref={ref} className='py-28 mt-[-2px] bg-gradient-to-t from-[#585858] from-0% via-[#5d5d5d] via-50% to-black to-100%'>
        {/* Título */}
        <div className='sticky top-0 fontSize-gra-desig font-antonio font-medium text-bordered px-24'>
          <h2>GRAPHIC</h2>
          <h2>DESIGN</h2>
        </div>


        <div className='relative flex justify-center w-full mt-[-35vw]'>

          <Image
            className='relative w-[78vw] h-auto'
            src="/images-proyecto/Aon-Mockup-tele.png"
            alt="Aon"
            width={1382}
            height={896}
          />


          <motion.img
            initial={{ y: 0, opacity: 1 }} // Empieza visible en su posición original
            animate={isInView ? { y: -1000 } : { y: 0 }} // Sube cuando entra en vista
            transition={{ duration: 5, ease: "easeOut", delay: 1 }} // Suaviza el movimiento
            className="absolute right-[8vw] w-[30vw] h-auto top-0"
            src="/images-proyecto/Aon-Globo.png"
            alt="Aon-globo"
          />
        </div>
      </div>

      <AnimatedAos />
      <div className="bg-[#131313] w-full"></div>
      <div className=" bg-[#ca262c] bg-gradient-to-t from-black/100 to-transparent">
        <div className="w-full flex justify-center ">
          <div className="relative w-1/3 flex justify-end top-[-20vw]"><Image
            className='relative object-contain left-[5.32vw]'
            src="/images-proyecto/Banner-Hogar-1.png"
            alt="Aon"
            width={504}
            height={796}
          /></div>
          <div className="relative w-[30%] flex justify-start top-[-4vw] "><Image
            className='relative object-contain right-[5vw] '
            src="/images-proyecto/Banner-Petlove-1.png"
            alt="Aon"
            width={400}
            height={647}
          /></div>
        </div>
        <div className="flex">
          <div className="relative w-1/2 flex justify-center items-center mt-[-6.94vw] "><Image
            className='relative w-[38.4vw] h-auto '
            src="/images-proyecto/Aon-Globo1-2.png"
            alt="Aon"
            width={1382}
            height={896}
          />
          </div>
          <div className="w-1/2">
            <h2 className="relative top-[6vw] font-normal font-antonio font-empowering text-white uppercase ">Empowering businesses <br /> with smarter,  safer <br /> solutions  for tomorrow.</h2>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center py-20 bg-black bg-gradient-to to-transparent ">
        <div className="relative w-full px-24">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center w-full">
            <img data-aos="fade-up"
              data-aos-delay="300"
              className='relative w-[38.8vw] h-auto z-10 left-[6vw] top-[2vw] object-contain'
              src="/images-proyecto/LogIn-Eleccion.png"
              alt="LogIn-Eleccion"

            />
            <img data-aos="fade-up"
              data-aos-delay="500"
              className='relative w-[38.8vw] h-auto right-[9vw] top-[10vw] object-contain'
              src="/images-proyecto/aon-imagen.png"
              alt="aon-imagen"
             
            />
          </div>
          <div className="flex justify-start">
            <h2 className="fontSize-gra-desig font-antonio font-medium text-bordered uppercase">DIGITAL</h2>
          </div>
          <div className="flex justify-end">
            <h2 className="fontSize-gra-desig font-antonio font-medium text-bordered uppercase">DESIGN</h2>
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
        <PreviousNext className='text-white' />
      </div>
      <div>
        <Footer background="bg-black " />
      </div>
    </div >
  );
}
