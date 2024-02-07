import * as React from "react";
import GetLocalData from "../functions/getData";
import { editSettings } from "../db/loadLocalStorage";

import { ThemeContextType, ThemeModeType } from "../@types/theme";
import { BoxProps } from "@mui/material";
import AppInfo from "../db/app_info";

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

const storage = AppInfo.storage.value;

const upadateTheme = (newThemeCode: number) => {
  const currentStorageData = GetLocalData(storage);
  currentStorageData._theme = newThemeCode;
  editSettings(storage, currentStorageData);
};

const ThemeContextProvider = ({ children }: BoxProps) => {
  const [isLightTheme, setIsLightTheme] = React.useState(
    GetLocalData(storage)._theme === 111 ? true : false
  );

  const mode: ThemeModeType = {
    light: {
      mode: "light",
    },

    dark: {
      mode: "dark",
    },
  };

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
    isLightTheme ? upadateTheme(222) : upadateTheme(111);
  };

  return (
    <ThemeContext.Provider value={{ isLightTheme, ...mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
