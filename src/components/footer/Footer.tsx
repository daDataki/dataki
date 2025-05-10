import './Footer.css'

const DEFAULT_BG = 'bg-easternBlue bg-gradient-to-b from-black/80 to-transparent';
const DEFAULT_NAV_TEXT_COLOR = 'text-white';
const DEFAULT_LETS_TALK_COLOR = 'text-[#BFAEFF]';

interface FooterProps {
  background?: string;
  navTextColor?: string;    // Color del <nav>
  letsTalkColor?: string;   // Color del "Let's Talk"
}

export default function Footer({
  background = DEFAULT_BG,
  navTextColor = DEFAULT_NAV_TEXT_COLOR,
  letsTalkColor = DEFAULT_LETS_TALK_COLOR,
}: FooterProps) {
  return (
    <footer id="footer" className={`relative px-24 py-12 mt-[-1px] sm:py-20 ${background}`}>
      <img className='absolute w-[73%] top-1/2 left-1/2 -translate-y-[65%] -translate-x-[30%] ' src="images-proyecto/Footer-Mapa-Lila.png" alt="Footer-Mapa-Lila" />
      <nav className={`z-20 ${navTextColor}`}>
        <div className="max-sm:block max-sm:text-center flex justify-between items-center h-auto">
          <p className={`font-normal max-sm:mb-12 text-let font-signature z-30 ${letsTalkColor}`}>
            Let’s Talk
          </p>
          <p className="hidden font-semibold text-caption font-Poppins">
            Virtual team <br /> with global reach.

          </p>
        </div>

        <div className="max-sm:justify-center max-sm:text-center flex  mb-8">
          <p className="font-antonio font-bold safari-text-stroke  xtext-lg1  uppercase z-30">Share your<br /> idea  with us</p>
        </div>
        <div className="block sm:flex justify-between w-full max-sm:text-center xl:w-[75%] z-30">
          <div className='z-30 w-1/2'> <p className="text-captions font-Poppins">
            <span className="block font-bold">Buenos Aires</span>
            <span className="block sm:mb-10 font-bold">Argentina</span>
            <span className="block">Avenida del Libertador 6299 </span>
            <span className="block">Ciudad de Buenos Aires, C1428ARF</span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jb@dataki.co"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white underline hover:text-blue-800"
            >
              jb@dataki.co
            </a>
          </p></div>
          <div className="text-captions font-Poppins z-30 w-1/2">
            <span className="block font-bold">Miami</span>
            <span className="block sm:mb-10 font-bold">United States</span>
            <span className="block">1600 NE 1st Ave.  Apt. 1408</span>
            <span className="block">Miami, FL 33132</span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jb@dataki.co"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white underline hover:text-blue-800"
            >
              jb@dataki.co
            </a></div>
        </div>
      </nav>
    </footer>
  );
}
