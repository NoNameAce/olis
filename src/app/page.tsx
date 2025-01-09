import AboutUs from "@/components/about-us";
import Advantages from "@/components/advantages";
import ComplexSolutions from "@/components/complex-solutions";
import ContactForm from "@/components/contacts-form";
import Equipment from "@/components/equipment";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LatestNews from "@/components/latest-news";
import Partners from "@/components/partners";
import Services from "@/components/services";
import WorldMap from "@/components/world-map";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Equipment />
        <ComplexSolutions />
        <Services />
        <Advantages />
        <AboutUs />
        <WorldMap />
        <Partners />
        <ContactForm />
        <LatestNews />
      </main>
      <Footer />
    </div>
  )
}

