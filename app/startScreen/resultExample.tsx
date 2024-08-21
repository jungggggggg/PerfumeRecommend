import { View, Text, Button, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ResultExample() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/startScreen/goMainPage');
  };

  const handleBefore = () => {
    router.back();
  }

  const handleSkip = () => {
    router.push('/mainPage')
}


  return (
    <SafeAreaView style={styles.container}>

<TouchableOpacity onPress={handleSkip} style={{position: 'absolute', top: 60, right: 15,}}>
                <Text style={{fontWeight: '400', fontSize: 20,}}>Skip</Text>
            </TouchableOpacity>
        <View style={{position: 'absolute', top: 50, left: 5}}>
              <MaterialIcons name="navigate-before" size={50} color="#F45E92" onPress={handleBefore}/>
              </View>
        <MaterialIcons name="question-answer" size={200} color="#F45E92" />
      <Text style={styles.textStyle}>다양한 질문에 대답하세요</Text>
      <Text style={styles.smallTextStyle}>여러가지 질문에 대답을 하면, 인공지능이 당신에게 가장 완벽하게 맞는 향수를 추천해줄거에요</Text>
      <View style={{ flexDirection: 'row'}}>
      <View style={{ backgroundColor: '#F45E92', borderRadius: 100,}}>
            <MaterialIcons name="navigate-next" size={50} color="white" onPress={handleNext}/>
            </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 30,
    },
    smallTextStyle: {
        fontSize: 15,
        padding: 20,
        alignContent: 'center',
        textAlign: 'center'
    },
    perfumeStyle: {
        width: 200,
        height: 200,
    }
})