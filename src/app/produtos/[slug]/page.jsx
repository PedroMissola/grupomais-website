// app/produtos/[slug]/page.jsx
import Footer from "@/app/components/ui/footer";
import Navbar from "@/app/components/ui/navbar";
import { produtos } from "@/data/produtos";
import { notFound } from "next/navigation";

// Garante que geramos as URLs estáticas
export async function generateStaticParams() {
  return produtos.map((p) => ({ slug: p.slug }));
}

export default async function ProdutoPage({ params }) {
  // 1) params é uma Promise
  const { slug } = await params;

  // 2) Encontre o produto
  const produto = produtos.find((p) => p.slug === slug);
  if (!produto) return notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8 text-neutral-900">
              {produto.nome}
            </h1>
            <div className="prose max-w-none">
              {produto.conteudo.map((bloco, idx) => {
                if (bloco.tipo === "paragrafo")
                  return (
                    <p key={idx} className="text-gray-700 mb-4">
                      {bloco.texto}
                    </p>
                  );
                if (bloco.tipo === "titulo")
                  return (
                    <h2 key={idx} className="text-2xl font-semibold mb-4">
                      {bloco.texto}
                    </h2>
                  );
                if (bloco.tipo === "lista")
                  return (
                    <ul key={idx} className="list-disc pl-5 mb-4">
                      {bloco.itens.map((item, i) => (
                        <li key={i} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                return null;
              })}
            </div>
          </div>
        </section>

        {produto.imagens?.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-center mb-8">
                Figuras Ilustrativas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {produto.imagens.map((img, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={`/produtos/${img}`}
                      alt={`Figura ${i + 1}`}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {produto.aplicacoes?.length > 0 && (
          <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-center mb-8">
                Aplicações Típicas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {produto.aplicacoes.map((app, i) => (
                  <div key={i} className="text-center">
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
