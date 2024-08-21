import { Link, router } from "expo-router";
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function () {

    const handleStart = () => {
        router.push('/questionScreen')
    }

    const handleBack = () => {
        router.push('/startScreen')
    }

    return ( 
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
            <Text style={styles.mainText}>안녕하세요!</Text>
            <Text style={styles.mainText}>나만의 향수를 찾으러 가볼까요?</Text>
            </View>

            <TouchableOpacity style={styles.buttonStyle} onPress={handleStart}>
                <Text style={styles.acceptStyle}>시작</Text>
            </TouchableOpacity>

            <View style={styles.back}>
            <AntDesign name="questioncircleo" size={24} color="black" onPress={handleBack}/>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    mainText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    titleContainer: {
        marginTop: 80,
        padding: 10,
    },
    acceptStyle:{
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
    buttonStyle:{
        backgroundColor: '#F45E92',
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 10,
        padding: 15,
        width: 100,
        marginTop: 20,
        alignSelf: 'center',
    },
    back:{
        position: 'absolute',
        top: 60,
        right: 20,
    }
})