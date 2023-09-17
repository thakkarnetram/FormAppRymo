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

const Section8 = () => {
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
  const tasRTR1 = useSelector(state => state.section8.tendoachillesRTR1);
  const tasRTR2 = useSelector(state => state.section8.tendoachillesRTR2);
  const tasLTR1 = useSelector(state => state.section8.tendoachillesLTR1);
  const tasLTR2 = useSelector(state => state.section8.tendoachillesLTR2);
  const hamstringsRTR1 = useSelector(state => state.section8.hamstringsRTR1);
  const hamstringsRTR2 = useSelector(state => state.section8.hamstringsRTR2);
  const hamstringsLTR1 = useSelector(state => state.section8.hamstringsLTR1);
  const hamstringsLTR2 = useSelector(state => state.section8.hamstringsLTR2);
  const hipAdductionRTR1 = useSelector(
    state => state.section8.hipAdductorsRTR1,
  );
  const hipAdductionRTR2 = useSelector(
    state => state.section8.hipAdductorsRTR2,
  );
  const hipAdductionLTR1 = useSelector(
    state => state.section8.hipAdductorsLTR1,
  );
  const hipAdductionLTR2 = useSelector(
    state => state.section8.hipAdductorsLTR2,
  );
  const bicepsRTR1 = useSelector(state => state.section8.bicepsRTR1);
  const bicepsRTR2 = useSelector(state => state.section8.bicepsRTR2);
  const bicepsLTR1 = useSelector(state => state.section8.bicepsLTR1);
  const bicepsLTR2 = useSelector(state => state.section8.bicepsLTR2);
  const actions = bindActionCreators(actionCreators, dispatch);
  // new handlers
  const handleBicepsRTR1Change = val => {
    actions.updateBicepsRTR1(val);
  };
  const handleBicepsRTR2Change = val => {
    actions.updateBicepsRTR2(val);
  };
  const handleBicepsLTR1Change = val => {
    actions.updateBicepsLTR1(val);
  };
  const handleBicepsLTR2Change = val => {
    actions.updateBicepsLTR2(val);
  };
  //handlers
  const handleTasRTR1Change = tasRTR1 => {
    actions.updateTendoachillesRTR1(tasRTR1);
  };
  const handleTasRTR2Change = tasRTR2 => {
    actions.updateTendoachillesRTR2(tasRTR2);
  };
  const handleTasLTR1Change = tasLTR1 => {
    actions.updateTendoachillesLTR1(tasLTR1);
  };
  const handleTasLTR2Change = tasLTR2 => {
    actions.updateTendoachillesLTR2(tasLTR2);
  };
  const handleHamstringsRTR1Change = hamstringsRTR1 => {
    actions.updateHamstringsRTR1(hamstringsRTR1);
  };
  const handleHamstringsRTR2Change = hamstringsRTR2 => {
    actions.updateHamstringsRTR2(hamstringsRTR2);
  };
  const handleHamstringsLTR1Change = hamstringsLTR1 => {
    actions.updateHamstringsLTR1(hamstringsLTR1);
  };
  const handleHamstringsLTR2Change = hamstringsLTR2 => {
    actions.updateHamstringsLTR2(hamstringsLTR2);
  };
  const handleHipAdductionRTR1Change = hipAdductionRTR1 => {
    actions.updateHipAdductorsRTR1(hipAdductionRTR1);
  };
  const handleHipAdductionRTR2Change = hipAdductionRTR2 => {
    actions.updateHipAdductorsRTR2(hipAdductionRTR2);
  };
  const handleHipAdductionLTR1Change = hipAdductionLTR1 => {
    actions.updateHipAdductorsLTR1(hipAdductionLTR1);
  };
  const handleHipAdductionLTR2Change = hipAdductionLTR2 => {
    actions.updateHipAdductorsLTR2(hipAdductionLTR2);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/*   Tardieu's*/}
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('4%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          Tardieu's
        </Text>
        <View style={styles.normalContainerPicker}>
          <Text
            style={{
              marginVertical: wp('6%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            1.Tendoachilles
          </Text>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#195794',
                  fontSize: wp('3%'),
                  marginHorizontal: wp('25%'),
                }}>
                R1
              </Text>
              <Text
                style={{
                  color: '#195794',
                  fontSize: wp('3%'),
                  marginHorizontal: wp('-5%'),
                }}>
                R2
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: wp('7%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              RT
            </Text>
            <TextInput
              value={tasRTR1}
              onChangeText={handleTasRTR1Change}
              keyboardType="ascii-capable"
              placeholder="R1"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('10%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-3%'),
              }}
            />
            <TextInput
              value={tasRTR2}
              onChangeText={handleTasRTR2Change}
              keyboardType="ascii-capable"
              placeholder="R2"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('10%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-3%'),
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: wp('7%'),
                color: 'white',
                fontSize: wp('3%'),
                marginVertical: wp('1%'),
              }}>
              LT
            </Text>
            <TextInput
              value={tasLTR1}
              onChangeText={handleTasLTR1Change}
              keyboardType="ascii-capable"
              placeholder="R1"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('10%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-3%'),
              }}
            />
            <TextInput
              value={tasLTR2}
              onChangeText={handleTasLTR2Change}
              keyboardType="ascii-capable"
              placeholder="R2"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('10%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-3%'),
              }}
            />
          </View>
          {/* Start  */}
          <Text
            style={{
              marginVertical: wp('6%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            2. Hamstrings
          </Text>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#195794',
                  fontSize: wp('3%'),
                  marginHorizontal: wp('25%'),
                }}>
                R1
              </Text>
              <Text
                style={{
                  color: '#195794',
                  fontSize: wp('3%'),
                  marginHorizontal: wp('-5%'),
                }}>
                R2
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: wp('7%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              RT
            </Text>
            <TextInput
              value={hamstringsRTR1}
              onChangeText={handleHamstringsRTR1Change}
              keyboardType="ascii-capable"
              placeholder="R1"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('10%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-3%'),
              }}
            />
            <TextInput
              value={hamstringsRTR2}
              onChangeText={handleHamstringsRTR2Change}
              keyboardType="ascii-capable"
              placeholder="R2"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('10%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-3%'),
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: wp('7%'),
                color: 'white',
                fontSize: wp('3%'),
                marginVertical: wp('1%'),
              }}>
              LT
            </Text>
            <TextInput
              value={hamstringsLTR1}
              onChangeText={handleHamstringsLTR1Change}
              keyboardType="ascii-capable"
              placeholder="R1"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('10%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-3%'),
              }}
            />
            <TextInput
              value={hamstringsLTR2}
              onChangeText={handleHamstringsLTR2Change}
              keyboardType="ascii-capable"
              placeholder="R2"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('10%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-3%'),
              }}
            />
          </View>
          {/* End  */}
          <Text
            style={{
              marginVertical: wp('6%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            3. Hip Adductors
          </Text>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#195794',
                  fontSize: wp('3%'),
                  marginHorizontal: wp('25%'),
                }}>
                R1
              </Text>
              <Text
                style={{
                  color: '#195794',
                  fontSize: wp('3%'),
                  marginHorizontal: wp('-5%'),
                }}>
                R2
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: wp('7%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              RT
            </Text>
            <TextInput
              value={hipAdductionRTR1}
              onChangeText={handleHipAdductionRTR1Change}
              keyboardType="ascii-capable"
              placeholder="R1"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('10%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-3%'),
              }}
            />
            <TextInput
              value={hipAdductionRTR2}
              onChangeText={handleHipAdductionRTR2Change}
              keyboardType="ascii-capable"
              placeholder="R2"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('10%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-3%'),
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: wp('7%'),
                color: 'white',
                fontSize: wp('3%'),
                marginVertical: wp('1%'),
              }}>
              LT
            </Text>
            <TextInput
              value={hipAdductionLTR1}
              onChangeText={handleHipAdductionLTR1Change}
              keyboardType="ascii-capable"
              placeholder="R1"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('10%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-3%'),
              }}
            />
            <TextInput
              value={hipAdductionLTR2}
              onChangeText={handleHipAdductionLTR2Change}
              keyboardType="ascii-capable"
              placeholder="R2"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('10%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-3%'),
              }}
            />
          </View>
          {/* Biceps  */}
          <Text
            style={{
              marginVertical: wp('6%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            4. Biceps
          </Text>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#195794',
                  fontSize: wp('3%'),
                  marginHorizontal: wp('25%'),
                }}>
                R1
              </Text>
              <Text
                style={{
                  color: '#195794',
                  fontSize: wp('3%'),
                  marginHorizontal: wp('-5%'),
                }}>
                R2
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: wp('7%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              RT
            </Text>
            <TextInput
              value={bicepsRTR1}
              onChangeText={handleBicepsRTR1Change}
              keyboardType="ascii-capable"
              placeholder="R1"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('10%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-3%'),
              }}
            />
            <TextInput
              value={bicepsRTR2}
              onChangeText={handleBicepsRTR2Change}
              keyboardType="ascii-capable"
              placeholder="R2"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('10%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-3%'),
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginHorizontal: wp('7%'),
                color: 'white',
                fontSize: wp('3%'),
                marginVertical: wp('1%'),
              }}>
              LT
            </Text>
            <TextInput
              value={bicepsLTR1}
              onChangeText={handleBicepsLTR1Change}
              keyboardType="ascii-capable"
              placeholder="R1"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('10%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-3%'),
              }}
            />
            <TextInput
              value={bicepsLTR2}
              onChangeText={handleBicepsLTR2Change}
              keyboardType="ascii-capable"
              placeholder="R2"
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                width: wp('10%'),
                fontSize: wp('3%'),
                marginHorizontal: wp('7%'),
                marginVertical: wp('-3%'),
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  normalContainerPicker: {
    width: wp('90%'),
    height: null,
    flex: 1,
    paddingVertical: wp('5%'),
    paddingHorizontal: wp('5%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  inputRTR1: {
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: wp('18%'),
    fontSize: wp('3%'),
  },
  inputRTR2: {
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: wp('20%'),
    fontSize: wp('3%'),
  },
  inputLTR1: {
    flexDirection: 'column',
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: wp('20%'),
    fontSize: wp('3%'),
  },
  inputLTR2: {
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: wp('25%'),
    fontSize: wp('3%'),
  },
});

export default Section8;
