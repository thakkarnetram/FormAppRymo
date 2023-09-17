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
import {Picker} from '@react-native-picker/picker';

const Section9 = () => {
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
  const backExt = useSelector(state => state.section9.backExt);
  const backFlex = useSelector(state => state.section9.backFlex);
  const backLat = useSelector(state => state.section9.backLat);
  const neckFlex = useSelector(state => state.section9.neckFlex);
  const neckExt = useSelector(state => state.section9.neckExt);
  const neckLat = useSelector(state => state.section9.neckLat);
  const hipFlex = useSelector(state => state.section9.hipFlex);
  const hipExt = useSelector(state => state.section9.hipExt);
  const hipAbd = useSelector(state => state.section9.hipAbd);
  const hipAdd = useSelector(state => state.section9.hipAdd);
  const kneeFlex = useSelector(state => state.section9.kneeFlex);
  const hipMedRot = useSelector(state => state.section9.hipMedRot);
  const hipLatRot = useSelector(state => state.section9.hipLatRot);
  const shoulderAbd = useSelector(state => state.section9.shoulderAbd);
  const shoulderFlex = useSelector(state => state.section9.shoulderFlex);
  const shoulderAdd = useSelector(state => state.section9.shoulderAdd);
  const shoulderExt = useSelector(state => state.section9.shoulderExt);
  const elbowFlex = useSelector(state => state.section9.elbowFlex);
  const forearmPronation = useSelector(
    state => state.section9.forearmPronation,
  );
  const forearmSupination = useSelector(
    state => state.section9.forearmSupination,
  );
  const ankleDF = useSelector(state => state.section9.ankleDF);
  const anklePF = useSelector(state => state.section9.anklePF);
  const ankleInversion = useSelector(state => state.section9.ankleInversion);
  const ankleEversion = useSelector(state => state.section9.ankleEversion);
  const wristFlex = useSelector(state => state.section9.wristFlex);
  const wristExt = useSelector(state => state.section9.wristExt);

  //handlers
  const actions = bindActionCreators(actionCreators, dispatch);
  const backExtHandler = backExt => {
    actions.updateBackExt(backExt);
  };
  const backFlexHandler = backFlex => {
    actions.updateBackFlex(backFlex);
  };
  const backLatHandler = backLat => {
    actions.updateBackLat(backLat);
  };
  const neckFlexHandler = neckFlex => {
    actions.updateNeckFlex(neckFlex);
  };
  const neckExtHandler = neckExt => {
    actions.updateNeckExt(neckExt);
  };
  const neckLatHandler = neckLat => {
    actions.updateNeckLat(neckLat);
  };
  const hipFlexHandler = hipFlex => {
    actions.updateHipFlex(hipFlex);
  };
  const hipExtHandler = hipExt => {
    actions.updateHipExt(hipExt);
  };
  const hipAbdHandler = hipAbd => {
    actions.updateHipAbd(hipAbd);
  };
  const hipAddHandler = hipAdd => {
    actions.updateHipAdd(hipAdd);
  };
  const kneeFlexHandler = kneeFlex => {
    actions.updateKneeFlex(kneeFlex);
  };
  const hipMedRotHandler = hipMedRot => {
    actions.updateHipMedRot(hipMedRot);
  };
  const hipLatRotHandler = hipLatRot => {
    actions.updateHipLatRot(hipLatRot);
  };
  const shoulderAbdHandler = shoulderAbd => {
    actions.updateShoulderAbd(shoulderAbd);
  };
  const shoulderFlexHandler = shoulderFlex => {
    actions.updateShoulderFlex(shoulderFlex);
  };
  const shoulderAddHandler = shoulderAdd => {
    actions.updateShoulderAdd(shoulderAdd);
  };
  const shoulderExtHandler = shoulderExt => {
    actions.updateShoulderExt(shoulderExt);
  };
  const elbowFlexHandler = elbowFlex => {
    actions.updateElbowFlex(elbowFlex);
  };
  const forearmProHandler = forearmPronation => {
    actions.updateForearmPronation(forearmPronation);
  };
  const forearmSupHandler = forearmSupination => {
    actions.updateForearmSupination(forearmSupination);
  };
  const ankleDFHandler = ankleDF => {
    actions.updateAnkleDF(ankleDF);
  };
  const anklePFHandler = anklePF => {
    actions.updateAnklePF(anklePF);
  };
  const ankleInversionHandler = ankleInversion => {
    actions.updateAnkleInversion(ankleInversion);
  };
  const ankleEversionHandler = ankleEversion => {
    actions.updateAnkleEversion(ankleEversion);
  };
  const wristFlexHandler = wristFlex => {
    actions.updateWristFlex(wristFlex);
  };
  const wristExtHandler = wristExt => {
    actions.updateWristExt(wristExt);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/*   ROM */}
        <Text
          style={{
            color: '#169cc4',
            fontWeight: 'bold',
            fontSize: wp('4%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          ROM
          {/* TODO ADD TEXT BOXES INSTEAD OF PICKER */}
        </Text>
        <View style={styles.bigContainerPicker}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Movement</Text>
            <Text style={styles.headerText}>Range of motion</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Back extension</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={backExt}
                onChangeText={backExtHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Back flexion</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={backFlex}
                onChangeText={backFlexHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Back Lateral Bending</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={backLat}
                onChangeText={backLatHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Neck flexion</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={neckFlex}
                onChangeText={neckFlexHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Neck Extension</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={neckExt}
                onChangeText={neckExtHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Neck lateral bending</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={neckLat}
                onChangeText={neckLatHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Hip Flexion</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={hipFlex}
                onChangeText={hipFlexHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Hip extension</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={hipExt}
                onChangeText={hipExtHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Hip adduction</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={hipAdd}
                onChangeText={hipAddHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Hip abduction</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={hipAbd}
                onChangeText={hipAbdHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Knee flexion</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={kneeFlex}
                onChangeText={kneeFlexHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Hip medial rotation</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={hipMedRot}
                onChangeText={hipMedRotHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Hip Lateral Rotation</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={hipLatRot}
                onChangeText={hipLatRotHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Shoulder Abduction</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={shoulderAbd}
                onChangeText={shoulderAbdHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Shoulder Adduction</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={shoulderAdd}
                onChangeText={shoulderAddHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Shoulder Flexion</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={shoulderFlex}
                onChangeText={shoulderFlexHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Shoulder Extension</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={shoulderExt}
                onChangeText={shoulderExtHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Elbow Flexion</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={elbowFlex}
                onChangeText={elbowFlexHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Forearm Supination</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={forearmSupination}
                onChangeText={forearmSupHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Forearm Pronation</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={forearmPronation}
                onChangeText={forearmProHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Ankle DF</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={ankleDF}
                onChangeText={ankleDFHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Ankle PF</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={anklePF}
                onChangeText={anklePFHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Ankle Inversion</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={ankleInversion}
                onChangeText={ankleInversionHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Ankle Eversion</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={ankleEversion}
                onChangeText={ankleEversionHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Wrist Flexion</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={wristFlex}
                onChangeText={wristFlexHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Wrist Extension</Text>
            <View style={styles.bigContainer}>
              <TextInput
                value={wristExt}
                onChangeText={wristExtHandler}
                keyboardType="numeric"
                placeholder="Value"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('15%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('3%'),
                  marginVertical: wp('1%'),
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowText: {
    marginVertical: wp('2.2%'),
    color: 'white',
    fontSize: wp('2.85%'),
  },
  bigContainerPicker: {
    width: wp('90%'),
    height: hp('160%'),
    flex: 1,
    paddingVertical: wp('5%'),
    paddingHorizontal: wp('5%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  bigContainer: {
    width: wp('20%'),
    height: hp('5%'),
    marginHorizontal: wp('5%'),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: wp('3.6%'),
    color: 'white',
  },
});

export default Section9;
