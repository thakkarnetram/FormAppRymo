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

const Pediatric_Assessment = ({navigation}) => {
  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations(); // Unlocks all orientations when the component unmounts
    };
  }, []);
  Immersive.setImmersive(true);
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
              navigation.navigate('AssessmentCopy');
            }}>
            <Text style={styles.buttonTextStyle}>Start Assessment</Text>
          </TouchableOpacity>
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
});

export default Pediatric_Assessment;
