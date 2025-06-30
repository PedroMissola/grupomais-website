import Header from "@/app/components/header";
import ProductCard from "@/app/components/ui/card";
import Footer from "@/app/components/ui/footer";
import Navbar from "@/app/components/ui/navbar";

export default function BuchasHidroexpelidorasPage() {
    return (
        <>
            <Navbar />
            <Header
                name="Buchas Hidroexpelidoras"
                description="Substituem anéis de gaxeta e evitam desgaste."
            />
            <main className="flex flex-col gap-8 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-32 py-8">
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                    <ProductCard
                        link="/produtos/bucha-hidroexpelidora"
                        name="Bucha Hidroexpelidora"
                        description="Substitui anéis de gaxeta, evita desgaste."
                        image="/produtos/bucha-hidroexpelidora.png"
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}