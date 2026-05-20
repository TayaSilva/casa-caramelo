import React, { PropsWithChildren } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

type AppScreenProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

export function AppScreen({ title, description, children }: AppScreenProps) {
  return (
    <ThemedView className="flex-1">
      <SafeAreaView className="flex-1">
        <ScrollView
          contentContainerClassName="justify-center px-4 py-8 pt-20"
          showsVerticalScrollIndicator={false}>
          <View className="w-full max-w-[800px] self-center gap-6">
            <View className="gap-2">
              <ThemedText type="title" className="text-[40px] leading-11">
                {title}
              </ThemedText>
              <ThemedText themeColor="textSecondary" className="max-w-[560px]">
                {description}
              </ThemedText>
            </View>

            <View className="gap-3">{children}</View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}
