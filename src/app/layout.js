import "./globals.css";
import { inter, firaCode } from "./fonts";
import { GoogleAnalyticsTracker } from "@/app/analytics";
// import Footer from "@/components/footer";
import Script from "next/script";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
  themeColor: "black",
};

export const metadata = {
  title: {
    default: "MAS Produtos - Soluções em Vedações Industriais",
    template: "%s | MAS Produtos",
  },
  description:
    "A MAS Produtos é especialista em soluções de vedação industrial, atuando há mais de 14 anos com fabricação e serviços de selos mecânicos, buchas hidroespelidoras, protetores de mancais, acoplamentos e juntas.",
  keywords: [
    "MAS Produtos",
    "vedações industriais",
    "selos mecânicos",
    "buchas hidroespelidoras",
    "protetores de mancais",
    "juntas PTFE",
    "acoplamentos flexíveis",
    "gaxetas",
    "manutenção industrial",
    "equipamentos industriais",
  ],
  authors: [{ name: "MAS Produtos", url: "https://grupomas.com.br" }],
  creator: "MAS Produtos - Grupo MAS",
  metadataBase: new URL("https://grupomas.com.br"),
  openGraph: {
    title: "MAS Produtos - Soluções em Vedações Industriais",
    description:
      "Soluções em vedação industrial com selos mecânicos, buchas hidroespelidoras, acoplamentos e serviços especializados. Mais de 14 anos de experiência.",
    url: "https://grupomas.com.br",
    siteName: "MAS Produtos",
    images: [
      {
        url: "https://grupomas.com.br/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Logo da MAS Produtos - Soluções em Vedações Industriais",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAS Produtos - Vedações Industriais",
    description:
      "Selos mecânicos, juntas, acoplamentos e soluções industriais com qualidade e confiança.",
    images: ["https://grupomas.com.br/opengraph-image.jpg"],
    creator: "@grupomas", // caso exista uma conta oficial
  },
  icons: {
    icon: "/icon/favicon.ico",
    apple: "/icon/apple-touch-icon.png",
  },
  manifest: "/icon/site.webmanifest",
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
        {/* <Footer /> */}
      </body>
    </html>
  );
}