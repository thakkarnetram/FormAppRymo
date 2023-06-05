import React, { useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../state/index';

const Section3 = () => {
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
  const ciabYes = useSelector(state => state.section3.ciabYes);
  const ciabNo = useSelector(state => state.section3.ciabNo);
  const userBirthWeight = useSelector(state => state.section3.birthWeight);
  const userHeadCircumference = useSelector(
    state => state.section3.headCircumference,
  );
  const day1To7days = useSelector(state => state.section3.nicuStayOpt1);
  const week1To4weeks = useSelector(state => state.section3.nicuStayOpt2);
  const week4To4months = useSelector(state => state.section3.nicuStayOpt3);
  const reasonNicuStay = useSelector(state => state.section3.reasonforNICUStay);
  const presentHistory = useSelector(state => state.section3.presentHistory);
  const actions = bindActionCreators(actionCreators, dispatch);
  // Handlers
  const ciabYesHandler = ciabYes => {
    actions.updateCiabYes(ciabYes);
  };
  const ciabNoHandler = ciabNo => {
    actions.updateCiabNo(ciabNo);
  };
  const userBirthWeightHandler = birthWeight => {
    actions.updateBirthWeight(birthWeight);
  };
  const userHeadCircumferenceHandler = headCircumference => {
    actions.updateHeadCircumference(headCircumference);
  };
  const day1To7daysHandler = day1To7days => {
    actions.updateNICUStayOpt1(day1To7days);
  };
  const week1To4weeksHandler = week1To4weeks => {
    actions.updateNICUStayOpt2(week1To4weeks);
  };
  const week4To4monthsHandler = week4To4months => {
    actions.updateNICUStayOpt3(week4To4months);
  };
  const reasonNicuStayHandler = reasonNicuStay => {
    actions.updateReasonForNICUStay(reasonNicuStay);
  };
  const presentHistoryHandler = presentHistory => {
    actions.updatePresentHistory(presentHistory);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Section III => POST NATAL */}
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('5%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          Post Natal
        </Text>
        <View style={styles.checkBoxContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.ciabHead}>CIAB</Text>
            <View style={styles.ciabContainer}>
              <CheckBox
                style={styles.ciabYesCheck}
                value={ciabYes}
                onValueChange={ciabYesHandler}
              />
              <Text style={styles.ciabYesCheckText}>Yes</Text>
              <CheckBox
                style={styles.ciabNoCheck}
                value={ciabNo}
                onValueChange={ciabNoHandler}
              />
              <Text style={styles.ciabNoCheckText}>No</Text>
            </View>
          </View>
        </View>
        <View style={styles.weigthHeightContainer}>
          <TextInput
            value={userBirthWeight}
            onChangeText={userBirthWeightHandler}
            keyboardType="numeric"
            placeholder="Birth Weight (kg)"
            placeholderTextColor="#FFFFFF"
            style={styles.userWeightText}
          />
        </View>
        <View style={styles.weigthHeightContainer}>
          <TextInput
            value={userHeadCircumference}
            onChangeText={userHeadCircumferenceHandler}
            keyboardType="numeric"
            placeholder="Head Circumference (cm)"
            placeholderTextColor="#FFFFFF"
            style={styles.userHeightText}
          />
        </View>
        <View style={styles.inputFieldContainer3Q}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.multipleChoiceHeader}>NICU Stay</Text>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={day1To7days}
                onValueChange={day1To7daysHandler}
              />
              <Text style={styles.checkboxLabel}>1 day - 7 days</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={week1To4weeks}
                onValueChange={week1To4weeksHandler}
              />
              <Text style={styles.checkboxLabel}>1 week - 4 weeks</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={week4To4months}
                onValueChange={week4To4monthsHandler}
              />
              <Text style={styles.checkboxLabel}>4 week - 4 months</Text>
            </View>
          </View>
        </View>
        <View style={styles.inputTextContainerMultiLine}>
          <TextInput
            value={reasonNicuStay}
            multiline={true}
            numberOfLines={4}
            onChangeText={reasonNicuStayHandler}
            keyboardType="ascii-capable"
            placeholder="Reason for NICU Stay"
            placeholderTextColor="#FFFFFF"
            style={styles.presentText}
          />
        </View>
        <View style={styles.inputTextContainerMultiLine}>
          <TextInput
            value={presentHistory}
            multiline={true}
            numberOfLines={4}
            onChangeText={presentHistoryHandler}
            keyboardType="ascii-capable"
            placeholder="Present History"
            placeholderTextColor="#FFFFFF"
            style={styles.presentText}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: wp('1.3%'),
    marginHorizontal: wp('3%'),
  },
  inputTextContainerMultiLine: {
    width: wp('90%'),
    height: hp('15%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  multipleChoiceHeader: {
    color: 'white',
    fontSize: wp('3.5%'),
    fontWeight: 'bold',
    marginVertical: wp('3.2%'),
    marginHorizontal: wp('4%'),
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
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
  checkBoxContainerNatal: {
    width: wp('90%'),
    height: hp('7%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  ciabHead: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('2%'),
  },
  ciabContainer: {
    marginHorizontal: wp('8%'),
    marginVertical: hp('1%'),
    flexDirection: 'row',
  },
  ciabYesCheck: {
    marginVertical: hp('1.2%'),
    marginHorizontal: wp('2%'),
  },
  ciabYesCheckText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('1%'),
  },
  ciabNoCheck: {
    marginVertical: hp('1.2%'),
    marginHorizontal: wp('3%'),
  },
  ciabNoCheckText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: hp('1%'),
    marginHorizontal: wp('3%'),
  },
  weigthHeightContainer: {
    width: wp('90%'),
    height: hp('6%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  userWeightText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('1%'),
    marginHorizontal: wp('1.5%'),
  },
  userHeightText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('1%'),
    marginHorizontal: wp('1.5%'),
  },
  inputFieldContainer3Q: {
    width: wp('90%'),
    height: hp('25%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  presentText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
  },
  complaintText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
  },
  checkBoxContainer: {
    width: wp('90%'),
    height: hp('7%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  checkBoxContainerHistory: {
    width: wp('90%'),
    height: hp('7%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
});

export default Section3;
