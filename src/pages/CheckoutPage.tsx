import { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { CreditCard, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link, Navigate } from 'react-router-dom';
import { useCartStore } from '@/stores/cartStore';
import { Product } from '@/content/products';
const CheckoutHeader = () => (
  <header className="border-b-2 border-retro-magenta p-4 mb-8 text-center">
    <div className="flex items-center justify-center gap-4">
      <CreditCard className="w-10 h-10 text-retro-cyan animate-pulse" />
      <h1 className="text-5xl md:text-6xl font-pixel text-retro-magenta animate-glitch">
        Checkout
      </h1>
    </div>
    <p className="font-pixel text-retro-cyan text-lg md:text-xl mt-2">
      Finalize your retro purchase
    </p>
  </header>
);
const OrderSummary = ({ products, totalPrice }: { products: Product[]; totalPrice: string }) => (
  <div className="w-full lg:w-1/3 border-2 border-retro-cyan rounded-sm p-6 bg-black bg-opacity-20">
    <h2 className="font-pixel text-3xl text-retro-magenta mb-4">Order Summary</h2>
    <div className="space-y-2 font-sans">
      {products.map((item, index) => (
        <div key={`${item.id}-${index}`} className="flex justify-between text-retro-cyan">
          <span>{item.name}</span>
          <span>{item.price}</span>
        </div>
      ))}
    </div>
    <div className="border-t-2 border-retro-magenta/50 my-4"></div>
    <div className="flex justify-between font-pixel text-2xl">
      <span className="text-retro-cyan">TOTAL</span>
      <span className="text-retro-magenta">${totalPrice}</span>
    </div>
  </div>
);
const CheckoutForm = ({ onPlaceOrder }: { onPlaceOrder: () => void }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPlaceOrder();
  };
  return (
    <form onSubmit={handleSubmit} className="w-full lg:w-2/3 font-pixel text-lg space-y-4">
      <div>
        <label htmlFor="fullName" className="block mb-2 text-retro-cyan">Full Name:</label>
        <input type="text" id="fullName" required className="w-full bg-retro-purple border-2 border-retro-cyan rounded-sm px-4 py-2 text-retro-cyan placeholder:text-retro-cyan/50 focus:outline-none focus:ring-2 focus:ring-retro-magenta" />
      </div>
      <div>
        <label htmlFor="address" className="block mb-2 text-retro-cyan">Address:</label>
        <input type="text" id="address" required className="w-full bg-retro-purple border-2 border-retro-cyan rounded-sm px-4 py-2 text-retro-cyan placeholder:text-retro-cyan/50 focus:outline-none focus:ring-2 focus:ring-retro-magenta" />
      </div>
      <div>
        <label htmlFor="cardNumber" className="block mb-2 text-retro-cyan">Card Number:</label>
        <input type="text" id="cardNumber" placeholder="xxxx-xxxx-xxxx-xxxx" required className="w-full bg-retro-purple border-2 border-retro-cyan rounded-sm px-4 py-2 text-retro-cyan placeholder:text-retro-cyan/50 focus:outline-none focus:ring-2 focus:ring-retro-magenta" />
      </div>
      <button type="submit" className="w-full font-pixel text-xl bg-retro-magenta text-retro-purple p-3 mt-4 rounded-sm hover:bg-retro-cyan hover:text-retro-purple active:translate-y-px active:translate-x-px">
        PLACE ORDER
      </button>
    </form>
  );
};
const OrderConfirmation = () => (
    <div className="text-center py-16">
        <CheckCircle className="w-24 h-24 text-retro-cyan mx-auto animate-pulse" />
        <p className="font-pixel text-4xl text-retro-magenta mt-8">ORDER PLACED!</p>
        <p className="text-retro-cyan mt-4 text-lg">Thank you for your purchase. Your retro gear is on its way!</p>
        <Link
            to="/"
            className="inline-flex mt-8 items-center gap-2 font-pixel text-xl text-retro-cyan hover:text-retro-magenta"
        >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
        </Link>
    </div>
);
export function CheckoutPage() {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const products = useCartStore((state) => state.products);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const clearCart = useCartStore((state) => state.clearCart);
  if (!isOrderPlaced && products.length === 0) {
    return <Navigate to="/store" replace />;
  }
  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    clearCart();
  };
  return (
    <AppShell>
      <div className="border-2 border-retro-magenta p-4 sm:p-6 lg:p-8 rounded-sm shadow-[8px_8px_0px_0px_rgba(0,255,255,1)]">
        <CheckoutHeader />
        {isOrderPlaced ? (
            <OrderConfirmation />
        ) : (
            <div className="flex flex-col lg:flex-row gap-8">
                <CheckoutForm onPlaceOrder={handlePlaceOrder} />
                <OrderSummary products={products} totalPrice={getTotalPrice()} />
            </div>
        )}
      </div>
    </AppShell>
  );
}