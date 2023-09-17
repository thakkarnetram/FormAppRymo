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

const Section14 = () => {
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
  const posture = useSelector(state => state.section14.posture);
  const asymmetry = useSelector(state => state.section14.alignment);
  const side = useSelector(state => state.section14.side);
  const broad = useSelector(state => state.section14.broad);
  const narrow = useSelector(state => state.section14.narrow);
  const generalPosture = useSelector(state => state.section14.generalPosture);
  const callosities = useSelector(state => state.section14.callosities);
  const movementStrategies = useSelector(
    state => state.section14.movementStrategies,
  );
  const staticBalanceGood = useSelector(
    state => state.section14.staticBalanceGood,
  );
  const staticBalanceFair = useSelector(
    state => state.section14.staticBalanceFair,
  );
  const staticBalancePoor = useSelector(
    state => state.section14.staticBalancePoor,
  );
  const anticipatoryBalanceGood = useSelector(
    state => state.section14.anticipatoryBalanceGood,
  );
  const anticipatoryBalanceFair = useSelector(
    state => state.section14.anticipatoryBalanceFair,
  );
  const anticipatoryBalancePoor = useSelector(
    state => state.section14.anticipatoryBalancePoor,
  );
  const anticipatoryBalanceComs = useSelector(
    state => state.section14.anticipatoryBalanceComs,
  );
  const reactiveBalanceGood = useSelector(
    state => state.section14.reactiveBalanceGood,
  );
  const reactiveBalanceFair = useSelector(
    state => state.section14.reactiveBalanceFair,
  );
  const reactiveBalancePoor = useSelector(
    state => state.section14.reactiveBalancePoor,
  );
  const reactiveBalanceComs = useSelector(
    state => state.section14.reactiveBalanceComs,
  );
  const coordinationGood = useSelector(
    state => state.section14.coordinationGood,
  );
  const coordinationFair = useSelector(
    state => state.section14.coordinationFair,
  );
  const coordinationPoor = useSelector(
    state => state.section14.coordinationPoor,
  );
  const coordinationComs = useSelector(
    state => state.section14.coordinationComs,
  );
  const alignmentComs = useSelector(state => state.section14.alignmentComs);
  const baseOfSupportComs = useSelector(
    state => state.section14.baseOfSupportComs,
  );
  const movementStratComs = useSelector(
    state => state.section14.movementStratComs,
  );
  const staticBalanceComs = useSelector(
    state => state.section14.staticBalanceComs,
  );
  //handlers
  const actions = bindActionCreators(actionCreators, dispatch);
  const postureHandler = val => {
    actions.updatePosture(val);
  };
  const asymmetryHandler = val => {
    actions.updateAlignment(val);
  };
  const sideHandler = val => {
    actions.updateSide(val);
  };
  const broadHandler = val => {
    actions.updateBroad(val);
  };
  const narrowHandler = val => {
    actions.updateNarrow(val);
  };
  const generalPostureHandler = val => {
    actions.updateGeneralPosture(val);
  };
  const callositiesHandler = val => {
    actions.updateCallosities(val);
  };
  const movementStrategiesHandler = movementStrat => {
    const updatedOptions = {
      ...movementStrategies,
      [movementStrat]: !movementStrategies[movementStrat],
    };
    actions.updateMovementStrategies(updatedOptions);
  };
  const staticBalanceGoodHandler = val => {
    actions.updateStaticBalanceGood(val);
  };
  const staticBalanceFairHandler = val => {
    actions.updateStaticBalanceFair(val);
  };
  const staticBalancePoorHandler = val => {
    actions.updateStaticBalancePoor(val);
  };
  const anticipatoryBalanceGoodHandler = val => {
    actions.updateAnticipatoryBalanceGood(val);
  };
  const anticipatoryBalanceFairHandler = val => {
    actions.updateAnticipatoryBalanceFair(val);
  };
  const anticipatoryBalancePoorHandler = val => {
    actions.updateAnticipatoryBalancePoor(val);
  };
  const anticipatoryBalanceComsHandler = val => {
    actions.updateAnticipatoryBalanceComs(val);
  };
  const reactiveBalanceGoodHandler = val => {
    actions.updateReactiveBalanceGood(val);
  };
  const reactiveBalanceFairHandler = val => {
    actions.updateReactiveBalanceFair(val);
  };
  const reactiveBalancePoorHandler = val => {
    actions.updateReactiveBalancePoor(val);
  };
  const reactiveBalanceComsHandler = val => {
    actions.updateReactiveBalanceComs(val);
  };
  const coordinationGoodHandler = val => {
    actions.updateCoordinationGood(val);
  };
  const coordinationFairHandler = val => {
    actions.updateCoordinationFair(val);
  };
  const coordinationPoorHandler = val => {
    actions.updateCoordinationPoor(val);
  };
  const coordinationComsHandler = val => {
    actions.updateCoordinationComs(val);
  };
  const handleAlignmentComs = val => {
    actions.updateAlignmentComs(val);
  };
  const handleBaseOfSupport = val => {
    actions.updateBaseOfSupportComs(val);
  };
  const handleMovementStratComs = val => {
    actions.updateMovementStratComs(val);
  };
  const handleStaticBalanceComs = val => {
    actions.updateStaticBalanceComs(val);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/*   Multiple System assessment */}
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('4%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          Multi System assessment
        </Text>
        <View style={styles.inputFieldContainerMs}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3.4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('6%'),
            }}>
            a) Posture and Alignment
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
            }}>
            a. Posture
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3%'),
              marginHorizontal: wp('7%'),
              marginVertical: wp('1.8%'),
            }}>
            What Postures the child normally adopts ?
          </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            value={posture}
            onChangeText={postureHandler}
            keyboardType="ascii-capable"
            placeholder="Comments"
            placeholderTextColor="#d6d6d6"
            style={styles.answerBox}
          />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('2.2%'),
            }}>
            b. Alignment
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.checkboxWrapper}>
              <CheckBox value={asymmetry} onValueChange={asymmetryHandler} />
              <Text style={styles.checkboxLabel}>Asymmetry</Text>
            </View>
            <Text
              style={{
                marginVertical: wp('5%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Side
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('3%'),
              }}>
              <Picker selectedValue={side} onValueChange={sideHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="RT"
                  value="RT"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="LT"
                  value="LT"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <TextInput
            multiline={true}
            numberOfLines={4}
            value={alignmentComs}
            onChangeText={handleAlignmentComs}
            keyboardType="ascii-capable"
            placeholder="Comments"
            placeholderTextColor="#d6d6d6"
            style={styles.answerBox}
          />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('5%'),
            }}>
            Base of Support
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.checkboxWrapper}>
              <CheckBox value={broad} onValueChange={broadHandler} />
              <Text style={styles.checkboxLabel}>Broad</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox value={narrow} onValueChange={narrowHandler} />
              <Text style={styles.checkboxLabel}>Narrow</Text>
            </View>
          </View>
          <TextInput
            multiline={true}
            numberOfLines={4}
            value={baseOfSupportComs}
            onChangeText={handleBaseOfSupport}
            keyboardType="ascii-capable"
            placeholder="Comments"
            placeholderTextColor="#d6d6d6"
            style={styles.answerBox}
          />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('6%'),
            }}>
            General Posture
          </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            value={generalPosture}
            onChangeText={generalPostureHandler}
            keyboardType="ascii-capable"
            placeholder="Comments"
            placeholderTextColor="#d6d6d6"
            style={styles.generalPostureBox}
          />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('6%'),
            }}>
            Callosities
          </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            value={callosities}
            onChangeText={callositiesHandler}
            keyboardType="ascii-capable"
            placeholder="Comments"
            placeholderTextColor="#d6d6d6"
            style={styles.callositiesBox}
          />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3.4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('6%'),
            }}>
            b) Movement Systems
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3%'),
              marginHorizontal: wp('7%'),
              marginVertical: wp('-1%'),
              marginBottom: wp('2%'),
            }}>
            1) Movement Strategies Used
          </Text>
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: wp('1.5%'),
                marginHorizontal: wp('5%'),
              }}>
              <CheckBox
                value={movementStrategies.Momentum}
                onValueChange={() => movementStrategiesHandler('Momentum')}
              />
              <Text style={styles.checkboxLabel}>Momentum</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: wp('1.5%'),
                marginHorizontal: wp('5%'),
              }}>
              <CheckBox
                value={movementStrategies.OveruseOfMs}
                onValueChange={() => movementStrategiesHandler('OveruseOfMs')}
              />
              <Text style={styles.checkboxLabel}>Overuse of Ms</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: wp('1.5%'),
                marginHorizontal: wp('5%'),
                marginBottom: wp('2%'),
              }}>
              <CheckBox
                value={movementStrategies.IncreasingBos}
                onValueChange={() => movementStrategiesHandler('IncreasingBos')}
              />
              <Text style={styles.checkboxLabel}>Increasing Bos</Text>
            </View>
          </View>
          <TextInput
            multiline={true}
            numberOfLines={4}
            value={movementStratComs}
            onChangeText={handleMovementStratComs}
            keyboardType="ascii-capable"
            placeholder="Comments"
            placeholderTextColor="#d6d6d6"
            style={styles.answerBox}
          />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3%'),
              marginHorizontal: wp('7%'),
              marginVertical: wp('1%'),
            }}>
            2) Static Balance
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: wp('2%'),
              marginHorizontal: wp('4%'),
            }}>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={staticBalancePoor}
                onValueChange={staticBalancePoorHandler}
              />
              <Text style={styles.checkboxLabel}>Good</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={staticBalanceFair}
                onValueChange={staticBalanceFairHandler}
              />
              <Text style={styles.checkboxLabel}>Fair</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={staticBalanceGood}
                onValueChange={staticBalanceGoodHandler}
              />
              <Text style={styles.checkboxLabel}>Poor</Text>
            </View>
          </View>
          <TextInput
            multiline={true}
            numberOfLines={4}
            value={staticBalanceComs}
            onChangeText={handleStaticBalanceComs}
            keyboardType="ascii-capable"
            placeholder="Comments"
            placeholderTextColor="#d6d6d6"
            style={styles.answerBox}
          />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3%'),
              marginHorizontal: wp('7%'),
              marginVertical: wp('2%'),
            }}>
            3) Anticipatory Balance
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: wp('3%'),
              marginHorizontal: wp('4%'),
            }}>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={anticipatoryBalanceGood}
                onValueChange={anticipatoryBalanceGoodHandler}
              />
              <Text style={styles.checkboxLabel}>Good</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={anticipatoryBalanceFair}
                onValueChange={anticipatoryBalanceFairHandler}
              />
              <Text style={styles.checkboxLabel}>Fair</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={anticipatoryBalancePoor}
                onValueChange={anticipatoryBalancePoorHandler}
              />
              <Text style={styles.checkboxLabel}>Poor</Text>
            </View>
          </View>
          <TextInput
            value={anticipatoryBalanceComs}
            onChangeText={anticipatoryBalanceComsHandler}
            keyboardType="ascii-capable"
            placeholder="Comments"
            placeholderTextColor="#d6d6d6"
            style={{
              color: 'white',
              fontSize: wp('3%'),
              marginVertical: wp('0.2%'),
              marginHorizontal: wp('6%'),
            }}
          />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3%'),
              marginHorizontal: wp('7%'),
              marginVertical: wp('3%'),
            }}>
            4) Reactive Balance
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: wp('3%'),
              marginHorizontal: wp('4%'),
            }}>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={reactiveBalanceGood}
                onValueChange={reactiveBalanceGoodHandler}
              />
              <Text style={styles.checkboxLabel}>Good</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={reactiveBalanceFair}
                onValueChange={reactiveBalanceFairHandler}
              />
              <Text style={styles.checkboxLabel}>Fair</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={reactiveBalancePoor}
                onValueChange={reactiveBalancePoorHandler}
              />
              <Text style={styles.checkboxLabel}>Poor</Text>
            </View>
          </View>
          <TextInput
            value={reactiveBalanceComs}
            onChangeText={reactiveBalanceComsHandler}
            keyboardType="ascii-capable"
            placeholder="Comments"
            placeholderTextColor="#d6d6d6"
            style={{
              color: 'white',
              fontSize: wp('3%'),
              marginVertical: wp('0.2%'),
              marginHorizontal: wp('6%'),
            }}
          />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('3%'),
              marginHorizontal: wp('7%'),
              marginVertical: wp('4%'),
            }}>
            5) Co-ordination
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: wp('3%'),
              marginHorizontal: wp('4%'),
            }}>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={coordinationGood}
                onValueChange={coordinationGoodHandler}
              />
              <Text style={styles.checkboxLabel}>Good</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={coordinationFair}
                onValueChange={coordinationFairHandler}
              />
              <Text style={styles.checkboxLabel}>Fair</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={coordinationPoor}
                onValueChange={coordinationPoorHandler}
              />
              <Text style={styles.checkboxLabel}>Poor</Text>
            </View>
          </View>
          <TextInput
            value={coordinationComs}
            onChangeText={coordinationComsHandler}
            keyboardType="ascii-capable"
            placeholder="Comments"
            placeholderTextColor="#d6d6d6"
            style={{
              color: 'white',
              fontSize: wp('3%'),
              marginVertical: wp('0.2%'),
              marginHorizontal: wp('6%'),
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputFieldContainerMs: {
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
  answerBox: {
    color: 'white',
    fontSize: wp('3%'),
    marginVertical: wp('1%'),
    marginHorizontal: wp('6%'),
  },
  generalPostureBox: {
    color: 'white',
    fontSize: wp('3%'),
    marginVertical: wp('-1.5%'),
    marginHorizontal: wp('6%'),
  },
  callositiesBox: {
    color: 'white',
    fontSize: wp('3%'),
    marginVertical: wp('-1.5%'),
    marginHorizontal: wp('6%'),
  },
});

export default Section14;
