import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#113548] text-white">
      <div className="mx-auto w-full max-w-7xl px-8 py-12">
        <div className="grid grid-cols-1 justify-between gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Coluna 1: Logo e Contato */}
          <div>
            <div className="mb-6">
              <Image
                src="/logos/logo_white.webp"
                alt="MAS Produtos"
                width={180}
                height={72}
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start">
                <MapPin className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Matriz Bahia</h4>
                  <p className="text-sm">
                    Rua. Antônio Fagundes Pereira, N° 495<br />
                    Cond. Águia do Miragem, Galpão 5 e 6 Buraquinho<br />
                    CEP: 42710-620 - Lauro de Freitas/BA
                  </p>
                </div>
              </div>

              <div className="flex items-start mt-4">
                <MapPin className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">MAS - Fortaleza</h4>
                  <p className="text-sm">
                    Rua Fausto Aguiar, 745, Parque Iracema<br />
                    CEP: 60822-327 – Fortaleza/CE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2: Contatos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Bahia</p>
                  <p className="text-sm">
                    (71) 3508-7009<br />
                    (71) 99228-1780<br />
                    (71) 99974-1780
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Fortaleza</p>
                  <p className="text-sm">
                    (85) 3879-2783<br />
                    (85) 9XXXX-XXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">E-mails</p>
                  <p className="text-sm">
                    comercial@masprodutos.com.br<br />
                    engenharia@masprodutos.com.br<br />
                    comercial@grupomas.com.br
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 3: Produtos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Produtos</h3>
            <ul className="space-y-2">
              {[
                { name: "Selos Mecânicos", link: "/produtos/selos-mecanicos" },
                { name: "Sistemas de Selagem", link: "/produtos/sistemas-selagem" },
                { name: "Protetores de Mancal", link: "/produtos/protetores-mancal" },
                { name: "Buchas Hidroespelhadoras", link: "/produtos/buchas-hidroespelidoras" },
                { name: "Acoplamentos Flexíveis", link: "/produtos/acoplamentos-flexiveis" },
                { name: "Juntas Flexíveis PTFE", link: "/produtos/juntas-flexiveis-ptfe" },
                { name: "Gaxetas", link: "/produtos/gaxetas" }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-sm hover:underline transition-all duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 border-t border-white/20 py-6 md:flex-row md:justify-between">
          <small className="text-sm text-center">
            © {new Date().getFullYear()} MAS Produtos | Produtos Industriais e Serviços
          </small>

          <div className="flex gap-4">
            <a href="#" className="inline-grid place-items-center rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="inline-grid place-items-center rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="inline-grid place-items-center rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="inline-grid place-items-center rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;