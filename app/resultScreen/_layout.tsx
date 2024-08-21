// app/askingscreen/_layout.tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
      <Stack>
        <Stack.Screen name="firstResult" options={{ title: 'Question 1' }} />
        <Stack.Screen name="secondResult" options={{ title: 'Question 2' }} />
        <Stack.Screen name="thirdResult" options={{ title: 'Question 3' }} />
      </Stack>
  );
}