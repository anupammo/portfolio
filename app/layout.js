import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./globals.css"; // Ensure global styles are applied
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "My Next.js Site",
  description: "A modern Next.js website with reusable components",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
