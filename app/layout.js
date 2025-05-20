"use client";
// import Head from 'next/head';

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
        {/* <meta name="description" content="Anupam Mondal for website, SEO, web design, development. Boost Your Business with Expert Web Design, Development, &amp; SEO Services by Anupam Mondal."></meta> */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Anupam Mondal for website, SEO, web design, development",
            alternateName: [
              "Anupam Mondal",
              "Anupam",
              "Anupam M",
              "anupammo",
              "Web Developer Anupam",
              "Web Designer Anupam",
              "SEO Strategiest Anupam",
              "Website Consultant Anupam",
            ],
            url: "https://anupammondal.in/",
            image: [
              "https://anupammondal.in/image/profile/anupam-mondal-freelancer.webp",
              "https://anupammondal.in/image/homepage/Online%20world-bro.svg",
            ],
            sameAs: [
              "https://www.facebook.com/anupammondal.in/",
              "https://youtube.com/@anupamschannel?si=NIpojPBkv_ls5y1J",
              "https://g.co/kgs/BgZkShi",
              "https://www.linkedin.com/company/anupammondal",
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Anupam Mondal",
            url: "https://anupammondal.in/",
            logo: "https://anupammondal.in/image/profile/anupam-mondal-freelancer.webp",
            sameAs: [
              "https://www.facebook.com/anupammondal.in/",
              "https://youtube.com/@anupamschannel",
              "https://g.co/kgs/BgZkShi",
              "https://www.linkedin.com/company/anupammondal",
            ],
            founder: {
              "@type": "Person",
              name: "Anupam Mondal",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "support@anupammondal.in",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Review",
            itemReviewed: {
              "@type": "LocalBusiness",
              name: "Anupam Mondal Web Design, Development & SEO Services",
              image:
                "https://anupammondal.in/image/profile/anupam-mondal-freelancer.webp",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Metiari, Sonarpur",
                addressLocality: "South 24 Parganas",
                addressRegion: "West Bengal",
                postalCode: "743330",
                addressCountry: "IN",
              },
              areaServed: "Worldwide",
              telephone: "+91-9474460058",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: 5,
              bestRating: 5,
            },
            author: {
              "@type": "Person",
              name: "Azizi Jazmi",
            },
            publisher: {
              "@type": "Organization",
              name: "Google",
            },
          })}
        </script>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="p:domain_verify"
          content="0ba757c94f2195e912a734bc0d6be2fd"
        />
      </head>
      <body className="lead">
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
