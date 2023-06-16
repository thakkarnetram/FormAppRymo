import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
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

const Section13 = () => {
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
  const adl = useSelector(state => state.section13.adl);
  //handlers
  const actions = bindActionCreators(actionCreators, dispatch);
  const adlHandler = text => {
    actions.updateAdl(text);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/* ADL */}
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('3.4%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          ADL - Activities for Daily Living
          <View style={styles.objectiveAssesmentContainer}>
            <TextInput
              value={adl}
              onChangeText={adlHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Comments"
              placeholderTextColor="#FFFFFF"
              style={styles.objectiveAssesmentText}
            />
          </View>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  objectiveAssesmentContainer: {
    width: wp('90%'),
    height: hp('10%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  objectiveAssesmentText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('3%'),
    marginHorizontal: wp('1.5%'),
  },
});

export default Section13;
