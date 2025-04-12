import { PrimaryButton } from "./Hero";
import { useState } from "react";

export const Banner = () =>{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
      <section className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4">

        <div className="w-[150px]">
          <img
            src="public/LOGO POTENTIIA.png"
            alt="Logo"
            className="h-auto max-h-16"
          />
        </div>

        <div className="hidden md:flex items-center gap-4 text-black font-semibold text-base">
          <p className="hover:text-blue-600 cursor-pointer">Programas Corporativos</p>
          <p className="hover:text-blue-600 cursor-pointer">Programas Deportivos</p>
          <p className="hover:text-blue-600 cursor-pointer">Modelo Potentiia</p>
          <p className="hover:text-blue-600 cursor-pointer">Piia Entrenadora Digital</p>
          <PrimaryButton text="Contáctanos" />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 flex flex-col items-center text-black font-semibold text-sm space-y-3 text-center">
          <p className="hover:text-blue-600 cursor-pointer">Programas Corporativos</p>
          <p className="hover:text-blue-600 cursor-pointer">Programas Deportivos</p>
          <p className="hover:text-blue-600 cursor-pointer">Modelo Potentiia</p>
          <p className="hover:text-blue-600 cursor-pointer">Piia Entrenadora Digital</p>
          <PrimaryButton text="Contáctanos" />
        </div>
      )}
    </section>

    );
};
