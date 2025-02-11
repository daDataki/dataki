import Header from '../header/Header';
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

}

const Hero: React.FC<HeroProps> = ({
    title,
    backgroundImage,
    clientInfo,
    aboutInfo,
    services,

}) => {
    const bgImage = typeof backgroundImage === 'string' ? backgroundImage : backgroundImage.src;
    return (
        <div>
            <Header />
            <div className="relative w-full z-10">
                <div
                    className="relative flex flex-col justify-between w-full h-[50vh] sm:h-[65vh] md:h-[80vh] lg:h-screen "
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="flex flex-col justify-between p-12 z-10 h-[100%]">
                        <div className="w-fit">
                            <div className="w-fit">
                                <h1 className="font-antonio font-bold text-fluid text-white uppercase">
                                    {title}
                                </h1>
                            </div>
                            <div className="hidden sm:flex justify-between items-center w-full">
                                <div className="sm:w-10 lg:w-12 h-auto">
                                    <Image
                                        className="relative object-contain"
                                        src="/images-proyecto/arrow.png"
                                        alt="arrow"
                                        width={115}
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
                        <div className="max-sm:hidden w-[71%] flex justify-between text-white">
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
                            <div className="z-10  text-sm sm:text-base max-sm:w-full max-sm:flex max-sm:justify-between">
                                <span className="mr-6 uppercase">previous</span>
                                <span className="uppercase">next</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-black py-12 sm:py-16 px-12 mt-[-1px] z-20">
                <div className="font-Poppins text-white text-sm sm:text-base">
                    <div className="uppercase font-bold">About</div>
                    <p>{aboutInfo}</p>
                </div>
                <div className="flex max-sm:flex-col py-8 sm:pt-16">
                    <div className="w-1/2">
                        <div className="w-80">
                            <p className="font-Poppins font-medium text-sm sm:text-base text-white">
                                {services.description}
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className='max-sm:mt-8'>
                            <ul className="uppercase text-white text-sm sm:text-base font-antonio font-bold">
                                {services.list.map((service, index) => (
                                    <li key={index}>
                                        <p className="leading-[30px] md:leading-[50px]">{service}</p>
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
