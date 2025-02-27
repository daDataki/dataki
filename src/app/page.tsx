import Footer from '../components/footer/Footer';
import Header1 from '../components/header1/Header1';
import ImageGrid from '../components/image-grid/ImageGrid'
import VerticalSlider from '../components/vertical-slider/VerticalSlider'
import HorizontalSlider from '../components/horizontal-slider/HorizontalSlider'
import Image from 'next/image';
import './page.css'

export default function Home() {


  return (
    <>
      <main>
      <Header1 logoSrc="/images-proyecto/logo-svg.svg" menuIconSrc="/images-proyecto/menu.png" />
        {/* Sección del video */}
        <div className="relative">
          <video
            className="w-full  object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/video/Video1_06-01.mp4" type="video/mp4" />
          </video>
          <Image src="/images-proyecto/logo-dataki.svg" alt="logo" width={150} height={150} layout="fixed"  className='absolute bottom-[-25px] sm:bottom-[-50px] lg:bottom-[-75px] left-[6.66%] w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] lg:w-[150px] lg:h-[150px]' />
        </div>
        <div className="flex flex-col bg-white text-black w-full  object-cover pt-12 pb-24">
          <div className="pt-12 pb-12">
            <h4 className="flex flex-col justify-center items-center font-Poppins font-medium xtext-sm uppercase ">
              <span>Growth &</span> <span>business partner</span>
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center font-antonio font-semibold xtext-lg  uppercase ">
            <h2 className='text-center'><span>we help companies</span>
              <div>
                <span className="text-easternBlue">bring to life</span>
                <span> their</span>
              </div>
              <span>business vision</span></h2>

          </div>
          {/*
            <div className="flex flex-col justify-center items-center font-Poppins font-medium text-xs mb-8 md:mb-12 lg:mb-20 uppercase ">
             <h5>keep scrolling</h5>
           </div>
          */}
        </div>
        <div className='flex flex-col w-full'>
          <video
            className="w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/Video3_B_16-ENE.mp4" type="video/mp4" />
          </video>
        </div>
        <div><VerticalSlider /></div>
        <div className='bg-white relative max-sm:mb-10'>
          <ImageGrid />
        </div>

        {/* Galería de imágenes */}
        <div><HorizontalSlider /></div>
      </main >
      <Footer />
    </>
  );
}






