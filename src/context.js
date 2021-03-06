import React, { useState } from "react";

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [nightMode, setNightMode] = useState(false);
  const [index, setIndex] = useState(0);

  const [overflow, setOverflow] = useState("auto");

  const fontSizes = ["17px", "18px", "19px"];

  const titleSizes = ["23px", "24px", "25px"];

  const headerSizes = ["19px", "20px", "21px"];

  const mainTitleSizes = ["100px", "104px", "108px"];
  const mainTitleSizesMobile = ["70px", "74px", "78px"];

  const secondaryTitleSizes = ["48px", "52px", "54px"];

  const links = ["20px", "22px", "24px"];

  const dayTheme = {
    color: "#242424",
    colorLight: "hsl(0, 0%, 24%)",
    blackWhite: "black",
    accent: "#006AFF",
    accentDark: "#004ab3",
    card: "#F2F2F2",
    bg: "white",
    title: "#242424",
    modal: "white",
    header: "#242424",
    accentLight: "hsl(215, 100%, 90%)",
    inputs: "white",
    gray: "white",
    radiusCard: "15px",
    radiusBtn: "5px",
    fontSize: fontSizes[index],
    titleSize: titleSizes[index],
    headerSize: headerSizes[index],
    mainTitle: mainTitleSizes[index],
    mobileMainTitle: mainTitleSizesMobile[index],
    secondaryTitle: secondaryTitleSizes[index],
    links: links[index],
    overflow: overflow,
  };

  const nightTheme = {
    color: "#939393",
    colorLight: "hsl(0, 0%, 24%)",
    bg: "#1C1B1B",
    modal: "#444",
    card: "#444",
    title: "#d3d3d3",
    accent: "#006AFF",
    accentDark: "#004ab3",
    header: "#939393",
    accentLight: "#232222",
    inputs: "#ccc",
    gray: "#444",
    radiusCard: "15px",
    radiusBtn: "4px",
    fontSize: fontSizes[index],
    titleSize: titleSizes[index],
    headerSize: headerSizes[index],
    mainTitle: mainTitleSizes[index],
    mobileMainTitle: mainTitleSizesMobile[index],
    secondaryTitle: secondaryTitleSizes[index],
    links: links[index],
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
