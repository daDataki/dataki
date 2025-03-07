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
      <div className="container mx-auto flex justify-end items-center relative">

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menú de navegación */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex absolute sm:static top-14 left-0 w-full bg-gray-800 sm:bg-transparent sm:w-auto z-50`}
        >
          <ul className="sm:flex sm:space-x-3">
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
                href="/aon"
                className="block px-4 py-2 sm:p-0 hover:text-gray-400"
              >
                aon
              </Link>
            </li>
            <li>
              <Link
                href="/daytona"
                className="block px-4 py-2 sm:p-0 hover:text-gray-400"
              >
                daytona
              </Link>
            </li>
            <li>
              <Link
                href="/tango"
                className="block px-4 py-2 sm:p-0 hover:text-gray-400"
              >
                tango
              </Link>
            </li>
            <li>
              <Link
                href="/vml"
                className="block px-4 py-2 sm:p-0 hover:text-gray-400"
              >
                vml
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
