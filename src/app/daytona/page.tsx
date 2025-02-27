import Hero from '../../components/hero/Hero';
import daytona from '../../../public/images-proyecto/AUTO-2-AI.png';
import Image from 'next/image';
import './daytona.css'
import PreviousNext from '../../components/previous-next/PreviousNext'
import Footer from '../../components/footer/Footer'


export default function Daytona() {
  return (
    <>
      <div className='bg-[#ca262c]'>
        <div><Hero
          title="Daytona"
          backgroundImage={daytona.src}
          clientInfo={{
            group: "",
            date: "2022 Ongoing",
            name: "Daytona",
            categories: [
              "Video & Radio Production",
              "Media (Online & Offline)",
              "Digital Campaigns",
              "Graphic Design",
            ],
          }}
          aboutInfo="Daytona work showcase"
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
        <div className='flex justify-center bg-black mt-[-1px] pb-10'>
          <video
            className="w-[90%] h-[716px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/Video6_08-01.mp4" type="video/mp4" />
          </video>

        </div>
        <div className='relative pt-32 pb-10 sm:pb-20 bg-[#ca262c] bg-gradient-to-t from-black/90 to-transparent h-[200vh]'>
          <div className="phone-container">
            <Image src="/images-proyecto/Daytona-Phone-Mockup.png" alt="Phone Mockup" className="phone-mockup z-10" width={450} height={800} />
            <video className="phone-video z-20" autoPlay loop muted playsInline>
              <source src="/video/Nutricion1.mp4" type="video/mp4" />
            </video>
            <video className="phone-video1 z-20" autoPlay loop muted playsInline>
              <source src="/video/cansancio.mp4" type="video/mp4" />
            </video>
          </div>
          <div className='relative top-[30vh] flex justify-center w-full'>

            <h2 className='text-center font-antonio font-normal text-white font-production  uppercase z-0'>Video <br /> production</h2>
          </div>
          <div className='relative flex justify-end w-full top-[40vh]'>
            <Image
              className="w-1/4"
              src="/images-proyecto/pngwing.png"
              alt="vida-estilo"
              width={389}
              height={730}
            />
            <h2 className='absolute top-[85%] sm:top-[66%] left-[20%] font-antonio font-medium text-white text-[7vw] sm:text-[4vw] leading-[7vw] sm:leading-[4vw] uppercase'>Performance- <br /> driven solutions <br /> for an impactful <br /> digital presence.</h2>
          </div>
        </div>
        <div className='flex flex-col w-full'>
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
        <div className='relative bg-black text-[18vw] leading-[19vw] font-antonio font-semibold uppercase py-10 lg:py-14'>
          <div className='sticky top-[24vh]'>
            <h2 className=' text-white'>Media</h2>
            <h2 className='relative left-[18%] text-[#CB262C]'>Online</h2></div>

          <div className='flex justify-end w-full'>
            <Image
              className="w-full"
              src="/images-proyecto/Daytona-Via-publica-Mockup.png"
              alt="vida-estilo"
              width={1440}
              height={1320}
            />
          </div>
        </div>

        <div className='relative flex flex-col  bg-black  w-ful pt-12'>
          <div className='absolute left-0 top-12 w-1/2 z-10 '><Image
            className="w-full"
            src="/images-proyecto/Group-1.png"
            alt="vida-estilo"
            width={1440}
            height={1320}
          />
          </div>
          <div className='sticky top-[20vh] z-20'><h2 className='text-[22vw] font-antonio font-semibold uppercase text-[#CB262C] text-end' >& offline</h2></div>
          <div className='relative w-full'><Image
            className="w-full h-auto"
            src="/images-proyecto/GRAFICAS_MM-01.png"
            alt="vida-estilo"
            width={1440}
            height={1000}
          /></div>
        </div>
        <div className='relative  bg-[#ca262c] bg-gradient-to-b from-black/90 to-transparent min-h-[178vh]'>
          <div className='absolute top-0 flex justify-end w-full h-[150vh]'>
            <h2 className='absolute w-full h-[218px] font-antonio font-normal font-road top-[17%] left-[25%] text-white uppercase z-20'>Road-ready <br /> solutions through <br /> creative campaigns.</h2>
            <div className="absolute top-0 right-0 w-[65%] ">
              <Image
                className="z-20"
                src="/images-proyecto/Group1-1.png"
                alt="vida-estilo"
                width={1110}
                height={1055}
              />
            </div>
          </div>
          <div className='sticky top-[30vh] z-10'>
            <div className="w-full flex flex-col font-antonio text-white  uppercase text-bordered fontSize-fluid-branding">
              <span>GRAPHIC</span>
              <span className='text-center'>design</span>
            </div>
          </div>
          <div className=' w-[77%] z-20'>
            <Image
              className="absolute top-[32%] w-[54%] left-1/2 -translate-x-1/2 z-20"
              src="/images-proyecto/GRAFICAS_MM-03.png"
              alt="vida-estilo"
              width={912}
              height={300}
            />
            <Image
              className="absolute bottom-0 w-[54%] right-0"
              src="/images-proyecto/GRAFICAS_MM-02.png"
              alt="vida-estilo"
              width={912}
              height={300}
            /></div>


        </div>
        <div className='w-[80%] mt-[10vw] mx-auto bg-[#ca262c]'>
          <PreviousNext className='text-white' />
        </div>
        <div>
          <Footer background="bg-black " />
        </div>
      </div>
    </>
  );
}
