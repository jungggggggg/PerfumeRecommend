import { View, Text, Button, SafeAreaView, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function GoMainPage() {
    const router = useRouter();

    const handleNext = () => {
        router.push('/mainPage');
    };

    const handleBefore = () => {
        router.back();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ position: 'absolute', top: 50, left: 5 }}>
                <MaterialIcons name="navigate-before" size={50} color="#F45E92" onPress={handleBefore} />
            </View>
            <Image source={require('../../assets/10779078.png')} style={styles.perfumeStyle} />
            <Text style={styles.textStyle}>간략한 사용법을 터득하셨습니다!</Text>
            <Text style={styles.smallTextStyle}>이제 바로 향수를 보러 가볼까요?</Text>
            <View style={{ backgroundColor: '#F45E92', borderRadius: 100, }}>
                <MaterialIcons name="navigate-next" size={50} color="white" onPress={handleNext} />
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
        textAlign: 'center',
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