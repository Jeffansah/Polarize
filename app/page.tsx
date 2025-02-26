import Cta from "./components/cta";
import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Cta />
    </div>
  );
}
