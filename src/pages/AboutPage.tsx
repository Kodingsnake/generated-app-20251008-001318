import { AppShell } from '@/components/layout/AppShell';
import { Cat, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
const AboutHeader = () => (
  <header className="border-b-2 border-retro-magenta p-4 mb-8 text-center">
    <div className="flex items-center justify-center gap-4">
      <Cat className="w-10 h-10 text-retro-cyan animate-pulse" />
      <h1 className="text-5xl md:text-6xl font-pixel text-retro-magenta animate-glitch">
        About Us
      </h1>
      <Cat className="w-10 h-10 text-retro-cyan animate-pulse" style={{ transform: 'scaleX(-1)' }} />
    </div>
    <p className="font-pixel text-retro-cyan text-lg md:text-xl mt-2">
      Our Mission for Maryland's Felines
    </p>
  </header>
);
export function AboutPage() {
  return (
    <AppShell>
      <div className="border-2 border-retro-magenta p-4 sm:p-6 lg:p-8 rounded-sm shadow-[8px_8px_0px_0px_rgba(0,255,255,1)]">
        <AboutHeader />
        <div className="font-sans text-lg text-retro-cyan space-y-6 leading-relaxed">
          <p>
            <span className="font-pixel text-retro-magenta text-2xl">CatoSphere MD</span> was born from a simple idea: to create a centralized, easy-to-navigate hub for cat welfare resources in Maryland. We noticed that finding reliable information on rehoming, spaying, neutering, and general wellness was often scattered across dozens of websites, making it difficult for caring pet owners and community members to get the help they need.
          </p>
          <p>
            Our mission is to bridge that gap. We provide a curated, comprehensive list of verified services and educational articles to support the health and happiness of cats across the state. From Baltimore City to Cumberland, we believe every cat deserves a safe home and proper care.
          </p>
          <p>
            The retro aesthetic isn't just for fun—it's a nod to the early days of the internet when information was direct and communities were built around shared passions. We aim to bring that same spirit of straightforward, community-focused support to the world of animal welfare.
          </p>
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-pixel text-xl text-retro-cyan hover:text-retro-magenta"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Resource Hub
          </Link>
        </div>
      </div>
    </AppShell>
  );
}