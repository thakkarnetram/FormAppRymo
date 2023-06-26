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

const Section18 = () => {
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
  const gmfm = useSelector(state => state.section18.GMFM);
  const pedi = useSelector(state => state.section18.PEDI);
  const pediatricBalanceScale = useSelector(
    state => state.section18.balanceScale,
  );
  const wotaAquaticScale = useSelector(state => state.section18.WOTA);
  // handlers
  const actions = bindActionCreators(actionCreators, dispatch);
  const gmfmHandler = text => {
    actions.updateGMFM(text);
  };
  const pediHandler = text => {
    actions.updatePEDI(text);
  };
  const pediatricBalanceScaleHandler = text => {
    actions.updateBalanceScale(text);
  };
  const wotaAquaticScaleHandler = text => {
    actions.updateWOTA(text);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Section 16 => Other Scales */}
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('4%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          Other Scales
        </Text>
        <View style={styles.inputFieldContainerS16}>
          <Text
            style={{
              marginVertical: wp('6%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            1. GMFM
          </Text>
          <TextInput
            numberOfLines={4}
            multiline={true}
            value={gmfm}
            onChangeText={gmfmHandler}
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
              marginVertical: wp('4%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            2. PEDI
          </Text>
          <TextInput
            value={pedi}
            onChangeText={pediHandler}
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
            3. Pediatric Balance Scale
          </Text>
          <TextInput
            value={pediatricBalanceScale}
            numberOfLines={4}
            multiline={true}
            onChangeText={pediatricBalanceScaleHandler}
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
              marginVertical: wp('4%'),
              marginHorizontal: wp('6%'),
              color: 'white',
              fontSize: wp('3%'),
            }}>
            4. WOTA (Aquatic Scale)
          </Text>
          <TextInput
            value={wotaAquaticScale}
            onChangeText={wotaAquaticScaleHandler}
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
  inputFieldContainerS16: {
    width: wp('90%'),
    height: null,
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
});

export default Section18;
