import Image from 'next/image';
import Link from 'next/link';

const ProductsSection = () => {
  const products = [
    {
      title: "Selos Mecânicos",
      link: "/produtos/selos-mecanicos",
      image: "/produtos/selos-f02-f12-f13.png",
      alt: "Selos mecânicos modelos F02, F12 e F13, utilizados para vedação rotativa em bombas e equipamentos industriais"
    },
    {
      title: "Sistemas de Selagem",
      link: "/produtos/sistemas-selagem",
      image: "/produtos/termosifao-12l-25l-28l.png",
      alt: "Sistemas de selagem com termossifão de 12L, 25L e 28L para resfriamento de selos mecânicos em operação contínua"
    },
    {
      title: "Protetores de Mancal",
      link: "/produtos/protetores-mancal",
      image: "/produtos/protetor-mancal-ltec.png",
      alt: "Protetor de mancal LTEC da MAS Produtos, aplicado na vedação de eixos e prevenção de entrada de contaminantes"
    },
    {
      title: "Buchas Hidroespelidoras",
      link: "/produtos/buchas-hidroespelidoras",
      image: "/produtos/bucha-hidroespelidora.png",
      alt: "Bucha hidroespelidora industrial, substitui anéis de gaxeta e oferece maior vida útil e estanqueidade"
    },
    {
      title: "Acoplamentos Flexíveis",
      link: "/produtos/acoplamentos-flexiveis",
      image: "/produtos/acoplamento-br.png",
      alt: "Acoplamento flexível tipo BR, absorve desalinhamentos e vibrações entre eixos rotativos em equipamentos industriais"
    },
    {
      title: "Juntas Flexíveis em PTFE",
      link: "/produtos/juntas-flexiveis-ptfe",
      image: "/produtos/junta-ptfe.png",
      alt: "Junta flexível em PTFE para vedação em ambientes agressivos, resistente a produtos químicos e altas temperaturas"
    },
    {
      title: "Gaxetas",
      link: "/produtos/gaxetas",
      image: "/produtos/gaxeta-gtp-2000.png",
      alt: "Gaxeta GTP 2000 para vedação de bombas e válvulas, fabricada em grafite expandido com alta resistência térmica"
    },
  ];


  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">PRODUTOS</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <Link href={product.link}>
                <div className="p-4">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    loading='lazy'
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h4 className="text-lg font-semibold text-center">{product.title}</h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;