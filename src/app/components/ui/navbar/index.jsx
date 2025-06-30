"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  Boxes,
  Phone,
  ChevronDown,
  Wrench,
} from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickOutsideDesktop =
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target);
      const isClickOutsideMobile =
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target);

      if (isClickOutsideDesktop && isClickOutsideMobile) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav
      className="bg-white px-4 sm:px-8 lg:px-32 py-4 shadow-sm relative z-50"
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" aria-label="Página inicial da MAS Produtos">
          <Image
            src="/logos/logo.webp"
            alt="Logomarca da MAS Produtos - Vedações Industriais"
            width={250}
            height={125}
            priority
            className="h-12 w-auto"
          />
        </Link>

        {/* Botão Mobile */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-neutral-700"
          aria-label="Abrir ou fechar menu móvel"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex items-center space-x-6 font-semibold text-neutral-700">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
              aria-label="Ir para a página inicial"
            >
              <Home size={18} /> Home
            </Link>
          </li>

          <li className="relative" ref={desktopDropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 hover:text-blue-600 transition-colors w-full"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              aria-controls="dropdown-produtos"
            >
              <Boxes size={18} /> Produtos
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isDropdownOpen && (
              <div
                id="dropdown-produtos"
                className="absolute right-0 mt-2 w-72 rounded-lg shadow-lg bg-white ring-1 ring-neutral-300 ring-opacity-5 z-50"
              >
                <div className="py-4 px-4 grid grid-cols-1 gap-2">
                  {["selos-mecanicos", "sistemas-selagem", "protetores-mancal", "buchas-hidroexpelidoras", "acoplamentos-flexiveis", "juntas-flexiveis-ptfe", "gaxetas"].map((slug) => (
                    <Link
                      key={slug}
                      href={`/produtos/${slug}`}
                      className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      aria-label={`Ir para a página de ${slug.replace(/-/g, ' ')}`}
                    >
                      {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <Link
              href="/servicos"
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
              aria-label="Ver serviços da MAS Produtos"
            >
              <Wrench size={18} /> Serviços
            </Link>
          </li>

          <li>
            <Link
              href="/contato"
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
              aria-label="Entrar em contato com a MAS Produtos"
            >
              <Phone size={18} /> Contato
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 p-4 bg-white space-y-4 font-semibold text-neutral-700">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Ir para a página inicial"
          >
            <Home size={18} /> Home
          </Link>

          <div>
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 hover:text-blue-600 transition-colors w-full"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              aria-controls="mobile-dropdown-produtos"
            >
              <Boxes size={18} /> Produtos
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isDropdownOpen && (
              <div
                id="mobile-dropdown-produtos"
                ref={mobileDropdownRef}
                className="mt-2 pl-4 flex flex-col gap-3"
              >
                {["selos-mecanicos", "sistemas-selagem", "protetores-mancal", "buchas-hidroexpelidoras", "acoplamentos-flexiveis", "juntas-flexiveis-ptfe", "gaxetas"].map((slug) => (
                  <Link
                    key={slug}
                    href={`/produtos/${slug}`}
                    className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                    aria-label={`Ir para a página de ${slug.replace(/-/g, ' ')}`}
                  >
                    {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contato"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Entrar em contato com a MAS Produtos"
          >
            <Phone size={18} /> Contato
          </Link>
        </div>
      )}
    </nav>
  );
}
