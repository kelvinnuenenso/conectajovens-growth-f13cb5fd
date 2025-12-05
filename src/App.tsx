import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import TargetAudience from './components/TargetAudience';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-yellow selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Benefits />
        <TargetAudience />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;