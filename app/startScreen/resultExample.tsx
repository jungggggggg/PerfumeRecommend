import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function resultExample() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/startScreen/goMainPage');
  };

  return (
    <View>
      <Text>이런식으로 결과가 나와요!</Text>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}