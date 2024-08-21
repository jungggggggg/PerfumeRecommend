import { View, Text, Button } from 'react-native';
import { useSurvey } from '../../component/SurveyContext';
import { useRouter } from 'expo-router';

export default function HowMuchLast() {
  const router = useRouter();
  const { saveAnswer } = useSurvey();

  const handleNext = () => {
    saveAnswer('question6', 'My Answer');
    router.push('/questionScreen/usedPerfume');
  };

  return (
    <View>
      <Text>Question 6: What is your favorite color?</Text>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}