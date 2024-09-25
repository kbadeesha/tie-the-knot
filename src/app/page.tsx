// src/app/page.tsx
"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";

// Assuming you're using the '@/ alias for src directory

export default function Home() {
  return (
    <div>
      <Header /> {/* Include the Header component */}
      <Hero />
      {/* Rest of your page content will go here */}
    </div>
  );
}
