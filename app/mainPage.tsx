import { Link } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";


export default function () {
    return ( 
        <SafeAreaView>
            <Text>this is the mainPage</Text>
            <Link href='/questionScreen'>향수 찾기!</Link>
        </SafeAreaView>
    )
}