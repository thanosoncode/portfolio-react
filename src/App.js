import { ThemeProvider } from "styled-components";
import Hero2 from "./components/Hero2";
import About2 from "./components/About2";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GlobalStyles from "./components/styles/Global";
import Footer from "./components/Footer";
import { useGlobalContext } from "./context";

function App() {
  const { dayTheme, nightTheme, nightMode } = useGlobalContext();
  return (
    <ThemeProvider theme={nightMode ? nightTheme : dayTheme}>
      <>
        <GlobalStyles />
        <Hero2 />
        {/* <Navbar /> */}
        <About2 />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
