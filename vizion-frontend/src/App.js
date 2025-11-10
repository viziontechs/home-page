import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
//import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroWithAnimation from "./components/HeroWithAnimations";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{
        minHeight: "100vh",
        background: "#000",
        color: theme.colors.text,
        fontFamily: "Arial, sans-serif"
      }}>
        <HeroWithAnimation />
        <Features />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
