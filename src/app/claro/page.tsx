
"use client";
import {  useEffect, useState } from "react";
import Hero from '../../components/hero/Hero';
import claro from '../../../public/images-proyecto/heroClaro.png';
import Image from 'next/image';
import './claro.css'
import PreviousNext from '../../components/previous-next/PreviousNext'
import Footer from '../../components/footer/Footer'
import ClaroSessions from '@/components/claro-sessions/page';



export default function Claro() {

    const [currentIndex, setCurrentIndex] = useState(2);

    const images = [
        "/images-proyecto/Claro-1.png",
        "/images-proyecto/Claro-2.png",
        "/images-proyecto/Claro-3.png"
    ];

    useEffect(() => {
        let direction = 1; // 1 para incrementar, -1 para decrementar

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                // Cambia la dirección si llegas a los límites
                if (prevIndex === images.length - 1) {
                    direction = -1; // Cambia a decrementar
                } else if (prevIndex === 0) {
                    direction = 1; // Cambia a incrementar
                }

                // Retorna el nuevo índice basado en la dirección
                return prevIndex + direction;
            });
        }, 1000);


        return () => {
            clearInterval(interval);

        }
    }, [images.length]);

    return (
        <>
            <div className='overflow-clip'>
                <div className='overflow-clip'>
                    <div><Hero
                        title="CLARO"
                        backgroundImage={claro.src}
                        backgroundPosition="right"
                        prev='/daytona'
                        next='/vml'
                        clientInfo={{
                            group: "",
                            date: "2020-2025",
                            name: "CLARO",
                            categories: [
                                "Video Production",
                                "Social Media & Graphic Design",
                                "Web Design & Development",
                                "Back-End & Front-End Development",
                            ],
                        }}
                        aboutInfo={<span>Claro <br />Work Showcase</span>}
                        services={{
                            description:
                                "Claro relies on us daily to handle all their graphic and visual needs. From videos to web design, we ensure their brand stays strong and cohesive across all channels.",
                            list: [
                                "Video Production",
                                "Social Media & graphic design",
                                "Web Design & Development",
                                "Back-end & Front-End Development",
                            ],
                        }}
                    /></div>
                    <div className='flex justify-center bg-black mt-[-1px] pb-32'>
                        <video
                            className="object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline

                        >
                            <source src="/video/claroVideo.mp4" type="video/mp4" />
                        </video>
                    </div>

                </div>
                <div className='bg-black mt-[-1px]  pb-12'>
                   
                    <div className='relative top-[10vw] w-full flex '>
                        <div className='relative w-1/2 flex left-1/3 items-center'><Image
                            className="w-[5.69vw] h-[5.69vw] object-cover"
                            src="/images-proyecto/claro-rectangule.png"
                            alt="claro-rectangule"
                            width={82}
                            height={82}
                        />
                        </div>

                    </div>
                    <div className='relative top-[8vw] pl-12 text-bordered font-web font-antonio font-medium'>
                        <h2 className='uppercase text-star'>video</h2>
                    </div>

                    <div className='flex justify-end mt-[-1px] w-full'>
                        <video
                            className="relative object-cover  w-[58.95vw] h-auto right-[3vw] z-10"
                            controls
                            playsInline
                        >
                            <source src="/video/Claro-Compra-Packs-con-Cashback.mp4" type="video/mp4" />
                        </video>
                        <div className='relative flex justify-end items-star w-fit'>

                            <Image
                                className="w-[10.48vw] h-[20.48vw] object-cover"
                                src="/images-proyecto/claro-Ellipse-r.png"
                                alt="claro-Ellipse-r"
                                width={295}
                                height={295}
                            />
                        </div>

                    </div>
                    <div className='relative flex justify-between items-center'>
                        <Image
                            className="absolute top-1/2 transform -translate-y-1/2 left-[16%] w-[5.69vw] h-[5.69vw] object-cover"
                            src="/images-proyecto/claro-rectangule.png"
                            alt="claro-rectangule"
                            width={82}
                            height={82}
                        />
                        <Image
                            className="w-[10.48vw] h-[20.48vw] object-cover"
                            src="/images-proyecto/claro-Ellipse-l.png"
                            alt="claro-Ellipse-r"
                            width={295}
                            height={295}
                        />
                    </div>
                    <div className='relative top-[-24vw] text-bordered font-web font-antonio font-medium text-right pr-12'>
                        <h2 className='uppercase'>production</h2>
                    </div>
                    <div className=' w-full font-antonio font-medium font-empowering text-white mt-[-20vw] pr-12'>
                        <h2 className="text-end uppercase">
                            Bold designs <br /> empowering seamless <br /> digital journeys.
                        </h2>
                    </div>
                </div>
                <div className='relative w-full flex flex-col pt-20 pb-32 px-12 bg-[linear-gradient(to_bottom,_#131313_0%,_#131313_40%,_#E20001_40%,_#E20001_100%)]'>
                    <div className='absolute w-full top-[40%]'>
                        <h2 className='hidden fontSize-fluid font-antonio font-medium text-bordered uppercase'>
                            FRONT END
                        </h2>
                    </div>
                    <div className='flex w-full overflow-hidden justify-center'>
                        <div className="flex justify-center items-center relative">
                            <Image
                                className="relative w-[300px] z-0"
                                src="/images-proyecto/claro-MIl-Aires-Mockup.png"
                                alt="Main Image"
                                layout="intrinsic"
                                width={800}
                                height={1111}
                            />
                            <div className='w-[93%] absolute left-3'>
                                <div className='flex gap-8'
                                    style={{
                                        transform: `translateX(calc(-${currentIndex * 100}% - ${2 * currentIndex}rem))`,
                                        transition: '0.2s',
                                    }}
                                >
                                    {images.map((img, index) => (
                                        <Image key={index}
                                            className="w-[100%]"
                                            src={img}
                                            alt={`Slide ${1}`}
                                            layout="intrinsic"
                                            width={800}
                                            height={1111}
                                            style={{
                                                flexShrink: 0
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className='bg-[#E20001] mt-[-1px] pt-12 pb-16'>
                    <h2 className='sticky top-0 mb-32 text-center font-antonio font-medium text-white font-web text-bordered uppercase'>web <br />
                        design</h2>
                    <div className="relative w-[70%] z-20 mx-auto top-[-10vw] ">
                        {/* Contenedor con overflow-hidden para simular el marco de la pantalla */}
                        <div className="absolute bg-blue w-[73.2%] h-[75%] top-[6%] left-[13.8%] overflow-hidden">
                            <div className="relative w-full h-full">
                                {/* Imagen con animación de desplazamiento */}
                                <Image
                                    className="absolute w-full scrollable-image"
                                    src="/images-proyecto/claro-landing-claro.png"
                                    alt="vida-estilo"
                                    width={800}
                                    height={1111}
                                    layout="intrinsic"
                                    priority={true}
                                />
                            </div>
                        </div>

                        {/* Imagen estática de la pantalla */}
                        <Image
                            className="z-10 w-full"
                            src="/images-proyecto/Claro-Mockup.png"
                            alt="vida-estilo"
                            width={800}
                            height={1111}
                            layout="intrinsic"
                            priority={true}
                        />
                    </div>
                </div>
                <div className='relative bg-[linear-gradient(to_bottom,_#E20001_0%,_#E20001_1%,_#000000_40%)]  mt-[-1px]'>
                    <div className='relative top-0'>
                        <Image
                            className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            src="/images-proyecto/claro-Ellipse-86.png"
                            alt="vida-estilo"
                            width={800}
                            height={1111}
                            layout="intrinsic"
                            priority={true}
                        />
                        <Image
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] z-10"
                            src="/images-proyecto/claro-Ellipse-85.png"
                            alt="vida-estilo"
                            width={800}
                            height={1111}
                            layout="intrinsic"
                            priority={true}
                        />
                        <Image
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] z-20"
                            src="/images-proyecto/claro-Ellipse-84.png"
                            alt="vida-estilo"
                            width={800}
                            height={1111}
                            layout="intrinsic"
                            priority={true}
                        />
                        <div className='relative top-[-5vw]'>
                            <ClaroSessions />
                        </div>
                    </div>
                    <div className='relative flex flex-col justify-center mt-[10vw] px-24 pb-36'>
                        <div className='sticky left-[7vw] top-0 font-web font-antonio font-medium text-white z-20'>
                            <h2 className='uppercase'>graphic</h2>
                            <h2 className='relative left-[13vw] uppercase text-bordered'>design</h2>
                        </div>
                        <div className='flex justify-center items-center w-full'>
                            <div className='relative left-[21vw] w-[60%]'>
                                <img className='relative w-[93%]' src="/images-proyecto/claro-Ellipse-31.png" alt="claro-Ellipse-31" />
                            </div>
                            <div className='relative w-[40%] right-[9vw]  z-50'>
                                <img className='absolute w-[70%] h-auto z-10 left-[1.3vw] top-[5vw]' src="/images-proyecto/Claro-iPhone-11-Pro.png" alt="Claro-iPhone-11-Pro" />
                                <img className='relative w-[77%] h-auto' src="/images-proyecto/claro-MIl-Aires-Mockup-copy.png" alt="claro-MIl-Aires-Mockup-copy" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-[-1px] w-full h-screen'>
                    <video
                        className=" object-cover w-full"
                        controls
                        playsInline
                    >
                        <source src="/video/claro-video-2.mp4" type="video/mp4" />
                    </video>

                </div>
                <div className='relative py-24 bg-[linear-gradient(to_bottom,_#E20001_0%,_#E20001_1%,_#000000_100%)]'>
                    <div className='w-full mt-[2px]'>
                        <div className='px-24  mx-auto  '>
                            <PreviousNext className='text-white' previousUrl="/vida-estilo" nextUrl="/vml" />
                        </div>
                    </div>
                </div>
                <div>
                    <Footer background="bg-black " />
                </div>
            </div>
        </>
    );
}