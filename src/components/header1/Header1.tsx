
"use client"
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { menuOptions } from './config';


interface HeaderProps {
  className?: string;
  logoSrc?: string;
  logoSrcOpen: string;
  menuIconSrc: string;
  menuCloseIcon?: string;
}

export default function Header({ className, logoSrc, logoSrcOpen, menuCloseIcon }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const menuIcon = menuOptions.find(option => option.path === pathname)?.menuIcon || "/images-proyecto/menuWhite.svg";

  // Bloquea el scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Función para manejar los clics en los enlaces
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith("/#")) {
      event.preventDefault();
      const id = path.replace("/#", "");
      if (pathname === "/") {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        }
      } else {
        window.location.href = path;
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <header className={`absolute flex flex-col top-0 left-0 right-0 z-50 bg-transparent text-white p-10 ${className}`}>
      <div className="flex justify-between items-center">
       {(logoSrc || isOpen) && <div className="w-[120px] h-[22px] flex items-center z-50">
          <Image src={isOpen ? logoSrcOpen : (logoSrc || '')} alt="Dataki" width={150} height={150} layout="fixed" />
        </div>}

        {/* Botón hamburguesa */}
        <button className="w-6 h-6 font-close text-black leading-none transition-opacity duration-300 z-20 ml-auto"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ?
            menuCloseIcon ?
              <Image src={menuCloseIcon} alt="menu" width={50} height={50} layout="fixed" style={{ filter: "invert(1)" }} />
              : <span className="font-close font-Poppins text-white">close</span>
            : (
              <Image src={menuIcon} alt="menu" width={40} height={40} layout="fixed" />
            )}
        </button>
      </div>

      {/* Menú de navegación */}
      <div className={`fixed w-full top-0 py-6 left-0 pl-4 pr-20 bg-black text-white overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-6 flex justify-start">
          <ul className="flex flex-col pt-32 text-7xl  font-antonio font-semibold relative">
            {menuOptions.map((link, index) => (
              <li
                key={link.path}
                className="transition-all duration-300 group"
                onMouseEnter={() => {
                  setSelectedItem(index);
                 
                }}
                onMouseLeave={() => {
                  setSelectedItem(null);
                  
                }}
              >
                <Link
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`block py-2 uppercase text-white transition-all duration-300 hover:text-easternBlue hover:py-8 ${selectedItem !== null && selectedItem !== index ? 'blur-sm' : ''}`}
                >
                  <span className="max-sm:hidden">0{index + 1}</span> {link.name}
                </Link>

                {/* Submenú visible solo si está abierto */}
                {link.subMenu && (
                  <div
                    className={`absolute z-10 left-[100%] ml-8 w-fit top-[50%] -translate-y-1/2 mt-2 bg-black text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}
                    
                  >
                    <ul className="p-8 bg-black border-l border-white">
                      {link.subMenu.map((subLink, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subLink.path}
                            className="whitespace-nowrap block text-5xl p-3 uppercase  hover:text-easternBlue transition-colors"
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>

            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
