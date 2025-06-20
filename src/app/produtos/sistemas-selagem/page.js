import Header from "@/app/components/header";
import ProductCard from "@/app/components/ui/card";
import Footer from "@/app/components/ui/footer";
import Navbar from "@/app/components/ui/navbar";

export default function SistemasDeSelagemPage() {
    return (
        <>
            <Navbar />
            <Header
                name="Sistemas de Selagem"
                description="Auxiliam desempenho e segurança dos selos mecânicos."
            />
            <main className="flex flex-col gap-8 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-32 py-8">
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    <ProductCard
                        link="/produtos/sistema-selagem-termosifao"
                        name="Sistemas de Selagem"
                        description="Aumenta desempenho e segurança dos selos mecânicos."
                        image="sistemas-selagem.jpg"
                    />
                    {/* Manter os outros sem link por enquanto */}
                    <ProductCard
                        name="Trocadores de Calor"
                        description="Permite refrigeração conforme planos API 21/23."
                    />
                    <ProductCard
                        name="Termossifão (12L, 25L, 28L)"
                        description="Auxilia planos API 52/53A com reservatório."
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}
