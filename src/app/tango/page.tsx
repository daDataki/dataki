import Hero from '../../components/hero/Hero';
import tango from '../../../public/images-proyecto/TC2K_ENTRADA.png';
import Image from 'next/image';
import './tango.css'
import Footer from '../../components/footer/Footer'


export default function VidaEstilo() {
  return (
    <>
      <div>
        <div><Hero
          title={<h1 className="text-tango-title">TANGO Motorsports</h1>}
          backgroundImage={tango.src}
          clientInfo={{
            group: "Hospitality Group",
            date: "2022 - 2024",
            name: "TANGO motorsports",
            categories: [
              "Video Production & Graphic Design",
              "UX/UI & Web Development",
              "Business & Digital Strategy",
              "Graphic Design",
            ],
          }}
          aboutInfo={
            <>
              Tango Motorsports
              <br />
              work showcase
            </>
          }
          services={{
            description:
              "We supported Tango C200 with dynamic videos, sleek web design, and full-stack development, all backed by a strategic vision.",
            list: [
              "Video Production",
              "UX/UI & Web Development",
              "Business & Digital Strategy",
              "Graphic Design",
            ],
          }}
        /></div>
        <div className='flex flex-col w-full'>
          <video
            className="w-full h-video object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/Teaser_ Axion.mp4" type="video/mp4" />
          </video>
        </div>
        <div className='relative pt-14 sm:pt-32 bg-black flex flex-col justify-center items-center overflow-hidden xtext-xxl text-bordered-branding font-antonio font-medium text-white mt-[-1px] uppercase'>
          <h2>web</h2>
          <h2>desing</h2>
          <div className='w-full flex justify-center items-start relative'><Image
            className="relative w-full top"
            src="/images-proyecto/Daytona-Intro-Mockup.png"
            alt="vida-estilo"
            layout="intrinsic"
            width={1140}
            height={1080}
          /></div>
        </div>
        <div className='relative w-full flex flex-col justify-start  bg-red-700'><Image
          className="relative w-full"
          src="/images-proyecto/Mask-group-2.png"
          alt="vida-estilo"
          layout="intrinsic"
          width={1440}
          height={859}
        />
          <div className='relative flex flex-col items-end text-bordered-branding xtext-xxl font-antonio bg-[#4e1a1c] bg-gradient-to-t from-black/80 to-transparent uppercase
          ß'>
            <h2 className='uppercase top-1 mr-2'>digital</h2>
            <h2 className='uppercase top-2 mr-2'>strategy</h2>
          </div>
          <div className='absolute flex justify-center items-center w-full top-[15%] gap-10'>
            <div>
              <Image
                className="max-sm:hidden relative w-image-iphone"
                src="/images-proyecto/iPhone-1-Pro.png"
                alt="vida-estilo"
                layout="intrinsic"
                width={375}
                height={859}
              />
            </div>
            <div>
              <Image
                className="relative w-image-iphone"
                src="/images-proyecto/iPhone-centro-Pro.png"
                alt="vida-estilo"
                layout="intrinsic"
                width={375}
                height={859}
              />
            </div>
            <div>
              <Image
                className="max-sm:hidden relative w-image-iphone"
                src="/images-proyecto/iPhone-3-Pro.png"
                alt="vida-estilo"
                layout="intrinsic"
                width={375}
                height={859}
              />
            </div>
          </div>
        </div>
        <div>
          <Footer background="bg-black " />
        </div>
      </div>
    </>
  );
}
