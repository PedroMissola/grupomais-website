import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./components/home/slider";
import ProductsSection from "./components/home/products";
import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <main id="empresa" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-[75%] mb-10 md:mb-0 md:pr-8">
              <h1 className="text-3xl font-bold text-center mb-8">MAS – Produtos Industriais e Serviços</h1>
              <p className="text-lg mb-8 text-center">
                Somos uma empresa brasileira com mais de 14 anos de experiência, com fábrica localizada em Lauro de Freitas/BA e centro de serviços e escritório em Fortaleza/CE. Atuamos na fabricação e comercialização de vedações industriais, com especialização em Selos Mecânicos, Selos Protetores de Mancal, Sistemas de Selagem, Acoplamentos Flexíveis, Juntas de Expansão Metálicas, Gaxetas, Juntas Flexíveis em PTFE, Buchas Hidroexpelidoras, e Artefatos de Borracha. Nosso foco é oferecer excelência em produtos e serviços, garantindo confiabilidade e segurança aos nossos clientes.
              </p>

              <div className="text-center">
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-lg rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-[#113548] border-[#113548] text-neutral-50 hover:bg-[#274250] hover:border-[#274250]"
                >
                  Entre em contato
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/produtos/selos-mecanicos-ultraseal.webp"
                alt="Varios Modelos de Selos Mecânicos Ultraseal"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                loading="lazy"
                role="presentation"
              />
            </div>
          </div>
        </div>
      </main>
      <ProductsSection />
      <Footer />
    </>
  );
}
