import { View, Text, Button } from 'react-native';
import { useSurvey } from '../../component/SurveyContext';
import { useRouter } from 'expo-router';

export default function Price() {
  const router = useRouter();
  const { saveAnswer } = useSurvey();

  const handleNext = () => {
    saveAnswer('question3', 'My Answer');
    router.push('/questionScreen/favoriteSmell');
  };

  return (
    <View>
      <Text>Question 3: What is your favorite color?</Text>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}