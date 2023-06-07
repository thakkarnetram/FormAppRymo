import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Picker} from '@react-native-picker/picker';
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../state/index';

const Section10 = () => {
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
  const upperExterimities = useSelector(
    state => state.section10.upperExterimities,
  );
  const lowerExterimities = useSelector(
    state => state.section10.lowerExterimities,
  );
  const asworthsComs = useSelector(state => state.section10.comsModifiedAshworth);

  //handlers
  const actions = bindActionCreators(actionCreators, dispatch);
  const upperExtremitiesHandler = upperExterimities => {
    actions.updateUpperExtermities(upperExterimities);
  };
  const lowerExtremitiesHandler = lowerExterimities => {
    actions.updateLowerExtermities(lowerExterimities);
  };
  const asworthsComsHandler = ashworthsComs => {
    actions.updateComsModifiedAshworth(ashworthsComs);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Modified Asworths */}
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('4%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          Modified Ashworth's
        </Text>
        <View style={styles.normalContainer}>
          <View style={styles.row}>
            <Text style={styles.rowText}>Upper Extremities</Text>
            <View style={styles.bigContainer}>
              <Picker
                selectedValue={upperExterimities}
                onValueChange={upperExtremitiesHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="1"
                  value="1"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="2"
                  value="2"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="3"
                  value="3"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="4"
                  value="4"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="5"
                  value="5"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Lower Extremities</Text>
            <View style={styles.bigContainer}>
              <Picker
                selectedValue={lowerExterimities}
                onValueChange={lowerExtremitiesHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="1"
                  value="1"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="2"
                  value="2"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="3"
                  value="3"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="4"
                  value="4"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="5"
                  value="5"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <TextInput
            value={asworthsComs}
            onChangeText={asworthsComsHandler}
            keyboardType="ascii-capable"
            placeholder="Comments"
            placeholderTextColor="#FFFFFF"
            style={styles.coms}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  normalContainer: {
    width: wp('90%'),
    height: hp('30%'),
    flex: 1,
    paddingVertical: wp('5%'),
    paddingHorizontal: wp('5%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowText: {
    marginVertical: wp('2.2%'),
    color: 'white',
    fontSize: wp('2.85%'),
  },
  bigContainer: {
    width: wp('20%'),
    height: hp('5%'),
    marginHorizontal: wp('5%'),
  },
  inputTextContainerComs: {
    flexDirection: 'column',
    width: wp('85%'),
    height: hp('6%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  coms: {
    color: 'white',
    fontSize: wp('3%'),
    marginVertical: wp('1%'),
    marginHorizontal: wp('1.5%'),
  },
});

export default Section10;
