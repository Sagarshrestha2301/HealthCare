import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FormField from '../components/FormField';
import CustomButton from '../components/CustomButton';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (!username || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Here you would typically call an API to register the user
    // For now, we'll just simulate a successful registration
    console.log('Signing up with:', { username, email, password });
    Alert.alert('Success', 'Account created successfully', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Tabs') // Navigate to tabs after successful signup
      }
    ]);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20, textAlign: 'center' }}>Create Account</Text>
      
      <FormField
        label="Username"
        value={username}
        onChangeText={setUsername}
        placeholder="Choose a username"
      />

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
        placeholder="Create a password"
        secureTextEntry
      />
      
      <CustomButton title="Sign Up" onPress={handleSignUp} />
      
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={{ marginTop: 20, textAlign: 'center' }}>
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;