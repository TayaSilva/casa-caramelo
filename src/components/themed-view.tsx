import { View, type ViewProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: ThemeColor;
  className?: string;
};

const themeClasses: Record<ThemeColor, string> = {
  background: 'bg-white dark:bg-black',
  backgroundElement: 'bg-[#F0F0F3] dark:bg-[#212225]',
  backgroundSelected: 'bg-[#E0E1E6] dark:bg-[#2E3135]',
  text: 'bg-transparent',
  textSecondary: 'bg-transparent',
  accent: 'bg-transparent',
  tabInactive: 'bg-transparent',
  border: 'bg-transparent',
};

export function ThemedView({ className, type = 'background', ...otherProps }: ThemedViewProps) {
  return <View className={[themeClasses[type], className].filter(Boolean).join(' ')} {...otherProps} />;
}
