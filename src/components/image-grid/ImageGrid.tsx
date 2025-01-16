import Image from 'next/image';

export default function ImageGrid() {

  return (
    <div className="container mx-auto max-w-full sm:mb-44 ">
      <div className="my-12 sm:my-20">
        <h2 className="text-center text-3xl font-Poppins font-light py-8 sm:pb-32 lg:pb-44 sm:pt-12 uppercase">our CASES</h2>
      </div>
      <div className="relative flex flex-col sm:hidden items-center justify-center">
        <h2 className=" text-9xl font-bold font-antonio uppercase">work</h2>
        <h3 className=" text-7xl font-light font-signature text-easternBlue ">Showcase</h3>
      </div>
      <div className="max-sm:flex-col max-sm:justify-center max-sm:items-center flex justify-between items-end max-sm:gap-4 max-sm:mb-3">
        <Image
          src="/images-grid/Mask group (1).png"
          alt="Mask group 1"
          className="sm:w-[250px] lg:w-auto sm:h-[150px] lg:h-[278px]"
          width={250} 
          height={150} 
        />
        <div> <Image src="/images-grid/Mask group (2).png" alt="Mask group 2 " className=" sm:w-[250px] lg:w-auto sm:h-[150px] lg:h-[278px] sm:-translate-y-1/2"  width={250} 
          height={150}/></div>
        <div><Image src="/images-grid/Mask group (3).png" alt="Mask group 3 " className=" sm:w-[250px] lg:w-auto sm:h-[150px] lg:h-[278px]"  width={250} 
          height={150} /></div>
      </div>

      <div className="relative max-sm:hidden flex items-center justify-center">
        <h2 className="sm:text-8xl lg:text-[140px] xl:text-[220px]  leading-[220px] -mt-16 mr-0 lg:mr-20 xl:mr-0 lg:-mt-36 font-bold font-antonio uppercase">work</h2>
        <h3 className="absolute z-10 top-4 lg:-top-12 xl:top-0 left-1/2 -translate-x-[116px] xl:-translate-x-[76px] right-10 sm:text-7xl lg:text-[100px] xl:text-[110px] leading-[126px] font-light font-signature text-easternBlue ">Showcase</h3>
      </div>

      <div className="max-sm:flex-col max-sm:justify-center max-sm:items-center flex sm:mt-40 max-sm:gap-4 max-sm:mb-3">
        <div className="flex justify-center sm:w-1/2">
          <Image
            src="/images-grid/Mask group (4).png"
            alt="Mask group 3"
            className="sm:w-[250px] lg:w-auto sm:h-[150px] lg:h-[278px]"  width={250} 
            height={150}
          />
        </div>
        <div className="flex justify-center sm:w-1/2 ">
          <Image
            src="/images-grid/beacon-hotel-south-beach 5.png"
            alt="beacon-hotel-south-beach"
            className="sm:w-[250px] lg:w-auto sm:h-[150px] lg:h-[278px] sm:-translate-y-1/2"  width={250} 
            height={150}
          />
        </div>
      </div>
    </div>

  );
}
