import { AppShell } from '@/components/layout/AppShell';
import { ShoppingCart, ArrowLeft, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/stores/cartStore';
import { Product } from '@/content/products';
const CartHeader = () => (
  <header className="border-b-2 border-retro-magenta p-4 mb-8 text-center">
    <div className="flex items-center justify-center gap-4">
      <ShoppingCart className="w-10 h-10 text-retro-cyan animate-pulse" />
      <h1 className="text-5xl md:text-6xl font-pixel text-retro-magenta animate-glitch">
        Your Cart
      </h1>
    </div>
    <p className="font-pixel text-retro-cyan text-lg md:text-xl mt-2">
      Review your retro haul
    </p>
  </header>
);
const CartItem = ({ item, onRemove }: { item: Product; onRemove: () => void }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-retro-magenta/50 py-4">
    <div className="flex items-center gap-4">
      <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-sm border-2 border-retro-cyan" />
      <div>
        <h3 className="font-pixel text-2xl text-retro-magenta">{item.name}</h3>
        <p className="font-sans text-base text-gray-400 hidden sm:block">{item.description}</p>
      </div>
    </div>
    <div className="flex items-center gap-4 self-end sm:self-center">
      <p className="font-pixel text-2xl text-retro-cyan w-24 text-right">{item.price}</p>
      <button onClick={onRemove} className="text-retro-cyan hover:text-retro-magenta p-2">
        <Trash2 className="w-6 h-6" />
      </button>
    </div>
  </div>
);
export function CartPage() {
  const products = useCartStore((state) => state.products);
  const removeProduct = useCartStore((state) => state.removeProduct);
  const totalPrice = useCartStore((state) => state.getTotalPrice)();
  return (
    <AppShell>
      <div className="border-2 border-retro-magenta p-4 sm:p-6 lg:p-8 rounded-sm shadow-[8px_8px_0px_0px_rgba(0,255,255,1)]">
        <CartHeader />
        {products.length > 0 ? (
          <div>
            <div className="space-y-4">
              {products.map((item, index) => (
                <CartItem key={`${item.id}-${index}`} item={item} onRemove={() => removeProduct(item.id)} />
              ))}
            </div>
            <div className="mt-8 flex justify-end items-center font-pixel text-3xl">
              <span className="text-retro-cyan">TOTAL:</span>
              <span className="text-retro-magenta ml-4">${totalPrice}</span>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link
                to="/store"
                className="inline-flex items-center gap-2 font-pixel text-xl text-retro-cyan hover:text-retro-magenta"
              >
                <ArrowLeft className="w-5 h-5" />
                Continue Shopping
              </Link>
              <Link
                to="/checkout"
                className="w-full sm:w-auto text-center font-pixel text-xl bg-retro-magenta text-retro-purple p-3 rounded-sm hover:bg-retro-cyan hover:text-retro-purple active:translate-y-px active:translate-x-px"
              >
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="font-pixel text-3xl text-retro-magenta">YOUR CART IS EMPTY</p>
            <p className="text-retro-cyan mt-4 text-lg">Looks like you haven't added any retro gear yet.</p>
            <Link
              to="/store"
              className="inline-flex mt-8 items-center gap-2 font-pixel text-xl text-retro-cyan hover:text-retro-magenta"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to the Store
            </Link>
          </div>
        )}
      </div>
    </AppShell>
  );
}