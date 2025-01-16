'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logotipo */}
        <div className="text-2xl font-bold">
          <Link href="/">MyWebsite</Link>
        </div>

        {/* Botón hamburguesa para pantallas pequeñas */}
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
          } sm:flex sm:space-x-6 absolute sm:static top-14 left-0 w-full bg-gray-800 sm:bg-transparent sm:w-auto`}
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
          </ul>
        </nav>
      </div>
    </header>
  );
}

