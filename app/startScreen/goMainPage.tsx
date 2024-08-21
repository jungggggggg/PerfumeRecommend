import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function GoMainPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/mainPage');
  };

  return (
    <View>
      <Text>이제 바로 당신에게 맞는 향수를 찾으러 가볼까요?</Text>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}