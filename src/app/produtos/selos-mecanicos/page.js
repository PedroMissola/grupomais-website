import Header from "@/app/components/header";
import ProductCard from "@/app/components/ui/card";
import Footer from "@/app/components/ui/footer";
import Navbar from "@/app/components/ui/navbar";

export default function SelesMecanicosPage() {
    return (
        <>
            <Navbar />
            <Header
                name="Selos Mecanicos"
                description="São chamados de componentes, por possuírem conjunto rotativo separado do estacionário, necessitando ajustes da unidade de compressão do selo mecânico e maiores cuidados na montagem"
            />
            <main className="flex flex-col gap-8 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-32 py-8">
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ProductCard
                        link="/produtos/selo-mecanico-f02-f12-f13"
                        name="Modelo (F02 / F12 / F13)"
                        description="Fole de borracha, unidirecional, com mola paralela."
                        image="selos-f02-f12-f13.jpg"
                    />
                    <ProductCard
                        link="/produtos/selo-mecanico-modelo-c"
                        name="Modelo C"
                        description="Mola cônica, sentido rotacional definido, simples vedação."
                        image="selos-modelo-c.jpg"
                    />
                    <ProductCard
                        link="/produtos/selo-mecanico-p21"
                        name="Modelo P21"
                        description="Fole de borracha, mola paralela, versátil e simples."
                        image="selos-p21.jpg"
                    />
                    <ProductCard
                        link="/produtos/selo-mecanico-mm"
                        name="Modelo MM"
                        description="Múltiplas molas, vedação robusta, uso independente."
                        image="selos-mm.jpg"
                    />
                    <ProductCard
                        link="/produtos/selo-mecanico-fgt05"
                        name="Modelo FGT05"
                        description="Para bombas submersas, vedação versátil e resistente."
                        image="selos-fgt05.jpg"
                    />
                    <ProductCard
                        link="/produtos/selo-mecanico-6f02ae"
                        name="Modelo 6-F02AE"
                        description="Fole de borracha, uso em autoescorvantes industriais."
                        image="selos-6-f02ae.jpg"
                    />
                    <ProductCard
                        link="/produtos/selo-mecanico-mmp"
                        name="Modelo MMP"
                        description="Balanceado, múltiplas molas protegidas, alta performance."
                        image="selos-mmp.jpg"
                    />
                    <ProductCard
                        link="/produtos/selo-cartucho-mtec-simples"
                        name="MTEC - Simples"
                        description="Cartucho simples, fácil instalação, múltiplas molas protegidas."
                        image="selos-mtec-simples.jpg"
                    />
                    <ProductCard
                        link="/produtos/selo-cartucho-mtec-duplo"
                        name="MTEC - Duplo"
                        description="Cartucho duplo, dupla vedação, montagem simplificada."
                        image="selos-mtec-duplo.jpg"
                    />
                    <ProductCard
                        link="/produtos/selo-cartucho-cfm"
                        name="CFM (Simples ou Duplo)"
                        description="Fole metálico, alta temperatura, vedação robusta e segura."
                        image="selos-cfm.jpg"
                    />
                    <ProductCard
                        link="/produtos/selo-cartucho-mtec-reator"
                        name="MTEC R ESP (Simples/Duplo)"
                        description="Para reatores e agitadores, com ou sem rolamento."
                        image="selos-mtec-r-esp.jpg"
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}