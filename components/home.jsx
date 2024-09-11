import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { TextInput as RNMaterialTextInput, Button } from "@react-native-material/core";
import Animated, { Layout, FadeIn, FadeOut } from 'react-native-reanimated';

const AdvancedTable = () => {
  const [filterText, setFilterText] = useState('');
  
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1', quantity: 10, price: 100 },
    { id: '2', name: 'Item 2', quantity: 20, price: 200 },
    // More items...
  ]);

  const [newItem, setNewItem] = useState({ name: '', quantity: '', price: '' });

  const handleAddItem = () => {
    if (newItem.name && newItem.quantity && newItem.price) {
      const id = (items.length + 1).toString();
      setItems([...items, { id, ...newItem }]);
      setNewItem({ name: '', quantity: '', price: '' });
    }
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      layout={Layout.springify()}
      style={styles.row}
    >
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.quantity}</Text>
      <Text style={styles.cell}>{item.price}</Text>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      {/* Filter Input */}
      <RNMaterialTextInput
        label="Filter by equpment name"
        value={filterText}
        onChangeText={setFilterText}
        style={styles.filterInput}
      />

      {/* Table */}
      <View style={styles.table}>
        <Animated.FlatList
          data={filteredItems}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <View style={styles.header}>
              <Text style={styles.headerText}> </Text>
              <Text style={styles.headerText}>Quantity</Text>
              <Text style={styles.headerText}>Price</Text>
            </View>
          }
        />
      </View>

      {/* Add Item Form */}
      <View style={styles.form}>
        <RNMaterialTextInput
          label=" Equipment Name"
          value={newItem.name}
          onChangeText={text => setNewItem({ ...newItem, name: text })}
          style={styles.input}
        />
        <RNMaterialTextInput
          label="Quantity"
          value={newItem.quantity}
          onChangeText={text => setNewItem({ ...newItem, quantity: text })}
          keyboardType="numeric"
          style={styles.input}
        />
        <RNMaterialTextInput
          label="Price"
          value={newItem.price}
          onChangeText={text => setNewItem({ ...newItem, price: text })}
          keyboardType="numeric"
          style={styles.input}
        />
        <Button
          title="Add Item"
          onPress={handleAddItem}
          style={styles.addButton}
          contentContainerStyle={styles.addButtonContent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  filterInput: {
    marginBottom: 20,
  },
  table: {
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
    marginBottom: 10,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cell: {
    flex: 1,
    fontSize: 14,
  },
  form: {
    marginTop: 30,
  },
  input: {
    marginBottom: 15,
  },
  addButton: {
    marginTop: 20,
  },
  addButtonContent: {
    paddingVertical: 10,
  },
});

export default AdvancedTable;
