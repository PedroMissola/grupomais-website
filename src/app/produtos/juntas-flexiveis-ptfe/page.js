import Header from "@/app/components/header";
import ProductCard from "@/app/components/ui/card";
import Footer from "@/app/components/ui/footer";
import Navbar from "@/app/components/ui/navbar";

export default function JuntasFlexiveisPTFEPage() {
    return (
        <>
            <Navbar />
            <Header
                name="Juntas Flexíveis de PTFE"
                description="Vedação resistente com Teflon puro e alta estabilidade."
            />
            <main className="flex flex-col gap-8 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-32 py-8">
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ProductCard
                        link="/produtos/junta-flexivel-ptfe"
                        name="Junta Flexível de PTFE"
                        description="Teflon puro, ótima vedação e estabilidade térmica."
                        image="/produtos/juntas-flexiveis-ptfe.jpg"
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}