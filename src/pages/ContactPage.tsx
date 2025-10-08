import { AppShell } from '@/components/layout/AppShell';
import { Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
const ContactHeader = () => (
  <header className="border-b-2 border-retro-magenta p-4 mb-8 text-center">
    <div className="flex items-center justify-center gap-4">
      <Mail className="w-10 h-10 text-retro-cyan animate-pulse" />
      <h1 className="text-5xl md:text-6xl font-pixel text-retro-magenta animate-glitch">
        Contact Us
      </h1>
    </div>
    <p className="font-pixel text-retro-cyan text-lg md:text-xl mt-2">
      Get in Touch with the CatoSphere
    </p>
  </header>
);
export function ContactPage() {
  return (
    <AppShell>
      <div className="border-2 border-retro-magenta p-4 sm:p-6 lg:p-8 rounded-sm shadow-[8px_8px_0px_0px_rgba(0,255,255,1)]">
        <ContactHeader />
        <div className="font-sans text-lg text-retro-cyan space-y-6 leading-relaxed text-center">
          <p>
            Have a question, a suggestion for a resource, or just want to share a cute cat picture? We'd love to hear from you!
          </p>
          <div className="space-y-4 inline-block text-left">
            <p>
              <strong>General Inquiries:</strong><br />
              <a href="mailto:info@catosphere.md" className="text-retro-magenta hover:text-retro-cyan underline">
                info@catosphere.md
              </a>
            </p>
            <p>
              <strong>Resource Submissions:</strong><br />
              <a href="mailto:resources@catosphere.md" className="text-retro-magenta hover:text-retro-cyan underline">
                resources@catosphere.md
              </a>
            </p>
          </div>
          <p className="pt-4">
            Please note that we are an information hub and not a direct animal rescue service. If you have an emergency, please contact your local animal control or one of the shelters listed on our resource page.
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