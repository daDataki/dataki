"use client"
import Hero from '../../components/hero/Hero';
import daytona from '../../../public/images-proyecto/AUTO-2-AI.png';
import Image from 'next/image';
import './daytona.css'
import PreviousNext from '../../components/previous-next/PreviousNext'
import Footer from '../../components/footer/Footer'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Daytona() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <div className='bg-[#ca262c] overflow-clip'>
        <div><Hero
          title="Daytona"
          backgroundImage={daytona.src}
          backgroundPosition="right"
          prev='/vida-estilo'
          next='/claro'
          clientInfo={{
            group: "",
            date: "2022-Ongoing",
            name: "Daytona",
            categories: [
              "Video & Radio Production",
              "Media (Online & Offline)",
              "Digital Campaigns",
              "Graphic Design",
            ],
          }}
          aboutInfo={<span>Daytona <br />Work Showcase</span>}
          services={{
            description:
              "Daytona’s campaign was a hit with our all-in-one solution: video production, radio spots, digital campaigns, and standout graphics, driving strong engagement from day one.",
            list: [
              "Video & Radio Production",
              "Media (Online & Offline)",
              "Digital Campaigns",
              "Graphic Design",
            ],
          }}
        /></div>
        <div className='flex justify-center bg-black mt-[-1px]  pt-24 pb-32'>
          <video
            className="w-[90%] h-[716px] object-cover"
            controls
            playsInline
          >
            <source src="/video/Video5-con-audio.mp4" type="video/mp4" />
          </video>

        </div>
        <div className='relative pt-32  bg-[#ca262c] bg-gradient-to-t from-black/90 to-transparent '>
          <Image src="/images-proyecto/Mask-group-daytona.png" alt="Phone Mockup" className="absolute w-[80%] top-0 right-0" width={450} height={800} />
          <div className="relative flex flex-col justify-center items-start pb-32 pl-[7.35vw] sm:top-[1vh] md:top-[2vh] lg:top-[8vh] xl:top-[13vh] 2xl:top-[17vh] text-white font-antonio font-semibold font-production uppercase">
            <div className='absolute w-full top-[-7%] left-[40%] -translate-x-[7.35vw] z-20'>
              <div className='relative'>
                <Image src="/images-proyecto/IphoneDaytona1.png" alt="Phone Mockup" className="w-[50vw]  z-50 rounded-xl absolute top-0" width={450} height={800} />
                <video className="phone-video z-20" autoPlay loop muted playsInline>
                  <source src="/video/Nutricion1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className='absolute w-full top-[10%] left-[52%] -translate-x-[7.35vw] z-10'>
              <div className='relative'>
                <Image src="/images-proyecto/IphoneDaytona1.png" alt="Phone Mockup" className="w-[50vw]  z-50 rounded-xl absolute top-0" width={450} height={800} />
                <video className="phone-video z-20" autoPlay loop muted playsInline>
                  <source src="/video/Cansancio.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className='relative flex flex-col w-full'>
              <span data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="100" className='relative top-[23vw] font-media-online font-semibold font-antonio'>Video</span>
              <span data-aos="zoom-in" data-aos-duration="1000" className="relative top-[23vw] text-end font-media-online font-semibold font-antonio">Production</span>
            </div>
          </div>
          <div className='relative flex flex-col justify-end w-full sm:pt-32 lg:pt-52 xl:pt-72 2xl:pt-96 '>
            <h2 className='relative self-end mr-[11vw] sm:top-[10vh] md:top-[15vh] lg:top-[20vh] xl:top-[25vh] 2xl:top-[35vh] font-antonio font-normal text-white font-performance uppercase'>Performance- <br /> driven solutions <br /> for an impactful <br /> digital presence.</h2>
            <div className='relative bg-transparent font-antonio font-medium uppercase '>
              <div className='sticky top-[24vh]  font-media-online'>
                <h2 className='relative top-[-5vw] text-media mb-[6vw]'>Media</h2>
                <h2 className='relative left-[26vw] top-[-8vw] text-media-online'>Online</h2>
              </div>
              <div className='flex  justify-start items-end  w-full h-full'>
                <div className='relative w-1/2 h-full'>
                  <Image
                    className="w-[30%] rotate-180"
                    src="/images-proyecto/pngwing.png"
                    alt="vida-estilo"
                    width={1440}
                    height={1320}
                  />
                </div>
                <div className='w-1/2 h-full'>
                  <Image
                    className="w-full h-full object-cover"
                    src="/images-proyecto/Daytona-Via-publica-Mockup.png"
                    alt="vida-estilo"
                    width={1440}
                    height={1320}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='bg-black pb-24 z-20 mt-[-2px] mb-[-2px]'><h2 className='font-media-online font-antonio font-semibold uppercase text-[#CB262C] text-end ' >& offline</h2></div>
        <div className='flex flex-col w-full bg-black pt-32'>
          <video
            className="w-full h-[810px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/Video6_08-01.mp4" type="video/mp4" />
          </video>
        </div>

        <div className='relative px-12 bg-gradient-to-b from-black from-0% via-[#141414] via-30% to-[#ca262c] to-100%  mt-[-1px]'>
          <Image
            src="/images-proyecto/Mask-group-end.png"
            alt="Phone Mockup"
            className="absolute w-[70%] right-0 z-0"
            width={450}
            height={800}
          />
          

          <div className='w-full flex justify-start items-start ml-[6.94vw] pt-[11vw]'>
            <h2 id='texto' className='font-antonio font-semibold font-performance uppercase text-white'>
              Road-ready <br /> solutions through <br /> creative campaigns.
            </h2>
          </div>

          <div className="absolute  left-0 pt-32 w-full h-screen lg:h-[138vh] 2xl:h-[206vh] pr-24">
            <div className='sticky px-12 top-[11vw]  w-full font-media-online text-bordered font-antonio font-medium z-0'>
              <h2 className="relative text-start uppercase">graphic</h2>
              <h2 className='uppercase text-start '>design</h2>
            </div>
          </div>

          <div className='flex '>
            <div className='flex flex-col mt-[5.90vw] z-10 w-full'>
              <div data-aos="flip-left" className='relative flex justify-end w-full h-full top-[4vw] right-[15vw]'>
                <Image 
                  className="w-[42vw]"
                  src="/images-proyecto/GRAFICAS_MM-03.png"
                  alt="vida-estilo"
                  width={1440}
                  height={1320}
                />
              </div>
              <div className='relative w-full h-full  z-20'>
                <div className='flex justify-end'>
                  <Image data-aos="flip-left"
                    className="w-[42vw]"
                    src="/images-proyecto/GRAFICAS_MM-02.png"
                    alt="vida-estilo"
                    width={1440}
                    height={1320}
                  />
                </div>
              </div>

              <div className='relative w-full h-full z-30 flex justify-end bottom-[4vw] right-[10vw]'>
                <Image data-aos="flip-left"
                  className="w-[42vw]"
                  src="/images-proyecto/GRAFICAS_MM-01.png"
                  alt="vida-estilo"
                  width={1440}
                  height={1320}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full mt-[2px]'>
          <div className='px-24  my-[5vw] mx-auto bg-[#ca262c] '>
            <PreviousNext className='text-white' previousUrl="/vida-estilo" nextUrl="/vml" />
          </div>
        </div>

        <div>
          <Footer background="bg-black " />
        </div>
      </div>
    </>
  );
}
