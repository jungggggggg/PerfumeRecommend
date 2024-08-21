import { View, Text, Button } from 'react-native';
import { useSurvey } from '../../component/SurveyContext';
import { useRouter } from 'expo-router';

export default function FavoriteSmell() {
  const router = useRouter();
  const { saveAnswer } = useSurvey();

  const handleNext = () => {
    saveAnswer('question4', 'My Answer');
    router.push('/questionScreen/dependSeason');
  };

  return (
    <View>
      <Text>Question 4: What is your favorite color?</Text>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}