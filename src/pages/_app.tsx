import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { CartProvider } from "./components/context/CartContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
       <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      <CartProvider>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </>
  );
}
