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
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                    <ProductCard
                        link="/produtos/trocador-calor-api"
                        name="Trocador de Calor (API 21/23)"
                        description="Controle térmico para sistemas de dupla vedação"
                        image="/produtos/trocadores-calor.png"
                    />
                    <ProductCard
                        link="/produtos/termosifao-api"
                        name="Termossifão (API 52/53A)"
                        description="Resfriamento autônomo por convecção natural"
                        image="/produtos/termosifao-12l-25l-28l.png"
                    />
                </section>

            </main>
            <Footer />
        </>
    );
}