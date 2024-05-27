
import { useState } from "react";
import { Body } from "./components/Body";
// import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import "./style/global.css";

export function App() {

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Header />
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Body searchTerm={searchTerm}/>
      <Footer />
    </div>
  )
}

