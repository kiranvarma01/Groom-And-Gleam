
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      <Navbar />
      {children}
    </div>
  );
}

export default RootLayout;
