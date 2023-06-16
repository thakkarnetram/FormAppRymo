import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../state/index';

const Section11 = () => {
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
  const supineToProneImmobile = useSelector(
    state => state.section11.supineToProneImmobile,
  );
  const supineToProneAssistance = useSelector(
    state => state.section11.supineToProneAssistance,
  );
  const supineToProneIndependent = useSelector(
    state => state.section11.supineToProneIndependent,
  );
  const supineToSitImmobile = useSelector(
    state => state.section11.supineToSitImmobile,
  );
  const supineToSitAssistance = useSelector(
    state => state.section11.supineToSitAssistance,
  );
  const supineToSitIndependent = useSelector(
    state => state.section11.supineToSitIndependent,
  );
  const sittingImmobile = useSelector(state => state.section11.sittingImmobile);
  const sittingAssistance = useSelector(
    state => state.section11.sittingAssistance,
  );
  const sittingIndependent = useSelector(
    state => state.section11.sittingIndependent,
  );
  const quadsImmobile = useSelector(state => state.section11.quadripedImmobile);
  const quadsAssistance = useSelector(
    state => state.section11.quadripedAssistance,
  );
  const quadsIndependent = useSelector(
    state => state.section11.quadripedIndependent,
  );
  const standingImmobile = useSelector(
    state => state.section11.standingImmobile,
  );
  const standingAssistance = useSelector(
    state => state.section11.standingAssistance,
  );
  const standingIndependent = useSelector(
    state => state.section11.standingIndependent,
  );
  const kneelingImmobile = useSelector(
    state => state.section11.kneelingImmobile,
  );
  const kneelingAssistance = useSelector(
    state => state.section11.kneelingAssistance,
  );
  const kneelingIndependent = useSelector(
    state => state.section11.kneelingIndependent,
  );
  const halfKneelingImmobile = useSelector(
    state => state.section11.halfKneelingImmobile,
  );
  const halfKneelingAssistance = useSelector(
    state => state.section11.halfKneelingAssistance,
  );
  const halfKneelingIndependent = useSelector(
    state => state.section11.halfKneelingIndependent,
  );
  const ambulationImmobile = useSelector(
    state => state.section11.ambulationImmobile,
  );
  const ambulationAssistance = useSelector(
    state => state.section11.ambulationAssistance,
  );
  const ambulationIndependent = useSelector(
    state => state.section11.ambulationIndependent,
  );
  const gmfcOptions = useSelector(state => state.section11.gmfc);
  const miniMacOptions = useSelector(state => state.section11.miniMacs);
  const macsOptions = useSelector(state => state.section11.macs);
  const cfcsOptions = useSelector(state => state.section11.cfcs);

  //handlers
  const actions = bindActionCreators(actionCreators, dispatch);
  const supineToProneImmobileHandler = val => {
    actions.updateSupineToProneImmobile(val);
  };
  const supineToProneAssistanceHandler = val => {
    actions.updateSupineToProneAssistance(val);
  };
  const supineToProneIndependentHandler = val => {
    actions.updateSupineToProneIndependent(val);
  };
  const supineToSitImmobileHandler = val => {
    actions.updateSupineToSitImmobile(val);
  };
  const supineToSitAssistanceHandler = val => {
    actions.updateSupineToSitAssistance(val);
  };
  const supineToSitIndependentHandler = val => {
    actions.updateSupineToSitIndependent(val);
  };
  const sittingImmobileHandler = val => {
    actions.updateSittingImmobile(val);
  };
  const sittingAssistanceHandler = val => {
    actions.updateSittingAssistance(val);
  };
  const sittingIndependentHandler = val => {
    actions.updateSittingIndependent(val);
  };
  const quadsImmobileHandler = val => {
    actions.updateQuadripedImmobile(val);
  };
  const quadsAssistanceHandler = val => {
    actions.updateQuadripedAssistance(val);
  };
  const quadsIndependentHandler = val => {
    actions.updateQuadripedIndependent(val);
  };
  const standingImmobileHandler = val => {
    actions.updateStandingImmobile(val);
  };
  const standingAssistanceHandler = val => {
    actions.updateStandingAssistance(val);
  };
  const standingIndependentHandler = val => {
    actions.updateStandingIndependent(val);
  };
  const kneelingImmobileHandler = val => {
    actions.updateKneelingImmobile(val);
  };
  const kneelingAssistanceHandler = val => {
    actions.updateKneelingAssistance(val);
  };
  const kneelingIndependentHandler = val => {
    actions.updateKneelingIndependent(val);
  };
  const halfKneelingImmobileHandler = val => {
    actions.updateHalfKneelingImmobile(val);
  };
  const halfKneelingAssistanceHandler = val => {
    actions.updateHalfKneelingAssistance(val);
  };
  const halfKneelingIndependentHandler = val => {
    actions.updateHalfKneelingIndependent(val);
  };
  const ambulationImmobileHandler = val => {
    actions.updateAmbulationImmobile(val);
  };
  const ambulationAssistanceHandler = val => {
    actions.updateAmbulationAssistance(val);
  };
  const ambulationIndependentHandler = val => {
    actions.updateAmbulationIndependent(val);
  };
  const gmfcOptionHandler = val => {
    actions.updateGmfc(val);
  };
  const miniMacOptionHandler = val => {
    actions.updateMiniMac(val);
  };
  const macsOptionHandler = val => {
    actions.updateMacs(val);
  };
  const cfcsOptionHandler = val => {
    actions.updateCfcs(val);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Functional Evaluation */}
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('4%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          Functional Evaluation
        </Text>
        <View style={styles.inputFieldContainer3Q8}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.multipleChoiceHeader}>Supine to Prone</Text>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={supineToProneImmobile}
                  onValueChange={supineToProneImmobileHandler}
                />
                <Text style={styles.checkboxLabel}>Immobile</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={supineToProneAssistance}
                  onValueChange={supineToProneAssistanceHandler}
                />
                <Text style={styles.checkboxLabel}>Assistance</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={supineToProneIndependent}
                  onValueChange={supineToProneIndependentHandler}
                />
                <Text style={styles.checkboxLabel}>Independent</Text>
              </View>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.multipleChoiceHeader}>Supine to Sit</Text>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={supineToSitImmobile}
                  onValueChange={supineToSitImmobileHandler}
                />
                <Text style={styles.checkboxLabel}>Immobile</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={supineToSitAssistance}
                  onValueChange={supineToSitAssistanceHandler}
                />
                <Text style={styles.checkboxLabel}>Assistance</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={supineToSitIndependent}
                  onValueChange={supineToSitIndependentHandler}
                />
                <Text style={styles.checkboxLabel}>Independent</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.multipleChoiceHeader}>Sitting</Text>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={sittingImmobile}
                  onValueChange={sittingImmobileHandler}
                />
                <Text style={styles.checkboxLabel}>Immobile</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={sittingAssistance}
                  onValueChange={sittingAssistanceHandler}
                />
                <Text style={styles.checkboxLabel}>Assistance</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={sittingIndependent}
                  onValueChange={sittingIndependentHandler}
                />
                <Text style={styles.checkboxLabel}>Independent</Text>
              </View>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.multipleChoiceHeader}>Quadriped</Text>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={quadsImmobile}
                  onValueChange={quadsImmobileHandler}
                />
                <Text style={styles.checkboxLabel}>Immobile</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={quadsAssistance}
                  onValueChange={quadsAssistanceHandler}
                />
                <Text style={styles.checkboxLabel}>Assistance</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={quadsIndependent}
                  onValueChange={quadsIndependentHandler}
                />
                <Text style={styles.checkboxLabel}>Independent</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.multipleChoiceHeader}>Kneeling</Text>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={kneelingImmobile}
                  onValueChange={kneelingImmobileHandler}
                />
                <Text style={styles.checkboxLabel}>Immobile</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={kneelingAssistance}
                  onValueChange={kneelingAssistanceHandler}
                />
                <Text style={styles.checkboxLabel}>Assistance</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={kneelingIndependent}
                  onValueChange={kneelingIndependentHandler}
                />
                <Text style={styles.checkboxLabel}>Independent</Text>
              </View>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.multipleChoiceHeader}>Half Kneeling</Text>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={halfKneelingImmobile}
                  onValueChange={halfKneelingImmobileHandler}
                />
                <Text style={styles.checkboxLabel}>Immobile</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={halfKneelingAssistance}
                  onValueChange={halfKneelingAssistanceHandler}
                />
                <Text style={styles.checkboxLabel}>Assistance</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={halfKneelingIndependent}
                  onValueChange={halfKneelingIndependentHandler}
                />
                <Text style={styles.checkboxLabel}>Independent</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.multipleChoiceHeader}>Standing</Text>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={standingImmobile}
                  onValueChange={standingImmobileHandler}
                />
                <Text style={styles.checkboxLabel}>Immobile</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={standingAssistance}
                  onValueChange={standingAssistanceHandler}
                />
                <Text style={styles.checkboxLabel}>Assistance</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={standingIndependent}
                  onValueChange={standingIndependentHandler}
                />
                <Text style={styles.checkboxLabel}>Independent</Text>
              </View>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.multipleChoiceHeader}>Ambulation</Text>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={ambulationImmobile}
                  onValueChange={ambulationImmobileHandler}
                />
                <Text style={styles.checkboxLabel}>Immobile</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={ambulationAssistance}
                  onValueChange={ambulationAssistanceHandler}
                />
                <Text style={styles.checkboxLabel}>Assistance</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={ambulationIndependent}
                  onValueChange={ambulationIndependentHandler}
                />
                <Text style={styles.checkboxLabel}>Independent</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Functional TextBoxs */}
        <View style={{flexDirection: 'row'}}>
          <View style={styles.inputTextContainerPicker}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.gmfcHead}>GMFC</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={gmfcOptions}
                  onValueChange={gmfcOptionHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="I"
                    value="I"
                    style={{
                      color: 'black',
                      fontSize: wp('3%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="II"
                    value="II"
                    style={{color: 'black', fontSize: wp('3%')}}
                  />
                  <Picker.Item
                    label="III"
                    value="III"
                    style={{color: 'black', fontSize: wp('3%')}}
                  />
                  <Picker.Item
                    label="IV"
                    value="IV"
                    style={{color: 'black', fontSize: wp('3%')}}
                  />
                  <Picker.Item
                    label="V"
                    value="V"
                    style={{color: 'black', fontSize: wp('3%')}}
                  />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.inputTextContainerPicker}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.macsHead}>MACS</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={macsOptions}
                  onValueChange={macsOptionHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="I"
                    value="I"
                    style={{
                      color: 'black',
                      fontSize: wp('3%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="II"
                    value="II"
                    style={{color: 'black', fontSize: wp('3%')}}
                  />
                  <Picker.Item
                    label="III"
                    value="III"
                    style={{color: 'black', fontSize: wp('3%')}}
                  />
                  <Picker.Item
                    label="IV"
                    value="IV"
                    style={{color: 'black', fontSize: wp('3%')}}
                  />
                  <Picker.Item
                    label="V"
                    value="V"
                    style={{color: 'black', fontSize: wp('3%')}}
                  />
                </Picker>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.inputTextContainerPicker}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.miniMacHead}>Mini MAC</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={miniMacOptions}
                  onValueChange={miniMacOptionHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="I"
                    value="I"
                    style={{
                      color: 'black',
                      fontSize: wp('3%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="II"
                    value="II"
                    style={{color: 'black', fontSize: wp('3%')}}
                  />
                  <Picker.Item
                    label="III"
                    value="III"
                    style={{color: 'black', fontSize: wp('3%')}}
                  />
                  <Picker.Item
                    label="IV"
                    value="IV"
                    style={{color: 'black', fontSize: wp('3%')}}
                  />
                  <Picker.Item
                    label="V"
                    value="V"
                    style={{color: 'black', fontSize: wp('3%')}}
                  />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.inputTextContainerPicker}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.cfcsHead}>CFCS</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={cfcsOptions}
                  onValueChange={cfcsOptionHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="I"
                    value="I"
                    style={{
                      color: 'black',
                      fontSize: wp('3%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="II"
                    value="II"
                    style={{color: 'black', fontSize: wp('3%')}}
                  />
                  <Picker.Item
                    label="III"
                    value="III"
                    style={{color: 'black', fontSize: wp('3%')}}
                  />
                  <Picker.Item
                    label="IV"
                    value="IV"
                    style={{color: 'black', fontSize: wp('3%')}}
                  />
                  <Picker.Item
                    label="V"
                    value="V"
                    style={{color: 'black', fontSize: wp('3%')}}
                  />
                </Picker>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputFieldContainer3Q8: {
    width: wp('90%'),
    height: hp('85%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  functionalContainer: {
    width: wp('90%'),
    height: null,
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  functionalText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('3%'),
    marginHorizontal: wp('1.5%'),
  },
  inputTextContainerPicker: {
    width: wp('41%'),
    height: hp('6%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  pickerContainer: {
    width: wp('20%'),
    height: hp('5%'),
    marginHorizontal: wp('5%'),
    marginVertical: wp('0.5%'),
  },
  gmfcHead: {
    color: 'white',
    fontSize: wp('3.2%'),
    marginHorizontal: wp('3%'),
    marginVertical: wp('1.8%'),
  },
  macsHead: {
    color: 'white',
    fontSize: wp('3.2%'),
    marginHorizontal: wp('2%'),
    marginVertical: wp('1.8%'),
  },
  miniMacHead: {
    color: 'white',
    fontSize: wp('3.2%'),
    marginHorizontal: wp('1%'),
    marginVertical: wp('1.8%'),
  },
  cfcsHead: {
    color: 'white',
    fontSize: wp('3.2%'),
    marginHorizontal: wp('1.5%'),
    marginVertical: wp('1.8%'),
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  multipleChoiceHeader: {
    color: 'white',
    fontSize: wp('3.5%'),
    fontWeight: 'bold',
    marginVertical: wp('3.2%'),
    marginHorizontal: wp('4%'),
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

export default Section11;
