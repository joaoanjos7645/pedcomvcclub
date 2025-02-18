import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import Ionicons from '@expo/vector-icons/Ionicons';

import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      headerShown: false,
      tabBarButton: HapticTab,
      tabBarBackground: TabBarBackground,
      tabBarStyle: Platform.select({
        ios: {
          position: 'absolute',
          height: 80,
          paddingBottom: 20,
        },
        default: {
          height: 80,
          paddingTop: 12,
        },
      }),
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Mensagens',
          tabBarIcon: ({ color }) => <Ionicons size={28} name='chatbox-outline' color={color} />,
        }}
      />
      <Tabs.Screen
        name="dependents"
        options={{
          title: 'Dependentes',
          tabBarIcon: ({ color }) => <Ionicons size={28} name='people-outline' color={color} />,
        }}
      />
      <Tabs.Screen
        name="doctors"
        options={{
          title: 'Médicos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="medkit-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="configs"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
