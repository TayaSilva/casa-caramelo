import '../global.css';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppTabs from '@/components/app-tabs';
import { ThemeToggle } from '@/components/theme-toggle';
import { AppThemeProvider, useAppTheme } from '@/theme/theme-provider';

function TabLayoutContent() {
  const { resolvedTheme } = useAppTheme();

  return (
    <ThemeProvider value={resolvedTheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaView className="flex-1">
        <View className="absolute right-4 top-3 z-50">
          <ThemeToggle />
        </View>
        <AppTabs />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default function TabLayout() {
  return (
    <AppThemeProvider>
      <TabLayoutContent />
    </AppThemeProvider>
  );
}
