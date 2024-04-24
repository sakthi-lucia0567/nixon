import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Navbar />
      <div className="mt-20">
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
