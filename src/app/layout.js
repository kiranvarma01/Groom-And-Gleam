import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext";  // Import the CartProvider

const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }) {
  return (
    <CartProvider>  {/* Wrap your layout in the CartProvider */}
      <div className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </CartProvider>
  );
}

export default RootLayout;
