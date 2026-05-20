import { Text, type TextProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'small' | 'smallBold' | 'subtitle' | 'link' | 'linkPrimary' | 'code';
  themeColor?: ThemeColor;
  className?: string;
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

export function ThemedText({
  className,
  style,
  type = 'default',
  themeColor = 'text',
  ...rest
}: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      className={[variantClasses[type], className].filter(Boolean).join(' ')}
      style={[{ color: theme[themeColor] }, style]}
      {...rest}
    />
  );
}
