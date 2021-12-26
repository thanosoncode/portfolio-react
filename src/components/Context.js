import React, { useState } from "react";

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [nightMode, setNightMode] = useState(false);
  const [index, setIndex] = useState(0);

  const [overflow, setOverflow] = useState("auto");

  const fontSizes = ["16px", "17px", "18px"];

  const titleSizes = ["23px", "24px", "25px"];

  const headerSizes = ["19px", "20px", "21px"];

  const mainTitleSizes = ["48px", "49px", "50px"];

  const links = ["26px", "28px", "30px"];

  const dayTheme = {
    color: "#242424",
    colorLight: "hsl(0, 0%, 24%)",
    bg: "white",
    modal: "white",
    title: "black",
    header: "#242424",
    accent: "	hsl(215, 60%, 50%)",
    green: "#28A6A7",
    accentLight: "hsl(215, 100%, 90%)",
    inputs: "white",
    gray: "white",
    radiusCard: "15px",
    radiusBtn: "4px",
    fontSize: fontSizes[index],
    titleSize: titleSizes[index],
    headerSize: headerSizes[index],
    mainTitle: mainTitleSizes[index],
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
    accent: "	hsl(215, 60%, 50%)",
    green: "#28A6A7",
    accentLight: "#232222",
    inputs: "#ccc",
    gray: "#444",
    radiusCard: "15px",
    radiusBtn: "4px",
    fontSize: fontSizes[index],
    titleSize: titleSizes[index],
    headerSize: headerSizes[index],
    mainTitle: mainTitleSizes[index],
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
