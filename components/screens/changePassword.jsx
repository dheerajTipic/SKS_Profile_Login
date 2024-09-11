import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from '@react-native-material/core';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');

  const handleSubmit = () => {
    // Handle password change logic here
    if (newPassword === reEnterPassword) {
      alert('Password changed successfully!');
    } else {
      alert('New password and re-entered password do not match.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Current Password"
        value={currentPassword}
        onChangeText={setCurrentPassword}
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        label="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        label="Re-enter New Password"
        value={reEnterPassword}
        onChangeText={setReEnterPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button
        title="Submit"
        onPress={handleSubmit}
        style={styles.submitButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 20,
  },
  submitButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
});

export default ChangePassword;
