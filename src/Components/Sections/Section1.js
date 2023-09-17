import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../state/index';

const Section1 = () => {
  // locking screen to potrait mode
  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations(); // Unlocks all orientations when the component unmounts
    };
  }, []);
  // Immersive fullScreen
  Immersive.setImmersive(true);

  // Declaring all the states
  const [permission, setPermission] = useState(false);
  // section I => Personal Details
  const dispatch = useDispatch();
  const firstName = useSelector(state => state.section1.firstName);
  const lastName = useSelector(state => state.section1.lastName);
  const age = useSelector(state => state.section1.age);
  const fatherName = useSelector(state => state.section1.fatherName);
  const motherName = useSelector(state => state.section1.motherName);
  const address = useSelector(state => state.section1.address);
  const contactNumber = useSelector(state => state.section1.contactNumber);
  const male = useSelector(state => state.section1.male);
  const female = useSelector(state => state.section1.female);
  const [dobDatePickerVisible, setDobDatePickerVisible] = useState(false);
  const [doeDatePickerVisible, setDoeDatePickerVisible] = useState(false);
  const userDob = useSelector(state => state.section1.userDob);
  const evaluationDate = useSelector(state => state.section1.evaluationDate);
  const chiefComplaint = useSelector(state => state.section1.chiefComplaint);
  const informant = useSelector(state => state.section1.informant);
  const assessedBy = useSelector(state => state.section1.assessedBy);
  const diagnosis = useSelector(state => state.section1.diagnosis);
  const referredBy = useSelector(state => state.section1.referredBy);
  const actions = bindActionCreators(actionCreators, dispatch);
  const handleFirstNameChange = value => {
    actions.updateFirstName(value);
  };
  const handleLastNameChange = value => {
    actions.updateLastName(value);
  };
  const handleAgeChange = value => {
    actions.updateAge(value);
  };
  const handleFatherNameChange = value => {
    actions.updateFatherName(value);
  };
  const handleMotherNameChange = value => {
    actions.updateMotherName(value);
  };
  const handleAddressChange = value => {
    actions.updateAddress(value);
  };
  const handleContactNumberChange = value => {
    actions.updateContactNumber(value);
  };
  const handleMaleChange = value => {
    actions.updateGenderMale(value);
  };
  const handleFemaleChange = value => {
    actions.updateGenderFemale(value);
  };
  const datePickerHandlerDOB = () => {
    setDobDatePickerVisible(true);
  };
  const datePickerHandlerDOE = () => {
    setDoeDatePickerVisible(true);
  };
  const dateConfirmHandlerDOB = dobDate => {
    actions.updateDob(dobDate);
    setDobDatePickerVisible(false);
  };
  const dateConfirmHandlerDOE = doeDate => {
    actions.updateEvaluationDate(doeDate);
    setDoeDatePickerVisible(false);
  };
  const handleChiefComplaint = complaint => {
    actions.updateChiefComplaint(complaint);
  };
  const handleInformant = informant => {
    actions.updateInformant(informant);
  };
  const handleAssessedBy = assessedBy => {
    actions.updateAssessedBy(assessedBy);
  };
  const handleDiagnosis = diagnosis => {
    actions.updateDiagnosis(diagnosis);
  };
  const handleReferredBy = referredBy => {
    actions.updateReferredBy(referredBy);
  };

  const resetForm = () => {
    actions.updateFirstName('');
    actions.updateLastName('');
    actions.updateAge('');
    actions.updateFatherName('');
    actions.updateMotherName('');
    actions.updateAddress('');
    actions.updateContactNumber('');
    actions.updateGenderMale('');
    actions.updateGenderFemale('');
    actions.updateChiefComplaint('');
    actions.updateInformant('');
    actions.updateAssessedBy('');
    actions.updateDiagnosis('');
    actions.updateReferredBy('');
    actions.updateConsanguinity('');
    actions.updateNonConsanguinity('');
    actions.updatePreNatalOptions('');
    actions.updateWorkLoad('');
    actions.updateStressLevel('');
    actions.updatefatherAgeConception('');
    actions.updatemotherAgeConception('');
    actions.updateChildren('');
    actions.updatePreTerm('');
    actions.updateFullTerm('');
    actions.updateCiabNo('');
    actions.updateCiabYes('');
    actions.updateNICUStayOpt1('');
    actions.updateNICUStayOpt2('');
    actions.updateNICUStayOpt3('');
    actions.updateBirthWeight('');
    actions.updateHeadCircumference('');
    actions.updateReasonForNICUStay('');
    actions.updatePresentHistory('');
    actions.updateFineMotor('');
    actions.updateHandHolding('');
    actions.updateRolling('');
    actions.updateCrawling('');
    actions.updateSitting('');
    actions.updateStanding('');
    actions.updateWalking('');
    actions.updateCommunication('');
    actions.updateSocialBehaviour('');
    actions.updateSightIntact('');
    actions.updateSightNotIntact('');
    actions.updateHearingIntact('');
    actions.updateHearingNotIntact('');
    actions.updateSpeechIntact('');
    actions.updateSpeechNotIntact('');
    actions.updateCarriedbyParent('');
    actions.updateWalkingSticks('');
    actions.updateWheelChair('');
    actions.updateWalkingWalker('');
    actions.updateWalkingIndependently('');
    actions.updateMRI('');
    actions.updateselectedImageMRI('');
    actions.updateclickedImageMRI('');
    actions.updateEEG('');
    actions.updateselectedImageEEG('');
    actions.updateclickedImageEEG('');
    actions.updateBERA('');
    actions.updateselectedImageBERA('');
    actions.updateclickedImageBERA('');
    actions.updateOpthalmalogy('');
    actions.updateselectedImageOPT('');
    actions.updateclickedImageOPT('');
    actions.updateXRays('');
    actions.updateselectedImageXRAYS('');
    actions.updateclickedImageXRAYS('');
    actions.updateDeformitiesRight('');
    actions.updateDeformitiesLeft('');
    actions.updateContractureRight('');
    actions.updateContractureLeft('');
    actions.updateTightnessRight('');
    actions.updateTightnessLeft('');
    actions.updateTendoachillesRTR1('');
    actions.updateTendoachillesRTR2('');
    actions.updateTendoachillesLTR1('');
    actions.updateTendoachillesLTR2('');
    actions.updateHamstringsRTR1('');
    actions.updateHamstringsRTR2('');
    actions.updateHamstringsLTR1('');
    actions.updateHamstringsLTR2('');
    actions.updateHipAdductorsRTR1('');
    actions.updateHipAdductorsRTR2('');
    actions.updateHipAdductorsLTR1('');
    actions.updateHipAdductorsLTR2('');
    actions.updateBackExt('');
    actions.updateBackFlex('');
    actions.updateBackLat('');
    actions.updateNeckFlex('');
    actions.updateNeckExt('');
    actions.updateNeckLat('');
    actions.updateHipFlex('');
    actions.updateHipExt('');
    actions.updateHipAbd('');
    actions.updateHipAdd('');
    actions.updateKneeFlex('');
    actions.updateHipMedRot('');
    actions.updateHipLatRot('');
    actions.updateShoulderAbd('');
    actions.updateShoulderFlex('');
    actions.updateShoulderAdd('');
    actions.updateShoulderExt('');
    actions.updateElbowFlex('');
    actions.updateForearmPronation('');
    actions.updateForearmSupination('');
    actions.updateAnkleDF('');
    actions.updateAnklePF('');
    actions.updateAnkleInversion('');
    actions.updateAnkleEversion('');
    actions.updateWristFlex('');
    actions.updateWristExt('');
    actions.updateUpperExtermities('');
    actions.updateLowerExtermities('');
    actions.updateComsModifiedAshworth('');
    actions.updateSupineToProneImmobile('');
    actions.updateSupineToProneAssistance('');
    actions.updateSupineToProneIndependent('');
    actions.updateSupineToSitImmobile('');
    actions.updateSupineToSitAssistance('');
    actions.updateSupineToSitIndependent('');
    actions.updateSittingImmobile('');
    actions.updateSittingAssistance('');
    actions.updateSittingIndependent('');
    actions.updateQuadripedImmobile('');
    actions.updateQuadripedAssistance('');
    actions.updateQuadripedIndependent('');
    actions.updateStandingImmobile('');
    actions.updateStandingAssistance('');
    actions.updateStandingIndependent('');
    actions.updateKneelingImmobile('');
    actions.updateKneelingAssistance('');
    actions.updateKneelingIndependent('');
    actions.updateHalfKneelingImmobile('');
    actions.updateHalfKneelingAssistance('');
    actions.updateHalfKneelingIndependent('');
    actions.updateAmbulationImmobile('');
    actions.updateAmbulationAssistance('');
    actions.updateAmbulationIndependent('');
    actions.updateGmfc('');
    actions.updateMiniMac('');
    actions.updateMacs('');
    actions.updateCfcs('');
    actions.updateBodyStructurePositive('');
    actions.updateBodyStructureNegative('');
    actions.updateBodyFunctionPositive('');
    actions.updateBodyFunctionNegative('');
    actions.updateActivityParticipation('');
    actions.updateActivityLimitation('');
    actions.updateEnvironmentalPersonal('');
    actions.updateEnvironmentalContextual('');
    actions.updateShortTermGoals('');
    actions.updateLongTermGoals('');
    actions.updateIntervention('');
    actions.updateEquipmentsUsed('');
    actions.updateSection17Coms('');
    actions.updateAdl('');
    actions.updateSide('');
    actions.updateGeneralPosture('');
    actions.updateCallosities('');
    actions.updateMovementStrategies('');
    actions.updateAnticipatoryBalanceComs('');
    actions.updateReactiveBalanceComs('');
    actions.updateCoordinationComs('');
    actions.updateInitiationComs('');
    actions.updateSustenanceComs('');
    actions.updateTerminationComs('');
    actions.updateControlGradComs('');
    actions.updateCoContraction('');
    actions.updateReciprocalInhibition('');
    actions.updateMassEnergy('');
    actions.updateIsolatedWork('');
    actions.updateDynamicStiffness('');
    actions.updateExtraneousMovement('');
    actions.updateSection15Coms('');
    actions.updateRegistrationComs('');
    actions.updateRegistrationOptions('');
    actions.updateGustatoryComs('');
    actions.updateSensoryProfileComs('');
    actions.updateGravitationInsecurity('');
    actions.updateAversiveResponse('');
    actions.updateTactileDefense('');
    actions.updatePosturalInsecurtiy('');
    actions.updateSensoryAvoiding('');
    actions.updateStimulation('');
    actions.updateDistractibility('');
    actions.updateHyperActivity('');
    actions.updateComs('');
    actions.updateFormSpace('');
    actions.updateVisuoMotor('');
    actions.updateTactileDiscrimination('');
    actions.updateVestibularProcessing('');
    actions.updatePraxis('');
    actions.updateComs2('');
    actions.updateFocalVision('');
    actions.updateAmbientVision('');
    actions.updateEyeMovementSystem('');
    actions.updateLocalization('');
    actions.updateTracking('');
    actions.updateGMFM('');
    actions.updatePEDI('');
    actions.updateBalanceScale('');
    actions.updateWOTA('');
    actions.updateRecommendationOptions('');
    actions.updateRecommendationOptions('');
    actions.updateAssessorsName('');
    actions.updateAssessorsDesignation('');
    actions.updateTactileUnderResponsive('');
    actions.updateTactileOverResponsive('');
    actions.updateProprioceptiveOverResponsive('');
    actions.updateProprioceptiveUnderResponsive('');
    actions.updateVestibularOverResponsive('');
    actions.updateVestibularUnderResponsive('');
    actions.updateAuditoryOverResponsive('');
    actions.updateAuditoryUnderResponsive('');
    actions.updateVisualOverResponsive('');
    actions.updateVisualUnderResponsive('');
    actions.updateGustatoryOverResponsive('');
    actions.updateGustatoryUnderResponsive('');
    actions.updateStaticBalanceGood('');
    actions.updateStaticBalanceFair('');
    actions.updateStaticBalancePoor('');
    actions.updateAnticipatoryBalanceGood('');
    actions.updateAnticipatoryBalanceFair('');
    actions.updateAnticipatoryBalancePoor('');
    actions.updateReactiveBalanceGood('');
    actions.updateReactiveBalanceFair('');
    actions.updateReactiveBalancePoor('');
    actions.updateCoordinationGood('');
    actions.updateCoordinationFair('');
    actions.updateCoordinationPoor('');
    actions.updateCanInitiate('');
    actions.updateCantInitiate('');
    actions.updateSustenanceGood('');
    actions.updateSustenanceFair('');
    actions.updateSustenancePoor('');
    actions.updateTerminationPassive('');
    actions.updateTerminationAbrupt('');
    actions.updateControlGradGood('');
    actions.updateControlGradFair('');
    actions.updateControlGradPoor('');
    actions.updateRecruitmentSo('');
    actions.updateRecruitmentFf('');
    actions.updateContractionConcentric('');
    actions.updateContractionEccentric('');
    actions.updateContractionIsometric('');
    actions.updateBroad('');
    actions.updateNarrow('');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.inputFieldContainerSAVE}>
            <TouchableOpacity style={styles.exportBtn} onPress={resetForm}>
              <Text style={styles.exportText}>Reset Form </Text>
            </TouchableOpacity>
          </View>
          {/* SECTION I => PATIENT INFORMATION */}
          <Text
            style={{
              color: '#195794',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
            }}>
            First Name
          </Text>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={firstName}
              onChangeText={handleFirstNameChange}
              keyboardType="ascii-capable"
              placeholder="First Name"
              placeholderTextColor="#FFFFFF"
              style={styles.firstName}
            />
          </View>
          <Text
            style={{
              color: '#195794',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
            }}>
            Last Name
          </Text>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={lastName}
              onChangeText={handleLastNameChange}
              keyboardType="ascii-capable"
              placeholder="Last Name"
              placeholderTextColor="#FFFFFF"
              style={styles.lastName}
            />
          </View>
          <Text
            style={{
              color: '#195794',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
            }}>
            Age
          </Text>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={age}
              onChangeText={handleAgeChange}
              keyboardType="numeric"
              placeholder="Age"
              placeholderTextColor="#FFFFFF"
              style={styles.age}
            />
          </View>
          <Text
            style={{
              color: '#195794',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
            }}>
            Father Name
          </Text>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={fatherName}
              onChangeText={handleFatherNameChange}
              keyboardType="ascii-capable"
              placeholder="Father's Name"
              placeholderTextColor="#FFFFFF"
              style={{
                marginVertical: wp('1%'),
                color: 'white',
                fontSize: wp('3.5%'),
                marginHorizontal: wp('1.5%'),
              }}
            />
          </View>
          <Text
            style={{
              color: '#195794',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
            }}>
            Mother Name
          </Text>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={motherName}
              onChangeText={handleMotherNameChange}
              keyboardType="ascii-capable"
              placeholder="Mother's Name"
              placeholderTextColor="#FFFFFF"
              style={{
                marginVertical: wp('1%'),
                color: 'white',
                fontSize: wp('3.5%'),
                marginHorizontal: wp('1.5%'),
              }}
            />
          </View>
          <Text
            style={{
              color: '#195794',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
            }}>
            Address
          </Text>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={address}
              onChangeText={handleAddressChange}
              keyboardType="ascii-capable"
              placeholder="Address"
              placeholderTextColor="#FFFFFF"
              style={{
                marginVertical: wp('1%'),
                color: 'white',
                fontSize: wp('3.5%'),
                marginHorizontal: wp('1.5%'),
              }}
            />
          </View>
          <Text
            style={{
              color: '#195794',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
            }}>
            Contact Number
          </Text>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={contactNumber}
              onChangeText={handleContactNumberChange}
              keyboardType="numeric"
              placeholder="Contact Number"
              placeholderTextColor="#FFFFFF"
              style={{
                marginVertical: wp('1%'),
                color: 'white',
                fontSize: wp('3.5%'),
                marginHorizontal: wp('1.5%'),
              }}
            />
          </View>
          <Text
            style={{
              color: '#195794',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
            }}>
            Gender
          </Text>
          <View style={styles.checkBoxContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.genderHead}>Select your Gender</Text>
              <View style={styles.checkContainer}>
                <CheckBox
                  style={styles.maleCheckBox}
                  value={male}
                  onValueChange={handleMaleChange}
                />
                <Text style={styles.maleCheckBoxText}>Male</Text>
                <CheckBox
                  style={styles.femaleCheckBox}
                  value={female}
                  onValueChange={handleFemaleChange}
                />
                <Text style={styles.femaleCheckBoxText}>Female</Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              color: '#195794',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
            }}>
            Date of Birth
          </Text>
          <View style={styles.inputFieldContainerDOB}>
            <Text style={styles.selectDOBText}>Date of Birth :</Text>
            <Text style={styles.dobText}>{userDob.toLocaleDateString()}</Text>
            <TouchableOpacity
              style={styles.buttonContainerDOB}
              onPress={datePickerHandlerDOB}>
              <Text style={styles.buttonTextDOB}>Select Date</Text>
            </TouchableOpacity>
            {dobDatePickerVisible && (
              <DateTimePicker
                value={userDob}
                mode="date"
                display="calendar"
                onChange={(event, selectedDate) =>
                  dateConfirmHandlerDOB(selectedDate || userDob)
                }
              />
            )}
          </View>
          <Text
            style={{
              color: '#195794',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
            }}>
            Date of Evaluation
          </Text>
          <View style={styles.inputFieldContainerDOE}>
            <Text style={styles.selectDOBText}>Date of Evaluation :</Text>
            <Text style={styles.doeText}>
              {evaluationDate.toLocaleDateString()}
            </Text>
            <TouchableOpacity
              style={styles.buttonContainerDOE}
              onPress={datePickerHandlerDOE}>
              <Text style={styles.buttonTextDOE}>Select Date</Text>
            </TouchableOpacity>
            {doeDatePickerVisible && (
              <DateTimePicker
                value={evaluationDate}
                mode="date"
                display="default"
                onChange={(event, selectedDateDOE) =>
                  dateConfirmHandlerDOE(selectedDateDOE || evaluationDate)
                }
              />
            )}
          </View>
          <Text
            style={{
              color: '#195794',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
            }}>
            Chief Complaint
          </Text>
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={chiefComplaint}
              multiline={true}
              numberOfLines={4}
              onChangeText={handleChiefComplaint}
              keyboardType="ascii-capable"
              placeholder="Chief Complaint"
              placeholderTextColor="#FFFFFF"
              style={styles.complaintText}
            />
          </View>
          <Text
            style={{
              color: '#195794',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
            }}>
            Referred By
          </Text>
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={referredBy}
              multiline={true}
              numberOfLines={4}
              onChangeText={handleReferredBy}
              keyboardType="ascii-capable"
              placeholder="Referred By"
              placeholderTextColor="#FFFFFF"
              style={styles.referredByText}
            />
          </View>
          <Text
            style={{
              color: '#195794',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
            }}>
            Informant
          </Text>
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={informant}
              multiline={true}
              numberOfLines={4}
              onChangeText={handleInformant}
              keyboardType="ascii-capable"
              placeholder="Informant"
              placeholderTextColor="#FFFFFF"
              style={styles.informantText}
            />
          </View>
          <Text
            style={{
              color: '#195794',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
            }}>
            Assessed by
          </Text>
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={assessedBy}
              multiline={true}
              numberOfLines={4}
              onChangeText={handleAssessedBy}
              keyboardType="ascii-capable"
              placeholder="Assessed by"
              placeholderTextColor="#FFFFFF"
              style={styles.addressedByText}
            />
          </View>
          <Text
            style={{
              color: '#195794',
              fontSize: wp('3%'),
              marginHorizontal: wp('5%'),
            }}>
            Diagnosis
          </Text>
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={diagnosis}
              multiline={true}
              numberOfLines={4}
              onChangeText={handleDiagnosis}
              keyboardType="ascii-capable"
              placeholder="Diagnosis"
              placeholderTextColor="#FFFFFF"
              style={styles.diagnosisText}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f2f2f2',
  },
  inputTextContainer: {
    width: wp('90%'),
    height: hp('6%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  firstName: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('1%'),
    marginHorizontal: wp('1.5%'),
  },
  lastName: {
    marginVertical: wp('1%'),
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
  },
  age: {
    marginVertical: wp('1%'),
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
  },
  complaintText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
  },
  checkBoxContainer: {
    width: wp('90%'),
    height: hp('7%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  genderHead: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('2.3%'),
    marginVertical: hp('2%'),
  },
  checkContainer: {
    marginHorizontal: wp('2%'),
    marginVertical: hp('1%'),
    flexDirection: 'row',
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
    marginHorizontal: wp('3%'),
  },
  femaleCheckBoxText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: hp('1%'),
    marginHorizontal: wp('3%'),
  },
  inputFieldContainerDOB: {
    width: wp('90%'),
    height: hp('6%'),
    flexDirection: 'row',
    backgroundColor: '#169cc4',
    borderRadius: 10,
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
  },
  selectDOBText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('3%'),
  },
  dobText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('7%'),
  },
  buttonContainerDOB: {
    backgroundColor: '#0a5e78',
    borderRadius: 5,
    padding: 15,
    marginVertical: wp('1%'),
    marginHorizontal: wp('7%'),
    alignSelf: 'center',
  },
  buttonTextDOB: {
    color: 'white',
    fontSize: responsiveFontSize(1),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputFieldContainerDOE: {
    width: wp('90%'),
    height: hp('6%'),
    flexDirection: 'row',
    backgroundColor: '#169cc4',
    borderRadius: 10,
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
  },
  doeText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('3%'),
  },
  buttonTextDOE: {
    color: 'white',
    fontSize: responsiveFontSize(1),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainerDOE: {
    backgroundColor: '#0a5e78',
    borderRadius: 5,
    padding: 15,
    marginVertical: wp('1%'),
    marginHorizontal: wp('7%'),
    alignSelf: 'center',
  },
  inputTextContainerMultiLine: {
    width: wp('90%'),
    height: hp('15%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  informantText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
  },
  addressedByText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
  },
  diagnosisText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
  },
  referredByText: {
    color: 'white',
    fontSize: wp('3.5%'),
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
  inputFieldContainerSHARE: {
    width: wp('80%'),
    height: hp('5%'),
    marginVertical: wp('10%'),
    marginHorizontal: wp('10%'),
    flexDirection: 'column',
    backgroundColor: '#169cc4',
    borderRadius: 10,
    marginBottom: 20,
    marginRight: 50,
    elevation: 10,
  },
  inputFieldContainerSAVE: {
    width: wp('80%'),
    height: hp('5%'),
    marginVertical: wp('5%'),
    marginHorizontal: wp('10%'),
    flexDirection: 'column',
    backgroundColor: 'red',
    borderRadius: 10,
    marginBottom: 20,
    marginRight: 50,
    elevation: 10,
  },
  exportBtn: {
    alignItems: 'center',
  },
  exportText: {
    fontSize: hp('2%'),
    color: 'white',
    marginVertical: wp('1.7%'),
    marginHorizontal: wp('1.3%'),
  },
});

export default Section1;
