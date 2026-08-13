import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Background } from '@/components/Background';
import { CustomCursor } from '@/components/CustomCursor';
import { MouseGlow } from '@/components/MouseGlow';
import { ScrollProgress } from '@/components/ScrollProgress';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Achievements } from '@/components/sections/Achievements';
import { Certificates } from '@/components/sections/Certificates';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Background />
      <MouseGlow />

      <AnimatePresence>
        {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
