'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import './Header1.css';

interface HeaderProps {
  className?: string;
  logoSrc: string; // Logo dinámico
  logoSrcOpen: string;
  menuIconSrc: string; // Imagen del botón de menú
  menuCloseIcon?: string;

}

const menuOptions = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/#work" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" }
]

export default function Header({ className, logoSrc, logoSrcOpen, menuIconSrc, menuCloseIcon }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={`absolute flex flex-col top-0 left-0 right-0 z-50 bg-transparent text-white p-10 ${className}`}>

      {/* Logo */}
      <div className="flex justify-between items-center">
        <div className="w-[120px] h-[22px] flex items-center z-50">
          <Image src={isOpen ? logoSrcOpen : logoSrc} alt="Dataki" width={150} height={150} layout="fixed" />
        </div>

        {/* Botón hamburguesa */}
        <button
          className="w-6 h-6 font-close text-black leading-none transition-opacity duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ?
            menuCloseIcon ?
              <Image src={menuCloseIcon} alt="menu" width={50} height={50} layout="fixed" />
              : <span className="font-close font-Poppins text-white">close</span>
            : (
              <Image src={menuIconSrc} alt="menu" width={40} height={40} layout="fixed" />
            )}
        </button>
      </div>

      {/* Menú de navegación */}
      <div
        className={`fixed top-0 py-6 left-0 pl-4 pr-20 bg-black text-white overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="px-6">
          <ul className="flex flex-col pt-16 text-5xl md:text-6xl font-antonio font-semibold">
            {menuOptions.map((link, index) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`block py-2 uppercase hover:py-8 transition-all duration-300 hover:text-easternBlue ${pathname === link.path ? "text-easternBlue" : "text-white blur-sm hover:blur-none hover:text-easternBlue"}`}
                >
                  {/*${pathname === link.path ? "text-easternBlue" : "text-white blur hover:blur-none"}*/}
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
