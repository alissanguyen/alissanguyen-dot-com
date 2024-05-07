
'use client'
import { SupportedTheme } from "@/types";
import * as React from "react";

export type ThemeContextValue = {
  theme: SupportedTheme;
  updateTheme: (newTheme: SupportedTheme) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
);

export const useTheme = (): ThemeContextValue => {
  const contextValue = React.useContext(ThemeContext);

  if (!contextValue) {
    throw new Error(
      "You are trying to use useGlobalContext without rendering a ThemeContext.Provider somewhere above this component in the component tree. Render a ThemeContext.Provider somewhere above this component in the component tree to resolve this issue."
    );
  }

  return contextValue;
};

interface ThemeContextProviderProps {
  initialTheme: SupportedTheme;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps & React.PropsWithChildren> = (
  props
) => {
  const [theme, setTheme] = React.useState<SupportedTheme>(props.initialTheme);

  const updateTheme = (newTheme: SupportedTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        updateTheme
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
