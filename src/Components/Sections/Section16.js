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

const Section16 = () => {
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
  const registrationOptions = useSelector(
    state => state.section16.registrationOptions,
  );
  const registrationComs = useSelector(
    state => state.section16.registrationComs,
  );
  const tactileUnder = useSelector(
    state => state.section16.tactileUnderResponsive,
  );
  const tactileOver = useSelector(
    state => state.section16.tactileOverResponsive,
  );
  const proprioceptiveUnder = useSelector(
    state => state.section16.proprioceptiveUnderResponsive,
  );
  const proprioceptiveOver = useSelector(
    state => state.section16.proprioceptiveOverResponsive,
  );
  const vestibularUnder = useSelector(
    state => state.section16.vestibularUnderResponsive,
  );
  const vestibularOver = useSelector(
    state => state.section16.vestibularOverResponsive,
  );
  const auditoryUnder = useSelector(
    state => state.section16.auditoryUnderResponsive,
  );
  const auditoryOver = useSelector(
    state => state.section16.auditoryOverResponsive,
  );
  const visualUnder = useSelector(
    state => state.section16.visualUnderResponsive,
  );
  const visualOver = useSelector(state => state.section16.visualOverResponsive);
  const gustatoryOver = useSelector(
    state => state.section16.gustatoryOverResponsive,
  );
  const gustatoryUnder = useSelector(
    state => state.section16.gustatoryUnderResponsive,
  );
  const gustatoryComs = useSelector(state => state.section16.gustatoryComs);
  const sensoryProfileComs = useSelector(
    state => state.section16.sensoryProfileComs,
  );
  const actions = bindActionCreators(actionCreators, dispatch);
  // NEW
  const tactileComs = useSelector(state => state.section16.tactileComs);
  const proprioceptiveComs = useSelector(
    state => state.section16.proprioceptiveComs,
  );
  const vestibularComs = useSelector(state => state.section16.vestibularComs);
  const auditoryComs = useSelector(state => state.section16.vestibularComs);
  const visualComs = useSelector(state => state.section16.visualComs);
  const tactileComsHandler = val => {
    actions.updateTactileComs(val);
  };
  const proprioceptiveComsHandler = val => {
    actions.updateProprioceptiveComs(val);
  };
  const vestibularComsHandler = val => {
    actions.updateVestibularComs(val);
  };
  const auditoryComsHandler = val => {
    actions.updateAuditoryComs(val);
  };
  const visualComsHandler = val => {
    actions.updateVisualComs(val);
  };
  // handlers
  const registrationOptionsHandler = registrationOption => {
    const updatedOptions = {
      ...registrationOptions,
      [registrationOption]: !registrationOptions[registrationOption],
    };
    actions.updateRegistrationOptions(updatedOptions);
  };
  const registrationComshandler = text => {
    actions.updateRegistrationComs(text);
  };
  const tactileUnderHandler = text => {
    actions.updateTactileUnderResponsive(text);
  };
  const tactileOverHandler = text => {
    actions.updateTactileOverResponsive(text);
  };
  const proprioceptiveUnderHandler = text => {
    actions.updateProprioceptiveUnderResponsive(text);
  };
  const proprioceptiveOverHandler = text => {
    actions.updateProprioceptiveOverResponsive(text);
  };
  const vestibularUnderHandler = text => {
    actions.updateVestibularUnderResponsive(text);
  };
  const vestibularOverHandler = text => {
    actions.updateVestibularOverResponsive(text);
  };
  const auditoryUnderHandler = text => {
    actions.updateAuditoryUnderResponsive(text);
  };
  const auditoryOverHandler = text => {
    actions.updateAuditoryOverResponsive(text);
  };
  const visualUnderHandler = text => {
    actions.updateVisualUnderResponsive(text);
  };
  const visualOverHandler = text => {
    actions.updateVisualOverResponsive(text);
  };
  const gustatoryUnderHandler = text => {
    actions.updateGustatoryUnderResponsive(text);
  };
  const gustatoryOverHandler = text => {
    actions.updateGustatoryOverResponsive(text);
  };
  const gustatoryComsHandler = text => {
    actions.updateGustatoryComs(text);
  };
  const sensoryProfileComsHandler = text => {
    actions.updateSensoryProfileComs(text);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Sensory System */}
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('4%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          Sensory System
        </Text>
        <View style={styles.inputFieldContainerMCQSensory}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.multipleChoiceHeader}>1. Registration</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={registrationOptions.Arousal}
                  onValueChange={() => registrationOptionsHandler('Arousal')}
                />
                <Text style={styles.checkboxLabel}>Arousal</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={registrationOptions.Attention}
                  onValueChange={() => registrationOptionsHandler('Attention')}
                />
                <Text style={styles.checkboxLabel}>Attention</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={registrationOptions.Affect}
                  onValueChange={() => registrationOptionsHandler('Affect')}
                />
                <Text style={styles.checkboxLabel}>Affect</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={registrationOptions.Alertness}
                  onValueChange={() => registrationOptionsHandler('Alertness')}
                />
                <Text style={styles.checkboxLabel}>Alertness</Text>
              </View>
            </View>
          </View>
          <TextInput
            value={registrationComs}
            onChangeText={registrationComshandler}
            keyboardType="ascii-capable"
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
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3.5%'),
              marginHorizontal: wp('4%'),
              marginVertical: wp('2%'),
            }}>
            2.Tactile
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: wp('1.5%'),
              marginHorizontal: wp('4%'),
            }}>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={tactileUnder}
                onValueChange={tactileUnderHandler}
              />
              <Text style={styles.checkboxLabel}>Under Responsive</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={tactileOver}
                onValueChange={tactileOverHandler}
              />
              <Text style={styles.checkboxLabel}>Over Responsive</Text>
            </View>
          </View>
          <TextInput
            value={tactileComs}
            onChangeText={tactileComsHandler}
            keyboardType="ascii-capable"
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
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3.5%'),
              marginHorizontal: wp('4%'),
              marginVertical: wp('2%'),
            }}>
            Proprioceptive
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: wp('2%'),
              marginHorizontal: wp('4%'),
            }}>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={proprioceptiveUnder}
                onValueChange={proprioceptiveUnderHandler}
              />
              <Text style={styles.checkboxLabel}>Under Responsive</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={proprioceptiveOver}
                onValueChange={proprioceptiveOverHandler}
              />
              <Text style={styles.checkboxLabel}>Over Responsive</Text>
            </View>
          </View>
          <TextInput
            value={proprioceptiveComs}
            onChangeText={proprioceptiveComsHandler}
            keyboardType="ascii-capable"
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
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3.5%'),
              marginHorizontal: wp('4%'),
              marginVertical: wp('2%'),
            }}>
            Vestibular
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: wp('2%'),
              marginHorizontal: wp('4%'),
            }}>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={vestibularUnder}
                onValueChange={vestibularUnderHandler}
              />
              <Text style={styles.checkboxLabel}>Under Responsive</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={vestibularOver}
                onValueChange={vestibularOverHandler}
              />
              <Text style={styles.checkboxLabel}>Over Responsive</Text>
            </View>
          </View>
          <TextInput
            value={vestibularComs}
            onChangeText={vestibularComsHandler}
            keyboardType="ascii-capable"
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
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3.5%'),
              marginHorizontal: wp('4%'),
              marginVertical: wp('2%'),
            }}>
            Auditory
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: wp('2%'),
              marginHorizontal: wp('4%'),
            }}>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={auditoryUnder}
                onValueChange={auditoryUnderHandler}
              />
              <Text style={styles.checkboxLabel}>Under Responsive</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={auditoryOver}
                onValueChange={auditoryOverHandler}
              />
              <Text style={styles.checkboxLabel}>Over Responsive</Text>
            </View>
          </View>
          <TextInput
            value={auditoryComs}
            onChangeText={auditoryComsHandler}
            keyboardType="ascii-capable"
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
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3.5%'),
              marginHorizontal: wp('4%'),
              marginVertical: wp('2%'),
            }}>
            Visual
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: wp('2%'),
              marginHorizontal: wp('4%'),
            }}>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={visualUnder}
                onValueChange={visualUnderHandler}
              />
              <Text style={styles.checkboxLabel}>Under Responsive</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox value={visualOver} onValueChange={visualOverHandler} />
              <Text style={styles.checkboxLabel}>Over Responsive</Text>
            </View>
          </View>
          <TextInput
            value={visualComs}
            onChangeText={visualComsHandler}
            keyboardType="ascii-capable"
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
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3.5%'),
              marginHorizontal: wp('4%'),
              marginVertical: wp('2%'),
            }}>
            Gustatory
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: wp('2%'),
              marginHorizontal: wp('4%'),
            }}>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={gustatoryUnder}
                onValueChange={gustatoryUnderHandler}
              />
              <Text style={styles.checkboxLabel}>Under Responsive</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={gustatoryOver}
                onValueChange={gustatoryOverHandler}
              />
              <Text style={styles.checkboxLabel}>Over Responsive</Text>
            </View>
          </View>
          <TextInput
            value={gustatoryComs}
            onChangeText={gustatoryComsHandler}
            keyboardType="ascii-capable"
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
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3.5%'),
              marginHorizontal: wp('4%'),
              marginVertical: wp('2%'),
            }}>
            3. Sensory Profile
          </Text>
          <TextInput
            value={sensoryProfileComs}
            onChangeText={sensoryProfileComsHandler}
            keyboardType="ascii-capable"
            placeholder="Comments"
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
  multipleChoiceHeader: {
    color: 'white',
    fontSize: wp('3.5%'),
    fontWeight: 'bold',
    marginVertical: wp('3.2%'),
    marginHorizontal: wp('4%'),
  },
});

export default Section16;
