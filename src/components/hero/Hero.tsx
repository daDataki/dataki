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
    title: string;
    backgroundImage: string | StaticImageData;
    clientInfo: ClientInfo;
    aboutInfo: string;
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
            <div className="relative w-full">
                <div
                    className="relative w-full h-[300px] sm:h-[600px] md:h-[800px] 2xl:h-screen pb-32"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="px-12 py-12">
                        <div className="flex justify-center sm:justify-start">
                            <h1 className="font-antonio text-fluid font-bold text-white uppercase z-10">
                                {title}
                            </h1>
                        </div>
                        <div className="hidden sm:flex justify-between items-center w-[85%]">
                            <div className="w-8 h-auto">
                                <Image
                                    className="relative object-contain"
                                    src="/images-proyecto/arrow.png"
                                    alt="arrow"
                                    width={126}
                                    height={101}
                                />
                            </div>
                            <div className="w-1/2 z-10">
                                <h4 className="text-left max-md:ml-4 uppercase font-antonio font-bold text-fluid-h4 text-white">
                                    {clientInfo.group}
                                </h4>
                            </div>
                        </div>
                        <div className="max-sm:hidden w-[71%] flex justify-between text-white mt-24">
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
                    </div>
                    <div className="flex justify-center sm:justify-end text-white font-semibold font-Poppins">
                        <div className="z-10 pr-12">
                            <span className="mr-6 uppercase">previous</span>
                            <span className="uppercase">next</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black py-12 sm:py-16 px-12 mt-[-1px]">
                <div className="font-Poppins text-white text-base sm:text-xl">
                    <div className="uppercase font-bold">About</div>
                    <p>{aboutInfo}</p>
                </div>
                <div className="flex max-sm:flex-col py-8 sm:pt-16">
                    <div className="w-1/2">
                        <div className="w-80">
                            <p className="font-Poppins font-medium text-base sm:text-2xl text-white">
                                {services.description}
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div>
                            <ul className="uppercase text-white text-lg  md:text-3xl font-antonio font-bold">
                                {services.list.map((service, index) => (
                                    <li key={index}>
                                        <p className="leading-[50px] md:leading-[100px]">{service}</p>
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
