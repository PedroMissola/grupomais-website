import Footer from "@/app/components/ui/footer";
import Navbar from "@/app/components/ui/navbar";
import Voltar from "@/app/components/ui/voltar";
import { produtos } from "@/data/produtos";
import { notFound } from "next/navigation";

// Ainda pode usar funções async normalmente
export async function generateStaticParams() {
  return produtos.map((p) => ({ slug: p.slug }));
}

export default async function ProdutoPage({ params }) {
  const { slug } = await params;
  const produto = produtos.find((p) => p.slug === slug);
  if (!produto) return notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Voltar />
              <h1 className="text-3xl font-bold text-neutral-900">{produto.nome}</h1>
            </div>
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

        {produto.informacoes?.length > 0 && (
          <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-center mb-8">
                Informações Adicionais
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold border-b border-gray-300">
                        {produto.informacoes[0].tituloTabela}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {produto.informacoes.map((info, i) => (
                      <tr key={i} className="border-b border-gray-200">
                        <td className="px-4 py-3 text-lg">{info.titulo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {produto.tabelaDimensional && (
          <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-center mb-8">
                {produto.tabelaDimensional.tituloTabela}
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      {produto.tabelaDimensional.colunas.map((col, i) => (
                        <th
                          key={i}
                          className="px-4 py-2 text-left font-semibold border-b border-gray-300"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {produto.tabelaDimensional.linhas.map((linha, i) => (
                      <tr key={i} className="border-b border-gray-200">
                        {linha.map((celula, j) => (
                          <td key={j} className="px-4 py-3 text-lg">
                            {celula}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {produto.imagens?.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-center mb-8">
                Figuras Ilustrativas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {produto.imagens.map((img, i) => (
                  <div key={i} className="rounded-lg shadow-md overflow-hidden flex justify-center items-center w-fit">
                    <img
                      src={`/produtos/${img}`}
                      alt={`Figura ${i + 1}`}
                      className=" max-w-full max-h-[200px] object-contain"
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
                    <div className="p-4 mb-4 flex justify-center items-center">
                      <img
                        src={`/produtos/${app.imagem}`}
                        alt={app.titulo}
                        className="rounded-lg max-w-full max-h-[200px] object-contain"
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
