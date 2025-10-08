export interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  description: string;
}
export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'Pixel Catnip Toy',
    price: '$12.99',
    imageUrl: 'https://placekitten.com/400/400',
    description: 'A crunchy, pixel-perfect mouse filled with 100% organic catnip. Guaranteed to cause delightful glitches in your cat\'s behavior.',
  },
  {
    id: 'prod-2',
    name: '8-Bit Fish Treats',
    price: '$8.99',
    imageUrl: 'https://placekitten.com/401/401',
    description: 'Delicious, crunchy fish-shaped treats with a low-res aesthetic. Rendered with all-natural ingredients.',
  },
  {
    id: 'prod-3',
    name: 'CRT Cat Bed',
    price: '$79.99',
    imageUrl: 'https://placekitten.com/402/402',
    description: 'A cozy, screen-shaped bed that emits a faint, comforting hum. Features a scanline-textured cushion for maximum retro comfort.',
  },
  {
    id: 'prod-4',
    name: 'Neon Laser Pointer',
    price: '$19.99',
    imageUrl: 'https://placekitten.com/403/403',
    description: 'Chase the magenta dot! This high-powered laser pointer provides hours of entertainment in a stylish, nostalgic casing.',
  },
  {
    id: 'prod-5',
    name: 'Glitchy Wool Ball',
    price: '$9.99',
    imageUrl: 'https://placekitten.com/404/404',
    description: 'An unpredictable wool ball that zips and stutters around the room. Woven with cyan and magenta yarn for a vaporwave vibe.',
  },
  {
    id: 'prod-6',
    name: 'Vaporwave Cat Collar',
    price: '$24.99',
    imageUrl: 'https://placekitten.com/405/405',
    description: 'A stylish collar featuring palm trees and setting suns. Comes with a pixelated bell that jingles a synth-pop tune.',
  },
];