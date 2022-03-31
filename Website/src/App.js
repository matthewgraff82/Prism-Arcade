import { Container } from "react-bootstrap";

// home page componets

import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import TheCollection from "./Components/TheCollection";
import RoadMap from "./Components/RoadMap";
import Team from "./Components/Team";
import FAQ from "./Components/Faq";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <HeroSection />
        <About />
        <TheCollection />
        <RoadMap />
        <Team />
        <FAQ />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
