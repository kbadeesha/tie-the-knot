// src/app/page.tsx
"use client";
import Footer from "./components/layout/Footer";
import Hero from "./components/Hero";
import LinkFooter from "./components/layout/LinkFooter";
import Header from "./components/layout/Header";

// Assuming you're using the '@/ alias for src directory

export default function Home() {
  return (
    <div>
      <Header /> {/* Include the Header component */}
      <Hero />
      {/* Rest of your page content will go here */}
      <LinkFooter />
      <Footer />
    </div>
  );
}
