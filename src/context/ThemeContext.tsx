/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from "react";
import {
  createSettings,
  editSettings,
  getSettings,
} from "../data/LocalStorage";

type PropsType = {
  children: any;
};

export type ThemeContextType = {
  theme: string;
  routePage: string;
  toggleTheme: (code: string | number) => void;
  setRoutePage: (routee: string) => void;
};

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

const db_theme_key = "theme";
const route = "route_page";

export default class ThemeContextProvider extends React.Component<PropsType> {
  state = {
    theme: document.documentElement.className,
    routePage: getSettings(route),
  };

  toggleTheme = (newThemeCode: any) => {
    document.documentElement.className = newThemeCode;
    this.setState({ theme: editSettings(db_theme_key, newThemeCode) });
  };

  setRoutePage = (routee: string) => {
    editSettings(route, routee);
    this.setState({ routePage: routee });
  };

  render(): any {
    if (!localStorage.getItem("theme")) createSettings(db_theme_key, "light");
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          toggleTheme: this.toggleTheme,
          setRoutePage: this.setRoutePage,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
