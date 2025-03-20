import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaPhone, FaBell, FaGlobe } from "react-icons/fa";

const Header = () => {
  const [showLangMenu, setShowLangMenu] = useState(false);

  return (
    <header className="w-full bg-black bg-opacity-50 text-white fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto p-4">
        
        {/* Menú de navegación a la izquierda */}
        <div className="flex items-center space-x-6">
          <button className="text-white text-2xl">
            <FaBars />
          </button>
          <Link href="/habitaciones">
            <span className="uppercase text-sm cursor-pointer hover:text-gray-300">Habitaciones</span>
          </Link>
          <Link href="/ofertas">
            <span className="uppercase text-sm cursor-pointer hover:text-gray-300">Ofertas</span>
          </Link>
        </div>

        {/* Logo central */}
        <div className="flex flex-col items-center">
          <img
            src="https://cdn2.paraty.es/wyndham-grand-cancun/images/8b9aa36f4f00b24"
            alt="Logo Wyndham Grand"
            className="h-12"
          />
          <span className="text-xs text-center">
            CANCUN ALL INCLUSIVE <br /> RESORT & VILLAS
          </span>
        </div>

        {/* Enlaces de la derecha */}
        <div className="flex items-center space-x-4">
          <Link href="/rewards">
            <span className="uppercase text-sm cursor-pointer hover:text-gray-300">Rewards</span>
          </Link>
          <Link href="/contacto">
            <span className="uppercase text-sm flex items-center cursor-pointer hover:text-gray-300">
              <FaPhone className="mr-1" /> Contacto
            </span>
          </Link>
          <Link href="/mis-reservas">
            <span className="uppercase text-sm flex items-center cursor-pointer hover:text-gray-300">
              <FaBell className="mr-1" /> Mis Reservas
            </span>
          </Link>

          {/* Selector de idioma */}
          <div className="relative">
            <button 
              className="text-sm flex items-center hover:text-gray-300"
              onClick={() => setShowLangMenu(!showLangMenu)}
            >
              <FaGlobe className="mr-1" /> ES
            </button>

            {showLangMenu && (
              <div className="absolute mt-2 bg-white text-black rounded shadow-md right-0">
                <Link href="/">
                  <span className="block px-4 py-2 cursor-pointer hover:bg-gray-200">ES</span>
                </Link>
                <Link href="/en/">
                  <span className="block px-4 py-2 cursor-pointer hover:bg-gray-200">EN</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
