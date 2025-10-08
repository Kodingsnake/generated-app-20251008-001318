import { Cat, Home, Scissors, ShoppingCart, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { rehomingResources, spayNeuterServices, Resource } from '@/content/resources';
import { wellnessArticles, Article } from '@/content/articles';
import { AppShell } from '@/components/layout/AppShell';
const RetroHeader = () => (
  <header className="border-b-2 border-retro-magenta p-4 text-center">
    <div className="flex items-center justify-center gap-4">
      <Cat className="w-10 h-10 text-retro-cyan animate-pulse" />
      <h1 className="text-5xl md:text-6xl font-pixel text-retro-magenta animate-glitch">
        CatoSphere MD
      </h1>
      <Cat className="w-10 h-10 text-retro-cyan animate-pulse" style={{ transform: 'scaleX(-1)' }} />
    </div>
    <p className="font-pixel text-retro-cyan text-lg md:text-xl mt-2">
      A Retro Resource Hub for Maryland Felines
    </p>
  </header>
);
const StoreLink = () => (
  <div className="my-8 text-center">
    <Link
      to="/store"
      className="inline-flex items-center gap-3 font-pixel text-2xl bg-retro-purple border-2 border-retro-cyan p-3 rounded-sm hover:bg-retro-cyan hover:text-retro-purple active:translate-y-px active:translate-x-px transition-none"
    >
      <ShoppingCart className="w-6 h-6" />
      Visit the CatoSphere Store
    </Link>
  </div>
);
const ResourceCard = ({ resource }: { resource: Resource }) => (
  <div className="text-retro-cyan font-sans text-lg space-y-2 p-4">
    <p><strong>Organization:</strong> {resource.organization}</p>
    <p><strong>County:</strong> <span className="text-retro-magenta">{resource.county}</span></p>
    <p><strong>Address:</strong> {resource.address}</p>
    <p><strong>Phone:</strong> {resource.phone}</p>
    <p>
      <strong>Website:</strong>{' '}
      <a
        href={resource.website}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-retro-magenta hover:text-retro-cyan transition-colors"
      >
        Visit Site
      </a>
    </p>
    <p className="pt-2 text-base text-gray-400">{resource.description}</p>
  </div>
);
const ArticleCard = ({ article }: { article: Article }) => (
  <div className="text-retro-cyan font-sans text-lg space-y-2 p-4">
    <p><strong>Source:</strong> {article.source}</p>
    <p>
      <strong>Link:</strong>{' '}
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-retro-magenta hover:text-retro-cyan transition-colors"
      >
        Read Full Article
      </a>
    </p>
    <p className="pt-2 text-base text-gray-400">{article.summary}</p>
  </div>
);
const ResourceSection = ({ title, icon, resources }: { title: string; icon: React.ReactNode; resources: Resource[] }) => (
  <section className="mt-12 mb-6">
    <h2 className="text-3xl md:text-4xl font-pixel text-retro-cyan mb-6 flex items-center gap-3">
      {icon}
      {title}
    </h2>
    <Accordion type="single" collapsible className="w-full space-y-4">
      {resources.map((resource) => (
        <AccordionItem
          key={resource.id}
          value={resource.id}
          className="border-2 border-retro-magenta rounded-sm bg-black bg-opacity-20"
        >
          <AccordionTrigger className="font-pixel text-2xl text-retro-magenta hover:text-retro-cyan p-4 text-left">
            {resource.title}
          </AccordionTrigger>
          <AccordionContent>
            <ResourceCard resource={resource} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);
const ArticleSection = ({ title, icon, articles }: { title: string; icon: React.ReactNode; articles: Article[] }) => (
  <section className="mt-12 mb-6">
    <h2 className="text-3xl md:text-4xl font-pixel text-retro-cyan mb-6 flex items-center gap-3">
      {icon}
      {title}
    </h2>
    <Accordion type="single" collapsible className="w-full space-y-4">
      {articles.map((article) => (
        <AccordionItem
          key={article.id}
          value={article.id}
          className="border-2 border-retro-magenta rounded-sm bg-black bg-opacity-20"
        >
          <AccordionTrigger className="font-pixel text-2xl text-retro-magenta hover:text-retro-cyan p-4 text-left">
            {article.title}
          </AccordionTrigger>
          <AccordionContent>
            <ArticleCard article={article} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);
export function HomePage() {
  return (
    <AppShell>
      <div className="border-2 border-retro-magenta p-4 sm:p-6 lg:p-8 rounded-sm shadow-[8px_8px_0px_0px_rgba(255,0,157,1)]">
        <RetroHeader />
        <StoreLink />
        <ResourceSection
          title="Rehoming Resources"
          icon={<Home className="w-8 h-8" />}
          resources={rehomingResources}
        />
        <ResourceSection
          title="Spay & Neuter Services"
          icon={<Scissors className="w-8 h-8" />}
          resources={spayNeuterServices}
        />
        <ArticleSection
          title="Wellness & Diet Articles"
          icon={<BookOpen className="w-8 h-8" />}
          articles={wellnessArticles}
        />
      </div>
    </AppShell>
  );
}