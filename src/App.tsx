import Menu from "./components/Menu";
import HeroSection from "./sections/HeroSection";

import Footer from "./sections/Footer";
import About from "./sections/About";

function App() {
  return (
    <div className="relative">
      {/* Menu */}
      <Menu />

      {/* Hero Section */}
      <HeroSection />

      {/* Test Section */}
      <About />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
