import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share';
import {useSelector} from 'react-redux';
import db from '../../db/db';

const Generate = ({selectedPatientName}) => {
  // Section1
  const firstName = useSelector(state => state.section1.firstName);
  const lastName = useSelector(state => state.section1.lastName);
  const age = useSelector(state => state.section1.age);
  const fatherName = useSelector(state => state.section1.fatherName);
  const motherName = useSelector(state => state.section1.motherName);
  const address = useSelector(state => state.section1.address);
  const contactNumber = useSelector(state => state.section1.contactNumber);
  const male = useSelector(state => state.section1.male);
  const female = useSelector(state => state.section1.female);
  const userDob = useSelector(state => state.section1.userDob);
  const evaluationDate = useSelector(state => state.section1.evaluationDate);
  const chiefComplaint = useSelector(state => state.section1.chiefComplaint);
  const informant = useSelector(state => state.section1.informant);
  const assessedBy = useSelector(state => state.section1.assessedBy);
  const diagnosis = useSelector(state => state.section1.diagnosis);
  const referredBy = useSelector(state => state.section1.referredBy);
  // Section2
  const fatherAgeConception = useSelector(
    state => state.section2.fatherAgeConception,
  );
  const motherAgeConception = useSelector(
    state => state.section2.motherAgeConception,
  );
  const workLoad = useSelector(state => state.section2.workLoad);
  const workLoadComs = useSelector(state => state.section2.workLoadComs);
  const stressLevelComs = useSelector(state => state.section2.stressLevelComs);
  const stresslevel = useSelector(state => state.section2.stressLevel);
  const consanguinity = useSelector(state => state.section2.consanguinity);
  const nonConsanguinity = useSelector(
    state => state.section2.nonConsanguinity,
  );
  const children = useSelector(state => state.section2.children);
  const preNatalOptions = useSelector(state => state.section2.preNatalOptions);
  const fullTerm = useSelector(state => state.section2.fullTerm);
  const preTerm = useSelector(state => state.section2.preTerm);
  // Section 3
  const ciabYes = useSelector(state => state.section3.ciabYes);
  const ciabNo = useSelector(state => state.section3.ciabNo);
  const userBirthWeight = useSelector(state => state.section3.birthWeight);
  const userHeadCircumference = useSelector(
    state => state.section3.headCircumference,
  );
  const day1To7days = useSelector(state => state.section3.nicuStayOpt1);
  const week1To4weeks = useSelector(state => state.section3.nicuStayOpt2);
  const week4To4months = useSelector(state => state.section3.nicuStayOpt3);
  const reasonNicuStay = useSelector(state => state.section3.reasonforNICUStay);
  const presentHistory = useSelector(state => state.section3.presentHistory);
  // Section 4
  const handHolding = useSelector(state => state.section4.handHolding);
  const rolling = useSelector(state => state.section4.rolling);
  const crawling = useSelector(state => state.section4.crawling);
  const sitting = useSelector(state => state.section4.sitting);
  const standing = useSelector(state => state.section4.standing);
  const walking = useSelector(state => state.section4.walking);
  const fineMotor = useSelector(state => state.section4.fineMotor);
  const communications = useSelector(state => state.section4.communications);
  const socialBehaviour = useSelector(state => state.section4.socialBehaviour);
  // Section 5
  const sightIntact = useSelector(state => state.section5.sightIntact);
  const sightNotIntact = useSelector(state => state.section5.sightNotIntact);
  const hearingIntact = useSelector(state => state.section5.hearingIntact);
  const hearingNotIntact = useSelector(
    state => state.section5.hearingNotIntact,
  );
  const speechIntact = useSelector(state => state.section5.speechIntact);
  const speechNotIntact = useSelector(state => state.section5.speechNotIntact);
  const carriedByParent = useSelector(state => state.section5.carriedByParent);
  const walkingSticks = useSelector(state => state.section5.walkingSticks);
  const wheelChair = useSelector(state => state.section5.wheelChair);
  const walkingWalker = useSelector(state => state.section5.walkingWalker);
  const walkingIndependently = useSelector(
    state => state.section5.walkingIndependently,
  );
  // Section 6
  const mri = useSelector(state => state.section6.mri);
  const selectedImageMRI = useSelector(
    state => state.section6.selectedImageMRI,
  );
  const clickedImageMRI = useSelector(state => state.section6.clickedImageMRI);
  const eeg = useSelector(state => state.section6.eeg);
  const selectedImageEEG = useSelector(
    state => state.section6.selectedImageEEG,
  );
  const clickedImageEEG = useSelector(state => state.section6.clickedImageEEG);
  const bera = useSelector(state => state.section6.bera);
  const selectedImageBERA = useSelector(
    state => state.section6.selectedImageBERA,
  );
  const clickedImageBERA = useSelector(
    state => state.section6.clickedImageBERA,
  );
  const opthalmalogy = useSelector(state => state.section6.opthalmalogy);
  const selectedImageOPT = useSelector(
    state => state.section6.selectedImageOPT,
  );
  const clickedImageOPT = useSelector(state => state.section6.clickedImageOPT);
  const xRays = useSelector(state => state.section6.xRays);
  const selectedImageXRAYS = useSelector(
    state => state.section6.selectedImageXRAYS,
  );
  const clickedImageXRAYS = useSelector(
    state => state.section6.clickedImageXRAYS,
  );

  // Section 7
  const hypotonia = useSelector(state => state.section7.hypotonia);
  const hypertonia = useSelector(state => state.section7.hypertonia);
  const deformitiesR = useSelector(state => state.section7.deformitiesR);
  const deformitiesL = useSelector(state => state.section7.deformitiesL);
  const contractureR = useSelector(state => state.section7.contractureR);
  const contractureL = useSelector(state => state.section7.contractureL);
  const tightnessR = useSelector(state => state.section7.tightnessR);
  const tightnessL = useSelector(state => state.section7.tightnessL);

  // Section8
  const tasRTR1 = useSelector(state => state.section8.tendoachillesRTR1);
  const tasRTR2 = useSelector(state => state.section8.tendoachillesRTR2);
  const tasLTR1 = useSelector(state => state.section8.tendoachillesLTR1);
  const tasLTR2 = useSelector(state => state.section8.tendoachillesLTR2);
  const hamstringsRTR1 = useSelector(state => state.section8.hamstringsRTR1);
  const hamstringsRTR2 = useSelector(state => state.section8.hamstringsRTR2);
  const hamstringsLTR1 = useSelector(state => state.section8.hamstringsLTR1);
  const hamstringsLTR2 = useSelector(state => state.section8.hamstringsLTR2);
  const hipAdductionRTR1 = useSelector(
    state => state.section8.hipAdductorsRTR1,
  );
  const hipAdductionRTR2 = useSelector(
    state => state.section8.hipAdductorsRTR2,
  );
  const hipAdductionLTR1 = useSelector(
    state => state.section8.hipAdductorsLTR1,
  );
  const hipAdductionLTR2 = useSelector(
    state => state.section8.hipAdductorsLTR2,
  );
  const bicepsRTR1 = useSelector(state => state.section8.bicepsRTR1);
  const bicepsRTR2 = useSelector(state => state.section8.bicepsRTR2);
  const bicepsLTR1 = useSelector(state => state.section8.bicepsLTR1);
  const bicepsLTR2 = useSelector(state => state.section8.bicepsLTR2);
  // Section 9
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
  // Section 10
  const upperExterimities = useSelector(
    state => state.section10.upperExterimities,
  );
  const lowerExterimities = useSelector(
    state => state.section10.lowerExterimities,
  );
  const asworthsComs = useSelector(
    state => state.section10.comsModifiedAshworth,
  );
  // Section 11
  const supineToProneImmobile = useSelector(
    state => state.section11.supineToProneImmobile,
  );
  const supineToProneAssistance = useSelector(
    state => state.section11.supineToProneAssistance,
  );
  const supineToProneIndependent = useSelector(
    state => state.section11.supineToProneIndependent,
  );
  const supineToSitImmobile = useSelector(
    state => state.section11.supineToSitImmobile,
  );
  const supineToSitAssistance = useSelector(
    state => state.section11.supineToSitAssistance,
  );
  const supineToSitIndependent = useSelector(
    state => state.section11.supineToSitIndependent,
  );
  const sittingImmobile = useSelector(state => state.section11.sittingImmobile);
  const sittingAssistance = useSelector(
    state => state.section11.sittingAssistance,
  );
  const sittingIndependent = useSelector(
    state => state.section11.sittingIndependent,
  );
  const quadsImmobile = useSelector(state => state.section11.quadripedImmobile);
  const quadsAssistance = useSelector(
    state => state.section11.quadripedAssistance,
  );
  const quadsIndependent = useSelector(
    state => state.section11.quadripedIndependent,
  );
  const standingImmobile = useSelector(
    state => state.section11.standingImmobile,
  );
  const standingAssistance = useSelector(
    state => state.section11.standingAssistance,
  );
  const standingIndependent = useSelector(
    state => state.section11.standingIndependent,
  );
  const kneelingImmobile = useSelector(
    state => state.section11.kneelingImmobile,
  );
  const kneelingAssistance = useSelector(
    state => state.section11.kneelingAssistance,
  );
  const kneelingIndependent = useSelector(
    state => state.section11.kneelingIndependent,
  );
  const halfKneelingImmobile = useSelector(
    state => state.section11.halfKneelingImmobile,
  );
  const halfKneelingAssistance = useSelector(
    state => state.section11.halfKneelingAssistance,
  );
  const halfKneelingIndependent = useSelector(
    state => state.section11.halfKneelingIndependent,
  );
  const ambulationImmobile = useSelector(
    state => state.section11.ambulationImmobile,
  );
  const ambulationAssistance = useSelector(
    state => state.section11.ambulationAssistance,
  );
  const ambulationIndependent = useSelector(
    state => state.section11.ambulationIndependent,
  );
  const gmfc = useSelector(state => state.section11.gmfc);
  const miniMac = useSelector(state => state.section11.miniMacs);
  const macs = useSelector(state => state.section11.macs);
  const cfcs = useSelector(state => state.section11.cfcs);

  // Section 12
  const bodyStructurePositive = useSelector(
    state => state.section12.bodyStructurePositive,
  );
  const bodyStructureNegative = useSelector(
    state => state.section12.bodyStructureNegative,
  );
  const bodyFunctionPositive = useSelector(
    state => state.section12.bodyFunctionPositive,
  );
  const bodyFunctionNegative = useSelector(
    state => state.section12.bodyFunctionNegative,
  );
  const activitiesParticipation = useSelector(
    state => state.section12.activityParticipation,
  );
  const activitiesLimitation = useSelector(
    state => state.section12.activityLimitation,
  );
  const environmentalPersonal = useSelector(
    state => state.section12.environmentalPersonal,
  );
  const environmentalContextual = useSelector(
    state => state.section12.environmentalContextual,
  );
  const shortTermGoals = useSelector(state => state.section12.shortTermGoals);
  const longTermGoals = useSelector(state => state.section12.longTermGoals);
  const intervention = useSelector(state => state.section12.intervention);
  const equipments = useSelector(state => state.section12.equipmentsUsed);
  const section17Coms = useSelector(state => state.section12.section17Coms);

  // Section 13
  const adl = useSelector(state => state.section13.adl);

  // Section 14
  const alignmentComs = useSelector(state => state.section14.alignmentComs);
  const baseOfSupportComs = useSelector(
    state => state.section14.baseOfSupportComs,
  );
  const movementStratComs = useSelector(
    state => state.section14.movementStratComs,
  );
  const staticBalanceComs = useSelector(
    state => state.section14.staticBalanceComs,
  );
  const posture = useSelector(state => state.section14.posture);
  const asymmetry = useSelector(state => state.section14.alignment);
  const side = useSelector(state => state.section14.side);
  const broad = useSelector(state => state.section14.broad);
  const narrow = useSelector(state => state.section14.narrow);
  const generalPosture = useSelector(state => state.section14.generalPosture);
  const callosities = useSelector(state => state.section14.callosities);
  const movementStrategies = useSelector(
    state => state.section14.movementStrategies,
  );
  const staticBalanceGood = useSelector(
    state => state.section14.staticBalanceGood,
  );
  const staticBalanceFair = useSelector(
    state => state.section14.staticBalanceFair,
  );
  const staticBalancePoor = useSelector(
    state => state.section14.staticBalancePoor,
  );
  const anticipatoryBalanceGood = useSelector(
    state => state.section14.anticipatoryBalanceGood,
  );
  const anticipatoryBalanceFair = useSelector(
    state => state.section14.anticipatoryBalanceFair,
  );
  const anticipatoryBalancePoor = useSelector(
    state => state.section14.anticipatoryBalancePoor,
  );
  const anticipatoryBalanceComs = useSelector(
    state => state.section14.anticipatoryBalanceComs,
  );
  const reactiveBalanceGood = useSelector(
    state => state.section14.reactiveBalanceGood,
  );
  const reactiveBalanceFair = useSelector(
    state => state.section14.reactiveBalanceFair,
  );
  const reactiveBalancePoor = useSelector(
    state => state.section14.reactiveBalancePoor,
  );
  const reactiveBalanceComs = useSelector(
    state => state.section14.reactiveBalanceComs,
  );
  const coordinationGood = useSelector(
    state => state.section14.coordinationGood,
  );
  const coordinationFair = useSelector(
    state => state.section14.coordinationFair,
  );
  const coordinationPoor = useSelector(
    state => state.section14.coordinationPoor,
  );
  const coordinationComs = useSelector(
    state => state.section14.coordinationComs,
  );

  // Section 15
  const canInitiate = useSelector(state => state.section15.canInitiate);
  const cantInitiate = useSelector(state => state.section15.cantInitiate);
  const initiateComs = useSelector(state => state.section15.initiationComs);
  const sustenancePoor = useSelector(state => state.section15.sustenancePoor);
  const sustenanceGood = useSelector(state => state.section15.sustenanceGood);
  const sustenanceFair = useSelector(state => state.section15.sustenanceFair);
  const sustenanceComs = useSelector(state => state.section15.sustenanceComs);
  const terminationPassive = useSelector(
    state => state.section15.terminationPassive,
  );
  const terminationAbrupt = useSelector(
    state => state.section15.terminationAbrupt,
  );
  const terminationComs = useSelector(state => state.section15.terminationComs);
  const controlGradPoor = useSelector(state => state.section15.controlGradPoor);
  const controlGradFair = useSelector(state => state.section15.controlGradFair);
  const controlGradGood = useSelector(state => state.section15.controlGradGood);
  const controlGradComs = useSelector(state => state.section15.controlGradComs);
  const recruitmentPostural = useSelector(
    state => state.section15.recruitmentSo,
  );
  const recruitmentMovement = useSelector(
    state => state.section15.recruitmentFf,
  );
  const contractionConcentric = useSelector(
    state => state.section15.contractionConcentric,
  );
  const contractionIsometric = useSelector(
    state => state.section15.contractionIsometric,
  );
  const contractionEccentric = useSelector(
    state => state.section15.contractionEccentric,
  );
  const contraction = useSelector(state => state.section15.coContraction);
  const reciprocalInhibition = useSelector(
    state => state.section15.reciprocalInhibition,
  );
  const massEnergy = useSelector(state => state.section15.massEnergy);
  const isolatedWork = useSelector(state => state.section15.isolatedWork);
  const dynamicStiffness = useSelector(
    state => state.section15.dynamicStiffness,
  );
  const extraneousMovement = useSelector(
    state => state.section15.extraneousMovement,
  );
  const singleassessment = useSelector(state => state.section15.section15Coms);

  // Section 16

  const registrationOptions = useSelector(
    state => state.section16.registrationOptions,
  );
  const registrationComs = useSelector(
    state => state.section16.registrationComs,
  );
  const tactileUnder = useSelector(
    state => state.section16.tactileUnderResponsive,
  );
  const tactileOver = useSelector(
    state => state.section16.tactileOverResponsive,
  );
  const proprioceptiveUnder = useSelector(
    state => state.section16.proprioceptiveUnderResponsive,
  );
  const proprioceptiveOver = useSelector(
    state => state.section16.proprioceptiveOverResponsive,
  );
  const vestibularUnder = useSelector(
    state => state.section16.vestibularUnderResponsive,
  );
  const vestibularOver = useSelector(
    state => state.section16.vestibularOverResponsive,
  );
  const auditoryUnder = useSelector(
    state => state.section16.auditoryUnderResponsive,
  );
  const auditoryOver = useSelector(
    state => state.section16.auditoryOverResponsive,
  );
  const visualUnder = useSelector(
    state => state.section16.visualUnderResponsive,
  );
  const visualOver = useSelector(state => state.section16.visualOverResponsive);
  const gustatoryOver = useSelector(
    state => state.section16.gustatoryOverResponsive,
  );
  const gustatoryUnder = useSelector(
    state => state.section16.gustatoryUnderResponsive,
  );
  const gustatoryComs = useSelector(state => state.section16.gustatoryComs);
  const sensoryProfileComs = useSelector(
    state => state.section16.sensoryProfileComs,
  );

  //  New section 16
  const tactileComs = useSelector(state => state.section16.tactileComs);
  const proprioceptiveComs = useSelector(
    state => state.section16.proprioceptiveComs,
  );
  const vestibularComs = useSelector(state => state.section16.vestibularComs);
  const auditoryComs = useSelector(state => state.section16.vestibularComs);
  const visualComs = useSelector(state => state.section16.visualComs);

  // Section 17
  const gravitationalInsecurity = useSelector(
    state => state.section17.gravitationInsecurity,
  );
  const aversiveResponse = useSelector(
    state => state.section17.aversiveResponse,
  );
  const posturalInsecurity = useSelector(
    state => state.section17.posturalInsecurtiy,
  );
  const tactileDefensiveness = useSelector(
    state => state.section17.tactileDefense,
  );
  const sensoryAvoiding = useSelector(state => state.section17.sensoryAvoiding);
  const stimulation = useSelector(state => state.section17.stimulation);
  const distractibility = useSelector(state => state.section17.distractibility);
  const hyperActivity = useSelector(state => state.section17.hyperActivity);
  const coms = useSelector(state => state.section17.coms);
  const formSpace = useSelector(state => state.section17.formSpace);
  const visuoMotor = useSelector(state => state.section17.visuoMotor);
  const tactileDiscrimination = useSelector(
    state => state.section17.tactileDiscrimination,
  );
  const vestibularProcessing = useSelector(
    state => state.section17.vestibularProcessing,
  );
  const praxis = useSelector(state => state.section17.praxis);
  const coms2 = useSelector(state => state.section17.coms2);
  const focalVision = useSelector(state => state.section17.focalVision);
  const ambientVision = useSelector(state => state.section17.ambientVision);
  const eyeMovementSystem = useSelector(
    state => state.section17.eyeMovementSystem,
  );
  const localization = useSelector(state => state.section17.localization);
  const tracking = useSelector(state => state.section17.tracking);

  // Section18
  const gmfm = useSelector(state => state.section18.GMFM);
  const pedi = useSelector(state => state.section18.PEDI);
  const pediatricBalanceScale = useSelector(
    state => state.section18.balanceScale,
  );
  const wotaAquaticScale = useSelector(state => state.section18.WOTA);
  // Last
  const recommendationOptions = useSelector(
    state => state.lastSection.recommendationOptions,
  );
  const accessorsName = useSelector(state => state.lastSection.assessorsName);
  const accessorsDesignation = useSelector(
    state => state.lastSection.assessorsDesignation,
  );
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
        height: auto;
      }
      #image {
        width: 20%;
        height: auto;
        margin-left: 2rem;
        margin-right: 2rem;
        margin-top: 2rem;
      }
      #image2 {
        width: 20%;
        height: auto;
        margin-left:35rem;
        margin-right: 2rem;
        margin-top: 2rem;
      }
      </style>
    </head>
    <body>`;

    html += `
    <div class="image-container">
   <img alt="" src="data:image/png;base64,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/pAxlpOTs2DBgj/+8Y+zZ8+uqqo6/fTT9+3bt3v37tmzZzPGRo8e3dzc/MknnwwfPpxzrnbnNmHChBdffPGMM85gjD366KNSyrVr195zzz2bNm165JFHiouLd+zYMWzYsJaWFsOItGpM02xpaQGAtra2UCgUDodramouvvji3/72t3/+85/ffffd733ve+vXr3/uuef279//6aef3nXXXcuXL8/MzJw1a9bvfve7iRMn5uTkhMNhAJg0adJzzz03atSoK664Yvbs2W+99dZnP/vZPn0Kg+sEjiqDEEIIIXSCfPuDvzrDtP/v+V9Lt4tnHG1G8Jb3nlP57y9NKL1u3FzP7XRx46Z3/yTscIgS8pszP+/Zn7VXDaH2va11W5sOH+hoaAp1CpA+qqXr/mxfapaeMiKQPjo1pzhjeK6/n6Nj1dbW3nzzzW1tbVHLi4uLFy9efN11HgPsuB06dCgcDqva98OHD69cubKwsPDSSy8FgOXLlx89enT69Olz5syprq4GgMLCwnfffbeiomL69Onz5s3jnL/00kuc889//vMpKSlvv/12dXX1ZZddVlhY2NXVtX37dlWc09jY+Prrr48aNerSSy/dv3+/pmmFhd1aQX/4wx8OHjz4s5/9DAA2bty4cePGWbNmzZ07Vwjxt7/9zefzzZ49e9SoUYcOHSouLlY5fgBobW2tqamZMmXKp59+OmzYsJSUlKqqqpKSkh07dpSXl6sutjU1NTt37ty/f/8555wzZcqUbdu25eTkFBYWlpWV+f3+c84559ChQ1OmTAGAV199NS0tbcGCBU888URlZeXjjz/ev49jUGDgjhBCCKHk89ahrc/seVf9fO24OV+ZcHbsOu9U73h6178AgBDy1/O/nsJ0z019UF/5iy1vOb9SQn4259qSrN7rUgae6s25Z88eznlmZubYsWNnzpw5ffr0wT6uhPzzn/985ZVXnnzySVX3MriWLl3697///bHHHlNjyyQLDNwRQgghlHw6zfAX3/2T+tlHtb9feIfnareuf74x1AEAV44+7fbJ3sXfAPDbHavW1nabrem3875Q3K+8O+pJRUVFXl5eRkbGYB8IAMDevXtHjx6dkpIy2AfSN9g5FSGEEELJJ1XzzR9pdaULC/Mf+zd4rnZXycXqh7cObT0ajC4ycfy/aQuihpW896OlH9RXHqeDRQAAEyZM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" />

    </div>`;

    // Section I => Patient Details
    if (
      firstName ||
      fatherName ||
      motherName ||
      address ||
      contactNumber ||
      lastName ||
      age ||
      male ||
      female ||
      userDob ||
      evaluationDate ||
      chiefComplaint ||
      informant ||
      assessedBy ||
      diagnosis ||
      referredBy
    ) {
      html += `
      <div class="label">
        <h1> Patient Details</h1>
      </div>
      <div class="value">
      </div>
      `;
    }
    if (firstName) {
      html += `
      <div class="label">
      <h2>First Name: ${firstName}</h2>
      </div>
    `;
    }
    if (lastName) {
      html += `
      <div class="label">
      <h2>Last Name: ${lastName}</h2>
      </div>
      `;
    }
    if (age) {
      html += `
      <div class="label">
      <h2>Patient Age - ${age}</h2>
      </div>
      `;
    }
    if (fatherName) {
      html += `
      <div class="label">
      <h2>Father's Name - ${fatherName}</h2>
      </div>
      `;
    }

    if (motherName) {
      html += `
      <div class="label">
      <h2>Mother's Name - ${motherName}</h2>
      </div>
      `;
    }

    if (address) {
      html += `
      <div class="label">
      <h2>Address  - ${address}</h2>
      </div>
      `;
    }

    if (contactNumber) {
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
        .map(line => (line !== '' ? `<li>${line}</li>` : ''))
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

    if (referredBy) {
      const formated = referredBy.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>Referred By: ${formated}</h2>
      </div>`;
    }

    if (informant) {
      const formated = informant.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>Informant: ${formated}</h2>
      </div>`;
    }
    if (assessedBy) {
      const formated = assessedBy.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>Assessment by: ${formated}</h2>
      </div>`;
    }
    if (diagnosis) {
      const formated = diagnosis.replace(/\n/g, '<br>');
      html += `
      <div class="label">
      <h2>Diagnosis: ${formated}</h2>
      </div></div>`;
    }

    // Section 2
    if (
      fatherAgeConception ||
      motherAgeConception ||
      workLoad ||
      stresslevel ||
      consanguinity ||
      nonConsanguinity ||
      children ||
      fullTerm ||
      preTerm ||
      workLoadComs ||
      stressLevelComs
    ) {
      html += `
      <div class="label">
        <h1> HISTORY</h1>
      </div>
      `;
    }

    if (fatherAgeConception) {
      html += `
      <div class="label"><h2>Father's Age During Conception :${fatherAgeConception}</h2></div>
     `;
    }
    if (motherAgeConception) {
      html += `
      <div class="label"><h2>Mother's Age During Conception :${motherAgeConception}</h2></div>
     `;
    }
    if (workLoad) {
      html += `
      <div class="label"><h2>Mother's Work Load During Conception :${workLoad}</h2></div>
     `;
    }
    if (workLoadComs) {
      html += `
      <div class="label">
      <h2>Comments ${workLoadComs}</h2>
      </div>
      `;
    }
    if (stresslevel) {
      html += `
  
      <div class="label"><h2>Mother's Stress Level During Conception :${stresslevel}</h2></div>
     `;
    }

    if (stressLevelComs) {
      html += `
      <div class="label">
      <h2>Comments ${stressLevelComs}</h2>
      </div>
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
        <div class="label"><h2>HISTORY : Pre Natal -  Modes of Ambulation:  ${preNatal.join(
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

    // Section3

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
    if (userBirthWeight) {
      html += `
      <div class="label">
      <h2>Birth Weight (kgs) - ${userBirthWeight} </h2>
      </div>`;
    }
    if (userHeadCircumference) {
      html += `
      <div class="label">
      <h2>Head Circumference (cms) - ${userHeadCircumference}</h2>
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
    if (presentHistory) {
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
      socialBehaviour
    ) {
      html += `
        <div class="label">
          <h1> Developmental Milestones (Months)</h1>
        </div>
        <div class="value">
        </div>
        `;
    }
    if (handHolding) {
      html += `
        <div class="label"><h2>Head Holding - ${handHolding} </h2>
        </div>`;
    }
    if (rolling) {
      html += `
        <div class="label"><h2>Rolling - ${rolling} </h2>
        </div>`;
    }
    if (crawling) {
      html += `
        <div class="label"><h2>Crawling - ${crawling} </h2>
        </div><div class="value"><h3></h3>
        </div>`;
    }
    if (sitting) {
      html += `
        <div class="label"><h2>Sitting- ${sitting} </h2>
        </div>`;
    }
    if (standing) {
      html += `
        <div class="label"><h2>Standing - ${standing}</h2>
        </div>`;
    }
    if (walking) {
      html += `
        <div class="label"><h2>Walking - ${walking} </h2>
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
    if (socialBehaviour) {
      const formated = socialBehaviour.replace(/\n/g, '<br>');
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
      carriedByParent ||
      walkingSticks ||
      wheelChair ||
      walkingWalker ||
      walkingIndependently
    ) {
      html += `
      <div class="label">
        <h1> Subjective assessment</h1>
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

    if (carriedByParent) {
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

    // Section 6

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
            <h1>General Observations </h1>
          </div>
          <div class="value">
          </div>
          `;
    }

    // if (mri) {
    //   html += `
    //   <div class="label"><h2>MRI - ${mri} </h2>
    //   <img src="${
    //     selectedImageMRI || clickedImageMRI
    //   }" alt="Selected Image"  style="max-width: 100%; height: auto;" />
    //   </div>`;
    // }

    html += `
        <div class="label">
          ${
            clickedImageMRI && selectedImageMRI
              ? `<h2>MRI - ${mri}</h2>
                 <img src="${clickedImageMRI}" alt="Clicked Image" style="max-width: 100%; height: auto;" />
                 <img src="${selectedImageMRI}" alt="Selected Image" style="max-width: 100%; height: auto;" />`
              : clickedImageMRI || selectedImageMRI
              ? `<h2>MRI - ${mri}</h2>
                 <img src="${
                   clickedImageMRI || selectedImageMRI
                 }" alt="Image" style="max-width: 100%; height: auto;" />`
              : ''
          }
        </div>`;

    // if (eeg) {
    //   html += `
    //   <div class="label"><h2>EEG - ${eeg} </h2>
    //   <img src="${
    //     selectedImageEEG || clickedImageEEG
    //   }" alt="Selected Image"  style="max-width: 300px; height: auto;" />
    //   </div>`;
    // }

    html += `
        <div class="label">
          ${
            clickedImageEEG && selectedImageEEG
              ? `<h2>EEG - ${eeg}</h2>
                 <img src="${clickedImageEEG}" alt="Clicked Image" style="max-width: 100%; height: auto;" />
                 <img src="${selectedImageEEG}" alt="Selected Image" style="max-width: 100%; height: auto;" />`
              : clickedImageEEG || selectedImageEEG
              ? `<h2>EEG - ${eeg}</h2>
                 <img src="${
                   clickedImageEEG || selectedImageEEG
                 }" alt="Image" style="max-width: 100%; height: auto;" />`
              : ''
          }
        </div>`;

    // if (bera) {
    //   html += `
    //   <div class="label"><h2>BERA - ${bera} </h2>
    //   <img src="${
    //     selectedImageBERA || clickedImageBERA
    //   }" alt="Selected Image"  style="max-width: 300px; height: auto;" />
    //   </div>`;
    // }

    html += `
        <div class="label">
          ${
            clickedImageBERA && selectedImageBERA
              ? `<h2>BERA - ${bera}</h2>
                 <img src="${clickedImageBERA}" alt="Clicked Image" style="max-width: 100%; height: auto;" />
                 <img src="${selectedImageBERA}" alt="Selected Image" style="max-width: 100%; height: auto;" />`
              : clickedImageBERA || selectedImageBERA
              ? `<h2>BERA - ${bera}</h2>
                 <img src="${
                   clickedImageBERA || selectedImageBERA
                 }" alt="Image" style="max-width: 100%; height: auto;" />`
              : ''
          }
        </div>`;

    // if (opthalmalogy) {
    //   html += `
    //   <div class="label"><h2>Opthalmalogy - ${opthalmalogy} </h2>
    //   <img src="${
    //     selectedImageOPT || clickedImageOPT
    //   }" alt="Selected Image"  style="max-width: 300px; height: auto;" />
    //   </div>`;
    // }

    html += `
        <div class="label">
          ${
            clickedImageOPT && selectedImageOPT
              ? `<h2>Ophthalmology - ${opthalmalogy}</h2>
                 <img src="${clickedImageOPT}" alt="Clicked Image" style="max-width: 100%; height: auto;" />
                 <img src="${selectedImageOPT}" alt="Selected Image" style="max-width: 100%; height: auto;" />`
              : clickedImageOPT || selectedImageOPT
              ? `<h2>Ophthalmology - ${opthalmalogy}</h2>
                 <img src="${
                   clickedImageOPT || selectedImageOPT
                 }" alt="Image" style="max-width: 100%; height: auto;" />`
              : ''
          }
        </div>`;

    // if (xRays) {
    //   html += `
    //   <div class="label"><h2>XRAYS - ${xRays} </h2>
    //   <img src="${
    //     selectedImageXRAYS || clickedImageXRAYS
    //   }" alt="Selected Image"  style="max-width: 300px; height: auto;" />
    //   </div>`;
    // }

    html += `
        <div class="label">
          ${
            clickedImageXRAYS && selectedImageXRAYS
              ? `<h2>X-Rays - ${xRays}</h2>
                 <img src="${clickedImageXRAYS}" alt="Clicked Image" style="max-width: 100%; height: auto;" />
                 <img src="${selectedImageXRAYS}" alt="Selected Image" style="max-width: 100%; height: auto;" />`
              : clickedImageXRAYS || selectedImageXRAYS
              ? `<h2>X-Rays - ${xRays}</h2>
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
            <h1> Objective assessment </h1>
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
      hipAdductionRTR2 ||
      bicepsRTR1 ||
      bicepsRTR2 ||
      bicepsLTR1 ||
      bicepsLTR2
    ) {
      html += `
            <div class="label">
              <h1> Tardiue's  </h1>
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

    // New

    if (bicepsRTR1) {
      const formated = bicepsRTR1.replace(/\n/g, '<br>');
      html += `
         <div class="label">
          <h2>Biceps RT R1  :${formated}</h2>
          </div>
        `;
    }
    if (bicepsRTR2) {
      const formated = bicepsRTR2.replace(/\n/g, '<br>');
      html += `
          <div class="label">
          <h2>Biceps RT R2 :${formated}</h2>
          </div>
        `;
    }
    if (bicepsLTR1) {
      const formated = bicepsLTR1.replace(/\n/g, '<br>');
      html += `
          <div class="label">
          <h2>Biceps LT R1  :${formated}</h2>
          </div>
        `;
    }
    if (bicepsLTR2) {
      const formated = bicepsLTR2.replace(/\n/g, '<br>');
      html += `
          <div class="label">
          <h2>Biceps LT R2  :${formated}</h2>
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
      hipLatRot ||
      shoulderAbd ||
      shoulderAdd ||
      shoulderFlex ||
      shoulderExt ||
      elbowFlex ||
      forearmSupination ||
      forearmPronation ||
      ankleDF ||
      anklePF ||
      ankleInversion ||
      ankleEversion ||
      wristFlex ||
      wristExt
    ) {
      html += `
          <div class="label">
            <h1> ROM </h1>
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

    if (hipLatRot) {
      html += `
              <div class="label">
              <h2>Hip lateral rotation : ${hipLatRot}</h2>
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

    if (forearmSupination) {
      html += `
          <div class="label">
          <h2>Forearm Supination: ${forearmSupination}</h2>

          </div>
          `;
    }
    if (forearmPronation) {
      html += `
          <div class="label">
          <h2>Forearm Pronation: ${forearmPronation}</h2>

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
    if (upperExterimities || lowerExterimities || asworthsComs) {
      html += `
            <div class="label">
              <h1> Modified Ashworth's</h1>
            </div>
            <div class="value">
            </div>
            `;
    }

    if (upperExterimities) {
      html += `
            <div class="label">
            <h2> Upper Extremities : ${upperExterimities}</h2></div><div class="value">
            </div>
            </div>
            `;
    }

    if (lowerExterimities) {
      html += `
                      <div class="label">
                      <h2> Lower Extremities : ${lowerExterimities}</h2></div><div class="value">
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
      gmfc ||
      macs ||
      miniMac ||
      cfcs
    ) {
      html += `
            <div class="label">
              <h1>Functional Evaluation</h1>
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

    if (gmfc) {
      html += `
              <div class="label">
              <h2>GMFC - ${gmfc}</h2>
              </div>

            `;
    }

    if (macs) {
      html += `
          <div class="label">
              <h2>MACS - ${macs}</h2>
              </div>

            `;
    }

    if (miniMac) {
      html += `
         <div class="label">
              <h2>Mini Mac - ${miniMac} </h2>
              </div>

            `;
    }

    if (cfcs) {
      html += `
          <div class="label">
          <h2>CFCS - ${cfcs}</h2></div>
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
              <h1> ICF </h1>
            </div>
            <div class="value">
            </div>
            `;
    }

    if (bodyStructurePositive) {
      const lines = bodyStructurePositive.split('\n');
      const bulletPoints = lines
        .map(line => (line !== '' ? `<li>${line}</li>` : ''))
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
        .map(line => (line !== '' ? `<li>${line}</li>` : ''))
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
        .map(line => (line !== '' ? `<li>${line}</li>` : ''))
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
        .map(line => (line !== '' ? `<li>${line}</li>` : ''))
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
        .map(line => (line !== '' ? `<li>${line}</li>` : ''))
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
        .map(line => (line !== '' ? `<li>${line}</li>` : ''))
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
        .map(line => (line !== '' ? `<li>${line}</li>` : ''))
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
        .map(line => (line !== '' ? `<li>${line}</li>` : ''))
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

    if (adl) {
      const lines = adl.split('\n');
      const bulletPoints = lines
        .map(line => (line !== '' ? `<li>${line}</li>` : ''))
        .join('');

      if (bulletPoints) {
        html += `
              <div class="label">
                <h1>ADL , Activities for Daily Living - ${bulletPoints}</h1>
              </div>
              `;
      }
    }

    // Section 12 => Multi System Assessment
    if (
      posture ||
      asymmetry ||
      side ||
      broad ||
      narrow ||
      generalPosture ||
      callosities ||
      alignmentComs ||
      baseOfSupportComs ||
      movementStratComs ||
      staticBalanceComs
    ) {
      html += `
            <div class="label">
              <h1> Multi System assessment</h1>
            </div>
            <div class="value">
            </div>
            `;
    }

    if (posture) {
      const formated = posture.replace(/\n/g, '<br>');
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

    if (alignmentComs) {
      const formated = alignmentComs.replace(/\n/g, '<br>');
      html += `
           <div class="label">
            <h2>Comments: ${formated}</h2>
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

    if (baseOfSupportComs) {
      const formated = baseOfSupportComs.replace(/\n/g, '<br>');
      html += `
           <div class="label">
            <h2>Comments: ${formated}</h2>
            </div>

            `;
    }

    if (generalPosture) {
      const lines = generalPosture.split('\n');
      const bulletPoints = lines
        .map(line => (line !== '' ? `<li>${line}</li>` : ''))
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
        .map(line => (line !== '' ? `<li>${line}</li>` : ''))
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
      contractionConcentric ||
      contractionIsometric ||
      contractionEccentric ||
      contraction ||
      reciprocalInhibition ||
      massEnergy ||
      isolatedWork ||
      dynamicStiffness ||
      extraneousMovement
    ) {
      html += `
            <div class="label">
              <h1>Single System assessment</h1>
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

    if (singleassessment) {
      const formated = singleassessment.replace(/\n/g, '<br>');
      html += `
         <div class="label">
          <h2>Single System assessment Comments :  ${formated}</h2>
          </div>

        `;
    }

    // Section 13 =>  Sensory Systems
    if (
      registrationComs ||
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
      gustatoryComs ||
      sensoryProfileComs ||
      tactileComs ||
      proprioceptiveComs ||
      vestibularComs ||
      auditoryComs ||
      visualComs
    ) {
      html += `
            <div class="label">
              <h1> Sensory Systems</h1>
            </div>
            <div class="value">
            </div>
            `;
    }

    const registrationOption = Object.keys(registrationOptions).filter(
      key => registrationOptions[key],
    );
    if (registrationOption.length > 0) {
      html += `
          <div class="label">
          <h2> Sensory Systems => Registraion Options  :  ${registrationOption.join(
            ', ',
          )}</h2>
          </div>
      `;
    }

    if (registrationComs) {
      html += `
          <div class="label">
          <h2>Registraion Comments : ${registrationComs}</h2></div><div class="value">
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

    if (tactileComs) {
      html += `
          <div class="label">
          <h2>Comments : ${tactileComs}</h2></div><div class="value">
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

    if (proprioceptiveComs) {
      html += `
          <div class="label">
          <h2>Comments : ${proprioceptiveComs}</h2></div><div class="value">
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
    if (vestibularComs) {
      html += `
          <div class="label">
          <h2>Comments : ${vestibularComs}</h2></div><div class="value">
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

    if (auditoryComs) {
      html += `
          <div class="label">
          <h2>Comments : ${auditoryComs}</h2></div><div class="value">
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

    if (visualComs) {
      html += `
          <div class="label">
          <h2>Comments : ${visualComs}</h2></div><div class="value">
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

    if (gustatoryComs) {
      html += `
          <div class="label">
          <h2>Gustatory Coms  : ${gustatoryComs}</h2>
          </div>

          `;
    }

    if (sensoryProfileComs) {
      html += `
         <div class="label">
          <h2>Sensory Profile Coms  : ${sensoryProfileComs}</h2>
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

    const movementStratOpts = Object.keys(movementStrategies).filter(
      key => movementStrategies[key],
    );
    if (movementStratOpts.length > 0) {
      html += `
              <div class="label"><h2>  Movement Strategies Used :  ${movementStratOpts.join(
                ', ',
              )}</h2>
              </div>
          `;
    }
    if (movementStratComs) {
      const formated = movementStratComs.replace(/\n/g, '<br>');
      html += `
           <div class="label">
            <h2>Comments: ${formated}</h2>
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
    if (staticBalanceComs) {
      const formated = staticBalanceComs.replace(/\n/g, '<br>');
      html += `
           <div class="label">
            <h2>Comments: ${formated}</h2>
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
          <h2>Co ordination Comments : ${coordinationComs}</h2>
          </div>

          `;
    }

    // Section 14 =>  Sensory Modulation
    if (
      gravitationalInsecurity ||
      aversiveResponse ||
      posturalInsecurity ||
      tactileDefensiveness ||
      stimulation ||
      sensoryAvoiding ||
      distractibility ||
      hyperActivity ||
      coms
    ) {
      html += `
            <div class="label">
              <h1>Sensory Modulation</h1>
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
    if (stimulation) {
      html += `
          <div class="label">
          <h2>Poor registration to stimulation : ${stimulation}</h2>
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
    if (hyperActivity) {
      html += `
        <div class="label">
          <h2>Hyperactivity : ${hyperActivity}</h2>

          </div>
          `;
    }
    if (coms) {
      const formated = coms.replace(/\n/g, '<br>');
      html += `
          <div class="section"><div class="label">
          <h2>Sensory Modulation Comments : ${formated}</h2>
          </div>

          `;
    }

    if (
      formSpace ||
      visuoMotor ||
      tactileDiscrimination ||
      praxis ||
      vestibularProcessing ||
      coms2
    ) {
      html += `
          <div class="label">
            <h1> Sensory Processing</h1>
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

    if (visuoMotor) {
      html += `
          <div class="label">
          <h2>Visuo motor co-ordination : ${visuoMotor}</h2>
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

    if (vestibularProcessing) {
      html += `
          <div class="label">
          <h2>Vestibular Proprioceptive Processing : ${vestibularProcessing}</h2>
          </div>
          `;
    }

    if (coms2) {
      const formated = coms2.replace(/\n/g, '<br>');
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
            <h1> Visual System</h1>
          </div>
          <div class="value">
          </div>
          `;
    }

    if (focalVision) {
      const lines = focalVision.split('\n');
      const bulletPoints = lines
        .map(line => (line !== '' ? `<li>${line}</li>` : ''))
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
        .map(line => (line !== '' ? `<li>${line}</li>` : ''))
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
        .map(line => (line !== '' ? `<li>${line}</li>` : ''))
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
        .map(line => (line !== '' ? `<li>${line}</li>` : ''))
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
        .map(line => (line !== '' ? `<li>${line}</li>` : ''))
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

    html += `
    <footer id="footer">
    <table>
      <tr>
        <td>
          <div class="d-flex flex-column">
          <img id="image"
          alt=""
           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII=" />
            <h2>${accessorsName}</h2>
            <h2>${accessorsDesignation}</h2>
          </div>
        </td>
        <td>
          <div class="d-flex flex-column">
             <img id="image2" alt="" src="data:image/png;base64,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" />
            <div style="text-align:right;">
             <h2>Dr Dipti Patil</h2>
            <h2>Director of AARROSH</h2>
            <h2>PT, Advanced NDT Certified Therapist (USA)</h2>
            <h2>Certified Aquatic therapist</h2>
            <h2>Assistant Lecturer in IATF (Switzerland)</h2>
            <h2>Certified GM Practitioner (Austria)</h2>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </footer>
  
    
    `;

    return html;
  };

  const handleSharePdf = async () => {
    try {
      // Increment share count
      // setShareCount(shareCount + 1);

      // Generate the HTML to convert to PDF
      const htmlContent = generateHtml();

      // Create the options for the PDF conversion
      const options = {
        html: htmlContent,
        fileName: `${firstName}_${new Date().toISOString().slice(0, 10)}`,
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

      // Save share count and input data to database
      // const data = {
      //   firstName,
      //   lastName,
      //   age,
      //   shared: true,
      // };
      // await axios.post('<mongoDB API endpoint>', data);
    } catch (error) {
      console.error(error);
    }
  };

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

  const saveForm = () => {
    const formData = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      age: age,
      fatherName: fatherName,
      motherName: motherName,
      address: address,
      contactNumber: contactNumber,
      male: male,
      female: female,
      chiefComplaint: chiefComplaint,
      informant: informant,
      assessedBy: assessedBy,
      diagnosis: diagnosis,
      referredBy: referredBy,
      fatherAgeConception: fatherAgeConception,
      motherAgeConception: motherAgeConception,
      workLoad: workLoad,
      stresslevel: stresslevel,
      consanguinity: consanguinity,
      nonConsanguinity: nonConsanguinity,
      children: children,
      preNatalOptions: preNatalOptions,
      fullTerm: fullTerm,
      preTerm: preTerm,
      ciabYes: ciabYes,
      ciabNo: ciabNo,
      userBirthWeight: userBirthWeight,
      userHeadCircumference: userHeadCircumference,
      day1To7days: day1To7days,
      week1To4weeks: week1To4weeks,
      week4To4months: week4To4months,
      reasonNicuStay: reasonNicuStay,
      presentHistory: presentHistory,
      handHolding: handHolding,
      rolling: rolling,
      crawling: crawling,
      sitting: sitting,
      standing: standing,
      walking: walking,
      fineMotor: fineMotor,
      communications: communications,
      socialBehaviour: socialBehaviour,
      sightIntact: sightIntact,
      sightNotIntact: sightNotIntact,
      hearingIntact: hearingIntact,
      hearingNotIntact: hearingNotIntact,
      speechIntact: speechIntact,
      speechNotIntact: speechNotIntact,
      carriedByParent: carriedByParent,
      walkingSticks: walkingSticks,
      wheelChair: wheelChair,
      walkingWalker: walkingWalker,
      walkingIndependently: walkingIndependently,
      mri: mri,
      selectedImageMRI: selectedImageMRI,
      clickedImageMRI: clickedImageMRI,
      eeg: eeg,
      selectedImageEEG: selectedImageEEG,
      clickedImageEEG: clickedImageEEG,
      bera: bera,
      selectedImageBERA: selectedImageBERA,
      clickedImageBERA: clickedImageBERA,
      opthalmalogy: opthalmalogy,
      selectedImageOPT: selectedImageOPT,
      clickedImageOPT: clickedImageOPT,
      xRays: xRays,
      selectedImageXRAYS: selectedImageXRAYS,
      clickedImageXRAYS: clickedImageXRAYS,
      hypotonia: hypotonia,
      hypertonia: hypertonia,
      deformitiesR: deformitiesR,
      deformitiesL: deformitiesL,
      contractureR: contractureR,
      contractureL: contractureL,
      tightnessR: tightnessR,
      tightnessL: tightnessL,
      tasRTR1: tasRTR1,
      tasRTR2: tasRTR2,
      tasLTR1: tasLTR1,
      tasLTR2: tasLTR2,
      hamstringsRTR1: hamstringsRTR1,
      hamstringsRTR2: hamstringsRTR2,
      hamstringsLTR1: hamstringsLTR1,
      hamstringsLTR2: hamstringsLTR2,
      hipAdductionRTR1: hipAdductionRTR1,
      hipAdductionRTR2: hipAdductionRTR2,
      hipAdductionLTR1: hipAdductionLTR1,
      hipAdductionLTR2: hipAdductionLTR2,
      backExt: backExt,
      backFlex: backFlex,
      backLat: backLat,
      neckFlex: neckFlex,
      neckExt: neckExt,
      neckLat: neckLat,
      hipFlex: hipFlex,
      hipExt: hipExt,
      hipAbd: hipAbd,
      hipAdd: hipAdd,
      kneeFlex: kneeFlex,
      hipMedRot: hipMedRot,
      hipLatRot: hipLatRot,
      shoulderAbd: shoulderAbd,
      shoulderFlex: shoulderFlex,
      shoulderAdd: shoulderAdd,
      shoulderExt: shoulderExt,
      elbowFlex: elbowFlex,
      forearmPronation: forearmPronation,
      forearmSupination: forearmSupination,
      ankleDF: ankleDF,
      anklePF: anklePF,
      ankleInversion: ankleInversion,
      ankleEversion: ankleEversion,
      wristFlex: wristFlex,
      wristExt: wristExt,
      upperExterimities: upperExterimities,
      lowerExterimities: lowerExterimities,
      asworthsComs: asworthsComs,
      supineToProneImmobile: supineToProneImmobile,
      supineToProneAssistance: supineToProneAssistance,
      supineToProneIndependent: supineToProneIndependent,
      supineToSitImmobile: supineToSitImmobile,
      supineToSitAssistance: supineToSitAssistance,
      supineToSitIndependent: supineToSitIndependent,
      sittingImmobile: sittingImmobile,
      sittingAssistance: sittingAssistance,
      sittingIndependent: sittingIndependent,
      quadsImmobile: quadsImmobile,
      quadsAssistance: quadsAssistance,
      quadsIndependent: quadsIndependent,
      standingImmobile: standingImmobile,
      standingAssistance: standingAssistance,
      standingIndependent: standingIndependent,
      kneelingImmobile: kneelingImmobile,
      kneelingAssistance: kneelingAssistance,
      kneelingIndependent: kneelingIndependent,
      halfKneelingImmobile: halfKneelingImmobile,
      halfKneelingAssistance: halfKneelingAssistance,
      halfKneelingIndependent: halfKneelingIndependent,
      ambulationImmobile: ambulationImmobile,
      ambulationAssistance: ambulationAssistance,
      ambulationIndependent: ambulationIndependent,
      gmfc: gmfc,
      miniMac: miniMac,
      macs: macs,
      cfcs: cfcs,
      bodyStructurePositive: bodyStructurePositive,
      bodyStructureNegative: bodyStructureNegative,
      bodyFunctionPositive: bodyFunctionPositive,
      bodyFunctionNegative: bodyFunctionNegative,
      activitiesParticipation: activitiesParticipation,
      activitiesLimitation: activitiesLimitation,
      environmentalPersonal: environmentalPersonal,
      environmentalContextual: environmentalContextual,
      shortTermGoals: shortTermGoals,
      longTermGoals: longTermGoals,
      intervention: intervention,
      equipments: equipments,
      section17Coms: section17Coms,
      adl: adl,
      posture: posture,
      asymmetry: asymmetry,
      side: side,
      broad: broad,
      narrow: narrow,
      generalPosture: generalPosture,
      callosities: callosities,
      movementStrategies: movementStrategies,
      staticBalanceGood: staticBalanceGood,
      staticBalanceFair: staticBalanceFair,
      staticBalancePoor: staticBalancePoor,
      anticipatoryBalanceGood: anticipatoryBalanceGood,
      anticipatoryBalanceFair: anticipatoryBalanceFair,
      anticipatoryBalancePoor: anticipatoryBalancePoor,
      anticipatoryBalanceComs: anticipatoryBalanceComs,
      reactiveBalanceGood: reactiveBalanceGood,
      reactiveBalanceFair: reactiveBalanceFair,
      reactiveBalancePoor: reactiveBalancePoor,
      reactiveBalanceComs: reactiveBalanceComs,
      coordinationGood: coordinationGood,
      coordinationFair: coordinationFair,
      coordinationPoor: coordinationPoor,
      coordinationComs: coordinationComs,
      canInitiate: canInitiate,
      cantInitiate: cantInitiate,
      initiateComs: initiateComs,
      sustenancePoor: sustenancePoor,
      sustenanceGood: sustenanceGood,
      sustenanceFair: sustenanceFair,
      sustenanceComs: sustenanceComs,
      terminationPassive: terminationPassive,
      terminationAbrupt: terminationAbrupt,
      terminationComs: terminationComs,
      controlGradPoor: controlGradPoor,
      controlGradFair: controlGradFair,
      controlGradGood: controlGradGood,
      controlGradComs: controlGradComs,
      recruitmentPostural: recruitmentPostural,
      recruitmentMovement: recruitmentMovement,
      contractionConcentric: contractionConcentric,
      contractionIsometric: contractionIsometric,
      contractionEccentric: contractionEccentric,
      contraction: contraction,
      reciprocalInhibition: reciprocalInhibition,
      massEnergy: massEnergy,
      isolatedWork: isolatedWork,
      dynamicStiffness: dynamicStiffness,
      extraneousMovement: extraneousMovement,
      singleassessment: singleassessment,
      registrationOptions: registrationOptions,
      registrationComs: registrationComs,
      tactileUnder: tactileUnder,
      tactileOver: tactileOver,
      proprioceptiveUnder: proprioceptiveUnder,
      proprioceptiveOver: proprioceptiveOver,
      vestibularUnder: vestibularUnder,
      vestibularOver: vestibularOver,
      auditoryUnder: auditoryUnder,
      auditoryOver: auditoryOver,
      visualUnder: visualUnder,
      visualOver: visualOver,
      gustatoryOver: gustatoryOver,
      gustatoryUnder: gustatoryUnder,
      gustatoryComs: gustatoryComs,
      sensoryProfileComs: sensoryProfileComs,
      gravitationalInsecurity: gravitationalInsecurity,
      aversiveResponse: aversiveResponse,
      posturalInsecurity: posturalInsecurity,
      tactileDefensiveness: tactileDefensiveness,
      sensoryAvoiding: sensoryAvoiding,
      stimulation: stimulation,
      distractibility: distractibility,
      hyperActivity: hyperActivity,
      coms: coms,
      formSpace: formSpace,
      visuoMotor: visuoMotor,
      tactileDiscrimination: tactileDiscrimination,
      vestibularProcessing: vestibularProcessing,
      praxis: praxis,
      coms2: coms2,
      focalVision: focalVision,
      ambientVision: ambientVision,
      eyeMovementSystem: eyeMovementSystem,
      localization: localization,
      tracking: tracking,
      gmfm: gmfm,
      pedi: pedi,
      pediatricBalanceScale: pediatricBalanceScale,
      wotaAquaticScale: wotaAquaticScale,
      recommendationOptions: recommendationOptions,
      accessorsName: accessorsName,
      accessorsDesignation: accessorsDesignation,
    });

    db.transaction(txn => {
      txn.executeSql(
        'SELECT _id FROM patient_data WHERE patient_name = ?',
        [selectedPatientName],
        (_, result) => {
          if (result.rows.length > 0) {
            const patientId = result.rows.item(0)._id;
            txn.executeSql(
              'INSERT INTO form_data(patient_id, form_data) VALUES (?, ?)',
              [patientId, formData],
              (_, res) => {
                console.log(res);
              },
              (_, error) => {
                console.log('Couldnt Save Data ', error);
              },
            );
          }
        },
      );
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.inputFieldContainerSAVE}>
        <TouchableOpacity style={styles.exportBtn} onPress={saveForm}>
          <Text style={styles.exportText}>Save form data </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputFieldContainerSHARE}>
        <TouchableOpacity style={styles.exportBtn} onPress={handleSharePdf}>
          <Text style={styles.exportText}>Share PDF</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputFieldContainerEXPORT}>
        <TouchableOpacity style={styles.exportBtn} onPress={handleExportPdf}>
          <Text style={styles.exportText}>Save to Local Storage </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    marginVertical: wp('15%'),
    marginHorizontal: wp('10%'),
    flexDirection: 'column',
    backgroundColor: '#4586ff',
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

export default Generate;
