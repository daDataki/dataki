import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const images = [
    { src: "/img-banner/BANNERS_AONg.jpg", alt: "Imagen 1" },
    { src: "/img-banner/BANNERS_ASISTENCIA_FUNEBRE.jpg", alt: "Imagen 2" },
    { src: "/img-banner/BANNERS_AUTO.jpg", alt: "Imagen 3" },
    { src: "/img-banner/BANNERS_BICICLETA.jpg", alt: "Imagen 4" },
    { src: "/img-banner/BANNERS_ENF_GRAVES.jpg", alt: "Imagen 5" },
    { src: "/img-banner/BANNERS_FRACTURAS.jpg", alt: "Imagen 6" },
    { src: "/img-banner/BANNERS_HOGAR.jpg", alt: "Imagen 7" },
    { src: "/img-banner/BANNERS_MOTO.jpg", alt: "Imagen 8" },
    { src: "/img-banner/BANNERS_ODONTO.jpg", alt: "Imagen 9" },
    { src: "/img-banner/BANNERS_PARCERIA.jpg", alt: "Imagen 10" },
    { src: "/img-banner/BANNERS_PEQ_DISPOSITIVOS.jpg", alt: "Imagen 11" },
    { src: "/img-banner/BANNERS_PEQ_REP.jpg", alt: "Imagen 12" },
    { src: "/img-banner/BANNERS_PET.jpg", alt: "Imagen 13" },
    { src: "/img-banner/BANNERS_SEG_MEDICO.jpg", alt: "Imagen 14" },
    { src: "/img-banner/BANNERS_SEG_VIDA.jpg", alt: "Imagen 15" },
    { src: "/img-banner/BANNERS_VIAJES.jpg", alt: "Imagen 16" },
];

const Parallax = () => {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"],
    });



    return (
        <div
            className="relative h-[200vh] flex flex-col items-center justify-center bg-gray-100 overflow-hidden"
            ref={scrollRef}
            style={{ perspective: "1000px" }} // Añadir perspectiva
        >
            {/* Mapeamos cada imagen y aplicamos las transformaciones */}
            {images.map((image, index) => {
                // El desplazamiento en el eje Y para cada imagen
                const y = useTransform(scrollYProgress, [0, 1], [index * 10, (images.length - index - 1) * 30]);

                // La escala de la imagen cambia conforme avanzamos el scroll
                const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2 - index * 0.05]);

                // La profundidad (translateZ) para crear el efecto de capas
                const translateZ = useTransform(scrollYProgress, [0, 1], [index * 100, (images.length - index - 1) * -100]);

                // La posición top para que las imágenes se superpongan parcialmente
                const top = useTransform(scrollYProgress, [0, 1], [index * 50, (images.length - index - 1) * -50]);

                // La opacidad también se ajusta conforme las imágenes se alejan
                const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5 + index * 0.05]);

                // El z-index para controlar el orden de superposición
                const zIndex = images.length - index;

                // Ajuste para que la última imagen comience en la mitad del contenedor
                const initialTop = (index / images.length) * 50;

                return (
                    <motion.img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className="absolute w-[300px] h-auto rounded-lg shadow-lg"
                        style={{
                            y,
                            scale,
                            opacity,
                            translateZ, // Framer Motion maneja translateZ correctamente con perspective en el contenedor padre
                            x: "-50%", // Para centrar horizontalmente
                            zIndex
                        }}
                    />
                );
            })}
        </div>
    );
};

export default Parallax;
