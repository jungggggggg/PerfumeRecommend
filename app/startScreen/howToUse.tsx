import { View, Text, Button, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function HowToUse() {
    const router = useRouter();

    const handleNext = () => {
        router.push('/startScreen/resultExample');
    };

    const handleSkip = () => {
        router.push('/mainPage')
    }


    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/perfume.png')} style={styles.perfumeStyle} />
            <TouchableOpacity onPress={handleSkip} style={{position: 'absolute', top: 60, right: 15,}}>
                <Text style={{fontWeight: '400', fontSize: 20,}}>Skip</Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}>자신에게 맞는 향수를 찾으세요</Text>
            <Text style={styles.smallTextStyle}>메인 화면에서 향수 찾기를 클릭하고 질문에 답변을 하면 자신에게 꼭 맞는 향수를 추천 받을 수 있어요!</Text>
            <View style={{ backgroundColor: '#F45E92', borderRadius: 100,}}>
            <MaterialIcons name="navigate-next" size={50} color="white" onPress={handleNext}/>
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