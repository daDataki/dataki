'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Detecta la ruta actual

  // Cerrar menú cuando la ruta cambia
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logotipo */}
        <div className="text-2xl font-bold">
          <Link href="/">MyWebsite</Link>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menú de navegación */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex sm:space-x-6 absolute sm:static top-14 left-0 w-full bg-gray-800 sm:bg-transparent sm:w-auto z-50`}
        >
          <ul className="sm:flex sm:space-x-6">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 sm:p-0 hover:text-gray-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-4 py-2 sm:p-0 hover:text-gray-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block px-4 py-2 sm:p-0 hover:text-gray-400"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-4 py-2 sm:p-0 hover:text-gray-400"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/vida-estilo"
                className="block px-4 py-2 sm:p-0 hover:text-gray-400"
              >
                Estilo&Vida
              </Link>
            </li>
            <li>
              <Link
                href="/cis-latam"
                className="block px-4 py-2 sm:p-0 hover:text-gray-400"
              >
                Cis-Latam
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
