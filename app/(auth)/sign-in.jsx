import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FormField from '../components/FormField';
import CustomButton from '../components/CustomButton';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignIn = async () => {
    // Here you would typically call an API to authenticate the user
    // For this example, we'll use a simple check
    if (email === 'user@example.com' && password === 'password') {
      // Navigate to the tabs screen on successful sign-in
      navigation.navigate('Tabs');
    } else {
      Alert.alert('Error', 'Invalid email or password');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20, textAlign: 'center' }}>Sign In</Text>
      
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
      
      <CustomButton title="Sign In" onPress={handleSignIn} />
      
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={{ marginTop: 20, textAlign: 'center' }}>
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;