
import Image from "next/image";
import "./about.css";
import Header from "../../components/header1/Header1";
import Footer from "../../components/footer/Footer"


export default function About() {
  return (
    <div>
      <Header
        className="text-white"
        logoSrc="/images-proyecto/logo.png"
        menuIconSrc="/images-proyecto/menuWhite.png"
        logoSrcOpen="/images-proyecto/logo.png"
        menuCloseIcon="/images-proyecto/closeMenu.svg"
      />
      
      <div className="bg-black pt-12   sm:pt-20">
        <div className="pl-12 sm:pl-24">
          <div className="relative"><h1 className=" text-about font-antonio font-bold text-white uppercase">about</h1>
          <h2 className="absolute text-our-story  text-easternBlue font-signature font-light top-[64%]  translate-x-[20%] ">Our story</h2></div>
          
        </div>
        <div className="flex justify-center my-28 sm:my-32 md:my-36 lg:my-60"><h2 className="relative left-[4.28%] lg:left-[5.28%] xl:left-[3%] uppercase font-antonio font-bold text-white text-become-your-growth">We are ready to <br />
          become your <span className="text-easternBlue">growth <br />
            & business partner</span> </h2></div>
        <div className="bg-white py-28">
          <div className="flex flex-row justify-center gap-16 px-28">
            <div className="w-1/2 flex justify-end"><h4 className="uppercase font-Poppins font-extralight text-we text-[#131313]">We work under <br /> 5 principles</h4></div>
            <div className="w-1/2 text-trus-integrate">
              <h6 className="font-Poppins font-medium  border-y border-black text-[#131313]">Trust</h6>
              <h6 className="font-Poppins font-medium  border-b border-black text-[#131313]">Quality</h6>
              <h6 className="font-Poppins font-medium  border-b border-black text-[#131313]">Empathy</h6>
              <h6 className="font-Poppins font-medium  border-b border-black text-[#131313]">Transparency</h6>
              <h6 className="font-Poppins font-medium  border-b border-black text-[#131313]">50% Thinkers + 50% doers</h6>
            </div>
          </div>
          <div className="flex flex-row justify-center my-12 sm:my-32 gap-16 px-28">
            <div className="w-1/2 flex justify-end"><h4 className="uppercase font-Poppins font-extralight text-we text-[#131313]">We are proud of <br /> our values</h4></div>
            <div className="w-1/2 text-trus-integrate">
              <h6 className="font-Poppins font-medium  border-y border-black text-[#131313]">Integrated</h6>
              <h6 className="font-Poppins font-medium  border-b border-black text-[#131313]">Partners Mindset</h6>
              <h6 className="font-Poppins font-medium  border-b border-black text-[#131313]">Performance Driven</h6>
              <h6 className="font-Poppins font-medium  border-b border-black text-[#131313]">Customer oriented</h6>
              <h6 className="font-Poppins font-medium  border-b border-black text-[#131313]">Co-creators</h6>
            </div>
          </div>
          <div className="relative pb-32 sm:pb-60 sm:pl-24 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
            <h2 className="text-[80px] sm:text-[120px] md:text-[200px] font-bold uppercase font-antonio">meet</h2>
            <h2 className="sm:absolute top-24 sm:top-20 md:top-36 sm:left-36 md:left-48 text-[40px] sm:text-[100px] md:text-[140px] font-light font-signature text-easternBlue">Our team</h2>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-around items-center sm:space-x-8 pb-12 px-12  sm:px-24">
            <div className="w-full lg:w-1/3 flex flex-col justify-center items-center max-lg:mb-12 lg:items-start">
              <div className="w-[80%]  h-[330px] xl:h-[440px] bg-[#d9d9d9]"></div>
              <div className="flex flex-col justify-start">
                <p className="font-antonio font-bold text-4xl text-[#131313] leading-[80px] uppercase">Ricardo Pitton</p>
                <p className="font-Poppins font-medium text-3xl text-[#131313] leading-8 uppercase">ceo</p>
                <p className="font-Poppins font-light text-2xl text-[#131313] leading-8 uppercase">rp@dataki.co</p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col justify-center items-center max-lg:mb-12 lg:items-center">
              <div className="w-[80%] h-[330px] xl:h-[440px] bg-[#d9d9d9]"></div>
              <div className="flex flex-col justify-start">
                <p className="font-antonio font-bold text-4xl text-[#131313] leading-[80px] uppercase">Julián Bulgheroni</p>
                <p className="font-Poppins font-medium text-3xl text-[#131313] leading-8 uppercase">ceo</p>
                <p className="font-Poppins font-light text-2xl text-[#131313] leading-8 uppercase">jb@dataki.co</p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col justify-center items-center max-lg:mb-12 lg:items-end">
              <div className="w-[80%] h-[330px] xl:h-[440px] bg-[#d9d9d9]"></div>
              <div className="flex flex-col justify-start">
                <p className="font-antonio font-bold text-4xl text-[#131313] leading-[80px] uppercase">german</p>
                <p className="font-Poppins font-medium text-3xl text-[#131313] leading-8 uppercase">COO</p>
                <p className="font-Poppins font-light text-2xl text-[#131313] leading-8 uppercase">rp@dataki.co</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}
