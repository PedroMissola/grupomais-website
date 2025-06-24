// app/servicos/metadata.js

export const metadata = {
    title: "Serviços de Recuperação | MAS Produtos",
    description:
        "Conheça os centros de serviços da MAS para recuperação de selos mecânicos em Lauro de Freitas (BA) e Fortaleza (CE). Estrutura completa, testes com emissão de relatório e qualidade garantida.",
    alternates: {
        canonical: "https://www.masprodutos.com.br/servicos",
    },
    openGraph: {
        title: "Serviços de Recuperação | MAS Produtos",
        description:
            "A MAS oferece centros de serviços para recuperação de selos mecânicos com equipamentos de alta tecnologia e emissão de relatórios conforme norma API 682.",
        url: "https://www.masprodutos.com.br/servicos",
        siteName: "MAS Produtos",
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: "https://www.masprodutos.com.br/servicos/relatorio.jpg",
                width: 800,
                height: 600,
                alt: "Relatório de estanqueidade",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Serviços de Recuperação | MAS Produtos",
        description:
            "Centros especializados para recuperação de selos mecânicos com equipamentos de alta precisão e emissão de relatórios técnicos.",
        images: ["https://www.masprodutos.com.br/servicos/relatorio.jpg"],
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
        "color-scheme": "light dark",
        viewport:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
        generator: "Next.js",
    },
};
