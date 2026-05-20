import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

type AppTabIconProps = {
  color: string;
  focused: boolean;
  icon: React.ComponentProps<typeof Ionicons>['name'];
};

export function AppTabIcon({ color, focused, icon }: AppTabIconProps) {
  return (
    <View className={['min-w-6 items-center justify-center', focused ? '-translate-y-0.5' : ''].join(' ')}>
      <Ionicons name={icon} size={22} color={color} />
    </View>
  );
}
