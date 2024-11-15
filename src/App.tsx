import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Reviews from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />;
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
