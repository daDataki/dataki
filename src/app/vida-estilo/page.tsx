"use client"

import Hero from '../../components/hero/Hero';
import beacon from '../../../public/images-proyecto/beacon-hotel-south-beach.png';
import Image from 'next/image';
import './vida-estilo.css'
import Footer from '../../components/footer/Footer'
import PreviousNext from '../../components/previous-next/PreviousNext'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState, useRef } from 'react';



const ImageColumn = ({ left, top, images, transitionSpeeds }: { left: string, top: string, images: string[], transitionSpeeds: number[] }) => {
  const columnRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!columnRef.current) return;

    // Extraemos las velocidades para las 4 fases (subida y bajada)
    const [speed1, speed2, speed3, speed4] = transitionSpeeds;

    const timeoutId: NodeJS.Timeout[] = []; // Array para almacenar los identificadores de setTimeout

    function moveCarousel() {
      if (!columnRef.current) return;

      // Desplazamiento vertical total (100%)
      const yDisplacement = 100;

      columnRef.current.style.transition = `transform ${speed1 / 1000}s ease-in-out`;
      columnRef.current.style.transform = `translateY(-${yDisplacement / 3}%)`;

      timeoutId.push(setTimeout(() => {
        if (!columnRef.current) return;
        columnRef.current.style.transition = `transform ${speed2 / 1000}s ease-in-out`;
        columnRef.current.style.transform = `translateY(-${(2 * yDisplacement) / 3}%)`;

        timeoutId.push(setTimeout(() => {
          if (!columnRef.current) return;
          columnRef.current.style.transition = `transform ${speed3 / 1000}s ease-in-out`;
          columnRef.current.style.transform = `translateY(-${yDisplacement}%)`;

          timeoutId.push(setTimeout(() => {
            if (!columnRef.current) return;
            columnRef.current.style.transition = `transform ${speed4 / 1000}s ease-in-out`;
            columnRef.current.style.transform = `translateY(-${yDisplacement}%)`;

            // Inmediatamente después de la subida, comenzamos la bajada
            columnRef.current.style.transition = `transform ${speed4 / 1000}s ease-in-out`;
            columnRef.current.style.transform = `translateY(-${(2 * yDisplacement) / 3}%)`;

            timeoutId.push(setTimeout(() => {
              if (!columnRef.current) return;
              columnRef.current.style.transition = `transform ${speed3 / 1000}s ease-in-out`;
              columnRef.current.style.transform = `translateY(-${yDisplacement / 3}%)`;

              timeoutId.push(setTimeout(() => {
                if (!columnRef.current) return;
                columnRef.current.style.transition = `transform ${speed2 / 1000}s ease-in-out`;
                columnRef.current.style.transform = `translateY(0%)`;

                timeoutId.push(setTimeout(() => {
                  if (!columnRef.current) return;
                  columnRef.current.style.transition = `transform ${speed1 / 1000}s ease-in-out`;
                  columnRef.current.style.transform = `translateY(0%)`;

                  // Repite el ciclo
                  timeoutId.push(setTimeout(moveCarousel, speed1 + speed2 + speed3 + speed4)); // Tiempo total para el ciclo completo
                }, speed2));
              }, speed3));
            }, speed4));
          }, speed3));
        }, speed2));
      }, speed1));
    }

    // Iniciar el ciclo
    moveCarousel();

    // Cleanup para evitar memory leaks
    return () => {
      timeoutId.forEach(clearTimeout); // Limpiar todos los timeouts al desmontar
    };
  }, [transitionSpeeds]);

  return (
    <div className={`absolute z-10 rotate-[330deg] ${top} ${left} origin-top`}>
      <div ref={columnRef} className='flex-col gap-20 flex'>
        {images.map((src, index) => (
          <Image
            key={index}
            className="w-48 z-10"
            src={src}
            alt={`imagen-${index}`}
            layout="intrinsic"
            width={800}
            height={1111}
            style={{ transition: `transform ${transitionSpeeds[index] / 1000}s ease-in-out` }}
          />
        ))}
      </div>
    </div>
  );
};



export default function VidaEstilo() {
  const [brandingHidden, setBrandingHidden] = useState(false);
  const [graphicHidden, setGraphicHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const branding = document.getElementById("branding");
      const graphic = document.getElementById("graphic");
      const design = document.getElementById("design");

      if (!branding || !graphic || !design) return;

      const brandingRect = branding.getBoundingClientRect();
      const graphicRect = graphic.getBoundingClientRect();
      const designRect = design.getBoundingClientRect();

      // Ocultar branding cuando graphic esté a 2px de distancia
      if (graphicRect.top - brandingRect.bottom <= 2) {
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
  useEffect(() => {
    AOS.init({ duration: 3000, once: false });
  }, []);
  const [fadeOutIndex, setFadeOutIndex] = useState<number>(-1);

  useEffect(() => {
    AOS.init();

    // Tiempo total de aparición (última animación + 2s de espera)
    const totalTime = 1500 + 1100 + 2000;

    const timeoutId = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        setFadeOutIndex(index);
        index++;
        if (index > 4) clearInterval(interval); // Se ejecuta para 4 elementos
      }, 1000); // Cada elemento desaparece con 1s de diferencia
    }, totalTime);

    return () => clearTimeout(timeoutId);// Limpia intervalos si el componente se desmonta
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
              src="/images-proyecto/Vida&Estilo-Web-1-Donatella-Restaurant1.png"
              alt="vida-estilo"
              layout="intrinsic"
              width={800}
              height={1600}
            />

            {/* Segunda imagen (detrás) */}
            <Image
              className="absolute top-[41%] left-[2vw] xl:left-[8vw] w-[70%] xl:w-[50%] !max-w-[800px] z-10 "
              src="/images-proyecto/Vida&Estilo-Web-1-DonatellaRestaurant2.png"
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
            <div className='flex max-lg:justify-center'> <h4 className='relative  uppercase pt-12 pb-32 text-white font-antonio font-medium text-elevating'>Elevating brands <br /> through design, data, <br />   and strategy.
            </h4></div>
            <div
              id="graphic"
              className={`sticky top-0 w-full text-end transition-opacity duration-500 ${graphicHidden ? "opacity-0" : "opacity-100"
                }`}
            >
              <h2 className="uppercase text-bordered-branding sm:left-3">graphic</h2>
            </div>
            <div className='w-full flex justify-center'><Image
              className="w-[58%]  z-10 "
              src="/images-proyecto/Vida-Estilo-Mockup.png"
              alt="vida-estilo"
              layout="intrinsic"
              width={800}
              height={1111}
            />
              <div id="design" className="absolute bottom-24 w-fit text-start left-20">
                <h2 className="uppercase text-bordered-branding sm:left-3">design</h2>
              </div>
            </div>
          </div>
        </div>

        <div className='relative py-12 px-12 md:py-32 md:px-48 bg-black mt-[-1px]'>
          <div className="md:hidden text-white font-semibold font-antonio fontSize-fluid-social">
            <h2>Social Media</h2>
          </div>

          <div className="hidden md:flex flex-col justify-center items-center z-20">
            <div className="relative w-full flex justify-center">
              {/* SOCIAL */}
              <div
                className={`absolute w-fit top-0 lg:left-[-58px] xl:left-0 uppercase text-white font-semibold font-antonio fontSize-fluid-social z-50
          ${fadeOutIndex >= 1 ? "" : ""}`}
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="3000"
              >
                <h2>Social</h2>
              </div>

              {/* IMAGEN 1 */}
              <Image
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="3200"
                className={`w-[30%] z-30 ${fadeOutIndex >= 2 ? "fade-out-right" : ""}`}
                src="/images-proyecto/MIAMI-SPACE-0.png"
                alt="vida-estilo"
                layout="intrinsic"
                width={800}
                height={800}
              />
            </div>

            <div className="relative flex flex-col justify-center w-full top-1/2 z-20">
              <div className="w-full flex justify-center gap-10 mt-[-6vw]">
                {/* IMAGEN 2 */}
                <Image
                  data-aos="fade-right"
                  data-aos-delay="0"
                  data-aos-duration="3000"
                  className={`relative lg:left-[-88px] xl:left-[-141px] w-[30%] z-30 ${fadeOutIndex >= 0 ? "fade-out-up" : ""
                    }`}
                  src="/images-proyecto/MIAMI-SPACE1-1.png"
                  alt="vida-estilo"
                  layout="intrinsic"
                  width={800}
                  height={800}
                />

                {/* IMAGEN 3 */}
                <Image
                  data-aos="fade-left"
                  data-aos-delay="1200"
                  data-aos-duration="3500"
                  className={`w-[30%] relative lg:top-[-67px] xl:top-[-130px] z-30 ${fadeOutIndex >= 3 ? "fade-out-left" : ""
                    }`}
                  src="/images-proyecto/MIAMI-SPACE2-1.png"
                  alt="vida-estilo"
                  layout="intrinsic"
                  width={800}
                  height={800}
                />

                {/* MEDIA */}
                <div
                  className={`absolute w-full flex justify-end lg:top-[-14px] xl:top-0 uppercase text-white font-semibold font-antonio fontSize-fluid-social z-10
            ${fadeOutIndex >= 4 ? "" : ""}`}
                  data-aos="fade-down"
                  data-aos-delay="1500"
                  data-aos-duration="3500"
                >
                  <h2>Media</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative flex bg-strategy mt-[-1px] h-screen overflow-hidden'  >
          <ImageColumn
            left="left-[-22rem]"
            top="top-0"
            images={["/images-proyecto/image1.png", "/images-proyecto/image2.png", "/images-proyecto/image1.png","/images-proyecto/image2.png", "/images-proyecto/image1.png"]}
            transitionSpeeds={[2000, 500, 8000, 1000]} // Velocidades para subida y bajada
          />
          <ImageColumn
            left="left-0"
            top="top-0"
            images={["/images-proyecto/image3.png", "/images-proyecto/image4.png", "/images-proyecto/image5.png","/images-proyecto/image4.png", "/images-proyecto/image5.png"]}
            transitionSpeeds={[1500, 8000, 6000, 2000]} // Velocidades para subida y bajada
          />
          <ImageColumn
            left="left-[22rem]"
            top="top-0"
            images={["/images-proyecto/image6.png", "/images-proyecto/image7.png", "/images-proyecto/image6.png", "/images-proyecto/image7.png", "/images-proyecto/image6.png"]}
            transitionSpeeds={[16000, 1000, 2000, 8000]} // Velocidades para subida y bajada
          />
          <ImageColumn
            left="left-[44rem]"
            top="top-0"
            images={["/images-proyecto/image8.png", "/images-proyecto/image9.png", "/images-proyecto/image8.png","/images-proyecto/image9.png", "/images-proyecto/image8.png"]}
            transitionSpeeds={[8000, 2000, 4000, 1000]} // Velocidades para subida y bajada
          />
          <ImageColumn
            left="left-[66rem]"
            top="top-0"
            images={["/images-proyecto/image9.png", "/images-proyecto/image10.png", "/images-proyecto/image9.png","/images-proyecto/image10.png", "/images-proyecto/image9.png"]}
            transitionSpeeds={[7000, 5000, 7000, 5000]} // Velocidades para subida y bajada
          />

          <div className='absolute fontSize-fluid   top-1/3 left-32'><div className=''><h2 className='uppercase font-antonio font-bold text-bordered-strategy '>Digital</h2></div>
            <div className=''><h2 className='uppercase font-antonio font-bold text-bordered-strategy '>Strategy</h2></div></div>
        </div>
        <div><div className=' w-full flex justify-center z-10 mt-[-1px]'><Image
          className=" w-full z-10 "
          src="/images-proyecto/Vida-Estilo-Menu.png"
          alt="vida-estilo"
          layout="intrinsic"
          width={800}
          height={1111}
        /></div></div>
        <div className='relative bg-[linear-gradient(to_bottom,#68725E_0_65%,#131313_65%_100%)] px-8 sm:px-28 pt-8 sm:pt-32 mt-[-1px]'>
          <div className='sticky top-0'><h2 className='uppercase text-bordered-data fontSize-fluid font-antonio'>Data <br />Analytics </h2></div>
          <div className='absolute w-[35%] left-[50%] top-[10%] h-auto z-10'><Image
            className=" w-full z-10  h-[66vh] "
            src="/images-proyecto/Profit (1).png"
            alt="vida-estilo"
            layout="intrinsic"
            width={611}
            height={672}
          /></div>
          <div className='max-sm:hidden relative max-sm:m-auto px-4 sm:px-14 py-8 w-full  md:w-[73%] h-[45%] md:h-[66vh] bg-black rounded-2xl top-0 text-white z-10'>
            <h2 className='text-metric font-inter font-bold'>Metric evolution</h2>
            <p className='text-caption font-inter font-light'>December</p>
            <div className='relative text-xl md:text-2xl xl:text-2xl font-inter font-bold my-2 '>
              <div className='absolute w-[62%] sm:w-[70%] md:w-[76%] top-[35%] md:top-[52%] lg:top-[43%] xl:top-[31%] left-10 h-auto z-10'><Image
                className=" w-full z-10 "
                src="/images-proyecto/Vector-346.png"
                alt="vida-estilo"
                layout="intrinsic"
                width={800}
                height={1111}
              /></div>
              <div className='absolute w-[50%] md:w-[68%] top-[31%] md:top-[41%] lg:top-[30%] xl:top-[13%] left-12 lg:left-20 xl:left-32 h-auto z-10'><Image
                className=" w-full z-10 "
                src="/images-proyecto/Vector-347.png"
                alt="vida-estilo"
                layout="intrinsic"
                width={800}
                height={1111}
              /></div>
              <div className='w-full flex justify-between text-clip font-inter font-bold border-b border-gray-500 pb-4'>
                <h4>Clics</h4><h4>Impression</h4>
              </div>
              <div className='max-sm:hidden w-full flex justify-between text-caption font-inter border-b border-gray-500 font-light py-4 md:py-8'>
                <h4>180</h4><h4>20 mil</h4>
              </div>
              <div className='w-full flex justify-between text-caption font-inter border-b border-gray-500 font-light py-4 md:py-8'>
                <h4>90</h4><h4>10 mil</h4>
              </div>
              <div className='w-full flex justify-between text-caption font-inter border-b border-gray-500 font-light py-4 md:py-8'>
                <h4>0</h4><h4>0</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[-1px] bg-[#131313]  text-white px-24'><PreviousNext /></div>
        <div>
          <Footer background="bg-[#131313] " />
        </div>
      </div>
    </>
  );
}
