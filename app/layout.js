import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" reverseOrder={false} />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

