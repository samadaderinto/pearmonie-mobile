import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1" style={{ backgroundColor: themeColors.bg, color: themeColors.clr }}>
            <View className="flex-1 flex justify-around my-4" style={{ color: themeColors.clr, height: "100%" }}>
                <Text
                    className="font-bold text-4xl text-center" style={{color: themeColors.clr }}>
                    Let's Get Started!
                </Text>
                <View className="flex-row justify-center">
                    <Image source={require("../assets/images/welcome.png")}
                        style={{ width: 350, height: 350 }} />
                </View>
                <View className="space-y-4" style={{
                    borderTopEndRadius: 70,
                    rwidth: 323,
                    height: 224,
                    top: 588,
                    backgroundColor: themeColors.sec
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                        className="py-3 bg-yellow-400 mx-7 rounded-xl">
                        <Text
                            className="text-xl font-bold text-center text-gray-700"
                        >
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <View className="flex-row justify-center">
                        <Text className="text-white font-semibold">Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text className="font-semibold text-yellow-400"> Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}