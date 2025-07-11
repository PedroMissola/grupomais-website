'use client';

import Navbar from '../components/ui/navbar';
import Footer from '../components/ui/footer';
import MapComponent from '../components/contact/map';
import ContactForm from '../components/contact/contactForm';

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
                            <div className="border-[1px] border-neutral-100 p-8 rounded-2xl">
                                <h2 className="text-2xl font-semibold mb-4">Matriz Bahia</h2>
                                <address className="not-italic space-y-2">
                                    <p>Rua. Antônio Fagundes Pereira, N° 495</p>
                                    <p>Cond. Águia do Miragem, Galpão 5 e 6 Buraquinho</p>
                                    <p>CEP: 42710-620 - Lauro de Freitas/BA</p>
                                    <p>CNPJ: 13.899.087/0001-22</p>
                                    <p>(71) 3508-7009</p>
                                    <p>E-mail: comercial@masprodutos.com.br</p>
                                    <p>engenharia@masprodutos.com.br</p>
                                </address>
                            </div>

                            <div className="border-[1px] border-neutral-100 p-8 rounded-2xl">
                                <h2 className="text-2xl font-semibold mb-4">MAS - Fortaleza</h2>
                                <address className="not-italic space-y-2">
                                    <p>Rua Fausto Aguiar, 745, Parque Iracema</p>
                                    <p>CEP: 60822-327 – Fortaleza/CE</p>
                                    <p>CNPJ: 49.455.590/0001-36</p>
                                    <p>Fone: (85) 99654-5076</p>
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