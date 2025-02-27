'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import './Header.css';

interface HeaderProps {
  className?: string;
  logoSrc: string; // Logo dinámico
  menuIconSrc: string; // Imagen del botón de menú
}

export default function Header({ className, logoSrc, menuIconSrc }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={`absolute flex flex-col top-0 left-0 right-0 z-50 bg-transparent text-white p-10 ${className}`}>

      {/* Logo */}
      <div className="flex justify-between items-center">
        <div className="w-[120px] h-[22px] flex items-center">
          <Image src={logoSrc} alt="Dataki" width={150} height={150} layout="fixed" />
        </div>

        {/* Botón hamburguesa */}
        <button
          className="w-fit h-[46px] font-close text-black leading-none transition-opacity duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="font-close font-Poppins text-white">close</span>
          ) : (
            <Image src={menuIconSrc} alt="menu" width={59} height={46} layout="fixed" />
          )}
        </button>
      </div>

      {/* Menú de navegación */}
      <div className={`w-1/2 bg-gray-800 text-white overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="py-4 md:pl-20">
          <ul className="flex flex-col fontSize-menu font-antonio font-semibold">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Work", path: "/vida-estilo" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" }
            ].map((link, index) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`block px-4 py-2 transition-all duration-300 ${pathname === link.path ? "text-easternBlue" : "text-white blur hover:blur-none"}`}
                >
                  <span className='max-sm:hidden pr-12'>0{index + 1}</span> {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
