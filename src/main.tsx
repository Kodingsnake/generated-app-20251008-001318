import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { StorePage } from "@/pages/StorePage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { PetSpotlightPage } from "@/pages/PetSpotlightPage";
import { CartPage } from "@/pages/CartPage";
import { CheckoutPage } from "@/pages/CheckoutPage";
import { Toaster } from "@/components/ui/sonner";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/store",
    element: <StorePage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/spotlight",
    element: <PetSpotlightPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/cart",
    element: <CartPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
    errorElement: <RouteErrorBoundary />,
  },
]);
// Do not touch this code
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
      <Toaster
        theme="dark"
        toastOptions={{
          classNames: {
            toast: 'bg-retro-purple border-2 border-retro-magenta text-retro-cyan font-pixel text-lg',
            title: 'text-retro-magenta',
            description: 'text-retro-cyan',
          },
        }}
      />
    </ErrorBoundary>
  </StrictMode>,
)