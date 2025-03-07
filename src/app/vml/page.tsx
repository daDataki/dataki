"use client"

import Hero from '../../components/hero/Hero';
import beacon from '../../../public/images-proyecto/vml-hero.png';
import Image from 'next/image';
import './vml.css'
import Footer from '../../components/footer/Footer'
import PreviousNext from '../../components/previous-next/PreviousNext'







export default function Vml() {


  return (
    <>
      <div>
        <div><Hero
          overlayColor='bg-white'
          textBlack='text-black'
          title="VML"
          backgroundImage={beacon.src}
          clientInfo={{
            group: "",
            date: "2020 Ongoing",
            name: "VML USA",
            categories: [
              "front & back-end Development",
              "Digital Campaigns",
              "Video Production",
              "Graphic Design",
            ],
          }}
          aboutInfo={["VML USA", <br key="1" />, "Work Showcase"]}
          services={{
            description:
              "We teamed up with VML to support their digital campaigns with strong web development and high-quality video production, giving their projects a technological boost.",
            list: [
              "front & back-end Development",
              "Digital Campaigns",
              "Video Production",
              "Graphic Design",
            ],
          }}
        /></div>
        <div className='relative '>
          <video
            className="w-full h-auto  object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/video/VML-SIN-AUDIO.mp4" type="video/mp4" />
          </video>
        </div>
        <div className='relative pt-40 pb-16 px-24'>
          <div className='relative'>
            <div>
              <h2 className='font-antonio font-bold uppercase text-caption1'>
                hellmans
              </h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h2 className='absolute fontSize-fluid font-antonio font-medium text-bordered uppercase'>
                FRONT END
              </h2>
              <Image
                className="relative w-[47vw] h-auto z-10 top-[-4vw]"
                src="/images-proyecto/Hellmans-Mockup.png"
                alt="Hellmans-Mockup"
                layout="intrinsic"
                width={800}
                height={1111}
              />
            </div>
          </div>
        </div>
        <div className='relative flex justify-center items-center bg-[#d8e7f2] py-[11.11vw] px-[13.33vw]'>

          <div className='w-full'>
            <Image
              className="relative"
              src="/images-proyecto/Ellipse-104.png"
              alt="Ellipse-104"
              layout="intrinsic"
              width={800}
              height={1111}
            />
          </div>
          <div className='absolute flex justify-center left-[8vw] items-center top-1/2 -translate-y-[39%]'>

            <div className='relative w-[26.31vw] left-[15vw] h-auto '>
              <Image
                className="relative w-full h-auto"
                src="/images-proyecto/PHONE-110.png"
                alt="PHONE-110"
                layout="intrinsic"
                width={800}
                height={1111}
              />
            </div>
            <div className='w-[37.91vw] h-auto] z-10'>
              <Image
                className="relative w-full h-auto"
                src="/images-proyecto/PHONE-111.png"
                alt="PHONE-111"
                layout="intrinsic"
                width={800}
                height={1111}
              />
            </div>
            <div className='relative w-[26.31vw] right-[14vw] top-[-3vw] h-auto '>
              <Image
                className="relative w-full h-auto"
                src="/images-proyecto/PHONE-18.png"
                alt="PHONE-18"
                layout="intrinsic"
                width={800}
                height={1111}
              />
            </div>

          </div>
        </div>
        <div className='relative pt-40 pb-16   bg-[#3a0f4e] bg-gradient-to-t from-black/100 to-transparent'>
          <div className='relative'>
            <h2 className='font-antonio font-bold uppercase text-caption1 text-white pl-24 max-lg:pl-12'>
              glade
            </h2>
          </div>
          <div className='relative flex flex-col items-center justify-center'>
            <h2 className='absolute fontSize-fluid font-antonio font-medium text-bordered-back uppercase top-[-4vw]'>
              BACK END
            </h2>
          </div>
          <div className='relative w-full flex flex-col'>
            <div className='relative flex justify-center items-center w-full top-[8vw]'>
              <Image
                className="relative w-[45vw] h-auto"
                src="/images-proyecto/Glade-Mockup1.png"
                alt="PHONE-110"
                layout="intrinsic"
                width={800}
                height={1111}
              />

              <Image
                className="relative w-[45vw] h-auto z-20"
                src="/images-proyecto/Glade-Mockup3.png"
                alt="PHONE-110"
                layout="intrinsic"
                width={800}
                height={1111}
              />

              <Image
                className="absolute w-[45vw] h-auto z-20"
                src="/images-proyecto/Glade-Mockup2.png"
                alt="PHONE-110"
                layout="intrinsic"
                width={800}
                height={1111}
              />

            </div>

            <div className='relative flex justify-center items-center w-full mt-[-13vw]'>
              <Image
                className="relative w-[45vw] h-auto left-[11vw] z-10"
                src="/images-proyecto/Glade-Mockup4.png"
                alt="PHONE-110"
                layout="intrinsic"
                width={800}
                height={1111}
              />
              <Image
                className="relative w-[45vw] h-auto right-[11vw]"
                src="/images-proyecto/Glade-Mockup5.png"
                alt="PHONE-110"
                layout="intrinsic"
                width={800}
                height={1111}
              />
            </div>
          </div>
          <div className='relative w-full flex flex-col pt-40 pb-32 px-24 bg-[#ffcb11]'>
            <div className='relative w-full pb-36'>
              <h2 className='font-antonio font-bold uppercase text-caption1 ml-4'>
                Belvita
              </h2>
            </div>
            <div className='w-full'>
              <h2 className='fontSize-fluid font-antonio font-medium text-bordered uppercase'>
                FRONT END
              </h2>
            </div>
            <div className='flex'>
              <div><Image
                className="relative"
                src="/images-proyecto/Hellmans-Mockup.png"
                alt="PHONE-110"
                layout="intrinsic"
                width={800}
                height={1111}
              />
              <Image
                className="relative"
                src="/images-proyecto/Mesa-trabajo-180.png"
                alt="PHONE-110"
                layout="intrinsic"
                width={800}
                height={1111}
              />
              </div>
              
              <Image
                className="relative"
                src="/images-proyecto/Mesa-trabajo-181 .png"
                alt="PHONE-110"
                layout="intrinsic"
                width={800}
                height={1111}
              />
              <div className='relative'>
              <Image
                className="relative"
                src="/images-proyecto/Mesa-trabajo-181-2.png"
                alt="PHONE-110"
                layout="intrinsic"
                width={800}
                height={1111}
              />
              
              </div>
              
            </div>
          </div>
        </div>

        <div className='mt-[-1px] bg-[#68725E]  text-white px-24 z-10'><PreviousNext /></div>
        <div>
          <Footer background="bg-[#131313] " />
        </div>
      </div>
    </>
  );
}
