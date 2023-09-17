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
import CheckBox from '@react-native-community/checkbox';
import Immersive from 'react-native-immersive';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../state/index';

const Section7 = () => {
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
  const hypotonia = useSelector(state => state.section7.hypotonia);
  const hypertonia = useSelector(state => state.section7.hypertonia);
  const deformitiesR = useSelector(state => state.section7.deformitiesR);
  const deformitiesL = useSelector(state => state.section7.deformitiesL);
  const contractureR = useSelector(state => state.section7.contractureR);
  const contractureL = useSelector(state => state.section7.contractureL);
  const tightnessR = useSelector(state => state.section7.tightnessR);
  const tightnessL = useSelector(state => state.section7.tightnessL);
  const actions = bindActionCreators(actionCreators, dispatch);

  // handlers
  const hypotoniaHandler = hypotonia => {
    actions.updateToneHypotonia(hypotonia);
  };
  const hypertoniaHandler = hypertonia => {
    actions.updateToneHypertonia(hypertonia);
  };
  const deformitiesRHandler = deformitiesR => {
    actions.updateDeformitiesRight(deformitiesR);
  };
  const deformitiesLHandler = deformitiesL => {
    actions.updateDeformitiesLeft(deformitiesL);
  };
  const contractureRHandler = contractureR => {
    actions.updateContractureRight(contractureR);
  };
  const contractureLHandler = contractureL => {
    actions.updateContractureLeft(contractureL);
  };
  const tightnessRHandler = tightnessR => {
    actions.updateTightnessRight(tightnessR);
  };
  const tightnessLHandler = tightnessL => {
    actions.updateTightnessLeft(tightnessL);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Objective assessment */}
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('4%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          Objective assessment
        </Text>
        <Text
          style={{
            color: '#195794',
            fontSize: wp('3%'),
            marginHorizontal: wp('5%'),
          }}>
          Tone Options
        </Text>
        <View style={styles.checkBoxContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.toneHead}>Tone</Text>
            <View style={styles.toneContainer}>
              <CheckBox
                style={styles.hypotoniaYes}
                value={hypotonia}
                onValueChange={hypotoniaHandler}
              />
              <Text style={styles.hypotoniaYesText}>Hypotonia</Text>
              <CheckBox
                style={styles.hypertoniaNo}
                value={hypertonia}
                onValueChange={hypertoniaHandler}
              />
              <Text style={styles.hypertoniaNoText}>Hypertonia</Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            color: '#195794',
            fontSize: wp('3%'),
            marginHorizontal: wp('5%'),
          }}>
          Deformities Right
        </Text>
        <View style={styles.objectiveassessmentContainer}>
          <TextInput
            value={deformitiesR}
            onChangeText={deformitiesRHandler}
            keyboardType="ascii-capable"
            multiline={true}
            numberOfLines={4}
            placeholder="Deformities Right"
            placeholderTextColor="#FFFFFF"
            style={styles.objectiveassessmentText}
          />
        </View>
        <Text
          style={{
            color: '#195794',
            fontSize: wp('3%'),
            marginHorizontal: wp('5%'),
          }}>
          Deformities Left
        </Text>
        <View style={styles.objectiveassessmentContainer}>
          <TextInput
            value={deformitiesL}
            onChangeText={deformitiesLHandler}
            keyboardType="ascii-capable"
            multiline={true}
            numberOfLines={4}
            placeholder="Deformities Left"
            placeholderTextColor="#FFFFFF"
            style={styles.objectiveassessmentText}
          />
        </View>
        <Text
          style={{
            color: '#195794',
            fontSize: wp('3%'),
            marginHorizontal: wp('5%'),
          }}>
          Contracture Right
        </Text>
        <View style={styles.objectiveassessmentContainer}>
          <TextInput
            value={contractureR}
            onChangeText={contractureRHandler}
            keyboardType="ascii-capable"
            multiline={true}
            numberOfLines={4}
            placeholder="Contracture Right"
            placeholderTextColor="#FFFFFF"
            style={styles.objectiveassessmentText}
          />
        </View>
        <Text
          style={{
            color: '#195794',
            fontSize: wp('3%'),
            marginHorizontal: wp('5%'),
          }}>
          Contracture Left
        </Text>
        <View style={styles.objectiveassessmentContainer}>
          <TextInput
            value={contractureL}
            onChangeText={contractureLHandler}
            keyboardType="ascii-capable"
            multiline={true}
            numberOfLines={4}
            placeholder="Contracture Left"
            placeholderTextColor="#FFFFFF"
            style={styles.objectiveassessmentText}
          />
        </View>
        <Text
          style={{
            color: '#195794',
            fontSize: wp('3%'),
            marginHorizontal: wp('5%'),
          }}>
          Tightness Right
        </Text>
        <View style={styles.objectiveassessmentContainer}>
          <TextInput
            value={tightnessR}
            onChangeText={tightnessRHandler}
            keyboardType="ascii-capable"
            multiline={true}
            numberOfLines={4}
            placeholder="Tightness Right"
            placeholderTextColor="#FFFFFF"
            style={styles.objectiveassessmentText}
          />
        </View>
        <Text
          style={{
            color: '#195794',
            fontSize: wp('3%'),
            marginHorizontal: wp('5%'),
          }}>
          Tightness Left
        </Text>
        <View style={styles.objectiveassessmentContainer}>
          <TextInput
            value={tightnessL}
            onChangeText={tightnessLHandler}
            keyboardType="ascii-capable"
            multiline={true}
            numberOfLines={4}
            placeholder="Tightness Left"
            placeholderTextColor="#FFFFFF"
            style={styles.objectiveassessmentText}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  checkBoxContainer: {
    width: wp('90%'),
    height: hp('7%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  toneHead: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('2%'),
  },
  toneContainer: {
    marginHorizontal: wp('8%'),
    marginVertical: hp('1%'),
    flexDirection: 'row',
  },
  hypotoniaYes: {
    marginVertical: hp('1.2%'),
    marginHorizontal: wp('2%'),
  },
  hypotoniaYesText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('1%'),
  },
  hypertoniaNo: {
    marginVertical: hp('1.2%'),
    marginHorizontal: wp('3%'),
  },
  hypertoniaNoText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: hp('1%'),
    marginHorizontal: wp('3%'),
  },
  objectiveassessmentContainer: {
    width: wp('90%'),
    height: hp('10%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  objectiveassessmentText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('3%'),
    marginHorizontal: wp('1.5%'),
  },
});

export default Section7;
