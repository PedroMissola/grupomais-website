import Header from "@/app/components/header";
import ProductCard from "@/app/components/ui/card";
import Footer from "@/app/components/ui/footer";
import Navbar from "@/app/components/ui/navbar";

export default function GaxetasPage() {
    return (
        <>
            <Navbar />
            <Header
                name="Gaxetas"
                description="Vedação resistente para equipamentos rotativos industriais."
            />
            <main className="flex flex-col gap-8 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-32 py-8">
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ProductCard
                        link="/produtos/gaxeta-trancada"
                        name="Gaxeta GTC 1000"
                        description="Carbono expandido, resistente, uso industrial rotativo."
                        image="/produtos/gaxetas.jpg"
                    />
                    <ProductCard
                        link="/produtos/gaxeta-trancada"
                        name="Gaxeta GTP 2000"
                        description="PTFE puro, ideal para uso químico."
                        image="/produtos/gaxetas.jpg"
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}