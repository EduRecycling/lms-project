/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from "react";
import { createSettings, editSettings } from "../data/LocalStorage";

type PropsType = {
  children: any;
};

export type ThemeContextType = {
  theme: string;
  toggleTheme: (code: string | number) => void;
};

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

const db_theme_key = "theme";

export default class ThemeContextProvider extends React.Component<PropsType> {
  state = {
    theme: document.documentElement.className,
  };

  toggleTheme = (newThemeCode: any) => {
    document.documentElement.className = newThemeCode;
    this.setState({ theme: editSettings(db_theme_key, newThemeCode) });
  };

  render(): any {
    if (!localStorage.getItem("theme")) createSettings(db_theme_key, "light");
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
