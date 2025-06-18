import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className="py-16 bg-[#113548] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Image 
              src="/logos/logo_white.webp"
              alt="MAS Produtos"
              width={200}
              height={80}
              className="mb-6"
            />
            <div className="text-left">
              <p>Rua Dra Ligia Dantas S Costa, 26<br />
                Cond. Praia de Ipitanga, Galpão 6<br />
                Ipitanga, Lauro de Freitas/BA<br />
                CEP: 427000-000</p>
              <p className="mt-4">CNPJ: 13.899.087/0001-22<br />
                Inscrição Estadual: 012.837.892 ME</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li><a href="/selos-mecanicos" className="hover:underline">Selos Mecânicos</a></li>
              <li><a href="/protetores-de-mancal" className="hover:underline">Protetores de Mancal</a></li>
              <li><a href="/juntas-adesivas" className="hover:underline">Juntas Adesivas</a></li>
              <li><a href="/gaxetas-especiais" className="hover:underline">Gaxetas Especiais</a></li>
              <li><a href="/polimeros-especiais" className="hover:underline">Polímeros Especiais</a></li>
              <li><a href="/calcos-calibrados" className="hover:underline">Calços Calibrados</a></li>
              <li><a href="/artefatos-de-borracha" className="hover:underline">Artefatos de Borracha</a></li>
              <li><a href="/bombas-pneumaticas-de-diafragmas" className="hover:underline">Bombas Pneumáticas de Diafragmas</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="mb-4">
              <div className="flex items-start mb-2">
                <span className="mr-2">✉️</span>
                <div>
                  <p>comercial@masprodutos.com.br</p>
                  <p>engenharia@masprodutos.com.br</p>
                  <p>masprodutosindustriais@outlook.com</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start">
                <span className="mr-2">📞</span>
                <div>
                  <p>(71) 3508-7009</p>
                  <p>(71) 99228-1780</p>
                  <p>(71) 99974-1780</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;