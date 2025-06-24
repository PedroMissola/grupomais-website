import Image from 'next/image';
import Link from 'next/link';

const ProductsSection = () => {
  const products = [
    {
      title: "Selos Mecânicos",
      link: "/produtos/selos-mecanicos",
      image: "/produtos/selos-f02-f12-f13.png"
    },
    {
      title: "Sistemas de Selagem",
      link: "/produtos/sistemas-selagem",
      image: "/produtos/termosifao-12l-25l-28l.png"
    },
    {
      title: "Protetores de Mancal",
      link: "/produtos/protetores-mancal",
      image: "/produtos/protetor-mancal-ltec.png"
    },
    {
      title: "Buchas Hidroespelidoras",
      link: "/produtos/buchas-hidroespelidoras",
      image: "/produtos/bucha-hidroespelidora.png"
    },
    {
      title: "Acoplamentos Flexíveis",
      link: "/produtos/acoplamentos-flexiveis",
      image: "/produtos/acoplamento-br.png"
    },
    {
      title: "Juntas Flexíveis em PTFE",
      link: "/produtos/juntas-flexiveis-ptfe",
      image: "/produtos/junta-ptfe.png"
    },
    {
      title: "Gaxetas",
      link: "/produtos/gaxetas",
      image: "/produtos/gaxeta-gtp-2000.png"
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
                    alt={product.title}
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