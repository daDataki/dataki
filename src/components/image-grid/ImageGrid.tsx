"use client";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import "./ImageGrid.css";
import Modal from "../modal-grid/Modal";

export default function ImageGrid() {
  const [applyClasses, setApplyClasses] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ image: '' });
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  // Referencia para Intersection Observer
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const handleImageClick = (image: string) => {
    setModalContent({ image });
    setIsModalOpen(true);  // Abre el modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Cierra el modal
  };

  const ImageItem = ({ src, alt, onClick, clase }: { src: string, alt: string, clase: string, onClick: () => void }) => (
    <div
      className={`relative w-[400px] h-[200px] lg:h-[278px]  width-major cursor-pointer transition duration-300 ${hoveredImage && hoveredImage !== src ? "blur-sm" : ""
        }`}
      onMouseEnter={() => {
        setHoveredImage(src); // Se ejecuta la función para abrir el modal al hacer hover
      }}
      onMouseLeave={() => setHoveredImage(null)}
      onClick={onClick}

    >
      <img
        src={src}
        alt={alt}
        className={`${clase} w-full h-full object-cover`}
      />

    </div>
  );


  return (
    <div ref={ref} className="relative mx-auto w-full sm:mb-16 min-h-screen max-sm:pt-10 ">
      {/* Animación del título "our CASES" */}
      {isInView && (
        <motion.div className="text-center font-Poppins text-cases text-black font-light py-16 uppercase ">
          our CASES
        </motion.div>
      )}

      {/* Sección 'Work' y 'Showcase' para pantallas grandes */}
      <div className="max-sm:hidden sticky top-10">
        {isInView && (
          <div className="relative flex justify-center ">
            {/* Animación de 'WORK' */}
            <motion.h2
              initial={{ fontSize: "300px", opacity: 0, scale: 4 }}  // Empieza con gran tamaño y opacidad 0
              animate={{ fontSize: "100px", opacity: 1, scale: 1 }}  // Se reduce el tamaño y aumenta la opacidad
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}  // Transición suave
              onAnimationComplete={() => setApplyClasses(true)}  // Aplicar clases después de la animación
              className={`relative font-bold font-antonio text-black uppercase ${isModalOpen ? "blur-effect" : ""} ${applyClasses ? "text-work" : ""}`}
            >
              WORK
            </motion.h2>

            {/* Animación de 'Showcase' */}
            <motion.h3
              initial={{ fontSize: "300px", opacity: 0, scale: 4 }}  // Empieza con gran tamaño y opacidad 0
              animate={{ fontSize: "100px", opacity: 1, scale: 1 }}  // Se reduce el tamaño y aumenta la opacidad
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}  // Transición suave
              onAnimationComplete={() => setApplyClasses(true)}  // Aplicar clases después de la animación
              className={`absolute top-[44%] left-[45%] z-10 font-light font-signature text-easternBlue ${isModalOpen ? "blur-effect" : ""} ${applyClasses ? "text-Showcase" : ""}`}
            >
              Showcase
            </motion.h3>
          </div>
        )}
      </div>

      <div className="relative overflow-hidden">
        {/* Contenido con imágenes solo si está en vista */}
       
            {/* Primer grupo de imágenes */}
            <div className={`flex max-sm:flex-col justify-center items-center sm:justify-between sm:items-end mb-responsive mt-responsive max-sm:gap-8 max-sm:mb-8 gap-12 ${isModalOpen ? "blur-effect" : ""}`}>
              <ImageItem
                clase=""
                src="/images-grid/busy-1.png"
                alt="busy-1.png"
                onClick={() => handleImageClick('/images-grid/busy-1.png')}
              />

              <ImageItem
                clase="sm:-translate-y-1/2"
                src="/images-grid/Maskgroup2.png"
                alt="busy-1.png"
                onClick={() => handleImageClick('/images-grid/Maskgroup2.png')}
              />

              <ImageItem
                clase=""
                src="/images-grid/Mask-group33.png"
                alt="busy-1.png"
                onClick={() => handleImageClick('/images-grid/Mask-group33.png')}
              />
            </div>

            {/* Segundo grupo de imágenes */}
            <div className={`relative flex max-sm:flex-col justify-center items-center sm:justify-between sm:items-end sm:left-[7.3vw] mb-responsive max-sm:gap-8 max-sm:mb-8 gap-12 ${isModalOpen ? "blur-effect" : ""}`}>

              <ImageItem
                clase=""
                src="/images-grid/Mask-group4.png"
                alt="busy-1.png"
                onClick={() => handleImageClick('/images-grid/Mask-group4.png')}
              />

              <ImageItem
                clase="sm:-translate-y-1/2"
                src="/images-grid/beacon-beach5.png"
                alt="Mask-group4.png"
                onClick={() => handleImageClick('/images-grid/beacon-beach5.png')}
              />

              <ImageItem
                clase="sm:-translate-y-[20%]"
                src="/images-grid/miroshnichenko66.png"
                alt="Mask-group4.png"
                onClick={() => handleImageClick('/images-grid/miroshnichenko66.png')}
              />
            </div>

            {/* Tercer grupo de imágenes */}
            <div className={`flex max-sm:flex-col justify-center items-center sm:justify-between sm:items-end max-sm:gap-8 gap-12 ${isModalOpen ? "blur-effect" : ""}`}>

              <ImageItem
                clase=""
                src="/images-grid/Macbook-Claro7.png"
                alt="Macbook-Claro7.png"
                onClick={() => handleImageClick('/images-grid/Macbook-Claro7.png')}
              />

              <ImageItem
                clase="sm:-translate-y-1/2"
                src="/images-grid/TC2K_ENTRADA8.png"
                alt="TC2K_ENTRADA8.png"
                onClick={() => handleImageClick('/images-grid/TC2K_ENTRADA8.png')}
              />

              <ImageItem
                clase=""
                src="/images-grid/Mask-group-9.png"
                alt="Mask-group-9.png"
                onClick={() => handleImageClick('/images-grid/Mask-group-9.png')}
              />
            </div>

        
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal image={modalContent.image} onClose={handleModalClose} />
      )}
    </div>
  );
}
