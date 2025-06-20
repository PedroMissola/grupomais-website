import Image from "next/image";
import HeroSlider from "./components/home/slider";
import AboutSection from "./components/home/about";
import ProductsSection from "./components/home/products";
import ContactSection from "./components/home/contact";
import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ProductsSection />
      <Footer />
    </>
  );
}
