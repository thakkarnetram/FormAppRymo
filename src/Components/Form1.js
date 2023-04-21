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
  PermissionsAndroid,
  Platform,
  ScrollView,
  TextInput,
  StyleSheet,
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
import {Picker} from '@react-native-picker/picker';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FileSystem from 'react-native-fs';
import Share from 'react-native-share';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RNFS from 'react-native-fs';

// const Form1 = () => {
//   // Managing states of input values
//   const [name, setName] = useState();
//   const [age, setAge] = useState();
//   const [maleChecked, setMaleChecked] = useState(false);
//   const [femaleChecked, setFemaleChecked] = useState(false);
//   const [selectedGender, setSelectedGender] = useState('');
//   const [dob, setDob] = useState(new Date());
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // const [options, setOptions] = useState({
  //   carriedByParent: false,
  //   walking: false,
  //   walker: false,
  //   walkingSticks: false,
  //   wheelChair: false,
  // });
//   const [pickerSelectedValue, setPickerSelectedValue] = useState('');

//   // Functions for managing values onChange
//   const handleNameChange = text => {
//     setName(text);
//     handleLogValues(text, age);
//   };
//   const handleAgeChange = text => {
//     setAge(text);
//     handleLogValues(name, text);
//   };

//   // checkbox handlers
//   const handleMaleCheckbox = male => {
//     setMaleChecked(male);
//     setFemaleChecked(false);
//     setSelectedGender('male');
//     handleLogValues(name, age, 'male');
//   };

//   const handleFemaleCheckbox = female => {
//     setFemaleChecked(female);
//     setMaleChecked(false);
//     setSelectedGender('female');
//     handleLogValues(name, age, 'female');
//   };

//   const handleShowDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const handleConfirm = selectedDate => {
//     setDob(selectedDate);
//     setDatePickerVisibility(false);
//   };

//   // const handleCancel = () => {
//   //   setDatePickerVisibility(false);
//   // };

//   // Multiple choice checkbox handler
  // const handleOptionChange = option => {
  //   setOptions({...options, [option]: !options[option]});
  // };

  // const selectedValues = [];
  // Object.entries(options).forEach(([key, value]) => {
  //   if (value) {
  //     selectedValues.push(key);
  //   }
  // });
//   const logMCQ = console.log(`Selected Options: ${selectedValues.join(', ')}`);

//   // dropdown handlers
//   const handleValueChange = itemValue => {
//     setPickerSelectedValue(itemValue);
//   };

//   const logHealth = console.log(`Selected value is ${pickerSelectedValue}`);

//   // Logging the values
//   const handleLogValues = (name, age, gender) => {
//     console.log(
//       `Name is => ${name}, 
//        Age is => ${age},
//        Selected Gender is => ${gender},
//        Date of Birth is => ${dob.toLocaleDateString()} ,
//        Mode of Ambulation => ${logMCQ},
//        Health Status => ${logHealth}
//        `,
//     );
//   };

//   // Generating html
//   const generateHtml = attachmentUrl => {
//     let html = `
//     <html>
//       <head>
//         <style>
//           // Add your custom styles here
//         </style>
//       </head>
//       <body>
//         <h1>Form Data</h1>
//   `;

//     if (name) {
//       html += `<h2>Name: ${name}</h2>`;
//     }

//     if (age) {
//       html += `<h2>Age: ${age}</h2>`;
//     }

//     if (maleChecked || femaleChecked) {
//       const gender = maleChecked ? 'Male' : 'Female';
//       html += `<h2>Gender: ${gender}</h2>`;
//     }

//     if (dob) {
//       html += `<h2>Date of Birth: ${dob.toLocaleDateString()}</h2>`;
//     }

    // const modesOfAmbulation = Object.keys(options).filter(key => options[key]);
    // if (modesOfAmbulation.length > 0) {
    //   html += `<h2>Modes of Ambulation: ${modesOfAmbulation.join(', ')}</h2>`;
    // }

//     if (pickerSelectedValue) {
//       html += `<h2>Health Option: ${pickerSelectedValue}</h2>`;
//     }

//     if (attachmentUrl) {
//       html += `<a href="${attachmentUrl}" download>Download Attachment</a>`;
//     }

//     html += `
//       </body>
//     </html>
//   `;

//     return html;
//   };

//   // req storage permission
  // const requestStoragePermission = async () => {
  //   if (Platform.OS === 'android') {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //       {
  //         title: 'Storage Permission Required',
  //         message: 'This app needs access to your storage to save the PDF.',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('Storage permission denied.');
  //       return false;
  //     }
  //   }
  //   return true;
  // };

//   // function to generate PDF

  // const handleExportPdf = async (
  //   name,
  //   age,
  //   maleChecked,
  //   femaleChecked,
  //   dob,
  //   options,
  //   pickerSelectedValue,
  //   attachmentUrl,
  //   directory,
  //   fileName,
  // ) => {
  //   try {
  //     // Request storage permission if needed
  //     const hasPermission = await requestStoragePermission();
  //     if (!hasPermission) {
  //       return;
  //     }

  //     // Generate the HTML to convert to PDF
  //     const htmlContent = generateHtml(
  //       name,
  //       age,
  //       maleChecked,
  //       femaleChecked,
  //       dob,
  //       options,
  //       pickerSelectedValue,
  //       attachmentUrl,
  //     );

  //     // Create the options for the PDF conversion
  //     const pdfOptions = {
  //       html: htmlContent,
  //       fileName: fileName + '.pdf',
  //       directory: RNHTMLtoPDF.DocumentDirectory,
  //     };

  //     // Convert HTML to PDF and save to device
  //     const file = await RNHTMLtoPDF.convert(pdfOptions);
  //     console.log(`PDF saved to ${file.filePath} + PDF NAME ${fileName}`);
  //   } catch (error) {
  //     console.error('Failed to export PDF:', error);
  //   }
  // };

  // const handleSharePdf = async () => {
  //   try {
  //     // Generate the HTML to convert to PDF
  //     const htmlContent = generateHtml();

  //     // Create the options for the PDF conversion
  //     const options = {
  //       html: htmlContent,
  //       fileName: 'form.pdf',
  //       directory: 'Download',
  //     };

  //     // Convert HTML to PDF and save to device
  //     const file = await RNHTMLtoPDF.convert(options);

  //     // Share the PDF file using the Share module
  //     await Share.open({
  //       title: 'Share PDF',
  //       url: `file://${file.filePath}`,
  //       type: 'application/pdf',
  //       message: 'Check out this PDF!',
  //     });
  //   } catch (error) {
  //     console.error('Failed to share PDF:', error);
  //   }
  // };

//   return (
//     <SafeAreaView>
//       <ScrollView style={styles.scrollViewContainer}>
//         <View style={styles.container}>
//           <View style={styles.inputFieldContainer}>
            // <TextInput
            //   value={name}
            //   onChangeText={handleNameChange}
            //   keyboardType="ascii-capable"
            //   placeholder="Name"
            //   placeholderTextColor="#FFFFFF"
            //   style={styles.name}
            // />
//           </View>
//           <View style={styles.inputFieldContainer}>
//             <TextInput
//               value={age}
//               onChangeText={handleAgeChange}
//               keyboardType="numeric"
//               placeholder="Age"
//               placeholderTextColor="#FFFFFF"
//               style={styles.name}
//             />
//           </View>
          // <View style={styles.inputFieldContainer}>
          //   <View style={{flexDirection: 'row'}}>
          //     <Text style={styles.genderHead}>Select your Gender</Text>
          //     <View style={styles.checkBoxContainer}>
          //       <CheckBox
          //         style={styles.maleCheckBox}
          //         value={maleChecked}
          //         onValueChange={handleMaleCheckbox}
          //       />
          //       <Text style={styles.maleCheckBoxText}>Male</Text>
          //       <CheckBox
          //         style={styles.femaleCheckBox}
          //         value={femaleChecked}
          //         onValueChange={handleFemaleCheckbox}
          //       />
          //       <Text style={styles.femaleCheckBoxText}>Female</Text>
          //     </View>
          //   </View>
          // </View>
//           <View style={styles.inputFieldContainerDOB}>
//             <Text style={styles.selectDOBText}>Date of Birth :</Text>
//             <Text style={styles.dobText}>{dob.toLocaleDateString()}</Text>
//             <TouchableOpacity
//               style={styles.buttonContainer}
//               onPress={handleShowDatePicker}>
//               <Text style={styles.buttonText}>Select Date</Text>
//             </TouchableOpacity>
//             {isDatePickerVisible && (
//               <DateTimePicker
//                 value={dob}
//                 mode="date"
//                 display="default"
//                 onChange={(event, selectedDate) =>
//                   handleConfirm(selectedDate || dob)
//                 }
//               />
//             )}
//           </View>
          // <View style={styles.inputFieldContainerMCQ}>
          //   <View style={{flexDirection: 'column'}}>
          //     <Text style={styles.multipleChoiceHeader}>
          //       Mode of Ambulation:
          //     </Text>
          //     <View style={styles.checkboxWrapper}>
          //       <CheckBox
          //         value={options.carriedByParent}
          //         onValueChange={() => handleOptionChange('carriedByParent')}
          //       />
          //       <Text style={styles.checkboxLabel}>Carried by Parent</Text>
          //     </View>
          //     <View style={styles.checkboxWrapper}>
          //       <CheckBox
          //         value={options.walking}
          //         onValueChange={() => handleOptionChange('walking')}
          //       />
          //       <Text style={styles.checkboxLabel}>Walking</Text>
          //     </View>
          //     <View style={styles.checkboxWrapper}>
          //       <CheckBox
          //         value={options.walker}
          //         onValueChange={() => handleOptionChange('walker')}
          //       />
          //       <Text style={styles.checkboxLabel}>Walker</Text>
          //     </View>
          //     <View style={styles.checkboxWrapper}>
          //       <CheckBox
          //         value={options.walkingSticks}
          //         onValueChange={() => handleOptionChange('walkingSticks')}
          //       />
          //       <Text style={styles.checkboxLabel}>Walking Sticks</Text>
          //     </View>
          //     <View style={styles.checkboxWrapper}>
          //       <CheckBox
          //         value={options.wheelChair}
          //         onValueChange={() => handleOptionChange('wheelChair')}
          //       />
          //       <Text style={styles.checkboxLabel}>Wheel Chair</Text>
          //     </View>
          //   </View>
          // </View>
          // <View style={styles.inputFieldContainerPICKER}>
          //   <View style={{flexDirection: 'row'}}>
          //     <Text style={styles.healthOptionHead}>
          //       Select your Health Option
          //     </Text>
          //     <View style={styles.pickerContainer}>
          //       <Picker
          //         selectedValue={pickerSelectedValue}
          //         onValueChange={handleValueChange}>
          //         <Picker.Item
          //           label="Diet"
          //           value="diet"
          //           style={{color: 'white', fontSize: responsiveFontSize(1.2)}}
          //         />
          //         <Picker.Item
          //           label="Exercise"
          //           value="exercise"
          //           style={{color: 'white', fontSize: responsiveFontSize(1.2)}}
          //         />
          //         <Picker.Item
          //           label="Mental Health"
          //           value="mental_health"
          //           style={{color: 'white', fontSize: responsiveFontSize(1.2)}}
          //         />
          //       </Picker>
          //     </View>
          //   </View>
          // </View>
          // <View style={styles.inputFieldContainerEXPORT}>
          //   <TouchableOpacity
          //     style={styles.exportBtn}
          //     onPress={handleExportPdf}>
          //     <Text style={styles.exportText}>Save to Local Storage </Text>
          //   </TouchableOpacity>
          // </View>
          // <View style={styles.inputFieldContainerSHARE}>
          //   <TouchableOpacity style={styles.exportBtn} onPress={handleSharePdf}>
          //     <Text style={styles.exportText}>Share PDF</Text>
          //   </TouchableOpacity>
          // </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   scrollViewContainer: {
//     // backgroundColor: '#dee0df', // reference
//   },
  // inputFieldContainer: {
  //   width: wp('90%'),
  //   height: hp('5%'),
  //   backgroundColor: '#006eff',
  //   top: 30,
  //   marginLeft: 20,
  //   borderRadius: 10,
  //   marginBottom: 40,
  //   marginRight: 20,
  // },
//   name: {
//     color: 'black',
//     padding: 20,
//     fontSize: responsiveScreenFontSize(1),
//   },
//   genderHead: {
//     color: 'white',
//     fontSize: responsiveFontSize(1.2),
//     margin: 20,
//   },

  // checkBoxContainer: {
  //   marginLeft: 20,
  //   width: responsiveWidth(100),
  //   flexDirection: 'row',
  // },
  // maleCheckBox: {
  //   margin: 20,
  // },
  // maleCheckBoxText: {
  //   marginRight: 40,
  //   marginTop: 20,
  //   color: 'white',
  //   fontSize: responsiveFontSize(1.2),
  // },
  // femaleCheckBox: {
  //   margin: 20,
  // },
  // femaleCheckBoxText: {
  //   marginRight: 40,
  //   marginTop: 20,
  //   color: 'white',
  //   fontSize: responsiveFontSize(1.2),
  // },
  // inputFieldContainerDOB: {
  //   width: wp('25%'),
  //   height: hp('5%'),
  //   flexDirection: 'row',
  //   backgroundColor: '#006eff',
  //   top: 30,
  //   marginLeft: 50,
  //   borderRadius: 10,
  //   marginBottom: 40,
  //   marginRight: 50,
  // },
  // selectDOBText: {
  //   color: 'white',
  //   fontSize: responsiveFontSize(1.2),
  //   margin: 20,
  // },
  // dobText: {
  //   color: 'white',
  //   fontSize: responsiveFontSize(1.2),
  //   marginLeft: 90,
  //   marginTop: 20,
  // },
  // buttonContainer: {
  //   backgroundColor: '#3381ff',
  //   borderRadius: 5,
  //   paddingVertical: 10,
  //   paddingHorizontal: 30,
  //   marginTop: 5,
  //   marginLeft: 60,
  //   alignSelf: 'center',
  // },
  // buttonText: {
  //   color: 'white',
  //   fontSize: responsiveFontSize(1),
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  // inputFieldContainerMCQ: {
  //   width: responsiveScreenWidth(85),
  //   height: responsiveScreenHeight(25),
  //   flexDirection: 'column',
  //   backgroundColor: '#006eff',
  //   top: 30,
  //   marginLeft: 50,
  //   borderRadius: 10,
  //   marginBottom: 40,
  //   marginRight: 50,
  // },
  // multipleChoiceHeader: {
  //   color: 'white',
  //   fontSize: responsiveFontSize(1.25),
  //   margin: 20,
  // },
  // checkboxContainer: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   alignItems: 'center',
  // },
  // checkboxWrapper: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginBottom: 16,
  //   marginLeft: 20,
  // },
  // checkboxLabel: {
  //   color: 'white',
  //   fontSize: responsiveFontSize(1.2),
  //   marginLeft: 8,
  // },
//   inputFieldContainerPICKER: {
//     width: responsiveScreenWidth(85),
//     height: responsiveScreenHeight(6),
//     backgroundColor: '#006eff',
//     top: 30,
//     marginLeft: 50,
//     borderRadius: 10,
//     marginBottom: 40,
//     marginRight: 50,
//   },
  // pickerContainer: {
  //   width: responsiveScreenWidth(30),
  //   marginTop: 8,
  //   marginLeft: 60,
  // },
//   healthOptionHead: {
//     color: 'white',
//     fontSize: responsiveFontSize(1.25),
//     margin: 25,
//   },
  // inputFieldContainerEXPORT: {
  //   width: responsiveScreenWidth(85),
  //   height: responsiveScreenHeight(5),
  //   flexDirection: 'column',
  //   backgroundColor: '#10006eff',
  //   top: 30,
  //   marginLeft: 50,
  //   borderRadius: 10,
  //   marginBottom: 40,
  //   marginRight: 50,
  //   elevation: 10,
  // },
  // inputFieldContainerSHARE: {
  //   width: responsiveScreenWidth(85),
  //   height: responsiveScreenHeight(5),
  //   flexDirection: 'column',
  //   backgroundColor: '#004cff',
  //   top: 10,
  //   marginLeft: 50,
  //   borderRadius: 10,
  //   marginBottom: 40,
  //   marginRight: 50,
  //   elevation: 10,
  // },
  // exportBtn: {
  //   alignItems: 'center',
  // },
  // exportText: {
  //   fontSize: responsiveFontSize(1.4),
  //   color: 'white',
  //   margin: 12,
  // },
// });

// export default Form1;
