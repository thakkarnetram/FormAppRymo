/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FileSystem from 'react-native-fs';
import Share from 'react-native-share';
import RNFS from 'react-native-fs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';

const Phase_1_Assesment_Form = () => {
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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');
  const [dobDatePickerVisible, setDobDatePickerVisible] = useState(false);
  const [doeDatePickerVisible, setDoeDatePickerVisible] = useState(false);
  const [userDob, setUserDob] = useState(new Date());
  const [evaluationDate, setEvaluationDate] = useState(new Date());
  const [informant, setInformant] = useState('');
  const [AssesmentBy, setAssesmentBy] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [referredBy, setReferredBy] = useState('');
  const [gmfcOptions, setGmfcOptions] = useState();
  const [macsOptions, setMacsOptions] = useState();
  const [miniMacOptions, setMiniMacOptions] = useState();
  const [cfcsOptions, setCfcsOptions] = useState();

  const firstNameHandler = text => {
    setFirstName(text);
  };
  const lastNameHandler = text => {
    setLastName(text);
  };
  const userAgeHandler = text => {
    setUserAge(text);
  };
  const maleCheckBoxHandler = male => {
    setMale(male);
    setFemale(false);
    setSelectedGender('Male');
  };
  const femaleCheckBoxHandler = female => {
    setFemale(female);
    setMale(false);
    setSelectedGender('Female');
  };
  const datePickerHandlerDOB = () => {
    setDobDatePickerVisible(true);
  };
  const datePickerHandlerDOE = () => {
    setDoeDatePickerVisible(true);
  };
  const dateConfirmHandlerDOB = dobDate => {
    setUserDob(dobDate);
    setDobDatePickerVisible(false);
  };
  const dateConfirmHandlerDOE = doeDate => {
    setEvaluationDate(doeDate);
    setDoeDatePickerVisible(false);
  };
  const informantHandler = text => {
    setInformant(text);
  };
  const AssesmentByHandler = text => {
    setAssesmentBy(text);
  };
  const diagnosisHandler = text => {
    setDiagnosis(text);
  };
  const referredByHandler = text => {
    setReferredBy(text);
  };

  const gmfcOptionHandler = gmfcOption => {
    setGmfcOptions(gmfcOption);
  };

  const macsOptionHandler = macsOption => {
    setMacsOptions(macsOption);
  };

  const miniMacOptionHandler = miniMacOption => {
    setMiniMacOptions(miniMacOption);
  };

  const cfcsOptionHandler = cfcsOption => {
    setCfcsOptions(cfcsOption);
  };

  // section II => History

  const [preNatalOptions, setPreNatalOptions] = useState({
    HyperTension: false,
    Diabetes: false,
    Convulsion: false,
    Any_Medication: false,
    Hyperthyroidism: false,
    Infections: false,
  });
  const [fullTerm, setFullTerm] = useState(false);
  const [preTerm, setPreTerm] = useState(false);
  const [selectedNatalOptions, setSelectedNatalOptions] = useState('');

  const preNatalOptionsHandler = preNatalOption => {
    setPreNatalOptions({
      ...preNatalOptions,
      [preNatalOption]: !preNatalOptions[preNatalOption],
    });
  };

  const preNatalOptionValues = [];
  Object.entries(preNatalOptions).forEach(([key, value]) => {
    if (value) {
      preNatalOptionValues.push(key);
    }
  });

  const fullTermHandler = fullTerm => {
    setFullTerm(fullTerm);
    setPreTerm(false);
    setSelectedNatalOptions('Full Term');
  };

  const preTermHandler = preTerm => {
    setPreTerm(preTerm);
    setFullTerm(false);
    setSelectedNatalOptions('Pre Term');
  };

  // section III => Post Natal

  const [ciabYes, setCiabYes] = useState(false);
  const [ciabNo, setCiabNo] = useState(false);
  const [ciabOptions, setCiabOptions] = useState('');
  const [userBirthWeight, setUserBirthWeight] = useState('');
  const [userHeadCircumference, setUserHeadCircumference] = useState('');
  const [day1To7days, setDay1To7days] = useState(false);
  const [week1To4weeks, setWeek1To4weeks] = useState(false);
  const [week4To4months, setWeek4To4months] = useState(false);
  const [presentHistory, setPresentHistory] = useState('');
  const [chiefComplaint, setChiefComplaint] = useState('');

  const ciabYesHandler = ciabYes => {
    setCiabYes(ciabYes);
    setCiabNo(false);
    setCiabOptions('Yes');
  };
  const ciabNoHandler = ciabNo => {
    setCiabNo(ciabNo);
    setCiabYes(false);
    setCiabOptions('No');
  };

  const userBirthWeightHandler = userBirthWeight => {
    setUserBirthWeight(userBirthWeight);
  };

  const userHeadCircumferenceHandler = userHeadCircumference => {
    setUserHeadCircumference(userHeadCircumference);
  };

  const day1To7daysHandler = day1To7days => {
    setDay1To7days(day1To7days);
    setWeek1To4weeks(false);
    setWeek4To4months(false);
  };

  const week1To4weeksHandler = week1To4weeks => {
    setWeek1To4weeks(week1To4weeks);
    setDay1To7days(false);
    setWeek4To4months(false);
  };

  const week4To4monthsHandler = week4To4months => {
    setWeek4To4months(week4To4months);
    setDay1To7days(false);
    setWeek1To4weeks(false);
  };

  const presentHistoryHandler = presentHistory => {
    setPresentHistory(presentHistory);
  };

  const chiefComplaintHandler = chiefComplaint => {
    setChiefComplaint(chiefComplaint);
  };

  // section IV => Developmental Milestones(months)

  const [handHolding, setHandHolding] = useState('');
  const [rolling, setRolling] = useState('');
  const [crawling, setCrawling] = useState('');
  const [sitting, setSitting] = useState('');
  const [standing, setStanding] = useState('');
  const [walking, setWalking] = useState('');

  const handHoldingHandler = handHolding => {
    setHandHolding(handHolding);
  };
  const rollingHandler = rolling => {
    setRolling(rolling);
  };
  const crawlingHandler = crawling => {
    setCrawling(crawling);
  };
  const sittingHandler = sitting => {
    setSitting(sitting);
  };
  const standingHandler = standing => {
    setStanding(standing);
  };
  const walkingHandler = walking => {
    setWalking(walking);
  };

  // Section V => Subjective Assesment
  const [sightIntact, setSightIntact] = useState(false);
  const [sightNotIntact, setSightNotIntact] = useState(false);
  const [hearingIntact, setHearingIntact] = useState(false);
  const [hearingNotIntact, setHearingNotIntact] = useState(false);
  const [speechIntact, setSpeechIntact] = useState(false);
  const [speechNotIntact, setSpeechNotIntact] = useState(false);
  const [carried, setCarried] = useState(false);
  const [walkingSticks, setWalkingSticks] = useState(false);
  const [wheelChair, setWheelChair] = useState(false);
  const [walkingWalker, setWalkingWalker] = useState(false);
  const [walkingIndependently, setWalkingIndependently] = useState(false);

  const sightIntactHandler = sightIntact => {
    setSightIntact(sightIntact);
    setSightNotIntact(false);
  };

  const sightNotIntactHandler = sightNotIntact => {
    setSightNotIntact(sightNotIntact);
    setSightIntact(false);
  };

  const hearingIntactHandler = hearingIntact => {
    setHearingIntact(hearingIntact);
    setHearingNotIntact(false);
  };

  const hearingNotIntactHandler = hearingNotIntact => {
    setHearingNotIntact(hearingNotIntact);
    setHearingIntact(false);
  };

  const speechIntactHandler = speechIntact => {
    setSpeechIntact(speechIntact);
    setSpeechNotIntact(false);
  };

  const speechNotIntactHandler = speechNotIntact => {
    setSpeechNotIntact(speechNotIntact);
    setSpeechIntact(false);
  };

  const carriedHandler = carried => {
    setCarried(carried);
    setWalkingSticks(false);
    setWheelChair(false);
    setWalkingWalker(false);
    setWalkingIndependently(false);
  };

  const walkingSticksHandler = walkingSticks => {
    setWalkingSticks(walkingSticks);
    setCarried(false);
    setWheelChair(false);
    setWalkingWalker(false);
    setWalkingIndependently(false);
  };

  const wheelChairHandler = wheelChair => {
    setWheelChair(wheelChair);
    setCarried(false);
    setWalkingSticks(false);
    setWalkingWalker(false);
    setWalkingIndependently(false);
  };

  const walkingWalkerHandler = walkingWalker => {
    setWalkingWalker(walkingWalker);
    setCarried(false);
    setWalkingSticks(false);
    setWheelChair(false);
    setWalkingIndependently(false);
  };

  const walkingIndependentlyHandler = walkingIndependently => {
    setWalkingIndependently(walkingIndependently);
    setCarried(false);
    setWalkingSticks(false);
    setWheelChair(false);
    setWalkingWalker(false);
  };

  // Section VI => General Observation

  const [mri, setMri] = useState('');
  const [eeg, setEeg] = useState('');
  const [bera, setBera] = useState('');
  const [opthalmalogy, setOpthalmalogy] = useState('');
  const [xRays, setXRays] = useState('');

  const setMriHandler = mri => {
    setMri(mri);
  };
  const setEegHandler = eeg => {
    setEeg(eeg);
  };
  const setBeraHandler = bera => {
    setBera(bera);
  };
  const setOpthalmalogyHandler = opthalmalogy => {
    setOpthalmalogy(opthalmalogy);
  };
  const setXRaysHandler = xRays => {
    setXRays(xRays);
  };

  // Section VII => Objective Assesment
  const [hypotonia, sethypotonia] = useState(false);
  const [hypertonia, sethypertonia] = useState(false);
  const [deformities, setDeformities] = useState('');
  const [contracture, setContracture] = useState('');
  const [tightness, setTightness] = useState('');

  const hypotoniaHandler = hypotonia => {
    sethypotonia(hypotonia);
    sethypertonia(false);
  };

  const hypertoniaHandler = hypertonia => {
    sethypertonia(hypertonia);
    sethypotonia(false);
  };

  const deformitiesHandler = deformities => {
    setDeformities(deformities);
  };

  const contractureHandler = contracture => {
    setContracture(contracture);
  };

  const tightnessHandler = tightness => {
    setTightness(tightness);
  };

  // Section VIII  => Tardieu’s
  const [hamstringsRTR1, setHamstringsRTR1] = useState('');
  const [hamstringsRTR2, setHamstringsRTR2] = useState('');
  const [hamstringsLTR1, setHamstringsLTR1] = useState('');
  const [hamstringsLTR2, setHamstringsLTR2] = useState('');

  const [tasRTR1, setTasRTR1] = useState('');
  const [tasRTR2, setTasRTR2] = useState('');
  const [tasLTR1, setTasLTR1] = useState('');
  const [tasLTR2, setTasLTR2] = useState('');

  const [hipAdductionRTR1, setHipAdductionRTR1] = useState('');
  const [hipAdductionRTR2, setHipAdductionRTR2] = useState('');
  const [hipAdductionLTR1, setHipAdductionLTR1] = useState('');
  const [hipAdductionLTR2, setHipAdductionLTR2] = useState('');

  const handleHamstringsRTR1Change = text => {
    setHamstringsRTR1(text);
  };

  const handleHamstringsRTR2Change = text => {
    setHamstringsRTR2(text);
  };

  const handleHamstringsLTR1Change = text => {
    setHamstringsLTR1(text);
  };

  const handleHamstringsLTR2Change = text => {
    setHamstringsLTR2(text);
  };

  const handleTasRTR1Change = text => {
    setTasRTR1(text);
  };

  const handleTasRTR2Change = text => {
    setTasRTR2(text);
  };

  const handleTasLTR1Change = text => {
    setTasLTR1(text);
  };

  const handleTasLTR2Change = text => {
    setTasLTR2(text);
  };

  const handleHipAdductionRTR1Change = text => {
    setHipAdductionRTR1(text);
  };

  const handleHipAdductionRTR2Change = text => {
    setHipAdductionRTR2(text);
  };

  const handleHipAdductionLTR1Change = text => {
    setHipAdductionLTR1(text);
  };

  const handleHipAdductionLTR2Change = text => {
    setHipAdductionLTR2(text);
  };

  // Section => ROM
  const [backExt, setBackExt] = useState('');
  const [backFlex, setBackFlex] = useState('');
  const [backLat, setBackLat] = useState('');
  const [neckFlex, setNeckFlex] = useState('');
  const [neckExt, setNeckExt] = useState('');
  const [neckLat, setNeckLat] = useState('');
  const [hipFlex, setHipFlex] = useState('');
  const [hipExt, setHipExt] = useState('');
  const [hipAdd, setHipAdd] = useState('');
  const [hipAbd, setHipAbd] = useState('');
  const [kneeFlex, setKneeFlex] = useState('');
  const [hipMedRot, setHipMedRot] = useState('');
  const [hipLat, setHipLat] = useState('');
  const [shoulderAbd, setShoulderAbd] = useState('');
  const [shoulderAdd, setShoulderAdd] = useState('');
  const [shoulderFlex, setShoulderFlex] = useState('');
  const [shoulderExt, setShoulderExt] = useState('');
  const [elbowFlex, setElbowFlex] = useState('');
  const [forearmSup, setForearmSup] = useState('');
  const [forearmPro, setForearmPro] = useState('');
  const [ankleDF, setAnkleDF] = useState('');
  const [anklePF, setAnklePF] = useState('');
  const [ankleInversion, setAnkleInversion] = useState('');
  const [ankleEversion, setAnkleEversion] = useState('');
  const [wristFlex, setWristFlex] = useState('');
  const [wristExt, setWristExt] = useState('');

  const hipLatHandler = hipLat => {
    setHipLat(hipLat);
  };

  const shoulderAbdHandler = shoulderAbd => {
    setShoulderAbd(shoulderAbd);
  };

  const shoulderAddHandler = shoulderAdd => {
    setShoulderAdd(shoulderAdd);
  };

  const shoulderFlexHandler = shoulderFlex => {
    setShoulderFlex(shoulderFlex);
  };

  const shoulderExtHandler = shoulderExt => {
    setShoulderExt(shoulderExt);
  };

  const elbowFlexHandler = elbowFlex => {
    setElbowFlex(elbowFlex);
  };

  const forearmSupHandler = forearmSup => {
    setForearmSup(forearmSup);
  };

  const forearmProHandler = forearmPro => {
    setForearmPro(forearmPro);
  };

  const ankleDFHandler = ankleDF => {
    setAnkleDF(ankleDF);
  };

  const anklePFHandler = anklePF => {
    setAnklePF(anklePF);
  };

  const ankleInversionHandler = ankleInversion => {
    setAnkleInversion(ankleInversion);
  };

  const ankleEversionHandler = ankleEversion => {
    setAnkleEversion(ankleEversion);
  };

  const wristFlexHandler = wristFlex => {
    setWristFlex(wristFlex);
  };

  const wristExtHandler = wristExt => {
    setWristExt(wristExt);
  };
  const backExtHandler = backExt => {
    setBackExt(backExt);
  };

  const backFlexHandler = backFlex => {
    setBackFlex(backFlex);
  };

  const backLatHandler = backLat => {
    setBackLat(backLat);
  };

  const neckFlexHandler = neckFlex => {
    setNeckFlex(neckFlex);
  };

  const neckExtHandler = neckExt => {
    setNeckExt(neckExt);
  };

  const neckLatHandler = neckLat => {
    setNeckLat(neckLat);
  };

  const hipFlexHandler = hipFlex => {
    setHipFlex(hipFlex);
  };

  const hipExtHandler = hipExt => {
    setHipExt(hipExt);
  };

  const hipAddHandler = hipAdd => {
    setHipAdd(hipAdd);
  };

  const hipAbdHandler = hipAbd => {
    setHipAbd(hipAbd);
  };

  const kneeFlexHandler = kneeFlex => {
    setKneeFlex(kneeFlex);
  };

  const hipMedRotHandler = hipMedRot => {
    setHipMedRot(hipMedRot);
  };

  // Section => Modified Ashworth
  const [upperExtremities, setUpperExtremities] = useState();
  const [lowerExtremities, setLowerExtremities] = useState();
  const upperExtremitiesHandler = upperExtremities => {
    setUpperExtremities(upperExtremities);
  };
  const lowerExtremitiesHandler = lowerExtremities => {
    setLowerExtremities(lowerExtremities);
  };
  const [asworthsComs, setAsworthsComs] = useState('');
  const asworthsComsHandler = asworthsComs => {
    setAsworthsComs(asworthsComs);
  }
  // Section => Functional Evaluation
  const [supineToProneImmobile, setSupineToProneImmobile] = useState(false);
  const [supineToProneAssistance, setSupineToProneAssistance] = useState(false);
  const [supineToProneIndependent, setSupineToProneIndependent] =
    useState(false);

  const [supineToSitImmobile, setSupineToSitImmobile] = useState(false);
  const [supineToSitAssistance, setSupineToSitAssistance] = useState(false);
  const [supineToSitIndependent, setSupineToSitIndependent] = useState(false);

  const [sittingImmobile, setSittingImmobile] = useState(false);
  const [sittingAssistance, setSittingAssistance] = useState(false);
  const [sittingIndependent, setSittingIndependent] = useState(false);

  var [quadsImmobile, setQuadsImmobile] = useState(false);
  var [quadsAssistance, setQuadsAssistance] = useState(false);
  var [quadsIndependent, setQuadsIndependent] = useState(false);

  const [kneelingImmobile, setKneelingImmobile] = useState(false);
  const [kneelingAssistance, setKneelingAssistance] = useState(false);
  const [kneelingIndependent, setKneelingIndependent] = useState(false);

  const [halfKneelingImmobile, setHalfKneelingImmobile] = useState(false);
  const [halfKneelingAssistance, setHalfKneelingAssistance] = useState(false);
  const [halfKneelingIndependent, setHalfKneelingIndependent] = useState(false);

  const [standingImmobile, setStandingImmobile] = useState(false);
  const [standingAssistance, setStandingAssistance] = useState(false);
  const [standingIndependent, setStandingIndependent] = useState(false);

  const [ambulationImmobile, setAmbulationImmobile] = useState(false);
  const [ambulationAssistance, setAmbulationAssistance] = useState(false);
  const [ambulationIndependent, setAmbulationIndependent] = useState(false);

  const supineToProneImmobileHandler = () => {
    setSupineToProneImmobile(true);
    setSupineToProneAssistance(false);
    setSupineToProneIndependent(false);
  };

  const supineToProneAssistanceHandler = () => {
    setSupineToProneImmobile(false);
    setSupineToProneAssistance(true);
    setSupineToProneIndependent(false);
  };

  const supineToProneIndependentHandler = () => {
    setSupineToProneImmobile(false);
    setSupineToProneAssistance(false);
    setSupineToProneIndependent(true);
  };

  const supineToSitImmobileHandler = () => {
    setSupineToSitImmobile(true);
    setSupineToSitAssistance(false);
    setSupineToSitIndependent(false);
  };

  const supineToSitAssistanceHandler = () => {
    setSupineToSitImmobile(false);
    setSupineToSitAssistance(true);
    setSupineToSitIndependent(false);
  };

  const supineToSitIndependentHandler = () => {
    setSupineToSitImmobile(false);
    setSupineToSitAssistance(false);
    setSupineToSitIndependent(true);
  };

  const sittingImmobileHandler = () => {
    setSittingImmobile(true);
    setSittingAssistance(false);
    setSittingIndependent(false);
  };

  const sittingAssistanceHandler = () => {
    setSittingImmobile(false);
    setSittingAssistance(true);
    setSittingIndependent(false);
  };

  const sittingIndependentHandler = () => {
    setSittingImmobile(false);
    setSittingAssistance(false);
    setSittingIndependent(true);
  };

  const quadsImmobileHandler = () => {
    setQuadsImmobile(true);
    setQuadsAssistance(false);
    setQuadsIndependent(false);
  };

  const quadsAssistanceHandler = () => {
    setQuadsImmobile(false);
    setQuadsAssistance(true);
    setQuadsIndependent(false);
  };

  const quadsIndependentHandler = () => {
    setQuadsImmobile(false);
    setQuadsAssistance(false);
    setQuadsIndependent(true);
  };

  const kneelingImmobileHandler = () => {
    setKneelingImmobile(true);
    setKneelingAssistance(false);
    setKneelingIndependent(false);
  };

  const kneelingAssistanceHandler = () => {
    setKneelingImmobile(false);
    setKneelingAssistance(true);
    setKneelingIndependent(false);
  };

  const kneelingIndependentHandler = () => {
    setKneelingImmobile(false);
    setKneelingAssistance(false);
    setKneelingIndependent(true);
  };

  const halfKneelingImmobileHandler = () => {
    setHalfKneelingImmobile(true);
    setHalfKneelingAssistance(false);
    setHalfKneelingIndependent(false);
  };

  const halfKneelingAssistanceHandler = () => {
    setHalfKneelingImmobile(false);
    setHalfKneelingAssistance(true);
    setHalfKneelingIndependent(false);
  };

  const halfKneelingIndependentHandler = () => {
    setHalfKneelingImmobile(false);
    setHalfKneelingAssistance(false);
    setHalfKneelingIndependent(true);
  };

  const standingImmobileHandler = () => {
    setStandingImmobile(true);
    setStandingAssistance(false);
    setStandingIndependent(false);
  };

  const standingAssistanceHandler = () => {
    setStandingImmobile(false);
    setStandingAssistance(true);
    setStandingIndependent(false);
  };

  const standingIndependentHandler = () => {
    setStandingImmobile(false);
    setStandingAssistance(false);
    setStandingIndependent(true);
  };

  const ambulationImmobileHandler = () => {
    setAmbulationImmobile(true);
    setAmbulationAssistance(false);
    setAmbulationIndependent(false);
  };

  const ambulationAssistanceHandler = () => {
    setAmbulationImmobile(false);
    setAmbulationAssistance(true);
    setAmbulationIndependent(false);
  };

  const ambulationIndependentHandler = () => {
    setAmbulationImmobile(false);
    setAmbulationAssistance(false);
    setAmbulationIndependent(true);
  };

  // Functional Textbox sections
  const [functionAbilities, setFunctionAbilities] = useState('');
  const [functionLimitations, setFunctionLimitations] = useState('');

  const functionalAbilitiesHandler = functionAbilitie => {
    setFunctionAbilities(functionAbilitie);
  };

  const functionalLimitationsHandler = functionLimitation => {
    setFunctionLimitations(functionLimitation);
  };

  // Single System Assesment
  const [canInitiate, setCanInitiate] = useState(false);
  const [cantInitiate, setCantInitiate] = useState(false);
  const [initiateComs, setInitiateComs] = useState('');

  const [sustenancePoor, setSustenancePoor] = useState(false);
  const [sustenanceFair, setSustenanceFair] = useState(false);
  const [sustenanceGood, setSustenanceGood] = useState(false);
  const [sustenanceComs, setSusatenanceComs] = useState('');

  const [terminationPassive, setTerminationPassive] = useState(false);
  const [terminationAbrupt, setTerminationAbrupt] = useState(false);
  const [terminationComs, setTerminationComs] = useState('');

  const [controlGradPoor, setControlGradPoor] = useState(false);
  const [controlGradFair, setControlGradFair] = useState(false);
  const [controlGradGood, setControlGradGood] = useState(false);
  const [controlGradComs, setControlGradComs] = useState('');

  const [recruitmentPostural, setRecruitmentPostural] = useState(false);
  const [recruitmentMovement, setRecruitmentMovement] = useState(false);
  const [recruitmentComs, setRecruitmentComs] = useState('');

  const [contractionConcentric, setContractionConcentric] = useState(false);
  const [contractionIsometric, setContractionIsometric] = useState(false);
  const [contractionEccentric, setContractionEccentric] = useState(false);
  const [contractionComs, setContractionComs] = useState('');

  const [contraction, setContraction] = useState();
  const [reciprocalInhibition, setReciprocalInhibition] = useState();
  const [
    comsContraction_ReciprocalInhibition,
    setComsContraction_ReciprocalInhibition,
  ] = useState('');

  const [massEnergy, setMassEnergy] = useState();
  const [isolatedWork, setIsolatedWork] = useState();

  const [dynamicStiffness, setDynamicStiffness] = useState();

  const [extraneousMovement, setExtraneousMovement] = useState();

  const [singleAssesment, setSingleAssesment] = useState('');

  const canInitiateHandler = () => {
    setCanInitiate(true);
    setCantInitiate(false);
  };

  const cantInitiateHandler = () => {
    setCanInitiate(false);
    setCantInitiate(true);
  };

  const initiateComsHandler = initiateCom => {
    setInitiateComs(initiateCom);
  };

  const sustenancePoorHandler = () => {
    setSustenancePoor(true);
    setSustenanceFair(false);
    setSustenanceGood(false);
  };

  const sustenanceFairHandler = () => {
    setSustenancePoor(false);
    setSustenanceFair(true);
    setSustenanceGood(false);
  };

  const sustenanceGoodHandler = () => {
    setSustenancePoor(false);
    setSustenanceFair(false);
    setSustenanceGood(true);
  };

  const sustenanceComsHandler = sustenanceCom => {
    setSusatenanceComs(sustenanceCom);
  };

  const terminationPassiveHandler = () => {
    setTerminationPassive(true);
    setTerminationAbrupt(false);
  };

  const terminationAbruptHandler = () => {
    setTerminationPassive(false);
    setTerminationAbrupt(true);
  };

  const terminationComsHandler = terminationCom => {
    setTerminationComs(terminationCom);
  };

  const controlGradPoorHandler = () => {
    setControlGradPoor(true);
    setControlGradFair(false);
    setControlGradGood(false);
  };

  const controlGradFairHandler = () => {
    setControlGradPoor(false);
    setControlGradFair(true);
    setControlGradGood(false);
  };

  const controlGradGoodHandler = () => {
    setControlGradPoor(false);
    setControlGradFair(false);
    setControlGradGood(true);
  };

  const controlGradComsHandler = controlGradCom => {
    setControlGradComs(controlGradCom);
  };

  const recruitmentPosturalHandler = () => {
    setRecruitmentPostural(true);
    setRecruitmentMovement(false);
  };

  const recruitmentMovementHandler = () => {
    setRecruitmentPostural(false);
    setRecruitmentMovement(true);
  };

  const recruitmentComsHandler = recruitmentCom => {
    setRecruitmentComs(recruitmentCom);
  };

  const contractionConcentricHandler = () => {
    setContractionConcentric(true);
    setContractionIsometric(false);
    setContractionEccentric(false);
  };

  const contractionIsometricHandler = () => {
    setContractionConcentric(false);
    setContractionIsometric(true);
    setContractionEccentric(false);
  };

  const contractionEccentricHandler = () => {
    setContractionConcentric(false);
    setContractionIsometric(false);
    setContractionEccentric(true);
  };

  const contractionComsHandler = contractionCom => {
    setContractionComs(contractionCom);
  };

  const contractionHandler = contract => {
    setContraction(contract);
  };

  const reciprocalInhibitionHandler = reciprocal => {
    setReciprocalInhibition(reciprocal);
  };

  const massEnergyHandler = mass => {
    setMassEnergy(mass);
  };

  const isolatedWorkHandler = isolated => {
    setMassEnergy(isolated);
  };

  const dynamicStiffnessHandler = Dyanmic => {
    setDynamicStiffness(Dyanmic);
  };

  const extraneousMovementHandler = extraneous => {
    setExtraneousMovement(extraneous);
  };

  const singleAssesmentHandler = single => {
    setSingleAssesment(single);
  };

  // Multi System Assesment => Posture and Movement
  // a posture
  const [postureAnswer, setPostureAnswer] = useState('');

  // b alignment
  const [asymmetry, setAsymmetry] = useState(false);
  const [side, setSide] = useState();

  // base of support
  const [broad, setBroad] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const [generalPosture, setGeneralPosture] = useState('');
  const [callosities, setCallosities] = useState('');

  const postureAnswerHandler = postureAnswer => {
    setPostureAnswer(postureAnswer);
  };

  const asymmetryHandler = () => {
    setAsymmetry(true);
    setSide(false);
  };

  const sideHandler = sideRTLT => {
    setSide(sideRTLT);
  };

  const broadHandler = () => {
    setBroad(true);
    setNarrow(false);
  };

  const narrowHandler = () => {
    setBroad(false);
    setNarrow(true);
  };

  const generalPostureHandler = generalPosture => {
    setGeneralPosture(generalPosture);
  };

  const callositiesHandler = callosities => {
    setCallosities(callosities);
  };

  // Movement Systems
  const [momentum, setMomentum] = useState(false);
  const [overuseOfMs, setOveruseOfMs] = useState(false);
  const [increasingBos, setIncreasingBos] = useState(false);

  const [staticBalanceGood, setStaticBalanceGood] = useState(false);
  const [staticBalanceFair, setStaticBalanceFair] = useState(false);
  const [staticBalancePoor, setStaticBalancePoor] = useState(false);

  const [anticipatoryBalanceGood, setAnticipatoryBalanceGood] = useState(false);
  const [anticipatoryBalanceFair, setAnticipatoryBalanceFair] = useState(false);
  const [anticipatoryBalancePoor, setAnticipatoryBalancePoor] = useState(false);
  const [anticipatoryBalanceComs, setAnticipatoryBalanceComs] = useState('');

  const [reactiveBalanceGood, setReactiveBalanceGood] = useState(false);
  const [reactiveBalanceFair, setReactiveBalanceFair] = useState(false);
  const [reactiveBalancePoor, setReactiveBalancePoor] = useState(false);
  const [reactiveBalanceComs, setReactiveBalanceComs] = useState('');

  const [coordinationGood, setCoordinationGood] = useState(false);
  const [coordinationFair, setCoordinationFair] = useState(false);
  const [coordinationPoor, setCoordinationPoor] = useState(false);
  const [coordinationComs, setCoordinationComs] = useState('');

  const momentumHandler = () => {
    setMomentum(true);
    setOveruseOfMs(false);
    setIncreasingBos(false);
  };

  const overuseOfMsHandler = () => {
    setMomentum(false);
    setOveruseOfMs(true);
    setIncreasingBos(false);
  };

  const increasingBosHandler = () => {
    setMomentum(false);
    setOveruseOfMs(false);
    setIncreasingBos(true);
  };

  const staticBalanceGoodHandler = () => {
    setStaticBalanceGood(true);
    setStaticBalanceFair(false);
    setStaticBalancePoor(false);
  };

  const staticBalanceFairHandler = () => {
    setStaticBalanceGood(false);
    setStaticBalanceFair(true);
    setStaticBalancePoor(false);
  };

  const staticBalancePoorHandler = () => {
    setStaticBalanceGood(false);
    setStaticBalanceFair(false);
    setStaticBalancePoor(true);
  };

  const anticipatoryBalanceGoodHandler = () => {
    setAnticipatoryBalanceGood(true);
    setAnticipatoryBalanceFair(false);
    setAnticipatoryBalancePoor(false);
  };

  const anticipatoryBalanceFairHandler = () => {
    setAnticipatoryBalanceGood(false);
    setAnticipatoryBalanceFair(true);
    setAnticipatoryBalancePoor(false);
  };

  const anticipatoryBalancePoorHandler = () => {
    setAnticipatoryBalanceGood(false);
    setAnticipatoryBalanceFair(false);
    setAnticipatoryBalancePoor(true);
  };

  const anticipatoryBalanceComsHandler = anticipatoryBalanceComs => {
    setAnticipatoryBalanceComs(anticipatoryBalanceComs);
  };

  const reactiveBalanceGoodHandler = () => {
    setReactiveBalanceGood(true);
    setReactiveBalanceFair(false);
    setReactiveBalancePoor(false);
  };

  const reactiveBalanceFairHandler = () => {
    setReactiveBalanceGood(false);
    setReactiveBalanceFair(true);
    setReactiveBalancePoor(false);
  };

  const reactiveBalancePoorHandler = () => {
    setReactiveBalanceGood(false);
    setReactiveBalanceFair(false);
    setReactiveBalancePoor(true);
  };

  const reactiveBalanceComsHandler = reactiveBalanceComs => {
    setReactiveBalanceComs(reactiveBalanceComs);
  };

  const coordinationGoodHandler = () => {
    setCoordinationGood(true);
    setCoordinationFair(false);
    setCoordinationPoor(false);
  };

  const coordinationFairHandler = () => {
    setCoordinationGood(false);
    setCoordinationFair(true);
    setCoordinationPoor(false);
  };

  const coordinationPoorHandler = () => {
    setCoordinationGood(false);
    setCoordinationFair(false);
    setCoordinationPoor(true);
  };

  const coordinationComsHandler = coordinationComs => {
    setCoordinationComs(coordinationComs);
  };

  // Sensory Systems
  const [registrationOptions, setRegistrationOptions] = useState({
    Arousal: false,
    Attention: false,
    Affect: false,
    Alertness: false,
  });

  const [registrationComs, setRegistrationComs] = useState('');

  const [sensoryProfile, setSensoryProfile] = useState('');

  const [tactileUnder, setTactileOver] = useState(false);
  const [tactileOver, setTactileUnder] = useState(false);

  const [proprioceptiveUnder, setProprioceptiveUnder] = useState(false);
  const [proprioceptiveOver, setProprioceptiveOver] = useState(false);

  const [vestibularUnder, setVestibularUnder] = useState(false);
  const [vestibularOver, setVestibularOver] = useState(false);

  const [auditoryUnder, setAuditoryUnder] = useState(false);
  const [auditoryOver, setAuditoryOver] = useState(false);

  const [visualUnder, setVisualUnder] = useState(false);
  const [visualOver, setVisualOver] = useState(false);

  const [gustatoryUnder, setGustatoryUnder] = useState(false);
  const [gustatoryOver, setGustatoryOver] = useState(false);

  const [sensorySystemsComs, setSensorySystemsComs] = useState('');

  const sensorySystemComsHandler = sensorySystemsComs => {
    setSensorySystemsComs(sensorySystemsComs);
  };

  const registrationComshandler = registrationComs => {
    setRegistrationComs(registrationComs);
  };

  const tactileUnderHandler = () => {
    setTactileOver(false);
    setTactileUnder(true);
  };

  const tactileOverHandler = () => {
    setTactileOver(true);
    setTactileUnder(false);
  };

  const proprioceptiveUnderHandler = () => {
    setProprioceptiveOver(false);
    setProprioceptiveUnder(true);
  };

  const proprioceptiveOverHandler = () => {
    setProprioceptiveOver(true);
    setProprioceptiveUnder(false);
  };

  const vestibularUnderHandler = () => {
    setVestibularOver(false);
    setVestibularUnder(true);
  };

  const vestibularOverHandler = () => {
    setVestibularOver(true);
    setVestibularUnder(false);
  };

  const auditoryUnderHandler = () => {
    setAuditoryOver(false);
    setAuditoryUnder(true);
  };

  const auditoryOverHandler = () => {
    setAuditoryOver(true);
    setAuditoryUnder(false);
  };

  const visualUnderHandler = () => {
    setVisualOver(false);
    setVisualUnder(true);
  };

  const visualOverHandler = () => {
    setVisualOver(true);
    setVisualUnder(false);
  };

  const gustatoryOverHandler = () => {
    setGustatoryOver(true);
    setGustatoryUnder(false);
  };

  const gustatoryUnderHandler = () => {
    setGustatoryOver(false);
    setGustatoryUnder(true);
  };

  const registrationOptionsHandler = registrationOption => {
    setRegistrationOptions({
      ...registrationOptions,
      [registrationOption]: !registrationOptions[registrationOption],
    });
  };
  const registrationOptionsValues = [];
  Object.entries(registrationOptions).forEach(([key, value]) => {
    if (value) {
      registrationOptionsValues.push(key);
    }
  });

  const sensoryProfileHandler = sensoryProfile => {
    setSensoryProfile(sensoryProfile);
  };

  // Sensory Modulation
  const [gravitationalInsecurity, setGravitationalInsecurity] = useState();
  const [aversiveResponse, setAversiveResponse] = useState();
  const [posturalInsecurity, setPosturalInsecurity] = useState();
  const [tactileDefensiveness, setTactileDefensiveness] = useState();
  const [poorRTS, setPoorRTS] = useState();
  const [sensoryAvoiding, setSensoryAvoiding] = useState();
  const [distractibility, setDistractibility] = useState();
  const [hyperactivity, setHyperactivity] = useState();
  const [sensoryComs, setSensoryComs] = useState('');

  const sensoryComsHandler = sensoryComs => {
    setSensoryComs(sensoryComs);
  };

  const gravitationalInsecurityHandler = gravitationalInsecure => {
    setGravitationalInsecurity(gravitationalInsecure);
  };

  const aversiveResponseHandler = aversiveResponds => {
    setAversiveResponse(aversiveResponds);
  };

  const posturalInsecurityHandler = posturalInsecure => {
    setPosturalInsecurity(posturalInsecure);
  };

  const tactileDefensivenessHandler = tactileDefensive => {
    setTactileDefensiveness(tactileDefensive);
  };

  const poorRTSHandler = poorReTS => {
    setPoorRTS(poorReTS);
  };

  const sensoryAvoidingHandler = sensoryAvoid => {
    setSensoryAvoiding(sensoryAvoid);
  };

  const distractibilityHandler = distract => {
    setDistractibility(distract);
  };

  const hyperactivityHandler = hyperactive => {
    setHyperactivity(hyperactive);
  };

  // Sensory Processing b
  const [formSpace, setFormSpace] = useState();
  const [visuomotorcoordination, setVisuomotorcoordination] = useState();
  const [tactileDiscrimination, setTactileDiscrimination] = useState();
  const [praxis, setPraxis] = useState();
  const [
    vestibularProprioceptiveProcessing,
    setVestibularProprioceptiveProcessing,
  ] = useState();
  const [sensoryBcoms, setSensoryBcoms] = useState('');

  const formSpaceHandler = formSpace => {
    setFormSpace(formSpace);
  };

  const visuomotorcoordinationHandler = visuomotorcoordination => {
    setVisuomotorcoordination(visuomotorcoordination);
  };

  const tactileDiscriminationHandler = tactileDiscrimination => {
    setTactileDiscrimination(tactileDiscrimination);
  };

  const praxisHandler = praxis => {
    setPraxis(praxis);
  };

  const vestibularProprioceptiveProcessingHandler =
    vestibularProprioceptiveProcess => {
      setVestibularProprioceptiveProcessing(vestibularProprioceptiveProcess);
    };

  const sensoryBcomsHandler = sensoryBcoms => {
    setSensoryBcoms(sensoryBcoms);
  };

  // Visual System
  const [focalVision, setFocalVision] = useState('');
  const [ambientVision, setAmbientVision] = useState('');
  const [eyeMovementSystem, setEyeMovementSystem] = useState('');
  const [localization, setLocalization] = useState('');
  const [tracking, setTracking] = useState('');

  const focalVisionHandler = focalVision => {
    setFocalVision(focalVision);
  };

  const ambientVisionHandler = ambientVision => {
    setAmbientVision(ambientVision);
  };

  const eyeMovementSystemHandler = eyeMovementSystem => {
    setEyeMovementSystem(eyeMovementSystem);
  };

  const localizationHandler = localization => {
    setLocalization(localization);
  };

  const trackingHandler = tracking => {
    setTracking(tracking);
  };

  // section 16
  const [gmfm, setGmfm] = useState('');
  const [pedi, setPedi] = useState('');
  const [pediatricBalanceScale, setPediatricBalanceScale] = useState('');
  const [wotaAquaticScale, setWotaAquaticScale] = useState('');

  const gmfmHandler = gmfm => {
    setGmfm(gmfm);
  };

  const pediHandler = pedi => {
    setPedi(pedi);
  };

  const pediatricBalanceScaleHandler = pediatricBalanceScale => {
    setPediatricBalanceScale(pediatricBalanceScale);
  };

  const wotaAquaticScaleHandler = wotaAquaticScale => {
    setWotaAquaticScale(wotaAquaticScale);
  };

  // section  17
  const [bodyStructurePositive, setBodyStructurePositive] = useState('');
  const [bodyStructureNegative, setBodyStructureNegative] = useState('');

  const [bodyFunctionPositive, setBodyFunctionPositive] = useState('');
  const [bodyFunctionNegative, setBodyFunctionNegative] = useState('');

  const [activitiesPositive, setActivitiesPositive] = useState('');
  const [activitiesNegative, setActivitiesNegative] = useState('');

  const [environmentalPositive, setEnvironmentalPositive] = useState('');
  const [environmentalNegative, setEnvironmentalNegative] = useState('');

  const [shortTermGoals, setShortTermGoals] = useState('');
  const [longTermGoals, setLongTermGoals] = useState('');
  const [intervention, setIntervention] = useState('');
  const [equipments, setEquipments] = useState('');
  const [recommendationOptions, setRecommendationOptions] = useState({
    Physiotherapy: false,
    SensoryIntegration: false,
    OccupationalTherapy: false,
    AquaticTherapy: false,
    SpeechTherapy: false,
    RemedialTherapy: false,
    BehavioralTherapy: false,
  });
  const [section17Coms, setSection17Coms] = useState('');

  const section17ComsHandler = section17Coms => {
    setSection17Coms(section17Coms);
  };

  const bodyStructurePositiveHandler = bodyStructurePositive => {
    setBodyStructurePositive(bodyStructurePositive);
  };

  const bodyStructureNegativeHandler = bodyStructureNegative => {
    setBodyStructureNegative(bodyStructureNegative);
  };

  const bodyFunctionPositiveHandler = bodyFunctionPositive => {
    setBodyFunctionPositive(bodyFunctionPositive);
  };

  const bodyFunctionNegativeHandler = bodyFunctionNegative => {
    setBodyFunctionNegative(bodyFunctionNegative);
  };

  const activitiesPositiveHandler = activitiesPositive => {
    setActivitiesPositive(activitiesPositive);
  };

  const activitiesNegativeHandler = activitiesNegative => {
    setActivitiesNegative(activitiesNegative);
  };

  const environmentalPositiveHandler = environmentalPositive => {
    setEnvironmentalPositive(environmentalPositive);
  };

  const environmentalNegativeHandler = environmentalNegative => {
    setEnvironmentalNegative(environmentalNegative);
  };

  const shortTermGoalsHandler = shortTermGoals => {
    setShortTermGoals(shortTermGoals);
  };

  const longTermGoalsHandler = longTermGoals => {
    setLongTermGoals(longTermGoals);
  };

  const interventionHandler = intervention => {
    setIntervention(intervention);
  };

  const equipmentsHandler = equipments => {
    setEquipments(equipments);
  };

  const recommendationOptionsHandler = recommendationOption => {
    setRecommendationOptions({
      ...recommendationOptions,
      [recommendationOption]: !recommendationOptions[recommendationOption],
    });
  };
  const recommendationOptionsValues = [];
  Object.entries(recommendationOptions).forEach(([key, value]) => {
    if (value) {
      recommendationOptionsValues.push(key);
    }
  });
  // Generating html
  const generateHtml = () => {
    let html = `
    <html>
    <head>
      <style>
      body{font-family:Arial;
       padding:6px;} h1{font-size:18px; margin-bottom:5px;} h2{font-size:15px; margin-bottom:1px;} 
       .section{margin-bottom:2px; border-bottom:1px solid #ccc; padding-bottom:3px; padding-top:3px;}
        .label{font-weight:bold; margin-bottom:1px; color:#555; font-size:15px;} 
        .value{font-weight:bold;}
        #head{width:100%; height:100px; }
        #footer{width:100%; height:50px;}
        </style>
        </head>
        <body>`;

    html += `
        <header id="head">
        <h1>Header</h1>
        </header>
        `;

    // Section I => Patient Details
    if (
      firstName ||
      lastName ||
      userAge ||
      male ||
      female ||
      userDob ||
      evaluationDate ||
      informant ||
      AssesmentBy ||
      diagnosis ||
      referredBy ||
      gmfcOptions ||
      macsOptions ||
      miniMacOptions ||
      cfcsOptions
    ) {
      html += `
      <div class="label">
        <h1>1. Patient Details</h1>
      </div>
      <div class="value">
      </div>
      `;
    }
    if (firstName.trim()) {
      html += `
      <div class="label">
      <h2>First Name: ${firstName.trim()}</h2>
      </div>
    `;
    }
    if (lastName.trim()) {
      html += `
      <div class="label">
      <h2>last Name: ${lastName.trim()}</h2>
      </div>
      `;
    }
    if (userAge.trim()) {
      html += `
      <div class="label">
      <h2>Patient Age - ${userAge}</h2>
      </div>
      `;
    }
    if (male) {
      html += `
      <div class="label">
      <h2>Gender - Male</h2>
      </div>
      `;
    } else if (female) {
      html += `
      <div class="label">
      <h2>Gender -  Female</h2>
      </div>
      `;
    }

    const today = new Date();
    const dobString =
      userDob.getTime() === 0 ? '00/00/0000' : userDob.toLocaleDateString();
    if (userDob.getTime() !== today.getTime()) {
      html += `
      <div class="label">
      <h2> Date of Birth : ${dobString} </h2>
      </div><div class="value dob">
      </div>
      `;
    }

    const doeString =
      evaluationDate.getTime() === 0
        ? '00/00/0000'
        : evaluationDate.toLocaleDateString();
    if (evaluationDate.getTime() !== today.getTime()) {
      html += `
      <div class="label">
      <h2>Date of Evaluation: ${doeString}</h2>
      </div>`;
    }
    if (informant.trim()) {
      html += `
      <div class="label">
      <h2>Informant: ${informant.trim()}</h2>
      </div>`;
    }
    if (AssesmentBy.trim()) {
      html += `
      <div class="label">
      <h2>Addressed By: ${AssesmentBy.trim()}</h2>
      </div>`;
    }
    if (diagnosis.trim()) {
      html += `
      <div class="label">
      <h2>Diagnosis: ${diagnosis.trim()}</h2>
      </div></div>`;
    }
    if (referredBy.trim()) {
      html += `
      <div class="label">
      <h2>Referred By: ${referredBy.trim()}</h2>
      </div>`;
    }

    if (gmfcOptions) {
      html += `
          <div class="label">
          <h2>GMFC - ${gmfcOptions}</h2>
          </div>
          
        `;
    }

    if (macsOptions) {
      html += `
      <div class="label">
          <h2>MACS - ${macsOptions}</h2>
          </div>
         
        `;
    }

    if (miniMacOptions) {
      html += `
     <div class="label">
          <h2>Mini Mac - ${miniMacOptions} </h2>
          </div>

        `;
    }

    if (cfcsOptions) {
      html += `
      <div class="label">
      <h2>CFCS - ${cfcsOptions}</h2></div>
        `;
    }

    html+= `<div class="section"></div>`;

    html += `</br>`;
    // Section 2
    if (selectedNatalOptions || fullTerm || preTerm) {
      html += `
      <div class="label">
        <h1>2. HISTORY</h1>
      </div>
      <div class="value">
      </div>
    `;
    }

    const preNatal = Object.keys(preNatalOptions).filter(
      key => preNatalOptions[key],
    );
    if (preNatal.length > 0) {
      html += `
  
        <div class="label"><h2> Pre Natal ,  Modes of Ambulation:  ${preNatal.join(
          ', ',
        )}</h2></div>

    `;
    }

    if (fullTerm) {
      html += `
   
        <div class="label"><h2>Natal : Full Term</h2></div>

    `;
    } else if (preTerm) {
      html += `

        <div class="label"><h2>Natal : Pre Term</h2></div>
   
    `;
    }

   html+= `<div class="section"></div>`;
    
    html += `</br>`;

    if (
      ciabYes ||
      ciabNo ||
      userBirthWeight ||
      userHeadCircumference ||
      day1To7days ||
      week1To4weeks ||
      week4To4months ||
      presentHistory ||
      chiefComplaint
    ) {
      html += `
      <div class="label">
        <h1>Post Natal</h1>
      </div>
      `;
    }

    if (ciabYes) {
      html += `
  
        <div class="label"><h2>CIAB :Yes</h2></div>
   
    `;
    } else if (ciabNo) {
      html += `
      
        <div class="label"><h2>CIAB : No</h2></div>
    
    `;
    }

    if (userBirthWeight.trim()) {
      html += `
      <div class="label">
      <h2>Birth Weight (kgs) - ${userBirthWeight.trim()} </h2>
      </div>`;
    }

    if (userHeadCircumference.trim()) {
      html += `
      <div class="label">
      <h2>Head Circumference (cms) - ${userHeadCircumference.trim()}</h2>
      </div>`;
    }

    if (day1To7days) {
      html += `
      <div class="label">
      <h2>NICU STAY : 1 day - 7 day</h2>
      </div>`;
    } else if (week1To4weeks) {
      html += `
      <div class="label">
      <h2>NICU STAY : 1 Week - 4 Week</h2>
      </div>`;
    } else if (week4To4months) {
      html += `
      <div class="label">
      <h2>NICU STAY : 4 Week - 4 Month </h2>
      </div>`;
    }

    if (presentHistory.trim()) {
      html += `
      <div class="label"><h2>Present History - ${presentHistory.trim()}</h2>
      </div>`;
    }
    if (chiefComplaint.trim()) {
      html += `
      <div class="label"><h2>Chief Complaint - ${chiefComplaint.trim()}</h2>
      </div>`;
    }

    html+= `<div class="section"></div>`;
    
    html += `</br>`;

    // Section 3

    if (
      sightIntact ||
      sightNotIntact ||
      hearingIntact ||
      hearingNotIntact ||
      speechIntact ||
      speechNotIntact ||
      carried ||
      walkingSticks ||
      wheelChair ||
      walkingWalker ||
      walkingIndependently
    ) {
      html += `
      <div class="label">
        <h1>3. Subjective Assesment</h1>
      </div>
      <div class="value">
      </div>
      `;
    }

    if (sightIntact) {
      html += `
      <div class="label"><h2>Sight - Intact</h2>
      </div>`;
    } else if (sightNotIntact) {
      html += `
      <div class="label"><h2>Sight - Not Intact</h2>
      </div>`;
    }

    if (hearingIntact) {
      html += `
      <div class="label"><h2>Hearing -Intact </h2>
      </div>`;
    } else if (hearingNotIntact) {
      html += `
      <div class="label"><h2>Hearing - Not Intact</h2>
      </div>`;
    }

    if (speechIntact) {
      html += `
      <div class="label"><h2>Speech/Communication - Intact </h2>
      </div>`;
    } else if (speechNotIntact) {
      html += `
      <div class="label"><h2>Speech/Communication - Not Intact </h2>
      </div>`;
    }

    if (carried) {
      html += `
      <div class="label"><h2>Mode Of Ambulation - Carried by Parent</h2>
      </div>`;
    } else if (walkingSticks) {
      html += `
      <div class="label"><h2>Mode Of Ambulation - Walking with Sticks</h2>
      </div>`;
    } else if (wheelChair) {
      html += `
      <div class="label"><h2>Mode Of Ambulation - Wheel Chair</h2>
      </div>`;
    } else if (walkingWalker) {
      html += `
      <div class="label"><h2>Mode Of Ambulation - Walking with Walker</h2>
      </div>`;
    } else if (walkingIndependently) {
      html += `
      <div class="label"><h2>Mode Of Ambulation - Walking Independently</h2>
      </div>`;
    }

    html+= `<div class="section"></div>`;
    html += `</br>`;

    // Section 4

    if (handHolding || rolling || crawling || sitting || standing || walking) {
      html += `
      <div class="label">
        <h1>4. Developemental Milestones (months)</h1>
      </div>
      <div class="value">
      </div>
      `;
    }
    if (handHolding.trim()) {
      html += `
      <div class="label"><h2>Hand Holding - ${handHolding.trim()} </h2>
      </div>`;
    }
    if (rolling.trim()) {
      html += `
      <div class="label"><h2>Rolling - ${rolling.trim()} </h2>
      </div>`;
    }
    if (crawling.trim()) {
      html += `
      <div class="label"><h2>Crawling - ${crawling.trim()} </h2>
      </div><div class="value"><h3></h3>
      </div>`;
    }
    if (sitting.trim()) {
      html += `
      <div class="label"><h2>Sitting- ${sitting.trim()} </h2>
      </div>`;
    }
    if (standing.trim()) {
      html += `
      <div class="label"><h2>Standing - ${standing.trim()}</h2>
      </div>`;
    }
    if (walking.trim()) {
      html += `
      <div class="label"><h2>Walking - ${walking.trim()} </h2>
      </div>`;
    }

    // Section 5
     html+= `<div class="section"></div>`;
    
    html += `</br>`;

    if (mri || eeg || bera || opthalmalogy || xRays) {
      html += `
      <div class="label">
        <h1>5. General Observations </h1>
      </div>
      <div class="value">
      </div>
      `;
    }

    if (mri.trim()) {
      html += `
      <div class="label"><h2>MRI - ${mri.trim()} </h2>
      </div>`;
    }

    if (eeg.trim()) {
      html += `
      <div class="label"><h2>EEG - ${eeg.trim()}</h2>
      </div>`;
    }

    if (bera.trim()) {
      html += `
      <div class="label"><h2>Bera - ${bera.trim()}</h2>
      </div>`;
    }

    if (opthalmalogy.trim()) {
      html += `
      <div class="label"><h2>Ophthalmalogy - ${opthalmalogy.trim()}</h2>
      </div>`;
    }

    if (xRays.trim()) {
      html += `
      <div class="label"><h2>X-Rays - ${xRays.trim()} </h2>
      </div>`;
    }

    html+= `<div class="section"></div>`;
    html += `</br>`;
    // Section 6

    if (hypertonia || hypotonia || deformities || contracture || tightness) {
      html += `
      <div class="label">
        <h1>6. Objective Assesment </h1>
      </div>
      <div class="value">
      </div>
      `;
    }

    if (hypotonia) {
      html += `
      <div class="label"><h2>Tone - Hypotonia</h2>
      </div>`;
    } else if (hypertonia) {
      html += `
      <div class="label"><h2>Tone - Hypertonia</h2>
      </div>`;
    }

    if (deformities.trim()) {
      html += `
      <div class="label"><h2>Deformities - ${deformities.trim()}</h2>
      </div>`;
    }
    if (contracture.trim()) {
      html += `
      <div class="label"><h2>Contracture - ${contracture.trim()} </h2>
      </div>`;
    }

    if (tightness.trim()) {
      html += `
      <div class="label"><h2>Tightness - ${tightness.trim()}</h2>
      </div>`;
    }

    html+= `<div class="section"></div>`;
    html += `</br>`;
    // Section 7
    // Tardiues

    if (
      tasRTR1 ||
      tasRTR2 ||
      tasLTR1 ||
      tasLTR2 ||
      hamstringsLTR1 ||
      hamstringsLTR2 ||
      hamstringsRTR1 ||
      hamstringsRTR2 ||
      hipAdductionLTR1 ||
      hipAdductionLTR2 ||
      hipAdductionRTR1 ||
      hipAdductionRTR2
    ) {
      html += `
        <div class="label">
          <h1>7 . Tardiue's  </h1>
        </div>
        <div class="value">
        </div>
        `;
    }

    if (tasRTR1.trim()) {
      html += `
          <div class="label">
          <h2>Tendonitis RT - R1  :${tasRTR1}</h2></div><div class="value">
          </div>
          </div>
        `;
    }
    if (tasRTR2.trim()) {
      html += `
      <div class="label">
      <h2>Tendonitis RT - R2  :${tasRTR2}</h2></div>

    `;
    }
    if (tasLTR1.trim()) {
      html += `
      <div class="label">
      <h2>Tendonitis LT - R1  :${tasLTR1}</h2>
      </div>
    `;
    }
    if (tasLTR2.trim()) {
      html += `
      <div class="label">
      <h2>Tendonitis LT - R2  :${tasLTR2}</h2>
      </div>
    `;
    }

    if (hamstringsRTR1) {
      html += `
      <div class="section"><div class="label">
      <h2>Hamstrings RT - R1  :${hamstringsRTR1}</h2>
      </div>
    `;
    }
    if (hamstringsRTR2) {
      html += `
      <div class="section"><div class="label">
      <h2>Hamstrings RT - R2  :${hamstringsRTR2}</h2>
      </div>
    `;
    }
    if (hamstringsLTR1) {
      html += `
      <div class="label">
      <h2>Hamstrings LT - R1  :${hamstringsLTR1}</h2>
      </div>
    `;
    }
    if (hamstringsLTR2) {
      html += `
     <div class="label">
      <h2>Hamstrings LT - R2  :${hamstringsLTR2}</h2>
      </div>
    `;
    }

    if (hipAdductionRTR1) {
      html += `
     <div class="label">
      <h2>Hip Adductors  RT - R1  :${hipAdductionRTR1}</h2>
      </div>
    `;
    }
    if (hipAdductionRTR2) {
      html += `
      <div class="label">
      <h2>Hip Adductors  RT - R2  :${hipAdductionRTR2}</h2>
      </div>
    `;
    }
    if (hipAdductionLTR1) {
      html += `
      <div class="label">
      <h2>Hip Adductors  LT - R1  :${hipAdductionLTR1}</h2>
      </div>
    `;
    }
    if (hipAdductionLTR2) {
      html += `
    <div class="label">
      <h2>Hip Adductors  LT - L2  :${hipAdductionLTR2}</h2>
      </div>
    `;
    }

    // Section 8 => ROM 
    html+= `<div class="section"></div>`;
    
    html += `</br>`;

    if (
      backExt ||
      backFlex ||
      backLat ||
      neckFlex ||
      neckExt ||
      neckLat ||
      hipFlex ||
      hipExt ||
      hipAdd ||
      hipAbd ||
      kneeFlex ||
      hipMedRot ||
      hipLat ||
      shoulderAbd ||
      shoulderAdd ||
      shoulderFlex ||
      shoulderExt ||
      elbowFlex ||
      forearmSup ||
      forearmPro ||
      ankleDF ||
      anklePF ||
      ankleInversion ||
      ankleEversion ||
      wristFlex ||
      wristExt
    ) {
      html += `
      <div class="label">
        <h1>8. ROM </h1>
      </div>
      <div class="value">
      </div>
      `;
    }
    if (backExt) {
      html += `
          <div class="label">
          <h2>Back Extension :${backExt}</h2></div><div class="v>
          </div>
          </div>
        `;
    }

    if (backFlex) {
      html += `
          <div class="label">
          <h2>Back Flexion : ${backFlex}</h2></div><div class="v>
          </div>
          </div>
        `;
    }

    if (backLat) {
      html += `
          <div class="label">
          <h2>Back Lateral Bending : ${backLat}</h2></div><div c"value">
          </div>
          </div>
        `;
    }

    if (neckFlex) {
      html += `
          <div class="label">
          <h2>Neck Flexion : ${neckFlex}</h2></div><div class="v>
          </div>
          </div>
        `;
    }

    if (neckExt) {
      html += `
          <div class="label">
          <h2>Neck Extension : ${neckExt}</h2></div><div class="">
          </div>
          </div>
        `;
    }

    if (neckLat) {
      html += `
          <div class="label">
          <h2>Neck Lateral Bending : ${neckLat}</h2></div><div c"value">
          </div>
          </div>
        `;
    }

    if (hipFlex) {
      html += `
          <div class="label">
          <h2>Hip Flexion : ${hipFlex}</h2></div><div class="val          </div>
          </div>
        `;
    }

    if (hipExt) {
      html += `
          <div class="label">
          <h2>Hip Extension : ${hipExt}</h2></div><div class="va
          </div>
          </div>
        `;
    }

    if (hipAdd) {
      html += `
          <div class="label">
          <h2>Hip Adduction : ${hipAdd}</h2></div><div class="va
          </div>
          </div>
        `;
    }

    if (hipAbd) {
      html += `
          <div class="label">
          <h2>Hip Abduction : ${hipAbd}</h2>
          </div>
        `;
    }

    if (kneeFlex) {
      html += `
          <div class="label">
          <h2>Knee Flexion : ${kneeFlex}</h2>
          </div>
        `;
    }

    if (hipMedRot) {
      html += `
          <div class="label">
          <h2>Hip medial rotation : ${hipMedRot}</h2>
          </div>
        `;
    }

    if (hipLat) {
      html += `
          <div class="label">
          <h2>Hip lateral rotation : ${hipLat}</h2>
          </div>
        `;
    }

    if (shoulderAbd) {
      html += `
          <div class="label">
          <h2>Shoulder Abduction : ${shoulderAbd}</h2>
          </div>
        `;
    }

    if (shoulderAdd) {
      html += `
          <div class="label">
      <h2>Shoulder Adduction : ${shoulderAdd}</h2>
      </div>
    `;
    }

    if (shoulderFlex) {
      html += `
      <div class="label">
      <h2>Shoulder Flexion: ${shoulderFlex}</h2>
      </div>
    `;
    }

    if (shoulderExt) {
      html += `
      <div class="label">
      <h2>Shoulder Extension: ${shoulderExt}</h2>
      </div>
    `;
    }

    if (elbowFlex) {
      html += `
      <div class="label">
      <h2>Elbow Flexion: ${elbowFlex}</h2>
      </div>
      `;
    }

    if (forearmSup) {
      html += `
      <div class="label">
      <h2>Forearm Supination: ${forearmSup}</h2>

      </div>
      `;
    }
    if (forearmPro) {
      html += `
      <div class="label">
      <h2>Forearm Pronation: ${forearmPro}</h2>
      
      </div>
      `;
    }

    if (ankleDF) {
      html += `
      <div class="label">
      <h2>Ankle DF: ${ankleDF}</h2>
    
      </div>
      `;
    }
    if (anklePF) {
      html += `
      <div class="label">
      <h2>Ankle PF: ${anklePF}</h2>
      
      </div>
      `;
    }
    if (ankleInversion) {
      html += `
    <div class="label">
      <h2>Ankle Inversion: ${ankleInversion}</h2>
      </div>
      `;
    }

    if (ankleEversion) {
      html += `
  <div class="label">
      <h2>Ankle Eversion: ${ankleEversion}</h2>

      </div>
      `;
    }

    if (wristFlex) {
      html += `
     <div class="label">
      <h2>Wrist Flexion: ${wristFlex}</h2>

      </div>
      `;
    }

    if (wristExt) {
      html += `
      <div class="label">
      <h2>Wrist Extension: ${wristExt}</h2>
      </div>
      `;
    }

    html+= `<div class="section"></div>`;
    html += `</br>`;

    // Section 9 => Modified Asworths
    if (upperExtremities || lowerExtremities || asworthsComs) {
      html += `
        <div class="label">
          <h1>9. Modified Asworths</h1>
        </div>
        <div class="value">
        </div>
        `;
    }

    if (upperExtremities) {
      html += `
        <div class="label">
        <h2> Upper Extremities : ${upperExtremities}</h2></div><div class="value">
        </div>
        </div>
      `;
    }

    if (asworthsComs){
      html += `
        <div class="label">
        <h2> Modified Asworth's Comment : ${asworthsComs}</h2></div><div class="value">
        </div>
        </div>
      `;
    }

    if (lowerExtremities) {
      html += `
        <div class="label">
        <h2> Lower Extremities : ${lowerExtremities}</h2></div><div class="value">
        </div>
        </div>
      `;
    }

    html+= `<div class="section"></div>`;
    html += `</br>`;

    // Section 10 => functional evaluation
    if (
      supineToProneImmobile ||
      supineToProneAssistance ||
      supineToProneIndependent ||
      supineToSitImmobile ||
      supineToSitAssistance ||
      supineToSitIndependent ||
      sittingImmobile ||
      sittingAssistance ||
      sittingIndependent ||
      quadsImmobile ||
      quadsAssistance ||
      quadsIndependent ||
      kneelingImmobile ||
      kneelingAssistance ||
      kneelingIndependent ||
      halfKneelingImmobile ||
      halfKneelingAssistance ||
      halfKneelingIndependent ||
      standingImmobile ||
      standingAssistance ||
      standingIndependent ||
      ambulationImmobile ||
      ambulationAssistance ||
      ambulationIndependent
    ) {
      html += `
        <div class="label">
          <h1>10. Functional Evaluation</h1>
        </div>
        <div class="value">
        </div>
        `;
    }

    if (supineToProneImmobile) {
      html += `
        <div class="label">
        <h2>Supine to Prone : Immobile</h2>
        </div>
      `;
    } else if (supineToProneAssistance) {
      html += `
        <div class="label">
        <h2>Supine to Prone : Assistance </h2>
        </div>
      `;
    } else if (supineToProneIndependent) {
      html += `
        <div class="label">
        <h2>Supine to Prone : Independent</h2>

        </div>
      `;
    }

    if (supineToSitImmobile) {
      html += `
        <div class="label">
        <h2>Supine to Sit : Immobile</h2>
        </div>
      `;
    } else if (supineToSitAssistance) {
      html += `
        <div class="label">
        <h2>Supine to Sit : Assistance</h2>
        </div>
      `;
    } else if (supineToSitIndependent) {
      html += `
        <div class="label">
        <h2>Supine to Sit : Independent</h2>
        </div>
      `;
    }

    if (sittingImmobile) {
      html += `
        <div class="label">
        <h2>Sitting : Immobile</h2>
        </div>
      `;
    } else if (sittingAssistance) {
      html += `
        <div class="label">
        <h2>Sitting : Assistance</h2>
        </div>
      `;
    } else if (sittingIndependent) {
      html += `
        <div class="label">
        <h2>Sitting : Independent</h2>
        </div>
      `;
    }

    if (quadsImmobile) {
      html += `
      <div class="label">
      <h2>Quads : Immobile</h2>
      </div>
    `;
    } else if (quadsAssistance) {
      html += `
      <div class="label">
      <h2>Quads : Assistance</h2>
      </div>
    `;
    } else if (quadsIndependent) {
      html += `
      <div class="label">
      <h2>Quads :Independent</h2>
      </div>
    `;
    }

    if (kneelingImmobile) {
      html += `
      <div class="label">
      <h2>Kneeling :Immobile</h2>
      </div>
    `;
    } else if (kneelingAssistance) {
      html += `
      <div class="label">
      <h2>Kneeling : Assistance</h2>
      </div>
    `;
    } else if (kneelingIndependent) {
      html += `
      <div class="label">
      <h2>Kneeling : Independent</h2>
      </div>
    `;
    }

    if (halfKneelingImmobile) {
      html += `
      <div class="label">
      <h2>Half Kneeling : Immobile</h2>
      </div>
    `;
    } else if (halfKneelingAssistance) {
      html += `
      <div class="label">
      <h2>Half Kneeling : Assistance</h2>
      </div>
    `;
    } else if (halfKneelingIndependent) {
      html += `
     <div class="label">
      <h2>Half Kneeling : Independent</h2>
      </div>
    `;
    }

    if (standingImmobile) {
      html += `
      <div class="label">
      <h2>Standing : Immobile</h2>
      </div>
    `;
    } else if (standingAssistance) {
      html += `
      <div class="label">
      <h2>Standing : Assistance</h2>
      </div>
    `;
    } else if (standingIndependent) {
      html += `
      <div class="label">
      <h2>Standing : Independent</h2>
      </div>
    `;
    }

    if (ambulationImmobile) {
      html += `
      <div class="label">
      <h2>Ambulation : Immobile</h2>
      </div>
    `;
    } else if (ambulationAssistance) {
      html += `
      <div class="label">
      <h2>Ambulation : Assistance</h2>
      </div>
    `;
    } else if (ambulationIndependent) {
      html += `
      <div class="label">
      <h2>Ambulation : Independent</h2>
      </div>
    `;
    }

    if (functionAbilities.trim()) {
      html += `
 <div class="label">
      <h2>Function Abilities : ${functionAbilities}</h2>
      </div>
    `;
    }

    if (functionLimitations.trim()) {
      html += `
      <div class="label">
      <h2>Function Goals : ${functionLimitations}</h2>
      </div>
    `;
    }

    html+= `<div class="section"></div>`;
    html += `</br>`;

    // Section 11 => Single System Assessment

    if (
      canInitiate ||
      cantInitiate ||
      initiateComs ||
      sustenancePoor ||
      sustenanceGood ||
      sustenanceFair ||
      sustenanceComs ||
      terminationPassive ||
      terminationAbrupt ||
      terminationComs ||
      controlGradPoor ||
      controlGradGood ||
      controlGradFair ||
      controlGradComs ||
      recruitmentPostural ||
      recruitmentMovement ||
      recruitmentComs ||
      contractionConcentric ||
      contractionIsometric ||
      contractionEccentric ||
      contractionComs ||
      contraction ||
      reciprocalInhibition ||
      comsContraction_ReciprocalInhibition ||
      massEnergy ||
      isolatedWork ||
      dynamicStiffness ||
      extraneousMovement
    ) {
      html += `
        <div class="label">
          <h1>11. Single System Assesment</h1>
        </div>
        <div class="value">
        </div>
        `;
    }
    if (canInitiate) {
      html += `
      <div class="label">
      <h2>Initiation : Can Initiate</h2>
      </div>
    `;
    } else if (cantInitiate) {
      html += `
      <div class="label">
      <h2>Initiation : Cannot Initiate</h2>
      </div>
    `;
    }
    if (initiateComs) {
      html += `
      <div class="label">
      <h2>Initiation Comments : ${initiateComs}</h2>
      </div>
    `;
    }

    if (sustenancePoor) {
      html += `
     <div class="label">
      <h2>Sustenance : Poor</h2>
      </div>
    `;
    } else if (sustenanceGood) {
      html += `
    <div class="label">
      <h2>Sustenance : Good</h2>
      </div>
    `;
    } else if (sustenanceFair) {
      html += `
      <div class="label">
      <h2>Sustenance : Fair</h2>
      </div>
    `;
    }
    if (sustenanceComs) {
      html += `
    <div class="label">
      <h2>Sustenance Comments : ${sustenanceComs}</h2>
      </div>
    `;
    }

    if (terminationPassive) {
      html += `
     <div class="label">
      <h2>Termination : Passive </h2>
      </div>
    `;
    } else if (terminationAbrupt) {
      html += `
      <div class="label">
      <h2>Termination : Abrupt</h2>
      </div>
    `;
    }
    if (terminationComs) {
      html += `
   <div class="label">
      <h2>Termination Comments: ${terminationComs}</h2>
      </div>
    `;
    }

    if (controlGradPoor) {
      html += `
    <div class="label">
      <h2>Control Gradation : Poor</h2>
      </div>
    `;
    } else if (controlGradGood) {
      html += `
    
      <div class="label">
      <h2>Control Gradation : Good</h2>
      </div>
    `;
    } else if (controlGradFair) {
      html += `
   <div class="label">
      <h2>Control Gradation : Fair</h2>
      </div>
    `;
    }
    if (controlGradComs) {
      html += `
     <div class="label">
      <h2>Control Gradation Comments : ${controlGradComs}</h2>
      </div>
    `;
    }

    if (recruitmentPostural) {
      html += `
       <div class="label">
      <h2>Recruitment : Postural (So)</h2>
      </div>
    `;
    } else if (recruitmentMovement) {
      html += `
     <div class="label">
      <h2>Recruitment : Movement (FF)</h2>
      </div>
    `;
    }

    if (contractionConcentric) {
      html += `
     <div class="label">
      <h2>Contraction : Concentric</h2>
      </div>
    `;
    } else if (contractionEccentric) {
      html += `
 <div class="label">
      <h2>Contraction : Eccentric</h2>
      </div>
    `;
    } else if (contractionIsometric) {
      html += `
      <div class="label">
      <h2>Contraction : Isometric</h2>
      </div>
    `;
    }

    if (contraction) {
      html += `
   <div class="label">
      <h2>Co-contraction : ${contraction}</h2>
      </div>
    `;
    }
    if (reciprocalInhibition) {
      html += `
    <div class="label">
      <h2>Reciprocal Inhibition : ${reciprocalInhibition}</h2>
      </div>

    `;
    }

    if (massEnergy) {
      html += `
   <div class="label">
      <h2>Mass Energy  : ${massEnergy}</h2>
      </div>

    `;
    }
    if (isolatedWork) {
      html += `
      <div class="label">
      <h2>Isolated Work :  ${isolatedWork}</h2>
      </div>

    `;
    }

    if (dynamicStiffness) {
      html += `
     <div class="label">
      <h2>Dynamic Stiffness :  ${dynamicStiffness}</h2>
      </div>

    `;
    }

    if (extraneousMovement) {
      html += `
     <div class="label">
      <h2>Extraneous Movement :  ${extraneousMovement}</h2>
      </div>

    `;
    }

    if (singleAssesment) {
      html += `
     <div class="label">
      <h2>Single System Assesment Comments :  ${singleAssesment}</h2>
      </div>

    `;
    }

    html+= `<div class="section"></div>`;
    html += `</br>`;

    // Section 12 => Multi System Assessment
    if (
      postureAnswer ||
      asymmetry ||
      side ||
      broad ||
      narrow ||
      generalPosture ||
      callosities
    ) {
      html += `
        <div class="label">
          <h1>12. Multi System Assesment</h1>
        </div>
        <div class="value">
        </div>
        `;
    }

    if (postureAnswer) {
      html += `
      <div class="label">
      <h2>What posture the child normally adopts ?  :  ${postureAnswer}</h2>
      </div>
    `;
    }

    if (asymmetry) {
      html += `
     <div class="label">
      <h2>Alignment :  Asymmetry</h2>
      </div>
    `;
    }
    if (side) {
      html += `
     <div class="label">
      <h2>Alignment Side :  ${side}</h2>
      </div>
    `;
    }

    if (broad) {
      html += `
    <div class="label">
      <h2>Base of Support :  Broad</h2>
      </div>
    `;
    }

    if (narrow) {
      html += `
      <div class="label">
      <h2>Base of Support :  Narrow</h2>
      </div>
    `;
    }

    if (generalPosture) {
      html += `
      <div class="label">
      <h2>General Posture : ${generalPosture}</h2>
      </div>
    `;
    }

    if (callosities) {
      html += `
      <div class="label">
      <h2>Callosities : ${callosities}</h2>
      </div>
    `;
    }

    html+= `<div class="section"></div>`;
    html += `</br>`;

    if (
      momentum ||
      overuseOfMs ||
      increasingBos ||
      staticBalanceFair ||
      staticBalanceGood ||
      staticBalancePoor ||
      anticipatoryBalanceFair ||
      anticipatoryBalanceGood ||
      anticipatoryBalancePoor ||
      anticipatoryBalanceComs ||
      reactiveBalanceComs ||
      reactiveBalanceFair ||
      reactiveBalanceGood ||
      reactiveBalancePoor ||
      coordinationComs ||
      coordinationFair ||
      coordinationGood ||
      coordinationPoor
    ) {
      html += `
        <div class="label">
          <h1>Movement Systems</h1>
        </div>
        <div class="value">
        </div>
        `;
    }

    if (momentum) {
      html += `
      <div class="label">
      <h2>Movement Strategies Used : Momentum</h2>
      </div>
    `;
    } else if (overuseOfMs) {
      html += `
      <div class="label">
      <h2>Movement Strategies Used : Overuse Of Ms</h2>
      </div>

    `;
    } else if (increasingBos) {
      html += `
      <div class="label">
      <h2>Movement Strategies Used : Increasing BOS</h2>
      </div>
 
    `;
    }

    if (staticBalanceGood) {
      html += `
     <div class="label">
      <h2>Static Balance : Good</h2>
      </div>

    `;
    } else if (staticBalanceFair) {
      html += `
      <div class="label">
      <h2>Static Balance : Fair</h2>
      </div>

      `;
    } else if (staticBalancePoor) {
      html += `
      <div class="label">
      <h2>Static Balance : Poor</h2>
      </div>

      `;
    }

    if (anticipatoryBalanceGood) {
      html += `
     <div class="label">
      <h2>Anticipatory Balance : Good</h2>
      </div>

      `;
    } else if (anticipatoryBalanceFair) {
      html += `
      <div class="label">
      <h2>Anticipatory Balance : Fair</h2>
      </div>

      `;
    } else if (anticipatoryBalancePoor) {
      html += `
    <div class="label">
      <h2>Anticipatory Balance : Poor</h2>
      </div>
      `;
    }
    if (anticipatoryBalanceComs) {
      html += `
     <div class="label">
      <h2>Anticipatory Balance Comments : ${anticipatoryBalanceComs}</h2>
      </div>
      `;
    }

    if (reactiveBalanceGood) {
      html += `
    <div class="label">
      <h2>Reactive Balance : Good</h2>
      </div> 

      `;
    } else if (reactiveBalanceFair) {
      html += `
      <div class="label">
      <h2>Reactive Balance : Fair</h2>
      </div>

      `;
    } else if (reactiveBalancePoor) {
      html += `
      <div class="label">
      <h2>Reactive Balance : Poor</h2>
      </div>
      `;
    }
    if (reactiveBalanceComs) {
      html += `
     <div class="label">
      <h2>Reactive Balance Comments : ${reactiveBalanceComs}</h2>
      </div>

      `;
    }

    if (coordinationGood) {
      html += `
      <div class="label">
      <h2>Co ordination : Good</h2>
      </div>
      
      `;
    } else if (coordinationFair) {
      html += `
      <div class="label">
      <h2>Co ordination : Fair</h2>
      </div>
      
      `;
    } else if (coordinationPoor) {
      html += `
      <div class="label">
      <h2>Co ordination : Poor</h2>
      </div>
      
      `;
    }

    if (coordinationComs) {
      html += `
      <div class="label">
      <h2>Co ordination Coomments : ${coordinationComs}</h2>
      </div>
      
      `;
    }

    html+= `<div class="section"></div>`;
    html += `</br>`;

    // Section 13 =>  Sensory Systems
    if (
      registrationComs ||
      sensoryProfile ||
      tactileUnder ||
      tactileOver ||
      auditoryUnder ||
      auditoryOver ||
      visualUnder ||
      visualOver ||
      vestibularUnder ||
      vestibularOver ||
      proprioceptiveUnder ||
      proprioceptiveOver ||
      gustatoryOver ||
      gustatoryUnder ||
      sensorySystemsComs
    ) {
      html += `
        <div class="label">
          <h1>13. Sensory Systems</h1>
        </div>
        <div class="value">
        </div>
        `;
    }

    const registrationOpts = Object.keys(registrationOptions).filter(
      key => registrationOptions[key],
    );
    if (registrationOpts.length > 0) {
      html += `
        <div class="label">
        <h2> Sensory Systems => Registraion Options  :  ${registrationOpts.join(', ')}</h2>
        </div>
    `;
    }

    if (registrationComs) {
      html += `
      <div class="label">
      <h2>Registraion Coomments : ${registrationComs}</h2></div><div class="value">
      </div>
      
      `;
    }

    if (tactileUnder) {
      html += `
      <div class="label">
      <h2>Tactile : Under Responsive</h2>
      </div>
      
      `;
    } else if (tactileOver) {
      html += `
      <div class="label">
      <h2>Tactile : Over Responsive</h2>
      </div>
      
      `;
    }

    if (proprioceptiveUnder) {
      html += `
      <div class="label">
      <h2>Proprioceptive : Under Responsive</h2>
      </div>
      
      `;
    } else if (proprioceptiveOver) {
      html += `
      <div class="label">
      <h2>Proprioceptive : Over Responsive</h2>
      </div>
      
      `;
    }

    if (vestibularUnder) {
      html += `
      <div class="label">
      <h2>Vestibular  : Under Responsive</h2>
      </div>
      
      `;
    } else if (vestibularOver) {
      html += `
      <div class="label">
      <h2>Vestibular  : Over Responsive</h2>
      </div>
      
      `;
    }

    if (auditoryUnder) {
      html += `
      <div class="label">
      <h2>Auditory  : Under Responsive</h2>
      </div>

      `;
    } else if (auditoryOver) {
      html += `
      <div class="label">
      <h2>Auditory  : Over Responsive</h2>
      </div>

      `;
    }

    if (visualUnder) {
      html += `
      <div class="label">
      <h2>Visual  : Under Responsive</h2>
      </div>

      `;
    } else if (visualOver) {
      html += `
      <div class="label">
      <h2>Visual  : Over Responsive</h2>
      </div>
 
      `;
    }

    if (gustatoryUnder) {
      html += `
      <div class="label">
      <h2>Gustatory  : Under Responsive</h2>
      </div>
 
      `;
    } else if (gustatoryOver) {
      html += `
     <div class="label">
      <h2>Gustatory  : Over Responsive</h2>
      </div>
 
      `;
    }

    if (sensorySystemsComs) {
      html += `
      <div class="label">
      <h2>Sensory System Comments  : ${sensorySystemsComs}</h2>
      </div>
 
      `;
    }

    if (sensoryProfile) {
      html += `
     <div class="label">
      <h2>Sensory Profile  : ${sensoryProfile}</h2>
      </div>
    
      `;
    }

    html+= `<div class="section"></div>`;
    html += `</br>`;

    // Section 14 =>  Sensory Modulation
    if (
      gravitationalInsecurity ||
      aversiveResponse ||
      posturalInsecurity ||
      tactileDefensiveness ||
      poorRTS ||
      sensoryAvoiding ||
      distractibility ||
      hyperactivity ||
      sensoryComs
    ) {
      html += `
        <div class="label">
          <h1>14. a- Sensory Modulation</h1>
        </div>
        <div class="value">
        </div>
        `;
    }

    if (gravitationalInsecurity) {
      html += `
    <div class="label">
      <h2>Gravitational Insecurity : ${gravitationalInsecurity}</h2>
      </div>

      `;
    }
    if (aversiveResponse) {
      html += `
     <div class="label">
      <h2>Aversive Response to Movement : ${aversiveResponse}</h2>
      </div>
   
      `;
    }
    if (posturalInsecurity) {
      html += `
     <div class="label">
      <h2>Postural Insecurity : ${posturalInsecurity}</h2>
      </div>
   
      `;
    }
    if (tactileDefensiveness) {
      html += `
     <div class="label">
      <h2>Tactile Defensiveness : ${tactileDefensiveness}</h2>
      </div>
     
      `;
    }
    if (sensoryAvoiding) {
      html += `
     <div class="label">
      <h2>Sensory Avoiding : ${sensoryAvoiding}</h2>
      </div>
  
      `;
    }
    if (poorRTS) {
      html += `
      <div class="label">
      <h2>Poor registration to stimulation : ${poorRTS}</h2>
      </div>
    
      `;
    }
    if (distractibility) {
      html += `
     <div class="label">
      <h2>Distractibility : ${distractibility}</h2>
      </div>
     
      `;
    }
    if (hyperactivity) {
      html += `
    <div class="label">
      <h2>Hyperactivity : ${hyperactivity}</h2>

      </div>
      `;
    }
    if (sensoryComs) {
      html += `
      <div class="section"><div class="label">
      <h2>Sensory Modulation Comments : ${sensoryComs}</h2>
      </div>
 
      `;
    }

    html+= `<div class="section"></div>`;
    html += `</br>`;

    if (
      formSpace ||
      visuomotorcoordination ||
      tactileDiscrimination ||
      praxis ||
      vestibularProprioceptiveProcessing ||
      sensoryBcoms
    ) {
      html += `
      <div class="label">
        <h1>14. b- Sensory Processing</h1>
      </div>
      <div class="value">
      </div>
      `;
    }

    if (formSpace) {
      html += `
     <div class="label">
      <h2>Form Space : ${formSpace}</h2>
   
      </div>
      `;
    }

    if (visuomotorcoordination) {
      html += `
      <div class="label">
      <h2>Visuo motor co-ordination : ${visuomotorcoordination}</h2>
      </div>

      `;
    }

    if (tactileDiscrimination) {
      html += `
   <div class="label">
      <h2>Tactile Discrimination : ${tactileDiscrimination}</h2>
      </div>
  
      `;
    }

    if (praxis) {
      html += `
      <div class="label">
      <h2>Praxis : ${praxis}</h2>
      </div>
      `;
    }

    if (vestibularProprioceptiveProcessing) {
      html += `
      <div class="label">
      <h2>Vestibular Proprioceptive Processing : ${vestibularProprioceptiveProcessing}</h2>
      </div>
      `;
    }

    if (sensoryBcoms) {
      html += `
      <div class="label">
      <h2>Sensory Processing Comments: ${sensoryBcoms}</h2>
      </div>
      `;
    }

    html+= `<div class="section"></div>`;
    html += `</br>`;

    if (
      focalVision ||
      ambientVision ||
      eyeMovementSystem ||
      localization ||
      tracking
    ) {
      html += `
      <div class="label">
        <h1>14. c- Visual System</h1>
      </div>
      <div class="value">
      </div>
      `;
    }

    if (focalVision) {
      html += `
     <div class="label">
      <h2>Focal Vision : ${focalVision}</h2>
      </div>
      `;
    }

    if (ambientVision) {
      html += `
      <div class="label">
      <h2>Ambient Vision : ${ambientVision}</h2>
      </div>
  
      `;
    }

    if (eyeMovementSystem) {
      html += `
      <div class="label">
      <h2>Eye Movement System : ${eyeMovementSystem}</h2>
      </div>
      `;
    }

    if (localization) {
      html += `
      <div class="label">
      <h2>Localization : ${localization}</h2>
      </div>
      `;
    }

    if (tracking) {
      html += `
     <div class="label">
      <h2>Tracking : ${tracking}</h2>
      </div>
      `;
    }

    html+= `<div class="section"></div>`;
    html += `</br>`;

    // Section 16 - Other Scales
    if (gmfm || pedi || pediatricBalanceScale || wotaAquaticScale) {
      html += `
      <div class="label">
        <h1>14. c- Visual System</h1>
      </div>
      <div class="value">
      </div>
      `;
    }

    if (gmfm) {
      html += `
    <div class="label">
      <h2>GMFM : ${gmfm}</h2>
      </div>
      `;
    }
    if (pedi) {
      html += `
      <div class="label">
      <h2>PEDI : ${pedi}</h2>
      </div>

      `;
    }

    if (pediatricBalanceScale) {
      html += `
     <div class="label">
      <h2>Pediatric Balance Scale : ${pediatricBalanceScale}</h2>

      `;
    }

    if (wotaAquaticScale) {
      html += `
      <div class="label">
      <h2>WOTA (AquaticScale) : ${wotaAquaticScale}</h2>
      </div>

      `;
    }

    html+= `<div class="section"></div>`;
    html += `</br>`;

    // Section 17 - ICF
    if (
      bodyStructurePositive ||
      bodyStructureNegative ||
      bodyFunctionPositive ||
      bodyFunctionNegative ||
      activitiesPositive ||
      activitiesNegative ||
      environmentalPositive ||
      environmentalNegative ||
      shortTermGoals ||
      longTermGoals ||
      intervention ||
      equipments ||
      section17Coms
    ) {
      html += `
        <div class="label">
          <h1>17 - ICF </h1>
        </div>
        <div class="value">
        </div>
        `;
    }

    if (bodyStructurePositive) {
      html += `
   <div class="label">
        <h2>Body Structure - Positive  : ${bodyStructurePositive}</h2>
        </div>
        `;
    } 
     if (bodyStructureNegative) {
      html += `
        <div class="label">
        <h2>Body Structure - Negative  : ${bodyStructureNegative}</h2>
        </div>
    
        `;
    }

    if (bodyFunctionPositive) {
      html += `
        <div class="label">
        <h2>Body Function - Positive  : ${bodyFunctionPositive}</h2>
        </div>
  
        `;
    } 
     if (bodyFunctionNegative) {
      html += `
       <div class="label">
        <h2>Body Function - Negative : ${bodyFunctionNegative}</h2>
        </div>

        `;
    }

    if (activitiesPositive) {
      html += `
        <div class="label">
        <h2>Activities  - Positive  : ${activitiesPositive}</h2>
        </div>
        `;
    } 
     if (activitiesNegative) {
      html += `
        <div class="label">
        <h2>Activities  - Negative  : ${activitiesNegative}</h2>
        </div>

        `;
    }

    if (environmentalPositive) {
      html += `
     <div class="label">
        <h2>Environmental - Positive  : ${environmentalPositive}</h2>
        </div>

        `;
    } 
     if (environmentalNegative) {
      html += `
      <div class="label">
        <h2>Environmental - Negative  : ${environmentalNegative}</h2>
        </div>

        `;
    }

    if (shortTermGoals) {
      html += `
       <div class="label">
        <h2>Short term goals  : ${shortTermGoals}</h2>
        </div>
        `;
    }
    if (longTermGoals) {
      html += `
        <div class="label">
        <h2>Long term goals  : ${longTermGoals}</h2>
        </div>
        `;
    }

    if (intervention) {
      html += `
       <div class="label">
        <h2>Intervention  : ${intervention}</h2>
        </div>
        `;
    }

    if (equipments) {
      html += `
       <div class="label">
        <h2>Equipments / Instruments used : ${equipments}</h2>
        </div>
        `;
    }

    const recommendationOpts = Object.keys(recommendationOptions).filter(
      key => recommendationOptions[key],
    );
    if (recommendationOpts.length > 0) {
      html += `
          <div class="label"><h2> ICF =>  Recommendations  :  ${recommendationOpts.join(
            ', ',
          )}</h2>
          </div>
      `;
    }

    if (section17Coms) {
      html += `
       <div class="label">
        <h2>ICF Comments : ${section17Coms}</h2>
        </div>

        `;
    }


    html+= `<div class="section"></div>`;

    html += `
    <footer id="footer">
    Im the footer bro
    Im the footer bro
    Im the footer bro
    Im the footer bro
    </footer>
    `;

    return html;
  };

  // Request permission
  async function requestStoragePermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message:
            'Your app needs access to your device storage to save files.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage permission granted');
      } else {
        console.log('Storage permission denied', granted);
      }
    } catch (err) {
      console.warn(err);
    }
  }
  const handleSaveToLocal = async () => {
    const permissionGranted = await requestStoragePermission();
    if (permissionGranted) {
      setPermission(true);
      handleExportPdf();
      handleSharePdf();
    } else {
      setPermission(false);
      // Handle permission denied case
    }
  };
  // Saving to Local Storage Logic
  const handleExportPdf = async (attachmentUrl, directory, fileName) => {
    try {
      // Request storage permission if needed
      handleSaveToLocal();
      // Generate the HTML to convert to PDF
      const htmlContent = generateHtml(attachmentUrl, directory, fileName);

      // Create the options for the PDF conversion
      const pdfOptions = {
        html: htmlContent,
        fileName: `${firstName}_${evaluationDate.toISOString().slice(0, 10)}`,
        directory: RNHTMLtoPDF.DocumentDirectory,
      };

      // Convert HTML to PDF and save to device
      const file = await RNHTMLtoPDF.convert(pdfOptions);
      console.log(`PDF saved to ${file.filePath} + PDF NAME ${fileName}`);
    } catch (error) {
      console.error('Failed to export PDF:', error);
    }
  };

  // Sharing PDF Logic

  const handleSharePdf = async () => {
    try {
      // Generate the HTML to convert to PDF
      const htmlContent = generateHtml();

      // Create the options for the PDF conversion
      const options = {
        html: htmlContent,
        fileName: `${firstName}_${evaluationDate.toISOString().slice(0, 10)}`,
        directory: 'PDFReports',
      };

      // Convert HTML to PDF and save to device
      const file = await RNHTMLtoPDF.convert(options);

      // Share the PDF file using the Share module
      await Share.open({
        title: 'Share PDF',
        url: `file://${file.filePath}`,
        type: 'application/pdf',
        message: 'Patient Report Ready',
      });
    } catch (error) {
      console.error(error);
    }
  };

  // UI Section

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          {/* SECTION I => PATIENT INFORMATION */}
          <View style={styles.inputTextContainer}>
            <TextInput
              value={firstName}
              onChangeText={firstNameHandler}
              keyboardType="ascii-capable"
              placeholder="First Name"
              placeholderTextColor="#FFFFFF"
              style={styles.firstName}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={lastName}
              onChangeText={lastNameHandler}
              keyboardType="ascii-capable"
              placeholder="Last Name"
              placeholderTextColor="#FFFFFF"
              style={styles.lastName}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={userAge}
              onChangeText={userAgeHandler}
              keyboardType="numeric"
              placeholder="Age"
              placeholderTextColor="#FFFFFF"
              style={styles.userAge}
            />
          </View>
          <View style={styles.checkBoxContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.genderHead}>Select your Gender</Text>
              <View style={styles.checkContainer}>
                <CheckBox
                  style={styles.maleCheckBox}
                  value={male}
                  onValueChange={maleCheckBoxHandler}
                />
                <Text style={styles.maleCheckBoxText}>Male</Text>
                <CheckBox
                  style={styles.femaleCheckBox}
                  value={female}
                  onValueChange={femaleCheckBoxHandler}
                />
                <Text style={styles.femaleCheckBoxText}>Female</Text>
              </View>
            </View>
          </View>
          <View style={styles.inputFieldContainerDOB}>
            <Text style={styles.selectDOBText}>Date of Birth :</Text>
            <Text style={styles.dobText}>
              {userDob ? userDob.toLocaleDateString() : '00/00/0000'}
            </Text>
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
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={informant}
              multiline={true}
              numberOfLines={4}
              onChangeText={informantHandler}
              keyboardType="ascii-capable"
              placeholder="Informant"
              placeholderTextColor="#FFFFFF"
              style={styles.informantText}
            />
          </View>
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={AssesmentBy}
              multiline={true}
              numberOfLines={4}
              onChangeText={AssesmentByHandler}
              keyboardType="ascii-capable"
              placeholder="Assesment By"
              placeholderTextColor="#FFFFFF"
              style={styles.addressedByText}
            />
          </View>
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={diagnosis}
              multiline={true}
              numberOfLines={4}
              onChangeText={diagnosisHandler}
              keyboardType="ascii-capable"
              placeholder="Diagnosis"
              placeholderTextColor="#FFFFFF"
              style={styles.diagnosisText}
            />
          </View>
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={referredBy}
              multiline={true}
              numberOfLines={4}
              onChangeText={referredByHandler}
              keyboardType="ascii-capable"
              placeholder="Referred By"
              placeholderTextColor="#FFFFFF"
              style={styles.referredByText}
            />
          </View>
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
                        color: 'white',
                        fontSize: wp('3%'),
                        textAlign: 'center',
                      }}
                    />
                    <Picker.Item
                      label="II"
                      value="II"
                      style={{color: 'white', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="III"
                      value="III"
                      style={{color: 'white', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="IV"
                      value="IV"
                      style={{color: 'white', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="V"
                      value="V"
                      style={{color: 'white', fontSize: wp('3%')}}
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
                        color: 'white',
                        fontSize: wp('3%'),
                        textAlign: 'center',
                      }}
                    />
                    <Picker.Item
                      label="II"
                      value="II"
                      style={{color: 'white', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="III"
                      value="III"
                      style={{color: 'white', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="IV"
                      value="IV"
                      style={{color: 'white', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="V"
                      value="V"
                      style={{color: 'white', fontSize: wp('3%')}}
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
                        color: 'white',
                        fontSize: wp('3%'),
                        textAlign: 'center',
                      }}
                    />
                    <Picker.Item
                      label="II"
                      value="II"
                      style={{color: 'white', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="III"
                      value="III"
                      style={{color: 'white', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="IV"
                      value="IV"
                      style={{color: 'white', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="V"
                      value="V"
                      style={{color: 'white', fontSize: wp('3%')}}
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
                        color: 'white',
                        fontSize: wp('3%'),
                        textAlign: 'center',
                      }}
                    />
                    <Picker.Item
                      label="II"
                      value="II"
                      style={{color: 'white', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="III"
                      value="III"
                      style={{color: 'white', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="IV"
                      value="IV"
                      style={{color: 'white', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="V"
                      value="V"
                      style={{color: 'white', fontSize: wp('3%')}}
                    />
                  </Picker>
                </View>
              </View>
            </View>
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#5F7EFF',
              fontSize: wp('5%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            History
          </Text>
          {/* SECTION II => HISTORY  */}
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
                  onValueChange={() =>
                    preNatalOptionsHandler('Hyperthyroidism')
                  }
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
          {/* Section III => POST NATAL */}
          <Text
            style={{
              color: '#5F7EFF',
              fontWeight: 'bold',
              fontSize: wp('5%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Post Natal
          </Text>
          <View style={styles.checkBoxContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.ciabHead}>CIAB</Text>
              <View style={styles.ciabContainer}>
                <CheckBox
                  style={styles.ciabYesCheck}
                  value={ciabYes}
                  onValueChange={ciabYesHandler}
                />
                <Text style={styles.ciabYesCheckText}>Yes</Text>
                <CheckBox
                  style={styles.ciabNoCheck}
                  value={ciabNo}
                  onValueChange={ciabNoHandler}
                />
                <Text style={styles.ciabNoCheckText}>No</Text>
              </View>
            </View>
          </View>
          <View style={styles.weigthHeightContainer}>
            <TextInput
              value={userBirthWeight}
              onChangeText={userBirthWeightHandler}
              keyboardType="numeric"
              placeholder="Birth Weight (kg)"
              placeholderTextColor="#FFFFFF"
              style={styles.userWeightText}
            />
          </View>
          <View style={styles.weigthHeightContainer}>
            <TextInput
              value={userHeadCircumference}
              onChangeText={userHeadCircumferenceHandler}
              keyboardType="numeric"
              placeholder="Head Circumference (cm)"
              placeholderTextColor="#FFFFFF"
              style={styles.userHeightText}
            />
          </View>
          <View style={styles.inputFieldContainer3Q}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.multipleChoiceHeader}>NICU Stay</Text>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={day1To7days}
                  onValueChange={day1To7daysHandler}
                />
                <Text style={styles.checkboxLabel}>1 day - 7 days</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={week1To4weeks}
                  onValueChange={week1To4weeksHandler}
                />
                <Text style={styles.checkboxLabel}>1 week - 4 weeks</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={week4To4months}
                  onValueChange={week4To4monthsHandler}
                />
                <Text style={styles.checkboxLabel}>4 week - 4 months</Text>
              </View>
            </View>
          </View>
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={presentHistory}
              multiline={true}
              numberOfLines={4}
              onChangeText={presentHistoryHandler}
              keyboardType="ascii-capable"
              placeholder="Present History"
              placeholderTextColor="#FFFFFF"
              style={styles.presentText}
            />
          </View>
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={chiefComplaint}
              multiline={true}
              numberOfLines={4}
              onChangeText={chiefComplaintHandler}
              keyboardType="ascii-capable"
              placeholder="Chief Complaint"
              placeholderTextColor="#FFFFFF"
              style={styles.complaintText}
            />
          </View>
          {/* Section III => Subjective Assesment */}
          <Text
            style={{
              color: '#5F7EFF',
              fontWeight: 'bold',
              fontSize: wp('4.5%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Subjective Assesment
          </Text>
          <View style={styles.checkBoxContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.sightHead}>Sight </Text>
              <View style={styles.sightContainer}>
                <CheckBox
                  style={styles.intactYes}
                  value={sightIntact}
                  onValueChange={sightIntactHandler}
                />
                <Text style={styles.intactYesText}>Intact</Text>
                <CheckBox
                  style={styles.intactNo}
                  value={sightNotIntact}
                  onValueChange={sightNotIntactHandler}
                />
                <Text style={styles.intactNoText}>Not Intact</Text>
              </View>
            </View>
          </View>
          <View style={styles.checkBoxContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.hearingHead}>Hearing </Text>
              <View style={styles.hearingContainer}>
                <CheckBox
                  style={styles.intactYes}
                  value={hearingIntact}
                  onValueChange={hearingIntactHandler}
                />
                <Text style={styles.intactYesText}>Intact</Text>
                <CheckBox
                  style={styles.intactNo}
                  value={hearingNotIntact}
                  onValueChange={hearingNotIntactHandler}
                />
                <Text style={styles.intactNoText}>Not Intact</Text>
              </View>
            </View>
          </View>
          <View style={styles.checkBoxContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.speechHead}>Speech</Text>
              <View style={styles.speechContainer}>
                <CheckBox
                  style={styles.intactYes}
                  value={speechIntact}
                  onValueChange={speechIntactHandler}
                />
                <Text style={styles.intactYesText}>Intact</Text>
                <CheckBox
                  style={styles.intactNo}
                  value={speechNotIntact}
                  onValueChange={speechNotIntactHandler}
                />
                <Text style={styles.intactNoText}>Not Intact</Text>
              </View>
            </View>
          </View>
          <View style={styles.inputFieldContainer5Q}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.multipleChoiceHeader5Q}>
                Mode of Ambulation
              </Text>
              <View style={styles.checkboxWrapper}>
                <CheckBox value={carried} onValueChange={carriedHandler} />
                <Text style={styles.checkboxLabel5Q}>Carried By Parent</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={walkingSticks}
                  onValueChange={walkingSticksHandler}
                />
                <Text style={styles.checkboxLabel5Q}>Walking Sticks</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={wheelChair}
                  onValueChange={wheelChairHandler}
                />
                <Text style={styles.checkboxLabel5Q}>Wheel Chair</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={walkingWalker}
                  onValueChange={walkingWalkerHandler}
                />
                <Text style={styles.checkboxLabel5Q}>Walking Walker</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={walkingIndependently}
                  onValueChange={walkingIndependentlyHandler}
                />
                <Text style={styles.checkboxLabel5Q}>
                  Walking Independently
                </Text>
              </View>
            </View>
          </View>
          {/* Section IV =>  Developemental Milestones (months) */}
          <Text
            style={{
              color: '#5F7EFF',
              fontWeight: 'bold',
              fontSize: wp('4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Developemental Milestones (months)
          </Text>
          <View style={styles.developmentMilestoneContainer}>
            <TextInput
              value={handHolding}
              onChangeText={handHoldingHandler}
              keyboardType="numeric"
              placeholder="Hand Holding"
              placeholderTextColor="#FFFFFF"
              style={styles.developmentMileStoneText}
            />
          </View>
          <View style={styles.developmentMilestoneContainer}>
            <TextInput
              value={rolling}
              onChangeText={rollingHandler}
              keyboardType="numeric"
              placeholder="Rolling"
              placeholderTextColor="#FFFFFF"
              style={styles.developmentMileStoneText}
            />
          </View>
          <View style={styles.developmentMilestoneContainer}>
            <TextInput
              value={crawling}
              onChangeText={crawlingHandler}
              keyboardType="numeric"
              placeholder="Crawling"
              placeholderTextColor="#FFFFFF"
              style={styles.developmentMileStoneText}
            />
          </View>
          <View style={styles.developmentMilestoneContainer}>
            <TextInput
              value={sitting}
              onChangeText={sittingHandler}
              keyboardType="numeric"
              placeholder="Sitting"
              placeholderTextColor="#FFFFFF"
              style={styles.developmentMileStoneText}
            />
          </View>
          <View style={styles.developmentMilestoneContainer}>
            <TextInput
              value={standing}
              onChangeText={standingHandler}
              keyboardType="numeric"
              placeholder="Standing"
              placeholderTextColor="#FFFFFF"
              style={styles.developmentMileStoneText}
            />
          </View>
          <View style={styles.developmentMilestoneContainer}>
            <TextInput
              value={walking}
              onChangeText={walkingHandler}
              keyboardType="numeric"
              placeholder="Walking"
              placeholderTextColor="#FFFFFF"
              style={styles.developmentMileStoneText}
            />
          </View>
          {/* Section VI => General Observation */}
          <Text
            style={{
              color: '#5F7EFF',
              fontWeight: 'bold',
              fontSize: wp('4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Investigation
          </Text>
          <View style={styles.investigationContainer}>
            <TextInput
              value={mri}
              onChangeText={setMriHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="MRI"
              placeholderTextColor="#FFFFFF"
              style={styles.investigationText}
            />
          </View>
          <View style={styles.investigationContainer}>
            <TextInput
              value={eeg}
              onChangeText={setEegHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="EEG"
              placeholderTextColor="#FFFFFF"
              style={styles.investigationText}
            />
          </View>
          <View style={styles.investigationContainer}>
            <TextInput
              value={bera}
              onChangeText={setBeraHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="BERA"
              placeholderTextColor="#FFFFFF"
              style={styles.investigationText}
            />
          </View>
          <View style={styles.investigationContainer}>
            <TextInput
              value={opthalmalogy}
              onChangeText={setOpthalmalogyHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Opthalmaology"
              placeholderTextColor="#FFFFFF"
              style={styles.investigationText}
            />
          </View>
          <View style={styles.investigationContainer}>
            <TextInput
              value={xRays}
              onChangeText={setXRaysHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="XRAYS"
              placeholderTextColor="#FFFFFF"
              style={styles.investigationText}
            />
          </View>
          {/* Objective Assesment */}
          <Text
            style={{
              color: '#5F7EFF',
              fontWeight: 'bold',
              fontSize: wp('4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Objective Assesment
          </Text>
          <View style={styles.checkBoxContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.toneHead}>Tone</Text>
              <View style={styles.toneContainer}>
                <CheckBox
                  style={styles.hypotoniaYes}
                  value={hypotonia}
                  onValueChange={hypotoniaHandler}
                />
                <Text style={styles.hypotoniaYesText}>Hypotonia</Text>
                <CheckBox
                  style={styles.hypertoniaNo}
                  value={hypertonia}
                  onValueChange={hypertoniaHandler}
                />
                <Text style={styles.hypertoniaNoText}>Hypertonia</Text>
              </View>
            </View>
          </View>
          <View style={styles.objectiveAssesmentContainer}>
            <TextInput
              value={deformities}
              onChangeText={deformitiesHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Deformities"
              placeholderTextColor="#FFFFFF"
              style={styles.objectiveAssesmentText}
            />
          </View>
          <View style={styles.objectiveAssesmentContainer}>
            <TextInput
              value={contracture}
              onChangeText={contractureHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Contracture"
              placeholderTextColor="#FFFFFF"
              style={styles.objectiveAssesmentText}
            />
          </View>
          <View style={styles.objectiveAssesmentContainer}>
            <TextInput
              value={tightness}
              onChangeText={tightnessHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Tightness"
              placeholderTextColor="#FFFFFF"
              style={styles.objectiveAssesmentText}
            />
          </View>
          {/*   Tardieu's*/}
          <Text
            style={{
              color: '#5F7EFF',
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
              1. Tendonitis
            </Text>
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
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              2. Hamstrings
            </Text>
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
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              3. Hip Adductors
            </Text>
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
          </View>
          {/*   ROM */}
          <Text
            style={{
              color: '#5F7EFF',
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="10-15"
                    value="10-15"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="15-20"
                    value="15-20"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="20-25"
                    value="20-25"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Back flexion</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={backFlex}
                  onValueChange={backFlexHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="0-30"
                    value="0-30"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="30-60"
                    value="30-60"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="60-90"
                    value="60-90"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="10-15"
                    value="10-15"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="15-20"
                    value="15-20"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="20-25"
                    value="20-25"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Neck flexion</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={neckFlex}
                  onValueChange={neckFlexHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="0-15"
                    value="0-15"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="15-30"
                    value="15-30"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="30-50"
                    value="30-50"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="20-40"
                    value="20-40"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="40-60"
                    value="40-60"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="15-30"
                    value="15-30"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="30-45"
                    value="30-45"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="25-50"
                    value="25-50"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="50-75"
                    value="50-75"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="75-100"
                    value="75-100"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="15-30"
                    value="15-30"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="15-30"
                    value="15-30"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="30-45"
                    value="30-45"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="15-30"
                    value="15-30"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="30-45"
                    value="30-45"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Knee flexion</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={kneeFlex}
                  onValueChange={kneeFlexHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="0-50"
                    value="0-50"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="50-100"
                    value="50-100"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="100-150"
                    value="100-150"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="15-30"
                    value="15-30"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Hip Lateral Rotation</Text>
              <View style={styles.bigContainer}>
                <Picker selectedValue={hipLat} onValueChange={hipLatHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="0-15"
                    value="0-15"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="15-30"
                    value="15-30"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="30-45"
                    value="30-45"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="50-100"
                    value="50-100"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="100-150"
                    value="100-150"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="50-100"
                    value="50-100"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="100-150"
                    value="100-150"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="50-100"
                    value="50-100"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="100-150"
                    value="100-150"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="50-100"
                    value="50-100"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="100-150"
                    value="100-150"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="50-100"
                    value="50-100"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="100-150"
                    value="100-150"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Forearm Supination</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={forearmSup}
                  onValueChange={forearmSupHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="0-30"
                    value="0-30"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="30-60"
                    value="30-60"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="60-90"
                    value="60-90"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Forearm Pronation</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={forearmPro}
                  onValueChange={forearmProHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="0-30"
                    value="0-30"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="30-60"
                    value="30-60"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="60-90"
                    value="60-90"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="10-20"
                    value="10-20"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="20-40"
                    value="20-40"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="15-30"
                    value="15-30"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="10-20"
                    value="10-20"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="20-40"
                    value="20-40"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="40-60"
                    value="40-60"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Wrist Extension</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={wristExt}
                  onValueChange={wristExtHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="0-20"
                    value="0-20"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="20-40"
                    value="20-40"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="40-60"
                    value="40-60"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
          </View>
          {/* Modified Asworths */}
          <Text
            style={{
              color: '#5F7EFF',
              fontWeight: 'bold',
              fontSize: wp('4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Modified Asworths
          </Text>
          <View style={styles.normalContainer}>
            <View style={styles.row}>
              <Text style={styles.rowText}>Upper Extremities</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={upperExtremities}
                  onValueChange={upperExtremitiesHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="1"
                    value="1"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="2"
                    value="2"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="3"
                    value="3"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="4"
                    value="4"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="5"
                    value="5"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Lower Extremities</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={lowerExtremities}
                  onValueChange={lowerExtremitiesHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="1"
                    value="1"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="2"
                    value="2"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="3"
                    value="3"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="4"
                    value="4"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="5"
                    value="5"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
            <TextInput
                  value={asworthsComs}
                  onChangeText={asworthsComsHandler}
                  keyboardType="ascii-capable"
                  placeholder="Comments"
                  placeholderTextColor="#FFFFFF"
                  style={styles.coms}
                />
          </View>
          {/* Functional Evaluation */}
          <Text
            style={{
              color: '#5F7EFF',
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
          <View style={styles.functionalContainer}>
            <TextInput
              value={functionAbilities}
              onChangeText={functionalAbilitiesHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Functional Abilities"
              placeholderTextColor="#FFFFFF"
              style={styles.functionalText}
            />
          </View>
          <View style={styles.functionalContainer}>
            <TextInput
              value={functionLimitations}
              onChangeText={functionalLimitationsHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Functional Limitations"
              placeholderTextColor="#FFFFFF"
              style={styles.functionalText}
            />
          </View>
          {/* Single System Assesment */}
          <Text
            style={{
              color: '#5F7EFF',
              fontWeight: 'bold',
              fontSize: wp('4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Single System Assesment
          </Text>
          <View style={styles.inputFieldContainer10}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: wp('3.6%'),
                marginHorizontal: wp('5%'),
                marginVertical: wp('4%'),
              }}>
              a. Neuromuscular
            </Text>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.multipleChoiceHeader}>Initiation</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={canInitiate}
                    onValueChange={canInitiateHandler}
                  />
                  <Text style={styles.checkboxLabel}>Can Initiate</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={cantInitiate}
                    onValueChange={cantInitiateHandler}
                  />
                  <Text style={styles.checkboxLabel}>Can not Initiate</Text>
                </View>
              </View>
              <View style={styles.inputTextContainerComs}>
                <TextInput
                  value={initiateComs}
                  onChangeText={initiateComsHandler}
                  keyboardType="ascii-capable"
                  placeholder="Comments"
                  placeholderTextColor="#FFFFFF"
                  style={styles.coms}
                />
              </View>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.multipleChoiceHeader}>Sustenance</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={sustenancePoor}
                    onValueChange={sustenancePoorHandler}
                  />
                  <Text style={styles.checkboxLabel}>Poor</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={sustenanceFair}
                    onValueChange={sustenanceFairHandler}
                  />
                  <Text style={styles.checkboxLabel}>Fair</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={sustenanceGood}
                    onValueChange={sustenanceGoodHandler}
                  />
                  <Text style={styles.checkboxLabel}>Good</Text>
                </View>
              </View>
              <View style={styles.inputTextContainerComs}>
                <TextInput
                  value={sustenanceComs}
                  onChangeText={sustenanceComsHandler}
                  keyboardType="ascii-capable"
                  placeholder="Comments"
                  placeholderTextColor="#FFFFFF"
                  style={styles.coms}
                />
              </View>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.multipleChoiceHeader}>Termination</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={terminationPassive}
                    onValueChange={terminationPassiveHandler}
                  />
                  <Text style={styles.checkboxLabel}>Passive</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={terminationAbrupt}
                    onValueChange={terminationAbruptHandler}
                  />
                  <Text style={styles.checkboxLabel}>Abrupt</Text>
                </View>
              </View>
              <View style={styles.inputTextContainerComs}>
                <TextInput
                  value={terminationComs}
                  onChangeText={terminationComsHandler}
                  keyboardType="ascii-capable"
                  placeholder="Comments"
                  placeholderTextColor="#FFFFFF"
                  style={styles.coms}
                />
              </View>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.multipleChoiceHeader}>
                Control & Gradation
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={controlGradPoor}
                    onValueChange={controlGradPoorHandler}
                  />
                  <Text style={styles.checkboxLabel}>Poor</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={controlGradFair}
                    onValueChange={controlGradFairHandler}
                  />
                  <Text style={styles.checkboxLabel}>Fair</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={controlGradGood}
                    onValueChange={controlGradGoodHandler}
                  />
                  <Text style={styles.checkboxLabel}>Good</Text>
                </View>
              </View>
              <View style={styles.inputTextContainerComs}>
                <TextInput
                  value={controlGradComs}
                  onChangeText={controlGradComsHandler}
                  keyboardType="ascii-capable"
                  placeholder="Comments"
                  placeholderTextColor="#FFFFFF"
                  style={styles.coms}
                />
              </View>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.multipleChoiceHeader}>Recruitment</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={recruitmentPostural}
                    onValueChange={recruitmentPosturalHandler}
                  />
                  <Text style={styles.checkboxLabel}>Postural (So)</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={recruitmentMovement}
                    onValueChange={recruitmentMovementHandler}
                  />
                  <Text style={styles.checkboxLabel}>Movement (FF)</Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.multipleChoiceHeader}>Contraction</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={contractionConcentric}
                    onValueChange={contractionConcentricHandler}
                  />
                  <Text style={styles.checkboxLabel}>Concentric</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={contractionIsometric}
                    onValueChange={contractionIsometricHandler}
                  />
                  <Text style={styles.checkboxLabel}>Isometric</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={contractionEccentric}
                    onValueChange={contractionEccentricHandler}
                  />
                  <Text style={styles.checkboxLabel}>Eccentric</Text>
                </View>
              </View>
            </View>
            <View style={styles.row}>
              <Text
                style={{
                  marginVertical: wp('7%'),
                  marginHorizontal: wp('6%'),
                  color: 'white',
                  fontSize: wp('3%'),
                }}>
                Co-contraction
              </Text>
              <View
                style={{
                  width: wp('20%'),
                  height: hp('5%'),
                  marginHorizontal: wp('4%'),
                  marginVertical: wp('4%'),
                }}>
                <Picker
                  selectedValue={contraction}
                  onValueChange={contractionHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="Yes"
                    value="Yes"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="No"
                    value="No"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text
                style={{
                  marginVertical: wp('3%'),
                  marginHorizontal: wp('6%'),
                  color: 'white',
                  fontSize: wp('3%'),
                }}>
                Reciprocal Inhibition
              </Text>
              <View
                style={{
                  width: wp('20%'),
                  height: hp('5%'),
                  marginHorizontal: wp('4%'),
                  marginVertical: wp('4%'),
                }}>
                <Picker
                  selectedValue={reciprocalInhibition}
                  onValueChange={reciprocalInhibitionHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="Yes"
                    value="Yes"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="No"
                    value="No"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text
                style={{
                  marginVertical: wp('3%'),
                  marginHorizontal: wp('6%'),
                  color: 'white',
                  fontSize: wp('3%'),
                }}>
                Mass energy
              </Text>
              <View
                style={{
                  width: wp('20%'),
                  height: hp('5%'),
                  marginHorizontal: wp('4%'),
                  marginVertical: wp('4%'),
                }}>
                <Picker
                  selectedValue={massEnergy}
                  onValueChange={massEnergyHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="Yes"
                    value="Yes"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="No"
                    value="No"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text
                style={{
                  marginVertical: wp('3%'),
                  marginHorizontal: wp('6%'),
                  color: 'white',
                  fontSize: wp('3%'),
                }}>
                Isolated work
              </Text>
              <View
                style={{
                  width: wp('20%'),
                  height: hp('5%'),
                  marginHorizontal: wp('4%'),
                  marginVertical: wp('4%'),
                }}>
                <Picker
                  selectedValue={isolatedWork}
                  onValueChange={isolatedWorkHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="Yes"
                    value="Yes"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="No"
                    value="No"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text
                style={{
                  marginVertical: wp('3%'),
                  marginHorizontal: wp('6%'),
                  color: 'white',
                  fontSize: wp('3%'),
                }}>
                Dyanmic Stiffness
              </Text>
              <View
                style={{
                  width: wp('20%'),
                  height: hp('5%'),
                  marginHorizontal: wp('4%'),
                  marginVertical: wp('4%'),
                }}>
                <Picker
                  selectedValue={dynamicStiffness}
                  onValueChange={dynamicStiffnessHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="Yes"
                    value="Yes"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="No"
                    value="No"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text
                style={{
                  marginVertical: wp('3%'),
                  marginHorizontal: wp('6%'),
                  color: 'white',
                  fontSize: wp('3%'),
                }}>
                Extraneous Movement
              </Text>
              <View
                style={{
                  width: wp('20%'),
                  height: hp('5%'),
                  marginHorizontal: wp('4%'),
                  marginVertical: wp('4%'),
                }}>
                <Picker
                  selectedValue={extraneousMovement}
                  onValueChange={extraneousMovementHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="Yes"
                    value="Yes"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="No"
                    value="No"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
            <View style={styles.inputTextContainerComs}>
              <TextInput
                value={singleAssesment}
                onChangeText={singleAssesmentHandler}
                keyboardType="ascii-capable"
                placeholder="Comments"
                placeholderTextColor="#FFFFFF"
                style={styles.coms}
              />
            </View>
          </View>
          {/*   Multiple System assesment */}
          <Text
            style={{
              color: '#5F7EFF',
              fontWeight: 'bold',
              fontSize: wp('4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Multi System Assesment
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
              numberOfLines={2}
              value={postureAnswer}
              onChangeText={postureAnswerHandler}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="LT"
                    value="LT"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
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
              numberOfLines={2}
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
              numberOfLines={2}
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
              }}>
              1) Movement Strategies Used
            </Text>
            <View
              style={{
                flexDirection: 'column',
                marginVertical: wp('4%'),
                marginHorizontal: wp('4%'),
              }}>
              <View style={styles.checkboxWrapper}>
                <CheckBox value={momentum} onValueChange={momentumHandler} />
                <Text style={styles.checkboxLabel}>Momentum</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={overuseOfMs}
                  onValueChange={overuseOfMsHandler}
                />
                <Text style={styles.checkboxLabel}>Overuse of Ms</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={increasingBos}
                  onValueChange={increasingBosHandler}
                />
                <Text style={styles.checkboxLabel}>Increasing BOS</Text>
              </View>
            </View>
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
          </View>
          {/* Sensory System */}
          <Text
            style={{
              color: '#5F7EFF',
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
                    onValueChange={() =>
                      registrationOptionsHandler('Attention')
                    }
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
                    onValueChange={() =>
                      registrationOptionsHandler('Alertness')
                    }
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
                <CheckBox
                  value={visualOver}
                  onValueChange={visualOverHandler}
                />
                <Text style={styles.checkboxLabel}>Over Responsive</Text>
              </View>
            </View>
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
              value={sensorySystemsComs}
              onChangeText={sensorySystemComsHandler}
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
              value={sensoryProfile}
              onChangeText={sensoryProfileHandler}
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
          {/* Sensory Modulation  */}
          <Text
            style={{
              color: '#5F7EFF',
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="No"
                    value="No"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="No"
                    value="No"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="No"
                    value="No"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="-VE"
                    value="-VE"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="NO"
                    value="NO"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                <Picker selectedValue={poorRTS} onValueChange={poorRTSHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="YES"
                    value="YES"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="NO"
                    value="NO"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="NO"
                    value="NO"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                  selectedValue={hyperactivity}
                  onValueChange={hyperactivityHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="YES"
                    value="YES"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="NO"
                    value="NO"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
            <TextInput
              value={sensoryComs}
              onChangeText={sensoryComsHandler}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="NO"
                    value="NO"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                  selectedValue={visuomotorcoordination}
                  onValueChange={visuomotorcoordinationHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="YES"
                    value="YES"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="NO"
                    value="NO"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="NO"
                    value="NO"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="NO"
                    value="NO"
                    style={{color: 'white', fontSize: wp('2%')}}
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
                  selectedValue={vestibularProprioceptiveProcessing}
                  onValueChange={vestibularProprioceptiveProcessingHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="YES"
                    value="YES"
                    style={{
                      color: 'white',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="NO"
                    value="NO"
                    style={{color: 'white', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
            <TextInput
              value={sensoryBcoms}
              onChangeText={sensoryBcomsHandler}
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
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                fontSize: wp('3%'),
                marginVertical: wp('0.8%'),
                marginHorizontal: wp('6%'),
              }}
            />
          </View>
          {/* Section 16 => Other Scales */}
          <Text
            style={{
              color: '#5F7EFF',
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
              placeholderTextColor="#d6d6d6"
              style={{
                color: 'white',
                fontSize: wp('3%'),
                marginVertical: wp('0.8%'),
                marginHorizontal: wp('6%'),
              }}
            />
          </View>
          {/* Section 17 */}
          <Text
            style={{
              color: '#5F7EFF',
              fontWeight: 'bold',
              fontSize: wp('4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            ICF
          </Text>
          <View style={styles.inputFieldContainerS17}>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              1. Body Structure
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginHorizontal: wp('7%'),
                  color: 'white',
                  fontSize: wp('3%'),
                }}>
                Positive
              </Text>
              <TextInput
                value={bodyStructurePositive}
                onChangeText={bodyStructurePositiveHandler}
                keyboardType="ascii-capable"
                multiline={true}
                numberOfLines={2}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('50%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('-3%'),
                }}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginVertical: wp('1.5%'),
                  marginHorizontal: wp('7%'),
                  color: 'white',
                  fontSize: wp('3%'),
                }}>
                Negative
              </Text>
              <TextInput
                value={bodyStructureNegative}
                onChangeText={bodyStructureNegativeHandler}
                keyboardType="ascii-capable"
                multiline={true}
                numberOfLines={2}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('50%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('6%'),
                  marginVertical: wp('-3%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              2. Body Function
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginHorizontal: wp('7%'),
                  color: 'white',
                  fontSize: wp('3%'),
                }}>
                Positive
              </Text>
              <TextInput
                value={bodyFunctionPositive}
                onChangeText={bodyFunctionPositiveHandler}
                keyboardType="ascii-capable"
                multiline={true}
                numberOfLines={2}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('50%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('-3%'),
                }}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginVertical: wp('1%'),
                  marginHorizontal: wp('7%'),
                  color: 'white',
                  fontSize: wp('3%'),
                }}>
                Negative
              </Text>
              <TextInput
                value={bodyFunctionNegative}
                onChangeText={bodyFunctionNegativeHandler}
                keyboardType="ascii-capable"
                multiline={true}
                numberOfLines={2}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('50%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('6%'),
                  marginVertical: wp('-3%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              3. Activites
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginHorizontal: wp('7%'),
                  color: 'white',
                  fontSize: wp('3%'),
                }}>
                Positive
              </Text>
              <TextInput
                value={activitiesPositive}
                onChangeText={activitiesPositiveHandler}
                keyboardType="ascii-capable"
                multiline={true}
                numberOfLines={2}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('50%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('-3%'),
                }}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginVertical: wp('1%'),
                  marginHorizontal: wp('7%'),
                  color: 'white',
                  fontSize: wp('3%'),
                }}>
                Negative
              </Text>
              <TextInput
                value={activitiesNegative}
                onChangeText={activitiesNegativeHandler}
                keyboardType="ascii-capable"
                multiline={true}
                numberOfLines={2}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('50%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('6%'),
                  marginVertical: wp('-3%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              4. Environmental
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginHorizontal: wp('7%'),
                  color: 'white',
                  fontSize: wp('3%'),
                }}>
                Positive
              </Text>
              <TextInput
                value={environmentalPositive}
                onChangeText={environmentalPositiveHandler}
                keyboardType="ascii-capable"
                multiline={true}
                numberOfLines={2}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('50%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('-3%'),
                }}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginVertical: wp('1%'),
                  marginHorizontal: wp('7%'),
                  color: 'white',
                  fontSize: wp('3%'),
                }}>
                Negative
              </Text>
              <TextInput
                value={environmentalNegative}
                onChangeText={environmentalNegativeHandler}
                keyboardType="ascii-capable"
                multiline={true}
                numberOfLines={2}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('50%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('6%'),
                  marginVertical: wp('-3%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('10%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Short Term Goals
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={shortTermGoals}
                onChangeText={shortTermGoalsHandler}
                keyboardType="ascii-capable"
                multiline={true}
                numberOfLines={2}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('-10%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('10%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Long Term Goals
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={longTermGoals}
                onChangeText={longTermGoalsHandler}
                keyboardType="ascii-capable"
                multiline={true}
                numberOfLines={2}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('-10%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('10%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Intervention
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={intervention}
                onChangeText={interventionHandler}
                keyboardType="ascii-capable"
                multiline={true}
                numberOfLines={2}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('-10%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('10%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Equipments / Instruments Used
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={equipments}
                onChangeText={equipmentsHandler}
                keyboardType="ascii-capable"
                multiline={true}
                numberOfLines={2}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('-10%'),
                }}
              />
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  marginVertical: wp('6%'),
                  marginHorizontal: wp('6%'),
                  color: 'white',
                  fontSize: wp('3%'),
                }}>
                Recommendations
              </Text>
              <View style={{flexDirection: 'column'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: wp('1%'),
                    marginHorizontal: wp('5%'),
                  }}>
                  <CheckBox
                    value={recommendationOptions.Physiotherapy}
                    onValueChange={() =>
                      recommendationOptionsHandler('Physiotherapy')
                    }
                  />
                  <Text style={styles.checkboxLabel}>Physiotherapy</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: wp('1%'),
                    marginHorizontal: wp('5%'),
                  }}>
                  <CheckBox
                    value={recommendationOptions.SensoryIntegration}
                    onValueChange={() =>
                      recommendationOptionsHandler('SensoryIntegration')
                    }
                  />
                  <Text style={styles.checkboxLabel}>Sensory Integration</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: wp('1%'),
                  marginHorizontal: wp('5%'),
                }}>
                <CheckBox
                  value={recommendationOptions.OccupationalTherapy}
                  onValueChange={() =>
                    recommendationOptionsHandler('OccupationalTherapy')
                  }
                />
                <Text style={styles.checkboxLabel}>Occupational Therapy</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: wp('1%'),
                  marginHorizontal: wp('5%'),
                }}>
                <CheckBox
                  value={recommendationOptions.AquaticTherapy}
                  onValueChange={() =>
                    recommendationOptionsHandler('AquaticTherapy')
                  }
                />
                <Text style={styles.checkboxLabel}>Aquatic Therapy</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: wp('1%'),
                  marginHorizontal: wp('5%'),
                }}>
                <CheckBox
                  value={recommendationOptions.SpeechTherapy}
                  onValueChange={() =>
                    recommendationOptionsHandler('SpeechTherapy')
                  }
                />
                <Text style={styles.checkboxLabel}>Speech Therapy</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: wp('1%'),
                  marginHorizontal: wp('5%'),
                }}>
                <CheckBox
                  value={recommendationOptions.RemedialTherapy}
                  onValueChange={() =>
                    recommendationOptionsHandler('RemedialTherapy')
                  }
                />
                <Text style={styles.checkboxLabel}>Remedial Therapy</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: wp('5%'),
                  marginVertical: wp('1%'),
                }}>
                <CheckBox
                  value={recommendationOptions.BehavioralTherapy}
                  onValueChange={() =>
                    recommendationOptionsHandler('BehavioralTherapy')
                  }
                />
                <Text style={styles.checkboxLabel}>Behavioral Therapy</Text>
              </View>
            </View>
            <TextInput
              value={section17Coms}
              onChangeText={section17ComsHandler}
              keyboardType="ascii-capable"
              placeholder="Comments"
              placeholderTextColor="#FFFFFF"
              style={{
                color: 'white',
                fontSize: wp('3%'),
                marginVertical: wp('1%'),
                marginHorizontal: wp('5%'),
              }}
            />
          </View>
          {/* Save & Share Buttons  */}
          <View style={styles.inputFieldContainerSHARE}>
            <TouchableOpacity style={styles.exportBtn} onPress={handleSharePdf}>
              <Text style={styles.exportText}>Share PDF</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputFieldContainerEXPORT}>
            <TouchableOpacity
              style={styles.exportBtn}
              onPress={handleExportPdf}>
              <Text style={styles.exportText}>Save to Local Storage </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#c3dde6',
  },
  inputTextContainer: {
    width: wp('90%'),
    height: hp('6%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
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
  userAge: {
    marginVertical: wp('1%'),
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
  },
  checkBoxContainer: {
    width: wp('90%'),
    height: hp('7%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
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
    backgroundColor: '#5F7EFF',
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
    backgroundColor: '#385fff',
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
    backgroundColor: '#5F7EFF',
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
    backgroundColor: '#385fff',
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
    backgroundColor: '#5F7EFF',
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
    backgroundColor: '#5F7EFF',
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
  inputFieldContainerMCQ: {
    width: wp('90%'),
    height: hp('35%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
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
    backgroundColor: '#5F7EFF',
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
  ciabHead: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('2%'),
  },
  ciabContainer: {
    marginHorizontal: wp('8%'),
    marginVertical: hp('1%'),
    flexDirection: 'row',
  },
  ciabYesCheck: {
    marginVertical: hp('1.2%'),
    marginHorizontal: wp('2%'),
  },
  ciabYesCheckText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('1%'),
  },
  ciabNoCheck: {
    marginVertical: hp('1.2%'),
    marginHorizontal: wp('3%'),
  },
  ciabNoCheckText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: hp('1%'),
    marginHorizontal: wp('3%'),
  },
  weigthHeightContainer: {
    width: wp('90%'),
    height: hp('6%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
    borderRadius: 10,
  },
  userWeightText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('1%'),
    marginHorizontal: wp('1.5%'),
  },
  userHeightText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('1%'),
    marginHorizontal: wp('1.5%'),
  },
  inputFieldContainer3Q: {
    width: wp('90%'),
    height: hp('25%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
    borderRadius: 10,
  },
  presentText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
  },
  complaintText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
  },
  developmentMilestoneContainer: {
    width: wp('90%'),
    height: hp('6%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
    borderRadius: 10,
  },
  developmentMileStoneText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('1%'),
    marginHorizontal: wp('1.5%'),
  },
  sightHead: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('2%'),
  },
  sightContainer: {
    marginHorizontal: wp('8%'),
    marginVertical: hp('1%'),
    flexDirection: 'row',
  },
  intactYes: {
    marginVertical: hp('1.2%'),
    marginHorizontal: wp('2%'),
  },
  intactYesText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('1%'),
  },
  intactNo: {
    marginVertical: hp('1.2%'),
    marginHorizontal: wp('3%'),
  },
  intactNoText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: hp('1%'),
    marginHorizontal: wp('3%'),
  },
  hearingHead: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('2%'),
  },
  hearingContainer: {
    marginHorizontal: wp('8%'),
    marginVertical: hp('1%'),
    flexDirection: 'row',
  },
  speechHead: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('2%'),
  },
  speechContainer: {
    marginHorizontal: wp('8%'),
    marginVertical: hp('1%'),
    flexDirection: 'row',
  },
  inputFieldContainer5Q: {
    width: wp('90%'),
    height: hp('35%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
    borderRadius: 10,
  },
  multipleChoiceHeader5Q: {
    color: 'white',
    fontSize: wp('3.7%'),
    fontWeight: 'bold',
    marginVertical: wp('3.2%'),
    marginHorizontal: wp('4%'),
  },
  checkboxLabel5Q: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
  },
  investigationContainer: {
    width: wp('90%'),
    height: hp('10%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
    borderRadius: 10,
  },
  investigationText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('3%'),
    marginHorizontal: wp('1.5%'),
  },
  toneHead: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('2%'),
  },
  toneContainer: {
    marginHorizontal: wp('8%'),
    marginVertical: hp('1%'),
    flexDirection: 'row',
  },
  hypotoniaYes: {
    marginVertical: hp('1.2%'),
    marginHorizontal: wp('2%'),
  },
  hypotoniaYesText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('1%'),
  },
  hypertoniaNo: {
    marginVertical: hp('1.2%'),
    marginHorizontal: wp('3%'),
  },
  hypertoniaNoText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: hp('1%'),
    marginHorizontal: wp('3%'),
  },
  objectiveAssesmentContainer: {
    width: wp('90%'),
    height: hp('10%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
    borderRadius: 10,
  },
  objectiveAssesmentText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('3%'),
    marginHorizontal: wp('1.5%'),
  },
  bigContainerPicker: {
    width: wp('90%'),
    height: hp('160%'),
    flex: 1,
    paddingVertical: wp('5%'),
    paddingHorizontal: wp('5%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowText: {
    marginVertical: wp('2.2%'),
    color: 'white',
    fontSize: wp('2.85%'),
  },
  normalContainerPicker: {
    width: wp('90%'),
    height: hp('65%'),
    flex: 1,
    paddingVertical: wp('5%'),
    paddingHorizontal: wp('5%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
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
  inputFieldContainer3Q8: {
    width: wp('90%'),
    height: hp('85%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
    borderRadius: 10,
  },
  functionalContainer: {
    width: wp('90%'),
    height: hp('10%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
    borderRadius: 10,
  },
  functionalText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('3%'),
    marginHorizontal: wp('1.5%'),
  },
  inputFieldContainer10: {
    width: wp('90%'),
    height: hp('190%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
    borderRadius: 10,
  },
  inputTextContainerComs: {
    flexDirection: 'column',
    width: wp('85%'),
    height: hp('6%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
    borderRadius: 10,
  },
  coms: {
    color: 'white',
    fontSize: wp('3%'),
    marginVertical: wp('1%'),
    marginHorizontal: wp('1.5%'),
  },
  inputFieldContainerMs: {
    width: wp('90%'),
    height: hp('190%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
    borderRadius: 10,
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
  inputFieldContainerMCQSensory: {
    width: wp('90%'),
    height: hp('120%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
    borderRadius: 10,
  },
  inputFieldContainerMCQSensoryM: {
    width: wp('90%'),
    height: hp('230%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
    borderRadius: 10,
  },
  bigContainerSM: {
    width: wp('20%'),
    height: hp('5%'),
    marginHorizontal: wp('5%'),
    marginVertical: wp('5%'),
  },
  rowTextSM: {
    marginVertical: wp('7%'),
    marginHorizontal: wp('6%'),
    color: 'white',
    fontSize: wp('3%'),
  },
  inputFieldContainerS16: {
    width: wp('90%'),
    height: hp('60%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
    borderRadius: 10,
  },
  inputFieldContainerS17: {
    width: wp('90%'),
    height: hp('180%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
    borderRadius: 10,
  },
  normalContainer: {
    width: wp('90%'),
    height: hp('30%'),
    flex: 1,
    paddingVertical: wp('5%'),
    paddingHorizontal: wp('5%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
    borderRadius: 10,
  },
  inputFieldContainerEXPORT: {
    width: wp('80%'),
    height: hp('5%'),
    marginHorizontal: wp('10%'),
    flexDirection: 'column',
    backgroundColor: '#10006eff',
    borderRadius: 10,
    marginBottom: 40,
    marginRight: 50,
    elevation: 10,
  },
  inputFieldContainerSHARE: {
    width: wp('80%'),
    height: hp('5%'),
    marginVertical: wp('10%'),
    marginHorizontal: wp('10%'),
    flexDirection: 'column',
    backgroundColor: '#5F7EFF',
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

export default Phase_1_Assesment_Form;
