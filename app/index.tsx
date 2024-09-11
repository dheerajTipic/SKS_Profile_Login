// import { Redirect, Href } from "expo-router";
// import { Text, View } from "react-native";

// export default function Index() {
//   return <Redirect href={'/home'}/>
// }

///////////////////////////////////////////////////////////////////////////////

// import { Text, View, StyleSheet } from "react-native";
// import React, { useState, useEffect } from "react";
// import Loginscreen from './Loginscreen';
// import { Redirect } from "expo-router";

 
 
// function Index() {
//   const [token, setToken] = useState(false);
 
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setToken(true);
//     }, 3000);
 
//     // Cleanup the timer when the component is unmounted
//     return () => clearTimeout(timer);
//   }, []);
 
//   return (
//     <View style={styles.Container}>
//       {token ?  <Redirect href={'/home'}/>  : <Loginscreen />}
//     </View>
//   );
// }
 
// const styles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     maxWidth: "auto",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: '#b3b3b3', // Optional: set a background color
//     padding: 20, // Optional: padding to adjust spacing on different screen sizes
//   }
// });
 
// export default Index;

////////////////////////////////////////////////////////////////////
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect } from "expo-router";
import LoginScreen from "../components/screens/Loginscreen";
import { getToken } from "./util/asyncStorage";

function Index() {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);

  // Function to check token from AsyncStorage
  const checkToken = async () => {
    try {
      const storedtoken = await getToken();
      if (storedtoken) {
        setToken(storedtoken); // Token found, set it in state
      } else {
        setToken(''); // No token found, stay on login
      }
    } catch (error) {
      console.error("Error retrieving token:", error);
    } finally {
      setLoading(false); // Stop loading once token check is complete
    }
  };

  useEffect(() => {
    checkToken(); // Run the token check only once when component mounts
  }, []); // Removed `token` from dependency array

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  if (token === '') {
    return <LoginScreen />; // Show login screen if no token
  }

  return <Redirect href={'/service_info'} />; // Redirect to profile if token exists
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Index;


