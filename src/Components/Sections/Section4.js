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
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../state/index';

const Section4 = () => {
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
  const handHolding = useSelector(state => state.handHolding);
  const rolling = useSelector(state => state.rolling);
  const crawling = useSelector(state => state.crawling);
  const sitting = useSelector(state => state.sitting);
  const standing = useSelector(state => state.standing);
  const walking = useSelector(state => state.walking);
  const fineMotor = useSelector(state => state.fineMotor);
  const communications = useSelector(state => state.communication);
  const socialBehavior = useSelector(state => state.socialBehavior);
  const actions = bindActionCreators(actionCreators, dispatch);
  //handlers
  const handHoldingHandler = handHolding => {
    actions.updateHandHolding(handHolding);
  };
  const rollingHandler = rolling => {
    actions.updateRolling(rolling);
  };
  const crawlingHandler = crawling => {
    actions.updateCrawling(crawling);
  };
  const sittingHandler = sitting => {
    actions.updateSitting(sitting);
  };
  const standingHandler = standing => {
    actions.updateStanding(standing);
  };
  const walkingHandler = walking => {
    actions.updateWalking(walking);
  };
  const fineMotorHandler = fineMotor => {
    actions.updateFineMotor(fineMotor);
  };
  const communicationsHandler = communications => {
    actions.updateCommunication(communications);
  };
  const socialBehaviorHandler = socialBehavior => {
    actions.updateSocialBehaviour(socialBehavior);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Section IV =>  Developemental Milestones (Months) */}
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('4%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          Developemental Milestones (Months)
        </Text>
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('3.5%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          Gross Motor
        </Text>
        <View style={styles.developmentMilestoneContainer}>
          <TextInput
            value={handHolding}
            onChangeText={handHoldingHandler}
            keyboardType="numeric"
            placeholder="Hand Holding"
            placeholderTextColor="#FFFFFF"
            style={styles.developmentMileStoneText}
          />
        </View>
        <View style={styles.developmentMilestoneContainer}>
          <TextInput
            value={rolling}
            onChangeText={rollingHandler}
            keyboardType="numeric"
            placeholder="Rolling"
            placeholderTextColor="#FFFFFF"
            style={styles.developmentMileStoneText}
          />
        </View>
        <View style={styles.developmentMilestoneContainer}>
          <TextInput
            value={crawling}
            onChangeText={crawlingHandler}
            keyboardType="numeric"
            placeholder="Crawling"
            placeholderTextColor="#FFFFFF"
            style={styles.developmentMileStoneText}
          />
        </View>
        <View style={styles.developmentMilestoneContainer}>
          <TextInput
            value={sitting}
            onChangeText={sittingHandler}
            keyboardType="numeric"
            placeholder="Sitting"
            placeholderTextColor="#FFFFFF"
            style={styles.developmentMileStoneText}
          />
        </View>
        <View style={styles.developmentMilestoneContainer}>
          <TextInput
            value={standing}
            onChangeText={standingHandler}
            keyboardType="numeric"
            placeholder="Standing"
            placeholderTextColor="#FFFFFF"
            style={styles.developmentMileStoneText}
          />
        </View>
        <View style={styles.developmentMilestoneContainer}>
          <TextInput
            value={walking}
            onChangeText={walkingHandler}
            keyboardType="numeric"
            placeholder="Walking"
            placeholderTextColor="#FFFFFF"
            style={styles.developmentMileStoneText}
          />
        </View>
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('3.5%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          Fine motor
        </Text>
        <View style={styles.developmentMilestoneContainer}>
          <TextInput
            value={fineMotor}
            multiline={true}
            numberOfLines={4}
            onChangeText={fineMotorHandler}
            keyboardType="ascii-capable"
            placeholder="Comments"
            placeholderTextColor="#FFFFFF"
            style={styles.developmentMileStoneText}
          />
        </View>
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('3.5%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          Communication
        </Text>
        <View style={styles.developmentMilestoneContainer}>
          <TextInput
            value={communications}
            multiline={true}
            numberOfLines={4}
            onChangeText={communicationsHandler}
            keyboardType="ascii-capable"
            placeholder="Comments"
            placeholderTextColor="#FFFFFF"
            style={styles.developmentMileStoneText}
          />
        </View>
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('3.5%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          Social Behavior
        </Text>
        <View style={styles.developmentMilestoneContainer}>
          <TextInput
            value={socialBehavior}
            multiline={true}
            numberOfLines={4}
            onChangeText={socialBehaviorHandler}
            keyboardType="ascii-capable"
            placeholder="Comments"
            placeholderTextColor="#FFFFFF"
            style={styles.developmentMileStoneText}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  developmentMilestoneContainer: {
    width: wp('90%'),
    height: hp('6%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  developmentMileStoneText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('1%'),
    marginHorizontal: wp('1.5%'),
  },
});

export default Section4;
