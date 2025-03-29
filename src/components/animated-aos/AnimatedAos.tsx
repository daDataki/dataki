

import 'aos/dist/aos.css';
import './AnimatedAos.css';
import AosProvider from '../Aos/Aos'
export default function AnimatedAos() {
    return (
        <AosProvider>
            <div className="px-24 bg-[#131313]  overflow-hidden z-20">

                {/* Título animado */}
                <h2
                    className="relative top-[13vw] text-end fontSize-gra-desig font-antonio font-medium text-bordered uppercase"
                >
                    BUSINESS
                </h2>

                {/* Imágenes entrando de izquierda y derecha */}
                <div className="flex justify-between items-center">
                    <img
                        data-aos="fade-up"
                        className="relative w-[35vw] h-[20vw]"
                        src="/images-proyecto/Slide1.png"
                        alt="Aon"
                    />
                    <img
                        data-aos="fade-down"
                        className="relative w-[35vw] h-[20vw]"
                        src="/images-proyecto/Slide2.png"
                        alt="Aon"
                    />
                </div>

                {/* Imágenes con efecto de opacidad */}
                <div className="relative flex justify-center ">
                    <img
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        className="relative top-[-9vw] w-[50vw] h-[29vw] z-20"
                        src="/images-proyecto/Slide7-1.png"
                        alt="Aon"
                    />
                </div>

                {/* Más imágenes animadas */}
                <div className="relative flex justify-between items-center top-[-16vw]">
                    <img
                        data-aos="fade-down"
                        data-aos-delay="300"
                        className="relative w-[35vw] h-[20vw] z-10"
                        src="/images-proyecto/Slide3.png"
                        alt="Aon"
                    />
                    <img
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className="relative w-[35vw] h-[20vw] z-10"
                        src="/images-proyecto/Slide4.png"
                        alt="Aon"
                    />
                </div>
                {/* Título animado */}
                <h2
                    className="relative top-[-28vw] text-left fontSize-gra-desig font-antonio font-medium text-bordered uppercase"
                >
                    STRATEGY
                </h2>

            </div>
        </AosProvider>
    );
}
