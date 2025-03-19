import Header1 from '../../components/header1/Header1';
import Link from 'next/link';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import './Hero.css';

interface ClientInfo {
    group: string;
    date: string;
    name: string;
    categories: string[];
}

interface Services {
    description: string;
    list: string[];
}

interface HeroProps {
    title: string | React.ReactNode;
    backgroundImage: string | StaticImageData;
    clientInfo: ClientInfo;
    aboutInfo: string | React.ReactNode;
    services: Services;
    overlayColor?: string;
    textBlack?: string;
    backgroundPosition?: string;
    prev?: string;
    next?: string;
}

const Hero: React.FC<HeroProps> = ({
    title,
    backgroundImage,
    backgroundPosition,
    clientInfo,
    aboutInfo,
    services,
    overlayColor,
    textBlack,
    prev,
    next,
}) => {
    const bgImage = typeof backgroundImage === 'string' ? backgroundImage : backgroundImage.src;
    const bgPosition = backgroundPosition || 'center';
    return (
        <div>
            <Header1
        
                menuIconSrc="/images-proyecto/menuBlack.png"
                menuCloseIcon="/images-proyecto/closeMenu.svg"
                logoSrcOpen="/images-proyecto/logo.png"
            />
            <div className="relative w-full z-10">
                <div
                    className="relative flex flex-col justify-between w-full h-[50vh] sm:h-[65vh] md:h-[80vh] lg:h-screen 2xl:h-[120vh]"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: `${bgPosition}`,
                        backgroundRepeat: 'no-repeat',

                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-40 "></div>

                    <div className="flex flex-col justify-between px-12 pt-12 py-12 z-10 h-[100%]">
                        <div className="w-fit">
                            <div className="w-fit">
                                <h1 className="font-antonio font-bold text-fluid text-white uppercase">
                                    {title}
                                </h1>
                            </div>
                            <div className="hidden sm:flex justify-between items-start w-full py-4">
                                <div className="w-20 ">
                                    <Image
                                        className="relative object-contain w-full h-full"
                                        src="/images-proyecto/arrow.png"
                                        alt="arrow"
                                        width={126}
                                        height={101}
                                    />
                                </div>
                                <div className="flex justify-around z-10">
                                    <h4 className="uppercase font-antonio font-bold text-fluid-h4 text-white">
                                        {clientInfo.group}
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="max-sm:hidden w-[60%] flex justify-between text-white">
                            <div className="z-10">
                                <h4 className="font-Poppins font-bold text-fluid-span uppercase z-10 mb-2">Date</h4>
                                <span className="text-fluid-span font-Poppins z-10">
                                    {clientInfo.date}
                                </span>
                            </div>
                            <div className="z-10">
                                <h4 className="font-Poppins font-bold text-fluid-span uppercase z-10 mb-2">Client</h4>
                                <span
                                    className="text-fluid-span font-Poppins uppercase z-10"
                                    dangerouslySetInnerHTML={{ __html: clientInfo.name }}
                                ></span>
                            </div>
                            <div className="z-10">
                                <h4 className="font-Poppins font-bold text-fluid-span uppercase z-10 mb-2">Categories</h4>
                                <ul className="text-fluid-span font-Poppins z-10">
                                    {clientInfo.categories.map((category, index) => (
                                        <li key={index} className="mb-2">
                                            {category}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex max-sm:justify-between justify-end text-white font-semibold font-Poppins">
                            <div className="z-10  font-pre-next max-sm:w-full max-sm:flex max-sm:justify-between">
                                <Link href={prev} className="mr-6 uppercase font-Poppins">previous</Link>
                                <Link href={next} className="uppercase font-Poppins">next</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`relative ${overlayColor || "bg-black"} py-12 sm:pt-20 xl:pb-36 sm:pb-20 px-12 mt-[-1px] z-20`}>

                <div className={`font-Poppins ${textBlack || "text-white"} text-sm sm:text-2xl`}>
                    <div className="uppercase font-bold">About</div>
                    <p className='font-light'>{aboutInfo}</p>
                </div>
                <div className="flex max-sm:flex-col py-8 sm:pt-16">
                    <div className="w-full sm:w-1/2">
                        <div className="w-[70%] sm:w-[75%]">
                            <p className={`font-Poppins font-medium text-servicie ${textBlack || "text-white"}`}>
                                {services.description}
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className='max-sm:mt-8'>
                            <ul className={`uppercase ${textBlack || "text-white"} text-ul-servicie font-antonio font-bold`}>
                                {services.list.map((service, index) => (
                                    <li key={index} className='text-ul-servicie first:leading-none first:mb-4 first:mt-2'>
                                        <p>{service}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
