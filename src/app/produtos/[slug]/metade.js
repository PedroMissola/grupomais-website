// app/produtos/[slug]/metadata.js
import { produtos } from "@/data/produtos";

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const produto = produtos.find((p) => p.slug === slug);

    if (!produto) {
        return {
            title: "Produto não encontrado | MAS Produtos",
            description: "Esse produto não está disponível.",
        };
    }

    return {
        title: `${produto.nome} | MAS Produtos`,
        description: produto.descricao,
        alternates: {
            canonical: `https://www.masprodutos.com.br/produtos/${slug}`,
        },
        openGraph: {
            title: `${produto.nome} | MAS Produtos`,
            description: produto.descricao,
            url: `https://www.masprodutos.com.br/produtos/${slug}`,
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
        },
    };
}
