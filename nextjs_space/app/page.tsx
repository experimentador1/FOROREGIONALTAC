import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { AxesSection } from '@/components/sections/axes-section';
import { ProgramSection } from '@/components/sections/program-section';
import { SpeakersSection } from '@/components/sections/speakers-section';
import { CTASection } from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AxesSection />
      <ProgramSection />
      <SpeakersSection />
      <CTASection />
      <Footer />
    </main>
  );
}
