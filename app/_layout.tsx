import { Slot, Stack } from 'expo-router';
import 'react-native-reanimated';
import { AuthProvider } from '@/contexts/AuthContext';
import { StreamProvider } from '@/contexts/StreamContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <StreamProvider>
          <Slot />
        </StreamProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
