import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAppTheme } from '@/theme/theme-provider';

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useAppTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <Pressable onPress={toggleTheme} className="self-end pressed:opacity-75">
      <ThemedView type="backgroundElement" className="flex-row items-center gap-2 rounded-full px-3 py-2">
        <View className="items-center justify-center">
          <Ionicons name={isDark ? 'moon' : 'sunny'} size={16} color={isDark ? '#FFB35C' : '#F08A24'} />
        </View>
        <ThemedText type="smallBold" themeColor="textSecondary">
          {isDark ? 'Escuro' : 'Claro'}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
}
