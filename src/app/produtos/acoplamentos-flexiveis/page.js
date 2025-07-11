import Header from "@/app/components/header";
import ProductCard from "@/app/components/ui/card";
import Footer from "@/app/components/ui/footer";
import Navbar from "@/app/components/ui/navbar";

export default function AcoplamentosFlexiveisPage() {
    return (
        <>
            <Navbar />
            <Header
                name="Acoplamentos Flexíveis"
                description="Absorvem vibrações, facilitam montagem e protegem equipamentos."
            />
            <main className="flex flex-col gap-8 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-32 py-8">
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                    <ProductCard
                        link="/produtos/acoplamento-tipo-a"
                        name="Acoplamento Tipo A"
                        description="Alta rotação, absorção de vibrações, fácil uso."
                        image="/produtos/acoplamento-a.png"
                    />
                    <ProductCard
                        link="/produtos/acoplamento-tipo-br"
                        name="Acoplamento Tipo BR"
                        description="Baixa rotação, alto torque, saída de redutores."
                        image="/produtos/acoplamento-br.png"
                    />
                    <ProductCard
                        link="/produtos/acoplamento-tipo-abp"
                        name="Acoplamento Tipo ABP"
                        description="Versão bipartida, fácil manutenção, torque constante."
                        image="/produtos/acoplamento-abp.png"
                    />
                    <ProductCard
                        link="/produtos/acoplamento-tipo-apw"
                        name="Acoplamento Tipo APW"
                        description="Maior torque, reversível, aplicações industriais pesadas."
                        image="/produtos/acoplamento-apw.png"
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}