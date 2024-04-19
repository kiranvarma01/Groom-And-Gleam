
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }) {
  return (
    
    <div className={inter.className}>
      <Navbar />
      {children}
      <Footer/>
    </div>
    
  );
}

export default RootLayout;
