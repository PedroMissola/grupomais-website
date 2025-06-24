"use client";

// @icons
import { Flag } from "lucide-react";
import Link from "next/link";

export default function ErrorSection7() {
  return (
    <section className="min-h-screen grid place-items-center">
      <div className="container mx-auto">
        <div className="text-center">
          <Flag className="h-20 w-20 mx-auto text-primary" />
          <h2 className="mt-8 mb-6 text-3xl font-bold">
            Erro 404 <br /> Parece que não encontramos o que você procura
          </h2>
          <p className="mb-12 text-foreground max-w-xl [text-wrap:balance] mx-auto text-lg">
            A página que você está tentando acessar não existe ou foi removida.
            Verifique o endereço digitado ou volte para a página inicial.
          </p>
          <Link
            href="/"
            className="inline-flex border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-base rounded-lg py-3 px-6 shadow-sm hover:shadow-lg bg-[#113548] border-[#113548] text-neutral-50 hover:bg-[#274250] hover:border-[#274250]"
          >
            Voltar a página inicial
          </Link>
        </div>
      </div>
    </section>
  );
}