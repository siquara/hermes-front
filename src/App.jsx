
import { Body } from "./components/Body";
// import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import "./style/global.css";

export function App() {

  return (
    <div>
      <Header />
      <Hero />
      <Body />
      <Footer />
    </div>
  )
}

