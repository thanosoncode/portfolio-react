import { useRef, useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoSettings } from "react-icons/go";
import {
  StyledNavbar,
  Image,
  StyledSocials,
  Links,
  Modal,
  SwitchContainer,
  Letter,
  Triangle,
  MobileMenu,
  Container,
} from "./styles/Navbar.styled.js";
import logo from "../assets/images/profile.png";
import { useGlobalContext } from "../context.js";

const Navbar = () => {
  const { nightMode, setNightMode, index, setIndex, setOverflow } =
    useGlobalContext();

  const settings = useRef();
  const modal = useRef();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [fromLeft, setFromLeft] = useState(null);
  const [fromTop, setFromTop] = useState(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const getSettingsCoords = () => {
    const distanceFromLeft =
      settings.current.getBoundingClientRect().x - 155 + "px";
    const distanceFromTop =
      settings.current.getBoundingClientRect().y + 40 + "px";

    setFromLeft(distanceFromLeft);
    setFromTop(distanceFromTop);
  };

  const handleSettingsClick = () => {
    setIsSettingsOpen(!isSettingsOpen);
    getSettingsCoords();
  };

  const handleModeClick = (e) => {
    setNightMode(!nightMode);
  };

  const handleFontSizeClick = () => {
    if (index > 1) {
      setIndex(0);
    } else {
      setIndex((prevValue) => prevValue + 1);
    }
  };

  useEffect(() => {
    const closeSettings = () => setIsSettingsOpen(false);
    if (isSettingsOpen && !isMouseOver) {
      document.addEventListener("click", closeSettings);
    }

    return () => document.removeEventListener("click", closeSettings);
  }, [isSettingsOpen, isMouseOver]);

  useEffect(() => {
    getSettingsCoords();
  }, [index]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setOverflow("auto");
  };

  return (
    <Container>
      <StyledNavbar>
        <div>
          <Image>
            <img src={logo} alt="" />
          </Image>
          <p></p>
          <StyledSocials>
            <li>
              <a
                href="https://github.com/thanosoncode?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/thanos-chrysanthopoulos/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
          </StyledSocials>
        </div>
        <Links>
          <span ref={settings} onClick={handleSettingsClick}>
            <GoSettings />
          </span>
          <span>
            <a href="#contact">Contact me</a>
          </span>
        </Links>

        <MobileMenu
          visibility={isMenuOpen ? "visible" : "hidden"}
          opacity={isMenuOpen ? "1" : "0"}
          z={isMenuOpen ? "5" : "-5"}
        >
          <li onClick={handleLinkClick}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={handleLinkClick}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={handleLinkClick}>
            <a href="#contact">Contact</a>
          </li>
        </MobileMenu>

        <Modal
          visibility={isSettingsOpen ? "visible" : "hidden"}
          opacity={isSettingsOpen ? "1" : "0"}
          left={fromLeft}
          top={fromTop}
          ref={modal}
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
        >
          <section>
            <h5>Night Mode</h5>
            <SwitchContainer
              color={nightMode ? "#006AFF" : "#777"}
              move={nightMode ? "translateX(100%)" : "translateX(0)"}
              onClick={handleModeClick}
            >
              <div></div>
            </SwitchContainer>
          </section>
          <section>
            <h5>Text size</h5>
            <Letter onClick={handleFontSizeClick}>A</Letter>
          </section>
          <Triangle></Triangle>
        </Modal>
      </StyledNavbar>
    </Container>
  );
};

export default Navbar;
