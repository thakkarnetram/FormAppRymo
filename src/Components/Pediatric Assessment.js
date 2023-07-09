/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';
import db from '../db/db';

const Pediatric_Assessment = ({navigation, route}) => {
  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations(); // Unlocks all orientations when the component unmounts
    };
  }, []);
  Immersive.setImmersive(true);
  const {selectedPatientName, selectedPatientId, selectedImage} = route.params;
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.container}>
          <Image
            source={require('../assets/home.png')}
            style={{
              width: wp('90%'),
              height: hp('17%'),
              alignSelf: 'center',
              marginVertical: wp('10%'),
            }}
          />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate('AssessmentCopy', {
                selectedPatientName: selectedPatientName,
                selectedPatientId: selectedPatientId,
              });
            }}>
            <Text style={styles.buttonTextStyle}>Start Assessment </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'lightblue',
              borderRadius: 15,
              width: wp('70%'),
              height: hp('6%'),
              marginVertical: wp('1%'),
              marginHorizontal: wp('15%'),
            }}>
            <Image source={{uri: selectedImage}} style={styles.patientImage} />
            <Text style={styles.patientText}>{selectedPatientName}</Text>
          </View>
          <Image
            source={require('../assets/home2.png')}
            style={{
              width: wp('100%'),
              height: hp('17%'),
              marginVertical: wp('10%'),
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: 'black',
    height: hp('100%'),
    width: wp('100%'),
  },
  scrollViewContainer: {
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: '#e8e8e8',
    height: hp('100%'),
    width: wp('100%'),
  },
  patientImage: {
    borderRadius: 20,
    width: 50,
    height: 50,
    marginHorizontal: wp('3%'),
  },
  patientText: {
    marginVertical: wp('1.5%'),
    color: '#082173',
    marginHorizontal: wp('3%'),
    fontSize: wp('3%'),
  },
  buttonStyle: {
    marginHorizontal: wp('20%'),
    marginVertical: wp('10%'),
    borderRadius: 20,
    backgroundColor: 'black',
    height: hp('5%'),
    width: wp('55%'),
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginVertical: hp('1%'),
    marginHorizontal: hp('1%'),
    fontSize: hp('2%'),
  },
  displayContainer: {
    flexDirection: 'row',
    marginHorizontal: hp('10%'),
    marginVertical: hp('1%'),
    borderRadius: 20,
    width: wp('70%'),
    height: hp('6%'),
    backgroundColor: 'lightblue',
    alignItems: 'center',
  },
  displayName: {
    color: 'black',
    fontSize: wp('3.5%'),
    marginVertical: hp('1.5%'),
    marginRight: wp('30%'),
  },
});

export default Pediatric_Assessment;
