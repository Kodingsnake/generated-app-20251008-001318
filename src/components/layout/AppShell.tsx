import { Heart, Mail, Info, Home, Camera, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/stores/cartStore';
const RetroFooter = () => {
  const cartItemsCount = useCartStore((state) => state.products.length);
  return (
    <footer className="border-t-2 border-retro-magenta mt-12 py-6 text-center font-pixel">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center justify-center gap-2 text-retro-cyan">
          Built with <Heart className="w-4 h-4 text-retro-magenta" /> at Cloudflare
        </div>
        <div className="flex items-center gap-4 text-lg flex-wrap justify-center">
          <Link to="/" className="text-retro-cyan hover:text-retro-magenta flex items-center gap-1">
            <Home className="w-4 h-4" /> Home
          </Link>
          <span className="text-retro-magenta">|</span>
          <Link to="/spotlight" className="text-retro-cyan hover:text-retro-magenta flex items-center gap-1">
            <Camera className="w-4 h-4" /> Spotlight
          </Link>
          <span className="text-retro-magenta">|</span>
          <Link to="/about" className="text-retro-cyan hover:text-retro-magenta flex items-center gap-1">
            <Info className="w-4 h-4" /> About
          </Link>
          <span className="text-retro-magenta">|</span>
          <Link to="/contact" className="text-retro-cyan hover:text-retro-magenta flex items-center gap-1">
            <Mail className="w-4 h-4" /> Contact
          </Link>
          <span className="text-retro-magenta">|</span>
          <Link to="/cart" className="text-retro-cyan hover:text-retro-magenta flex items-center gap-1 relative">
            <ShoppingCart className="w-4 h-4" /> Cart
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-retro-magenta text-retro-purple text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </footer>
  );
};
export const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-retro-purple text-retro-cyan font-sans relative">
      <main className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
      <RetroFooter />
    </div>
  );
};