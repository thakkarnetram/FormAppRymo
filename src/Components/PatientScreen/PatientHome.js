/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Text,
  PermissionsAndroid,
  Image,
  Modal,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../state/index';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {FloatingAction} from 'react-native-floating-action';
import db from '../../db/db';

const PatientHome = ({navigation}) => {
  // locking screen to potrait mode
  // declaring states

  useEffect(() => {
    openDatabase();
    fetchPatientList();
  }, []);

  const dispatch = useDispatch();
  const patientList = useSelector(state => state.patient.patientList);
  const newPatientName = useSelector(state => state.patient.patientName);
  const patientImage = useSelector(state => state.patient.patientImage);
  const address = useSelector(state => state.patient.patientAddress);
  const contact = useSelector(state => state.patient.patientContact);
  // handlers
  const actions = bindActionCreators(actionCreators, dispatch);
  const [isAddModalVisible, setAddModalVisible] = useState(false);

  const openDatabase = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS patient_data (_id INTEGER PRIMARY KEY AUTOINCREMENT, patient_name TEXT, patient_address TEXT, patient_contact TEXT, patient_image BLOB, patient_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, patient_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)',
        [],
        (_, res) => {
          if (res.rowsAffected > 0) console.log('Table created');
          else console.log('Table exists ');
        },
        (_, error) => {
          console.log('Error creating patient table', error);
        },
      );
    });
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='form_data' ",
        [],
        (txn, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS form_data', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS form_data (' +
                'ID INTEGER PRIMARY KEY AUTOINCREMENT,' +
                'patient_id INTEGER,' + // Add the foreign key column right after the primary key
                'form_data TEXT,' +
                'patient_data_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,' +
                'patient_data_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,' +
                'FOREIGN KEY (patient_id) REFERENCES patient_data (_id)' + // Add the foreign key constraint
                ')',
            );
            console.log('Created table');
          } else {
            console.log('Already created table');
          }
        },
      );
    });
  };

  const fetchPatientList = () => {
    // fetching the patientlist from sqlite
    db.transaction(txn => {
      txn.executeSql(
        'SELECT _id , patient_name , patient_address , patient_contact , patient_image FROM patient_data',
        [],
        (_, res) => {
          const patients = [];
          for (let i = 0; i < res.rows.length; i++) {
            const patient = res.rows.item(i);
            const patientData = {
              id: patient._id,
              name: patient.patient_name,
              address: patient.patient_address,
              contact: patient.patient_contact,
              image: patient.patient_image,
            };
            patients.push(patientData);
          }
          actions.updatePatientList(patients);
        },
        (_, error) => {
          console.log("Could't Fetch the patient list", error);
        },
      );
    });
  };

  const handleAddPatient = () => {
    console.log('ho');
    if (newPatientName.trim() !== '') {
      // adding patient & details to sqlite
      console.log('hoa');
      db.transaction(txn => {
        txn.executeSql(
          'INSERT INTO patient_data (patient_name, patient_address, patient_contact, patient_image) VALUES (?, ?, ?, ?)',
          [newPatientName, address, contact, patientImage],
          (_, res) => {
            if (res.rowsAffected > 0)
              console.log('Patient added to database ' + newPatientName);
            else console.log('Failed to add patient');
          },
          (_, error) => {
            console.log('Error adding patient' + error);
          },
        );
      });
      setAddModalVisible(false);
      db.transaction(txn => {
        txn.executeSql(
          'SELECT * FROM patient_data ORDER BY patient_created_at DESC LIMIT 1',
          [],
          (_, res) => {
            let patientData = res.rows.item(0);
            let newPatient = {
              id: patientData._id,
              name: patientData.patient_name,
              address: patientData.patient_address,
              contact: patientData.patient_contact,
              image: patientData.patient_image,
            };
            actions.updatePatientList([...patientList, newPatient]);
            actions.updatePatientName('');
            actions.updatePatientAddress('');
            actions.updatePatientContact('');
            actions.updatePatientImageMain(null);
          },
        );
      });
    }
  };

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };
  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    actions.updatePatientImageMain(result.assets[0].uri);
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updatePatientImageMain(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };

  const navigateToFormPage = (
    patientId,
    patientName,
    address,
    contact,
    image,
  ) => {
    navigation.navigate('Pediatric Assessment', {
      selectedPatientId: patientId,
      selectedPatientName: patientName,
      selectedAddress: address,
      selectedContact: contact,
      selectedImage: image,
    });
  };

  const resetModalFields = () => {
    setAddModalVisible(true);
    actions.updatePatientName('');
    actions.updatePatientAddress('');
    actions.updatePatientContact('');
  };

  const floatingActions = [
    {
      text: 'Add Patient ',
      name: 'Patient Add',
      position: 1,
      icon: require('../../assets/plus.png'),
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPatientList, setFilteredPatientList] = useState([]);

  const handleSearch = text => {
    setSearchQuery(text);

    if (text.trim() === '') {
      setFilteredPatientList([]);
    } else {
      const filteredList = patientList.filter(patient =>
        patient.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredPatientList(filteredList);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/home.png')}
        style={{
          width: wp('90%'),
          height: hp('17%'),
          alignSelf: 'center',
          marginVertical: wp('5%'),
        }}
      />

      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.header}>Patient</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Patient"
            value={searchQuery}
            placeholderTextColor={'black'}
            onChangeText={handleSearch}
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.container1}>
          <View style={styles.patientContainer}>
            <View style={styles.patientListContainer}>
              {searchQuery.trim() === ''
                ? patientList.map((patient, index) => {
                    const {id, name, image} = patient;
                    console.log('Patient List NAME ' + name);
                    return (
                      <TouchableOpacity
                        key={index}
                        style={styles.patientItem}
                        onPress={() => {
                          navigateToFormPage(
                            patient.id,
                            patient.name,
                            patient.address,
                            patient.contact,
                            patient.image,
                          );
                        }}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          {image ? (
                            <Image
                              source={{uri: image}}
                              style={styles.patientImage}
                            />
                          ) : (
                            <Image
                              source={require('../../assets/profile.png')}
                              style={styles.patientImage}
                            />
                          )}
                          <View style={styles.patientNameContainer}>
                            <Text style={styles.patientText}>{name}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })
                : filteredPatientList.map((patient, index) => {
                    const {id, name, image} = patient;
                    console.log('FILTERED NAME ' + name);
                    return (
                      <TouchableOpacity
                        key={index}
                        style={styles.patientItem}
                        onPress={() => {
                          navigateToFormPage(
                            patient.id,
                            patient.name,
                            patient.address,
                            patient.contact,
                            patient.image,
                          );
                        }}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          {image && (
                            <Image
                              source={{uri: image}}
                              style={styles.patientImage}
                            />
                          )}
                          <View style={styles.patientNameContainer}>
                            <Text style={styles.patientText}>{name}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.containerFloat}>
        <View style={styles.floatingContainer}>
          <FloatingAction
            actions={floatingActions}
            onPressItem={resetModalFields}
            buttonSize={90}
            position="right"
            iconHeight={30}
            iconWidth={30}
          />
        </View>
      </View>
      <Image
        source={require('../../assets/home2.png')}
        style={{
          width: wp('100%'),
          height: hp('17%'),
          marginVertical: wp('5%'),
        }}
      />
      <Modal
        visible={isAddModalVisible}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Patient</Text>
            <View style={styles.headContainer}>
              <Text style={styles.headText}>Name</Text>
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter name"
              placeholderTextColor={'black'}
              value={newPatientName}
              onChangeText={text => actions.updatePatientName(text)}
            />
            <View style={styles.headContainer}>
              <Text style={styles.headText}>Address</Text>
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter address"
              placeholderTextColor={'black'}
              value={address}
              onChangeText={text => actions.updatePatientAddress(text)}
            />
            <View style={styles.headContainer}>
              <Text style={styles.headText}>Contact</Text>
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter contact"
              keyboardType="numeric"
              placeholderTextColor={'black'}
              value={contact}
              onChangeText={text => actions.updatePatientContact(text)}
            />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={openGallery} style={styles.imageBtn}>
                <Text style={styles.buttonText}>Select Patient Image</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={openCamera} style={styles.imageBtn}>
                <Text style={styles.buttonText}>Click Patient Image</Text>
              </TouchableOpacity>
            </View>
            {patientImage && (
              <Image source={{uri: patientImage}} style={styles.patientImage} />
            )}
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setAddModalVisible(false)}>
                <Text style={styles.buttonText1}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleAddPatient}>
                <Text style={styles.buttonText1}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageBtn: {
    marginHorizontal: hp('2%'),
    marginVertical: hp('2%'),
  },
  container: {
    flex: 1,
    padding: 16,
  },
  container1: {
    flex: 1,
  },
  patientContainer: {
    marginBottom: 20,
  },
  patientImage: {
    borderRadius: 20,
    width: 50,
    height: 50,
    left: 50,
    top: 10,
  },
  selectImageButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  header: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#032491',
    marginVertical: wp('3%'),
    marginHorizontal: wp('3%'),
  },
  patientListContainer: {
    marginVertical: wp('3%'),
    marginHorizontal: wp('3%'),
  },
  patientItem: {
    borderRadius: 15,
    backgroundColor: '#9cb3ff',
    height: hp('7%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('3%'),
  },
  patientText: {
    top: 10,
    left: 40,
    marginVertical: wp('1.5%'),
    color: '#082173',
    marginHorizontal: wp('3%'),
    fontSize: wp('3%'),
  },
  addButton: {
    backgroundColor: 'blue',
    padding: wp('2%'),
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: wp('2.5%'),
    fontWeight: 'bold',
  },
  buttonText1: {
    color: 'white',
    fontSize: wp('3%'),
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
    height: null,
  },
  modalTitle: {
    fontSize: wp('3%'),
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  headText: {
    color: 'black',
    fontSize: wp('2.5%'),
  },
  headContainer: {
    marginRight: hp('40%'),
    marginVertical: wp('1.5%'),
    height: hp('2%'),
    width: wp('20%'),
  },
  textInput: {
    width: '100%',
    height: hp('5%'),
    borderWidth: 1,
    color: 'black',
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    backgroundColor: 'blue',
    padding: wp('1.5%'),
    width: wp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: wp('2%'),
    marginVertical: wp('2%'),
  },
  patientNameContainer: {
    flex: 1,
    marginLeft: wp('1%'), // Add spacing between the image and the patient name
  },
  searchContainer: {
    width: wp('70%'),
    height: hp('5%'),
    marginVertical: wp('2%'),
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
    color: 'black',
  },
  searchButton: {
    marginLeft: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 16,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PatientHome;
