import Hero from '../../components/hero/Hero';
import daytona from '../../../public/images-proyecto/AUTO-2-AI.png';
import Image from 'next/image';
import './daytona.css'
import PreviousNext from '../../components/previous-next/PreviousNext'
import Footer from '../../components/footer/Footer'


export default function Daytona() {
  return (
    <>
      <div>
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
        <div className='relative h-auto pb-10 sm:pb-20 bg-[#ca262c] bg-gradient-to-t from-black/90 to-transparent'>
          <div className='absolute w-[55%] top-[17%] z-10'><Image
            className="w-[100%]"
            src="/images-proyecto/Daytona-Phone-Mockup.png"
            alt="vida-estilo"
            width={829}
            height={1125}
          /></div>
          <div className='relative flex justify-end w-[77%] ml-auto'>
            <Image
              className="w-[100%]"
              src="/images-proyecto/Group.png"
              alt="vida-estilo"
              width={1110}
              height={1055}
            />
            <h2 className='absolute top-[45%] left-12 font-antonio font-semibold text-white text-[14vw] sm:text-[16vw] leading-[14vw] sm:leading-[17vw] uppercase'>Video <br /> production</h2>
          </div>
          <div className='relative flex justify-end w-full'>
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
        <div className='bg-black text-[18vw] leading-[19vw] font-antonio font-semibold uppercase py-10 lg:py-14'>
          <h2 className=' text-white'>Media</h2>
          <h2 className='relative left-[18%] text-[#CB262C]'>Online</h2>
        </div>
        <div className='flex justify-end w-full'>
          <Image
            className="w-full"
            src="/images-proyecto/Daytona-Via-publica-Mockup.png"
            alt="vida-estilo"
            width={1440}
            height={1320}
          />
        </div>
        <div className='flex flex-col relative bg-black  w-ful pt-12'>
          <div className='absolute left-0 top-12 w-1/2 z-10'><Image
            className="w-full"
            src="/images-proyecto/Group-1.png"
            alt="vida-estilo"
            width={1440}
            height={1320}
          /></div>
          <div className='flex justify-end z-20'><h2 className='text-[22vw] font-antonio font-semibold uppercase text-[#CB262C]' >& offline</h2></div>
          <div className='relative w-full'><Image
            className="w-full h-auto"
            src="/images-proyecto/GRAFICAS_MM-01.png"
            alt="vida-estilo"
            width={1440}
            height={1000}
          /></div>
        </div>
        <div className='relative h-auto pb-40 bg-[#ca262c] bg-gradient-to-b from-black/90 to-transparent'>
          <div className='relative flex justify-end w-[77%] ml-auto'>
            <Image
              className="w-[100%]"
              src="/images-proyecto/Group.png"
              alt="vida-estilo"
              width={1110}
              height={1055}
            />
            <h2 className='absolute font-antonio font-light top-[23%] left-[6%] text-white text-[3vw] leading-[3vw] uppercase'>Road-ready <br /> solutions through <br /> creative campaigns.</h2>
            <Image
              className="absolute top-[53%] w-[63%] left-[6%]"
              src="/images-proyecto/GRAFICAS_MM-03.png"
              alt="vida-estilo"
              width={912}
              height={300}
            />
          </div>
          <div className='relative flex justify-end w-[77%] left-[23%] z-20'><Image
            className="relative top-[53%] w-[63%]"
            src="/images-proyecto/GRAFICAS_MM-03.png"
            alt="vida-estilo"
            width={912}
            height={300}
          /></div>
          <div className='absolute w-full top-[42%] transform -translate-y-[50px]  z-10'>
            <div className="w-full flex flex-col font-antonio text-white  uppercase text-bordered fontSize-fluid-branding">
              <span>GRAPHIC</span>
              <span className='text-center'>design</span>
            </div>
          </div>
          <div className='w-[80%] mt-[10vw] mx-auto'>
            <PreviousNext />
          </div>
        </div>
        <div>
          <Footer background="bg-black " />
        </div>
      </div>
    </>
  );
}
