import Hero from '../../components/hero/Hero';
import beacon from '../../../public/images-proyecto/beacon-hotel-south-beach5.png';
import Image from 'next/image';
import './vida-estilo.css'
import Footer from '../../components/footer/Footer'

export default function VidaEstilo() {
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
          aboutInfo="Vida & Estilo Hospitality Group work showcase"
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
        <div className='relative h-[50vh] sm:h-[91vh] md:h-[121vh] lg:h-[158vh] xl:h-[93vw] 2xl:h-[105vw] px-12 bg-black'>
          <div className='font-antonio font-semibold fontSize-fluid'>
            <h2 className='uppercase text-bordered text-black'>
              web
            </h2>
          </div>
          <div className='font-antonio font-semibold fontSize-fluid'>
            <h2 className='uppercase text-bordered ç'>
              design
            </h2>
          </div>
          <div className="relative hidden sm:flex flex-row justify-end w-full h-auto sm:top-[-34vh] md:top-[-48vh] lg:top-[-63vh] xl:top-[-71vh] 2xl:top-[-78vh] z-10 ">
            {/* Primera imagen (adelante) */}
            <Image
              className="relative  w-1/2 2xl:w-[60%] !max-w-[800px] z-20"
              src="/images-proyecto/vida-estilo.png"
              alt="vida-estilo"
              layout="intrinsic"
              width={800}
              height={1600}
            />

            {/* Segunda imagen (detrás) */}
            <Image
              className="absolute top-[47%] left-12 w-1/2 lg:w-[60%] !max-w-[800px] z-10 "
              src="/images-proyecto/vida-estilo2.png"
              alt="vida-estilo"
              layout="intrinsic"
              width={800}
              height={1111}
            />
            <div className='absolute flex justify-end font-antonio font-semibold fontSize-fluid-branding top-[109%] lg:top-[123%] xl:top-[118%] 2xl:top-[110%]'>
              <h2 className='relative uppercase text-bordered-branding left-6 lg:left-14 2xl:left-0'>branding</h2>
            </div>
          </div>
        </div>
        <div className='relative flex flex-col justify-center items-center p-12 font-antonio font-semibold fontSize-fluid-branding bg-branding'>
          <h2 className='sm:hidden relative uppercase text-bordered-branding sm:left-3'>branding</h2>
          <div className='flex flex-col items-center xl:items-start xl:ml-80  mt-8 sm:mt-[50%]  md:mt-[15%] lg:mt-[33%] xl:mt-[63%] 2xl:mt-[54%] h-auto'>
            <div className='flex max-lg:justify-center sm:w-[700px]'> <h4 className='relative  uppercase pt-12 pb-32 text-white font-antonio font-medium text-4xl leading-10'>Elevating brands <br /> through design, <br />  data, and strategy.
            </h4></div>
            <div className='w-9/12 flex max-md:justify-center'><Image
              className="w-full md:w-9/12 lg:w-full !max-w-[800px] z-10 "
              src="/images-proyecto/Vida-Estilo-Mockup.png"
              alt="vida-estilo"
              layout="intrinsic"
              width={800}
              height={1111}
            /></div>
          </div>
        </div>
        <div className='relative bg-black sm:h-[170vh] pt-32 max-sm:pb-12'>
          <div className='flex '>
            <div className='w-3/5 flex justify-center z-30'>
              <h2 className='uppercase text-white font-semibold font-antonio fontSize-fluid-social'>Social
              </h2>
            </div>
            <div className='w-2/5'></div>
          </div>
          <div className='flex'>
            <div className='w-2/5'>
            </div>
            <div className='w-3/5'>
              <h2 className='uppercase text-white font-semibold font-antonio fontSize-fluid-social max-sm:mb-12'>Media</h2>
            </div>
          </div>
          <div className='relative sm:absolute w-[36%] sm:h-[36%] sm:top-[17%] left-[27%] z-10'><Image
            className=" w-full 2xl:w-[100%] !max-w-[800px] z-10 "
            src="/images-proyecto/MIAMI-SPACE.png"
            alt="vida-estilo"
            layout="intrinsic"
            width={800}
            height={1111}
          /></div>
          <div className='relative sm:absolute w-[36%] sm:h-[36%] sm:top-[34%] left-[12%]'><Image
            className=" w-full 2xl:w-[100%] !max-w-[800px] z-10 "
            src="/images-proyecto/MIAMI-SPACE1.png"
            alt="vida-estilo"
            layout="intrinsic"
            width={800}
            height={1111}
          /></div>
          <div className='relative sm:absolute w-[36%] sm:h-[36%] sm:top-[44%] left-[38%]'><Image
            className=" w-full 2xl:w-[100%] !max-w-[800px] z-10 "
            src="/images-proyecto/MIAMI-SPACE2.png"
            alt="vida-estilo"
            layout="intrinsic"
            width={800}
            height={1111}
          /></div>
        </div>
        <div className='relative flex flex-col bg-strategy'>
          <div className=' w-full z-10'><Image
            className=" w-full z-10 "
            src="/images-proyecto/Mask-group.png"
            alt="vida-estilo"
            layout="intrinsic"
            width={800}
            height={1111}
          /></div>
          <div className='absolute fontSize-fluid-strategy fontSize-fluid-strategy  top-2/3 left-12'><div className=''><h2 className='uppercase font-antonio font-bold text-bordered-strategy '>Digital</h2></div>
            <div className=''><h2 className='uppercase font-antonio font-bold text-bordered-strategy '>Strategy</h2></div></div>
        </div>
        <div><div className=' w-full z-10'><Image
          className=" w-full z-10 "
          src="/images-proyecto/Vida-Estilo-Menu.png"
          alt="vida-estilo"
          layout="intrinsic"
          width={800}
          height={1111}
        /></div></div>
        <div>
          <Footer background="bg-black " />
        </div>
      </div>
    </>
  );
}
