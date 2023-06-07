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
        </Text>
        <View style={styles.bigContainerPicker}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Movement</Text>
            <Text style={styles.headerText}>Range of motion</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Back extension</Text>
            <View style={styles.bigContainer}>
              <Picker selectedValue={backExt} onValueChange={backExtHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-10"
                  value="0-10"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="10-15"
                  value="10-15"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="15-20"
                  value="15-20"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="20-25"
                  value="20-25"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Back flexion</Text>
            <View style={styles.bigContainer}>
              <Picker selectedValue={backFlex} onValueChange={backFlexHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-30"
                  value="0-30"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="30-60"
                  value="30-60"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="60-90"
                  value="60-90"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Back Lateral Bending</Text>
            <View style={styles.bigContainer}>
              <Picker selectedValue={backLat} onValueChange={backLatHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-10"
                  value="0-10"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="10-15"
                  value="10-15"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="15-20"
                  value="15-20"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="20-25"
                  value="20-25"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Neck flexion</Text>
            <View style={styles.bigContainer}>
              <Picker selectedValue={neckFlex} onValueChange={neckFlexHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-15"
                  value="0-15"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="15-30"
                  value="15-30"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="30-50"
                  value="30-50"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Neck Extension</Text>
            <View style={styles.bigContainer}>
              <Picker selectedValue={neckExt} onValueChange={neckExtHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-20"
                  value="0-20"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="20-40"
                  value="20-40"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="40-60"
                  value="40-60"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Neck lateral bending</Text>
            <View style={styles.bigContainer}>
              <Picker selectedValue={neckLat} onValueChange={neckLatHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-15"
                  value="0-15"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="15-30"
                  value="15-30"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="30-45"
                  value="30-45"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Hip Flexion</Text>
            <View style={styles.bigContainer}>
              <Picker selectedValue={hipFlex} onValueChange={hipFlexHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-25"
                  value="0-25"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="25-50"
                  value="25-50"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="50-75"
                  value="50-75"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="75-100"
                  value="75-100"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Hip extension</Text>
            <View style={styles.bigContainer}>
              <Picker selectedValue={hipExt} onValueChange={hipExtHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-15"
                  value="0-15"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="15-30"
                  value="15-30"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Hip adduction</Text>
            <View style={styles.bigContainer}>
              <Picker selectedValue={hipAdd} onValueChange={hipAddHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-15"
                  value="0-15"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="15-30"
                  value="15-30"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="30-45"
                  value="30-45"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Hip abduction</Text>
            <View style={styles.bigContainer}>
              <Picker selectedValue={hipAbd} onValueChange={hipAbdHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-15"
                  value="0-15"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="15-30"
                  value="15-30"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="30-45"
                  value="30-45"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Knee flexion</Text>
            <View style={styles.bigContainer}>
              <Picker selectedValue={kneeFlex} onValueChange={kneeFlexHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-50"
                  value="0-50"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="50-100"
                  value="50-100"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="100-150"
                  value="100-150"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Hip medial rotation</Text>
            <View style={styles.bigContainer}>
              <Picker
                selectedValue={hipMedRot}
                onValueChange={hipMedRotHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-15"
                  value="0-15"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="15-30"
                  value="15-30"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Hip Lateral Rotation</Text>
            <View style={styles.bigContainer}>
              <Picker
                selectedValue={hipLatRot}
                onValueChange={hipLatRotHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-15"
                  value="0-15"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="15-30"
                  value="15-30"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="30-45"
                  value="30-45"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Shoulder Abduction</Text>
            <View style={styles.bigContainer}>
              <Picker
                selectedValue={shoulderAbd}
                onValueChange={shoulderAbdHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-50"
                  value="0-50"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="50-100"
                  value="50-100"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="100-150"
                  value="100-150"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Shoulder Adduction</Text>
            <View style={styles.bigContainer}>
              <Picker
                selectedValue={shoulderAdd}
                onValueChange={shoulderAddHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-50"
                  value="0-50"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="50-100"
                  value="50-100"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="100-150"
                  value="100-150"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Shoulder Flexion</Text>
            <View style={styles.bigContainer}>
              <Picker
                selectedValue={shoulderFlex}
                onValueChange={shoulderFlexHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-50"
                  value="0-50"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="50-100"
                  value="50-100"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="100-150"
                  value="100-150"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Shoulder Extension</Text>
            <View style={styles.bigContainer}>
              <Picker
                selectedValue={shoulderExt}
                onValueChange={shoulderExtHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-50"
                  value="0-50"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="50-100"
                  value="50-100"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="100-150"
                  value="100-150"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Elbow Flexion</Text>
            <View style={styles.bigContainer}>
              <Picker
                selectedValue={elbowFlex}
                onValueChange={elbowFlexHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-50"
                  value="0-50"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="50-100"
                  value="50-100"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="100-150"
                  value="100-150"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Forearm Supination</Text>
            <View style={styles.bigContainer}>
              <Picker
                selectedValue={forearmSupination}
                onValueChange={forearmSupHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-30"
                  value="0-30"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="30-60"
                  value="30-60"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="60-90"
                  value="60-90"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Forearm Pronation</Text>
            <View style={styles.bigContainer}>
              <Picker
                selectedValue={forearmPronation}
                onValueChange={forearmProHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-30"
                  value="0-30"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="30-60"
                  value="30-60"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="60-90"
                  value="60-90"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Ankle DF</Text>
            <View style={styles.bigContainer}>
              <Picker selectedValue={ankleDF} onValueChange={ankleDFHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-10"
                  value="0-10"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="10-20"
                  value="10-20"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Ankle PF</Text>
            <View style={styles.bigContainer}>
              <Picker selectedValue={anklePF} onValueChange={anklePFHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-20"
                  value="0-20"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="20-40"
                  value="20-40"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Ankle Inversion</Text>
            <View style={styles.bigContainer}>
              <Picker
                selectedValue={ankleInversion}
                onValueChange={ankleInversionHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-15"
                  value="0-15"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="15-30"
                  value="15-30"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Ankle Eversion</Text>
            <View style={styles.bigContainer}>
              <Picker
                selectedValue={ankleEversion}
                onValueChange={ankleEversionHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-10"
                  value="0-10"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="10-20"
                  value="10-20"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Wrist Flexion</Text>
            <View style={styles.bigContainer}>
              <Picker
                selectedValue={wristFlex}
                onValueChange={wristFlexHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-20"
                  value="0-20"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="20-40"
                  value="20-40"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="40-60"
                  value="40-60"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Wrist Extension</Text>
            <View style={styles.bigContainer}>
              <Picker selectedValue={wristExt} onValueChange={wristExtHandler}>
                <Picker.Item label="Select" value="" />
                <Picker.Item
                  label="0-20"
                  value="0-20"
                  style={{
                    color: 'black',
                    fontSize: wp('2%'),
                    textAlign: 'center',
                  }}
                />
                <Picker.Item
                  label="20-40"
                  value="20-40"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
                <Picker.Item
                  label="40-60"
                  value="40-60"
                  style={{color: 'black', fontSize: wp('2%')}}
                />
              </Picker>
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
