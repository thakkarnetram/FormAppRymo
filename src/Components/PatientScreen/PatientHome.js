import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Text,
  Modal,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../state/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PatientHome = () => {
  // locking screen to potrait mode
  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations(); // Unlocks all orientations when the component unmounts
    };
  }, []);
  // Immersive fullScreen
  Immersive.setImmersive(true);
  // declaring states
  const dispatch = useDispatch();
  const patientList = useSelector(state => state.patient.patientList);
  const newPatientName = useSelector(state => state.patient.patientName);

  // handlers
  const actions = bindActionCreators(actionCreators, dispatch);
  const [isAddModalVisible, setAddModalVisible] = useState(false);

  const handleAddPatient = () => {
    if (newPatientName.trim() !== '') {
      actions.updatePatientList([...patientList, newPatientName]);
      actions.updatePatientName('');
      setAddModalVisible(false);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.patientContainer}>
            <View>
              <Text style={styles.header}>Patient List</Text>
            </View>
            <View style={styles.patientListContainer}>
              {patientList.map((patient, index) => (
                <TouchableOpacity key={index} style={styles.patientItem}>
                  <Text style={styles.patientText}>{patient}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setAddModalVisible(true)}>
            <Text style={styles.buttonText}>Add Patient</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        visible={isAddModalVisible}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Patient</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter name"
              placeholderTextColor={'black'}
              value={newPatientName}
              onChangeText={text => actions.updatePatientName(text)}
            />
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setAddModalVisible(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleAddPatient}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  patientContainer: {
    marginBottom: 20,
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
    backgroundColor: '#9cb3ff',
    height: hp('5%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('3%'),
  },
  patientText: {
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
    width: '80%',
  },
  modalTitle: {
    fontSize: wp('3%'),
    fontWeight: 'bold',
    marginBottom: 10,
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
});

export default PatientHome;
