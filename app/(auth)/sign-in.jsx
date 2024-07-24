import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Implement sign-in logic here
    console.log('Sign in with:', email, password);
    // If successful, navigate to the home screen
    // router.push('/tabs/home');
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          padding: 20,
        }}
      >
        <View className="w-full flex items-center mb-8">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
        </View>

        <Text className="text-3xl text-white font-bold text-center mb-8">
          Sign In
        </Text>

        <FormField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <FormField
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />

        <CustomButton
          title="Sign In"
          handlePress={handleSignIn}
          containerStyles="w-full mt-6"
        />

        <TouchableOpacity
          onPress={() => router.push('/sign-up')}
          className="mt-4"
        >
          <Text className="text-white text-center">
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default SignIn;