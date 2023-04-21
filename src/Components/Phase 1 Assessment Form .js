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
