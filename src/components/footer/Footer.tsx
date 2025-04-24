import './Footer.css'

interface FooterProps {
  background?: string;
}

const DEFAULT_BG = 'bg-easternBlue bg-gradient-to-b from-black/80 to-transparent';

export default function Footer({ background = DEFAULT_BG }: FooterProps) {
  return (
    <footer id="footer" className={`relative px-24 py-12 mt-[-1px] sm:py-20 ${background}`}>
      <img className='absolute w-[63%] top-1/2 left-1/2 -translate-y-1/2 -translate-x-[35%] ' src="images-proyecto/Footer-Mapa-Lila.png" alt="Footer-Mapa-Lila" />
      <nav className=" text-white z-20">
        <div className="max-sm:block max-sm:text-center flex justify-between items-center h-auto">
          <p className="font-normal max-sm:mb-12 text-let font-signature z-30 text-[#BFAEFF]">
            Let’s Talk
          </p>
          <p className="hidden font-semibold text-caption font-Poppins">
            Virtual team <br /> with global reach.
          </p>
        </div>

        <div className="max-sm:justify-center max-sm:text-center flex  mb-8">
          <p className="font-antonio font-bold safari-text-stroke  xtext-lg1  uppercase z-30">Tell us about <br /> your idea.</p>
        </div>
        <div className="block sm:flex justify-between w-full max-sm:text-center xl:w-1/2 z-30">
          <div> <p className="text-captions font-Poppins">
            <span className="block font-bold">Buenos Aires</span>
            <span className="block sm:mb-10 font-bold">Argentina</span>
            <span className="block">Av. Libertador 1398</span>
            <span className="block">+54 11 8765 4345</span>
            <span className="block">Mail: xxxxxxxx</span>
          </p></div>
          <div className="text-captions font-Poppins z-30">
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
