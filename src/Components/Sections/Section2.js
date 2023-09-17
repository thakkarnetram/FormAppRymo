import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
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

const Section2 = () => {
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
  const fatherAgeConception = useSelector(
    state => state.section2.fatherAgeConception,
  );
  const motherAgeConception = useSelector(
    state => state.section2.motherAgeConception,
  );
  const workLoad = useSelector(state => state.section2.workLoad);
  const stresslevel = useSelector(state => state.section2.stressLevel);
  const consanguinity = useSelector(state => state.section2.consanguinity);
  const nonConsanguinity = useSelector(
    state => state.section2.nonConsanguinity,
  );
  const children = useSelector(state => state.section2.children);
  const preNatalOptions = useSelector(state => state.section2.preNatalOptions);
  const fullTerm = useSelector(state => state.section2.fullTerm);
  const preTerm = useSelector(state => state.section2.preTerm);
  const actions = bindActionCreators(actionCreators, dispatch);
  const workLoadComs = useSelector(state => state.section2.workLoadComs);
  const stressLevelComs = useSelector(state => state.section2.stressLevelComs);
  const workLoadComsHandler = val => {
    actions.updateWorkLoadComs(val);
  };
  const stressLevelComsHandler = val => {
    actions.updateStressLevelComs(val);
  };
  // handle states
  const fatherAgeHandler = fatherAgeConception => {
    actions.updatefatherAgeConception(fatherAgeConception);
  };
  const motherAgeHandler = motherAgeConception => {
    actions.updatemotherAgeConception(motherAgeConception);
  };
  const workLoadHandler = workLoad => {
    actions.updateWorkLoad(workLoad);
  };
  const stressLevelHandler = stressLevel => {
    actions.updateStressLevel(stressLevel);
  };
  const consanguinityHandler = consanguinity => {
    actions.updateConsanguinity(consanguinity);
  };
  const nonConsanguinityHandler = nonConsanguinity => {
    actions.updateNonConsanguinity(nonConsanguinity);
  };
  const childrenHandler = children => {
    actions.updateChildren(children);
  };
  const preNatalOptionsHandler = preNatalOption => {
    const updatedOptions = {
      ...preNatalOptions,
      [preNatalOption]: !preNatalOptions[preNatalOption],
    };
    actions.updatePreNatalOptions(updatedOptions);
  };
  const fullTermHandler = fullTerm => {
    actions.updateFullTerm(fullTerm);
  };
  const preTermHandler = preTerm => {
    actions.updatePreTerm(preTerm);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#169cc4',
            fontSize: wp('5%'),
            marginHorizontal: wp('5%'),
            marginVertical: wp('1%'),
          }}>
          History
        </Text>
        <Text
          style={{
            color: '#195794',
            fontSize: wp('3%'),
            marginHorizontal: wp('5%'),
          }}>
          Father's Age During Conception
        </Text>
        <View style={styles.inputTextContainer}>
          <TextInput
            value={fatherAgeConception}
            onChangeText={fatherAgeHandler}
            keyboardType="numeric"
            placeholder="Father's Age During Conception"
            placeholderTextColor="#FFFFFF"
            style={styles.userAge}
          />
        </View>
        <Text
          style={{
            color: '#195794',
            fontSize: wp('3%'),
            marginHorizontal: wp('5%'),
          }}>
          Mother's Age During Conception
        </Text>
        <View style={styles.inputTextContainer}>
          <TextInput
            value={motherAgeConception}
            onChangeText={motherAgeHandler}
            keyboardType="numeric"
            placeholder="Mother's Age During Conception"
            placeholderTextColor="#FFFFFF"
            style={styles.userAge}
          />
        </View>
        <Text
          style={{
            color: '#195794',
            fontSize: wp('3%'),
            marginHorizontal: wp('5%'),
          }}>
          Mother's work load during conception
        </Text>
        <View style={styles.checkBoxContainerHistory}>
          <View style={styles.row}>
            <Text
              style={{
                marginVertical: wp('3%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Mother's work load during conception
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('2%'),
              }}>
              <Picker selectedValue={workLoad} onValueChange={workLoadHandler}>
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
        </View>
        <TextInput
          value={workLoadComs}
          onChangeText={workLoadComsHandler}
          placeholder="Comments"
          placeholderTextColor="black"
          style={{
            color: 'black',
            fontSize: wp('3%'),
            marginHorizontal: wp('4%'),
            marginVertical: wp('2%'),
          }}
        />
        <Text
          style={{
            color: '#195794',
            fontSize: wp('3%'),
            marginHorizontal: wp('5%'),
          }}>
          Mother's stress level during conception
        </Text>
        <View style={styles.checkBoxContainerHistory}>
          <View style={styles.row}>
            <Text
              style={{
                marginVertical: wp('3%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Mother's stress level during conception
            </Text>
            <View
              style={{
                width: wp('20%'),
                height: hp('5%'),
                marginHorizontal: wp('4%'),
                marginVertical: wp('2%'),
              }}>
              <Picker
                selectedValue={stresslevel}
                onValueChange={stressLevelHandler}>
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
        </View>
        <TextInput
          value={stressLevelComs}
          onChangeText={workLoadComsHandler}
          placeholder="Comments"
          placeholderTextColor="black"
          style={{
            color: 'black',
            fontSize: wp('3%'),
            marginHorizontal: wp('4%'),
            marginVertical: wp('2%'),
          }}
        />
        <Text
          style={{
            color: '#195794',
            fontSize: wp('3%'),
            marginHorizontal: wp('5%'),
          }}>
          Consanguinity / Non Consanguinity
        </Text>
        <View style={styles.checkBoxContainerHistory}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.checkContainer}>
              <CheckBox
                style={styles.maleCheckBox}
                value={consanguinity}
                onValueChange={consanguinityHandler}
              />
              <Text style={styles.maleCheckBoxText}>Consanguinity</Text>
              <CheckBox
                style={styles.femaleCheckBox}
                value={nonConsanguinity}
                onValueChange={nonConsanguinityHandler}
              />
              <Text style={styles.femaleCheckBoxText}>Non-Consanguinity</Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            color: '#195794',
            fontSize: wp('3%'),
            marginHorizontal: wp('5%'),
          }}>
          No of Children
        </Text>
        <View style={styles.weigthHeightContainer}>
          <TextInput
            value={children}
            onChangeText={childrenHandler}
            keyboardType="numeric"
            placeholder="No of Children"
            placeholderTextColor="#FFFFFF"
            style={styles.userWeightText}
          />
        </View>
        <Text
          style={{
            color: '#195794',
            fontSize: wp('3%'),
            marginHorizontal: wp('5%'),
          }}>
          PreNatal Options
        </Text>
        <View style={styles.inputFieldContainerMCQ}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.multipleChoiceHeader}>Pre Natal</Text>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={preNatalOptions.HyperTension}
                onValueChange={() => preNatalOptionsHandler('HyperTension')}
              />
              <Text style={styles.checkboxLabel}>HyperTension</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={preNatalOptions.Diabetes}
                onValueChange={() => preNatalOptionsHandler('Diabetes')}
              />
              <Text style={styles.checkboxLabel}>Diabetes</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={preNatalOptions.Convulsion}
                onValueChange={() => preNatalOptionsHandler('Convulsion')}
              />
              <Text style={styles.checkboxLabel}>Convulsion</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={preNatalOptions.Any_Medication}
                onValueChange={() => preNatalOptionsHandler('Any_Medication')}
              />
              <Text style={styles.checkboxLabel}>Any_Medication</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={preNatalOptions.Hyperthyroidism}
                onValueChange={() => preNatalOptionsHandler('Hyperthyroidism')}
              />
              <Text style={styles.checkboxLabel}>Hyperthyroidism</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={preNatalOptions.Infections}
                onValueChange={() => preNatalOptionsHandler('Infections')}
              />
              <Text style={styles.checkboxLabel}>Infections</Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            color: '#195794',
            fontSize: wp('3%'),
            marginHorizontal: wp('5%'),
          }}>
          Natal Options
        </Text>
        <View style={styles.checkBoxContainerNatal}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.natalHead}>NATAL</Text>
            <View style={styles.checkContainerNatal}>
              <CheckBox
                style={styles.fullTermCheckBox}
                value={fullTerm}
                onValueChange={fullTermHandler}
              />
              <Text style={styles.fullTermBoxText}>Full Term</Text>
              <CheckBox
                style={styles.preTermCheckBox}
                value={preTerm}
                onValueChange={preTermHandler}
              />
              <Text style={styles.preTermCheckBoxText}>Pre Term</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  checkContainer: {
    marginHorizontal: wp('2%'),
    marginVertical: hp('1%'),
    flexDirection: 'row',
  },
  checkBoxContainer: {
    width: wp('90%'),
    height: hp('7%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  userWeightText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('1%'),
    marginHorizontal: wp('1.5%'),
  },
  weigthHeightContainer: {
    width: wp('90%'),
    height: hp('6%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkBoxContainerHistory: {
    width: wp('90%'),
    height: hp('7%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  inputTextContainer: {
    width: wp('90%'),
    height: hp('6%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  userAge: {
    marginVertical: wp('1%'),
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
  },
  inputFieldContainerMCQ: {
    width: wp('90%'),
    height: hp('35%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
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
  checkBoxContainerNatal: {
    width: wp('90%'),
    height: hp('7%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  natalHead: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('4%'),
    marginVertical: hp('2%'),
  },
  checkContainerNatal: {
    marginHorizontal: wp('2%'),
    marginVertical: hp('1%'),
    flexDirection: 'row',
  },
  fullTermCheckBox: {
    marginVertical: hp('1.2%'),
    marginHorizontal: wp('2%'),
  },
  fullTermBoxText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('1%'),
  },
  preTermCheckBox: {
    marginVertical: hp('1.2%'),
    marginHorizontal: wp('3%'),
  },
  preTermCheckBoxText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: hp('1%'),
    marginHorizontal: wp('3%'),
  },
  maleCheckBox: {
    marginVertical: hp('1.2%'),
    marginHorizontal: wp('2%'),
  },
  maleCheckBoxText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('1%'),
  },
  femaleCheckBox: {
    marginVertical: hp('1.2%'),
    marginHorizontal: wp('2%'),
  },
  femaleCheckBoxText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('1%'),
  },
});

export default Section2;
