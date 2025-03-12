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

    <div className='bg-[#ff0010] overflow-clip'>
      <div>
        <Hero
          title="Aon"
          backgroundImage={aon.src}
          clientInfo={{
            group: "",
            date: "2024 Ongoing",
            name: "Aon",
            categories: [
              "Video Production",
              "Front-End Development",
              "Business & Digital Strategy",
              "graphic & digital design",
            ],
          }}
          aboutInfo="Aon work showcase"
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
      <div ref={ref} className='py-28 bg-gradient-to-t from-[#585858] from-0% via-[#5d5d5d] via-50% to-[#141414] to-100%'>
        {/* Título */}
        <div className='sticky top-0 fontSize-gra-desig font-antonio font-medium text-bordered px-24'>
          <h2>GRAPHIC</h2>
          <h2>DESIGN</h2>
        </div>

        {/* Contenedor de imágenes */}
        <div className='relative flex justify-center w-full mt-[-35vw]'>
          {/* Imagen de la tele */}
          <Image
            className='relative w-[78vw] h-auto'
            src="/images-proyecto/Aon-Mockup-tele.png"
            alt="Aon"
            width={1382}
            height={896}
          />

          {/* Imagen del globo con animación */}
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
      <div className="bg-[#131313] w-full h-[30vh] mt-[-2px]"></div>
      <div className=" bg-[#ca262c] bg-gradient-to-t from-black/100 to-transparent">
        <div className=" flex flex-col ">
          <div className="relative flex mt-[-13.7vw] pl-[6.94vw]"><Image
            className='relative w-[61.59vw] h-auto'
            src="/images-proyecto/Banner-Hogar-1.png"
            alt="Aon"
            width={1382}
            height={896}
          /></div>
          <div className="relative flex justify-end mt-[-56vw] "><Image
            className='relative w-[43.6vw] h-auto mr-[8vw]'
            src="/images-proyecto/Banner-Petlove-1.png"
            alt="Aon"
            width={1382}
            height={896}
          /></div>
        </div>
        <div className="flex pt-40">
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
    
      {/*<div className="bg-[#141414] bg-gradient-to-t from-[#ff0010]/90 to-transparent">
        <div>
          <h2 className="fontSize-gra-desig font-antonio font-medium text-bordered px-8 uppercase">
            digital
          </h2>
        </div>
        <ParallaxGallery />
        <div className="flex justify-end">
          <h2 className="fontSize-gra-desig font-antonio font-medium text-bordered px-8 uppercase">
            design
          </h2>
        </div>
      </div>    esto llega hasta aqui */}
      {/*  <div className="relative flex flex-col items-center justify-center py-20 bg-[#ff0010]">
        <div className="w-full ml-[21.5vw] font-empowering">
          <h2 className="uppercase font-antonio font-normal text-white">
          Strategies and <br/> visuals aligned <br/> for a changing <br/> world.
          </h2>
        </div>

        <div className=' flex w-full z-20'>
          <div className="relative w-[97vw] flex justify-start items-center "><Image
            className='relative w-[97vw] h-auto'
            src="/images-proyecto/Aon-Mockup-3.png"
            alt="Aon"
            width={1382}
            height={896}
          /></div>
          <video
            className="absolute  object-cover sm:top-[34%] sm:h-[45%] md:top-[33%] md:h-[49%] lg:top-[32%] lg:h-[50%]  xl:h-[52%] 2xl:top-[29%] 2xl:h-[53%]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/Aon.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute top-1/2 right-1/3">
          <div className=" flex items-center justify-center">
            
            <div className="absolute w-[50vw] h-[50vw] border-[3px] border-white rounded-full" />



<motion.div

  className="absolute w-6 h-6 bg-white rounded-full"
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 8, ease: "linear" }} // Giro lento y suave
  style={{
    translateX: "-50%",
    translateY: "-50%",
    position: "absolute",
    left: "50%",
    top: "50%",
    originX: "50%",
    originY: "50%",
  }}
>
  <motion.div
    className={`absolute w-[3vw] h-[3vw] bg-red-500 rounded-full`}
    style={{
      top: "-25.5vw", // Posición en el borde del círculo grande
      left: "-12px",
    }}
  />
  <motion.div
    className={`absolute w-[2vw] h-[2vw] bg-red-500 rounded-full`}
    style={{
      top: "24.5vw", // Posición en el borde del círculo grande
      left: "-12px",
    }}
  />
</motion.div>
</div>


<div className=" flex items-center justify-center">
<div className="absolute w-[35vw] h-[35vw]  border-[3px] border-dotted border-white rounded-full flex items-center justify-center">

<motion.div
  className="absolute w-6 h-6 bg-transparent rounded-full flex items-center justify-center"
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 6, ease: "linear" }} // Giro independiente
  style={{
    translateX: "-50%",
    translateY: "-50%",
    position: "absolute",
    left: "50%",
    top: "50%",
    originX: "50%",
    originY: "50%",
  }}
>
  <motion.div
    className="absolute w-[4vw] h-[4vw] bg-white rounded-full flex items-center justify-center"
    style={{
      top: "16vw", // Posición en el borde del círculo punteado
      left: "-12px",
    }}
  >
    <span className="text-black text-2xl font-bold">✔</span>
  </motion.div>
</motion.div>
</div>
</div>

</div>
</div> */}
      <div className="relative flex flex-col items-center justify-center py-20 bg-[#141414] bg-gradient-to-t from-[#ff0010]/100 to-transparent ">
        <div className="w-full ml-[21.5vw] font-empowering pb-20">
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
      <div className='w-[80%] my-[5vw] mx-auto bg-[#ff0010]'>
          <PreviousNext className='text-white' />
        </div>
      <div>
        <Footer background="bg-black " />
      </div>
    </div >
  );
}
