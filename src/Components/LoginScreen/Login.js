import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';
import {getOTP} from '../../state/action-creators/index';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({getOTP, navigation}) => {
  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations(); // Unlocks all orientations when the component unmounts
    };
  }, []);
  // Immersive fullScreen
  Immersive.setImmersive(true);
  const verifyOtpLogin = async () => {
    try {
      const response = await fetch(
        `http://3.25.162.121:8090/cb/verify-otp?otp=${otp}`,
      );
      const json = await response.text();
      if (response.status === 200) {
        validToast();
        AsyncStorage.setItem('isLoggedIn', 'true');
      } else if (response.status === 401) {
        invalidToast();
        navigation.navigate('PatientHome');
      }
      return console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  const validToast = () => {
    Toast.show({
      type: 'success',
      text1: 'OTP Verified ',
    });
  };
  const invalidToast = () => {
    Toast.show({
      type: 'error',
      text1: 'OTP Invalid ',
    });
  };
  const [otp, setOtp] = useState('');

  return (
    <SafeAreaView style={styles.headContainer}>
      <ScrollView>
        <View>
          <Text style={styles.headText}>Login with OTP </Text>
          <View style={styles.otpContainer}>
            <TouchableOpacity style={styles.otpButton} onPress={() => getOTP()}>
              <Text style={styles.otpText}>Get OTP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.enterText}>Enter OTP to Login</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Enter OTP"
              keyboardType="numeric"
              placeholderTextColor={'black'}
              value={otp}
              onChangeText={setOtp}
            />
          </View>
          <View style={styles.loginContainer}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                navigation.navigate('PatientHome');
              }}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    flex: 1,
    backgroundColor: '#cddcf7',
  },
  headText: {
    fontSize: wp('5%'),
    marginVertical: wp('8%'),
    marginHorizontal: hp('5%'),
    color: 'black',
  },
  otpContainer: {
    width: wp('80%'),
    height: hp('10%'),
    marginVertical: wp('2%'),
    marginHorizontal: hp('5%'),
  },
  otpButton: {
    height: hp('5%'),
    justifyContent: 'center',
    backgroundColor: '#047ec9',
    alignItems: 'center',
  },
  otpText: {
    fontSize: wp('3.5%'),
    color: 'white',
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: '#076bad',
    marginVertical: wp('2%'),
    borderRadius: 15,
    height: hp('20%'),
    marginHorizontal: hp('3%'),
  },
  enterText: {
    fontSize: wp('3%'),
    color: 'white',
    marginVertical: wp('5%'),
    marginHorizontal: hp('3%'),
    fontWeight: 'bold',
  },
  inputText: {
    fontSize: wp('3%'),
    color: 'white',
    marginVertical: wp('1%'),
    marginHorizontal: hp('3%'),
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  loginContainer: {
    width: wp('80%'),
    height: null,
    marginVertical: wp('2%'),
    marginHorizontal: hp('6%'),
  },
  loginButton: {
    backgroundColor: '#02416b',
    marginVertical: wp('10%'),
    borderRadius: 15,
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: hp('3%'),
  },
  loginText: {
    fontSize: wp('3.5%'),
    color: 'white',
    fontWeight: 'bold',
  },
});

export default connect(null, {getOTP})(LoginScreen);
