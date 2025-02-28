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
        <div className='relative pt-32  bg-[#ca262c] bg-gradient-to-t from-black/90 to-transparent '>
          <Image src="/images-proyecto/Mask-group-daytona.png" alt="Phone Mockup" className="absolute w-[80%] top-0 right-0  z-10" width={450} height={800} />
          {/* <div className="phone-container">
            <Image src="/images-proyecto/Daytona-Phone-Mockup.png" alt="Phone Mockup" className="phone-mockup z-10" width={450} height={800} />
            <video className="phone-video z-20" autoPlay loop muted playsInline>
              <source src="/video/Nutricion1.mp4" type="video/mp4" />
            </video>
            <video className="phone-video1 z-20" autoPlay loop muted playsInline>
              <source src="/video/cansancio.mp4" type="video/mp4" />
            </video>
          </div> */}

          <div className="relative flex flex-col justify-center items-start pl-[7.35vw] sm:top-[1vh] md:top-[2vh] lg:top-[8vh] xl:top-[13vh] 2xl:top-[17vh] text-white font-antonio font-semibold font-production uppercase">
            <div className='absolute top-[-20%] left-1/3 -translate-x-[7.35vw]'>
              <Image src="/images-proyecto/Daytona-Phone-Mockup1.png" alt="Phone Mockup" className="w-[42vw]  z-10" width={450} height={800} />
            </div>
            <span className='font-production font-semibold font-antonio'>Video</span>
            <span className="ml-[12vw] font-production font-semibold font-antonio">Production</span>
          </div>
          <div className='relative flex flex-col justify-end w-full '>
            <h2 className='relative self-end mr-[11vw] sm:top-[10vh] md:top-[15vh] lg:top-[20vh] xl:top-[25vh] 2xl:top-[35vh] font-antonio font-normal text-white font-performance uppercase'>Performance- <br /> driven solutions <br /> for an impactful <br /> digital presence.</h2>
            <div className='relative bg-transparent font-antonio font-medium uppercase '>
              <div className='sticky top-[24vh] font-media-online'>
                <h2 className=' text-media'>Media</h2>
                <h2 className='relative left-[18%] text-media-online'>Online</h2>
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
        <div className='bg-black pb-24 z-20'><h2 className='font-media-online font-antonio font-semibold uppercase text-[#CB262C] text-end' >& offline</h2></div>
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
        <div className='relative bg-black bg-gradient-to-t from-[#ca262c]/100 to-transparent'>
          <Image
            src="/images-proyecto/Mask-group-end.png"
            alt="Phone Mockup"
            className="absolute w-[70%] top-0 right-0 z-0"
            width={450}
            height={800}
          />

          <div className="absolute  left-0 w-full h-screen lg:h-[138vh] 2xl:h-[206vh]">
            <div className='sticky top-40 font-media-online text-bordered font-antonio font-medium z-40'>
              <h2 className='relative ml-[6.94vw] uppercase'>graphic</h2>
              <h2 className='uppercase text-end mr-[5.34vw]'>design</h2>
            </div>
          </div>

          <div className='w-full flex justify-start items-start ml-[6.94vw] pt-[11vw]'>
            <h2 className='font-antonio font-semibold font-performance uppercase text-white'>
              Road-ready <br /> solutions through <br /> creative campaigns.
            </h2>
          </div>

          <div className='flex flex-col'>
            <div className='flex mt-[5.90vw] z-10'>
              <div className='relative flex w-1/2 h-full left-[14.23vw]'>
                <Image
                  className="w-[49.65vw]"
                  src="/images-proyecto/GRAFICAS_MM-03.png"
                  alt="vida-estilo"
                  width={1440}
                  height={1320}
                />
              </div>
              <div className='relative w-1/2 h-full top-[18.19vw] z-20'>
                <div className='flex justify-end'>
                  <Image
                    className="w-[42vw]"
                    src="/images-proyecto/GRAFICAS_MM-02.png"
                    alt="vida-estilo"
                    width={1440}
                    height={1320}
                  />
                </div>
              </div>
            </div>
            <div className='relative w-1/2 h-full z-30 left-[24.35vw]'>
              <Image
                className="w-[42vw]"
                src="/images-proyecto/GRAFICAS_MM-01.png"
                alt="vida-estilo"
                width={1440}
                height={1320}
              />
            </div>
          </div>
        </div>
        <div className='w-[80%] my-[5vw] mx-auto bg-[#ca262c]'>
          <PreviousNext className='text-white' />
        </div>
        <div>
          <Footer background="bg-black " />
        </div>
      </div>
    </>
  );
}
