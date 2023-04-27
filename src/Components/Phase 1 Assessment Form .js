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
import Logo from '../assets/logo.jpg';

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
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [fatherAge, setFatherAge] = useState('');
  const [motherAge, setMotherAge] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
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
  const fatherNameHandler = text => {
    setFatherName(text);
  };
  const motherNameHandler = text => {
    setMotherName(text);
  };
  const fatherAgeHandler = text => {
    setFatherAge(text);
  };
  const motherAgeHandler = text => {
    setMotherAge(text);
  };
  const contactNumberHandler = text => {
    setContactNumber(text);
  };
  const addressHandler = text => {
    setAddress(text);
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
  };
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
  const [movementStratOptions, setMovementStratOptions] = useState({
    Momentum: false,
    OveruseofMs: false,
    IncreasingBos: false,
  });

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

  const movementStratOptionsHandler = movementStratOption => {
    setMovementStratOptions({
      ...movementStratOptions,
      [movementStratOption]: !movementStratOptions[movementStratOption],
    });
  };
  const movementStratValues = [];
  Object.entries(movementStratOptions).forEach(([key, value]) => {
    if (value) {
      movementStratValues.push(key);
    }
  });

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

  const [activitiesParticipation, setactivitiesParticipation] = useState('');
  const [activitiesLimitation, setactivitiesLimitation] = useState('');

  const [environmentalPersonal, setenvironmentalPersonal] = useState('');
  const [environmentalContextual, setenvironmentalContextual] = useState('');

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

  const activitiesParticipationHandler = activitiesParticipation => {
    setactivitiesParticipation(activitiesParticipation);
  };

  const activitiesLimitationHandler = activitiesLimitation => {
    setactivitiesLimitation(activitiesLimitation);
  };

  const environmentalPersonalHandler = environmentalPersonal => {
    setenvironmentalPersonal(environmentalPersonal);
  };

  const environmentalContextualHandler = environmentalContextual => {
    setenvironmentalContextual(environmentalContextual);
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
        #footer{width:100%; height:50px;}
        #img{height:35%;margin-left:2rem;margin-right:2rem;margin-top:-2rem;align-items:center;justify-content:center;}
        </style>
        </head>
        <body>`;

    html += `
        <img
        alt="display hoja plox"
        id="img"
        src="data:image/png;base64,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qvrvf//b3Nzc0dGRmZlpb29/8eLF77//3tHRMSQkhEajJScnnz17NiYm5vvvvz916lRxcXFra2t5eXltbW1OTk5kZORPP/3EYDCOHj169uxZZ2dnf39/Go22b9++3377TSgUpqWlCQSC1tZWNpv9zTffSKXSmzdvhoSE/P3333Q6PSUlZdq0aVKp1MzMTCqV0mi0adOm3b59297evqGh4fr162FhYceOHZPJZD4+Pm+99dbMmTO5XO7QfTTGAoE7AACMaxC4g/GDjtCl5gqEUHtv9yNeEQzafXkHrhyb47X5/Splh0I6zcHbztwS93Iajdar7MMqviOEBJK2B1wCdO40lDch0MaVL2kt72w6WXezu0/uY+VAHfFrkihkSqQyI6TukPr3v/9dVFRUVFRUUFBQVVWFdXjj7N69OyQkBLcwLy+vvr7+ww8/vHLlyunTp+Pi4nJzc0tKSjgczhtvvNHW1sZms0UiUWdnp7W1dU1NTWBgYEhIyMWLF/38/DZs2ODu7v6f//xn/fr1K1asKC4ubm5uNjMzq6urk8lk1dXVYWFhQqFQLpcrFIq5c+cmJCRglS49PDzS09OtrKwaGxsZDEZERMQTTzyRlpZ2/fp1Ly+vKVOm5Obmcjic2traF154Yfr06dirjh079sgjj4SGhlZXV2/fvv3UqVPV1dVTp0596qmnzp07V1VV5evr+9JLL0ml0vb2dolEolQqFQqFTCaLjIz866+/rK2t586d29zcvHz58ra2tqqqqr6+vpqaGnV2zSgHqTIAAAAAGBemO/hg2TL9KuWp+lu4tUw643GfO/WLfii/RNrCWr+ZtiwL7HFBe+2vguv67HeKnceXUavfDH3Im+tworbgmUs/vnLl8PHagroeEen2KoQEktaclqorrfx2eY8+u8C4urpSrLW2tt6/fz/pFKRKpdLW1hYhJJPJzMzMzM3NQ0ND/f39RSIRQkgkEslkMhqNJhaLvb2958+fLxaLU1NT+/v7sVSWrq4ulUrV29uLEKqrq3vuued++OGH7OzsZ599tra21szMzMfHx9/fn06na9Zld3BwiImJefXVV+Pj4wMDA7Fklf7+fhaLhTVbW1uLELKxscGeYszNzVUqlUQisbW1lUqlLBZLvev+/n46nY4ds0wmYzAYWCJNR0dHf38/tgF2tNi+EhISurq6Pv300w0bNuh/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"
        />
        `;

    // Section I => Patient Details
    if (
      firstName ||
      fatherName ||
      motherName ||
      fatherAge ||
      motherAge ||
      address ||
      contactNumber ||
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
    if (fatherName.trim()) {
      html += `
      <div class="label">
      <h2>Father's Name - ${fatherName}</h2>
      </div>
      `;
    }
    if (fatherAge.trim()) {
      html += `
      <div class="label">
      <h2>Father's Age - ${fatherAge}</h2>
      </div>
      `;
    }

    if (motherName.trim()) {
      html += `
      <div class="label">
      <h2>Mother's Name - ${motherName}</h2>
      </div>
      `;
    }

    if (motherAge.trim()) {
      html += `
      <div class="label">
      <h2>Mother's Age - ${motherAge}</h2>
      </div>
      `;
    }

    if (address.trim()) {
      html += `
      <div class="label">
      <h2>Address  - ${address}</h2>
      </div>
      `;
    }

    if (contactNumber.trim()) {
      html += `
      <div class="label">
      <h2>Contact Number  - ${contactNumber}</h2>
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
      <h2>Assessed by: ${AssesmentBy.trim()}</h2>
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

    html += `<div class="section"></div>`;

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

    html += `<div class="section"></div>`;

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

    html += `<div class="section"></div>`;

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

    html += `<div class="section"></div>`;
    html += `</br>`;

    // Section 4

    if (handHolding || rolling || crawling || sitting || standing || walking) {
      html += `
      <div class="label">
        <h1>4. Developemental Milestones (Months)</h1>
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
    html += `<div class="section"></div>`;

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

    html += `<div class="section"></div>`;
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

    html += `<div class="section"></div>`;
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
          <h2>Tendoachilles RT - R1  :${tasRTR1}</h2></div><div class="value">
          </div>
          </div>
        `;
    }
    if (tasRTR2.trim()) {
      html += `
      <div class="label">
      <h2>Tendoachilles RT - R2  :${tasRTR2}</h2></div>

    `;
    }
    if (tasLTR1.trim()) {
      html += `
      <div class="label">
      <h2>Tendoachilles LT - R1  :${tasLTR1}</h2>
      </div>
    `;
    }
    if (tasLTR2.trim()) {
      html += `
      <div class="label">
      <h2>Tendoachilles LT - R2  :${tasLTR2}</h2>
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
    html += `<div class="section"></div>`;

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

    html += `<div class="section"></div>`;
    html += `</br>`;

    // Section 9 => Modified Ashworth's
    if (upperExtremities || lowerExtremities || asworthsComs) {
      html += `
        <div class="label">
          <h1>9. Modified Ashworth's</h1>
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

    if (asworthsComs) {
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

    html += `<div class="section"></div>`;
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

    html += `<div class="section"></div>`;
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

    html += `<div class="section"></div>`;
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

    html += `<div class="section"></div>`;
    html += `</br>`;

    if (
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

    const movementStratOpts = Object.keys(movementStratOptions).filter(
      key => movementStratOptions[key],
    );
    if (movementStratOpts.length > 0) {
      html += `
          <div class="label"><h2>  Movement Strategies Used :  ${movementStratOpts.join(
            ', ',
          )}</h2>
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

    html += `<div class="section"></div>`;
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
        <h2> Sensory Systems => Registraion Options  :  ${registrationOpts.join(
          ', ',
        )}</h2>
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

    html += `<div class="section"></div>`;
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

    html += `<div class="section"></div>`;
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

    html += `<div class="section"></div>`;
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

    html += `<div class="section"></div>`;
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

    html += `<div class="section"></div>`;
    html += `</br>`;

    // Section 17 - ICF
    if (
      bodyStructurePositive ||
      bodyStructureNegative ||
      bodyFunctionPositive ||
      bodyFunctionNegative ||
      activitiesParticipation ||
      activitiesLimitation ||
      environmentalPersonal ||
      environmentalContextual ||
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
        </div>ICF
  
        `;
    }
    if (bodyFunctionNegative) {
      html += `
       <div class="label">
        <h2>Body Function - Negative : ${bodyFunctionNegative}</h2>
        </div>

        `;
    }

    if (activitiesParticipation) {
      html += `
        <div class="label">
        <h2>Activities  - Participation : ${activitiesParticipation}</h2>
        </div>
        `;
    }
    if (activitiesLimitation) {
      html += `
        <div class="label">
        <h2>Activities  -  Limitation  : ${activitiesLimitation}</h2>
        </div>

        `;
    }

    if (environmentalPersonal) {
      html += `
     <div class="label">
        <h2>Environmental - Personal  : ${environmentalPersonal}</h2>
        </div>

        `;
    }
    if (environmentalContextual) {
      html += `
      <div class="label">
        <h2>Environmental - Contextual : ${environmentalContextual}</h2>
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

    html += `<div class="section"></div>`;

    // html += `
    // <footer id="footer">
    // Im the footer bro
    // Im the footer bro
    // Im the footer bro
    // Im the footer bro
    // </footer>
    // `;

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
          <View style={styles.inputTextContainer}>
            <TextInput
              value={fatherName}
              onChangeText={fatherNameHandler}
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
          <View style={styles.inputTextContainer}>
            <TextInput
              value={fatherAge}
              onChangeText={fatherAgeHandler}
              keyboardType="numeric"
              placeholder="Father's Age"
              placeholderTextColor="#FFFFFF"
              style={{
                marginVertical: wp('1%'),
                color: 'white',
                fontSize: wp('3.5%'),
                marginHorizontal: wp('1.5%'),
              }}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={motherName}
              onChangeText={motherNameHandler}
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
          <View style={styles.inputTextContainer}>
            <TextInput
              value={motherAge}
              onChangeText={motherAgeHandler}
              keyboardType="numeric"
              placeholder="Mother's Age"
              placeholderTextColor="#FFFFFF"
              style={{
                marginVertical: wp('1%'),
                color: 'white',
                fontSize: wp('3.5%'),
                marginHorizontal: wp('1.5%'),
              }}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={address}
              onChangeText={addressHandler}
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
          <View style={styles.inputTextContainer}>
            <TextInput
              value={contactNumber}
              onChangeText={contactNumberHandler}
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
              placeholder="Assessed by"
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
              color: '#169cc4',
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
              color: '#169cc4',
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
              color: '#169cc4',
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
          {/* Section IV =>  Developemental Milestones (Months) */}
          <Text
            style={{
              color: '#169cc4',
              fontWeight: 'bold',
              fontSize: wp('4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Developemental Milestones (Months)
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
              color: '#169cc4',
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
              color: '#169cc4',
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
              color: '#169cc4',
              fontWeight: 'bold',
              fontSize: wp('4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Modified Ashworth's
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
              color: '#169cc4',
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
              color: '#169cc4',
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
              color: '#169cc4',
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
                  value={movementStratOptions.Momentum}
                  onValueChange={() => movementStratOptionsHandler('Momentum')}
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
                  value={movementStratOptions.OveruseofMs}
                  onValueChange={() =>
                    movementStratOptionsHandler('OveruseofMs')
                  }
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
                  value={movementStratOptions.IncreasingBos}
                  onValueChange={() =>
                    movementStratOptionsHandler('IncreasingBos')
                  }
                />
                <Text style={styles.checkboxLabel}>Increasing Bos</Text>
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
              color: '#169cc4',
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
                Participation
              </Text>
              <TextInput
                value={activitiesParticipation}
                onChangeText={activitiesParticipationHandler}
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
                Limitation
              </Text>
              <TextInput
                value={activitiesLimitation}
                onChangeText={activitiesLimitationHandler}
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
                Personal
              </Text>
              <TextInput
                value={environmentalPersonal}
                onChangeText={environmentalPersonalHandler}
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
                Contextual
              </Text>
              <TextInput
                value={environmentalContextual}
                onChangeText={environmentalContextualHandler}
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
    backgroundColor: '#169cc4',
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
    backgroundColor: '#169cc4',
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
    backgroundColor: '#169cc4',
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
    backgroundColor: '#169cc4',
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
    backgroundColor: '#169cc4',
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
    backgroundColor: '#169cc4',
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
  inputFieldContainer3Q8: {
    width: wp('90%'),
    height: hp('85%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  functionalContainer: {
    width: wp('90%'),
    height: hp('10%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
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
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  inputTextContainerComs: {
    flexDirection: 'column',
    width: wp('85%'),
    height: hp('6%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
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
    backgroundColor: '#169cc4',
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
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  inputFieldContainerMCQSensoryM: {
    width: wp('90%'),
    height: hp('230%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
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
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  inputFieldContainerS17: {
    width: wp('90%'),
    height: hp('180%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
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
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  inputFieldContainerEXPORT: {
    width: wp('80%'),
    height: hp('5%'),
    marginHorizontal: wp('10%'),
    flexDirection: 'column',
    backgroundColor: '#0a5e78',
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
    backgroundColor: '#169cc4',
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
