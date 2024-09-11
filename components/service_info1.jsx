import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput } from '@react-native-material/core';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import AddTable from '../../components/addItem';

const Serviceinfo = () => {
  const [visit, setVisit] = useState('');
  const [actualFault, setActualFault] = useState('');
  const [actionteken, setActionTeken] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = () => {
    router.push('/profile');
  };
  const handleAddItem = () => {
    setIsVisible(true); // Show the table when the button is clicked
  };
  const handlecancel= () => {
    setIsVisible(false); // Show the table when the button is clicked
  };


  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.image}
      />
      <Text style={styles.logoHeading}>SMART KITCHEN SOLUTION</Text>
      <View style={styles.Line1}></View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.incontainer}>
          <TextInput
            variant="outlined"
            label="Nature of complaint/visit"
            style={styles.textInput}
            value={visit}
            onChangeText={setVisit}
            multiline
            maxLength={200}
          />
          <TextInput
            variant="outlined"
            label="Actual fault"
            style={styles.textInput}
            value={actualFault}
            onChangeText={setActualFault}
            multiline
            maxLength={200}
          />
          <TextInput
            variant="outlined"
            label="Action Taken"
            style={styles.textInput}
            value={actionteken}
            onChangeText={setActionTeken}
            multiline
            maxLength={200}
          />

          <Picker
            selectedValue={selectedOption3}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedOption3(itemValue)}
          >
            <Picker.Item label="Select Remark" value="" />
            <Picker.Item label="Working Fully" value="optiona2" />
            <Picker.Item label="Working Moderately" value="optiona3" />
            <Picker.Item label="Not Working" value="optiona4" />
          </Picker>

          <TouchableOpacity style={styles.customButton} onPress={handleAddItem}>
            <Text style={styles.buttonText}>Add Table</Text>
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.customButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          
          

        </View>
        {isVisible && (
          <View>
            <AddTable/>
            <TouchableOpacity style={styles.customButton} onPress={handlecancel}>
            <Text style={styles.buttonText}>close</Text>
          </TouchableOpacity>
          </View>
        )}
         
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 30,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '40%',
    height: 40,
    marginBottom: 15,
    marginTop: 20,
    alignSelf: 'center',
  },
  Line1: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  logoHeading: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  incontainer: {
    flex: 1,
    padding: 10,
  },
  textInput: {
    margin: 12,
    
  },
  
  
  picker: {
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 48,
    justifyContent: 'center',
    elevation: 3,
    margin: 7,
    marginBottom: 15,
    marginHorizontal: 13,
  },
  customButton: {
    marginTop: 20,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 120,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Serviceinfo;
