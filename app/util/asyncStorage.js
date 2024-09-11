import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to store the user token
const StoreToken = async (token) => {
  try {
    await AsyncStorage.setItem('userToken', token);
    console.log('Token stored successfully');
  } catch (error) {
    console.error('Error storing the token:', error);
  }
};

// Function to get the user token
const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    if (token !== null) {
      // Token retrieved successfully
      console.log('Token retrieved:', token);
      return token;
    }
    return null; // Token not found
  } catch (error) {
    console.error('Error retrieving the token:', error);
  }
};


// Function to update the user token
const updateToken = async (newToken) => {
  try {
    await AsyncStorage.setItem('userToken', newToken);
    console.log('Token updated successfully');
  } catch (error) {
    console.error('Error updating the token:', error);
  }
};

// Function to delete the user token
const deleteToken = async () => {
  try {
    await AsyncStorage.removeItem('userToken');
    console.log('Token deleted successfully');
  } catch (error) {
    console.error('Error deleting the token:', error);
  }
};



export { StoreToken, getToken, updateToken, deleteToken };
