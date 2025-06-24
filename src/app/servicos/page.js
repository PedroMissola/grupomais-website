'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/ui/navbar';
import Footer from '../components/ui/footer';

export default function Servicos() {
    const imagens = [
        '/servicos/lauro-freitas/1.jpg',
        '/servicos/lauro-freitas/2.jpg',
        '/servicos/lauro-freitas/3.jpg',
        '/servicos/lauro-freitas/4.jpg',
        '/servicos/lauro-freitas/5.jpg',
    ];

    const [imagemPrincipal, setImagemPrincipal] = useState(imagens[0]);

    const imagensFortaleza = [
        '/servicos/fortaleza/1.jpg',
        '/servicos/fortaleza/2.jpg',
        '/servicos/fortaleza/3.jpg',
        '/servicos/fortaleza/4.jpg',
        '/servicos/fortaleza/5.jpg',
    ];

    const [imagemPrincipalFortaleza, setImagemPrincipalFortaleza] = useState(imagensFortaleza[0]);

    return (
        <>
            <Navbar />

            <main className="px-4 sm:px-8 lg:px-32 py-12 space-y-20">
                {/* Introdução */}
                <section className="text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-neutral-800">
                        Centro de Serviços para Recuperação de Selos Mecânicos
                    </h1>
                    <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
                        A MAS dispõe de dois centros de serviços totalmente equipados para recuperação de qualquer tipo de selo mecânico, independentemente do fabricante.
                    </p>
                </section>

                {/* Lauro de Freitas */}
                <section className="space-y-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#113548]">
                        Centro de Serviços – Lauro de Freitas (BA)
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        <div>
                            <p className="text-neutral-700 text-lg leading-relaxed">
                                Estrutura completa com centro de usinagem para qualquer tipo de recuperação e ajuste. Conta com sala de lapidação e polimento para recuperação das faces de selagem, central óptica com luz monocromática e lente para verificação da planicidade das faces, além de bancada de teste computadorizada que emite relatórios de estanqueidade, garantindo maior confiabilidade e qualidade nas recuperações.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Imagem principal */}
                            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md relative">
                                <Image
                                    src={imagemPrincipal}
                                    alt="Imagem principal - Lauro de Freitas"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>

                            {/* Miniaturas */}
                            <div className="grid grid-cols-5 gap-2">
                                {imagens.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setImagemPrincipal(img)}
                                        className={`aspect-video rounded-lg overflow-hidden border-2 transition-all duration-200 ${imagemPrincipal === img
                                            ? 'border-[#113548]'
                                            : 'border-transparent'
                                            }`}
                                        aria-label={`Ver imagem ${idx + 1}`}
                                    >
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={img}
                                                alt={`Miniatura ${idx + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fortaleza */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#113548]">
                        Centro de Serviços – Fortaleza (CE)
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        <div>
                            <p className="text-neutral-700 text-lg leading-relaxed">
                                Estrutura com centro de usinagem completo, sala de lapidação com lapidadora de 24”, polimento de faces, microscópio digital e central óptica com luz monocromática. Possui também bancada de testes computadorizada que emite relatórios de estanqueidade para todos os selos recuperados, conforme norma API 682.
                            </p>
                        </div>

                        {/* Galeria Fortaleza */}
                        <div className="space-y-4">
                            {/* Imagem principal */}
                            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md relative">
                                <Image
                                    src={imagemPrincipalFortaleza}
                                    alt="Imagem principal - Fortaleza"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Miniaturas */}
                            <div className="grid grid-cols-5 gap-2">
                                {imagensFortaleza.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setImagemPrincipalFortaleza(img)}
                                        className={`aspect-video rounded-lg overflow-hidden border-2 transition-all duration-200 ${imagemPrincipalFortaleza === img ? 'border-[#113548]' : 'border-transparent'
                                            }`}
                                        aria-label={`Ver imagem Fortaleza ${idx + 1}`}
                                    >
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={img}
                                                alt={`Miniatura Fortaleza ${idx + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Relatório */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#113548]">
                        Relatório de Teste de Estanqueidade
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <p className="text-neutral-700 text-lg">
                                Após os testes realizados em bancada, todos os selos mecânicos cartucho (novos ou recuperados) recebem um relatório de estanqueidade impresso, conforme a norma API 682. Este relatório contém:
                            </p>
                            <ul className="mt-4 list-disc list-inside text-neutral-700 text-lg space-y-1">
                                <li>Informações do selo (modelo, fabricante, TAG, etc.)</li>
                                <li>Registro MAS de rastreabilidade (marcado nas sobrepostas)</li>
                                <li>Resultado gráfico e numérico das pressões testadas</li>
                            </ul>
                            <p className="mt-4 text-neutral-700 font-medium">
                                Todos os selos são testados para garantir máxima confiabilidade e segurança!
                            </p>
                        </div>

                        {/* Imagem estilo A4 */}
                        <div className="bg-white w-full max-w-sm h-[500px] mx-auto bg-neutral-100 rounded-lg overflow-hidden shadow-md relative">
                            <Image
                                src="/servicos/relatorio.jpg"
                                alt="Exemplo de relatório de estanqueidade"
                                fill
                                className="object-contain rounded-lg"
                                sizes="(max-width: 768px) 100vw, 400px"
                            />
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}
