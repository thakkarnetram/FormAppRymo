import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
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

const Section17 = () => {
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
  const gravitationalInsecurity = useSelector(
    state => state.section17.gravitationInsecurity,
  );
  const aversiveResponse = useSelector(
    state => state.section17.aversiveResponse,
  );
  const posturalInsecurity = useSelector(
    state => state.section17.posturalInsecurtiy,
  );
  const tactileDefensiveness = useSelector(
    state => state.section17.tactileDefense,
  );
  const sensoryAvoiding = useSelector(state => state.section17.sensoryAvoiding);
  const stimulation = useSelector(state => state.section17.stimulation);
  const distractibility = useSelector(state => state.section17.distractibility);
  const hyperActivity = useSelector(state => state.section17.hyperActivity);
  const coms = useSelector(state => state.section17.coms);
  const formSpace = useSelector(state => state.section17.formSpace);
  const visuoMotor = useSelector(state => state.section17.visuoMotor);
  const tactileDiscrimination = useSelector(
    state => state.section17.tactileDiscrimination,
  );
  const vestibularProcessing = useSelector(
    state => state.section17.vestibularProcessing,
  );
  const praxis = useSelector(state => state.section17.praxis);
  const coms2 = useSelector(state => state.section17.coms2);
  const focalVision = useSelector(state => state.section17.focalVision);
  const ambientVision = useSelector(state => state.section17.ambientVision);
  const eyeMovementSystem = useSelector(
    state => state.section17.eyeMovementSystem,
  );
  const localization = useSelector(state => state.section17.localization);
  const tracking = useSelector(state => state.section17.tracking);
  // handlers
  const actions = bindActionCreators(actionCreators, dispatch);
  const gravitationalInsecurityHandler = val => {
    actions.updateGravitationInsecurity(val);
  };
  const aversiveResponseHandler = val => {
    actions.updateAversiveResponse(val);
  };
  const posturalInsecurityHandler = val => {
    actions.updatePosturalInsecurtiy(val);
  };
  const tactileDefensivenessHandler = val => {
    actions.updateTactileDefense(val);
  };
  const sensoryAvoidingHandler = val => {
    actions.updateSensoryAvoiding(val);
  };
  const stimulationHandler = val => {
    actions.updateStimulation(val);
  };
  const distractibilityHandler = val => {
    actions.updateDistractibility(val);
  };
  const hyperActivityHandler = val => {
    actions.updateHyperActivity(val);
  };
  const comsHandler = val => {
    actions.updateComs(val);
  };
  const formSpaceHandler = val => {
    actions.updateFormSpace(val);
  };
  const visuoMotorHandler = val => {
    actions.updateVisuoMotor(val);
  };
  const tactileDiscriminationHandler = val => {
    actions.updateTactileDiscrimination(val);
  };
  const vestibularProcessingHandler = val => {
    actions.updateVestibularProcessing(val);
  };
  const praxisHandler = val => {
    actions.updatePraxis(val);
  };
  const coms2Handler = val => {
    actions.updateComs2(val);
  };
  const focalVisionHandler = val => {
    actions.updateFocalVision(val);
  };
  const ambientVisionHandler = val => {
    actions.updateAmbientVision(val);
  };
  const eyeMovementSystemHandler = val => {
    actions.updateEyeMovementSystem(val);
  };
  const localizationHandler = val => {
    actions.updateLocalization(val);
  };
  const trackingHandler = val => {
    actions.updateTracking(val);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Sensory Modulation  */}
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('4%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          Sensory Modulation
        </Text>
        <View style={styles.inputFieldContainerMCQSensoryM}>
          <View style={styles.row}>
            <Text
              style={{
                marginVertical: wp('5%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Gravitational Insecurity
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('4%'),
              }}>
              <Picker
                selectedValue={gravitationalInsecurity}
                onValueChange={gravitationalInsecurityHandler}>
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
                marginVertical: wp('4%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Aversive Response to Movement
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('3%'),
              }}>
              <Picker
                selectedValue={aversiveResponse}
                onValueChange={aversiveResponseHandler}>
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
                marginVertical: wp('4%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Postural Insecurity
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('3%'),
              }}>
              <Picker
                selectedValue={posturalInsecurity}
                onValueChange={posturalInsecurityHandler}>
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
                marginVertical: wp('4%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Tactile Defensiveness
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('3%'),
              }}>
              <Picker
                selectedValue={tactileDefensiveness}
                onValueChange={tactileDefensivenessHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="+VE"
                  value="+VE"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="-VE"
                  value="-VE"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                marginVertical: wp('4%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Sensory Avoiding
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('3%'),
              }}>
              <Picker
                selectedValue={sensoryAvoiding}
                onValueChange={sensoryAvoidingHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="YES"
                  value="YES"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="NO"
                  value="NO"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                marginVertical: wp('4%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Poor registration to stimulation
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('3%'),
              }}>
              <Picker
                selectedValue={stimulation}
                onValueChange={stimulationHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="YES"
                  value="YES"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="NO"
                  value="NO"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                marginVertical: wp('4%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Distractibility
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('3%'),
              }}>
              <Picker
                selectedValue={distractibility}
                onValueChange={distractibilityHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="YES"
                  value="YES"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="NO"
                  value="NO"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                marginVertical: wp('4%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Hyperactivity
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('3%'),
              }}>
              <Picker
                selectedValue={hyperActivity}
                onValueChange={hyperActivityHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="YES"
                  value="YES"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="NO"
                  value="NO"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <TextInput
            value={coms}
            onChangeText={comsHandler}
            keyboardType="ascii-capable"
            placeholder="Comments"
            placeholderTextColor="#d9d9d9"
            style={{
              marginVertical: wp('2%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}
          />
          <Text
            style={{
              marginVertical: wp('4%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3.5%'),
            }}>
            b. Sensory Processing
          </Text>
          <View style={styles.row}>
            <Text
              style={{
                marginVertical: wp('4%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Form Space
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('3%'),
              }}>
              <Picker
                selectedValue={formSpace}
                onValueChange={formSpaceHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="YES"
                  value="YES"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="NO"
                  value="NO"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                marginVertical: wp('4%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Visuomotor Co-ordination
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('3%'),
              }}>
              <Picker
                selectedValue={visuoMotor}
                onValueChange={visuoMotorHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="YES"
                  value="YES"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="NO"
                  value="NO"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                marginVertical: wp('4%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Tactile Discrimination
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('3%'),
              }}>
              <Picker
                selectedValue={tactileDiscrimination}
                onValueChange={tactileDiscriminationHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="YES"
                  value="YES"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="NO"
                  value="NO"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                marginVertical: wp('4%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Praxis
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('3%'),
              }}>
              <Picker selectedValue={praxis} onValueChange={praxisHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="YES"
                  value="YES"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="NO"
                  value="NO"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                marginVertical: wp('4%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Vestibular proprioceptive processing
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('3%'),
              }}>
              <Picker
                selectedValue={vestibularProcessing}
                onValueChange={vestibularProcessingHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="YES"
                  value="YES"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="NO"
                  value="NO"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <TextInput
            value={coms2}
            onChangeText={coms2Handler}
            keyboardType="ascii-capable"
            numberOfLines={4}
            multiline={true}
            placeholder="Comments"
            placeholderTextColor="#d9d9d9"
            style={{
              marginVertical: wp('2%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}
          />
          <Text
            style={{
              marginVertical: wp('4%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3.5%'),
            }}>
            c. Visual System
          </Text>
          <Text
            style={{
              marginVertical: wp('4%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            1. Focal Vision
          </Text>
          <TextInput
            value={focalVision}
            onChangeText={focalVisionHandler}
            keyboardType="ascii-capable"
            placeholder="Comments"
            numberOfLines={4}
            multiline={true}
            placeholderTextColor="#d6d6d6"
            style={{
              color: 'white',
              fontSize: wp('3%'),
              marginVertical: wp('0.8%'),
              marginHorizontal: wp('6%'),
            }}
          />
          <Text
            style={{
              marginVertical: wp('4%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            2. Ambient Vision
          </Text>
          <TextInput
            value={ambientVision}
            onChangeText={ambientVisionHandler}
            keyboardType="ascii-capable"
            numberOfLines={4}
            multiline={true}
            placeholder="Comments"
            placeholderTextColor="#d6d6d6"
            style={{
              color: 'white',
              fontSize: wp('3%'),
              marginVertical: wp('0.8%'),
              marginHorizontal: wp('6%'),
            }}
          />
          <Text
            style={{
              marginVertical: wp('4%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            3. Eye Movement System
          </Text>
          <TextInput
            value={eyeMovementSystem}
            onChangeText={eyeMovementSystemHandler}
            keyboardType="ascii-capable"
            placeholder="Comments"
            placeholderTextColor="#d6d6d6"
            numberOfLines={4}
            multiline={true}
            style={{
              color: 'white',
              fontSize: wp('3%'),
              marginVertical: wp('0.8%'),
              marginHorizontal: wp('6%'),
            }}
          />
          <Text
            style={{
              marginVertical: wp('4%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            4. Localization
          </Text>
          <TextInput
            value={localization}
            onChangeText={localizationHandler}
            keyboardType="ascii-capable"
            numberOfLines={4}
            multiline={true}
            placeholder="Comments"
            placeholderTextColor="#d6d6d6"
            style={{
              color: 'white',
              fontSize: wp('3%'),
              marginVertical: wp('0.8%'),
              marginHorizontal: wp('6%'),
            }}
          />
          <Text
            style={{
              marginVertical: wp('4%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            5. Tracking
          </Text>
          <TextInput
            value={tracking}
            onChangeText={trackingHandler}
            keyboardType="ascii-capable"
            placeholder="Comments"
            numberOfLines={4}
            multiline={true}
            placeholderTextColor="#d6d6d6"
            style={{
              color: 'white',
              fontSize: wp('3%'),
              marginVertical: wp('0.8%'),
              marginHorizontal: wp('6%'),
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputFieldContainerMCQSensory: {
    width: wp('90%'),
    height: null,
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  inputFieldContainerMCQSensoryM: {
    width: wp('90%'),
    height: null,
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
});

export default Section17;
