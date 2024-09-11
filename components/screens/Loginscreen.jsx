import React, { useState } from 'react';
import { StyleSheet, Alert, View, TouchableOpacity } from 'react-native';
import { Button, Text, TextInput, IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from '../../app/util/api'; // Ensure you have this API util
// import { router } from 'expo-router';

// Import token storage functions
import { getToken, StoreToken } from '../../app/util/asyncStorage'; // Adjust to actual file path

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showEmailSuggestion, setShowEmailSuggestion] = useState(true);
  const [setModalVisible] = useState(false);
  
  const ss =getToken();
  console.log(ss);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validate = () => {
    let valid = true;

    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (text.includes('@')) {
      setShowEmailSuggestion(false);
    } else {
      setShowEmailSuggestion(true);
    }
  };

  const handleLogin = async () => {
    if (validate()) {
      try {
        // Replace 'login' API with your actual login logic
        // const response = await post('/api/login',{ email, password });
        const response = await login({ email, password });
        
        if (response.token) {
          await StoreToken(response.token);  // Store token in AsyncStorage
          Alert.alert("Login Successful", "Token stored successfully.");
          // Proceed to navigate to the home screen or wherever needed
        } else {
          Alert.alert("Login Failed", "Token not received.");
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Login Failed", "Invalid email or password.");
      }
    }
  };

  // const handleForgotPassword = () => {
  //   console.log('Forgot password email submitted:', ForgotPassword);
  //   setModalVisible;
  //   router.push('./');
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.header} variant="h4">Login</Text>
      <View style={styles.Line}></View>

      <TextInput
        onChangeText={handleEmailChange}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        label="E-mail"
        leading={(props) => <Icon name="account" {...props} />}
        style={styles.input}
      />
      {showEmailSuggestion && (
        <Text style={styles.suggestion}>Enter valid e-mail id</Text>
      )}
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <TextInput
        label="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={!isPasswordVisible}
        trailing={(props) => (
          <IconButton
            icon={(iconProps) => (
              <Icon name={isPasswordVisible ? "eye-off" : "eye"} {...iconProps} />
            )}
            onPress={togglePasswordVisibility}
            {...props}
          />
        )}
        style={styles.input}
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

      <Button
        title="Login"
        onPress={handleLogin}
        color="#007BFF"
        style={[styles.button]}
      />

      {/* Forgot Password Link */}
      {/* <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    height: 450,
    justifyContent: 'center',
  },
  header: {
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  suggestion: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
    textAlign: 'left',
  },
  error: {
    fontSize: 14,
    color: 'red',
    marginBottom: 10,
    textAlign: 'left',
  },
  button: {
    marginTop: 20,
    borderRadius: 30,
    alignSelf: 'center',
    width: '50%',
    paddingVertical: 12,
  },
  Line: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
    marginVertical: 10,
    marginBottom: 20,
  },
  forgotPasswordText: {
    marginTop: 15,
    color: '#007BFF',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
