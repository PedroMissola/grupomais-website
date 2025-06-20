import Footer from "@/app/components/ui/footer";
import Navbar from "@/app/components/ui/navbar";
import { produtos } from "@/data/produtos";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return produtos.map((produto) => ({ slug: produto.slug }));
}

export async function generateMetadata({ params }) {
  const produto = produtos.find((p) => p.slug === params.slug);

  if (!produto) return {};

  return {
    title: `${produto.nome} | MAS Produtos`,
    description: produto.descricao,
    alternates: {
      canonical: `https://www.masprodutos.com.br/produtos/${params.slug}`,
    },
    openGraph: {
      title: `${produto.nome} | MAS Produtos`,
      description: produto.descricao,
      url: `https://www.masprodutos.com.br/produtos/${params.slug}`,
      siteName: 'MAS Produtos',
      locale: 'pt_BR',
      type: 'website',
      images: [
        {
          url: produto.imagem,
          width: 800,
          height: 600,
          alt: produto.nome,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${produto.nome} | MAS Produtos`,
      description: produto.descricao,
      images: [produto.imagem],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
    other: {
      'color-scheme': 'light dark',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
      generator: 'Next.js',
    }
  };
}

export default function ProdutoPage({ params }) {
  // Remove o async e acessa params.slug diretamente
  const produto = produtos.find((p) => p.slug === params.slug);

  if (!produto) return notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Seção Principal */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8 text-neutral-900">{produto.nome}</h1>

            <div className="prose max-w-none">
              {produto.conteudo.map((bloco, index) => {
                switch (bloco.tipo) {
                  case "paragrafo":
                    return <p key={index} className="text-gray-700 mb-4">{bloco.texto}</p>;
                  case "titulo":
                    return <h2 key={index} className="text-2xl font-semibold mb-4">{bloco.texto}</h2>;
                  case "lista":
                    return (
                      <ul key={index} className="list-disc pl-5 mb-4">
                        {bloco.itens.map((item, i) => (
                          <li key={i} className="mb-2">{item}</li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </section>

        {/* Galeria de Imagens */}
        {produto.imagens && produto.imagens.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-center mb-8">
                Figuras Ilustrativas
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {produto.imagens.map((imagem, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={`/produtos/${imagem}`}
                      alt={`Figura ${index + 1}`}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Aplicações Típicas */}
        {produto.aplicacoes && produto.aplicacoes.length > 0 && (
          <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-center mb-8">
                Aplicações Típicas
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {produto.aplicacoes.map((app, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gray-100 rounded-lg p-4 mb-4">
                      <img
                        src={`/produtos/${app.imagem}`}
                        alt={app.titulo}
                        className="mx-auto h-32 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-semibold">{app.titulo}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}