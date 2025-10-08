export interface Article {
  id: string;
  title: string;
  source: string;
  url: string;
  summary: string;
}
export const wellnessArticles: Article[] = [
  {
    id: 'article-1',
    title: 'Feeding Your Cat: Know the Basics of Feline Nutrition',
    source: 'Cornell University College of Veterinary Medicine',
    url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feeding-your-cat',
    summary: 'A comprehensive guide covering the nutritional needs of cats, including the importance of protein, taurine, and water, and the differences between wet and dry food.',
  },
  {
    id: 'article-2',
    title: 'Keeping Your Cat Happy Indoors',
    source: 'PAWS',
    url: 'https://www.paws.org/resources/keeping-your-cat-happy-indoors/',
    summary: 'Discover essential tips for keeping indoor cats stimulated and content, from scratching posts and climbing spaces to interactive toys and window perches.',
  },
  {
    id: 'article-3',
    title: 'General Cat Care',
    source: 'ASPCA',
    url: 'https://www.aspca.org/pet-care/cat-care/general-cat-care',
    summary: 'An essential guide from the ASPCA covering grooming, housing, identification, and providing a safe environment for your feline friend.',
  },
  {
    id: 'article-4',
    title: 'Your Cat’s Vaccinations',
    source: 'VCA Animal Hospitals',
    url: 'https://vcahospitals.com/know-your-pet/vaccines-for-cats',
    summary: 'Learn about the core and non-core vaccines recommended for cats to protect them from various infectious diseases and ensure their long-term health.',
  },
];