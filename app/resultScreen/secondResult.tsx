import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function GoMainPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/resultScreen/thirdResult');
  };

  return (
    <View>
      <Text>second result</Text>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}