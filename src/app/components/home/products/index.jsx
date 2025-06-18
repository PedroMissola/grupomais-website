import Image from 'next/image';
import Link from 'next/link';

const ProductsSection = () => {
  const products = [
    {
      title: "Selos Mecânicos",
      link: "/selos-mecanicos",
      image: "/selos_mecanicos.webp"
    },
    {
      title: "Protetores de Mancal",
      link: "/protetores-de-mancal",
      image: "/protetores_de_mancal.webp"
    },
    {
      title: "Juntas Adesivas",
      link: "/juntas-adesivas",
      image: "/juntas_adesivas.webp"
    },
    {
      title: "Gaxetas Especiais",
      link: "/gaxetas-especiais",
      image: "/gaxetas_especiais.webp"
    },
    {
      title: "Polímeros Especiais",
      link: "/polimeros-especiais",
      image: "/polimeros_especiais.webp"
    },
    {
      title: "Calços Calibrados",
      link: "/calcos-calibrados",
      image: "/calcos_calibrados.webp"
    },
    {
      title: "Artefatos de Borracha",
      link: "/artefatos-de-borracha",
      image: "/artefatos_de_borracha.webp"
    },
    {
      title: "Bombas Pneumáticas de Diafragmas",
      link: "/bombas-pneumaticas-de-diafragmas",
      image: "/bombas_pneumaticas_de_diafragmas.webp"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">PRODUTOS</h1>
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