"use client"
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


interface HeaderProps {
  className?: string;
  logoSrc: string;
  logoSrcOpen: string;
  menuIconSrc: string;
  menuCloseIcon?: string;
}

const menuOptions = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/#work" },  //Este tiene un #id
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" }
];

export default function Header({ className, logoSrc, logoSrcOpen, menuIconSrc, menuCloseIcon }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Bloquea el scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Función para manejar los clics en los enlaces
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith("/#")) {
      event.preventDefault(); // Evita la recarga
      const id = path.replace("/#", ""); // Extrae "work" de "/#work"
  
      if (pathname === "/") {
        // Si ya estamos en home, hacer scroll directo
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        }
      } else {
        // Si estamos en otra página, redirigir primero a "/"
        window.location.href = path;
      }
    } else {
      setIsOpen(false); // Cierra el menú en rutas normales
    }
  };

  return (
    <header className={`absolute flex flex-col top-0 left-0 right-0 z-50 bg-transparent text-white p-10 ${className}`}>
      <div className="flex justify-between items-center">
        <div className="w-[120px] h-[22px] flex items-center z-50">
          <Image src={isOpen ? logoSrcOpen : logoSrc} alt="Dataki" width={150} height={150} layout="fixed" />
        </div>

        {/* Botón hamburguesa */}
        <button className="w-6 h-6 font-close text-black leading-none transition-opacity duration-300 z-20"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ?
            menuCloseIcon ?
              <Image src={menuCloseIcon} alt="menu" width={50} height={50} layout="fixed" style={{ filter: "invert(1)" }} />
              : <span className="font-close font-Poppins text-white">close</span>
            : (
              <Image src={menuIconSrc} alt="menu" width={40} height={40} layout="fixed" />
            )}
        </button>
      </div>

      {/* Menú de navegación */}
      <div className={`fixed w-full top-0 py-6 left-0 pl-4 pr-20 bg-black text-white overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-6">
          <ul className="flex flex-col pt-16 text-5xl md:text-6xl font-antonio font-semibold">
            {menuOptions.map((link, index) => (
              <li key={link.path}>
                <Link href={link.path} 
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`block py-2 uppercase hover:py-8 transition-all duration-300 hover:text-easternBlue ${pathname === link.path ? "text-easternBlue" : "text-white blur-sm hover:blur-none hover:text-easternBlue"}`}
                >
                  <span className='max-sm:hidden'>0{index + 1}</span> {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
