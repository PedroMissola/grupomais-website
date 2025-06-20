"use client"

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fechar o dropdown ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-white px-4 sm:px-8 lg:px-32 py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logos/logo.webp"
            alt="Logo da Empresa"
            width={250}
            height={125}
            className="h-12 w-auto"
          />
        </Link>

        <ul className="flex items-center space-x-6 font-semibold text-neutral-700">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          {/* Dropdown de Produtos */}
          <li className="relative hidden lg:block" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center hover:text-blue-600 transition-colors"
              aria-expanded={isDropdownOpen}
            >
              Produtos
              <svg
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-4 px-4 grid grid-cols-1 gap-2">
                  <Link
                    href="/produtos/selos-mecanicos"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Selos Mecânicos
                  </Link>
                  <Link
                    href="/produtos/sistemas-selagem"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Sistemas de Selagem
                  </Link>
                  <Link
                    href="/produtos/protetores-mancal"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Protetores de Mancais
                  </Link>
                  <Link
                    href="/produtos/buchas-hidroespelidoras"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Buchas Hidroespelidoras
                  </Link>
                  <Link
                    href="/produtos/acoplamentos-flexiveis"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Acoplamentos Flexíveis
                  </Link>
                  <Link
                    href="/produtos/juntas-flexiveis-ptfe"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Juntas Flexíveis em PTFE
                  </Link>
                  <Link
                    href="/produtos/gaxetas"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Gaxetas
                  </Link>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link href="/contato" className="hover:text-blue-600 transition-colors">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}