import React, { useEffect } from "react";
import "./CardBack.css";
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
    text2: "2023-Ongoing",
    categories: ["Video Production", "Front-End Development", "Business & Digital Strategy", "Graphic & Digital Design"],
    route: "/aon"
  },
  "/images-grid/Maskgroup2.png": {
    src: "/images-grid/Maskgroup2.png",
    title: "CIS Latam",
    text1: "",
    text2: "2022-Ongoing",
    categories: ["Video & Graphic Design", "Branding & Marketing Campaigns", "Digital & Go-To-Market Strategies", "App & Web UX/UI Design"],
    route: "/cis-latam"
  },
  "/images-grid/Mask-group33.png": {
    src: "/images-grid/Mask-group33.png",
    title: "Milaires",
    text1: "",
    text2: "2023-Ongoing",
    categories: ["Digital Strategy & Campaigns", "Graphic Design", "Media", "Data Analytics"],
    route: "/milaires"
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
    categories: ["SEO & Data Analytics", "Branding & Digital Strategy", "Graphic & Web Design", "Online & Social Media Management"],
    route: "/vida-estilo"
  },
  "/images-grid/miroshnichenko66.png": {
    src: "/images-grid/miroshnichenko66.png",
    title: "ENVEEDO",
    text1: "",
    text2: "2022",
    categories: ["Front-End Development", "Back-End Development", "Web Design & Development"],
    route: ""
  },
  "/images-grid/Macbook-Claro7.png": {
    src: "/images-grid/Macbook-Claro7.png",
    title: "CLARO",
    text1: "",
    text2: "2020-2025",
    categories: ["Video Production", "Social Media & Graphic Design", "Web Design & Development", "Back-End & Front-End Development"],
    route: "/claro"
  },
  "/images-grid/TC2K_ENTRADA8.png": {
    src: "/images-grid/TC2K_ENTRADA8.png",
    title: "TANGO Motorsports",
    text1: "",
    text2: "2022-2024",
    categories: ["Video Production & Graphic Design", "UX/UI & Web Development", "Business & Digital Strategy", "Graphic Design"],
    route: "/tango"
  },
  "/images-grid/Mask-group-9.png": {
    src: "/images-grid/Mask-group-9.png",
    title: "VML",
    text1: "",
    text2: "2020-Ongoing",
    categories: ["Front & Back-End Development", "Digital Campaigns", "Video Production", "Graphic Design"],
    route: "/vml"
  }
};

const CardBack = ({ image}: { image: string;  }) => {
  useEffect(() => {
  }, [image]);
  const router = useRouter();

  const { title, text1, route } = imageDataMap[image] || {
    title: "Project",
    text1: "",
    
    route: ""
  };
  const handleNavigate = () => {
    if (!route) return;
    router.push(route); // Redirige a la página correspondiente
  };
   

  const titleSize = title.length > 13 ? "text-[3rem]" : "text-[4rem]";
  return (
    <div   onClick={handleNavigate}  className="pointer-events-auto w-[27.77svw] h-[300px] bg-[#BFAEFF] px-2 py-2" >
      <div className="w-full flex flex-col h-full">
        {/* Título */}
        <div className="relative flex flex-col justify-start">
          <h1 className={`font-antonio font-bold uppercase text-black leading-none ${titleSize}`}>{title}</h1>
        </div>
        <div className=" w-full flex  justify-between mt-2">
          <div className="relative w-[30px] h-[30px]">
            <Image
              src="/images-proyecto/arrow-modal.png"
              alt={title}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="hidden"> <h2 className="font-text1 font-antonio uppercase text-black">{text1}</h2>
          </div>
        </div>

        {/* Imagen y contenido */}
          <div className="flex flex-1 flex-col">
           
            <div className="mt-3">
              {/* Categorías */}
              {imageDataMap[image].categories.length > 0 && (
                <div className="">
                  <h3 className="font-bold font-Poppins text-sm text-black">CATEGORIES:</h3>
                  <ul className="list-disc list-inside font-Poppins text-sm">
                    {imageDataMap[image].categories.map((category, index) => (
                      <li key={index} className="text-black list-none font-Poppins">{category}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="mt-auto ml-auto">
              <h6 className=" text-xs text-black">
                <span className="font-bold">DATE:</span> {imageDataMap[image].text2 }
              </h6>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default CardBack;
