'use client';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import MapComponent from '../components/map';
import ContactForm from '../components/contactForm';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <MapComponent />
        <h1 className="text-4xl font-bold text-center mb-12">Entre em Contato</h1>
        
        {/* Seção reorganizada */}
        <section className="flex flex-col md:flex-row gap-12 mb-16">
          {/* Lado esquerdo - Informações de contato */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 gap-12">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Matriz Bahia</h2>
                <address className="not-italic space-y-2">
                  <p>Rua. Antônio Fagundes Pereira, N° 495</p>
                  <p>Cond. Águia do Miragem, Galpão 5 e 6 Buraquinho</p>
                  <p>CEP: 42710-620 - Lauro de Freitas/BA</p>
                  <p>CNPJ: 13.899.087/0001-22</p>
                  <p>Fone: (71) 3508-7009 / (71) 9 9228-1780 / (71) 9 9974-1780</p>
                  <p>E-mail: comercial@masprodutos.com.br</p>
                  <p>engenharia@masprodutos.com.br</p>
                </address>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-4">MAS - Fortaleza</h2>
                <address className="not-italic space-y-2">
                  <p>Rua Fausto Aguiar, 745, Parque Iracema</p>
                  <p>CEP: 60822-327 – Fortaleza/CE</p>
                  <p>CNPJ: 49.455.590/0001-36</p>
                  <p>Fone: (85) 3879-2783 / (85) 9 9654-5076</p>
                  <p>E-mail: comercial@grupomas.com.br</p>
                  <p>vendas@grupomas.com.br</p>
                </address>
              </div>
            </div>
          </div>
          
          {/* Lado direito - Formulário */}
          <div className="md:w-1/2">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}