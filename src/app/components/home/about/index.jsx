import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section id="empresa" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h3 className="text-3xl font-bold text-center mb-8">MAS – Produtos Industriais e Serviços</h3>
            <p className="text-lg mb-8 text-center">
              Somos uma empresa Brasileira, localizada na cidade de Lauro de Freitas/BA, com uma trajetória de mais de 05 anos, dedicados à comercialização de vedações industriais, elementos para transmissões e alinhamento, especializando-se nas linhas de Selos Mecânicos, Selos Protetores de mancal, Sistemas de Selagem, Acoplamentos Flexíveis, Juntas Flexíveis, Calços Calibrados, Buchas Poliméricas, Bombas Pneumáticas e Artefatos de Borracha.
            </p>
            <div className="text-center">
              <Link
                href="/contato"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Entre em contato
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/produtos/selos-mecanicos-ultraseal.webp"
              alt="Selos Mecânicos"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;