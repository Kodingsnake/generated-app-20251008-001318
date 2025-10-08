import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Search, ChevronsUpDown } from 'lucide-react';
import { products, Product } from '@/content/products';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { AppShell } from '@/components/layout/AppShell';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc' | 'default';
const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'default', label: 'Default Sorting' },
  { value: 'name-asc', label: 'Name: A to Z' },
  { value: 'name-desc', label: 'Name: Z to A' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];
const StoreHeader = () => (
  <header className="border-b-2 border-retro-magenta p-4 mb-8 text-center">
    <div className="flex items-center justify-center gap-4">
      <ShoppingCart className="w-10 h-10 text-retro-cyan animate-pulse" />
      <h1 className="text-5xl md:text-6xl font-pixel text-retro-magenta animate-glitch">
        CatoSphere Store
      </h1>
    </div>
    <p className="font-pixel text-retro-cyan text-lg md:text-xl mt-2">
      Retro Gear for Modern Cats
    </p>
  </header>
);
const ProductCard = ({ product }: { product: Product }) => {
  const addProduct = useCartStore((state) => state.addProduct);
  const handleAddToCart = () => {
    addProduct(product);
    toast.success(`${product.name} added to cart!`);
  };
  return (
    <div className="border-2 border-retro-cyan rounded-sm bg-black bg-opacity-20 p-4 flex flex-col">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-sm border-2 border-retro-magenta filter grayscale-[50%] sepia-[30%]"
      />
      <h3 className="font-pixel text-2xl text-retro-magenta mt-4">{product.name}</h3>
      <p className="font-pixel text-3xl text-retro-cyan my-2">{product.price}</p>
      <p className="font-sans text-base text-gray-400 flex-grow mb-4">{product.description}</p>
      <button
        onClick={handleAddToCart}
        className="w-full font-pixel text-xl bg-retro-magenta text-retro-purple p-2 rounded-sm hover:bg-retro-cyan hover:text-retro-purple active:translate-y-px active:translate-x-px">
        ADD TO CART
      </button>
    </div>
  );
};
const CartLink = () => {
  const cartItemsCount = useCartStore((state) => state.products.length);
  return (
    <Link to="/cart" className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 text-retro-cyan hover:text-retro-magenta transition-colors z-10">
      <div className="relative">
        <ShoppingCart className="w-8 h-8" />
        {cartItemsCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-retro-magenta text-retro-purple text-xs font-pixel font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-retro-purple">
            {cartItemsCount}
          </span>
        )}
      </div>
    </Link>
  );
};
export function StorePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('default');
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(products);
  const selectedSortLabel = useMemo(() => {
    return sortOptions.find(opt => opt.value === sortOption)?.label || 'Default Sorting';
  }, [sortOption]);
  useEffect(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    const filtered = products.filter(item =>
      item.name.toLowerCase().includes(lowercasedFilter)
    );
    const sorted = [...filtered].sort((a, b) => {
      switch (sortOption) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc':
          return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
        case 'price-desc':
          return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
        case 'default':
        default:
          return 0;
      }
    });
    setDisplayedProducts(sorted);
  }, [searchTerm, sortOption]);
  return (
    <AppShell>
      <div className="relative border-2 border-retro-magenta p-4 sm:p-6 lg:p-8 rounded-sm shadow-[8px_8px_0px_0px_rgba(0,255,255,1)]">
        <CartLink />
        <StoreHeader />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-pixel text-xl text-retro-cyan hover:text-retro-magenta"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Resource Hub
          </Link>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-retro-magenta" />
              <input
                type="text"
                placeholder="Filter products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 bg-retro-purple border-2 border-retro-cyan rounded-sm pl-10 pr-4 py-2 font-pixel text-lg text-retro-cyan placeholder:text-retro-cyan/50 focus:outline-none focus:ring-2 focus:ring-retro-magenta"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full sm:w-[200px] justify-between font-pixel text-lg bg-retro-purple border-2 border-retro-cyan text-retro-cyan hover:bg-retro-cyan hover:text-retro-purple rounded-sm"
                >
                  {selectedSortLabel}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px] bg-retro-purple border-retro-magenta font-pixel text-retro-cyan">
                {sortOptions.map(option => (
                  <DropdownMenuItem
                    key={option.value}
                    onSelect={() => setSortOption(option.value)}
                    className="cursor-pointer hover:!bg-retro-magenta hover:!text-retro-purple"
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="font-pixel text-2xl text-retro-magenta">NO PRODUCTS FOUND</p>
            <p className="text-retro-cyan mt-2">Try a different search term, cool cat.</p>
          </div>
        )}
      </div>
    </AppShell>
  );
}