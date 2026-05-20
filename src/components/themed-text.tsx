import { Text, type TextProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'small' | 'smallBold' | 'subtitle' | 'link' | 'linkPrimary' | 'code';
  themeColor?: ThemeColor;
  className?: string;
};

const themeClasses: Record<ThemeColor, string> = {
  background: 'text-black dark:text-white',
  backgroundElement: 'text-black dark:text-white',
  backgroundSelected: 'text-black dark:text-white',
  text: 'text-black dark:text-white',
  textSecondary: 'text-[#60646C] dark:text-[#B0B4BA]',
  accent: 'text-sky-500',
  tabInactive: 'text-[#A89E93] dark:text-[#8C857E]',
  border: 'text-black dark:text-white',
};

const variantClasses: Record<NonNullable<ThemedTextProps['type']>, string> = {
  default: 'text-base leading-6 font-medium',
  title: 'text-5xl leading-[52px] font-semibold',
  small: 'text-sm leading-5 font-medium',
  smallBold: 'text-sm leading-5 font-bold',
  subtitle: 'text-4xl leading-[44px] font-semibold',
  link: 'text-sm leading-[30px]',
  linkPrimary: 'text-sm leading-[30px] text-sky-500',
  code: 'font-mono text-xs',
};

export function ThemedText({ className, type = 'default', themeColor = 'text', ...rest }: ThemedTextProps) {
  return (
    <Text
      className={[themeClasses[themeColor], variantClasses[type], className].filter(Boolean).join(' ')}
      {...rest}
    />
  );
}
