import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

type InfoCardProps = PropsWithChildren<{
  title: string;
  description?: string;
}>;

type InfoRowProps = {
  label: string;
  value: string;
};

export function InfoCard({ title, description, children }: InfoCardProps) {
  return (
    <ThemedView type="backgroundElement" className="gap-3 rounded-3xl p-4">
      <View className="gap-1">
        <ThemedText type="smallBold">{title}</ThemedText>
        {description ? (
          <ThemedText type="small" themeColor="textSecondary">
            {description}
          </ThemedText>
        ) : null}
      </View>

      <View className="gap-2">{children}</View>
    </ThemedView>
  );
}

export function InfoRow({ label, value }: InfoRowProps) {
  return (
    <View className="gap-0.5">
      <ThemedText type="small" themeColor="textSecondary">
        {label}
      </ThemedText>
      <ThemedText>{value}</ThemedText>
    </View>
  );
}
