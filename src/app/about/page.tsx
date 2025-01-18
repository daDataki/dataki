"use client";

import { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Footer from "../../components/footer/Footer"


export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-black">
        <div className="flex justify-between items-center px-4 py-6">
          {/* Logo */}
          <div className="flex-shrink-0 mt-4 ml-6">
            <Image
              src="/images-proyecto/logo.png"
              alt="logo-dataki"
              width={120}
              height={25}
            />
          </div>

          {/* Navegación */}
          <div className="hidden md:flex space-x-8 mt-4 mr-6">
            <a href="#about" className="uppercase text-white">
              About
            </a>
            <a href="#work" className="uppercase text-white">
              Work
            </a>
            <a href="#services" className="uppercase text-white">
              Services
            </a>
            <a href="#contact" className="uppercase text-white">
              Contact
            </a>
          </div>

          {/* Menú Hamburguesa */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menú Desplegable */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <ul className="space-y-4 p-4">
              <li>
                <a href="#about" className="block text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="block text-white">
                  Work
                </a>
              </li>
              <li>
                <a href="#services" className="block text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="block text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
      <div className="bg-black pt-12  sm:pt-32">
        <div className="left-8 px-16 sm:left-24"><h1 className=" text-8xl sm:text-[150px] lg:text-[200px] font-antonio font-bold text-white uppercase">about
        </h1><h2 className="absolute top-44 sm:top-[300px] lg:top-80 left-[120px]  sm:left-[156px] lg:left-48 text-easternBlue font-signature font-light text-[65px] sm:text-8xl lg:text-[140px]">Our story</h2>
        </div>
        <div className="flex justify-center my-28 sm:my-32 md:my-36 lg:my-60"><h2 className="uppercase font-antonio font-bold text-white leading-[50px] text-[40px] sm:text-7xl lg:text-[110px]">We are ready to <br />
          become your <span className="text-easternBlue">growth <br />
            & business partner</span> </h2></div>
        <div className="bg-white py-28 px-16">
          <div className="flex flex-row justify-center gap-16">
            <div className="w-1/2 flex justify-end"><h4 className="uppercase font-Poppins font-extralight text-xl sm:text-3xl leading-7 text-[#131313]">We work under <br /> 5 principles</h4></div>
            <div className="w-1/2">
              <h6 className="font-Poppins font-medium text-lg sm:text-3xl sm:leading-[60px] border-y border-black text-[#131313]">Trust</h6>
              <h6 className="font-Poppins font-medium text-lg sm:text-3xl sm:leading-[60px] border-b border-black text-[#131313]">Quality</h6>
              <h6 className="font-Poppins font-medium text-lg sm:text-3xl sm:leading-[60px] border-b border-black text-[#131313]">Empathy</h6>
              <h6 className="font-Poppins font-medium text-lg sm:text-3xl sm:leading-[60px] border-b border-black text-[#131313]">Transparency</h6>
              <h6 className="font-Poppins font-medium text-lg sm:text-3xl sm:leading-[60px] border-b border-black text-[#131313]">50% Thinkers + 50% doers</h6>
            </div>
          </div>
          <div className="flex flex-row justify-center my-12 sm:my-32 gap-16">
            <div className="w-1/2 flex justify-end"><h4 className="uppercase font-Poppins font-extralight text-xl sm:text-3xl leading-7 text-[#131313]">We are proud of <br /> our values</h4></div>
            <div className="w-1/2">
              <h6 className="font-Poppins font-medium text-lg sm:text-3xl sm:leading-[60px] border-y border-black text-[#131313]">Integrated</h6>
              <h6 className="font-Poppins font-medium text-lg sm:text-3xl sm:leading-[60px] border-b border-black text-[#131313]">Partners Mindset</h6>
              <h6 className="font-Poppins font-medium text-lg sm:text-3xl sm:leading-[60px] border-b border-black text-[#131313]">Performance Driven</h6>
              <h6 className="font-Poppins font-medium text-lg sm:text-3xl sm:leading-[60px] border-b border-black text-[#131313]">Customer oriented</h6>
              <h6 className="font-Poppins font-medium text-lg sm:text-3xl sm:leading-[60px] border-b border-black text-[#131313]">Co-creators</h6>
            </div>
          </div>
          <div className="relative pb-32 sm:pb-60">
            <h2 className="text-[80px] sm:text-[120px] md:text-[200px] font-bold uppercase font-antonio">meet</h2>
            <h2 className="absolute top-24 sm:top-20 md:top-36 left-0 sm:left-12 md:left-24 text-[40px] sm:text-[100px] md:text-[140px] font-light font-signature text-easternBlue">Our team</h2>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-around items-center sm:space-x-8 pb-12">
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
