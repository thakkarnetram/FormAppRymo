/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
  Platform,
  Alert,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

const Form1 = () => {
  // Managing states of input values
  const [name, setName] = useState();
  const [age, setAge] = useState();

  // Functions for managing values onChange
  const handleNameChange = text => {
    setName(text);
    handleLogValues(text, age);
  };
  const handleAgeChange = text => {
    setAge(text);
    handleLogValues(name, text);
  };

  // Logging the values
  const handleLogValues = (name, age) => {
    console.log(JSON.stringify(`Name is ${name} , Age is ${age}`));
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.container}>
          <View style={styles.inputFieldContainer}>
            <TextInput
              value={name}
              onChangeText={handleNameChange}
              keyboardType="ascii-capable"
              placeholder="Name"
              placeholderTextColor="#FFFFFF"
              style={styles.name}
            />
          </View>
          <View style={styles.inputFieldContainer}>
            <TextInput
              value={age}
              onChangeText={handleAgeChange}
              keyboardType="numeric"
              placeholder="Age"
              placeholderTextColor="#FFFFFF"
              style={styles.name}
            />
          </View>
          <View style={styles.inputFieldContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.genderHead}>Select your Gender</Text>
              <View style={styles.checkBoxContainer}>
                <CheckBox title="Male" />
                <CheckBox title="Female" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: '#dee0df', // reference
  },
  inputFieldContainer: {
    backgroundColor: '#006eff',
    top: 30,
    marginLeft: 50,
    borderRadius: 10,
    marginBottom: 40,
    marginRight: 50,
  },
  name: {
    color: 'white',
    padding: 20,
    fontSize: responsiveFontSize(1.2),
  },
  genderHead: {
    color: 'white',
    fontSize: responsiveFontSize(1.2),
    margin: 20,
  },
  checkBoxContainer: {
    marginLeft: 20,
    width: responsiveWidth(100),
    flexDirection: 'row',
  },
});

export default Form1;
