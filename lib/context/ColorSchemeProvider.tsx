import React from 'react';

export type ColorScheme = 'dark' | 'light';

export interface IColorSchemeContext {
  colorScheme: ColorScheme;
  setColorScheme: (value: ColorScheme) => void;
}

export const ColorSchemeContext = React.createContext<IColorSchemeContext>({
  colorScheme: 'dark',
  setColorScheme: () => {},
});

interface ColorSchemeProviderProps {
  children: React.ReactNode;
}

const ColorSchemeProvider: React.FC<ColorSchemeProviderProps> = ({
  children,
}) => {
  const [colorScheme, setColorSchemeState] =
    React.useState<ColorScheme>('light');

  React.useEffect(() => {
    let savedColorScheme = window.localStorage.getItem(
      'wvaviator.color_scheme'
    ) as ColorScheme;
    if (savedColorScheme) {
      setColorScheme(savedColorScheme);
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setColorScheme(mediaQuery.matches ? 'dark' : 'light');

    const handleColorSchemeChange = (e: MediaQueryListEvent) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleColorSchemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleColorSchemeChange);
    };
  }, []);

  const setColorScheme = (value: ColorScheme) => {
    setColorSchemeState(value);
    window.localStorage.setItem('wvaviator.color_scheme', value);
  };

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export default ColorSchemeProvider;
