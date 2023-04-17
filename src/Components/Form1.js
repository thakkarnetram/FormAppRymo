/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
  Platform,
  Alert,
  Touchable,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import DateTimePicker from '@react-native-community/datetimepicker';

const Form1 = () => {
  // Managing states of input values
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');
  const [dob, setDob] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // Functions for managing values onChange
  const handleNameChange = text => {
    setName(text);
    handleLogValues(text, age);
  };
  const handleAgeChange = text => {
    setAge(text);
    handleLogValues(name, text);
  };

  // checkbox handlers
  const handleMaleCheckbox = male => {
    setMaleChecked(male);
    setFemaleChecked(false);
    setSelectedGender('male');
    handleLogValues(name, age, 'male');
  };

  const handleFemaleCheckbox = female => {
    setFemaleChecked(female);
    setMaleChecked(false);
    setSelectedGender('female');
    handleLogValues(name, age, 'female');
  };

  const handleShowDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleConfirm = selectedDate => {
    setDob(selectedDate);
    setDatePickerVisibility(false);
  };

  const handleCancel = () => {
    setDatePickerVisibility(false);
  };

  // Logging the values
  const handleLogValues = (name, age, gender) => {
    console.log(
      `Name is => ${name}, 
       Age is => ${age},
       Selected Gender is => ${gender},
       Date of Birth is => ${dob.toLocaleDateString()}`,
    );
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
                <CheckBox
                  style={styles.maleCheckBox}
                  value={maleChecked}
                  onValueChange={handleMaleCheckbox}
                />
                <Text style={styles.maleCheckBoxText}>Male</Text>
                <CheckBox
                  style={styles.femaleCheckBox}
                  value={femaleChecked}
                  onValueChange={handleFemaleCheckbox}
                />
                <Text style={styles.femaleCheckBoxText}>Female</Text>
              </View>
            </View>
          </View>
          <View style={styles.inputFieldContainerDOB}>
            <Text style={styles.selectDOBText}>Date of Birth :</Text>
            <Text style={styles.dobText}>{dob.toLocaleDateString()}</Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleShowDatePicker}>
              <Text style={styles.buttonText}>Select Date</Text>
            </TouchableOpacity>
            {isDatePickerVisible && (
              <DateTimePicker
                value={dob}
                mode="date"
                display="default"
                onChange={(event, selectedDate) =>
                  handleConfirm(selectedDate || dob)
                }
              />
            )}
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
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(5),
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
  maleCheckBox: {
    margin: 20,
  },
  maleCheckBoxText: {
    marginRight: 40,
    marginTop: 20,
    color: 'white',
    fontSize: responsiveFontSize(1.2),
  },
  femaleCheckBox: {
    margin: 20,
  },
  femaleCheckBoxText: {
    marginRight: 40,
    marginTop: 20,
    color: 'white',
    fontSize: responsiveFontSize(1.2),
  },
  inputFieldContainerDOB: {
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(5),
    flexDirection: 'row',
    backgroundColor: '#006eff',
    top: 30,
    marginLeft: 50,
    borderRadius: 10,
    marginBottom: 40,
    marginRight: 50,
  },
  selectDOBText: {
    color: 'white',
    fontSize: responsiveFontSize(1.2),
    margin: 20,
  },
  dobText: {
    color: 'white',
    fontSize: responsiveFontSize(1.2),
    marginLeft: 90,
    marginTop: 20,
  },
  buttonContainer: {
    backgroundColor: '#3381ff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 5,
    marginLeft: 60,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: responsiveFontSize(1),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Form1;
