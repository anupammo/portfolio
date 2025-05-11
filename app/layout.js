"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "./globals.css"; // Ensure global styles are applied

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js"); // Load Bootstrap JS
  }, []);

  return (
    <html lang="en">
      <head>
        <title>My Next.js Site</title>
        <meta
          name="description"
          content="A modern Next.js website with reusable components"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
