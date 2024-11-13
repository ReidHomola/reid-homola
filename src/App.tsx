import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Review from "./components/Review";

const App = () => {
  return (
    <>
      <Header />;
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Review />
      </main>
    </>
  );
};

export default App;
