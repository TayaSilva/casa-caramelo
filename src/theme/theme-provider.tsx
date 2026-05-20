import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance, Platform, type ColorSchemeName } from 'react-native';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const THEME_STORAGE_KEY = 'casa-caramelo-theme';

export type ThemeMode = 'light' | 'dark';

type ThemeContextValue = {
  theme: ThemeMode;
  resolvedTheme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function resolveTheme(theme: ThemeMode | null) {
  if (theme) {
    return theme;
  }

  const systemScheme = Appearance.getColorScheme();
  return systemScheme === 'dark' ? 'dark' : 'light';
}

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(() =>
    resolveTheme(Appearance.getColorScheme() === 'dark' ? 'dark' : 'light'),
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let active = true;

    AsyncStorage.getItem(THEME_STORAGE_KEY)
      .then((value) => {
        if (!active || (value !== 'light' && value !== 'dark')) {
          return;
        }

        setThemeState(value);
      })
      .finally(() => {
        if (active) {
          setHydrated(true);
        }
      });

    const subscription = Appearance.addChangeListener(({ colorScheme }: { colorScheme: ColorSchemeName }) => {
      if (!hydrated && colorScheme) {
        setThemeState(colorScheme === 'dark' ? 'dark' : 'light');
      }
    });

    return () => {
      active = false;
      subscription.remove();
    };
  }, [hydrated]);

  useEffect(() => {
    if (Platform.OS !== 'web') {
      Appearance.setColorScheme(theme);
    }
    AsyncStorage.setItem(THEME_STORAGE_KEY, theme).catch(() => undefined);
  }, [theme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme: theme,
      setTheme: setThemeState,
      toggleTheme: () => setThemeState((current) => (current === 'dark' ? 'light' : 'dark')),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useAppTheme must be used within AppThemeProvider');
  }

  return context;
}
