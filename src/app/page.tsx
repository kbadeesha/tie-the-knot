// src/app/page.tsx
"use client";
import Footer from "./components/layout/Footer";
import LinkFooter from "./components/layout/LinkFooter";
import Header from "./components/layout/Header";
import Hero from "./components/features/Hero/Hero";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lime } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
  colorSchemes: {
    dark: true,
  },
});
// Assuming you're using the '@/ alias for src directory

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Header /> {/* Include the Header component */}
        <Hero />
        {/* Rest of your page content will go here */}
        <LinkFooter />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
