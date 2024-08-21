import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function GoMainPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/mainPage');
  };

  return (
    <View>
      <Text>third result</Text>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}