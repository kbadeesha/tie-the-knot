// src/app/page.tsx
"use client";
import Header from "./components/layout/Header";
import Hero from "./components/features/Hero/Hero";

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
