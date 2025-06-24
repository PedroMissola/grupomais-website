import "./globals.css";
import { inter, firaCode } from "./fonts";
import { GoogleAnalyticsTracker } from "@/app/analytics";
import Script from "next/script";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  themeColor: "#000000",
  interactiveWidget: "resizes-content",
};


export const metadata = {
  title: {
    default: "MAS Produtos - Selos Mecânicos, Vedações Industriais e Manutenção Técnica",
    template: "%s | MAS Produtos",
  },
  description:
    "A MAS Produtos é especialista em soluções de vedação industrial, com foco em selos mecânicos, protetores de mancais, gaxetas, buchas hidroespelidoras e acoplamentos flexíveis. Atuamos há mais de 14 anos no mercado com qualidade, assistência técnica e inovação.",
  keywords: [
    "MAS Produtos",
    "selos mecânicos",
    "vedações industriais",
    "protetores de mancal",
    "buchas hidroespelidoras",
    "gaxetas",
    "acoplamentos industriais",
    "manutenção industrial",
    "produtos industriais Campinas",
    "serviços de vedação",
    "recuperação de selos",
    "componentes industriais",
    "empresa de vedação"
  ],
  applicationName: "MAS Produtos",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "MAS Produtos", url: "https://grupomas.com.br" }],
  creator: "MAS Produtos",
  publisher: "MAS Produtos",
  metadataBase: new URL("https://grupomas.com.br"),

  openGraph: {
    title: "MAS Produtos - Soluções Industriais em Vedação e Manutenção Técnica",
    description:
      "Especialistas em vedação industrial e manutenção de selos mecânicos. Atendemos todo o Brasil com excelência técnica e soluções sob medida.",
    url: "https://grupomas.com.br",
    siteName: "MAS Produtos",
    images: [
      {
        url: "https://grupomas.com.br/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "MAS Produtos - Especialista em Vedações Industriais",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MAS Produtos - Vedações Industriais e Serviços Técnicos",
    description:
      "Mais de 14 anos oferecendo selos mecânicos, buchas, gaxetas, protetores de mancal e serviços especializados para o setor industrial.",
    images: ["https://grupomas.com.br/opengraph-image.jpg"],
    creator: "@masprodutos",
  },

  icons: {
    icon: "/icon/favicon.ico",
    apple: "/icon/apple-touch-icon.png",
    shortcut: "/icon/favicon-32x32.png",
  },
  manifest: "/icon/site.webmanifest",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },

  alternates: {
    canonical: "https://grupomas.com.br",
    languages: {
      "pt-BR": "https://grupomas.com.br",
    },
  },

  category: "Indústria de Vedações e Componentes Industriais",
};



export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${inter.variable} ${firaCode.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SWD75NY02L"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SWD75NY02L');
            `,
          }}
        />
      </head>
      <body>
        <GoogleAnalyticsTracker />
        {children}
      </body>
    </html>
  );
}