import { View, Text, Button } from 'react-native';
import { useSurvey } from '../../component/SurveyContext';
import { useRouter } from 'expo-router';

export default function Gender() {
  const router = useRouter();
  const { saveAnswer } = useSurvey();

  const handleNext = () => {
    saveAnswer('question2', 'My Answer');
    router.push('/questionScreen/price');
  };

  return (
    <View>
      <Text>Question 2: What is your favorite color?</Text>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}