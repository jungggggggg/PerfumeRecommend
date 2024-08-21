import Carousel from 'react-native-snap-carousel'
import HowToUse from './howToUse';
import ResultExample from './resultExample';
import GoMainPage from './goMainPage';
import { Dimensions, View } from 'react-native';
import { Stack } from 'expo-router';

// const { width: screenWidth } = Dimensions.get('window');

export default function StartScreenLayout() {
  
  return (
      <Stack screenOptions={{ headerShown: false}}>
        <Stack.Screen name="howToUse" options={{ title: 'Question 1' }} />
        <Stack.Screen name="resultExample" options={{ title: 'Question 2' }} />
        <Stack.Screen name="goMainPage" options={{ title: 'Question 3' }} />
      </Stack>
  );

}