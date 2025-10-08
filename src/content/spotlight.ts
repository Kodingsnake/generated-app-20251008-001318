export interface SpotlightPet {
  id: string;
  name: string;
  owner: string;
  imageUrl: string;
  quote: string;
}
export const featuredPets: SpotlightPet[] = [
  {
    id: 'spotlight-1',
    name: 'Glitch',
    owner: 'Ada L.',
    imageUrl: 'https://placekitten.com/g/408/408',
    quote: '"Glitch loves chasing laser dots and causing adorable system errors in our daily routines."',
  },
  {
    id: 'spotlight-2',
    name: 'Pixel',
    owner: 'Charles B.',
    imageUrl: 'https://placekitten.com/g/409/409',
    quote: '"Pixel has a low-res meow but high-res cuddles. He\'s the best co-processor I could ask for."',
  },
  {
    id: 'spotlight-3',
    name: 'Synth',
    owner: 'Grace H.',
    imageUrl: 'https://placekitten.com/g/410/410',
    quote: '"Synth enjoys napping on warm keyboards and listening to vaporwave. Her purr is pure analog warmth."',
  },
];