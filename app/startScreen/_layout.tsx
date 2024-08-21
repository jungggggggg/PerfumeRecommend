// app/askingscreen/_layout.tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
      <Stack>
        <Stack.Screen name="howToUse" options={{ title: 'Question 1' }} />
        <Stack.Screen name="resultExample" options={{ title: 'Question 2' }} />
        <Stack.Screen name="goMainPage" options={{ title: 'Question 3' }} />
      </Stack>
  );
}