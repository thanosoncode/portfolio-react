import { useRef, useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoSettings } from "react-icons/go";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
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
  Hamburger,
} from "./styles/Navbar.styled.js";
import logo from "../assets/profile.png";
import { useGlobalContext } from "./Context.js";

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

  // const [pixels, setPixels] = useState();

  // useEffect(() => {
  //   const getWidth = () => setPixels(window.innerWidth);

  //   window.addEventListener("resize", getWidth);

  //   return () => window.removeEventListener("resize", getWidth);
  // }, [pixels]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setOverflow("auto");
    }
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setOverflow("hidden");
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setOverflow("auto");
  };

  return (
    <StyledNavbar position={isMenuOpen ? "fixed" : "static"}>
      <div>
        <Image>
          <img src={logo} alt="" />
        </Image>
        <span></span>
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
            <a href="https://gr.linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </li>
        </StyledSocials>
      </div>
      <Links>
        <ul>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <li ref={settings} onClick={handleSettingsClick}>
          <GoSettings />
        </li>
        <Hamburger onClick={handleMenuClick}>
          {isMenuOpen ? <AiOutlineClose /> : <HiOutlineMenuAlt4 />}
        </Hamburger>
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
          <p>Night Mode</p>
          <SwitchContainer
            color={nightMode ? "#006AFF" : "#777"}
            move={nightMode ? "translateX(100%)" : "translateX(0)"}
            onClick={handleModeClick}
          >
            <div></div>
          </SwitchContainer>
        </section>
        <section>
          <p>Text size</p>
          <Letter onClick={handleFontSizeClick}>A</Letter>
        </section>
        <Triangle></Triangle>
      </Modal>
    </StyledNavbar>
  );
};

export default Navbar;
