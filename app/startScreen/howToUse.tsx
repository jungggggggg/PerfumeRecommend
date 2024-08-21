import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HowToUse() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/startScreen/resultExample');
  };

  return (
    <View>
      <Text>질문에 답변을 하거나 선택을 하세요!</Text>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}