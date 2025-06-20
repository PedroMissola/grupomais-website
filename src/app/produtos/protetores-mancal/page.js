import Header from "@/app/components/header";
import ProductCard from "@/app/components/ui/card";
import Footer from "@/app/components/ui/footer";
import Navbar from "@/app/components/ui/navbar";

export default function ProtetoresDeMancaisPage() {
    return (
        <>
            <Navbar />
            <Header
                name="Protetores de Mancais"
                description="Proteção avançada para mancais, evitando vazamentos e contaminação."
            />
            <main className="flex flex-col gap-8 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-32 py-8">
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ProductCard
                        link="/produtos/protetor-mancal-ltec"
                        name="Protetores de Mancais LTEC"
                        description="Substitui retentores, evita vazamentos e contaminação."
                        image="protetores-ltec.jpg"
                    />
                    <ProductCard
                        name="Protetor LTEC – Redutor Falk"
                        description="Aplicação específica em redutores tipo Falk."
                    />
                    <ProductCard
                        name="Protetor LTEC – Bomba Warman"
                        description="Aplicação específica em bombas Warman industriais."
                    />
                    <ProductCard
                        name="Protetor LTEC – Bomba KSB/ETA"
                        description="Alta vedação em bombas KSB modelo ETA."
                    />
                    <ProductCard
                        name="Protetor LTEC – Bomba Goulds"
                        description="Vedação confiável em bombas Goulds/Canberra."
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}