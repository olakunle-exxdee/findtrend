import React from "react";
import Companies from "./components/Companies";
import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Open from "./components/Open";
import Plan from "./components/Plan";
import Platform from "./components/Platform";

function App() {
  return (
    <div className="bg-dark">
      <Container>
        <Header />
        <Hero />
        <Open />
        <Companies />
        <Platform />
        <Plan />
      </Container>
    </div>
  );
}

export default App;
