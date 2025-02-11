import './Footer.css'
// components/Footer.jsx
interface FooterProps {
    background?: string;
  }

const DEFAULT_BG = 'bg-easternBlue bg-gradient-to-b from-black/80 to-transparent';

export default function Footer({ background = DEFAULT_BG }:FooterProps) {
    return (
        <footer className={`py-12 mt-[-1] sm:py-20 ${background}`}>
            <nav className="mx-12 text-white">
                <div className="max-sm:block max-sm:text-center flex justify-between items-center h-auto">
                    <p className="font-normal max-sm:mb-12 max-sm:text-[40px] max-sm:leading-[50px] text-[75px] font-signature">
                        Let’s Talk
                    </p>
                    <p className="font-normal max-sm:text-[20px] text-2xl">
                        Virtual team <br /> with global reach.
                    </p>
                </div>

                <div className="max-sm:justify-center max-sm:text-center flex mt-12 mb-8">
                    <p className="font-antonio font-bold   xtext-lg  uppercase">Tell us about <br /> your idea.</p>
                </div>
                <div className="block sm:flex justify-between w-full max-sm:text-center xl:w-1/2 ">
                    <div> <p className="text-[15px] sm:text-xl font-Poppins max-sm:mb-12 sm:pl-8">
                        <span className="block font-bold">Buenos Aires</span>
                        <span className="block sm:mb-10 font-bold">Argentina</span>
                        <span className="block">Av. Libertador 1398</span>
                        <span className="block">+54 11 8765 4345</span>
                        <span className="block">Mail: xxxxxxxx</span>
                    </p></div>
                    <div className="text-[15px] sm:text-xl font-Poppins sm:pr-32">
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
