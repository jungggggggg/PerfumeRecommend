import { View, Text, Button } from 'react-native';
import { useSurvey } from '../../component/SurveyContext';
import { useRouter } from 'expo-router';

export default function Age() {
  const router = useRouter();
  const { saveAnswer } = useSurvey();

  const handleNext = () => {
    saveAnswer('question1', 'My Answer');
    router.push('/questionScreen/gender');
  };

  return (
    <View>
      <Text>Question 1: What is your favorite color?</Text>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}