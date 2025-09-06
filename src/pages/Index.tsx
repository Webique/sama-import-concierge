import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Mission } from '@/components/Mission';
import { Values } from '@/components/Values';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Values />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
