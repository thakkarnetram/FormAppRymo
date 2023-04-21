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
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';
const Pediatric_Assessment = ({navigation}) => {
  Orientation.lockToPortrait();

  useEffect(() => {
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  Immersive.setImmersive(true);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.container}>
          <Image
            source={require('../assets/rymoPng.png')}
            style={{
              width: wp('45%'),
              height: hp('17%'),
              marginHorizontal: wp('25%'),
              marginVertical: wp('10%'),
            }}
          />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate('Phase 1 Assessment Form');
            }}>
            <Text style={styles.buttonTextStyle}>Phase 1 Assessment</Text>
          </TouchableOpacity>
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
