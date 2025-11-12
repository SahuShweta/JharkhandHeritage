import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CultureSection from "./components/CultureSection";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />
      <Hero />
      <CultureSection />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;