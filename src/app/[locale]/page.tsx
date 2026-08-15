import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import KeyAdvantages from "@/components/KeyAdvantages";
import Portfolio from "@/components/Portfolio";
import TrustedBy from "@/components/TrustedBy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-light">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <KeyAdvantages />
        <Portfolio />
        <TrustedBy />
      </main>
      <Footer />
    </div>
  );
}
