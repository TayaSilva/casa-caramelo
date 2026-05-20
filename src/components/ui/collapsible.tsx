import { Ionicons } from '@expo/vector-icons';
import { PropsWithChildren, useState } from 'react';
import { Pressable } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useTheme } from '@/hooks/use-theme';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <ThemedView>
      <Pressable
        className="flex-row items-center gap-2 pressed:opacity-70"
        onPress={() => setIsOpen((value) => !value)}>
        <ThemedView type="backgroundElement" className="h-12 w-12 items-center justify-center rounded-xl">
          <Ionicons
            name="chevron-forward"
            size={14}
            color={theme.text}
            style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
          />
        </ThemedView>

        <ThemedText type="small">{title}</ThemedText>
      </Pressable>
      {isOpen && (
        <Animated.View entering={FadeIn.duration(200)}>
          <ThemedView type="backgroundElement" className="ml-12 mt-3 rounded-2xl p-4">
            {children}
          </ThemedView>
        </Animated.View>
      )}
    </ThemedView>
  );
}
