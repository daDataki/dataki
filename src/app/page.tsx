import Footer from '../components/footer/Footer';
import Header1 from '../components/header1/Header1';
import ImageGrid from '../components/image-grid/ImageGrid'
import VerticalSlider from '../components/vertical-slider/VerticalSlider'
import HorizontalSlider from '../components/horizontal-slider/HorizontalSlider'
import './page.css'



export default function Home() {
  return (
    <>
      <main>
        <Header1
          logoSrc="/images-proyecto/logo-svg.svg"
          menuIconSrc="/images-proyecto/menuBlack.png"
          menuCloseIcon="/images-proyecto/closeMenu.svg"
          logoSrcOpen="/images-proyecto/logo.png"
        />
        <div className="relative w-full h-[75vh] sm:h-[100dvh] overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/video/Video1_06-01.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col bg-white text-black w-full  object-cover pt-12 pb-24">
          <div className="pt-12 pb-12">
            <h4 className="flex flex-col justify-center items-center font-Poppins font-medium xtext-sm uppercase ">
              <span>Growth &</span> <span>business partner</span>
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center font-antonio font-semibold xtext-lg  uppercase ">
            <h2 className='text-center lg:safari-text-stroke'
            ><span >we help companies</span>
              <div>
                <span className="text-easternBlue stroke-easternBlue" >bring to life</span>
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
            className="w-full max-sm:h-[60vh] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/Video3_B_16-ENE.mp4" type="video/mp4" />
          </video>
        </div>
        <div><VerticalSlider /></div>
        <div id="work" className='bg-white relative max-sm:pb-10 pb-16'>
          <ImageGrid />
        </div>
        <div><HorizontalSlider /></div>
      </main >
      <Footer />
    </>
  );
}






