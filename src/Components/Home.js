/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate('Form');
            }}>
            <Text style={styles.buttonTextStyle}>Form 1</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: 'white',
    height: responsiveScreenHeight(100),
    width: responsiveScreenHeight(100),
  },
  scrollViewContainer: {
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: '#e8e8e8',
    height: responsiveScreenHeight(100),
    width: responsiveScreenHeight(100),
  },
  buttonStyle: {
    marginLeft: 50,
    marginTop: 50,
    borderRadius: 20,
    backgroundColor: 'black',
    height: responsiveHeight(5),
    width: responsiveWidth(20),
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
    marginLeft: 5,
    fontSize: responsiveScreenFontSize(1.2),
  },
});

export default Home;
