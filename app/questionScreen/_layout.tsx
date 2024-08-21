// app/askingscreen/_layout.tsx
import { Stack } from 'expo-router';
import { SurveyProvider } from '../../component/SurveyContext';

export default function Layout() {
  return (
    <SurveyProvider>
      <Stack>
        <Stack.Screen name="age" options={{ title: 'Question 1' }} />
        <Stack.Screen name="gender" options={{ title: 'Question 2' }} />
        <Stack.Screen name="price" options={{ title: 'Question 3' }} />
        <Stack.Screen name="favoriteSmell" options={{ title: 'Question 4' }} />
        <Stack.Screen name="dependSeason" options={{ title: 'Question 5' }} />
        <Stack.Screen name="howMuchLast" options={{ title: 'Question 6' }} />
        <Stack.Screen name="usedPerfume" options={{ title: 'Question 7' }} />
      </Stack>
    </SurveyProvider>
  );
}