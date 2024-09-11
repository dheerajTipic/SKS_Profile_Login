import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, Animated, Easing, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import { Provider, Stack, Button, DialogHeader, DialogContent, DialogActions, TextInput } from "@react-native-material/core";

import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import AddTable from '../../components/addItem';
//......................................................Dailog

const AnimatedDialog = ({ visible, onClose, onSubmit, customerName, setCustomerName, address, setAddress, contactPerson, setContactPerson, email, setEmail, error }) => {
  const [show, setShow] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;
  const translateYValue = useRef(new Animated.Value(50)).current;
  const [errord, setErrord] = useState('');
  const router = useRouter();
  const handleSubmitd = () => {
    // value={searchModelQuery}
    // value={searchModelQuery}
  

if (customerName.trim() === '' || address.trim() === '' || contactPerson.trim() === '' || email.trim() === '') {  
setErrord('All fields are required!');

} else {
setErrord('');
router.push('/service_info');
setCustomerName('');
setAddress('');
setContactPerson('');
setEmail('');

}
};

  useEffect(() => {
    if (visible) {
      setShow(true);
      Animated.parallel([
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(),
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(),
        Animated.timing(translateYValue, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(),
      ]);
    } else {
      Animated.parallel([
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(),
        Animated.timing(opacityValue, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(),
        Animated.timing(translateYValue, {
          toValue: 50,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(() => setShow(false)),
      ]);
    }
  }, [visible]);

  return (
    <Modal transparent visible={show} animationType="none">
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.dialogContainer,
            {
              transform: [
                { scale: scaleValue },
                { translateY: translateYValue },
              ],
              opacity: opacityValue,
            },
          ]}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <DialogHeader title=" New Customer" style={styles.dialogHeader} />
            <View style={styles.Line1} />
            {errord ? <Text style={styles.errorTextd}>{errord}</Text> : null}
            <DialogContent>
              <Stack spacing={2}>
                <TextInput
                  variant="outlined"
                  label="Customer name"
                  style={styles.input}
                  value={customerName}
                  onChangeText={setCustomerName}
                />
                <TextInput
                  variant="outlined"
                  label="Address"
                  style={styles.input}
                  value={address}
                  onChangeText={setAddress}
                />
                <TextInput
                  variant="outlined"
                  label="Contact person"
                  style={styles.input}
                  value={contactPerson}
                  onChangeText={setContactPerson}
                />
                <TextInput
                  variant="outlined"
                  label="Email"
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                />
                {/* <Button
                  title="Save"
                  compact
                  style={{marginHorizontal:30, borderWidth:2 ,backgroundColor:'black'}}
                  variant="text"
                  onPress={handleSubmitd}
                /> */}
<View style={{display:"flex",alignItems:'center', justifyContent:'space-between',flexDirection:'row',width:"100%", marginTop:8,

}}>
<TouchableOpacity style={styles.customButtond} onPress={handleSubmitd}>
          <Text style={styles.buttonTextd}>Save</Text>
        </TouchableOpacity>
             
        <TouchableOpacity style={styles.customButtoncancel} onPress={onClose}>
          <Text style={styles.buttonTextcancle}>Cancel</Text>
        </TouchableOpacity>
        </View>
              </Stack>
            </DialogContent>
            <DialogActions>
              {/* <Button 
                title="Cancel"
                compact 
                variant="text"
                onPress={onClose}
                style={{color:'red'}}
              /> */}


              {/* <Button
                title="Ok"
                compact
                variant="text"
                onPress={onClose}
              /> */}
            </DialogActions>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};
//......................................................Dailog End
const Service = () => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [contactPerson, setContactPerson] = useState('');
 // const [equipmentName, setequipmentName] = useState();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [visit, setVisit] = useState('');
  const [actualFault, setActualFault] = useState('');

  // const [visit, setVisit] = useState('');
  // const [actualFault, setActualFault] = useState('');

  const [actionteken, setactionteken] = useState('');
  const [selectedOption3, setselectedOption3] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  
  const [errord, setErrord] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchModelQuery, setSearchModelQuery] = useState('');
  const [searchEqpQuery, setSearchEqpQuery] = useState('');
  const [searchsnoQuery, setSearchsnoQuery] = useState('');
 
  const [filteredData, setFilteredData] = useState([]);
  const [filteredModelData, setFilteredModelData] = useState([]);
  const [filteredEqpData, setFilteredEqpData] = useState([]);
  const [filteredsnoData, setFilteredsnoData] = useState([]);
  

  const [isCustomerSelected, setIsCustomerSelected] = useState(false);
  const [isEqpSelected, setIsEqpSelected] = useState(false);
  const [issnoSelected, setIssnoSelected] = useState(false);
 
 
  const [visible, setVisible] = useState(false);
  const [serialNo, setserialNo] = useState();

  
  const router = useRouter();
  // const [selectedOption3, setSelectedOption3] = useState(null); 

  const data = [
    'Hayat Hotel',
    'Tipic',
    'Swad',
    'Swayananad',
    'Anant Hotel',
    'PureVeg Hotel',
    'NonVeg Hotel',
  ];
  const eqpData =[
    
    'Bajaa',
    'Tata',
    'aaa'

  
  ];

  const modelData = [
    'Model1234',
    'Model5678',
    'Model91011',
    'Model1213',
    'Model1415',
    'Model1617',
  ];
  const snoData = [
    '1234',
    '5678',
    '91011',
    '1213',
    '1415',
    'M617',
  ];
 
  

// Define handleSearch function for customer search
const handleSearch = (query) => {
  setSearchQuery(query);
  if (query.trim() === '') {
    setFilteredData([]);
  } else {
    // Example filtering logic (replace with your actual customer data)
    const filtered = customerData.filter(item => 
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  }
};

const handleEqpSearch = (query) => {
  setSearchEqpQuery(query);
  if (query.trim() === '') {
    setFilteredEqpData([]);
  } else {
    // Example filtering logic (replace with your actual equipment data)
    const filtered = equipmentData.filter(item => 
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEqpData(filtered);
  }
};
  const handleModelSearch = (text) => {
    setSearchModelQuery(text);
    if (text) {
      const results = modelData.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredModelData(results);
    } else {
      setFilteredModelData([]);
    }
  };
  const handlesnoSearch = (query) => {
    setSearchsnoQuery(query);
    if (query.trim() === '') {
      setFilteredsnoData([]);
    } else {
      // Example filtering logic (replace with your actual serial number data)
      const filtered = serialNumberData.filter(item => 
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredsnoData(filtered);
    }
  };

  
 const [actionTeken, setActionTeken] = useState('');
 

  const handleSelectItem = (item) => {
    setSearchQuery(item);
    setFilteredData([]);
    setIsCustomerSelected(true);
  };

  const handleSelectModelItem = (item) => {
    setSearchModelQuery(item);
    setFilteredModelData([]);
  };
  const handleSelectEqpItem = (item) => {
    setSearchEqpQuery(item);
    setFilteredEqpData([]);
    setIsEqpSelected(true);
  };
  const handleSelectsnoItem = (item) => {
    setSearchsnoQuery(item);
    setFilteredsnoData([]);
    setIssnoSelected(true);
  };
  

  const handleSubmit = () => {
              // value={searchModelQuery}
              // value={searchModelQuery}
    if ( searchQuery.trim() === ''||  searchModelQuery.trim() === ''|| searchEqpQuery.trim() === '') {  
      setError('All fields are required!');
    } else {
      setError('');
      router.push('/service_info');
      
      setSearchQuery('');
      setSearchModelQuery('');
      setSearchEqpQuery('');
      setSearchsnoQuery('');
     
      setFilteredData([]);
      setFilteredModelData([]);
      setFilteredEqpData([]);
      setFilteredsnoData([]);
     
      
      setIsCustomerSelected(false);
      setIsEqpSelected(false);
      setIssnoSelected(false);
      
    }
  };
 
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.image}
      />
      <Text style={styles.logoHeading}>SMART KITCHEN SOLUTION</Text>
      <View style={styles.Line1} />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <TextInput
          variant="outlined"
          label="Search Customer..."
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={handleSearch}
        />

        {filteredData.length > 0 && (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelectItem(item)}>
                <Text style={styles.suggestionItem}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}

        {filteredData.length === 0 && searchQuery.length > 0 && (
          <Button
            style={styles.dailogBtn}
            title="Add"
            onPress={() => setVisible(true)}
          />
        )}

        <AnimatedDialog
          visible={visible}
          onClose={() => setVisible(false)}
          onSubmit={handleSubmit}
          customerName={customerName}
          setCustomerName={setCustomerName}
          address={address}
          setAddress={setAddress}
          contactPerson={contactPerson}
          setContactPerson={setContactPerson}
          email={email}
          setEmail={setEmail}
          error={error}
        />

        
        {/* Conditionally render the model search box */}
        {isCustomerSelected && (
          <>
            <TextInput
              variant="outlined"
              label=" Search Equipment..."
              style={styles.searchInput}
              value={searchEqpQuery}
              onChangeText={handleEqpSearch}
            />
            {filteredEqpData.length > 0 && (
              <FlatList
                data={filteredEqpData}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleSelectEqpItem(item)}>
                    <Text style={styles.suggestionItem}>{item}</Text>
                  </TouchableOpacity>
                )}
              />

            )}

          </>
        )}
         {isEqpSelected &&
          (
          <>
            <TextInput
              variant="outlined"
              label="Search Model..."
              style={styles.searchInput}
              value={searchModelQuery}
              onChangeText={handleModelSearch}
            />
            {filteredModelData.length > 0 && (
              <FlatList
                data={filteredModelData}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleSelectModelItem(item)}>
                    <Text style={styles.suggestionItem}>{item}</Text>
                  </TouchableOpacity>
                )}
              />

            )}

          </>
        )}

{isEqpSelected &&
          (
          <>
          <TextInput
          variant="outlined"
          label=" Search Serial No.."
          style={styles.searchInput}
         // value={searchQuery}
          value ={searchsnoQuery}
          onChangeText={handlesnoSearch}
        />
            {filteredsnoData.length > 0 && (
              <FlatList
                data={filteredsnoData}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleSelectsnoItem(item)}>
                    <Text style={styles.suggestionItem}>{item}</Text>
                  </TouchableOpacity>
                )}
              />

            )}

          </>
        )}

        <TouchableOpacity style={styles.customButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
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
  value={actionTeken}
  onChangeText={setActionTeken}
  multiline
  maxLength={200}
/>

          <Picker
            selectedValue={selectedOption3}
            style={styles.picker}
            onValueChange={(itemValue) => setselectedOption3 (itemValue)}
          >
            <Picker.Item label="Select Remark" value="" />
            <Picker.Item label="Working Fully" value="optiona2" />
            <Picker.Item label="Working Moderately" value="optiona3" />
            <Picker.Item label="Not Working" value="optiona4" />
          </Picker>

          {/* <TouchableOpacity style={styles.customButton} onPress={handleAddItem}>
            <Text style={styles.buttonText}>Add Table</Text>
          </TouchableOpacity> */}
         
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
  dailogBtn: {
    marginStart: 255,
    alignSelf: 'flex-end',
    marginEnd: 10,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f8f8f8',
    marginBottom: 10,
  },
  image: {
    width: '40%',
    height: 50,
    marginBottom: 15,
    marginTop: 20,
    alignSelf: 'center',
  },
  customButton: {
    marginTop: 20,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 120,
    borderRadius: 12,
    borderWidth: 3,
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
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  Line1: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
    marginVertical: 10,
    marginBottom: 20,
  },
  logoHeading: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    
  },
  errorTextd: {
    color: 'red',
    marginBottom: 10,
    alignSelf:'center'
  },
  searchInput: {
    marginHorizontal: 10,
    marginTop: 30,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  dialogContainer: {
    width: '80%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  dialogHeader: {
    marginBottom: 15,
  },
  input:{
marginTop: 5
,},
incontainer: {
  flex: 1,
  padding: 10,
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

  customButtond:{
    marginTop: 10,
    //marginRight:50,
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
   // marginHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    width:80,
  },
  customButtoncancel:{
    marginTop: 10,
   // marginLeft:2,
    backgroundColor: '#BF0000',
    paddingVertical: 10,
    paddingHorizontal: 13,
    //marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
    width:80,
  },
  buttonTextd: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextcancle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const AppProvider = () => (
  <Provider>
    <Service />
  </Provider>
);

export default AppProvider;
