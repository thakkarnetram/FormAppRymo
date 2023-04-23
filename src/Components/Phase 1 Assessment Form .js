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

const Phase_1_Assessment_Form = () => {
  // locking screen to potrait mode
  Orientation.lockToPortrait();

  useEffect(() => {
    return () => {
      Orientation.unlockAllOrientations();
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
  const [assessmentBy, setAssessmentBy] = useState('');
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
  const assessmentByHandler = text => {
    setAssessmentBy(text);
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

  // Section V => Subjective Assessment
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

  // Section VII => Objective assessment
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

  // Section => Modified asworths
  const [backExt, setBackExt] = useState(['0-10', '10-15', '15-20', '20-25']);
  const [backFlex, setBackFlex] = useState(['0-30', '30-60', '60-90']);
  const [backLat, setBackLat] = useState(['0-10', '10-15', '15-20', '20-25']);
  const [neckFlex, setNeckFlex] = useState(['0-15', '15-30', '30-50']);
  const [neckExt, setNeckExt] = useState(['0-20', '20-40', '40-60']);
  const [neckLat, setNeckLat] = useState(['0-15', '15-30', '30-45']);
  const [hipFlex, setHipFlex] = useState(['0-25', '25-50', '50-75', '75-100']);
  const [hipExt, setHipExt] = useState(['0-15', '15-30']);
  const [hipAdd, setHipAdd] = useState(['0-15', '15-30', '30-45']);
  const [hipAbd, setHipAbd] = useState(['0-15', '15-30', '30-45']);
  const [kneeFlex, setKneeFlex] = useState(['0-50', '50-100', '100-150']);
  const [hipMedRot, setHipMedRot] = useState(['0-15', '15-30']);

  const handleBackExtChange = (index, value) => {
    const updatedRange = [...backExt];
    updatedRange[index] = value;
    setBackExt(updatedRange);
  };

  const handleBackFlexChange = (index, value) => {
    const updatedRange = [...backFlex];
    updatedRange[index] = value;
    setBackFlex(updatedRange);
  };

  const handleBackLatChange = (index, value) => {
    const updatedRange = [...backLat];
    updatedRange[index] = value;
    setBackLat(updatedRange);
  };

  const handleNeckFlexChange = (index, value) => {
    const updatedRange = [...neckFlex];
    updatedRange[index] = value;
    setNeckFlex(updatedRange);
  };

  const handleNeckExtChange = (index, value) => {
    const updatedRange = [...neckExt];
    updatedRange[index] = value;
    setNeckExt(updatedRange);
  };

  const handleNeckLatChange = (index, value) => {
    const updatedRange = [...neckLat];
    updatedRange[index] = value;
    setNeckLat(updatedRange);
  };

  const handleHipFlexChange = (index, value) => {
    const updatedRange = [...hipFlex];
    updatedRange[index] = value;
    setHipFlex(updatedRange);
  };

  const handleHipExtChange = (index, value) => {
    const updatedRange = [...hipExt];
    updatedRange[index] = value;
    setHipExt(updatedRange);
  };

  const handleHipAddChange = (index, value) => {
    const updatedRange = [...hipAdd];
    updatedRange[index] = value;
    setHipAdd(updatedRange);
  };

  const handleHipAbdChange = (index, value) => {
    const updatedRange = [...hipAbd];
    updatedRange[index] = value;
    setHipAbd(updatedRange);
  };

  const handleKneeFlexChange = (index, value) => {
    const updatedRange = [...kneeFlex];
    updatedRange[index] = value;
    setKneeFlex(updatedRange);
  };

  const handleHipMedRotChange = (index, value) => {
    const updatedRange = [...hipMedRot];
    updatedRange[index] = value;
    setHipMedRot(updatedRange);
  };

  // Section => Functional Evaluation
  const [supineToProneMoveable, setSupineToProneMoveable] = useState(false);
  const [supineToProneAssistance, setSupineToProneAssistance] = useState(false);
  const [supineToProneIndependent, setSupineToProneIndependent] =
    useState(false);

  const [supineToSitMoveable, setSupineToSitMoveable] = useState(false);
  const [supineToSitAssistance, setSupineToSitAssistance] = useState(false);
  const [supineToSitIndependent, setSupineToSitIndependent] = useState(false);

  const [sittingMoveable, setSittingMoveable] = useState(false);
  const [sittingAssistance, setSittingAssistance] = useState(false);
  const [sittingIndependent, setSittingIndependent] = useState(false);

  var [quadsMoveable, setQuadsMoveable] = useState(false);
  var [quadsAssistance, setQuadsAssistance] = useState(false);
  var [quadsIndependent, setQuadsIndependent] = useState(false);

  const [kneelingMoveable, setKneelingMoveable] = useState(false);
  const [kneelingAssistance, setKneelingAssistance] = useState(false);
  const [kneelingIndependent, setKneelingIndependent] = useState(false);

  const [halfKneelingMoveable, setHalfKneelingMoveable] = useState(false);
  const [halfKneelingAssistance, setHalfKneelingAssistance] = useState(false);
  const [halfKneelingIndependent, setHalfKneelingIndependent] = useState(false);

  const [standingMoveable, setStandingMoveable] = useState(false);
  const [standingAssistance, setStandingAssistance] = useState(false);
  const [standingIndependent, setStandingIndependent] = useState(false);

  const [ambulationMoveable, setAmbulationMoveable] = useState(false);
  const [ambulationAssistance, setAmbulationAssistance] = useState(false);
  const [ambulationIndependent, setAmbulationIndependent] = useState(false);

  const supineToProneMoveableHandler = () => {
    setSupineToProneMoveable(true);
    setSupineToProneAssistance(false);
    setSupineToProneIndependent(false);
  };

  const supineToProneAssistanceHandler = () => {
    setSupineToProneMoveable(false);
    setSupineToProneAssistance(true);
    setSupineToProneIndependent(false);
  };

  const supineToProneIndependentHandler = () => {
    setSupineToProneMoveable(false);
    setSupineToProneAssistance(false);
    setSupineToProneIndependent(true);
  };

  const supineToSitMoveableHandler = () => {
    setSupineToSitMoveable(true);
    setSupineToSitAssistance(false);
    setSupineToSitIndependent(false);
  };

  const supineToSitAssistanceHandler = () => {
    setSupineToSitMoveable(false);
    setSupineToSitAssistance(true);
    setSupineToSitIndependent(false);
  };

  const supineToSitIndependentHandler = () => {
    setSupineToSitMoveable(false);
    setSupineToSitAssistance(false);
    setSupineToSitIndependent(true);
  };

  const sittingMoveableHandler = () => {
    setSittingMoveable(true);
    setSittingAssistance(false);
    setSittingIndependent(false);
  };

  const sittingAssistanceHandler = () => {
    setSittingMoveable(false);
    setSittingAssistance(true);
    setSittingIndependent(false);
  };

  const sittingIndependentHandler = () => {
    setSittingMoveable(false);
    setSittingAssistance(false);
    setSittingIndependent(true);
  };

  const quadsMoveableHandler = () => {
    setQuadsMoveable(true);
    setQuadsAssistance(false);
    setQuadsIndependent(false);
  };

  const quadsAssistanceHandler = () => {
    setQuadsMoveable(false);
    setQuadsAssistance(true);
    setQuadsIndependent(false);
  };

  const quadsIndependentHandler = () => {
    setQuadsMoveable(false);
    setQuadsAssistance(false);
    setQuadsIndependent(true);
  };

  const kneelingMoveableHandler = () => {
    setKneelingMoveable(true);
    setKneelingAssistance(false);
    setKneelingIndependent(false);
  };

  const kneelingAssistanceHandler = () => {
    setKneelingMoveable(false);
    setKneelingAssistance(true);
    setKneelingIndependent(false);
  };

  const kneelingIndependentHandler = () => {
    setKneelingMoveable(false);
    setKneelingAssistance(false);
    setKneelingIndependent(true);
  };

  const halfKneelingMoveableHandler = () => {
    setHalfKneelingMoveable(true);
    setHalfKneelingAssistance(false);
    setHalfKneelingIndependent(false);
  };

  const halfKneelingAssistanceHandler = () => {
    setHalfKneelingMoveable(false);
    setHalfKneelingAssistance(true);
    setHalfKneelingIndependent(false);
  };

  const halfKneelingIndependentHandler = () => {
    setHalfKneelingMoveable(false);
    setHalfKneelingAssistance(false);
    setHalfKneelingIndependent(true);
  };

  const standingMoveableHandler = () => {
    setStandingMoveable(true);
    setStandingAssistance(false);
    setStandingIndependent(false);
  };

  const standingAssistanceHandler = () => {
    setStandingMoveable(false);
    setStandingAssistance(true);
    setStandingIndependent(false);
  };

  const standingIndependentHandler = () => {
    setStandingMoveable(false);
    setStandingAssistance(false);
    setStandingIndependent(true);
  };

  const ambulationMoveableHandler = () => {
    setAmbulationMoveable(true);
    setAmbulationAssistance(false);
    setAmbulationIndependent(false);
  };

  const ambulationAssistanceHandler = () => {
    setAmbulationMoveable(false);
    setAmbulationAssistance(true);
    setAmbulationIndependent(false);
  };

  const ambulationIndependentHandler = () => {
    setAmbulationMoveable(false);
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

  // Single System Assessment
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

  const [contraction, setContraction] = useState(false);
  const [reciprocalInhibition, setReciprocalInhibition] = useState(false);
  const [
    comsContraction_ReciprocalInhibition,
    setComsContraction_ReciprocalInhibition,
  ] = useState('');

  const [massEnergy, setMassEnergy] = useState(false);
  const [isolatedWork, setIsolatedWork] = useState(false);
  const [massEnergy_isolatedWorkComs, setMassEnergy_isolatedWorkComs] =
    useState('');

  const [dynamicStiffnessYes, setDynamicStiffnessYes] = useState(false);
  const [dynamicStiffnessNo, setDynamicStiffnessNo] = useState(false);
  const [comsDynamicStiffness, setComsDynamicStiffness] = useState('');

  const [extraneousMovementYes, setExtraneousMovementYes] = useState(false);
  const [extraneousMovementNo, setExtraneousMovementNo] = useState(false);
  const [comsExtraneousMovement, setComsExtraneousMovement] = useState('');

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

  const contractionHandler = () => {
    setContraction(true);
    setReciprocalInhibition(false);
  };

  const reciprocalInhibitionHandler = () => {
    setContraction(false);
    setReciprocalInhibition(true);
  };

  const comsContraction_ReciprocalInhibitionHandler =
    comsContraction_ReciprocalInhibition => {
      setComsContraction_ReciprocalInhibition(
        comsContraction_ReciprocalInhibition,
      );
    };

  const massEnergyHandler = () => {
    setMassEnergy(true);
    setIsolatedWork(false);
  };

  const isolatedWorkHandler = () => {
    setMassEnergy(false);
    setIsolatedWork(true);
  };

  const massEnergy_isolatedWorkComsHandler = massEnergy_isolatedWorkComs => {
    setMassEnergy_isolatedWorkComs(massEnergy_isolatedWorkComs);
  };

  const dynamicStiffnessNoHandler = () => {
    setDynamicStiffnessNo(true);
    setDynamicStiffnessYes(false);
  };

  const dynamicStiffnessYesHandler = () => {
    setDynamicStiffnessNo(false);
    setDynamicStiffnessYes(true);
  };

  const comsDynamicStiffnessHandler = comsDynamicStiffness => {
    setComsDynamicStiffness(comsDynamicStiffness);
  };

  const extraneousMovementNoHandler = () => {
    setExtraneousMovementNo(true);
    setExtraneousMovementYes(false);
  };

  const extraneousMovementYesHandler = () => {
    setExtraneousMovementNo(false);
    setExtraneousMovementYes(true);
  };

  const comsExtraneousMovementHandler = comsExtraneousMovement => {
    setComsExtraneousMovement(comsExtraneousMovement);
  };

  // Multi System Assessment => Posture and Movement
  // a posture
  const [postureAnswer, setPostureAnswer] = useState('');

  // b alignment
  const [asymmetry, setAsymmetry] = useState(false);
  const [side, setSide] = useState(false);

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

  const sideHandler = () => {
    setAsymmetry(false);
    setSide(true);
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
  const [movementComs, setMovementComs] = useState('');

  const [staticBalanceGood, setStaticBalanceGood] = useState(false);
  const [staticBalanceFair, setStaticBalanceFair] = useState(false);
  const [staticBalancePoor, setStaticBalancePoor] = useState(false);
  const [staticBalanceComs, setStaticBalanceComs] = useState('');

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

  const movementComsHandler = movementComs => {
    setMovementComs(movementComs);
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

  const staticBalanceComsHandler = staticBalanceComs => {
    setStaticBalanceComs(staticBalanceComs);
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

  // Generating html
  const generateHtml = () => {
    let html = `
    <html>
    <head>
      <style>
      body{font-family:Arial;
       padding:10px;} h1{font-size:24px; margin-bottom:10px;} 
       .section{margin-bottom:15px; border-bottom:1px solid #ccc; padding-bottom:20px;}
        .label{font-weight:bold; margin-bottom:5px; color:#555;} 
        .value{font-weight:bold;}
        </style>
        </head>
        <body>`;

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
      assessmentBy ||
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
      html += `<div class="section"><div class="label"><h2>First Name:</h2></div><div class="value"><h3>${firstName.trim()}</h3></div></div>`;
    }
    if (lastName.trim()) {
      html += `<div class="section"><div class="label"><h2>Last Name:</h2></div><div class="value"><h3>${lastName.trim()}</h3></div></div>`;
    }
    if (userAge.trim()) {
      html += `<div class="section"><div class="label"><h2>Age:</h2></div><div class="value"><h3>${userAge.trim()}</h3></div></div>`;
    }
    if (male) {
      html += `<div class="section"><div class="label"><h2>Gender:</h2></div><div class="value"><h3>Male</h3></div></div>`;
    } else if (female) {
      html += `<div class="section"><div class="label"><h2>Gender:</h2></div><div class="value"><h3>Female</h3></div></div>`;
    }

    const today = new Date();
    const dobString =
      userDob.getTime() === 0 ? '00/00/0000' : userDob.toLocaleDateString();
    if (userDob.getTime() !== today.getTime()) {
      html += `<div class="section"><div class="label"><h2> Date of Birth : </h2></div><div class="value dob"><h3>${dobString}</h3></div></div>`;
    }

    const doeString =
      evaluationDate.getTime() === 0
        ? '00/00/0000'
        : evaluationDate.toLocaleDateString();
    if (evaluationDate.getTime() !== today.getTime()) {
      html += `<div class="section"><div class="label"><h2>Date of Evaluation:</h2></div><div class="value doe"><h3>${doeString}</h3></div></div>`;
    }
    if (informant.trim()) {
      html += `<div class="section"><div class="label"><h2>Informant:</h2></div><div class="value"><h3>${informant.trim()}</h3></div></div>`;
    }
    if (assessmentBy.trim()) {
      html += `<div class="section"><div class="label"><h2>Addressed By:</h2></div><div class="value"><h3>${assessmentBy.trim()}</h3></div></div>`;
    }
    if (diagnosis.trim()) {
      html += `<div class="section"><div class="label"><h2>Diagnosis:</h2></div><div class="value"><h3>${diagnosis.trim()}</h3></div></div>`;
    }
    if (referredBy.trim()) {
      html += `<div class="section"><div class="label"><h2>Referred By:</h2></div><div class="value"><h3>${referredBy.trim()}</h3></div></div>`;
    }

    if (gmfcOptions) {
      html += `
          <div class="section"><div class="label">
          <h2>GMFC</h2></div><div class="value">
          <h3>${gmfcOptions}</h3>
          </div>
          </div>
        `;
    }

    if (macsOptions) {
      html += `
      <div class="section"><div class="label">
          <h2>MACS</h2></div><div class="value">
          <h3>${macsOptions}</h3>
          </div>
          </div>
        `;
    }

    if (miniMacOptions) {
      html += `
      <div class="section"><div class="label">
          <h2>Mini Mac</h2></div><div class="value">
          <h3>${miniMacOptions}</h3>
          </div>
          </div>
        `;
    }

    if (cfcsOptions) {
      html += `
      <div class="section"><div class="label">
      <h2>CFCS</h2></div><div class="value">
      <h3>${cfcsOptions}</h3>
      </div>
      </div>
        `;
    }

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
      <div class="section">
        <div class="label"><h2> Pre Natal :</h2></div>
        <div class="value">
          <h3>Modes of Ambulation: ${preNatal.join(', ')}</h3>
        </div>
      </div>
    `;
    }

    if (fullTerm) {
      html += `
      <div class="section">
        <div class="label"><h2>Natal :</h2></div>
        <div class="value"><h3>Full Term</h3></div>
      </div>
    `;
    } else if (preTerm) {
      html += `
      <div class="section">
        <div class="label"><h2>Natal :</h2></div>
        <div class="value"><h3>Pre Term</h3></div>
      </div>
    `;
    }

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
      <div class="value">
      </div>
      `;
    }

    if (ciabYes) {
      html += `
      <div class="section">
        <div class="label"><h2>CIAB :</h2></div>
        <div class="value"><h3>Yes</h3></div>
      </div>
    `;
    } else if (ciabNo) {
      html += `
      <div class="section">
        <div class="label"><h2>CIAB :</h2></div>
        <div class="value"><h3>No</h3></div>
      </div>
    `;
    }

    if (userBirthWeight.trim()) {
      html += `<div class="section">
      <div class="label">
      <h2>Birth Weight (kgs) </h2>
      </div><div class="value">
      <h3>${userBirthWeight.trim()}</h3>
      </div></div>`;
    }

    if (userHeadCircumference.trim()) {
      html += `<div class="section">
      <div class="label">
      <h2>Head Circumference (cms) </h2>
      </div><div class="value">
      <h3>${userHeadCircumference.trim()}</h3>
      </div></div>`;
    }

    if (day1To7days) {
      html += `<div class="section">
      <div class="label">
      <h2>NICU STAY</h2>
      </div><div class="value">
      <h3>1 day - 7 day</h3>
      </div></div>`;
    } else if (week1To4weeks) {
      html += `<div class="section">
      <div class="label">
      <h2>NICU STAY</h2>
      </div><div class="value">
      <h3>1 Week - 4 Week</h3>
      </div></div>`;
    } else if (week4To4months) {
      html += `<div class="section">
      <div class="label">
      <h2>NICU STAY</h2>
      </div><div class="value">
      <h3>4 Week - 4 Month</h3>
      </div></div>`;
    }

    if (presentHistory.trim()) {
      html += `<div class="section">
      <div class="label"><h2>Present History - </h2>
      </div><div class="value"><h3>${presentHistory.trim()}</h3>
      </div></div>`;
    }
    if (chiefComplaint.trim()) {
      html += `<div class="section">
      <div class="label"><h2>Chief Complaint - </h2>
      </div><div class="value"><h3>${chiefComplaint.trim()}</h3>
      </div></div>`;
    }

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
        <h1>3. Subjective Assessment</h1>
      </div>
      <div class="value">
      </div>
      `;
    }

    if (sightIntact) {
      html += `<div class="section">
      <div class="label"><h2>Sight - </h2>
      </div><div class="value"><h3>Intact</h3>
      </div></div>`;
    } else if (sightNotIntact) {
      html += `<div class="section">
      <div class="label"><h2>Sight - </h2>
      </div><div class="value"><h3>Not Intact</h3>
      </div></div>`;
    }

    if (hearingIntact) {
      html += `<div class="section">
      <div class="label"><h2>Hearing - </h2>
      </div><div class="value"><h3>Intact</h3>
      </div></div>`;
    } else if (hearingNotIntact) {
      html += `<div class="section">
      <div class="label"><h2>Hearing - </h2>
      </div><div class="value"><h3>Not Intact</h3>
      </div></div>`;
    }

    if (speechIntact) {
      html += `<div class="section">
      <div class="label"><h2>Speech/Communication - </h2>
      </div><div class="value"><h3>Intact</h3>
      </div></div>`;
    } else if (speechNotIntact) {
      html += `<div class="section">
      <div class="label"><h2>Speech/Communication - </h2>
      </div><div class="value"><h3>Not Intact</h3>
      </div></div>`;
    }

    if (carried) {
      html += `<div class="section">
      <div class="label"><h2>Mode Of Ambulation -</h2>
      </div><div class="value"><h3>Carried by Parent</h3>
      </div></div>`;
    } else if (walkingSticks) {
      html += `<div class="section">
      <div class="label"><h2>Mode Of Ambulation -</h2>
      </div><div class="value"><h3>Walking with Sticks</h3>
      </div></div>`;
    } else if (wheelChair) {
      html += `<div class="section">
      <div class="label"><h2>Mode Of Ambulation -</h2>
      </div><div class="value"><h3>Wheel Chair</h3>
      </div></div>`;
    } else if (walkingWalker) {
      html += `<div class="section">
      <div class="label"><h2>Mode Of Ambulation -</h2>
      </div><div class="value"><h3>Walking with Walker</h3>
      </div></div>`;
    } else if (walkingIndependently) {
      html += `<div class="section">
      <div class="label"><h2>Mode Of Ambulation -</h2>
      </div><div class="value"><h3>Walking Independently</h3>
      </div></div>`;
    }

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
      html += `<div class="section">
      <div class="label"><h2>Hand Holding - </h2>
      </div><div class="value"><h3>${handHolding.trim()}</h3>
      </div></div>`;
    }
    if (rolling.trim()) {
      html += `<div class="section">
      <div class="label"><h2>Rolling - </h2>
      </div><div class="value"><h3>${rolling.trim()}</h3>
      </div></div>`;
    }
    if (crawling.trim()) {
      html += `<div class="section">
      <div class="label"><h2>Crawling - </h2>
      </div><div class="value"><h3>${crawling.trim()}</h3>
      </div></div>`;
    }
    if (sitting.trim()) {
      html += `<div class="section">
      <div class="label"><h2>Sitting- </h2>
      </div><div class="value"><h3>${handHolding.trim()}</h3>
      </div></div>`;
    }
    if (standing.trim()) {
      html += `<div class="section">
      <div class="label"><h2>Standing - </h2>
      </div><div class="value"><h3>${standing.trim()}</h3>
      </div></div>`;
    }
    if (walking.trim()) {
      html += `<div class="section">
      <div class="label"><h2>Walking - </h2>
      </div><div class="value"><h3>${walking.trim()}</h3>
      </div></div>`;
    }

    // Section 5

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
      html += `<div class="section">
      <div class="label"><h2>MRI - </h2>
      </div><div class="value"><h3>${mri.trim()}</h3>
      </div></div>`;
    }

    if (eeg.trim()) {
      html += `<div class="section">
      <div class="label"><h2>EEG - </h2>
      </div><div class="value"><h3>${eeg.trim()}</h3>
      </div></div>`;
    }

    if (bera.trim()) {
      html += `<div class="section">
      <div class="label"><h2>Bera - </h2>
      </div><div class="value"><h3>${bera.trim()}</h3>
      </div></div>`;
    }

    if (opthalmalogy.trim()) {
      html += `<div class="section">
      <div class="label"><h2>Ophthalmalogy - </h2>
      </div><div class="value"><h3>${opthalmalogy.trim()}</h3>
      </div></div>`;
    }

    if (xRays.trim()) {
      html += `<div class="section">
      <div class="label"><h2>X-Rays - </h2>
      </div><div class="value"><h3>${xRays.trim()}</h3>
      </div></div>`;
    }

    html += `</br>`;
    // Section 6

    if (hypertonia || hypotonia || deformities || contracture || tightness) {
      html += `
      <div class="label">
        <h1>6. Objective Assessment </h1>
      </div>
      <div class="value">
      </div>
      `;
    }

    if (hypotonia) {
      html += `<div class="section">
      <div class="label"><h2>Tone - </h2>
      </div><div class="value"><h3>${hypotonia}</h3>
      </div></div>`;
    } else if (hypertonia) {
      html += `<div class="section">
      <div class="label"><h2>Tone - </h2>
      </div><div class="value"><h3>${hypertonia}</h3>
      </div></div>`;
    }

    if (deformities.trim()) {
      html += `<div class="section">
      <div class="label"><h2>Deformities - </h2>
      </div><div class="value"><h3>${deformities.trim()}</h3>
      </div></div>`;
    }
    if (contracture.trim()) {
      html += `<div class="section">
      <div class="label"><h2>Contracture - </h2>
      </div><div class="value"><h3>${contracture.trim()}</h3>
      </div></div>`;
    }

    if (tightness.trim()) {
      html += `<div class="section">
      <div class="label"><h2>Tightness - </h2>
      </div><div class="value"><h3>${tightness.trim()}</h3>
      </div></div>`;
    }

    // Section 7
    // Tardiues

    // Section 8 => Modified Ashworth

    html += `
      <div class="label">
        <h1>8. Modified Ashworth </h1>
      </div>
      <div class="value">
      </div>
      `;

    if (backExt) {
      html += `
          <div class="section"><div class="label">
          <h2>Back Extension :</h2></div><div class="value">
          <h3>${backExt[0]}</h3>
          </div>
          </div>
        `;
    }

    if (backFlex) {
      html += `
          <div class="section"><div class="label">
          <h2>Back Flexion :</h2></div><div class="value">
          <h3>${backFlex[0]}</h3>
          </div>
          </div>
        `;
    }

    if (backLat) {
      html += `
          <div class="section"><div class="label">
          <h2>Back Lateral Bending :</h2></div><div class="value">
          <h3>${backLat[0]}</h3>
          </div>
          </div>
        `;
    }

    if (neckFlex) {
      html += `
          <div class="section"><div class="label">
          <h2>Neck Flexion :</h2></div><div class="value">
          <h3>${neckFlex[0]}</h3>
          </div>
          </div>
        `;
    }

    if (neckExt) {
      html += `
          <div class="section"><div class="label">
          <h2>Neck Extension :</h2></div><div class="value">
          <h3>${neckExt[0]}</h3>
          </div>
          </div>
        `;
    }

    if (neckLat) {
      html += `
          <div class="section"><div class="label">
          <h2>Neck Lateral Bending :</h2></div><div class="value">
          <h3>${neckLat[0]}</h3>
          </div>
          </div>
        `;
    }

    if (hipFlex) {
      html += `
          <div class="section"><div class="label">
          <h2>Hip Flexion :</h2></div><div class="value">
          <h3>${hipFlex[0]}</h3>
          </div>
          </div>
        `;
    }

    if (hipExt) {
      html += `
          <div class="section"><div class="label">
          <h2>Hip Extension :</h2></div><div class="value">
          <h3>${hipExt[0]}</h3>
          </div>
          </div>
        `;
    }

    if (hipAdd) {
      html += `
          <div class="section"><div class="label">
          <h2>Hip Adduction :</h2></div><div class="value">
          <h3>${hipAdd[0]}</h3>
          </div>
          </div>
        `;
    }

    if (hipAbd) {
      html += `
          <div class="section"><div class="label">
          <h2>Hip Abduction :</h2></div><div class="value">
          <h3>${hipAbd[0]}</h3>
          </div>
          </div>
        `;
    }

    if (kneeFlex) {
      html += `
          <div class="section"><div class="label">
          <h2>Knee Flexion :</h2></div><div class="value">
          <h3>${kneeFlex[0]}</h3>
          </div>
          </div>
        `;
    }

    if (hipMedRot) {
      html += `
          <div class="section"><div class="label">
          <h2>Hip medial rotation :</h2></div><div class="value">
          <h3>${hipMedRot[0]}</h3>
          </div>
          </div>
        `;
    }

    // Section 9 => functional evaluation
    if (
      supineToProneMoveable ||
      supineToProneAssistance ||
      supineToProneIndependent ||
      supineToSitMoveable ||
      supineToSitAssistance ||
      supineToSitIndependent ||
      sittingMoveable ||
      sittingAssistance ||
      sittingIndependent ||
      quadsMoveable ||
      quadsAssistance ||
      quadsIndependent ||
      kneelingMoveable ||
      kneelingAssistance ||
      kneelingIndependent ||
      halfKneelingMoveable ||
      halfKneelingAssistance ||
      halfKneelingIndependent ||
      standingMoveable ||
      standingAssistance ||
      standingIndependent ||
      ambulationMoveable ||
      ambulationAssistance ||
      ambulationIndependent
    ) {
      html += `
        <div class="label">
          <h1>9. Functional Evaluation</h1>
        </div>
        <div class="value">
        </div>
        `;
    }

    if (supineToProneMoveable) {
      html += `
        <div class="section"><div class="label">
        <h2>Supine to Prone :</h2></div><div class="value">
        <h3>Moveable</h3>
        </div>
        </div>
      `;
    } else if (supineToProneAssistance) {
      html += `
        <div class="section"><div class="label">
        <h2>Supine to Prone :</h2></div><div class="value">
        <h3>Assistance</h3>
        </div>
        </div>
      `;
    } else if (supineToProneIndependent) {
      html += `
        <div class="section"><div class="label">
        <h2>Supine to Prone :</h2></div><div class="value">
        <h3>Independent</h3>
        </div>
        </div>
      `;
    }

    if (supineToSitMoveable) {
      html += `
        <div class="section"><div class="label">
        <h2>Supine to Sit :</h2></div><div class="value">
        <h3>Moveable</h3>
        </div>
        </div>
      `;
    } else if (supineToSitAssistance) {
      html += `
        <div class="section"><div class="label">
        <h2>Supine to Sit :</h2></div><div class="value">
        <h3>Assistance</h3>
        </div>
        </div>
      `;
    } else if (supineToSitIndependent) {
      html += `
        <div class="section"><div class="label">
        <h2>Supine to Sit :</h2></div><div class="value">
        <h3>Independent</h3>
        </div>
        </div>
      `;
    }

    if (sittingMoveable) {
      html += `
        <div class="section"><div class="label">
        <h2>Sitting :</h2></div><div class="value">
        <h3>Moveable</h3>
        </div>
        </div>
      `;
    } else if (sittingAssistance) {
      html += `
        <div class="section"><div class="label">
        <h2>Sitting :</h2></div><div class="value">
        <h3>Assistance</h3>
        </div>
        </div>
      `;
    } else if (sittingIndependent) {
      html += `
        <div class="section"><div class="label">
        <h2>Sitting :</h2></div><div class="value">
        <h3>Independent</h3>
        </div>
        </div>
      `;
    }

    if (quadsMoveable) {
      html += `
      <div class="section"><div class="label">
      <h2>Quads :</h2></div><div class="value">
      <h3>Moveable</h3>
      </div>
      </div>
    `;
    } else if (quadsAssistance) {
      html += `
      <div class="section"><div class="label">
      <h2>Quads :</h2></div><div class="value">
      <h3>Assistance</h3>
      </div>
      </div>
    `;
    } else if (quadsIndependent) {
      html += `
      <div class="section"><div class="label">
      <h2>Quads :</h2></div><div class="value">
      <h3>Independent</h3>
      </div>
      </div>
    `;
    }

    if (kneelingMoveable) {
      html += `
      <div class="section"><div class="label">
      <h2>Kneeling :</h2></div><div class="value">
      <h3>Moveable</h3>
      </div>
      </div>
    `;
    } else if (kneelingAssistance) {
      html += `
      <div class="section"><div class="label">
      <h2>Kneeling :</h2></div><div class="value">
      <h3>Assistance</h3>
      </div>
      </div>
    `;
    } else if (kneelingIndependent) {
      html += `
      <div class="section"><div class="label">
      <h2>Kneeling :</h2></div><div class="value">
      <h3>Independent</h3>
      </div>
      </div>
    `;
    }

    if (halfKneelingMoveable) {
      html += `
      <div class="section"><div class="label">
      <h2>Half Kneeling :</h2></div><div class="value">
      <h3>Moveable</h3>
      </div>
      </div>
    `;
    } else if (halfKneelingAssistance) {
      html += `
      <div class="section"><div class="label">
      <h2>Half Kneeling :</h2></div><div class="value">
      <h3>Assistance</h3>
      </div>
      </div>
    `;
    } else if (halfKneelingIndependent) {
      html += `
      <div class="section"><div class="label">
      <h2>Half Kneeling :</h2></div><div class="value">
      <h3>Independent</h3>
      </div>
      </div>
    `;
    }

    if (standingMoveable) {
      html += `
      <div class="section"><div class="label">
      <h2>Standing :</h2></div><div class="value">
      <h3>Moveable</h3>
      </div>
      </div>
    `;
    } else if (standingAssistance) {
      html += `
      <div class="section"><div class="label">
      <h2>Standing :</h2></div><div class="value">
      <h3>Assistance</h3>
      </div>
      </div>
    `;
    } else if (standingIndependent) {
      html += `
      <div class="section"><div class="label">
      <h2>Standing :</h2></div><div class="value">
      <h3>Independent</h3>
      </div>
      </div>
    `;
    }

    if (ambulationMoveable) {
      html += `
      <div class="section"><div class="label">
      <h2>Ambulation :</h2></div><div class="value">
      <h3>Moveable</h3>
      </div>
      </div>
    `;
    } else if (ambulationAssistance) {
      html += `
      <div class="section"><div class="label">
      <h2>Ambulation :</h2></div><div class="value">
      <h3>Assistance</h3>
      </div>
      </div>
    `;
    } else if (ambulationIndependent) {
      html += `
      <div class="section"><div class="label">
      <h2>Ambulation :</h2></div><div class="value">
      <h3>Independent</h3>
      </div>
      </div>
    `;
    }

    if (functionAbilities.trim()) {
      html += `
      <div class="section"><div class="label">
      <h2>Function Abilities :</h2></div><div class="value">
      <h3>${functionAbilities}</h3>
      </div>
      </div>
    `;
    }

    if (functionLimitations.trim()) {
      html += `
      <div class="section"><div class="label">
      <h2>Function Goals :</h2></div><div class="value">
      <h3>${functionLimitations}</h3>
      </div>
      </div>
    `;
    }

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
      massEnergy_isolatedWorkComs ||
      dynamicStiffnessYes ||
      dynamicStiffnessNo ||
      comsDynamicStiffness ||
      extraneousMovementNo ||
      extraneousMovementYes ||
      comsExtraneousMovement
    ) {
      html += `
        <div class="label">
          <h1>10. Single System Assessment</h1>
        </div>
        <div class="value">
        </div>
        `;
    }
    if (canInitiate) {
      html += `
      <div class="section"><div class="label">
      <h2>Initiation :</h2></div><div class="value">
      <h3>Can Initiate</h3>
      </div>
      </div>
    `;
    } else if (cantInitiate) {
      html += `
      <div class="section"><div class="label">
      <h2>Initiation :</h2></div><div class="value">
      <h3>Cannot Initiate</h3>
      </div>
      </div>
    `;
    } 
     if (initiateComs) {
      html += `
      <div class="section"><div class="label">
      <h2>Initiation :</h2></div><div class="value">
      <h3>${initiateComs}</h3>
      </div>
      </div>
    `;
    }

    if (sustenancePoor) {
      html += `
      <div class="section"><div class="label">
      <h2>Sustenance :</h2></div><div class="value">
      <h3>Poor</h3>
      </div>
      </div>
    `;
    } else if (sustenanceGood) {
      html += `
      <div class="section"><div class="label">
      <h2>Sustenance :</h2></div><div class="value">
      <h3>Good</h3>
      </div>
      </div>
    `;
    } else if (sustenanceFair) {
      html += `
      <div class="section"><div class="label">
      <h2>Sustenance :</h2></div><div class="value">
      <h3>Fair</h3>
      </div>
      </div>
    `;
    }
    if (sustenanceComs) {
      html += `
      <div class="section"><div class="label">
      <h2>Sustenance :</h2></div><div class="value">
      <h3>${sustenanceComs}</h3>
      </div>
      </div>
    `;
    }

    if (terminationPassive) {
      html += `
      <div class="section"><div class="label">
      <h2>Termination :</h2></div><div class="value">
      <h3>Passive</h3>
      </div>
      </div>
    `;
    } else if (terminationAbrupt) {
      html += `
      <div class="section"><div class="label">
      <h2>Termination :</h2></div><div class="value">
      <h3>Abrupt</h3>
      </div>
      </div>
    `;
    }
     if (terminationComs) {
      html += `
      <div class="section"><div class="label">
      <h2>Termination :</h2></div><div class="value">
      <h3>${terminationComs}</h3>
      </div>
      </div>
    `;
    }

    if (controlGradPoor) {
      html += `
      <div class="section"><div class="label">
      <h2>Control Gradation :</h2></div><div class="value">
      <h3>Poor</h3>
      </div>
      </div>
    `;
    } else if (controlGradGood) {
      html += `
      <div class="section"><div class="label">
      <h2>Control Gradation :</h2></div><div class="value">
      <h3>Good</h3>
      </div>
      </div>
    `;
    } else if (controlGradFair) {
      html += `
      <div class="section"><div class="label">
      <h2>Control Gradation :</h2></div><div class="value">
      <h3>Fair</h3>
      </div>
      </div>
    `;
    } 
     if (controlGradComs) {
      html += `
      <div class="section"><div class="label">
      <h2>Control Gradation :</h2></div><div class="value">
      <h3>${controlGradComs}</h3>
      </div>
      </div>
    `;
    }

    if (recruitmentPostural) {
      html += `
      <div class="section"><div class="label">
      <h2>Recruitment :</h2></div><div class="value">
      <h3>Postural (So)</h3>
      </div>
      </div>
    `;
    }  else if (recruitmentMovement) {
      html += `
      <div class="section"><div class="label">
      <h2>Recruitment :</h2></div><div class="value">
      <h3>Movement (FF)</h3>
      </div>
      </div>
    `;
    }
    if (recruitmentComs) {
      html += `
      <div class="section"><div class="label">
      <h2>Recruitment :</h2></div><div class="value">
      <h3>${recruitmentComs}</h3>
      </div>
      </div>
    `;
    }

    if (contractionConcentric) {
      html += `
      <div class="section"><div class="label">
      <h2>Contraction :</h2></div><div class="value">
      <h3>Concentric</h3>
      </div>
      </div>
    `;
    } else if (contractionEccentric) {
      html += `
      <div class="section"><div class="label">
      <h2>Contraction :</h2></div><div class="value">
      <h3>Eccentric</h3>
      </div>
      </div>
    `;
    } else if (contractionIsometric) {
      html += `
      <div class="section"><div class="label">
      <h2>Contraction :</h2></div><div class="value">
      <h3>Isometric</h3>
      </div>
      </div>
    `;
    } 
     if (contractionComs) {
      html += `
      <div class="section"><div class="label">
      <h2>Contraction :</h2></div><div class="value">
      <h3>${contractionComs}</h3>
      </div>
      </div>
    `;
    }

    if (contraction) {
      html += `
      <div class="section"><div class="label">
      <h2>Contraction</h2></div><div class="value">
      </div>
      </div>
    `;
    } else if (reciprocalInhibition) {
      html += `
      <div class="section"><div class="label">
      <h2>Reciprocal Inhibition</h2></div><div class="value">
      </div>
      </div>
    `;
    } 
    if (comsContraction_ReciprocalInhibition) {
      html += `
      <div class="section"><div class="label">
      <h2>Contraction / Reciprocal Inhibition</h2></div><div class="value">
      <h3>${comsContraction_ReciprocalInhibition}</h3>
      </div>
      </div>
    `;
    }

    if (massEnergy) {
      html += `
      <div class="section"><div class="label">
      <h2>Mass  Energy</h2></div><div class="value">
      </div>
      </div>
    `;
    } else if (isolatedWork) {
      html += `
      <div class="section"><div class="label">
      <h2>Isolated Work</h2></div><div class="value">
      </div>
      </div>
    `;
    } 
     if (massEnergy_isolatedWorkComs) {
      html += `
      <div class="section"><div class="label">
      <h2>Mass  Energy / Isolated Work</h2></div><div class="value">
      <h3>${massEnergy_isolatedWorkComs}</h3>
      </div>
      </div>
    `;
    }

    if (dynamicStiffnessYes) {
      html += `
      <div class="section"><div class="label">
      <h2>Dynamic Stiffness</h2></div><div class="value">
      <h3>Yes</h3>
      </div>
      </div>
    `;
    } else if (dynamicStiffnessNo) {
      html += `
      <div class="section"><div class="label">
      <h2>Dynamic Stiffness</h2></div><div class="value">
      <h3>No</h3>
      </div>
      </div>
    `;
    } 
    if (comsDynamicStiffness) {
      html += `
      <div class="section"><div class="label">
      <h2>Dynamic Stiffness</h2></div><div class="value">
      <h3>${comsDynamicStiffness}</h3>
      </div>
      </div>
    `;
    }

    if (extraneousMovementYes) {
      html += `
      <div class="section"><div class="label">
      <h2>Extraneous Movement</h2></div><div class="value">
      <h3>Yes</h3>
      </div>
      </div>
    `;
    } else if (extraneousMovementNo) {
      html += `
      <div class="section"><div class="label">
      <h2>Extraneous Movement</h2></div><div class="value">
      <h3>No</h3>
      </div>
      </div>
    `;
    } 
     if (comsExtraneousMovement) {
      html += `
      <div class="section"><div class="label">
      <h2>Extraneous Movement</h2></div><div class="value">
      <h3>${comsExtraneousMovement}</h3>
      </div>
      </div>
    `;
    }

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
      console.error();
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
              value={assessmentBy}
              multiline={true}
              numberOfLines={4}
              onChangeText={assessmentByHandler}
              keyboardType="ascii-capable"
              placeholder="Assessment By"
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
          {/* Section III => Subjective Assessment */}
          <Text
            style={{
              color: '#5F7EFF',
              fontWeight: 'bold',
              fontSize: wp('4.5%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Subjective Assessment
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
          {/* Objective Assessment */}
          <Text
            style={{
              color: '#5F7EFF',
              fontWeight: 'bold',
              fontSize: wp('4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Objective Assessment
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
          <View style={styles.objectiveAssessmentContainer}>
            <TextInput
              value={deformities}
              onChangeText={deformitiesHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Deformities"
              placeholderTextColor="#FFFFFF"
              style={styles.objectiveAssessmentText}
            />
          </View>
          <View style={styles.objectiveAssessmentContainer}>
            <TextInput
              value={contracture}
              onChangeText={contractureHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Contracture"
              placeholderTextColor="#FFFFFF"
              style={styles.objectiveAssessmentText}
            />
          </View>
          <View style={styles.objectiveAssessmentContainer}>
            <TextInput
              value={tightness}
              onChangeText={tightnessHandler}
              keyboardType="ascii-capable"
              multiline={true}
              numberOfLines={4}
              placeholder="Tightness"
              placeholderTextColor="#FFFFFF"
              style={styles.objectiveAssessmentText}
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: wp('1%'),
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  paddingBottom: wp('4%'),
                  marginHorizontal: wp('10%'),
                  fontSize: wp('3.4%'),
                }}>
                Name
              </Text>
              <Text
                style={{
                  paddingBottom: wp('4%'),
                  fontWeight: 'bold',
                  color: 'white',
                  marginHorizontal: wp('11%'),
                  fontSize: wp('3.4%'),
                }}>
                RT
              </Text>
              <Text
                style={{
                  paddingBottom: wp('4%'),
                  fontWeight: 'bold',
                  color: 'white',
                  marginHorizontal: wp('8%'),
                  fontSize: wp('3.4%'),
                }}>
                LT
              </Text>
            </View>
            <View style={styles.rowContainer}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  marginHorizontal: wp('6%'),
                  marginVertical: wp('1.2%'),
                  fontSize: wp('3.6%'),
                }}>
                TA'S
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={styles.inputRTR1}
                  onChangeText={handleTasRTR1Change}
                  value={tasRTR1}
                  placeholder="R1"
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.inputLTR1}
                  onChangeText={handleTasLTR1Change}
                  value={tasLTR1}
                  placeholder="R1"
                  keyboardType="numeric"
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={styles.inputRTR2}
                  onChangeText={handleTasRTR2Change}
                  value={tasRTR2}
                  placeholder="R2"
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.inputLTR2}
                  onChangeText={handleTasLTR2Change}
                  value={tasLTR2}
                  placeholder="R2"
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={styles.rowContainer}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  marginHorizontal: wp('6%'),
                  marginVertical: wp('1.2%'),
                  fontSize: wp('3.6%'),
                }}>
                Hamstrings
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={styles.inputRTR1}
                  onChangeText={handleHamstringsRTR1Change}
                  value={hamstringsRTR1}
                  placeholder="R1"
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.inputRTR2}
                  onChangeText={handleHamstringsRTR2Change}
                  value={hamstringsRTR2}
                  placeholder="R2"
                  keyboardType="numeric"
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={styles.inputLTR1}
                  onChangeText={handleHamstringsLTR1Change}
                  value={hamstringsLTR1}
                  placeholder="R1"
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.inputLTR2}
                  onChangeText={handleHamstringsLTR2Change}
                  value={hamstringsLTR2}
                  placeholder="R2"
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={styles.rowContainer}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  marginHorizontal: wp('6%'),
                  marginVertical: wp('1.2%'),
                  fontSize: wp('3.6%'),
                }}>
                Hip Adduction
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={styles.inputRTR1}
                  onChangeText={handleHamstringsRTR1Change}
                  value={hamstringsRTR1}
                  placeholder="R1"
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.inputRTR2}
                  onChangeText={handleHamstringsRTR2Change}
                  value={hamstringsRTR2}
                  placeholder="R2"
                  keyboardType="numeric"
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={styles.inputLTR1}
                  onChangeText={handleHamstringsLTR1Change}
                  value={hamstringsLTR1}
                  placeholder="R1"
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.inputLTR2}
                  onChangeText={handleHamstringsLTR2Change}
                  value={hamstringsLTR2}
                  placeholder="R2"
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>
          {/*   Modified Ashworths */}
          <Text
            style={{
              color: '#5F7EFF',
              fontWeight: 'bold',
              fontSize: wp('4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Modified Ashworths
          </Text>
          <View style={styles.bigContainerPicker}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Movement</Text>
              <Text style={styles.headerText}>Range of motion</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Back extension</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={backExt[0]}
                  onValueChange={value => {
                    const updatedRange = backExt.filter(
                      range => range !== value,
                    );
                    updatedRange.unshift(value);
                    setBackExt(updatedRange);
                  }}>
                  {backExt.map(range => (
                    <Picker.Item key={range} label={range} value={range} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Back flexion</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={backFlex[0]}
                  onValueChange={value => {
                    const updatedRange = backFlex.filter(
                      range => range !== value,
                    );
                    updatedRange.unshift(value);
                    setBackFlex(updatedRange);
                  }}>
                  {backFlex.map(range => (
                    <Picker.Item key={range} label={range} value={range} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Back Lateral Bending</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={backLat[0]}
                  onValueChange={value => {
                    const updatedRange = backLat.filter(
                      range => range !== value,
                    );
                    updatedRange.unshift(value);
                    setBackLat(updatedRange);
                  }}>
                  {backLat.map(range => (
                    <Picker.Item key={range} label={range} value={range} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Neck flexion</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={neckFlex[0]}
                  onValueChange={value => {
                    const updatedRange = neckFlex.filter(
                      range => range !== value,
                    );
                    updatedRange.unshift(value);
                    setNeckFlex(updatedRange);
                  }}>
                  {neckFlex.map(range => (
                    <Picker.Item key={range} label={range} value={range} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Neck Extension</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={neckExt[0]}
                  onValueChange={value => {
                    const updatedRange = neckExt.filter(
                      range => range !== value,
                    );
                    updatedRange.unshift(value);
                    setNeckExt(updatedRange);
                  }}>
                  {neckExt.map(range => (
                    <Picker.Item key={range} label={range} value={range} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Neck lateral bending</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={neckLat[0]}
                  onValueChange={value => {
                    const updatedRange = neckLat.filter(
                      range => range !== value,
                    );
                    updatedRange.unshift(value);
                    setNeckLat(updatedRange);
                  }}>
                  {neckLat.map(range => (
                    <Picker.Item key={range} label={range} value={range} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Hip Flexion</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={hipFlex[0]}
                  onValueChange={value => {
                    const updatedRange = hipFlex.filter(
                      range => range !== value,
                    );
                    updatedRange.unshift(value);
                    setHipFlex(updatedRange);
                  }}>
                  {hipFlex.map(range => (
                    <Picker.Item key={range} label={range} value={range} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Hip extension</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={hipExt[0]}
                  onValueChange={value => {
                    const updatedRange = hipExt.filter(
                      range => range !== value,
                    );
                    updatedRange.unshift(value);
                    setHipExt(updatedRange);
                  }}>
                  {hipExt.map(range => (
                    <Picker.Item key={range} label={range} value={range} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Hip adduction</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={hipAdd[0]}
                  onValueChange={value => {
                    const updatedRange = hipAdd.filter(
                      range => range !== value,
                    );
                    updatedRange.unshift(value);
                    setHipAdd(updatedRange);
                  }}>
                  {hipAdd.map(range => (
                    <Picker.Item key={range} label={range} value={range} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Hip abduction</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={hipAbd[0]}
                  onValueChange={value => {
                    const updatedRange = hipAbd.filter(
                      range => range !== value,
                    );
                    updatedRange.unshift(value);
                    setHipAbd(updatedRange);
                  }}>
                  {hipAbd.map(range => (
                    <Picker.Item key={range} label={range} value={range} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Knee flexion</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={kneeFlex[0]}
                  onValueChange={value => {
                    const updatedRange = kneeFlex.filter(
                      range => range !== value,
                    );
                    updatedRange.unshift(value);
                    setKneeFlex(updatedRange);
                  }}>
                  {kneeFlex.map(range => (
                    <Picker.Item key={range} label={range} value={range} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Hip medial rotation</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={hipMedRot[0]}
                  onValueChange={value => {
                    const updatedRange = hipMedRot.filter(
                      range => range !== value,
                    );
                    updatedRange.unshift(value);
                    setHipMedRot(updatedRange);
                  }}>
                  {hipMedRot.map(range => (
                    <Picker.Item key={range} label={range} value={range} />
                  ))}
                </Picker>
              </View>
            </View>
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
                    value={supineToProneMoveable}
                    onValueChange={supineToProneMoveableHandler}
                  />
                  <Text style={styles.checkboxLabel}>Moveable</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={supineToProneAssistance}
                    onValueChange={supineToProneAssistanceHandler}
                  />
                  <Text style={styles.checkboxLabel}>Assisstance</Text>
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
                    value={supineToSitMoveable}
                    onValueChange={supineToSitMoveableHandler}
                  />
                  <Text style={styles.checkboxLabel}>Moveable</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={supineToSitAssistance}
                    onValueChange={supineToSitAssistanceHandler}
                  />
                  <Text style={styles.checkboxLabel}>Assisstance</Text>
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
                    value={sittingMoveable}
                    onValueChange={sittingMoveableHandler}
                  />
                  <Text style={styles.checkboxLabel}>Moveable</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={sittingAssistance}
                    onValueChange={sittingAssistanceHandler}
                  />
                  <Text style={styles.checkboxLabel}>Assisstance</Text>
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
                    value={quadsMoveable}
                    onValueChange={quadsMoveableHandler}
                  />
                  <Text style={styles.checkboxLabel}>Moveable</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={quadsAssistance}
                    onValueChange={quadsAssistanceHandler}
                  />
                  <Text style={styles.checkboxLabel}>Assisstance</Text>
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
                    value={kneelingMoveable}
                    onValueChange={kneelingMoveableHandler}
                  />
                  <Text style={styles.checkboxLabel}>Moveable</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={kneelingAssistance}
                    onValueChange={kneelingAssistanceHandler}
                  />
                  <Text style={styles.checkboxLabel}>Assisstance</Text>
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
                    value={halfKneelingMoveable}
                    onValueChange={halfKneelingMoveableHandler}
                  />
                  <Text style={styles.checkboxLabel}>Moveable</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={halfKneelingAssistance}
                    onValueChange={halfKneelingAssistanceHandler}
                  />
                  <Text style={styles.checkboxLabel}>Assisstance</Text>
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
                    value={standingMoveable}
                    onValueChange={standingMoveableHandler}
                  />
                  <Text style={styles.checkboxLabel}>Moveable</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={standingAssistance}
                    onValueChange={standingAssistanceHandler}
                  />
                  <Text style={styles.checkboxLabel}>Assisstance</Text>
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
                    value={ambulationMoveable}
                    onValueChange={ambulationMoveableHandler}
                  />
                  <Text style={styles.checkboxLabel}>Moveable</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={ambulationAssistance}
                    onValueChange={ambulationAssistanceHandler}
                  />
                  <Text style={styles.checkboxLabel}>Assisstance</Text>
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
          {/* Single System Assessment */}
          <Text
            style={{
              color: '#5F7EFF',
              fontWeight: 'bold',
              fontSize: wp('4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Single System Assessment
          </Text>
          <View style={styles.inputFieldContainer10}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: wp('3.6%'),
                marginHorizontal: wp('5%'),
                marginVertical: wp('4%'),
                textAlign: 'center',
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
              <View style={styles.inputTextContainerComs}>
                <TextInput
                  value={recruitmentComs}
                  onChangeText={recruitmentComsHandler}
                  keyboardType="ascii-capable"
                  placeholder="Comments"
                  placeholderTextColor="#FFFFFF"
                  style={styles.coms}
                />
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
                  <Text style={styles.checkboxLabel}>Ismoetric</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={contractionEccentric}
                    onValueChange={contractionEccentricHandler}
                  />
                  <Text style={styles.checkboxLabel}>Eccentric</Text>
                </View>
              </View>
              <View style={styles.inputTextContainerComs}>
                <TextInput
                  value={contractionComs}
                  onChangeText={contractionComsHandler}
                  keyboardType="ascii-capable"
                  placeholder="Comments"
                  placeholderTextColor="#FFFFFF"
                  style={styles.coms}
                />
              </View>
            </View>
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={canInitiate}
                    onValueChange={canInitiateHandler}
                  />
                  <Text style={styles.checkboxLabel}>Contraction</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={contraction}
                    onValueChange={contractionHandler}
                  />
                  <Text style={styles.checkboxLabel}>
                    Reciprocal Inhibition
                  </Text>
                </View>
              </View>
              <View style={styles.inputTextContainerComs}>
                <TextInput
                  value={comsContraction_ReciprocalInhibition}
                  onChangeText={comsContraction_ReciprocalInhibitionHandler}
                  keyboardType="ascii-capable"
                  placeholder="Comments"
                  placeholderTextColor="#FFFFFF"
                  style={styles.coms}
                />
              </View>
            </View>
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={massEnergy}
                    onValueChange={massEnergyHandler}
                  />
                  <Text style={styles.checkboxLabel}>Mass Energy</Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={isolatedWork}
                    onValueChange={isolatedWorkHandler}
                  />
                  <Text style={styles.checkboxLabel}>Isolated Work</Text>
                </View>
              </View>
              <View style={styles.inputTextContainerComs}>
                <TextInput
                  value={massEnergy_isolatedWorkComs}
                  onChangeText={massEnergy_isolatedWorkComsHandler}
                  keyboardType="ascii-capable"
                  placeholder="Comments"
                  placeholderTextColor="#FFFFFF"
                  style={styles.coms}
                />
              </View>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.multipleChoiceHeader}>Stiffness</Text>
              <View style={{flexDirection: 'column'}}>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={dynamicStiffnessYes}
                    onValueChange={dynamicStiffnessYesHandler}
                  />
                  <Text style={styles.checkboxLabel}>
                    Dynamic Stiffness Yes
                  </Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={dynamicStiffnessNo}
                    onValueChange={dynamicStiffnessNoHandler}
                  />
                  <Text style={styles.checkboxLabel}>Dynamic Stiffness No</Text>
                </View>
              </View>
              <View style={styles.inputTextContainerComs}>
                <TextInput
                  value={comsDynamicStiffness}
                  onChangeText={comsDynamicStiffnessHandler}
                  keyboardType="ascii-capable"
                  placeholder="Comments"
                  placeholderTextColor="#FFFFFF"
                  style={styles.coms}
                />
              </View>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.multipleChoiceHeader}>
                Extraneous Movement
              </Text>
              <View style={{flexDirection: 'column'}}>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={extraneousMovementYes}
                    onValueChange={extraneousMovementYesHandler}
                  />
                  <Text style={styles.checkboxLabel}>
                    Extraneous Movement Yes
                  </Text>
                </View>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    value={extraneousMovementNo}
                    onValueChange={extraneousMovementNoHandler}
                  />
                  <Text style={styles.checkboxLabel}>
                    Extraneous Movement No
                  </Text>
                </View>
              </View>
              <View style={styles.inputTextContainerComs}>
                <TextInput
                  value={comsExtraneousMovement}
                  onChangeText={comsExtraneousMovementHandler}
                  keyboardType="ascii-capable"
                  placeholder="Comments"
                  placeholderTextColor="#FFFFFF"
                  style={styles.coms}
                />
              </View>
            </View>
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
  objectiveAssessmentContainer: {
    width: wp('90%'),
    height: hp('10%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#5F7EFF',
    borderRadius: 10,
  },
  objectiveAssessmentText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('3%'),
    marginHorizontal: wp('1.5%'),
  },
  bigContainerPicker: {
    width: wp('90%'),
    height: hp('75%'),
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
    height: hp('75%'),
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
    height: hp('210%'),
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

export default Phase_1_Assessment_Form;
