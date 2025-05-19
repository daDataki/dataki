"use client"
import Hero from '../../components/hero/Hero';
import enveedo from '../../../public/images-proyecto/enveedo-hero.png';
import Image from 'next/image';
import './enveedo.css'
import { motion } from 'framer-motion';
import Footer from '../../components/footer/Footer'
import PreviousNext from '../../components/previous-next/PreviousNext'
import dynamic from 'next/dynamic';
const PlyrVideo = dynamic(() => import('../../components/plyrVideo/plyrVideo'), { ssr: false });

export default function Enveedo() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <div>
        <div><Hero
          title={<h1 className="text-tango-title">Enveedo</h1>}
          backgroundImage={enveedo.src}
          prev='/tango'
          next='/aon'
          clientInfo={{
            group: "",
            date: "2022",
            name: "Enveedo",
            categories: [
              "Front-End Development",
              "Back-End Development",
              "Web Design & Development",
            ],
          }}
          aboutInfo={
            <>
              Enveedo
              <br />
              Work Showcase
            </>
          }
          services={{
            description:
              "We crafted a standout digital presence for Enveedo, blending custom design, engaging animations and seamless functionality on WordPress.",
            list: [
              "Front-End Development",
              "Back-End Development",
              "Web Design & Development",
            ],
          }}
        /></div>
        <div className='flex flex-col w-full'>
          <video
            className="w-full h-video object-cover"
            autoPlay
            muted
            playsInline
          >
            <source src="/video/enveedo-animaciones.mp4" type="video/mp4" />
          </video>
        </div>
        <div className='flex flex-col w-full'>
          <PlyrVideo src="/video/enveedo-case.mp4" />
        </div>
        <div className='bg-[#131313] pr-24 py-32'>
          <div className='flex'>
            <motion.div
              className='w-1/2'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeIn}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
            >
              <Image
                className="z-10 w-full"
                src="/images-proyecto/enveedo-front-end.png"
                alt="vida-estilo"
                width={800}
                height={1111}
                layout="intrinsic"
                priority={true}
              />
            </motion.div>
            <div className='flex flex-col justify-center items-end w-1/2 uppercase font-antonio text-bordered-branding font-web text-white'>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                front
              </motion.h2>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                end
              </motion.h2>
            </div>
          </div>
          <div className='flex'>
            <div className='flex flex-col justify-center w-1/2 uppercase font-antonio text-bordered-branding font-web text-white'>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                back
              </motion.h2>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                end
              </motion.h2>
            </div>
            <motion.div
              className='flex justify-end w-1/2'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeIn}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
            >
              <Image
                className="z-10 w-full"
                src="/images-proyecto/enveedo-back-end.png"
                alt="vida-estilo"
                width={800}
                height={1111}
                layout="intrinsic"
                priority={true}
              />
            </motion.div>
          </div>
        </div>
        <div className='relative  mt-[-1px] pt-12 pb-16' style={{
          background: "linear-gradient(to bottom, #924EF4 0%, #924EF4 60%, #2018A2 100%)",
        }}>
          <h2 className='sticky top-0 mb-32 text-center font-antonio font-medium text-white font-web  uppercase'>web <br />
            develpoment</h2>
          <div className="relative w-[70%] z-20 mx-auto">
            {/* Contenedor con overflow-hidden para simular el marco de la pantalla */}
            <div className="absolute bg-blue w-[73.2%] h-[75%] top-[6%] left-[13.8%] overflow-hidden">
              <div className="relative w-full h-full">
                {/* Imagen con animación de desplazamiento */}
                <Image
                  className="absolute w-full scrollable-image"
                  src="/images-proyecto/enveedo-image-scroll.png"
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

        <div className='px-24 pt-40 pb-24 mx-auto'  style={{ backgroundColor: '#2018A2' }}>
          <PreviousNext className='text-white' previousUrl="/tango" nextUrl="/aon" />
        </div>
        <div>
          <Footer background="bg-black " />
        </div>
      </div>
    </>
  );
}
