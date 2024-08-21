import { View, Text, Button } from 'react-native';
import { useSurvey } from '../../component/SurveyContext';
import { useRouter } from 'expo-router';

export default function DependSeason() {
  const router = useRouter();
  const { saveAnswer } = useSurvey();

  const handleNext = () => {
    saveAnswer('question5', 'My Answer');
    router.push('/questionScreen/howMuchLast');
  };

  return (
    <View>
      <Text>Question 5: What is your favorite color?</Text>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}