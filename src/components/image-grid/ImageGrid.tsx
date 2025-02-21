import Image from 'next/image';
import './ImageGrid.css';

export default function ImageGrid() {
  return (
    <div className="mx-auto w-full sm:mb-16 min-h-screen overflow-hidden max-sm:pt-10">
      <div className="max-sm:hidden max-sm:mt-12 sm:mt-14 our-cases-major ">
        <h2 className="text-center text-cases font-Poppins text-black font-light sm:pb-32 lg:pb-44 uppercase">
          our CASES
        </h2>
      </div>

      {/* Sección 'Work' */}
      <div className="relative flex flex-col sm:hidden items-center justify-center">
        <h2 className="text-work font-bold font-antonio text-black uppercase">work</h2>
        <h3 className="text-7xl font-light font-signature text-easternBlue">
          Showcase
        </h3>
      </div>

      {/* Primer grupo de imágenes */}
      <div className="flex max-sm:flex-col justify-center items-center sm:justify-between sm:items-end mb-responsive max-sm:gap-8 max-sm:mb-8">
        <div>
          <Image
            src="/images-grid/busy-1.png"
            alt="busy-1.png"
            className="sm:w-[212px] lg:w-[285px] lg:h-[198px] xl:w-[400px] sm:h-[150px] xl:h-[278px] width-major"
            width={400}
            height={278}
          />
        </div>

        <div>
          <Image
            src="/images-grid/Maskgroup2.png"
            alt="Mask group 2"
            className="sm:w-[212px] lg:w-[285px] lg:h-[198px] xl:w-[400px] sm:h-[150px] xl:h-[278px] width-major sm:-translate-y-1/2"
            width={400}
            height={278}
          />
        </div>

        <div>
          <Image
            src="/images-grid/Mask-group33.png"
            alt="Mask group 3"
            className="max-sm:h-[173px] sm:w-[212px] lg:w-[285px] lg:h-[198px] xl:w-[400px] sm:h-[150px] xl:h-[278px] width-major sm:-translate-y-1/3"
            width={400}
            height={278}
          />
        </div>
      </div>

      {/* Sección 'Work' */}
      <div className="max-sm:hidden absolute inset-0 flex items-center justify-center">
        <h2 className="absolute text-work font-bold font-antonio uppercase top-[22%] lg:top-[28%] xl:top-[32%] 2xl:top-[34%] left-1/2 -translate-x-1/2 -translate-y-1/2 work-major">work</h2>
        <h3 className="absolute z-10  text-Showcase font-light font-signature text-easternBlue top-[27%] lg:top-[33%] xl:top-[38%] 2xl:top-[40%] left-[57%] -translate-x-1/2 -translate-y-1/2 work-showcase">
          Showcase
        </h3>
      </div>


      {/* Segundo grupo de imágenes */}
      <div className="relative flex max-sm:flex-col justify-center items-center sm:justify-between sm:items-end sm:left-[7.3vw] mb-responsive max-sm:gap-8 max-sm:mb-8">
        <Image
          src="/images-grid/Mask-group4.png"
          alt="Mask group 4"
          className="sm:w-[212px] lg:w-[285px] lg:h-[198px] xl:w-[400px] sm:h-[150px] xl:h-[278px] width-major"
          width={400}
          height={278}
        />
        <div>
          <Image
            src="/images-grid/beacon-beach5.png"
            alt="Mask group 2"
            className="sm:w-[212px] lg:w-[285px] lg:h-[198px] xl:w-[400px]  sm:h-[150px] xl:h-[278px] width-major sm:-translate-y-1/2"
            width={400}
            height={278}
          />
        </div>
        <div className="">
          <Image
            src="/images-grid/miroshnichenko66.png"
            alt="Mask group 3"
            className="max-sm:h-[173px] sm:w-[212px] lg:w-[285px] lg:h-[198px] xl:w-[400px] sm:h-[150px] xl:h-[278px] width-major sm:-translate-y-[-20%]"
            width={400}
            height={278}
          />
        </div>
      </div>

      {/* Tercer grupo de imágenes */}
      <div className="flex max-sm:flex-col justify-center items-center sm:justify-between sm:items-end max-sm:gap-8 ">
        <Image
          src="/images-grid/Macbook-Claro7.png"
          alt="Macbook image"
          className="sm:w-[212px] lg:w-[285px] lg:h-[198px] xl:w-[400px] sm:h-[150px] xl:h-[278px] width-major"
          width={400}
            height={278}
        />
        <div>
          <Image
            src="/images-grid/TC2K_ENTRADA8.png"
            alt="TC2K image"
            className="sm:w-[212px] lg:w-[285px] lg:h-[198px] xl:w-[400px] sm:h-[150px] xl:h-[278px] width-major sm:-translate-y-1/2"
            width={400}
            height={278}
          />
        </div>
        <div>
          <Image
            src="/images-grid/Mask-group-99.png"
            alt="Mask group 3"
            className="max-sm:h-[173px] sm:w-[212px] lg:w-[285px] lg:h-[198px] xl:w-[400px] sm:h-[150px] xl:h-[278px] width-major"
            width={400}
            height={278}
          />
        </div>
      </div>
    </div>

  );
}
