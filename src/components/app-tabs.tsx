import { Tabs } from 'expo-router';
import React from 'react';

import { AppTabIcon } from '@/components/app-tab-icon';
import { APP_TABS } from '@/constants/navigation';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: colors.background,
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.tabInactive,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 2,
        },
        tabBarItemStyle: {
          paddingVertical: 4,
        },
        tabBarStyle: {
          height: 84,
          paddingTop: 4,
          paddingBottom: 8,
          borderTopWidth: 1,
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },
      }}>
      {APP_TABS.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.label,
            tabBarAccessibilityLabel: tab.accessibilityLabel,
            tabBarIcon: ({ color, focused }) => (
              <AppTabIcon color={color} focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
