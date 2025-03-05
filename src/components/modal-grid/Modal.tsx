import React from "react";
import "./Modal.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Mapa de imágenes con su información
const imageDataMap: Record<string, {
  src: string;
  title: string;
  text1: string;
  text2: string;
  categories: string[];
  route: string
}> = {
  "/images-grid/busy-1.png": {
    src: "/images-grid/busy-1.png",  // Aquí es necesario asignar correctamente la propiedad src
    title: "AON",
    text1: "",
    text2: "2024-Ongoing",
    categories: ["Video Production", "Front-End Development", "Business & Digital Strategy", "Graphic & Digital Design"],
    route: "/aon"
  },
  "/images-grid/Maskgroup2.png": {
    src: "/images-grid/Maskgroup2.png",
    title: "CIS Latam",
    text1: "",
    text2: "2022-Ongoing",
    categories: ["Video & Graphic Design", "Branding & Marketing Campaigns", "Digital & Go-To-Market Strategies", "App & Web UX/UI Design"],
    route: "/vida-estilo"
  },
  "/images-grid/Mask-group33.png": {
    src: "/images-grid/Mask-group33.png",
    title: "Milaires",
    text1: "",
    text2: "2024-Ongoing",
    categories: ["Digital Strategy & Campaigns", "Graphic Design & Media", "Data Analytics"],
    route: "/vida-estilo"
  },
  "/images-grid/Mask-group4.png": {
    src: "/images-grid/Mask-group4.png",
    title: "Daytona",
    text1: "",
    text2: "2022-Ongoing",
    categories: ["Video & Radio Production", "Media (Online & Offline)", "Digital Campaigns", "Graphic Design"],
    route: "/daytona"
  },
  "/images-grid/beacon-beach5.png": {
    src: "/images-grid/beacon-beach5.png",
    title: "Vida & Estilo",
    text1: "Hospitality Group",
    text2: "2023-Ongoing",
    categories: ["SEO & Data Analytics", "Branding & Digital Strategy", "Graphic & Web Designs", "Online & Social Media Management"],
    route: "/vida-estilo"
  },
  "/images-grid/miroshnichenko66.png": {
    src: "/images-grid/miroshnichenko66.png",
    title: "ENVEEDO",
    text1: "",
    text2: "2022",
    categories: ["Front-End Development", "Back-End Development", "Web Design & Development"],
    route: "/vida-estilo"
  },
  "/images-grid/Macbook-Claro7.png": {
    src: "/images-grid/Macbook-Claro7.png",
    title: "CLARO",
    text1: "",
    text2: "2020-2025",
    categories: ["Video Production", "Social Media & Graphic Design", "Web Design & Development", "Back-End & Front-End Development"],
    route: "/vida-estilo"
  },
  "/images-grid/TC2K_ENTRADA8.png": {
    src: "/images-grid/TC2K_ENTRADA8.png",
    title: "TANGO Motorsports",
    text1: "",
    text2: "2022-2024",
    categories: ["Video Production & Graphic Design", "UX/UI & Web Development", "Business & Digital Strategy", "Graphic Design"],
    route: "/vida-estilo"
  },
  "/images-grid/Mask-group-9.png": {
    src: "/images-grid/Mask-group-9.png",
    title: "VML",
    text1: "",
    text2: "2020-Ongoing",
    categories: ["Front & Back-End Development", "Digital Campaigns", "Video Production", "Graphic Design"],
    route: "/vida-estilo"
  }
};

const Modal = ({ image, onClose }: { image: string; onClose: () => void }) => {
  
  const router = useRouter();

  const { title, text1, text2, categories, route } = imageDataMap[image] || {
    title: "Project",
    text1: "",
    text2: "No date available",
    categories: [],
    route: "/vida-estilo"
  };
  const handleNavigate = () => {

    router.push(route); // Redirige a la página correspondiente
  };

  return (
    <div className="modal bg-opacity-50 pointer-events-auto " >
      <div className="modal-content py-10 px-24 h-[55vh] lg:h-[70vh] xl:h-[85vh] 2xl:h-[95vh] relative" onClick={(e) => e.stopPropagation()}>
        {/* Botón de cierre */}
        <div>
          <button className="w-8 cursor-pointer absolute top-4 right-4" onClick={onClose}>
            <Image src='/images-proyecto/closeMenu.svg' width={32} height={32} alt="close-button" />
          </button>
        </div>
        {/* Título */}
        <div className="w-[61vw] relative flex flex-col justify-start">
          <h1 className="font-title font-antonio font-bold">{title}</h1>
          <div className="absolute top-16 left-16 lg:top-24 lg:left-20 xl:top-[8.5rem] xl:left-40 ">
            <h2 className=" text-easternBlue font-normal font-signature font-project">Project</h2>
          </div>
        </div>
        <div className=" w-full  lg:w-[92%] xl:w-[62.5vw]  flex  justify-between mt-2">
          <div className="relative w-[70px] h-[67px]">
            <Image
              src="/images-proyecto/arrow-modal.png"
              alt={title}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div> <h2 className="font-text1 font-antonio">{text1}</h2>
          </div>
        </div>

        {/* Imagen y contenido */}
        <div className="w-[100%] lg:w-[85%] flex justify-between items-center mt-12">
          <div className="w-1/2 flex flex-col gap-4">
            <div>
              <h6 className="font-text2 ">
                <span className="font-bold">DATE:</span> {imageDataMap[image].text2 }
              </h6>
            </div>
            <div>
              {/* Categorías */}
              {imageDataMap[image].categories.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-bold font-Poppins font-text2">CATEGORIES:</h3>
                  <ul className="list-disc list-inside font-Poppins font-text2">
                    {imageDataMap[image].categories.map((category, index) => (
                      <li key={index} className="text-gray-700">{category}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div
            className="relative w-1/2 h-[23vh] lg:h-[33vh] xl:h-[43vh]  cursor-pointer"
            onClick={handleNavigate} // Redirige al hacer clic
          >
            <Image
              src={imageDataMap[image].src}
              alt={imageDataMap[image].title}
              layout="fill"
              objectFit="cover"
              objectPosition="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
