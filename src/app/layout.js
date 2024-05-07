import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext";  

const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }) {
  return (
    <html lang="en">
    <CartProvider>  
      <div className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </CartProvider>
     </html>
  );
}

export default RootLayout;