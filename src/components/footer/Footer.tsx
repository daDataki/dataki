// components/Footer.jsx
interface FooterProps {
    background?: string;
  }

const DEFAULT_BG = 'bg-easternBlue bg-gradient-to-b from-black/70 to-transparent';

export default function Footer({ background = DEFAULT_BG }:FooterProps) {
    return (
        <footer className={`py-20 sm:py-48 ${background}`}>
            <nav className="mx-12 text-white">
                <div className="max-sm:block max-sm:text-center flex justify-between items-center h-auto">
                    <p className="font-normal max-sm:mb-12 max-sm:text-[60px] max-sm:leading-[50px] text-[100px] leading-[180px] font-signature">
                        Let’s Talk
                    </p>
                    <p className="font-normal max-sm:text-[30px] text-2xl">
                        Virtual team <br /> with global reach.
                    </p>
                </div>

                <div className="max-sm:justify-center max-sm:text-center flex mt-12 mb-8">
                    <p className="font-antonio font-bold   max-sm:text-[50px]  max-sm:leading-[80px] sm:text-[80px] sm:leading-[100px] md:text-[100px] md:leading-[120px]  lg:text-[120px] lg:leading-[140px] xl:text-[160px] xl:leading-[180px] uppercase">Tell us about <br /> your idea.</p>
                </div>
                <div className="block sm:flex justify-between w-full max-sm:text-center xl:w-1/2 ">
                    <div> <p className="text-xl font-Poppins max-sm:mb-12 sm:pl-8">
                        <span className="block font-bold">Buenos Aires</span>
                        <span className="block sm:mb-10 font-bold">Argentina</span>
                        <span className="block">Av. Libertador 1398</span>
                        <span className="block">+54 11 8765 4345</span>
                        <span className="block">Mail: xxxxxxxx</span>
                    </p></div>
                    <div className="text-xl font-Poppins sm:pr-32">
                        <span className="block font-bold">New York</span>
                        <span className="block sm:mb-10 font-bold">United States</span>
                        <span className="block">118 3rd St, S, Brooklyn</span>
                        <span className="block">+1 1249 5556</span>
                        <span className="block">dataki@gmail.com</span></div>
                </div>
            </nav>
        </footer>
    );
}
