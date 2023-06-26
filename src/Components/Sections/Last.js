import React, {useEffect} from 'react';
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
import CheckBox from '@react-native-community/checkbox';
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../state/index';

const Last = () => {
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
  const recommendationOptions = useSelector(
    state => state.lastSection.recommendationOptions,
  );
  const accessorsName = useSelector(state => state.lastSection.accessorsName);
  const accessorsDesignation = useSelector(
    state => state.lastSection.accessorsDesignation,
  );
  // handle states
  const actions = bindActionCreators(actionCreators, dispatch);
  const recommendationOptionsHandler = recommendationOption => {
    const updatedOptions = {
      ...recommendationOptions,
      [recommendationOption]: !recommendationOptions[recommendationOption],
    };
    actions.updateRecommendationOptions(updatedOptions);
  };
  const accessorNameHandler = text => {
    actions.updateAssessorsName(text);
  };
  const accessorDesignationHandler = text => {
    actions.updateAssessorsDesignation(text);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Section 19 => Recommendations */}
        <View style={styles.inputFieldContainerS17}>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Recommendations
            </Text>
            <View style={{flexDirection: 'column'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: wp('1%'),
                  marginHorizontal: wp('5%'),
                }}>
                <CheckBox
                  value={recommendationOptions.Physiotherapy}
                  onValueChange={() =>
                    recommendationOptionsHandler('Physiotherapy')
                  }
                />
                <Text style={styles.checkboxLabel}>Physiotherapy</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: wp('1%'),
                  marginHorizontal: wp('5%'),
                }}>
                <CheckBox
                  value={recommendationOptions.SensoryIntegration}
                  onValueChange={() =>
                    recommendationOptionsHandler('SensoryIntegration')
                  }
                />
                <Text style={styles.checkboxLabel}>Sensory Integration</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: wp('1%'),
                marginHorizontal: wp('5%'),
              }}>
              <CheckBox
                value={recommendationOptions.OccupationalTherapy}
                onValueChange={() =>
                  recommendationOptionsHandler('OccupationalTherapy')
                }
              />
              <Text style={styles.checkboxLabel}>Occupational Therapy</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: wp('1%'),
                marginHorizontal: wp('5%'),
              }}>
              <CheckBox
                value={recommendationOptions.AquaticTherapy}
                onValueChange={() =>
                  recommendationOptionsHandler('AquaticTherapy')
                }
              />
              <Text style={styles.checkboxLabel}>Aquatic Therapy</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: wp('1%'),
                marginHorizontal: wp('5%'),
              }}>
              <CheckBox
                value={recommendationOptions.SpeechTherapy}
                onValueChange={() =>
                  recommendationOptionsHandler('SpeechTherapy')
                }
              />
              <Text style={styles.checkboxLabel}>Speech Therapy</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: wp('1%'),
                marginHorizontal: wp('5%'),
              }}>
              <CheckBox
                value={recommendationOptions.RemedialTherapy}
                onValueChange={() =>
                  recommendationOptionsHandler('RemedialTherapy')
                }
              />
              <Text style={styles.checkboxLabel}>Remedial Therapy</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: wp('5%'),
                marginVertical: wp('1%'),
              }}>
              <CheckBox
                value={recommendationOptions.BehavioralTherapy}
                onValueChange={() =>
                  recommendationOptionsHandler('BehavioralTherapy')
                }
              />
              <Text style={styles.checkboxLabel}>Behavioral Therapy</Text>
            </View>
          </View>
        </View>
        {/* Assessor section */}
        <View style={styles.objectiveAssesmentContainer}>
          <TextInput
            value={accessorsName}
            onChangeText={accessorNameHandler}
            keyboardType="ascii-capable"
            placeholder="Assessor's Name"
            placeholderTextColor="#FFFFFF"
            style={styles.objectiveAssesmentText}
          />
        </View>
        <View style={styles.objectiveAssesmentContainer}>
          <TextInput
            value={accessorsDesignation}
            onChangeText={accessorDesignationHandler}
            keyboardType="ascii-capable"
            placeholder="Assessor's Designation"
            placeholderTextColor="#FFFFFF"
            style={styles.objectiveAssesmentText}
          />
        </View>
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
  inputFieldContainerS17: {
    width: wp('90%'),
    height: null,
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  checkboxLabel: {
    color: 'white',
    fontSize: wp('3%'),
    marginHorizontal: wp('3%'),
  },
});

export default Last;
