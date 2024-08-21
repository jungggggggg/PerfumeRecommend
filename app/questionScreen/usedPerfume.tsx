import { View, Text, Button } from 'react-native';
import { useSurvey } from '../../component/SurveyContext';
import { useRouter } from 'expo-router';

export default function UsedPerfume() {
  const router = useRouter();
  const { saveAnswer } = useSurvey();

  const handleNext = () => {
    saveAnswer('question7', 'My Answer');
    router.push('/resultScreen');
  };

  return (
    <View>
      <Text>Question 7: What is your favorite color?</Text>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}