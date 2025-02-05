import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import ImageGrid from '../components/image-grid/ImageGrid'
import VerticalSlider from '../components/vertical-slider/VerticalSlider'
import HorizontalSlider from '../components/horizontal-slider/HorizontalSlider'
import './page.css'

export default function Home() {


  return (
    <>
      <Header />
      <main>
        {/* Sección del video */}
        <div className="relative">
          <video
            className="w-full h-[35vh]  sm:h-[50vh] lg:h-screen object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/Video1_06-01.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col bg-white text-black">
          <div className="my-8 md:my-12 lg:my-20">
            <h4 className="flex flex-col justify-center items-center font-Poppins font-semibold xtext-sm uppercase ">
              <span>Growth &</span> <span>business partner</span>
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center font-antonio font-semibold xtext-lg mb-8 md:mb-12 lg:mb-20 uppercase ">
            <h2 className='text-center'><span>we help companies</span>
              <div>
                <span className="text-easternBlue">bring to life</span>
                <span> their</span>
              </div>
              <span>business vision</span></h2>

          </div>
          <div className="flex flex-col justify-center items-center font-Poppins font-medium xtext-xs mb-8 md:mb-12 lg:mb-20 uppercase ">
            <h5>keep scrolling</h5>
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <video
            className="w-full h-[35vh]  sm:h-[50vh] lg:h-screen object-cover"
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






