import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import ImageGrid from '../components/image-grid/ImageGrid'
import VerticalSlider from '../components/vertical-slider/VerticalSlider'
import HorizontalSlider from '../components/horizontal-slider/HorizontalSlider'

export default function Home() {


  return (
    <>
      <Header />
      <main>
        {/* Sección del video */}
        <div className="relative">
          <video
            className="w-full h-auto object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/Video1_06-01.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Otras secciones de contenido */}
        <div className="flex flex-col">
          {/* Contenido del encabezado */}
          <div className="flex flex-col">
            <div className="my-8 md:my-12 lg:my-20">
              <h4 className="flex flex-col justify-center items-center font-Poppins font-semibold text-xl sm:text-3xl uppercase ">
                <span>Growth &</span> <span>business partner</span>
              </h4>
            </div>
            <div className="flex flex-col justify-center items-center font-antonio font-bold text-4xl md:text-5xl lg:text-8xl mb-8 md:mb-12 lg:mb-20 uppercase ">
              <span>we help companies</span>
              <div>
                <span className="text-easternBlue">bring to life</span>
                <span> their</span>
              </div>
              <span>business vision</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <video
            className="w-full h-screen object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/Video3_B_16-ENE.mp4" type="video/mp4" />
          </video>
        </div>
        <div><VerticalSlider /></div>

        {/* primera Galería de imágenes  */}
        <div className='bg-white relative'>
          <ImageGrid />
        </div>

        {/* Galería de imágenes */}
        <div><HorizontalSlider /></div>
      </main >
      <Footer />
    </>
  );
}






