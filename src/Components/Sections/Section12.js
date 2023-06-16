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
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../state/index';

const Section12 = () => {
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
  const bodyStructurePositive = useSelector(
    state => state.section12.bodyStructurePositive,
  );
  const bodyStructureNegative = useSelector(
    state => state.section12.bodyStructureNegative,
  );
  const bodyFunctionPositive = useSelector(
    state => state.section12.bodyFunctionPositive,
  );
  const bodyFunctionNegative = useSelector(
    state => state.section12.bodyFunctionNegative,
  );
  const activitiesParticipation = useSelector(
    state => state.section12.activityParticipation,
  );
  const activitiesLimitation = useSelector(
    state => state.section12.activityLimitation,
  );
  const environmentalPersonal = useSelector(
    state => state.section12.environmentalPersonal,
  );
  const environmentalContextual = useSelector(
    state => state.section12.environmentalContextual,
  );
  const shortTermGoals = useSelector(state => state.section12.shortTermGoals);
  const longTermGoals = useSelector(state => state.section12.longTermGoals);
  const intervention = useSelector(state => state.section12.intervention);
  const equipments = useSelector(state => state.section12.equipmentsUsed);
  const section17Coms = useSelector(state => state.section12.section17Coms);
  //handlers
  const actions = bindActionCreators(actionCreators, dispatch);
  const bodyStructurePositiveHandler = text => {
    actions.updateBodyStructurePositive(text);
  };
  const bodyStructureNegativeHandler = text => {
    actions.updateBodyStructureNegative(text);
  };
  const bodyFunctionPositiveHandler = text => {
    actions.updateBodyFunctionPositive(text);
  };
  const bodyFunctionNegativeHandler = text => {
    actions.updateBodyFunctionNegative(text);
  };
  const activitiesParticipationHandler = text => {
    actions.updateActivityParticipation(text);
  };
  const activitiesLimitationHandler = text => {
    actions.updateActivityLimitation(text);
  };
  const environmentalPersonalHandler = text => {
    actions.updateEnvironmentalPersonal(text);
  };
  const environmentalContextualHandler = text => {
    actions.updateEnvironmentalContextual(text);
  };
  const shortTermGoalsHandler = text => {
    actions.updateShortTermGoals(text);
  };
  const longTermGoalsHandler = text => {
    actions.updateLongTermGoals(text);
  };
  const interventionHandler = text => {
    actions.updateIntervention(text);
  };
  const equipmentsHandler = text => {
    actions.updateEquipmentsUsed(text);
  };
  const section17ComsHandler = text => {
    actions.updateSection17Coms(text);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Section 17 */}
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('4%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          ICF
        </Text>
        <View style={styles.inputFieldContainerS17}>
          <Text
            style={{
              marginVertical: wp('6%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            1. Body Structure
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: wp('7%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Positive
            </Text>
            <TextInput
              value={bodyStructurePositive}
              onChangeText={bodyStructurePositiveHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Comments"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('50%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-3%'),
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginVertical: wp('1.5%'),
                marginHorizontal: wp('7%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Negative
            </Text>
            <TextInput
              value={bodyStructureNegative}
              onChangeText={bodyStructureNegativeHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Comments"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('50%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('5%'),
                marginVertical: wp('3%'),
              }}
            />
          </View>
          <Text
            style={{
              marginVertical: wp('6%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            2. Body Function
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: wp('7%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Positive
            </Text>
            <TextInput
              value={bodyFunctionPositive}
              onChangeText={bodyFunctionPositiveHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Comments"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('50%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-3%'),
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginVertical: wp('1%'),
                marginHorizontal: wp('7%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Negative
            </Text>
            <TextInput
              value={bodyFunctionNegative}
              onChangeText={bodyFunctionNegativeHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Comments"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('50%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('5%'),
                marginVertical: wp('3%'),
              }}
            />
          </View>
          <Text
            style={{
              marginVertical: wp('6%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            3. Activites
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: wp('7%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Participation
            </Text>
            <TextInput
              value={activitiesParticipation}
              onChangeText={activitiesParticipationHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Comments"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('50%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('-3%'),
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginVertical: wp('1%'),
                marginHorizontal: wp('7%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Limitation
            </Text>
            <TextInput
              value={activitiesLimitation}
              onChangeText={activitiesLimitationHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Comments"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('50%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('6%'),
                marginVertical: wp('3%'),
              }}
            />
          </View>
          <Text
            style={{
              marginVertical: wp('6%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            4. Environmental
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: wp('7%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Personal
            </Text>
            <TextInput
              value={environmentalPersonal}
              onChangeText={environmentalPersonalHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Comments"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('50%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-5%'),
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginVertical: wp('3%'),
                marginHorizontal: wp('7%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Contextual
            </Text>
            <TextInput
              value={environmentalContextual}
              onChangeText={environmentalContextualHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Comments"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('50%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('5%'),
                marginVertical: wp('3%'),
              }}
            />
          </View>
          <Text
            style={{
              marginVertical: wp('10%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            Short Term Goals
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              value={shortTermGoals}
              onChangeText={shortTermGoalsHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Comments"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-10%'),
              }}
            />
          </View>
          <Text
            style={{
              marginVertical: wp('10%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            Long Term Goals
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              value={longTermGoals}
              onChangeText={longTermGoalsHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Comments"
              placeholderTextColor="#d6d6d6"
              style={{
                height: null,
                color: 'white',
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-10%'),
              }}
            />
          </View>
          <Text
            style={{
              marginVertical: wp('10%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            Intervention
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              value={intervention}
              onChangeText={interventionHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Comments"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-10%'),
              }}
            />
          </View>
          <Text
            style={{
              marginVertical: wp('10%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            Equipments / Instruments Used
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              value={equipments}
              onChangeText={equipmentsHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Comments"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-10%'),
              }}
            />
          </View>
          <TextInput
            value={section17Coms}
            onChangeText={section17ComsHandler}
            keyboardType="ascii-capable"
            placeholder="Comments"
            placeholderTextColor="#FFFFFF"
            style={{
              color: 'white',
              fontSize: wp('3%'),
              marginVertical: wp('1%'),
              marginHorizontal: wp('5%'),
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputFieldContainerS17: {
    width: wp('90%'),
    height: null,
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
});

export default Section12;
