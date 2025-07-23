import Hero from '@/pages/HomePage/Hero';
import Features from '@/pages/HomePage/Features';
import HowItWorks from '@/pages/HomePage/HowItWorks';
import CTA from '@/pages/HomePage/CTA';
import Pricing from '@/pages/HomePage/Pricing';
import Testimonial from '@/pages/HomePage/Testimonial';
import Contact from '@/pages/HomePage/Contact';
import Navbar from '@/components/Navbar';
import FAQ from '@/pages/HomePage/FAQ';
import Footer from '@/pages/HomePage/Footer';
import PreHero from '@/pages/PreLaunch/PreHero';
import PreCTA from '@/pages/PreLaunch/PreCTA';
import PreFAQ from '@/pages/PreLaunch/PreFAQ';
import PrePricing from '@/pages/PreLaunch/PrePricing';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <PreHero />
      <section id='features'>
        <Features />
      </section>
      <section id='how-it-works'>
        <HowItWorks />
      </section>
      <section id='pricing'>
        <PrePricing />
      </section>
      <section id='faq'>
        <PreFAQ />
      </section>
      {/* <section id='testimonial'>
        <Testimonial />
      </section> */}
      <section id='cta'>
        <PreCTA />
      </section>
      <section id='contact-form'>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
