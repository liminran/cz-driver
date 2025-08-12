import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { Platform } from 'react-native';

export default function RootLayout() {
  useEffect(() => {
    // 设置页面标题
    if (Platform.OS === 'web') {
      document.title = 'Driving License Test';
    }
  }, []);

  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Driving License Test',
          headerShown: false 
        }} 
      />
    </Stack>
  );
} 