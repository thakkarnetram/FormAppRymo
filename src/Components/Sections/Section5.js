import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../state/index';

const Section5 = () => {
  // locking screen to potrait mode
  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations(); // Unlocks all orientations when the component unmounts
    };
  }, []);
  // Immersive fullScreen
  Immersive.setImmersive(true);
  // Declaring all the states
  const dispatch = useDispatch();
  const sightIntact = useSelector(state => state.section5.sightIntact);
  const sightNotIntact = useSelector(state => state.section5.sightNotIntact);
  const hearingIntact = useSelector(state => state.section5.hearingIntact);
  const hearingNotIntact = useSelector(
    state => state.section5.hearingNotIntact,
  );
  const speechIntact = useSelector(state => state.section5.speechIntact);
  const speechNotIntact = useSelector(state => state.section5.speechNotIntact);
  const carriedByParent = useSelector(state => state.section5.carriedByParent);
  const walkingSticks = useSelector(state => state.section5.walkingSticks);
  const wheelChair = useSelector(state => state.section5.wheelChair);
  const walkingWalker = useSelector(state => state.section5.walkingWalker);
  const walkingIndependently = useSelector(
    state => state.section5.walkingIndependently,
  );
  const actions = bindActionCreators(actionCreators, dispatch);
  // handlers
  const sightIntactHandler = sightIntact => {
    actions.updateSightIntact(sightIntact);
  };
  const sightNotIntactHandler = sightNotIntact => {
    actions.updateSightNotIntact(sightNotIntact);
  };
  const hearingIntactHandler = hearingIntact => {
    actions.updateHearingIntact(hearingIntact);
  };
  const hearingNotIntactHandler = hearingNotIntact => {
    actions.updateHearingNotIntact(hearingNotIntact);
  };
  const speechIntactHandler = speechIntact => {
    actions.updateSpeechIntact(speechIntact);
  };
  const speechNotIntactHandler = speechNotIntact => {
    actions.updateSpeechNotIntact(speechNotIntact);
  };
  const carriedByParentHandler = carriedByParent => {
    actions.updateCarriedbyParent(carriedByParent);
  };
  const walkingSticksHandler = walkingSticks => {
    actions.updateWalkingSticks(walkingSticks);
  };
  const wheelChairHandler = wheelChair => {
    actions.updateWheelChair(wheelChair);
  };
  const walkingWalkerHandler = walkingWalker => {
    actions.updateWalkingWalker(walkingWalker);
  };
  const walkingIndependentlyHandler = walkingIndependently => {
    actions.updateWalkingIndependently(walkingIndependently);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Section V => Subjective Assesment */}
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('4.5%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          Subjective Assesment
        </Text>
        <View style={styles.checkBoxContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.sightHead}>Sight </Text>
            <View style={styles.sightContainer}>
              <CheckBox
                style={styles.intactYes}
                value={sightIntact}
                onValueChange={sightIntactHandler}
              />
              <Text style={styles.intactYesText}>Intact</Text>
              <CheckBox
                style={styles.intactNo}
                value={sightNotIntact}
                onValueChange={sightNotIntactHandler}
              />
              <Text style={styles.intactNoText}>Not Intact</Text>
            </View>
          </View>
        </View>
        <View style={styles.checkBoxContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.hearingHead}>Hearing </Text>
            <View style={styles.hearingContainer}>
              <CheckBox
                style={styles.intactYes}
                value={hearingIntact}
                onValueChange={hearingIntactHandler}
              />
              <Text style={styles.intactYesText}>Intact</Text>
              <CheckBox
                style={styles.intactNo}
                value={hearingNotIntact}
                onValueChange={hearingNotIntactHandler}
              />
              <Text style={styles.intactNoText}>Not Intact</Text>
            </View>
          </View>
        </View>
        <View style={styles.checkBoxContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.speechHead}>Speech</Text>
            <View style={styles.speechContainer}>
              <CheckBox
                style={styles.intactYes}
                value={speechIntact}
                onValueChange={speechIntactHandler}
              />
              <Text style={styles.intactYesText}>Intact</Text>
              <CheckBox
                style={styles.intactNo}
                value={speechNotIntact}
                onValueChange={speechNotIntactHandler}
              />
              <Text style={styles.intactNoText}>Not Intact</Text>
            </View>
          </View>
        </View>
        <View style={styles.inputFieldContainer5Q}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.multipleChoiceHeader5Q}>
              Mode of Ambulation
            </Text>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={carriedByParent}
                onValueChange={carriedByParentHandler}
              />
              <Text style={styles.checkboxLabel5Q}>Carried By Parent</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={walkingSticks}
                onValueChange={walkingSticksHandler}
              />
              <Text style={styles.checkboxLabel5Q}>Walking Sticks</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox value={wheelChair} onValueChange={wheelChairHandler} />
              <Text style={styles.checkboxLabel5Q}>Wheel Chair</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={walkingWalker}
                onValueChange={walkingWalkerHandler}
              />
              <Text style={styles.checkboxLabel5Q}>Walking Walker</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={walkingIndependently}
                onValueChange={walkingIndependentlyHandler}
              />
              <Text style={styles.checkboxLabel5Q}>Walking Independently</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sightHead: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('2%'),
  },
  sightContainer: {
    marginHorizontal: wp('8%'),
    marginVertical: hp('1%'),
    flexDirection: 'row',
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  checkBoxContainer: {
    width: wp('90%'),
    height: hp('7%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },  
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: wp('1.3%'),
    marginHorizontal: wp('3%'),
  },
  checkboxLabel: {
    color: 'white',
    fontSize: wp('3%'),
    marginHorizontal: wp('3%'),
  },
  intactYes: {
    marginVertical: hp('1.2%'),
    marginHorizontal: wp('2%'),
  },
  intactYesText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('1%'),
  },
  intactNo: {
    marginVertical: hp('1.2%'),
    marginHorizontal: wp('3%'),
  },
  intactNoText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: hp('1%'),
    marginHorizontal: wp('3%'),
  },
  hearingHead: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('2%'),
  },
  hearingContainer: {
    marginHorizontal: wp('8%'),
    marginVertical: hp('1%'),
    flexDirection: 'row',
  },
  speechHead: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('2%'),
  },
  speechContainer: {
    marginHorizontal: wp('8%'),
    marginVertical: hp('1%'),
    flexDirection: 'row',
  },
  inputFieldContainer5Q: {
    width: wp('90%'),
    height: hp('35%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  multipleChoiceHeader5Q: {
    color: 'white',
    fontSize: wp('3.7%'),
    fontWeight: 'bold',
    marginVertical: wp('3.2%'),
    marginHorizontal: wp('4%'),
  },
  checkboxLabel5Q: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
  },
});

export default Section5;
