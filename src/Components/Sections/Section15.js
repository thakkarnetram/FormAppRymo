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
import CheckBox from '@react-native-community/checkbox';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../state/index';
import {Picker} from '@react-native-picker/picker';

const Section15 = () => {
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
  const canInitiate = useSelector(state => state.section15.canInitiate);
  const cantInitiate = useSelector(state => state.section15.cantInitiate);
  const initiateComs = useSelector(state => state.section15.initiationComs);
  const sustenancePoor = useSelector(state => state.section15.sustenancePoor);
  const sustenanceGood = useSelector(state => state.section15.sustenanceGood);
  const sustenanceFair = useSelector(state => state.section15.sustenanceFair);
  const sustenanceComs = useSelector(state => state.section15.sustenanceComs);
  const terminationPassive = useSelector(
    state => state.section15.terminationPassive,
  );
  const terminationAbrupt = useSelector(
    state => state.section15.terminationAbrupt,
  );
  const terminationComs = useSelector(state => state.section15.terminationComs);
  const controlGradPoor = useSelector(state => state.section15.controlGradPoor);
  const controlGradFair = useSelector(state => state.section15.controlGradFair);
  const controlGradGood = useSelector(state => state.section15.controlGradGood);
  const controlGradComs = useSelector(state => state.section15.controlGradComs);
  const recruitmentPostural = useSelector(
    state => state.section15.recruitmentSo,
  );
  const recruitmentMovement = useSelector(
    state => state.section15.recruitmentFf,
  );
  const contractionConcentric = useSelector(
    state => state.section15.contractionConcentric,
  );
  const contractionIsometric = useSelector(
    state => state.section15.contractionIsometric,
  );
  const contractionEccentric = useSelector(
    state => state.section15.contractionEccentric,
  );
  const contraction = useSelector(state => state.section15.coContraction);
  const reciprocalInhibition = useSelector(
    state => state.section15.reciprocalInhibition,
  );
  const massEnergy = useSelector(state => state.section15.massEnergy);
  const isolatedWork = useSelector(state => state.section15.isolatedWork);
  const dynamicStiffness = useSelector(
    state => state.section15.dynamicStiffness,
  );
  const extraneousMovement = useSelector(
    state => state.section15.extraneousMovement,
  );
  const singleassessment = useSelector(state => state.section15.section15Coms);
  // handlers
  const actions = bindActionCreators(actionCreators, dispatch);
  const canInitiateHandler = val => {
    actions.updateCanInitiate(val);
  };
  const cantInitiateHandler = val => {
    actions.updateCantInitiate(val);
  };
  const initiateComsHandler = val => {
    actions.updateInitiationComs(val);
  };
  const sustenancePoorHandler = val => {
    actions.updateSustenancePoor(val);
  };
  const sustenanceFairHandler = val => {
    actions.updateSustenanceFair(val);
  };
  const sustenanceGoodHandler = val => {
    actions.updateSustenanceGood(val);
  };
  const sustenanceComsHandler = val => {
    actions.updateSustenanceComs(val);
  };
  const terminationPassiveHandler = val => {
    actions.updateTerminationPassive(val);
  };
  const terminationAbruptHandler = val => {
    actions.updateTerminationAbrupt(val);
  };
  const terminationComsHandler = val => {
    actions.updateTerminationComs(val);
  };
  const controlGradPoorHandler = val => {
    actions.updateControlGradPoor(val);
  };
  const controlGradFairHandler = val => {
    actions.updateControlGradFair(val);
  };
  const controlGradGoodHandler = val => {
    actions.updateControlGradGood(val);
  };
  const controlGradComsHandler = val => {
    actions.updateControlGradComs(val);
  };
  const recruitmentPosturalHandler = val => {
    actions.updateRecruitmentSo(val);
  };
  const recruitmentMovementHandler = val => {
    actions.updateRecruitmentFf(val);
  };
  const contractionConcentricHandler = val => {
    actions.updateContractionConcentric(val);
  };
  const contractionIsometricHandler = val => {
    actions.updateContractionIsometric(val);
  };
  const contractionEccentricHandler = val => {
    actions.updateContractionEccentric(val);
  };
  const contractionHandler = val => {
    actions.updateCoContraction(val);
  };
  const reciprocalInhibitionHandler = val => {
    actions.updateReciprocalInhibition(val);
  };
  const massEnergyHandler = val => {
    actions.updateMassEnergy(val);
  };
  const isolatedWorkHandler = val => {
    actions.updateIsolatedWork(val);
  };
  const dynamicStiffnessHandler = val => {
    actions.updateDynamicStiffness(val);
  };
  const extraneousMovementHandler = val => {
    actions.updateExtraneousMovement(val);
  };
  const singleassessmentHandler = val => {
    actions.updateSection15Coms(val);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Single System assessment */}
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('4%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          Single System assessment
        </Text>
        <View style={styles.inputFieldContainer10}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3.6%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('4%'),
            }}>
            a. Neuromuscular
          </Text>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.multipleChoiceHeader}>Initiation</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={canInitiate}
                  onValueChange={canInitiateHandler}
                />
                <Text style={styles.checkboxLabel}>Can Initiate</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={cantInitiate}
                  onValueChange={cantInitiateHandler}
                />
                <Text style={styles.checkboxLabel}>Can not Initiate</Text>
              </View>
            </View>
            <View style={styles.inputTextContainerComs}>
              <TextInput
                value={initiateComs}
                onChangeText={initiateComsHandler}
                keyboardType="ascii-capable"
                placeholder="Comments"
                placeholderTextColor="#FFFFFF"
                style={styles.coms}
              />
            </View>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.multipleChoiceHeader}>Sustenance</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={sustenancePoor}
                  onValueChange={sustenancePoorHandler}
                />
                <Text style={styles.checkboxLabel}>Poor</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={sustenanceFair}
                  onValueChange={sustenanceFairHandler}
                />
                <Text style={styles.checkboxLabel}>Fair</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={sustenanceGood}
                  onValueChange={sustenanceGoodHandler}
                />
                <Text style={styles.checkboxLabel}>Good</Text>
              </View>
            </View>
            <View style={styles.inputTextContainerComs}>
              <TextInput
                value={sustenanceComs}
                onChangeText={sustenanceComsHandler}
                keyboardType="ascii-capable"
                placeholder="Comments"
                placeholderTextColor="#FFFFFF"
                style={styles.coms}
              />
            </View>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.multipleChoiceHeader}>Termination</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={terminationPassive}
                  onValueChange={terminationPassiveHandler}
                />
                <Text style={styles.checkboxLabel}>Passive</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={terminationAbrupt}
                  onValueChange={terminationAbruptHandler}
                />
                <Text style={styles.checkboxLabel}>Abrupt</Text>
              </View>
            </View>
            <View style={styles.inputTextContainerComs}>
              <TextInput
                value={terminationComs}
                onChangeText={terminationComsHandler}
                keyboardType="ascii-capable"
                placeholder="Comments"
                placeholderTextColor="#FFFFFF"
                style={styles.coms}
              />
            </View>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.multipleChoiceHeader}>Control & Gradation</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={controlGradPoor}
                  onValueChange={controlGradPoorHandler}
                />
                <Text style={styles.checkboxLabel}>Poor</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={controlGradFair}
                  onValueChange={controlGradFairHandler}
                />
                <Text style={styles.checkboxLabel}>Fair</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={controlGradGood}
                  onValueChange={controlGradGoodHandler}
                />
                <Text style={styles.checkboxLabel}>Good</Text>
              </View>
            </View>
            <View style={styles.inputTextContainerComs}>
              <TextInput
                value={controlGradComs}
                onChangeText={controlGradComsHandler}
                keyboardType="ascii-capable"
                placeholder="Comments"
                placeholderTextColor="#FFFFFF"
                style={styles.coms}
              />
            </View>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.multipleChoiceHeader}>Recruitment</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={recruitmentPostural}
                  onValueChange={recruitmentPosturalHandler}
                />
                <Text style={styles.checkboxLabel}>Postural (So)</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={recruitmentMovement}
                  onValueChange={recruitmentMovementHandler}
                />
                <Text style={styles.checkboxLabel}>Movement (FF)</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.multipleChoiceHeader}>Contraction</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={contractionConcentric}
                  onValueChange={contractionConcentricHandler}
                />
                <Text style={styles.checkboxLabel}>Concentric</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={contractionIsometric}
                  onValueChange={contractionIsometricHandler}
                />
                <Text style={styles.checkboxLabel}>Isometric</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={contractionEccentric}
                  onValueChange={contractionEccentricHandler}
                />
                <Text style={styles.checkboxLabel}>Eccentric</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                marginVertical: wp('7%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Co-contraction
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('4%'),
              }}>
              <Picker
                selectedValue={contraction}
                onValueChange={contractionHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="Yes"
                  value="Yes"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="No"
                  value="No"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                marginVertical: wp('3%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Reciprocal Inhibition
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('4%'),
              }}>
              <Picker
                selectedValue={reciprocalInhibition}
                onValueChange={reciprocalInhibitionHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="Yes"
                  value="Yes"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="No"
                  value="No"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                marginVertical: wp('3%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Mass energy
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('4%'),
              }}>
              <Picker
                selectedValue={massEnergy}
                onValueChange={massEnergyHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="Yes"
                  value="Yes"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="No"
                  value="No"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                marginVertical: wp('3%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Isolated work
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('4%'),
              }}>
              <Picker
                selectedValue={isolatedWork}
                onValueChange={isolatedWorkHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="Yes"
                  value="Yes"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="No"
                  value="No"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                marginVertical: wp('3%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Dyanmic Stiffness
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('4%'),
              }}>
              <Picker
                selectedValue={dynamicStiffness}
                onValueChange={dynamicStiffnessHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="Yes"
                  value="Yes"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="No"
                  value="No"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                marginVertical: wp('3%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Extraneous Movement
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('4%'),
              }}>
              <Picker
                selectedValue={extraneousMovement}
                onValueChange={extraneousMovementHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="Yes"
                  value="Yes"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="No"
                  value="No"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.inputTextContainerComs}>
            <TextInput
              value={singleassessment}
              onChangeText={singleassessmentHandler}
              keyboardType="ascii-capable"
              placeholder="Comments"
              placeholderTextColor="#FFFFFF"
              style={styles.coms}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  coms: {
    color: 'white',
    fontSize: wp('3%'),
    marginVertical: wp('1%'),
    marginHorizontal: wp('1.5%'),
  },
  inputFieldContainer10: {
    width: wp('90%'),
    height: hp('190%'),
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
});

export default Section15;
