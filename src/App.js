import { ThemeProvider } from "styled-components";
import { AppContainer } from "./components/styles/App.styled";
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
        <AppContainer>
          <Navbar />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </AppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
