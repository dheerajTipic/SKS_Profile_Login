import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { deleteToken, getToken } from '../util/asyncStorage';
import { DialogContent, TextInput, Button } from '@react-native-material/core';
import { ScrollView } from 'react-native-gesture-handler';

const Profile = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [passVisible, setpassVisible] = useState(false);
  const [emailId, setemailId] = useState('');

  const toggleMenu = () => {
    setpassVisible(!passVisible);
  };

  const handlePress = async () => {
    try {
      const ss = getToken();
      console.log(ss);
      await deleteToken();
      const s = getToken
      console.log(s);
      router.push('/'); // Navigate to homepage
    } catch (error) {
      console.error('Error during delete token or navigation:', error);
    }
  };

  const handlePasswordSubmit = () => {
    if (newPassword === reEnterPassword && oldPassword && emailId) {
      setSuccessMessage('Password successfully updated');
      setDialogVisible(false);
      // Add logic for password update API call here
    } else {
      Alert.alert('Error', 'Passwords do not match or fields are empty.');
    }
  };

  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Hamburger Menu */}
      <Modal
        transparent={true}
        visible={menuVisible}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity style={styles.menuOverlay} onPress={() => setMenuVisible(false)}>
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={handlePress}>
              <Text style={styles.menuText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
      

      {/* Success Message */}
      {successMessage ? <Text style={styles.successMessage}>{successMessage}</Text> : null}
      
      {/* Profile Info */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TouchableOpacity style={styles.hamburgerButton} onPress={handlePress}>
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        <View style={styles.profileContainer}>
          

          <Image source={require('../../assets/images/Person.png')} style={styles.profileImage} />
          <Text style={styles.profileName}>John Doe</Text>
          
        </View>

        {/* Statistics */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Total</Text>
            <Text style={styles.cardContent}>5</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Complete</Text>
            <Text style={styles.cardContent}>3</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Pending</Text>
            <Text style={styles.cardContent}>2</Text>
          </View>
        </View>

        {/* Change Password Section */}
        <View style={styles.line} />
        <View style={styles.changePassCard}>
          <TouchableOpacity style={styles.menuItem} onPress={toggleMenu}>
            <Text style={styles.menuText}>Change Password</Text>
          </TouchableOpacity>

          {passVisible && (
            <DialogContent>
              <TextInput
                label="Enter Email-id"
                value={emailId}
                onChangeText={setemailId}
                style={styles.textInput}
              />
              <TextInput
                label="Old Password"
                value={oldPassword}
                onChangeText={setOldPassword}
                secureTextEntry={true}
                style={styles.textInput}
              />
              <TextInput
                label="New Password"
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry={true}
                style={styles.textInput}
              />
              <TextInput
                label="Re-enter New Password"
                value={reEnterPassword}
                onChangeText={setReEnterPassword}
                secureTextEntry={true}
                style={styles.textInput}
              />
              <Button title="Submit" onPress={handlePasswordSubmit} style={styles.submitButton} />
            </DialogContent>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changePassCard:{ 
    alignSelf:'flex-start',
  },
  hamburgerButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#000',
    marginVertical: 20,
  },
  menuItem: {
    paddingVertical: 10,
    margin: 10,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf:'flex-start',
    justifyContent:'flex-end',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '30%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  textInput: {
    marginBottom: 15,
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  submitButton: {
    marginTop: 10,
  },
  successMessage: {
    color: 'green',
    marginTop: 10,
    fontSize: 16,
  },
});

export default Profile;
