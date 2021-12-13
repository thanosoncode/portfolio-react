import React, { useState } from "react";
import { useEffect } from "react";

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [nightMode, setNightMode] = useState(false);
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState();
  const [size, setSize] = useState("large");
  const [overflow, setOverflow] = useState("auto");

  useEffect(() => {
    const getWidth = () => {
      setWidth(window.innerWidth);
      if (width < 800) {
        setSize("medium");
      }
      if (width < 600) {
        setSize("small");
      }
      if (width >= 800) {
        setSize("large");
      }
      if (width < 500) {
        setSize("mobile");
      }
    };

    window.addEventListener("resize", getWidth);

    return () => window.removeEventListener("resize", getWidth);
  }, [width]);

  const fontSizes = {
    small: ["14px", "15px", "16px"],
    medium: ["16px", "17px", "18px"],
    large: ["18px", "19px", "20px"],
    mobile: ["16px", "17px", "18px"],
  };

  const titleSizes = {
    small: ["21px", "22px", "23px"],
    medium: ["23px", "24px", "25px"],
    large: ["25px", "26px", "27px"],
    mobile: ["23px", "24px", "25px"],
  };
  const headerSizes = {
    small: ["17px", "18px", "19px"],
    medium: ["19px", "20px", "21px"],
    large: ["21px", "22px", "23px"],
    mobile: ["19px", "20px", "21px"],
  };
  const mainTitleSizes = {
    small: ["46px", "47px", "48px"],
    medium: ["48px", "49px", "50px"],
    large: ["50px", "51px", "52px"],
    mobile: ["38px", "40px", "42px"],
  };

  const links = ["22px", "24px", "26px"];

  const dayTheme = {
    color: "#242424",
    colorLight: "hsl(0, 0%, 24%)",
    bg: "white",
    modal: "white",
    title: "black",
    header: "#242424",
    accent: "hsl(215, 100%, 50%)",
    accentLight: "hsl(215, 100%, 90%)",
    inputs: "white",
    gray: "#f2f2f2",
    radiusCard: "15px",
    radiusBtn: "4px",
    fontSize: fontSizes[size][index],
    titleSize: titleSizes[size][index],
    headerSize: headerSizes[size][index],
    mainTitle: mainTitleSizes[size][index],
    links: links[index],
    overflow: overflow,
  };

  const nightTheme = {
    color: "#939393",
    colorLight: "hsl(0, 0%, 24%)",
    bg: "#1C1B1B",
    modal: "#444",
    title: "#d3d3d3",
    header: "#939393",
    accent: "hsl(215, 100%, 50%)",
    accentLight: "#232222",
    inputs: "#ccc",
    gray: "#444",
    radiusCard: "15px",
    radiusBtn: "4px",
    fontSize: fontSizes[index],
    titleSize: titleSizes[index],
    headerSize: headerSizes[index],
    mainTitle: mainTitleSizes[index],
    overflow: overflow,
  };

  const value = {
    index,
    setIndex,
    dayTheme,
    nightTheme,
    nightMode,
    setNightMode,
    overflow,
    setOverflow,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};
