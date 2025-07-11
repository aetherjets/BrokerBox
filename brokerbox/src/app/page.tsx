import Hero from '@/pages/HomePage/Hero';
import Features from '@/pages/HomePage/Features';
import Stats from '@/pages/HomePage/Stats';
import HowItWorks from '@/pages/HomePage/HowItWorks';
import CTA from '@/pages/HomePage/CTA';
import Pricing from '@/pages/HomePage/Pricing';
import FAQ from '@/pages/HomePage/Faq';
import Testimonial from '@/pages/HomePage/Testimonial';
import Contact from '@/pages/HomePage/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
    </div>
  );
}
