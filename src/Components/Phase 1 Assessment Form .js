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
  Image,
  Platform,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {responsiveFontSize,} from 'react-native-responsive-dimensions';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';
import {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

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

  const [fatherAge, setFatherAge] = useState('');
  const [motherAge, setMotherAge] = useState('');
  const [workLoad, setWorkLoad] = useState();
  const [stresslevel, setStressLevel] = useState();
  const [consanguinity, setConsanguinity] = useState(false);
  const [nonConsanguinity, setNonConsanguinity] = useState(false);
  const [children, setChildren] = useState('');

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

  const motherNameHandler = text => {
    setMotherName(text);
  };
  const fatherAgeHandler = text => {
    setFatherAge(text);
  };

  const workLoadHandler = work => {
    setWorkLoad(work);
  };

  const stressLevelHandler = stress => {
    setStressLevel(stress);
  };

  const consanguinityHandler = () => {
    setConsanguinity(true);
    setNonConsanguinity(false);
  };

  const nonConsanguinityHandler = () => {
    setNonConsanguinity(true);
    setConsanguinity(false);
  };

  const childrenHandler = text => {
    setChildren(text);
  };

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

  const [reasonNicuStay, setReasonNicuStay] = useState('');

  const reasonNicuStayHandler = reasonNicuStay => {
    setReasonNicuStay(reasonNicuStay);
  };

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

  // section IV => Developemental Milestones(months)

  const [handHolding, setHandHolding] = useState('');
  const [rolling, setRolling] = useState('');
  const [crawling, setCrawling] = useState('');
  const [sitting, setSitting] = useState('');
  const [standing, setStanding] = useState('');
  const [walking, setWalking] = useState('');
  const [fineMotor, setFineMotor] = useState('');
  const [communications, setCommunications] = useState('');
  const [socialBehavior, setSocialBehavior] = useState('');

  const socialBehaviorHandler = socialBehavior => {
    setSocialBehavior(socialBehavior);
  };

  const communicationsHandler = coms => {
    setCommunications(coms);
  };

  const fineMotorHandler = fineMotor => {
    setFineMotor(fineMotor);
  };

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
  const [selectedImageMRI, setselectedImageMRI] = useState();
  const [clickedImageMRI, setclickedImageMRI] = useState();

  const [eeg, setEeg] = useState('');
  const [selectedImageEEG, setselectedImageEEG] = useState();
  const [clickedImageEEG, setclickedImageEEG] = useState();

  const [bera, setBera] = useState('');
  const [selectedImageBERA, setselectedImageBERA] = useState();
  const [clickedImageBERA, setclickedImageBERA] = useState();

  const [opthalmalogy, setOpthalmalogy] = useState('');
  const [selectedImageOPT, setselectedImageOPT] = useState();
  const [clickedImageOPT, setclickedImageOPT] = useState();

  const [xRays, setXRays] = useState('');
  const [selectedImageXRAYS, setselectedImageXRAYS] = useState();
  const [clickedImageXRAYS, setclickedImageXRAYS] = useState();

  const setMriHandler = mri => {
    setMri(mri);
  };

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  // MRI
  const openCameraMRI = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setclickedImageMRI(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };

  const openGalleryMRI = async () => {
    const result = await launchImageLibrary(options);
    setselectedImageMRI(result.assets[0].uri);
  };

  //  EEG

  const openCameraEEG = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setclickedImageEEG(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };

  const openGalleryEEG = async () => {
    const result = await launchImageLibrary(options);
    setselectedImageEEG(result.assets[0].uri);
  };

  // BERA
  const openCameraBERA = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setclickedImageBERA(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };

  const openGalleryBERA = async () => {
    const result = await launchImageLibrary(options);
    setselectedImageBERA(result.assets[0].uri);
  };

  // opthalmalogy
  const openCameraOPT = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setclickedImageOPT(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };

  const openGalleryOPT = async () => {
    const result = await launchImageLibrary(options);
    setselectedImageOPT(result.assets[0].uri);
  };

  // XRAYS

  const openCameraXRAYS = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setclickedImageXRAYS(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };

  const openGalleryXRAYS = async () => {
    const result = await launchImageLibrary(options);
    setselectedImageXRAYS(result.assets[0].uri);
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
  const [deformitiesR, setDeformitiesR] = useState('');
  const [deformitiesL, setDeformitiesL] = useState('');
  const [contractureR, setContractureR] = useState('');
  const [contractureL, setContractureL] = useState('');
  const [tightnessR, setTightnessR] = useState('');
  const [tightnessL, setTightnessL] = useState('');

  const hypotoniaHandler = hypotonia => {
    sethypotonia(hypotonia);
    sethypertonia(false);
  };

  const hypertoniaHandler = hypertonia => {
    sethypertonia(hypertonia);
    sethypotonia(false);
  };

  const deformitiesRHandler = deformities => {
    setDeformitiesR(deformities);
  };

  const deformitiesLHandler = deformities => {
    setDeformitiesL(deformities);
  };

  const contractureRHandler = contracture => {
    setContractureR(contracture);
  };

  const contractureLHandler = contracture => {
    setContractureL(contracture);
  };

  const tightnessRHandler = tightness => {
    setTightnessR(tightness);
  };

  const tightnessLHandler = tightness => {
    setTightnessL(tightness);
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
    setIsolatedWork(isolated);
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

  const [tactileUnder, setTactileUnder] = useState(false);
  const [tactileOver, setTactileOver] = useState(false);

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

  // Assessor section
  const [accessorName, setAccessorName] = useState('');
  const [accessorDesignation, setAccessorDesignation] = useState('');

  const [adl, setAdl] = useState('');

  const adlHandler = adl => {
    setAdl(adl);
  };

  const accessorNameHandler = accessorName => {
    setAccessorName(accessorName);
  };

  const accessorDesignationHandler = accessorDesignation => {
    setAccessorDesignation(accessorDesignation);
  };

  // Generating html
  const generateHtml = () => {
    let html = `
    <html>
    <head>
      <style>
      body {
        font-family: Arial;
        padding: 6px;
      }
      h1 {
        font-size: 1.2em;
        margin-bottom: 5px;
      }
      h2 {
        font-size: 1em;
        margin-bottom: 1px;
      }
      .section {
        margin-bottom: 1px;
        border-bottom: 0px solid #ccc;
        padding-bottom: 1px;
        padding-top: 2px;
      }
      .label {
        font-weight: bold;
        margin-bottom: 1px;
        color: #555;
        font-size: 1em;
      }
      .value {
        font-weight: bold;
      }
      .image-container {
        width: 100%;
        max-width: 100%;
        height: auto;
      }
      #footer {
        width: 100%;
        height: 50px;
      }
      #image {
        width: 20%;
        height: auto;
        margin-left: 2rem;
        margin-right: 2rem;
        margin-top: 2rem;
      }
      </style>
    </head>
    <body>`;

    html += `
    <div class="image-container">
    <img 
    alt=""
    src="data:image/jpeg;base64,/9j/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAAxyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZGl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHZpZXcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrAPAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECegKEAo4CmAKiAqwCtgLBAssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwBP4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggiWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mDUANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDyUPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTIxNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRGncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jCiM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEooijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0MLUEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4yDkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeRiJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUFGbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U21UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9ZZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuWi/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUehtqImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKucK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTRNPG1EnUy9VO1dHWVdbY11zX4Nhk2OjZbNnx2nba+9uA3AXcit0Q3ZbeHN6i3ynfr+A24L3hROHM4lPi2+Nj4+vkc+T85YTmDeaW5x/nqegy6LzpRunQ6lvq5etw6/vshu0R7ZzuKO6070DvzPBY8OXxcvH/8ozzGfOn9DT0wvVQ9d72bfb794r4Gfio+Tj5x/pX+uf7d/wH/Jj9Kf26/kv+3P9t////7gAhQWRvYmUAZEAAAAABAwAQAwIDBgAAAAAAAAAAAAAAAP/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQEBAQEBAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8IAEQgB9APoAwERAAIRAQMRAf/EAUQAAQABBAMBAQEAAAAAAAAAAAAIBgcJCgMEBQsCAQEBAAEFAQEBAAAAAAAAAAAAAAYDBAUHCAIBCRAAAAYCAgABCAgEBgEEAgMAAgMEBQYHAQgACRAREhQVNhc3CjBAUGATFjgZICExGCIyMzQ1OaCQIyQaJUUmJ0gRAAAGAQMCAwQDCQcOCAkFEQECAwQFBgcAEQgSEyExFEEiFRYQUQlhcdEyIxeX1zhQgZGztHZ3IDBAYKGxwUIzc5MktbZSYnJDYyUYeJKyU4M0dZY3t6DwRDbWkPGio8PTdISUZZUmxofnmKgSAAIBAwMCAwIIBg4FCQQIBwECAxESBAAhBRMGMUEiURQQYXGxMpQ2B0Ijc9PUFSBAUGCBkaFSYnKyM3R1MMGzJBbRgqLCQ1NjkzWgNLSFkJKEpOQlJgjh8dKDw3YX/9oADAMBAQIRAxEAAADf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABESTa/oi7xk8odtMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFUs1tQV5iciUH2+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCqWa2oK8xORKD7fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH8+/IPZqDzQxEy9KnXAAAAAAAAAAAAAAAAAAAAAAAAAEKpZragrzE5EoPt8a4O6+ZM22rd8QOluvLkWOWqClV8OrQqChd4/JjrXMrrTeEMJNB6loXVB3mPulYZa+WIkUJpXr7IrCdn4Mdr6A8Gtb5b9dbloq7x34fbOZLCV5a33o07iQuGkkp8BLNfPcfNsZ83GMruvdxyFw0jj1mozSVe3ra2u4lSKG0bc2WTuCbX8Ota+PUp2ayeBuRZZX3qNxX1nkpoxicd7z7AAAAAAAAApWpad49yndjFdOdMaOvQ35ybL2u+2NnnQvVPJ8+gAAAAAAAAAAAAAAAAAAAAAAAAQqlmtqCvMTkSg+3/AB6lLXd3RzNb+6s6mt7u+uHk9KXWN63qnbi9xk5IrPO5TubIZeNeJUp2TyuAom6spWx6YWJy8azO6y3lFnOxeKcihUd8zG/bp1ZA4WUWryGI5HmQ+FlEfczG85Gqd+QVluvapoXFp7y0g5LddS4jszs9ksH1PXnwa9nNuKz3FPPtUSBxeYuJjs9ZPMRnw/ficMWncFpXANhbTfSUg8RIQAAAAAAABS9zY6XXQfC197LIbc2hO4KJu7H57nW35YRdnfNXq5bfO/zwz+nU/YfsYAAAAAAAAAAAAAAAAAAAAD+Pg/r6AAIVSzW1BXmJyJQfb4AAAAAFGXNnQN5jb44rPAAAARYz8TkDh5Ha6/xF4sZnPV8VAIxZ2KydwUqAAAAi3n4nKTASyMeci0h8NJfV8VAAAAAAAABr37T510+uyPzY9G2v96Div9Opd4CdfOV7y/HbuXmB8+zme61xt+k2b3W+/AKSubGn6tC5tjlQAAAAAAAAAAAAAAAAB1fvjBpsnSOK3Y/PN0o5MdsbSvX/AH6dcACFUs1tQV5iciUH2+NDzrP8+9qLQPW8bc3GbW5HCzGjM4xaz7UU6InsOD0pgl4sVIbX5SOTTjE6xwzTWmR6E7QvRi85FCRwvOjqfoHDfsvSXF68XhxmagVLte5g9b7o1JuiuNdlDRvVPtU63EWSy0evjiZBH/MRq5Njl68tMjjTnGrM2Wrt7Y0pxq6WsdmNksrgakoXdJ17WJElguQuGbN/fz1k0g20gAAAAAAAB+fvnH7KNdzzjU/1fNwcqawvYn5gcEeyO5tx1+qucKB9A6a/RnBOE/cPN0x9Z7L3s+af0lv3jpCOP740zt8cL49ZzDPoMcr/AKIVPa3wAAAAAAAAAAAAAAAAAt3f4T54Ha/5UXais3+g1yP+mffp3AAEKpZragrzE5EoPt8ayu8eXrp2d7U9tf1Zb3Pq07iEMqgUnsDK6ZrW9+MPJIwyCHVpb3dfWWTpG4tq6s8lbXIYXONqjoHBhtjn3oe6d+8RIo85qMZn9Y7xwj7S0TXtpf3QsMvZDKYKM+fh+Q6FbRjdnIpKDAS+/wBh5FTde19qnUt/d2FzbHLYY9oaHyAQraV1LDKwxlWv/Yp1Z0xDZWTSD7OAAAAAAAAGKLYOmdHPrb89dvDl3uLMprvd2s7vPlu5GEzGxvqHpHxfdS5drfWky8duLjsvVtrlAI85SI/PX6x/Liyu24LvhcW/qZlW1juMAAAAAAAAAAAAAAAAAUtcWHz7+0vyb9Re/Qa4p/V7t07gACFUs1tQV5iciUH2+AAAAAAAAAAAAAAAAAAAAAAAAAAAAANTve3JOtd1XwHnU5e7C3QOf+7z7YDLRPSw6P8Az+iTO9X5ztKde7VWjOuu75rADBLOtCebn4tpv9k/nPmo0J1xuv8ALP6A8vz2PBr2eGyeaS6mO9xpzcXuDUyGeXW3QNQULvEHLdPw/wBh6VujH5vPKI7N1/Nic2ZqIdvO6uEmGPKdacoq9ssykA3br0bP54lXh5TsQan6WperZ4ZJ7o7p2tbwK9pXFW7zP6/3h7lG682pb4Y9h872FvLS9eOzlsLv1m619uisKVX57XZ35OVfnpTu28S/o5r7TnmK10jgWyBqzs2YsdnYhVLNbUFeYnIlB9vgAAAAAAAAAAAAAAAAAAAAAAAAAAAACzGUj+ErYuhcu2v91Smw0wGrRunj7WK604O5pFEeSFTX6A/C36xz7j2yAKVr2WBOeaYzyQbbvzzezvyrsrIYz9DPh/8AWCTeGmI1tdn8xakvSPD/ANA3lP8ASHzPfjQJ64/Nnbh5w7m2O9P9PRKkUM+e32f+XV2sTl9ubm7t/TV6k4LyD693Lu1cxd8aGvYP5hQs2DrncL5H7/1t958kx3zEZ+jDxd+q+nJ0Pw9DGYQP6BXIX6W0tWtfnr9c/mdlagO8NyLnTtnA7srQOnf1F+dH0X+M/wBXpE4GZ6v2yOds8sH3RJCxzfz4+tPy9szMItuicjfovUPuy0gewPzunZDN474PIP6E9+nXhVLNbUFeYnIlB9vjC9s7R2VfX23sYs81PJ7AS2OOci8q49L7k2OWoC9xnV9eJYR2ZYP9qaEnXEth9T3RpyvaZHIVs7Cts/RlwrLK+rSrXDtbzIfDNmYUtn6N/RMGNzSOmajOT+B7Xwi7T0Pktg+0I6ZuL1FSuKIuLTIND9jWFy8do25sqAvMXdXHZyubW992jeXSsMpASX65kHhpN41WhNyLTsAAAAADzKNXvVKfL6+C099h4f5aI5GI3sYDWG3Tx7q5dffm/wDy4o+9rjZv0GOOP1amjHtggYhJxpDr3dfIdD9g6ufR/GOvT0ZxDtZcY/opsy6f6/EaM1DMVGy9P5gdZbsxJTbTOm12V+amwPzP2dt8c/8AdVK3eN+bh3B+QU74Tube55O/SDX727zhNeMbGydwbaGjF1N+bmOvY2pPop8Rfq3jqlkEtJlsNLaHyL5//aX5O5xYB1Rurclfojx/fOiv19+ZmK/ZmlfoWcN/rNhtlultUfrj8z8oerepM5OlekctsN3BITCzfj923z3ewPyYqL7JvoI8e/qLyfPWgL2B+Y1kKkK+iNx9+stX2+ShVLNbUFeYnIlB9v0Bd2Grjvzki/GFlfL6odH5Ui3IIfITE56prbIUtXtJMYOU5wtV761WOgeQb1YmSUbc2F/cTIc9GpOhNYbe/KFwbLJcvmtcqzyGcvVG/wDWD3rytPWJ7AiVIYhkRhuxso0C21qLdFcb5J4RtCm7rGyTwUqxaT3VE8YnsDH/ADDW+SyD7UxjTnVkg8LKbeZDB0hV+bbfPPX2H3ZOlLM5LC9P3TzRaw3pdSwyoAAAAHU8+oWwLYd5pBHLw5vCetUoaou6OPMH21NAfQ55S/Sm4FhmP0+xlzcP+dR2L+S/iT/W08dMdJ/QK5L/AFE9GndDrevGrNsrlXJZjNlVBi81G6Y611BOtPzjlTAtwfQO48/T+q7XIRKz8E1lNsc035wk9yOYqQaRvb35ebDPKHaW3JonuWl7nHfNv71/HCa+uN8b7nJP6S8vz2Px98aMPUv5xY+Niac+htxL+st8sfnhiHmej9FvuH8ns9+i+3Ny3l/vX8/fmlf1D+fWEnevHm+fxH+vs14vK9RzoviTDrtfmK3UkwV7IvsPfU41/T2WeAk/z1+0Pyqqaxyf0DuPP1F7Xn3oB9l/l9ZbNRz6IXD/AOrlXWuRhVLNbUFeYnIlB9vgAAAAAAUZc2dX293yfPoHj1KXH98+5SrgAAAAAAAAD8lG3NnWlteAAAAAU3bXuDfmbr6Xs71tR0gTkkmtYZbP5sx1SiEZboHtHCfLNLbH0R6JrOyv9a3d/IGrx1PwfeSNbQ+kPwb+sPu2+QEIpTrXHtlYvnmgO8hw+vGkv1X+euFXc3Hu87xj+oOXfXfRehp0t+ZWNvZOjfpJcafsDGDJRv5+nb/5QbI/M/bu2JpHs+la+M+bh3L+PE1MBtvfg4z/AE85fnsfz780ZevPzQxzzvUf0UeGP1vvFjs6ImZ6D/PM7i/JfLLq7e+7/wAo/pPx/fmhN2P+asG6en/orcn/AK0YoMxEs3cW2VaDJx3Xd3fyXq6764J3OOT/ANTM4euN8fPb7X/KH3MJk/oM8gfqjyfPugB19+WtkpfGfokcM/rJWFnlYVSzW1BXmJyJQfb9v7vH4Q9p6HtZkcLNaKbD9vx6stkMVd6wykmsFKolSKHVnbXfr06t07HKRtzMdvdjM3jbnGqrQ5HD5mtYb2nnE5/go2voKTGDk9r7/E19aZH16VaGEmhWfzUPQ+HLZej8zWst56+W4+bb64eS3TsMtZnKYK4VjlKooXloMngofSGIbBunujdYje/KOTKCbY/Xqjcmwy8b85FM72pug8Au3+dLT5DE5j9ZbysZlo9HnNxe8eLkEIpXr3I9CdoR9zEbm5Fp5L6OTIR0wUtwE8Pfod+PGPz5dkcMYedH9MebY2+RXbmrpybK0rjG2Vzzrt7l5oiDkdRRh2BrqmdjQOfWo+pvoC8Vfpr3qdaHGSjmoXvzjHJhCdpbEGrujr3UMlHG5x+tJv3krXg6B43nRovde5poLvLWA6U5Gwu7T5G2B+duzZLY2W6wfT3E+SzV289yfmvuiPF7YaH3X/5o3limZ3leWP0jm7ipL2X2MOQj+jJ0/wDnPEyTa+3XuWP0fy4RPa3v+an4++defZnNGtFuDl/eR547you5tNJ3pPina+596czfa/6L00Nu8czpoTXNPAtzYvJPp7WN35yzvf8AMn6DWWt8ZoodbfnJ7NLJb3vKn6NV5b3ehb1d+cVm8hHd6Xkf9KsleCnELJZregrzE5EoPt+i7mywm7R0TVdC5ea/F6p+f98+3Subn2WQx6y/X0wY9LvS8VLpWOS4vlW41lkKKurGPGZjXB99ZqNY7ww97I0t6lOtY7LR+9mKz34+/IXSaD7N2jOp8bk21fJnAy6BMw1tHrL4K7ePyvm1KHmevN2Mfmo45uKUZcWuxXpnpXB1tPQ3bIETDWs5Yjsa5Nlksg0N2XE6Qw/HdNNaSCw0k6/1cG0vvfoXcNpRA5IYOVWoyOGl1GpxlIgm0xTtnfa1HFP6ERK0p1TJPd3Pc85fqXEfzn2r0KEzvnsjnHPp1t+e8oNlajx1z/TGiN2J+Y3g2kB2sOZf0f2WtOdkCwt7hKZy2I46f26mIz90bfJWsubC2OTwXo1PvVtrf17XJ3OXuNWYakuHjs5kEjGyYayfXUYslHsi0V2d5Pit5N9heKjT9CwzkhbXOcr7Z24xFEX+Ee6fDZ5KR1lIfR+ex+PvmxOTjEJM9AOen4nJgdkXox8j/payrgaKyljELPRHmoW89Y9su5Nhl4+XcW8LI47te61X47O9v56oDJx/lofPax0hv5b5WFcs1tQV5iciUH2+KJurH9FaWt9SNxZ1db3gFnslhrw43M0lcWlS0Lnwa1vU1C6HH9+UNdWHU90+ucr7UdC5/H35TFe0ulYZYAAAAAAAAAAAAAAAQj1/tjXZ4u/S2mdZ7HZCSfuhU/nqA8FGSV3sXUmy/wB0/l1pj93flfi96A5SyEc3dAb3/LP6VXGssyOh98eOtu96uP59fv55/L5xPPEpc/255XvyfFt3ftT+VH4p0+Tz6/lSr+/Pz8Kf7++/z8+f0/jx+Po9f195PlTn+uLz4/Xr1+fvnhfeT556/wA8cvyp/PtP+/fvJ9qdf5476twfPH98+vz7p/n584vf3tfPX5++eL58/Xx+vv38fPvveK37IVSzW1BXmJyJQfb9OVqGpJ0RxxfDFSC8uNy/hVaV3sdmLQ5LBy0jszsZlcDb28xtQ22RulYZSCEv13klhOzKvt7qgrqzxI7D0/kOhmyoWyvX05olsGFUnhUqMDKOH782K9MdLAAAAAAAAAAAAAAAD+fPsMdWbbwyc0dhxYiu+6cjWY7FX7z4rL8Uet529W8hw2/RL8NsYW5ecd6HmH9IpRYSXgUFUt7PsP4Na89Ov95fHz1/Hjj8+/76tuzVvOB86tpQ/FT12Lin5dNz0vHerVvzS+9b7456tTj8/Pz9+/zw/nr5/fXjj+efQ83Pc91vMtcZ6dW76Hqn2vFbj9/Px6o9GnV/ny17tzc/v5V4qVhyVMh5q29y3+9Wpb8Xi57dzU63n55vq19e2r9P4/NajyeLmRdpk+6+wqlmtqCvMTkSg+37QZLC44prrCTuAmEJpVAJWx6Y9b14h7JYPkJhuyodyWF3GsMr3PNW72Mzlh8xG7j2eQ/TzKDAyyBMsgVfWt9YTLxy9OLz11sfmKjoXUQJNBcwGtt2AAAAAAAAAAAAAAAADq0a1ncHJ43xDZUXoNtOxcInUc9ebLtBdZbLT2v+Us/JrCpL42VAChbS98qlcep68+7Vo0DbXXQ8/ak9UuJ95PvnnOH59qWvbUPa33g+KlXe6fF9+dj78oCjW9t87Hh1n3tffnL89e5VodHz7pj7UrC4t+H58fVN0a9VVaHdrUun8++v68Pjte6VE0q1wfdGkaFeoKtPz/Prs/fPb++fE8eqsuKPmU6viU6nN9dTz77v35Wt9Yfv78hVLNbUFeYnIlB9vgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8+fvl0LuwGBm9U5KOXsysfAApy1vqTo3dN06tY1aHmPtT1KVP2tX2nmkaNfr+PfAVDWtuL1779ahx/fnP9+8j5yvnn06n7tqvm06niePfa+vQ++e/Up9+6odL2/H356nqn+T3KlLwPNT2PVPl9eeN97/AKp0/Tq1D68eTRrdbz65vXng+O/6+cj53fdLxqVXpvvf+un599v78qq8sv79+QqlmtqCvMTkSg+3wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4f0AAA/j7/XwAAAAfwH9AAAAAAAAAAAAAALKZaN+BWtJFYOXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWUymCvRjM5+/n0AAWryGHuBZZS2t/ibvY3NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWU3ly3KqPy/l+fbOZPBeBXtf68+xSua6tb2J8ih2xdpHqPUr6P4pzA6x3xmG1xuWurW+Apr5jOqpVF9yPdVwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHfMR2mLiy7Pz1Y7KYO9+Lztq7/EVxa5HtefsO5NBsquvdxYzp5qWt7PK5I4Ts0WR8wjz1vULIWK8wWgfmBnnU3z7v2+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAER6eo7lepLiJocixv8AGt5Te9pVh9zOV2v1dcH7IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIZU9MXS9SrA5a8HZlLjsmQnvYXfXFZfcxyvYAAAAAAAAAAAAAESJFDcZE91Jnu1B0aAAAAAAAAAAAAANUboXjna5567GFmsng9cXd/LF2cbndgPTfStw7PIgAAAAACKUgiWKDY2lNgzTPTAAAAAAAAAAAAAAAAAFiPME6KhhSt+Kc69x3VaX5E5Betg+59vvy8+yvaPKXO8XKB5RTZ2TzirDqlNFxAWwPcKzAAAAABqH9IcVYCtw82/SR4d/VK6lhlYTymB3Rx+XkBh5JjqmusJwRTYFeWmQhjJ4N4dW3nVE9g+HVoY95lrXILDtkw3k0Gryzydvb3Fyjj8vhpKILkRhezON8x2zXWMhMLKJLYOUQYlmvqytchS1xZSBw8k+eT2f+ZW/Px/8Ao7KyPTKGkmhGmt05wpk7gW3KmoXm0noHrqGMng3h1bedUT2DEKSQrv061isxHMisJ2f3vPuMeditncngp+Q/Y8UZFDaYrW2OOa6xwXbe5w3luTf0Lq62vQAAAAAAAAAAAAAAABj+pc/+Qs/UXVVfcrM6pufF1R5dxX0OV8zVx2bhjq9B6/Jfcrc2MjOSfP1Ngo05DIIRhJRGKk+lsaeBG4iebrBmrAAAABTla3+eR2f+ZWdnUnRN2MdmctGud06NfWX555V9d7onxENjYOds885i9Y71qu3u8RGydJXNsctKKPzDoeqcE5drrObqbobBftrnr1KdSEcr19MuLT61OTwWfzTfS2KHYmm7r4/KwplMD2atEdZa5O7eXu35+wwlEC2lOfuwtP8A6X4d3dOVO/srGvdxw0k0I+f32R+aMicJLNt7nDtWKMhhuIjZOkrm2OWlFH5hanIYiAMy1nL6NTbwq1DOzqPojWH31yRMONTip7e+uLZZDH9MdcZJ4LtjCxtXnvfl4+/SO7uNzQAAAAAAAAAAAAAAAAx4UueIe09PZm7js2NnjW3XU4C0tBZxbnuLme/nym1eZazB4YlzNEa7xmEMchuOny7T6mR88gz7GEo3+jX2IBG4MAAAADCFtTQepZ0dxVO6I7Ejjmoz9BzjT9LtS/orjONuci+3dzf2rqB9JcS5FIXs/GRPNS+3T93Gs8lKWOzTOnqXojUM6Q4nzt6k6Iwk7V0Fti87dl4Dtwc3ZI4NtehbzGxgz0T1vt38s5eddbkGXfWm8cGW2efdsXnbsvX+3HzXlI1/uDU06K4x+i3xV+nghpJoRqHdIcUxiz8Q+g/xp+l2kl1TwJ7dP3cazyUpY7NLWX+LzF6z3hli15uP5x/bH5fZctc7ozPaw3tlh15uP50Xav5iZotYbyyJQnakm8BLtc3ePKe6Ny53oAAAAAAAAAAAAAAAAKF+YKJvjU0SKepJg1Nwyv8Ae18PNDjzNBcdoeyvB8u8+nEVcWlPnzlLH0IzVFMnBO00+z6CJ8u82mC1ptlGnoTgNisAAAAGiB1x+d+znobrOUmBlmnr0rxFsV6R6m1nt78l2nyWF2e9A9e4FNxc1V1Z5TOLqjoHWo3pyjXlpkdnjQnXUFZZr3D7szRc7YjsaG0ng22jzp2dgJ3DzZkxge3Lc32LivIIfaHJ4OFsp19Ste33YeWe+NNrpvhnbR507O19dyc05RYBt/U06K4x+i3xV+nghpJoRqh9DcbZIYRtPs+fcrI9MdajenKNeWmR2eNCddYX9oaHxpTrU9yLPI5I4LtfMnrLeen90pxFdvHZnKXr7cVvL7EZHIPteSOCleubvHlPdG5c70AAAAAAAAAAAAAAAAFtPkZivT1ZGzzrWQ/rYkvam3sYVHmHL9X6/wD6UgfMZPqKgHzJjZANpk+dWbvxirIam1yfNNNyE1FzNoYLj6MBfEAAAAEb83F5IYSUC19/ie759+HVoVla39W293H3MRy/GJkPa8+rcXuN8arQvBjczw/flgcvHZBYeR2Oy0eu1js1QF5jamt7vrevPlVKN0LDLWOyuBruzyNbW17YzLR67WOzVvbzGVTb3lpslhZF4SUDxqtC0+Rw11MdmLRZLCX6xEjtxe43xqtC8GNzOoX0hxXl01vunIRDdlX4xMhFG3NnRt1j7yYzOWnyOGqOhd+lTq25vsVenF54AAAAAAAAAAAAAAAAdVSxaUeWvB+WGQqr0LFDxqeRHrYluPkcmvU3XQhF8m2COZ8/Y+j8eoY7jIoQ4JAHKRxJoGP4jIZYCvAAAAAWCy8f1g99ckgAAAAAAAAAAAAAAAAAAACk7rH+vSuPVpXAAAAA2ldA9dXkxmcAAAAAAAAAAAAAAAAGHehx5Kr3tS6v2V4yqXMmY+v2PY/zCPB+WFyvUlup9lPv/chg9NUQ3cSPxZUugcp4RLYjMScIhlIFQnXM7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIEUtCVV9ysbfGtsiVbojB5bcP5Z6/WUqfe1RTvzHYsqPLOQar0Hen1NAAAOE5gADhOYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwWW3C2WCv1fD2np+fFXfeK6jyxFGnqinmO8P5Yzzq75y11+tfbXwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFI/MRgntuFMttfragvmA9Zd1p9zVfes/5Hy09f7d1OymNmlzZktq9LVB9yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8ZZ4abfjShfmCyDVeg7/ep91VPxvllCzxpbGDR5gnLU3nmquO1O0qgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC23yN4+6XPsYPGsPK+WnsfbyUfvaOQOr0FcP7IQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2gAIAQIAAQUA/wDCqhichVKp8mTI5X9+4L7YWP7Y/fuC+2Fj+2P3ExjOcpmRWoTmljKH9qQX2wsf2x8IFHmIxgTMDqseQ1k8G8/ILqFA5wV6bHJfAHlGjLhDqNmMiIHiEvjI4R5yr1rQrHefM6drkBdav4sKIM7Jsij64LGVWD+Ya5ID2V0eHpH+RZJAxuxzbDnxycFUFeEyldBHpE7BrJ4N4jr52VtOK/ffXrVHVzsn5XDaJZHkzKwCsR2gTwhQucWc2tcXXjqNelZzksVR149q00DioD8KYcBzho4VIgyB3hLm1o3mCPDJwqrn45Uir16XolsEdkKpHEHZZIhhwAf1MssZmTChlZ8IlGTXVS3RckBdiQLCUkQchz9pwX2wsf2x4SX+Ma+yyItar8xR1DNYo1M8YUOzi3miLkzW1Wmyks0HMZVrYOJSFcjOgdlrkjhI2l3jsbhTu+MD5GHNGySaXOLggxKVbq2xZvwgYFU1mB5CmUui1GZXT06Nxsub5QzgdlEiAhWN8lamuyYo1M8YULmZO9QCRyRI1Zsta2tiBzZzWohhWoiYBWaxIgmUbcEZDNEHdv8AydAnNWJSqcIwQxvhbJM3gqVNLvIJCuRnQM2XMiCbvj4JnZ5JIW1JYTc3sJM6AkRvEHfVTcww6SPiQmIKGc1Kz/UkqU1YdFK3wEiZ15kpOaUMkxsS+mLYxGvQERBX4OXZqTuDVNGbDO8facF9sLH9sfpUaoxCse3hS/uv0LhIlrkzJjsJlL49LZC6GGmHC8TZAtNYPoQSJaXHOPkgWv4xmmGB+pVu1BVOLc34LTOaABieeNYETtGBhLeo4NOcmck4CxrnEJSKxVYVDt4kJD1OT25WnD9iBxjOY+yMjiUmrBAYGSwhG1JDceaZ/DBfbCx/bHwcTFSYtoiRC5taI2YxS+QQpM6uyOGpQs8TieItOhwVG5Di5S0KI9KNRF55FsyOekQFocEihEhC0LYoqdn9xhgSCzavTYdMFjyYKvESZWVW4TFrtB/wEkchzYzS6Ye1ifLoUyIowkfDV0KOAKSxBMwnCr1GSpaYSepD7u0hqFZA8hkLhGo8nRrmhsdIVJGBVGXgswuExJ0mzg/N35CRo8NVfrFq8yGNyUqdRccisFwiCH1fK4gjiwPqWMZFkmKuJyM0oZJlYryilrcuKMTSF3KSFTpzAtXpzhJzoJYZZZZ0mSqSZTMCUidzXjcFXgEORZgEd8qaRRIKxrWphJFP2I2qDEy2IKQrW2yS8AbDc+Uz+GC+2Fj+2PgbM46pfYtOSULCsmYFMpaJIypZQY6xiUsRMviKWTtLnCYosZpWxJm1dIGg6HLZww4nDOrgsaQkyRlClNlMfdDFD/H2hpRSlhKtMCkRC1wcoG/v7jK2A8TdK29qiBC6vfzXJFadfISZwyJl8WmLewpZXK/WmZBMmoLQpsVKty3ShsfGpG+wxmZU0wQNk8cmuDpUb+9Nq2LWI8Nz7KW57YXiPOaeFNjeKyU7oBHLkyjJD41ggRk/a0NgSObn4arAeG57ffqUBjnrp0xE02EVkRwLYtbXI5tUMdqDATJbFGtCaJQuOE2rQBCM0kRT+4lAULFCoXi0J8qF0dEmKKRoi1KSzmHLU+fYiTGMqK3Dk1vs5B5Gc7+Rv8MF9sLH9sftyplackfrROFJa60k3xZ2s51Vx6vUhBQq+RnkzqugtgBhyAX8EdSBIRxKVHCfI0qLOR3C0+lAFjyZ8E6Y5UajgLkIpW1oEI2yNtToF0gCostUlOSHYx5cskf9ZcJrEZpL1BTmxO2x1YtGmros0mRxNSz8QtI1fG6ulawCytFKUkuOL1C1nrQs8mTV8Y3ECDkIiExykbVBligtxamxCY1srW4ZcoGtLCeQanM4UUYeY0QBcsCvjbC2YTMrIuEKDeYBcnwlUJv9etVAQILHzg1i9VqD1DPDEyzCusiMFPcdXM5nhBfbCx/bH7cbHVU1Hgs9yyQ8PKl3P8Kqbwmq25GUWUlETgU1Rp1SaTI8InTxTEiPOeFIUDSkUDTKKwefWCGZsoliJ8QiQL/CvUqcxYajK9BmwAlusDVDJfAtpRiazWchEbyOuahE4RkZahNOsIkyRLKMmOjESnG32UFKU3ErDkyqtVZTi2SEpCWgkErAjcoI6FLm+UhS5blxQTXGuISQcVM8kRttXKzValrcDkCqMllu7XP4QUIkwAix1w1p1bqobiQI5P6YF3LONKFHpIYaQ85wJem/mfAgmlopKaDLc+vWMK49KFSFexHJHFBYjSjPajgfhm8gvthY/tj4M0CJcoa3Nq52Vir5c2x5thModEL/AABcTI22HyR4VGMDyU6LohJW1xVw6SoHMwoZRqOFxRerjEcA9KIjHUshXymOtjag41xWIKBNMUayUq6GlJZlJk0JR+DTGImOPNsCS5eCmBK+SMTZW5Jq0gpMrb4bEz0KeJva95eYUaxROARdDLHZnhWDHdQ0uCRuxC5OJ0Mr6ZlGMMIUmzByhEna0TJEZHIwJ40/KnBxbljSsRMEeXQuJMQZG/TCPlxx7+lNOAVwAsDD4IEJy89zjS1sJ8aqdCylTVgJ5KkoROZU9BSkyZeFxdPGGs41yqUs60ar1Ur8tNJ1aTLqMByGymURKvwZnk9oUG2utOSHAcHdTDY0sC6pEeMN1u5DkHEOchVxJKZ6stQQ8toTBFmMVoHNaKVTFQ/jx/WqjRBa5gYP1Q5izldGpmoYwvlkq3dNHifSnKAFhTE3eowFv5j+tTqMHNT83FnpJaiCieK0UhC6p04TyJXA0jmNwrdyLGtaHNmGYYIwSbPkUQk4PqycqvIzqP8AWIz5Da+GYNnmvniQq/8Ac8gvthY/tjxAiPcly2Swlhkba2kx+Tp2B5j1ePDQ6Sg6SDGW5RUba9QZye3LErd0g2aUTqOkmuOU52FDfBpDFGKHGvZcVbcs4JlOSnRa0LEhyFXGIO+xpoipT+jYHgSgc3m4nAUXcm1W0LYlIvUMUZ2SVoJU4OjDH7CHWT/k5YQBKrY3sxKzMSFYsjclbXBoq6tP93EHlHIWEhoVzCEEOxK2fJlKgNRswxGSdmaXWMLmP0B/hSN4yumH9eRv4fQ7DSwROThZJBC3BtWNZv0YxYAGSOwfw48swqbsGAznlaNiYwcnakJja4JsEKv6eDAuMQuMZkmRpxLxKirGTnCbzfL+J4BDkQmlyywNqmbrj8hkqnA47Yi5IrYnMDqgncc9PQLSMpVPGRgVPByGvkqEt6ekLNyMSJcqe0pgMs1tjxnPEefIqh5oRMlpAF6tz/XwD/mq4vOW2Z5EFmdA+at8IYAI3SJoAZTXfnISuY/rUwxlJF6osSWwchy/tTke1Ko1aCY8tE9IHICVpRK+SuCoFZEqZfUzkkx5VMJQF5aJ+nCBoU/65H+tXJITGaYoA4al2PIr5BfbCx/bH6dGrUoFWc5znxKNMINPPNUnfVP6cWLFK9T9GrMCUnkkmLTKKukBbglfXZUzLWqSIHEuNSsxlE72GNclQGlHKTokJaWtZl6IzCZUDNeHOgxsyLIy58gIC0q8Ywp8IozidXGZiKIP8AiyEVUvQlLe4p8nJbCZMtrmHHlzXbNjLe7twwIXrJvrKIgGJ6QjOG12wUYWPibGcqIP+JhrtIsOGYX+bwx/WpwA9TTIvA2p18uF/hHF2EDnC39MNHcSf05HnHkyDGRCrttwjYZXIcIi3hcNwXjafSWv/wBwkaR9dEYoDZK4xWscVCpPY383FJ/uYaIWGewRGDaVH8zif9WtxmhaZWMQmlw/kt5BfbCx/bHjfhGJfYqMDeneIayOZuGESOL4gJwZOljA32KIoW1OJ69hITMiavsqZCdCkhzajh6ILRMItmJr2lGzsMYdZI0vKB6gTs7ojmeOYtOZBUlO/FIGuFJpOmWKUwa9TlmpoQWFkRw9EFoTQfLHIACwEc1yjVRflcNolkfkkTLVz1XDEg0BcKRtiqQRb/BmCrBuJECZ15LIxpFokR5aRyb4cylzlcylMcKzXiUk5ngw1aZgY4+ZC+VUxNToGuYihyrKj4hsaaGekD92yY7i2IpUCeSQhkWStphxqrJkISokcuS+hSbwkIhYbZypGUsryXDaXQoxvlbbJYzIGVQy2c7M+WW1GZdhA7IXAEbmJ7QYGXxd3TtiNiNE2I0hYkyokgq0H4opsOF5xvEDacuMiTIma000YTD1RycwgXCEpqjNYpRNJhkhRCInpSN1Cqaz0o60kCD1avcEx6eTxJCsVMIGZgVtD0iNQWKzkP6dxY1TeYxsxx6xkdkqNDNHNO4ol7cYnNzjyeCJCYqNhjgna254f06hJImvOFog5DnmM5DmKTQ1t4N4Rvrc8MCxKtYY+pOXhk7e0t0wlGXZV/XMRc0AG9+jSZfkTC5AFFWVYQ5qpkhakcleRvjm1N5p6qNOqZM3yVWmXo3xqMRKmltPXKYqqIbkD8+pT0j2iyUu5BfbCx/bHiMSQKte+Rhrii+Rsx8kfJEzLGRTNkhsCZpwnYoyUuirQhZl0cc4xGnhvfLDRuUTizcY4xaTs1hvDK8uTM9sq2PuyOFt7fLHltcwSB0h0gmkjcW6UqlICC1GHqOSdFIZeHLMoeIQ6vjtKkDvETHGLSdmVS+K5knH53blsSd2wlrxEl8fzF1E5Z00lJcYpFW9wkbKe9tcqZk07RTYGJyzKoHHCI5LY+gUjzjIpNNki+M2LMG9+VqbISr8Q+UpErn+YWITM7thLXhI9IG+Dv8APmZQ6FvEWVqMSRhTSJmkDQkWpH1qKhK9yr06Wo5Q1PyU56iDfHZCW3Pjl4LU2FKezY8pTLkvnpFERsI1jA9XOhVI3V+ytUJFRwRRufuDIdDJyjkScs80rkITvLi6oG8ZSdxXZTgsl/8ASzPBOuPTcKk7mVgyRuJuFCkxQLidUYnyCQOJePzK68Me3A3g16geEjgrRGkz93KLXS1etAM80Ym2YOzcE+fuh+FzsrXmFuasrmJK64wY+uBvDFZpvP6+BKk0jhb2vL4J+cBYNcFBvMiyLPhjOccSO61JkMvU+Q6WKhhUuatVz+vgA4wviN8XoxYmirODpeuMCqclazwJWqCOFyByL4ORuY+Kl6hXxKuPScDJHMODX1xN4YqNN8IL7YWP7Y+CpCtRcUoVqMPAJFZibxa3ZwZVXCUitQWEIhCUpVKI/wAMYznKpAvQqFzY5NgxNbmFEjbHJx4QlUqj1KRUjPVtTogK+wJrFCHxFJo4Y2KVB55JpAMqAGpgAyR52OGDGAyGSs5pWQ6QEP7dVDS1loVBSQlJYEmTtxa9aYuUeGMZzzzc88wXPwh88wWOYLHnn4YuYLFnn4Q+ZKHjmQ5xzABZ5+AZwQBB5/XmCh55kAsc83PPwx88wXPMFzzBc8wXPwxc8wXMBznmSxY55ueYLHnmSx4xgoYuZLFjnmi55ueebnPPwxZ5+GPmQCxzzBZ5kAsc/nzzBc80XMEmZxgoec5JMxzJY8c8wXMFDzzIBY8YL7YWP7Y8TkiUHzpmSygVhEJZKnKbYAXKUhDI2MyuGtL05RtDXchkyxsj6CCr2qER54bolGjpZHkzagEsRRcCSQIow4P6ZDGWpgmbTHkTFAWAzBCpOozYTQqVyiFpnZestN2cnCMwxeqQN01mzkfHVype7BgP2BnGM4m1epJAB4qd2RDURZamLUMqwIkzeIrDkT5vEygac+nZiBMfW8wNSGPdh+iIXt6UvCrxCPzcZMzngFGA8CtAHg1Yc89KFz0jOeBVZDwK/IeCXZFwRvnZAoyDnrAWODV+fzBoccwtzjhh+B5AowHmVuPJ6VjmVePJlTjmFWMcwtxjglYRcCqwHI12R4yZ52Qqcg4NV5+AKhgyJXnPMK8Y4JRgXMH4xkK4IQiX+dwSrGeFrQg4asLHzBwMZ9KxnHpPkF6wzgIVgcZ9Pxng1GRCCf5vArODUBHzP9eQX2wsf2x4zrwNTsz2MtZ3oiTnkxsixkAHFVLfSURszVYRt1ktLU6OMj9YR0uwUppn5va1D+qnKpceKR+cwLJz6WeyytMja5TLgyVCifnxtJVWG6HSJ5lyZU2m2R54mmYpkzUKVqVMqTP5Y5HKZuxygP2EanJOwqi7Sq45Vs2K+LqeGZl0ppy4vqZ1IExxZxY1cJXn+jr3I9cL+BSowUEtaDIfTAYzlSDGBLceUaseBDcSisBcih8G4FAyY4lACFxKzgSoIC/WARhA4ZzzK7OcZV583C3zuCXD8/1ngrgXtPnmXtP5vrpP5MvROMlOxJocvBGAhcvP4BcEWMq8ZAUq88I1YsDAoMzzCjGRekZwIR2cc/GzngzBBAQoyPJh34fAuJYhYWF54BcWLgFgDMgU4Fk1X+FnB4cl+mF+aFeWLhi0AMZXlhAWuLMzj+eOQX2wsf2x+3shDnhiNMbxxi6BcFobgtqb+ExPgwz0AHnZQYEL0MOcBQgDkSQOcnNhZuQNwA5Ma8CHlsyPIm3OBqkYjS07cEAPQiw4LRgwH0IGcBRADjCIHlObSjuAZE4ceo0/DWMrOTGMoWAMpYA+pSPIWgLBjCAvGcIQYCFIAPPQwedkgPkClCEWSA5zkkIsBJCHAi8ZCFOEIhk4HwCIkGfQS/LhEUEJaIsvmEgcCGkAZzBAcAwjB5oUJIeDRlj4NAUPAEJQBYx5McgvthY/tj9+2J09SvEjevzA8/8AjzpmN6Wps4zjP8TU1L3tfksYTFzM7tYfvlGVqRuhHmR9zHlriYjR1kItmbodF1rysicQNdmuLRd4eZHE40diNYiLVP8A/wDazTyLU6SJtjuYuNTHLPHOcY55cfew57VnMbFJXGP5fZI4yAeJ7IfXbJJHJhUHzJec6t8pdGx1epIqeRprQfkyj8cfpDtZL06kkvxTdCPDIsYz5BZ5/hDzJoMc/GBzGcZx99vLkWf8IMCOznmAGC5gjPPwOBx5uPvqLORZzkIA/wCI0QCwh5kWMc8ufr8Vjp8pe5XUx8bZfrkYqaOPTB4Mrd63d/cTxwo92JC4N61qWfTRZqTvkhsSu2SIsn2GMXmhAHzQ5zk0YQ4Djy5HzGMYxnOMcxnGfr1Jsf4KE31e+oXRvPaXLjRCpU+ku8ee2EzGMiynrmbKU65AtbVHGmGSl8Lc4LLmgHCCD1J3u3m/oqhOekOZ4NKX9EnishWODrBJayJ0Da4Oh6yu5ogTZxnGQhEISOuZsuLdo0/sWeM8GlL+iSxORrV7vCJWxktLS4Pi6IIFbXGX2Kv8ZxyGe1tmPjpH43WthyJ6fryQJwG8aYZKXwtzgsuaAcYojIZKUdFZES6qq3m6QkYBlj40Rl/fsuMAmLUV/TjFFH+ShSwuULXGCwiUJZTaTA7yOPrEihAr+ws/4jDheQJQfNCL/ELhhvk55Bj4UAQcfXE6c1UoMGmgsMpqSGic7oY/Q3mIIUjlJ5dIzIg0PlpRh3iNMNyFZIZjYQ4g42jNY5IUFTwpM9qJVarRGVrBcrS6LbdhSVMRR7chGF/s4EbkFqSlikThTvsbK7JaIauiMrQzFqfX+MVcTCLBRzMdytCZvkVZQ5Axsznd7cmVRWwGKbcsiIlxV6p32NltlNMPXRGVoZk1OqhNXdksDr68Zp3PPzqHkM9rXlja5AjSscMgxNjTMuXOlTwpM9qJVarRGVrBcrS6LbdhSVMRRv8AxsvnTJCzWG5mtzX2zD0ri01rDi5W7yudMcFKYrnanJba8HSHoKL/ANCYztugqiAWMca7zaWfk5qeHD1s7fYRX8+Gf4jc583BeP8ACYLzQlF+X6/UTF61k8njKKVtzRU0fZHOw2P1/FCjTCTYrcqU0uUV3HpU2sb25Rp0YbPi8mJsut0DUhp8RWYY429HWpf77YryWWrHH6OxWVucScGecQ+ck2ZX6eMcp32NmwxDl1F5z6PbxozJpS4xBl15/wC8IXEIY377Yrz32xXlkTpmmCanfY2bDEOXUXn/AOJbftvAfY3whntbbCw9vjf/AOPn0PXIlDcsp8RWYY429HWpf77YryWWrHH6O0b/AMbapSgucYxkWV2Bp4RRwictNqlqC5xjGRZWYEkgdF/6FwCEKaV77aXb7K/YQv5YK/yB/mcbnyAxjyYO/mPGPJj69VLHhmikonT64P8A+bZVyqZGe+x14jrOzWC7VxDpIWYcwVzGawJja2Rr6jiC5dbEkbm6O1nOSossfITE5vhoq6HsJlhCh+HeoW+KLDk9TxRI7XNJW8xDTvsbM/a2i/8AQtv23pn2vvP/AHlYWGhwgdqkiTqrBCIBF2l8G0GOtO+xsz9raL/2lt+28B9jfCGe1ty+x9LyX0dXdEcynXVnOSossfITE5vhoq6HsJlhCh+Hejf+Nf2aIzJWw1bFmFbak/QnooHLxxB4cmSI2I3s1XxKOqrRsJIvT0X/AKFve2te+2l2+yv2EL/KT/kD/I47/IHPlCb/ACH9fxJpJgjwQuro15XOTi5mIXl3bMKVapabwmQv6dOIQhi4icnFuGteHdyxzGchzmRSASb+vEb++txJx5yk5A7uzXhWtWOB6JeubTlzq6OmeI317bi1S1YuN4jf31uJOPOUnIXh3a8K1qxwPTyWRpCfAk85MctfnxyJIPPSnK5A/OBHETk4tw1rw7uWOUb/AMbaoxlztU/vq4nwSrFaE1a9PDmHiB3dmvCxctcD06lQkPXPj25lfYZOfJwX+E0ePOCSLyhGHzgli8uPrrCtStr171K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K9571K94nuKFJMHW3BFBnvUr3nvUr3nvUr3nvUr3nvUr3nvUr3nvUr3nvUr3nvUr3nvUr3j0rTr3j7Cz/gNND5wQC84IvKWPGcCwIHnZ84eOedzHl++pofOCWPzg/6Qs4wLH+IkQTAi8c5xjgjsY4EXnB++YsZKFjIRhxnJXP5CwInnmmh55xvPMMFwJPMY8n30zjAsZwIrIRhHjzM455+ccwMGeecHnnB55c55/TgjsYzjPlx98s4xnAis45g0QeYNBnnlBnn+DmRgxwR2McyIY8gJ++2Q4FzJIc8/AFz8EfPwBcwSHHMBwH/ANIf/9oACAEDAAEFAP8AwqrVWLG6uaWcHB0rf793D8MKI+Fv37uH4YUR8LfuJnOA4cpw0t7gnUFqiftS4fhhRHwt8LZmEsJlq6WMDbGx3fHCM4tlgMeGO1ow+MjTbkbcnI6z2IuTE2IbHLRi0oZ5iyXA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" />

    </div>`;

    // Section I => Patient Details
    if (
      firstName ||
      fatherName ||
      motherName ||
      address ||
      contactNumber ||
      lastName ||
      userAge ||
      male ||
      female ||
      userDob ||
      evaluationDate ||
      chiefComplaint ||
      informant ||
      AssesmentBy ||
      diagnosis ||
      referredBy
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

    if (motherName.trim()) {
      html += `
      <div class="label">
      <h2>Mother's Name - ${motherName}</h2>
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

    if (chiefComplaint) {
      const lines = chiefComplaint.split('\n');
      const bulletPoints = lines
        .map(line => (line.trim() !== '' ? `<li>${line}</li>` : ''))
        .join('');

      if (bulletPoints) {
        html += `
          <div class="label">
            <h2>Chief Complaint :</h2>
            <ul>${bulletPoints}</ul>
          </div>
        `;
      }
    }

    if (informant) {
      const formated = informant.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>Informant: ${formated}</h2>
      </div>`;
    }
    if (AssesmentBy) {
      const formated = AssesmentBy.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>Assessed by: ${formated}</h2>
      </div>`;
    }
    if (diagnosis) {
      const formated = diagnosis.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>Diagnosis: ${formated}</h2>
      </div></div>`;
    }
    if (referredBy) {
      const formated = referredBy.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>Referred By: ${formated}</h2>
      </div>`;
    }

    // Section 2
    if (
      fatherAge ||
      motherAge ||
      workLoad ||
      stresslevel ||
      consanguinity ||
      nonConsanguinity ||
      children ||
      selectedNatalOptions ||
      fullTerm ||
      preTerm
    ) {
      html += `
      <div class="label">
        <h1>2. HISTORY</h1>
      </div>
      <div class="value">
      </div>
    `;
    }

    if (fatherAge.trim()) {
      html += `
   
      <div class="label"><h2>Father's Age During Conception :${fatherAge}</h2></div>

     `;
    }
    if (motherAge.trim()) {
      html += `
   
      <div class="label"><h2>Mother's Age During Conception :${motherAge}</h2></div>

     `;
    }

    if (workLoad) {
      html += `
   
      <div class="label"><h2>Mother's Work Load During Conception :${workLoad}</h2></div>

     `;
    }

    if (stresslevel) {
      html += `
   
      <div class="label"><h2>Mother's Stress Level During Conception :${stresslevel}</h2></div>

     `;
    }

    if (consanguinity) {
      html += `
   
      <div class="label"><h2>Consanguinity : Yes</h2></div>

     `;
    } else if (nonConsanguinity) {
      html += `
   
      <div class="label"><h2>Non Consanguinity : Yes</h2></div>

     `;
    }

    if (children) {
      html += `
   
      <div class="label"><h2>Children : ${children}</h2></div>

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

    if (
      ciabYes ||
      ciabNo ||
      userBirthWeight ||
      userHeadCircumference ||
      day1To7days ||
      week1To4weeks ||
      week4To4months ||
      presentHistory
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

    if (reasonNicuStay) {
      const formated = reasonNicuStay.replace(/\n/g, '<br>');
      html += `
      <div class="label"><h2>Reason for NICU Stay - ${formated}</h2>
      </div>`;
    }

    if (presentHistory.trim()) {
      const formated = presentHistory.replace(/\n/g, '<br>');
      html += `
      <div class="label"><h2>Present History - ${formated}</h2>
      </div>`;
    }

    // Section 4

    if (
      handHolding ||
      rolling ||
      crawling ||
      sitting ||
      standing ||
      walking ||
      fineMotor ||
      communications ||
      socialBehavior
    ) {
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
    if (fineMotor) {
      const formated = fineMotor.replace(/\n/g, '<br>');
      html += `
        <div class="label"><h2>Fine Motor  - ${formated} </h2>
        </div>`;
    }
    if (communications) {
      const formated = communications.replace(/\n/g, '<br>');
      html += `
        <div class="label"><h2>Communications - ${formated} </h2>
        </div>`;
    }
    if (socialBehavior) {
      const formated = socialBehavior.replace(/\n/g, '<br>');
      html += `
        <div class="label"><h2>Social Behavior - ${formated} </h2>
        </div>`;
    }

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

    // Section 5

    if (
      mri ||
      eeg ||
      bera ||
      opthalmalogy ||
      xRays ||
      selectedImageMRI ||
      selectedImageEEG ||
      selectedImageBERA ||
      selectedImageOPT ||
      selectedImageXRAYS ||
      clickedImageMRI ||
      clickedImageEEG ||
      clickedImageBERA ||
      clickedImageOPT ||
      clickedImageXRAYS
    ) {
      html += `
      <div class="label">
        <h1>5. General Observations </h1>
      </div>
      <div class="value">
      </div>
      `;
    }

    // if (mri.trim()) {
    //   html += `
    //   <div class="label"><h2>MRI - ${mri.trim()} </h2>
    //   <img src="${
    //     selectedImageMRI || clickedImageMRI
    //   }" alt="Selected Image"  style="max-width: 100%; height: auto;" />
    //   </div>`;
    // }

    html += `
    <div class="label">
      ${
        clickedImageMRI && selectedImageMRI
          ? `<h2>MRI - ${mri.trim()}</h2>
             <img src="${clickedImageMRI}" alt="Clicked Image" style="max-width: 100%; height: auto;" />
             <img src="${selectedImageMRI}" alt="Selected Image" style="max-width: 100%; height: auto;" />`
          : clickedImageMRI || selectedImageMRI
          ? `<h2>MRI - ${mri.trim()}</h2>
             <img src="${
               clickedImageMRI || selectedImageMRI
             }" alt="Image" style="max-width: 100%; height: auto;" />`
          : ''
      }
    </div>`;

    // if (eeg.trim()) {
    //   html += `
    //   <div class="label"><h2>EEG - ${eeg.trim()} </h2>
    //   <img src="${
    //     selectedImageEEG || clickedImageEEG
    //   }" alt="Selected Image"  style="max-width: 300px; height: auto;" />
    //   </div>`;
    // }

    html += `
    <div class="label">
      ${
        clickedImageEEG && selectedImageEEG
          ? `<h2>EEG - ${eeg.trim()}</h2>
             <img src="${clickedImageEEG}" alt="Clicked Image" style="max-width: 100%; height: auto;" />
             <img src="${selectedImageEEG}" alt="Selected Image" style="max-width: 100%; height: auto;" />`
          : clickedImageEEG || selectedImageEEG
          ? `<h2>EEG - ${eeg.trim()}</h2>
             <img src="${
               clickedImageEEG || selectedImageEEG
             }" alt="Image" style="max-width: 100%; height: auto;" />`
          : ''
      }
    </div>`;

    // if (bera.trim()) {
    //   html += `
    //   <div class="label"><h2>BERA - ${bera.trim()} </h2>
    //   <img src="${
    //     selectedImageBERA || clickedImageBERA
    //   }" alt="Selected Image"  style="max-width: 300px; height: auto;" />
    //   </div>`;
    // }

    html += `
    <div class="label">
      ${
        clickedImageBERA && selectedImageBERA
          ? `<h2>BERA - ${bera.trim()}</h2>
             <img src="${clickedImageBERA}" alt="Clicked Image" style="max-width: 100%; height: auto;" />
             <img src="${selectedImageBERA}" alt="Selected Image" style="max-width: 100%; height: auto;" />`
          : clickedImageBERA || selectedImageBERA
          ? `<h2>BERA - ${bera.trim()}</h2>
             <img src="${
               clickedImageBERA || selectedImageBERA
             }" alt="Image" style="max-width: 100%; height: auto;" />`
          : ''
      }
    </div>`;

    // if (opthalmalogy.trim()) {
    //   html += `
    //   <div class="label"><h2>Opthalmalogy - ${opthalmalogy.trim()} </h2>
    //   <img src="${
    //     selectedImageOPT || clickedImageOPT
    //   }" alt="Selected Image"  style="max-width: 300px; height: auto;" />
    //   </div>`;
    // }

    html += `
    <div class="label">
      ${
        clickedImageOPT && selectedImageOPT
          ? `<h2>Ophthalmology - ${opthalmalogy.trim()}</h2>
             <img src="${clickedImageOPT}" alt="Clicked Image" style="max-width: 100%; height: auto;" />
             <img src="${selectedImageOPT}" alt="Selected Image" style="max-width: 100%; height: auto;" />`
          : clickedImageOPT || selectedImageOPT
          ? `<h2>Ophthalmology - ${opthalmalogy.trim()}</h2>
             <img src="${
               clickedImageOPT || selectedImageOPT
             }" alt="Image" style="max-width: 100%; height: auto;" />`
          : ''
      }
    </div>`;

    // if (xRays.trim()) {
    //   html += `
    //   <div class="label"><h2>XRAYS - ${xRays.trim()} </h2>
    //   <img src="${
    //     selectedImageXRAYS || clickedImageXRAYS
    //   }" alt="Selected Image"  style="max-width: 300px; height: auto;" />
    //   </div>`;
    // }

    html += `
    <div class="label">
      ${
        clickedImageXRAYS && selectedImageXRAYS
          ? `<h2>X-Rays - ${xRays.trim()}</h2>
             <img src="${clickedImageXRAYS}" alt="Clicked Image" style="max-width: 100%; height: auto;" />
             <img src="${selectedImageXRAYS}" alt="Selected Image" style="max-width: 100%; height: auto;" />`
          : clickedImageXRAYS || selectedImageXRAYS
          ? `<h2>X-Rays - ${xRays.trim()}</h2>
             <img src="${
               clickedImageXRAYS || selectedImageXRAYS
             }" alt="Image" style="max-width: 100%; height: auto;" />`
          : ''
      }
    </div>`;

    // Section 6

    if (
      hypertonia ||
      hypotonia ||
      deformitiesR ||
      deformitiesL ||
      contractureR ||
      contractureL ||
      tightnessL ||
      tightnessR
    ) {
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

    if (deformitiesR) {
      const formated = deformitiesR.replace(/\n/g, '<br>');
      html += `
      <div class="label"><h2>Deformities Right - ${formated}</h2>
      </div>`;
    }
    if (deformitiesL) {
      const formated = deformitiesL.replace(/\n/g, '<br>');
      html += `
      <div class="label"><h2>Deformities Left - ${formated}</h2>
      </div>`;
    }
    if (contractureR) {
      const formated = contractureR.replace(/\n/g, '<br>');
      html += `
      <div class="label"><h2>Contracture  Right - ${formated} </h2>
      </div>`;
    }

    if (contractureL) {
      const formated = contractureL.replace(/\n/g, '<br>');
      html += `
      <div class="label"><h2>Contracture  Left - ${formated} </h2>
      </div>`;
    }

    if (tightnessR) {
      const formated = tightnessR.replace(/\n/g, '<br>');
      html += `
      <div class="label"><h2>Tightness  Right - ${formated}</h2>
      </div>`;
    }

    if (tightnessL) {
      const formated = tightnessL.replace(/\n/g, '<br>');
      html += `
      <div class="label"><h2>Tightness  Left - ${formated}</h2>
      </div>`;
    }

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

    if (tasRTR1) {
      const formated = tasRTR1.replace(/\n/g, '<br>');
      html += `
          <div class="label">
          <h2>Tendoachilles RT - R1  :${formated}</h2></div><div class="value">
          </div>
          </div>
        `;
    }
    if (tasRTR2) {
      const formated = tasRTR2.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>Tendoachilles RT - R2  :${formated}</h2></div>

    `;
    }
    if (tasLTR1) {
      const formated = tasLTR1.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>Tendoachilles LT - R1  :${formated}</h2>
      </div>
    `;
    }
    if (tasLTR2) {
      const formated = tasLTR2.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>Tendoachilles LT - R2  :${formated}</h2>
      </div>
    `;
    }

    if (hamstringsRTR1) {
      const formated = hamstringsRTR1.replace(/\n/g, '<br>');
      html += `
      <div class="section"><div class="label">
      <h2>Hamstrings RT - R1  :${formated}</h2>
      </div>
    `;
    }
    if (hamstringsRTR2) {
      const formated = hamstringsRTR2.replace(/\n/g, '<br>');
      html += `
      <div class="section"><div class="label">
      <h2>Hamstrings RT - R2  :${formated}</h2>
      </div>
    `;
    }
    if (hamstringsLTR1) {
      const formated = hamstringsLTR1.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>Hamstrings LT - R1  :${formated}</h2>
      </div>
    `;
    }
    if (hamstringsLTR2) {
      const formated = hamstringsLTR2.replace(/\n/g, '<br>');
      html += `
     <div class="label">
      <h2>Hamstrings LT - R2  :${formated}</h2>
      </div>
    `;
    }

    if (hipAdductionRTR1) {
      const formated = hipAdductionRTR1.replace(/\n/g, '<br>');
      html += `
     <div class="label">
      <h2>Hip Adductors  RT - R1  :${formated}</h2>
      </div>
    `;
    }
    if (hipAdductionRTR2) {
      const formated = hipAdductionRTR2.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>Hip Adductors  RT - R2  :${formated}</h2>
      </div>
    `;
    }
    if (hipAdductionLTR1) {
      const formated = hipAdductionLTR1.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>Hip Adductors  LT - R1  :${formated}</h2>
      </div>
    `;
    }
    if (hipAdductionLTR2) {
      const formated = hipAdductionLTR2.replace(/\n/g, '<br>');
      html += `
    <div class="label">
      <h2>Hip Adductors  LT - L2  :${formated}</h2>
      </div>
    `;
    }

    // Section 8 => ROM

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
      ambulationIndependent ||
      gmfcOptions ||
      macsOptions ||
      miniMacOptions ||
      cfcsOptions ||
      functionLimitations
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

    if (functionLimitations.trim()) {
      html += `
      <div class="label">
      <h2>Function Goals : ${functionLimitations}</h2>
      </div>
    `;
    }

    if (adl) {
      const lines = adl.split('\n');
      const bulletPoints = lines
        .map(line => (line.trim() !== '' ? `<li>${line}</li>` : ''))
        .join('');

      if (bulletPoints) {
        html += `
          <div class="label">
            <h1>ADL , Activities for Daily Living - ${bulletPoints}</h1>
          </div>
          `;
      }
    }

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
      const lines = bodyStructurePositive.split('\n');
      const bulletPoints = lines
        .map(line => (line.trim() !== '' ? `<li>${line}</li>` : ''))
        .join('');
      if (bulletPoints) {
        html += `
          <div class="label">
            <h2>Body Structure Positive:</h2>
            <ul>${bulletPoints}</ul>
          </div>
        `;
      }
    }

    if (bodyStructureNegative) {
      const lines = bodyStructureNegative.split('\n');
      const bulletPoints = lines
        .map(line => (line.trim() !== '' ? `<li>${line}</li>` : ''))
        .join('');
      if (bulletPoints) {
        html += `
      <div class="label">
      <h2>Body Structure - Negative  : ${bulletPoints}</h2>
      </div>
  
      `;
      }
    }

    if (bodyFunctionPositive) {
      const lines = bodyFunctionPositive.split('\n');
      const bulletPoints = lines
        .map(line => (line.trim() !== '' ? `<li>${line}</li>` : ''))
        .join('');

      if (bulletPoints) {
        html += `
        <div class="label">
        <h2>Body Function - Positive  : ${bulletPoints}</h2>
        </div>ICF
        `;
      }
    }
    if (bodyFunctionNegative) {
      const lines = bodyFunctionNegative.split('\n');
      const bulletPoints = lines
        .map(line => (line.trim() !== '' ? `<li>${line}</li>` : ''))
        .join('');

      if (bulletPoints) {
        html += `
       <div class="label">
        <h2>Body Function - Negative : ${bulletPoints}</h2>
        </div>
        `;
      }
    }

    if (activitiesParticipation) {
      const lines = activitiesParticipation.split('\n');
      const bulletPoints = lines
        .map(line => (line.trim() !== '' ? `<li>${line}</li>` : ''))
        .join('');
      if (bulletPoints) {
        html += `
        <div class="label">
        <h2>Activities  - Participation : ${bulletPoints}</h2>
        </div>
        `;
      }
    }
    if (activitiesLimitation) {
      const lines = activitiesLimitation.split('\n');
      const bulletPoints = lines
        .map(line => (line.trim() !== '' ? `<li>${line}</li>` : ''))
        .join('');
      const formated = activitiesLimitation.replace(/\n/g, '<br>');
      if (bulletPoints) {
        html += `
        <div class="label">
        <h2>Activities  -  Limitation  : ${bulletPoints}</h2>
        </div>

        `;
      }
    }

    if (environmentalPersonal) {
      const lines = environmentalPersonal.split('\n');
      const bulletPoints = lines
        .map(line => (line.trim() !== '' ? `<li>${line}</li>` : ''))
        .join('');
      if (bulletPoints) {
        html += `
          <div class="label">
             <h2>Environmental - Personal  : ${bulletPoints}</h2>
             </div>
     
             `;
      }
    }
    if (environmentalContextual) {
      const lines = environmentalContextual.split('\n');
      const bulletPoints = lines
        .map(line => (line.trim() !== '' ? `<li>${line}</li>` : ''))
        .join('');
      if (bulletPoints) {
        html += `
      <div class="label">
        <h2>Environmental - Contextual : ${bulletPoints}</h2>
        </div>

        `;
      }
    }

    if (shortTermGoals) {
      const formated = shortTermGoals.replace(/\n/g, '<br>');
      html += `
       <div class="label">
        <h2>Short term goals  : ${formated}</h2>
        </div>
        `;
    }
    if (longTermGoals) {
      const formated = longTermGoals.replace(/\n/g, '<br>');
      html += `
        <div class="label">
        <h2>Long term goals  : ${formated}</h2>
        </div>
        `;
    }

    if (intervention) {
      const formated = intervention.replace(/\n/g, '<br>');
      html += `
       <div class="label">
        <h2>Intervention  : ${formated}</h2>
        </div>
        `;
    }

    if (equipments) {
      const formated = equipments.replace(/\n/g, '<br>');
      html += `
       <div class="label">
        <h2>Equipments / Instruments used : ${formated}</h2>
        </div>
        `;
    }

    if (section17Coms) {
      const formated = section17Coms.replace(/\n/g, '<br>');
      html += `
       <div class="label">
        <h2>ICF Comments : ${formated}</h2>
        </div>

        `;
    }

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
      const formated = postureAnswer.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>What posture the child normally adopts ?  :  ${formated}</h2>
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
      const lines = generalPosture.split('\n');
      const bulletPoints = lines
        .map(line => (line.trim() !== '' ? `<li>${line}</li>` : ''))
        .join('');
      if (bulletPoints) {
        html += `
      <div class="label">
      <h2>General Posture : ${bulletPoints}</h2>
      </div>
    `;
      }
    }

    if (callosities) {
      const lines = callosities.split('\n');
      const bulletPoints = lines
        .map(line => (line.trim() !== '' ? `<li>${line}</li>` : ''))
        .join('');
      if (bulletPoints) {
        html += `
          <div class="label">
          <h2>Callosities : ${bulletPoints}</h2>
          </div>
        `;
      }
    }

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
      const formated = initiateComs.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>Initiation Comments : ${formated}</h2>
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
      const formated = sustenanceComs.replace(/\n/g, '<br>');
      html += `
    <div class="label">
      <h2>Sustenance Comments : ${formated}</h2>
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
      const formated = terminationComs.replace(/\n/g, '<br>');
      html += `
   <div class="label">
      <h2>Termination Comments: ${formated}</h2>
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
      const formated = controlGradComs.replace(/\n/g, '<br>');
      html += `
     <div class="label">
      <h2>Control Gradation Comments : ${formated}</h2>
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
      const formated = singleAssesment.replace(/\n/g, '<br>');
      html += `
     <div class="label">
      <h2>Single System Assesment Comments :  ${formated}</h2>
      </div>

    `;
    }

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
      const formated = sensoryComs.replace(/\n/g, '<br>');
      html += `
      <div class="section"><div class="label">
      <h2>Sensory Modulation Comments : ${formated}</h2>
      </div>
 
      `;
    }

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
      const formated = sensoryBcoms.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>Sensory Processing Comments: ${formated}</h2>
      </div>
      `;
    }

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
      const lines = focalVision.split('\n');
      const bulletPoints = lines
        .map(line => (line.trim() !== '' ? `<li>${line}</li>` : ''))
        .join('');
      if (bulletPoints) {
        html += `
     <div class="label">
      <h2>Focal Vision : ${bulletPoints}</h2>
      </div>
      `;
      }
    }

    if (ambientVision) {
      const lines = focalVision.split('\n');
      const bulletPoints = lines
        .map(line => (line.trim() !== '' ? `<li>${line}</li>` : ''))
        .join('');
      if (bulletPoints) {
        html += `
      <div class="label">
      <h2>Ambient Vision : ${bulletPoints}</h2>
      </div>
      `;
      }
    }

    if (eyeMovementSystem) {
      const lines = eyeMovementSystem.split('\n');
      const bulletPoints = lines
        .map(line => (line.trim() !== '' ? `<li>${line}</li>` : ''))
        .join('');
      if (bulletPoints) {
        html += `
      <div class="label">
      <h2>Eye Movement System : ${bulletPoints}</h2>
      </div>
      `;
      }
    }

    if (localization) {
      const lines = localization.split('\n');
      const bulletPoints = lines
        .map(line => (line.trim() !== '' ? `<li>${line}</li>` : ''))
        .join('');
      if (bulletPoints) {
        html += `
      <div class="label">
      <h2>Localization : ${bulletPoints}</h2>
      </div>
      `;
      }
    }

    if (tracking) {
      const lines = tracking.split('\n');
      const bulletPoints = lines
        .map(line => (line.trim() !== '' ? `<li>${line}</li>` : ''))
        .join('');
      if (bulletPoints) {
        html += `
        <div class="label">
         <h2>Tracking : ${bulletPoints}</h2>
         </div>
         `;
      }
    }

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
      const formated = gmfm.replace(/\n/g, '<br>');
      html += `
    <div class="label">
      <h2>GMFM : ${formated}</h2>
      </div>
      `;
    }
    if (pedi) {
      const formated = pedi.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>PEDI : ${formated}</h2>
      </div>

      `;
    }

    if (pediatricBalanceScale) {
      const formated = pediatricBalanceScale.replace(/\n/g, '<br>');
      html += `
     <div class="label">
      <h2>Pediatric Balance Scale : ${formated}</h2>

      `;
    }

    if (wotaAquaticScale) {
      const formated = wotaAquaticScale.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>WOTA (AquaticScale) : ${formated}</h2>
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

    html += `
    <footer id="footer">
    
  <div class="container">
    <div class="row">
    <div class="col">
  <div class="d-flex flex-column">
  <img id="image"
  alt=""
   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII=" />
    <h2>${accessorName}</h2>
    <h2>${accessorDesignation}</h2>
  </div>
  </div>
      <div class="col">
        <div class="d-flex align-items-center">
        <br>
        <img id="image" alt="" src="data:image/png;base64,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" />
        <br>
        <div>
      <h2>Dr Dipti Patil</h2>
      <h2>Director of AARROSH </h2>
      <h2>PT, Advanced NDT Certified Therapist (USA)</h2>
      <h2>Certified Aquatic therapist</h2>
      <h2>Assistant Lecturer in IATF (Switzerland)</h2>
      <h2>Certified GM Practitioner(Austria)</h2>
    </div>
  </div>
</div>
</div>
</div>
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
          {/* <Section1 /> */}
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
        {/* SECTION II => HISTORY  */}
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
          <View style={styles.inputTextContainer}>
            <TextInput
              value={fatherAge}
              onChangeText={fatherAgeHandler}
              keyboardType="numeric"
              placeholder="Father's Age During Conception"
              placeholderTextColor="#FFFFFF"
              style={styles.userAge}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={motherAge}
              onChangeText={motherAgeHandler}
              keyboardType="numeric"
              placeholder="Mother's Age During Conception"
              placeholderTextColor="#FFFFFF"
              style={styles.userAge}
            />
          </View>
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
                <Picker
                  selectedValue={workLoad}
                  onValueChange={workLoadHandler}>
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
              value={reasonNicuStay}
              multiline={true}
              numberOfLines={4}
              onChangeText={reasonNicuStayHandler}
              keyboardType="ascii-capable"
              placeholder="Reason for NICU Stay"
              placeholderTextColor="#FFFFFF"
              style={styles.presentText}
            />
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
          <Text
            style={{
              color: '#169cc4',
              fontWeight: 'bold',
              fontSize: wp('3.5%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Gross Motor
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
          <Text
            style={{
              color: '#169cc4',
              fontWeight: 'bold',
              fontSize: wp('3.5%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Fine motor
          </Text>
          <View style={styles.developmentMilestoneContainer}>
            <TextInput
              value={fineMotor}
              multiline={true}
              numberOfLines={4}
              onChangeText={fineMotorHandler}
              keyboardType="ascii-capable"
              placeholder="Comments"
              placeholderTextColor="#FFFFFF"
              style={styles.developmentMileStoneText}
            />
          </View>
          <Text
            style={{
              color: '#169cc4',
              fontWeight: 'bold',
              fontSize: wp('3.5%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Communication
          </Text>
          <View style={styles.developmentMilestoneContainer}>
            <TextInput
              value={communications}
              multiline={true}
              numberOfLines={4}
              onChangeText={communicationsHandler}
              keyboardType="ascii-capable"
              placeholder="Comments"
              placeholderTextColor="#FFFFFF"
              style={styles.developmentMileStoneText}
            />
          </View>
          <Text
            style={{
              color: '#169cc4',
              fontWeight: 'bold',
              fontSize: wp('3.5%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Social Behavior
          </Text>
          <View style={styles.developmentMilestoneContainer}>
            <TextInput
              value={socialBehavior}
              multiline={true}
              numberOfLines={4}
              onChangeText={socialBehaviorHandler}
              keyboardType="ascii-capable"
              placeholder="Comments"
              placeholderTextColor="#FFFFFF"
              style={styles.developmentMileStoneText}
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
          <View>
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
            <View style={{flexDirection: 'row'}}>
              <View>
                <TouchableOpacity
                  onPress={openGalleryMRI}
                  style={styles.newBtn}>
                  <Text style={styles.newBtnText}>Select Image</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={openCameraMRI} style={styles.newBtn}>
                <Text style={styles.newBtnText}>Click Image</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              {selectedImageMRI && !clickedImageMRI ? (
                <View>
                  <Image
                    source={{uri: selectedImageMRI}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  <View>
                    <TouchableOpacity onPress={() => setselectedImageMRI('')}>
                      <Image
                        source={require('../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View>
                  <Image
                    source={{uri: selectedImageMRI}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  {selectedImageMRI ? (
                    <View>
                      <TouchableOpacity onPress={() => setselectedImageMRI('')}>
                        <Image
                          source={require('../assets/cross.png')}
                          style={{
                            tintColor: '#808080',
                            marginHorizontal: wp('20%'),
                            marginVertical: wp('6%'),
                            width: 50,
                            height: 50,
                            borderRadius: 5,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              )}
              {clickedImageMRI && !selectedImageMRI ? (
                <View>
                  <Image
                    source={{uri: clickedImageMRI}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  <View>
                    <TouchableOpacity onPress={() => setclickedImageMRI('')}>
                      <Image
                        source={require('../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View>
                  <Image
                    source={{uri: clickedImageMRI}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  {clickedImageMRI ? (
                    <View>
                      <TouchableOpacity onPress={() => setclickedImageMRI('')}>
                        <Image
                          source={require('../assets/cross.png')}
                          style={{
                            tintColor: '#808080',
                            marginHorizontal: wp('20%'),
                            marginVertical: wp('6%'),
                            width: 50,
                            height: 50,
                            borderRadius: 5,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              )}
            </View>
          </View>
          <View>
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
            <View style={{flexDirection: 'row'}}>
              <View>
                <TouchableOpacity
                  onPress={openGalleryEEG}
                  style={styles.newBtn}>
                  <Text style={styles.newBtnText}>Select Image</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={openCameraEEG} style={styles.newBtn}>
                <Text style={styles.newBtnText}>Click Image</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              {selectedImageEEG && !clickedImageEEG ? (
                <View>
                  <Image
                    source={{uri: selectedImageEEG}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  <View>
                    <TouchableOpacity onPress={() => setselectedImageEEG('')}>
                      <Image
                        source={require('../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View>
                  <Image
                    source={{uri: selectedImageEEG}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  {selectedImageEEG ? (
                    <View>
                      <TouchableOpacity onPress={() => setselectedImageEEG('')}>
                        <Image
                          source={require('../assets/cross.png')}
                          style={{
                            tintColor: '#808080',
                            marginHorizontal: wp('20%'),
                            marginVertical: wp('6%'),
                            width: 50,
                            height: 50,
                            borderRadius: 5,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              )}
              {clickedImageEEG && !selectedImageEEG ? (
                <View>
                  <Image
                    source={{uri: clickedImageEEG}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  <View>
                    <TouchableOpacity onPress={() => setclickedImageEEG('')}>
                      <Image
                        source={require('../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View>
                  <Image
                    source={{uri: clickedImageEEG}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  {clickedImageEEG ? (
                    <View>
                      <TouchableOpacity onPress={() => setclickedImageEEG('')}>
                        <Image
                          source={require('../assets/cross.png')}
                          style={{
                            tintColor: '#808080',
                            marginHorizontal: wp('20%'),
                            marginVertical: wp('6%'),
                            width: 50,
                            height: 50,
                            borderRadius: 5,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              )}
            </View>
          </View>
          <View>
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
            <View style={{flexDirection: 'row'}}>
              <View>
                <TouchableOpacity
                  onPress={openGalleryBERA}
                  style={styles.newBtn}>
                  <Text style={styles.newBtnText}>Select Image</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={openCameraBERA} style={styles.newBtn}>
                <Text style={styles.newBtnText}>Click Image</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              {selectedImageBERA && !clickedImageBERA ? (
                <View>
                  <Image
                    source={{uri: selectedImageBERA}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  <View>
                    <TouchableOpacity onPress={() => setselectedImageBERA('')}>
                      <Image
                        source={require('../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View>
                  <Image
                    source={{uri: selectedImageBERA}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  {selectedImageBERA ? (
                    <View>
                      <TouchableOpacity
                        onPress={() => setselectedImageBERA('')}>
                        <Image
                          source={require('../assets/cross.png')}
                          style={{
                            tintColor: '#808080',
                            marginHorizontal: wp('20%'),
                            marginVertical: wp('6%'),
                            width: 50,
                            height: 50,
                            borderRadius: 5,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              )}
              {clickedImageBERA && !selectedImageBERA ? (
                <View>
                  <Image
                    source={{uri: clickedImageBERA}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  <View>
                    <TouchableOpacity onPress={() => setclickedImageBERA('')}>
                      <Image
                        source={require('../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View>
                  <Image
                    source={{uri: clickedImageBERA}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  {clickedImageBERA ? (
                    <View>
                      <TouchableOpacity onPress={() => setclickedImageBERA('')}>
                        <Image
                          source={require('../assets/cross.png')}
                          style={{
                            tintColor: '#808080',
                            marginHorizontal: wp('20%'),
                            marginVertical: wp('6%'),
                            width: 50,
                            height: 50,
                            borderRadius: 5,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              )}
            </View>
          </View>

          <View>
            <View style={styles.investigationContainer}>
              <TextInput
                value={opthalmalogy}
                onChangeText={setOpthalmalogyHandler}
                keyboardType="ascii-capable"
                multiline={true}
                numberOfLines={4}
                placeholder="OPTHALMAOLOGY"
                placeholderTextColor="#FFFFFF"
                style={styles.investigationText}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <TouchableOpacity
                  onPress={openGalleryOPT}
                  style={styles.newBtn}>
                  <Text style={styles.newBtnText}>Select Image</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={openCameraOPT} style={styles.newBtn}>
                <Text style={styles.newBtnText}>Click Image</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              {selectedImageOPT && !clickedImageOPT ? (
                <View>
                  <Image
                    source={{uri: selectedImageOPT}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  <View>
                    <TouchableOpacity onPress={() => setselectedImageOPT('')}>
                      <Image
                        source={require('../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View>
                  <Image
                    source={{uri: selectedImageOPT}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  {selectedImageOPT ? (
                    <View>
                      <TouchableOpacity onPress={() => setselectedImageOPT('')}>
                        <Image
                          source={require('../assets/cross.png')}
                          style={{
                            tintColor: '#808080',
                            marginHorizontal: wp('20%'),
                            marginVertical: wp('6%'),
                            width: 50,
                            height: 50,
                            borderRadius: 5,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              )}
              {clickedImageOPT && !selectedImageOPT ? (
                <View>
                  <Image
                    source={{uri: clickedImageOPT}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  <View>
                    <TouchableOpacity onPress={() => setclickedImageOPT('')}>
                      <Image
                        source={require('../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View>
                  <Image
                    source={{uri: clickedImageOPT}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  {clickedImageOPT ? (
                    <View>
                      <TouchableOpacity onPress={() => setclickedImageOPT('')}>
                        <Image
                          source={require('../assets/cross.png')}
                          style={{
                            tintColor: '#808080',
                            marginHorizontal: wp('20%'),
                            marginVertical: wp('6%'),
                            width: 50,
                            height: 50,
                            borderRadius: 5,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              )}
            </View>
          </View>
          <View>
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
            <View style={{flexDirection: 'row'}}>
              <View>
                <TouchableOpacity
                  onPress={openGalleryXRAYS}
                  style={styles.newBtn}>
                  <Text style={styles.newBtnText}>Select Image</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={openCameraXRAYS} style={styles.newBtn}>
                <Text style={styles.newBtnText}>Click Image</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              {selectedImageXRAYS && !clickedImageXRAYS ? (
                <View>
                  <Image
                    source={{uri: selectedImageXRAYS}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  <View>
                    <TouchableOpacity onPress={() => setselectedImageXRAYS('')}>
                      <Image
                        source={require('../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View>
                  <Image
                    source={{uri: selectedImageXRAYS}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  {selectedImageXRAYS ? (
                    <View>
                      <TouchableOpacity
                        onPress={() => setselectedImageXRAYS('')}>
                        <Image
                          source={require('../assets/cross.png')}
                          style={{
                            tintColor: '#808080',
                            marginHorizontal: wp('20%'),
                            marginVertical: wp('6%'),
                            width: 50,
                            height: 50,
                            borderRadius: 5,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              )}
              {clickedImageXRAYS && !selectedImageXRAYS ? (
                <View>
                  <Image
                    source={{uri: clickedImageXRAYS}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  <View>
                    <TouchableOpacity onPress={() => setclickedImageXRAYS('')}>
                      <Image
                        source={require('../assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View>
                  <Image
                    source={{uri: clickedImageXRAYS}}
                    style={{
                      marginHorizontal: wp('15%'),
                      marginVertical: wp('6%'),
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                    }}
                  />
                  {clickedImageXRAYS ? (
                    <View>
                      <TouchableOpacity
                        onPress={() => setclickedImageXRAYS('')}>
                        <Image
                          source={require('../assets/cross.png')}
                          style={{
                            tintColor: '#808080',
                            marginHorizontal: wp('20%'),
                            marginVertical: wp('6%'),
                            width: 50,
                            height: 50,
                            borderRadius: 5,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              )}
            </View>
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
              value={deformitiesR}
              onChangeText={deformitiesRHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Deformities Right"
              placeholderTextColor="#FFFFFF"
              style={styles.objectiveAssesmentText}
            />
          </View>
          <View style={styles.objectiveAssesmentContainer}>
            <TextInput
              value={deformitiesL}
              onChangeText={deformitiesLHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Deformities Left"
              placeholderTextColor="#FFFFFF"
              style={styles.objectiveAssesmentText}
            />
          </View>
          <View style={styles.objectiveAssesmentContainer}>
            <TextInput
              value={contractureR}
              onChangeText={contractureRHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Contracture Right"
              placeholderTextColor="#FFFFFF"
              style={styles.objectiveAssesmentText}
            />
          </View>
          <View style={styles.objectiveAssesmentContainer}>
            <TextInput
              value={contractureL}
              onChangeText={contractureLHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Contracture Left"
              placeholderTextColor="#FFFFFF"
              style={styles.objectiveAssesmentText}
            />
          </View>
          <View style={styles.objectiveAssesmentContainer}>
            <TextInput
              value={tightnessR}
              onChangeText={tightnessRHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Tightness Right"
              placeholderTextColor="#FFFFFF"
              style={styles.objectiveAssesmentText}
            />
          </View>
          <View style={styles.objectiveAssesmentContainer}>
            <TextInput
              value={tightnessL}
              onChangeText={tightnessLHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Tightness Left"
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
                <Picker
                  selectedValue={backFlex}
                  onValueChange={backFlexHandler}>
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
                <Picker
                  selectedValue={neckFlex}
                  onValueChange={neckFlexHandler}>
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
                <Picker
                  selectedValue={kneeFlex}
                  onValueChange={kneeFlexHandler}>
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
                <Picker selectedValue={hipLat} onValueChange={hipLatHandler}>
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
                  selectedValue={forearmSup}
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
                  selectedValue={forearmPro}
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
                <Picker
                  selectedValue={wristExt}
                  onValueChange={wristExtHandler}>
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
                      color: 'black',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="2"
                    value="2"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="3"
                    value="3"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="4"
                    value="4"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="5"
                    value="5"
                    style={{color: 'black', fontSize: wp('2%')}}
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
                      color: 'black',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="2"
                    value="2"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="3"
                    value="3"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="4"
                    value="4"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="5"
                    value="5"
                    style={{color: 'black', fontSize: wp('2%')}}
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
                        color: 'black',
                        fontSize: wp('3%'),
                        textAlign: 'center',
                      }}
                    />
                    <Picker.Item
                      label="II"
                      value="II"
                      style={{color: 'black', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="III"
                      value="III"
                      style={{color: 'black', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="IV"
                      value="IV"
                      style={{color: 'black', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="V"
                      value="V"
                      style={{color: 'black', fontSize: wp('3%')}}
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
                        color: 'black',
                        fontSize: wp('3%'),
                        textAlign: 'center',
                      }}
                    />
                    <Picker.Item
                      label="II"
                      value="II"
                      style={{color: 'black', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="III"
                      value="III"
                      style={{color: 'black', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="IV"
                      value="IV"
                      style={{color: 'black', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="V"
                      value="V"
                      style={{color: 'black', fontSize: wp('3%')}}
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
                        color: 'black',
                        fontSize: wp('3%'),
                        textAlign: 'center',
                      }}
                    />
                    <Picker.Item
                      label="II"
                      value="II"
                      style={{color: 'black', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="III"
                      value="III"
                      style={{color: 'black', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="IV"
                      value="IV"
                      style={{color: 'black', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="V"
                      value="V"
                      style={{color: 'black', fontSize: wp('3%')}}
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
                        color: 'black',
                        fontSize: wp('3%'),
                        textAlign: 'center',
                      }}
                    />
                    <Picker.Item
                      label="II"
                      value="II"
                      style={{color: 'black', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="III"
                      value="III"
                      style={{color: 'black', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="IV"
                      value="IV"
                      style={{color: 'black', fontSize: wp('3%')}}
                    />
                    <Picker.Item
                      label="V"
                      value="V"
                      style={{color: 'black', fontSize: wp('3%')}}
                    />
                  </Picker>
                </View>
              </View>
            </View>
          </View>
          {/* ADL */}
          <Text
            style={{
              color: '#169cc4',
              fontWeight: 'bold',
              fontSize: wp('3.4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            ADL - Activities for Daily Living
            <View style={styles.objectiveAssesmentContainer}>
              <TextInput
                value={adl}
                onChangeText={adlHandler}
                keyboardType="ascii-capable"
                multiline={true}
                numberOfLines={4}
                placeholder="Comments"
                placeholderTextColor="#FFFFFF"
                style={styles.objectiveAssesmentText}
              />
            </View>
          </Text>
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
                numberOfLines={4}
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
                numberOfLines={4}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('50%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('5%'),
                  marginVertical: wp('3%'),
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
                numberOfLines={4}
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
                numberOfLines={4}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('50%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('5%'),
                  marginVertical: wp('3%'),
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
                numberOfLines={4}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('50%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('4%'),
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
                numberOfLines={4}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('50%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('6%'),
                  marginVertical: wp('3%'),
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
                numberOfLines={4}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('50%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('-5%'),
                }}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginVertical: wp('3%'),
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
                numberOfLines={4}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('50%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('5%'),
                  marginVertical: wp('3%'),
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
                numberOfLines={4}
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
                numberOfLines={4}
                placeholder="Comments"
                placeholderTextColor="#d6d6d6"
                style={{
                  height: null,
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
                numberOfLines={4}
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
                numberOfLines={4}
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
              numberOfLines={4}
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
                      color: 'black',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="-VE"
                    value="-VE"
                    style={{color: 'black', fontSize: wp('2%')}}
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
                      color: 'black',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="NO"
                    value="NO"
                    style={{color: 'black', fontSize: wp('2%')}}
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
                      color: 'black',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="NO"
                    value="NO"
                    style={{color: 'black', fontSize: wp('2%')}}
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
                      color: 'black',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="NO"
                    value="NO"
                    style={{color: 'black', fontSize: wp('2%')}}
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
                      color: 'black',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="NO"
                    value="NO"
                    style={{color: 'black', fontSize: wp('2%')}}
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
                      color: 'black',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="NO"
                    value="NO"
                    style={{color: 'black', fontSize: wp('2%')}}
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
                      color: 'black',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="NO"
                    value="NO"
                    style={{color: 'black', fontSize: wp('2%')}}
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
                      color: 'black',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="NO"
                    value="NO"
                    style={{color: 'black', fontSize: wp('2%')}}
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
                      color: 'black',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="NO"
                    value="NO"
                    style={{color: 'black', fontSize: wp('2%')}}
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
                      color: 'black',
                      fontSize: wp('2%'),
                      textAlign: 'center',
                    }}
                  />
                  <Picker.Item
                    label="NO"
                    value="NO"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
            <TextInput
              value={sensoryBcoms}
              onChangeText={sensoryBcomsHandler}
              keyboardType="ascii-capable"
              numberOfLines={4}
              multiline={true}
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
              2. Ambient Vision
            </Text>
            <TextInput
              value={ambientVision}
              onChangeText={ambientVisionHandler}
              keyboardType="ascii-capable"
              numberOfLines={4}
              multiline={true}
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
              numberOfLines={4}
              multiline={true}
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
              numberOfLines={4}
              multiline={true}
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
          <View style={styles.inputFieldContainerS17}>
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
          </View>
          {/* Assessor section */}
          <View style={styles.objectiveAssesmentContainer}>
            <TextInput
              value={accessorName}
              onChangeText={accessorNameHandler}
              keyboardType="ascii-capable"
              placeholder="Assessor's Name"
              placeholderTextColor="#FFFFFF"
              style={styles.objectiveAssesmentText}
            />
          </View>
          <View style={styles.objectiveAssesmentContainer}>
            <TextInput
              value={accessorDesignation}
              onChangeText={accessorDesignationHandler}
              keyboardType="ascii-capable"
              placeholder="Assessor's Designation"
              placeholderTextColor="#FFFFFF"
              style={styles.objectiveAssesmentText}
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
  checkBoxContainerHistory: {
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
  stressworkHead: {
    color: 'white',
    fontSize: wp('2.7%'),
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
    height: null,
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
    height: null,
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
    height: null,
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  inputFieldContainerMCQSensoryM: {
    width: wp('90%'),
    height: null,
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
    height: null,
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  inputFieldContainerS17: {
    width: wp('90%'),
    height: null,
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
  newBtn: {
    marginHorizontal: wp('5%'),
    marginVertical: wp('3%'),
    borderRadius: 20,
    backgroundColor: '#169cc4',
    height: hp('5%'),
    width: wp('35%'),
  },
  newBtnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginVertical: hp('1%'),
    marginHorizontal: hp('1%'),
    fontSize: hp('2%'),
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
