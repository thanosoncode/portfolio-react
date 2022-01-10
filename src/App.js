import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GlobalStyles from "./components/styles/Global";
import Footer from "./components/Footer";
import { useGlobalContext } from "./components/Context";

function App() {
  const { dayTheme, nightTheme, nightMode } = useGlobalContext();
  return (
    <ThemeProvider theme={nightMode ? nightTheme : dayTheme}>
      <>
        <GlobalStyles />

        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
