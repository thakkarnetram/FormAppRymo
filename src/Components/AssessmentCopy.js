import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../state/index';

// Import  sections here
import Section1 from '../Components/Sections/Section1';
import Section2 from '../Components/Sections/Section2';
import Section3 from '../Components/Sections/Section3';
import Section4 from '../Components/Sections/Section4';
import Section5 from '../Components/Sections/Section5';
import Section6 from '../Components/Sections/Section6';
import Section7 from '../Components/Sections/Section7';
import Section8 from '../Components/Sections/Section8';
import Section9 from '../Components/Sections/Section9';
import Section10 from '../Components/Sections/Section10';
import Section11 from '../Components/Sections/Section11';
import Section12 from '../Components/Sections/Section12';
import Section13 from '../Components/Sections/Section13';
import Section14 from '../Components/Sections/Section14';
import Section15 from '../Components/Sections/Section15';
import Section16 from '../Components/Sections/Section16';
import Section17 from '../Components/Sections/Section17';
import Section18 from '../Components/Sections/Section18';
import LastSection from '../Components/Sections/Last';
import db from '../db/db';
import Generate from './GenerateHtml/Generate';

const sections = [
  {key: 'section1', title: 'Section 1', component: Section1},
  {key: 'section2', title: 'Section 2', component: Section2},
  {key: 'section3', title: 'Section 3', component: Section3},
  {key: 'section4', title: 'Section 4', component: Section4},
  {key: 'section5', title: 'Section 5', component: Section5},
  {key: 'section6', title: 'Section 6', component: Section6},
  {key: 'section7', title: 'Section 7', component: Section7},
  {key: 'section8', title: 'Section 8', component: Section8},
  {key: 'section9', title: 'Section 9', component: Section9},
  {key: 'section10', title: 'Section 10', component: Section10},
  {key: 'section11', title: 'Section 11', component: Section11},
  {key: 'section13', title: 'Section 13', component: Section13},
  {key: 'section12', title: 'Section 12', component: Section12},
  {key: 'section14', title: 'Section 14', component: Section14},
  {key: 'section15', title: 'Section 15', component: Section15},
  {key: 'section16', title: 'Section 16', component: Section16},
  {key: 'section17', title: 'Section 17', component: Section17},
  {key: 'section18', title: 'Section 18', component: Section18},
  {key: 'last', title: 'Last Section', component: LastSection},
  // Add more sections as needed
];

const AssessmentCopy = ({route}) => {
  const {selectedPatientId, selectedPatientName} = route.params;
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    fetchData(selectedPatientId);
  }, []);

  const renderItem = ({item}) => {
    const SectionComponent = item.component;
    return <SectionComponent />;
  };

  const renderGenerate = () => {
    return <Generate selectedPatientName={selectedPatientName} />;
  };

  const renderSectionItem = ({item}) => {
    if (item.key === 'generate') {
      return renderGenerate();
    } else {
      return renderItem({item});
    }
  };

  const fetchData = selectedPatientId => {
    db.transaction(txn => {
      resetForm();
      txn.executeSql(
        'SELECT * FROM form_data WHERE patient_id = ? ORDER BY patient_data_created_at DESC LIMIT 1',
        [selectedPatientId],
        (_, res) => {
          if (res.rows.length > 0) {
            const patientData = res.rows.item(0);
            const formData = JSON.parse(patientData.form_data);
            const firstName = formData.firstName;
            const lastName = formData.lastName;
            const age = formData.age;
            const fatherName = formData.fatherName;
            const motherName = formData.motherName;
            const address = formData.address;
            const contact = formData.contactNumber;
            const male = formData.male;
            const chiefComplaint = formData.chiefComplaint;
            const informant = formData.informant;
            const assessedBy = formData.assessedBy;
            const diagnosis = formData.diagnosis;
            const referredBy = formData.referredBy;
            const fatherAgeConception = formData.fatherAgeConception;
            const motherAgeConception = formData.motherAgeConception;
            const workLoad = formData.workLoad;
            const stresslevel = formData.stresslevel;
            const consanguinity = formData.consanguinity;
            const children = formData.children;
            const preNatal = formData.preNatalOptions;
            const fullTerm = formData.fullTerm;
            const ciabYes = formData.ciabYes;
            const userBirthWeight = formData.userBirthWeight;
            const userHeadCircumference = formData.userHeadCircumference;
            const day1To7days = formData.day1To7days;
            const week1To4weeks = formData.week1To4weeks;
            const reasonForNICUStay = formData.reasonNicuStay;
            const presentHistory = formData.presentHistory;
            const handHolding = formData.handHolding;
            const rolling = formData.rolling;
            const crawling = formData.crawling;
            const sitting = formData.sitting;
            const standing = formData.standing;
            const walking = formData.walking;
            const fineMotor = formData.fineMotor;
            const communications = formData.communications;
            const socialBehaviour = formData.socialBehaviour;
            const sightIntact = formData.sightIntact;
            const hearingIntact = formData.hearingIntact;
            const speechIntact = formData.speechIntact;
            const carriedByParent = formData.carriedByParent;
            const walkingSticks = formData.walkingSticks;
            const wheelChair = formData.wheelChair;
            const walkingWalker = formData.walkingWalker;
            const walkingIndependently = formData.walkingIndependently;
            const mri = formData.mri;
            const selectedImageMRI = formData.selectedImageMRI;
            const clickedImageMRI = formData.clickedImageMRI;
            const eeg = formData.eeg;
            const selectedImageEEG = formData.selectedImageEEG;
            const clickedImageEEG = formData.clickedImageEEG;
            const bera = formData.bera;
            const selectedImageBERA = formData.selectedImageBERA;
            const clickedImageBERA = formData.clickedImageBERA;
            const opthalmalogy = formData.opthalmalogy;
            const selectedImageOPT = formData.selectedImageOPT;
            const clickedImageOPT = formData.clickedImageOPT;
            const xRays = formData.xRays;
            const selectedImageXRAYS = formData.selectedImageXRAYS;
            const clickedImageXRAYS = formData.clickedImageXRAYS;
            const hypotonia = formData.hypotonia;
            const deformitiesR = formData.deformitiesR;
            const deformitiesL = formData.deformitiesL;
            const contractureR = formData.contractureR;
            const contractureL = formData.contractureL;
            const tightnessR = formData.tightnessR;
            const tightnessL = formData.tightnessL;
            const tasRTR1 = formData.tasRTR1;
            const tasRTR2 = formData.tasRTR2;
            const tasLTR1 = formData.tasLTR1;
            const tasLTR2 = formData.tasLTR2;
            const hamstringsRTR1 = formData.hamstringsRTR1;
            const hamstringsRTR2 = formData.hamstringsRTR2;
            const hamstringsLTR1 = formData.hamstringsLTR1;
            const hamstringsLTR2 = formData.hamstringsLTR2;
            const hipAdductionRTR1 = formData.hipAdductionRTR1;
            const hipAdductionRTR2 = formData.hipAdductionRTR2;
            const hipAdductionLTR1 = formData.hipAdductionLTR1;
            const hipAdductionLTR2 = formData.hipAdductionLTR2;
            const backExt = formData.backExt;
            const backFlex = formData.backFlex;
            const backLat = formData.backLat;
            const neckFlex = formData.neckFlex;
            const neckExt = formData.neckExt;
            const neckLat = formData.neckLat;
            const hipFlex = formData.hipFlex;
            const hipExt = formData.hipExt;
            const hipAbd = formData.hipAbd;
            const hipAdd = formData.hipAdd;
            const kneeFlex = formData.kneeFlex;
            const hipMedRot = formData.hipMedRot;
            const hipLatRot = formData.hipLatRot;
            const shoulderAbd = formData.shoulderAbd;
            const shoulderFlex = formData.shoulderFlex;
            const shoulderAdd = formData.shoulderAdd;
            const shoulderExt = formData.shoulderExt;
            const elbowFlex = formData.elbowFlex;
            const forearmPronation = formData.forearmPronation;
            const forearmSupination = formData.forearmSupination;
            const ankleDF = formData.ankleDF;
            const anklePF = formData.anklePF;
            const ankleInversion = formData.ankleInversion;
            const ankleEversion = formData.ankleEversion;
            const wristFlex = formData.wristFlex;
            const wristExt = formData.wristExt;
            const upperExterimities = formData.upperExterimities;
            const lowerExterimities = formData.lowerExterimities;
            const asworthsComs = formData.asworthsComs;
            const supineToProneImmobile = formData.supineToProneImmobile;
            const supineToProneAssistance = formData.supineToProneAssistance;
            const supineToSitImmobile = formData.supineToSitImmobile;
            const supineToSitAssistance = formData.supineToSitAssistance;
            const sittingImmobile = formData.sittingImmobile;
            const sittingAssistance = formData.sittingAssistance;
            const quadsImmobile = formData.quadsImmobile;
            const quadsAssistance = formData.quadsAssistance;
            const standingImmobile = formData.standingImmobile;
            const standingAssistance = formData.standingAssistance;
            const kneelingImmobile = formData.kneelingImmobile;
            const kneelingAssistance = formData.kneelingAssistance;
            const halfKneelingImmobile = formData.halfKneelingImmobile;
            const halfKneelingAssistance = formData.halfKneelingAssistance;
            const ambulationImmobile = formData.ambulationImmobile;
            const ambulationAssistance = formData.ambulationAssistance;
            const gmfc = formData.gmfc;
            const miniMac = formData.miniMac;
            const macs = formData.macs;
            const cfcs = formData.cfcs;
            const bodyStructurePositive = formData.bodyStructurePositive;
            const bodyStructureNegative = formData.bodyStructureNegative;
            const bodyFunctionPositive = formData.bodyFunctionPositive;
            const bodyFunctionNegative = formData.bodyFunctionNegative;
            const activitiesParticipation = formData.activitiesParticipation;
            const activitiesLimitation = formData.activitiesLimitation;
            const environmentalPersonal = formData.environmentalPersonal;
            const environmentalContextual = formData.environmentalContextual;
            const shortTermGoals = formData.shortTermGoals;
            const longTermGoals = formData.longTermGoals;
            const intervention = formData.intervention;
            const equipments = formData.equipments;
            const section17Coms = formData.section17Coms;
            const adl = formData.adl;
            const posture = formData.posture;
            const asymmetry = formData.asymmetry;
            const side = formData.side;
            const broad = formData.broad;
            const generalPosture = formData.generalPosture;
            const callosities = formData.callosities;
            const movementStrategies = formData.movementStrategies;
            const staticBalanceGood = formData.staticBalanceGood;
            const staticBalanceFair = formData.staticBalanceFair;
            const anticipatoryBalanceGood = formData.anticipatoryBalanceGood;
            const anticipatoryBalanceFair = formData.anticipatoryBalanceFair;
            const anticipatoryBalanceComs = formData.anticipatoryBalanceComs;
            const reactiveBalanceGood = formData.reactiveBalanceGood;
            const reactiveBalanceFair = formData.reactiveBalanceFair;
            const reactiveBalanceComs = formData.reactiveBalanceComs;
            const coordinationGood = formData.coordinationGood;
            const coordinationFair = formData.coordinationFair;
            const coordinationComs = formData.coordinationComs;
            const canInitiate = formData.canInitiate;
            const initiateComs = formData.initiateComs;
            const sustenanceGood = formData.sustenanceGood;
            const sustenanceFair = formData.sustenanceFair;
            const sustenanceComs = formData.sustenanceComs;
            const terminationPassive = formData.terminationPassive;
            const terminationComs = formData.terminationComs;
            const controlGradFair = formData.controlGradFair;
            const controlGradGood = formData.controlGradGood;
            const controlGradComs = formData.controlGradComs;
            const recruitmentPostural = formData.recruitmentPostural;
            const contractionConcentric = formData.contractionConcentric;
            const contractionEccentric = formData.contractionEccentric;
            const contraction = formData.contraction;
            const reciprocalInhibition = formData.reciprocalInhibition;
            const massEnergy = formData.massEnergy;
            const isolatedWork = formData.isolatedWork;
            const dynamicStiffness = formData.dynamicStiffness;
            const extraneousMovement = formData.extraneousMovement;
            const singleAssesment = formData.singleAssesment;
            const registrationOptions = formData.registrationOptions;
            const registrationComs = formData.registrationComs;
            const tactileUnder = formData.tactileUnder;
            const proprioceptiveOver = formData.proprioceptiveOver;
            const vestibularOver = formData.vestibularOver;
            const auditoryOver = formData.auditoryOver;
            const visualOver = formData.visualOver;
            const gustatoryOver = formData.gustatoryOver;
            const gustatoryComs = formData.gustatoryComs;
            const sensoryProfileComs = formData.sensoryProfileComs;
            const gravitationalInsecurity = formData.gravitationalInsecurity;
            const aversiveResponse = formData.aversiveResponse;
            const posturalInsecurity = formData.posturalInsecurity;
            const tactileDefensiveness = formData.tactileDefensiveness;
            const sensoryAvoiding = formData.sensoryAvoiding;
            const stimulation = formData.stimulation;
            const distractibility = formData.distractibility;
            const hyperActivity = formData.hyperActivity;
            const coms = formData.coms;
            const formSpace = formData.formSpace;
            const visuoMotor = formData.visuoMotor;
            const tactileDiscrimination = formData.tactileDiscrimination;
            const vestibularProcessing = formData.vestibularProcessing;
            const praxis = formData.praxis;
            const coms2 = formData.coms2;
            const focalVision = formData.focalVision;
            const ambientVision = formData.ambientVision;
            const eyeMovementSystem = formData.eyeMovementSystem;
            const localization = formData.localization;
            const tracking = formData.tracking;
            const gmfm = formData.gmfm;
            const pedi = formData.pedi;
            const pediatricBalanceScale = formData.pediatricBalanceScale;
            const wotaAquaticScale = formData.wotaAquaticScale;
            const recommendationOptions = formData.recommendationOptions;
            const accessorsName = formData.accessorsName;
            const accessorsDesignation = formData.accessorsDesignation;
            // updating redux states
            actions.updateFirstName(firstName);
            actions.updateLastName(lastName);
            actions.updateAge(age);
            actions.updateFatherName(fatherName);
            actions.updateMotherName(motherName);
            actions.updateAddress(address);
            actions.updateContactNumber(contact);
            actions.updateChiefComplaint(chiefComplaint);
            actions.updateInformant(informant);
            actions.updateAssessedBy(assessedBy);
            actions.updateDiagnosis(diagnosis);
            actions.updateReferredBy(referredBy);
            actions.updatefatherAgeConception(fatherAgeConception);
            actions.updatemotherAgeConception(motherAgeConception);
            actions.updateWorkLoad(workLoad);
            actions.updateStressLevel(stresslevel);
            actions.updateChildren(children);
            actions.updatePreNatalOptions(preNatal);
            actions.updateBirthWeight(userBirthWeight);
            actions.updateHeadCircumference(userHeadCircumference);
            actions.updateReasonForNICUStay(reasonForNICUStay);
            actions.updatePresentHistory(presentHistory);
            actions.updateHandHolding(handHolding);
            actions.updateRolling(rolling);
            actions.updateCrawling(crawling);
            actions.updateSitting(sitting);
            actions.updateStanding(standing);
            actions.updateWalking(walking);
            actions.updateFineMotor(fineMotor);
            actions.updateCommunication(communications);
            actions.updateSocialBehaviour(socialBehaviour);
            actions.updateMRI(mri);
            actions.updateselectedImageMRI(selectedImageMRI);
            actions.updateclickedImageMRI(clickedImageMRI);
            actions.updateEEG(eeg);
            actions.updateselectedImageEEG(selectedImageEEG);
            actions.updateclickedImageEEG(clickedImageEEG);
            actions.updateBERA(bera);
            actions.updateselectedImageBERA(selectedImageBERA);
            actions.updateclickedImageBERA(clickedImageBERA);
            actions.updateOpthalmalogy(opthalmalogy);
            actions.updateselectedImageOPT(selectedImageOPT);
            actions.updateclickedImageOPT(clickedImageOPT);
            actions.updateXRays(xRays);
            actions.updateselectedImageXRAYS(selectedImageXRAYS);
            actions.updateclickedImageXRAYS(clickedImageXRAYS);
            actions.updateDeformitiesRight(deformitiesR);
            actions.updateDeformitiesLeft(deformitiesL);
            actions.updateContractureRight(contractureR);
            actions.updateContractureLeft(contractureL);
            actions.updateTightnessRight(tightnessR);
            actions.updateTightnessLeft(tightnessL);
            actions.updateTendoachillesRTR1(tasRTR1);
            actions.updateTendoachillesRTR2(tasRTR2);
            actions.updateTendoachillesLTR1(tasLTR1);
            actions.updateTendoachillesLTR2(tasLTR2);
            actions.updateHamstringsRTR1(hamstringsRTR1);
            actions.updateHamstringsRTR2(hamstringsRTR2);
            actions.updateHamstringsLTR1(hamstringsLTR1);
            actions.updateHamstringsLTR2(hamstringsLTR2);
            actions.updateHipAdductorsRTR1(hipAdductionRTR1);
            actions.updateHipAdductorsRTR2(hipAdductionRTR2);
            actions.updateHipAdductorsLTR1(hipAdductionLTR1);
            actions.updateHipAdductorsLTR2(hipAdductionLTR2);
            actions.updateBackExt(backExt);
            actions.updateBackFlex(backFlex);
            actions.updateBackLat(backLat);
            actions.updateNeckFlex(neckFlex);
            actions.updateNeckExt(neckExt);
            actions.updateNeckLat(neckLat);
            actions.updateHipFlex(hipFlex);
            actions.updateHipExt(hipExt);
            actions.updateHipAbd(hipAbd);
            actions.updateHipAdd(hipAdd);
            actions.updateKneeFlex(kneeFlex);
            actions.updateHipMedRot(hipMedRot);
            actions.updateHipLatRot(hipLatRot);
            actions.updateShoulderAbd(shoulderAbd);
            actions.updateShoulderFlex(shoulderFlex);
            actions.updateShoulderAdd(shoulderAdd);
            actions.updateShoulderExt(shoulderExt);
            actions.updateElbowFlex(elbowFlex);
            actions.updateForearmPronation(forearmPronation);
            actions.updateForearmSupination(forearmSupination);
            actions.updateAnkleDF(ankleDF);
            actions.updateAnklePF(anklePF);
            actions.updateAnkleInversion(ankleInversion);
            actions.updateAnkleEversion(ankleEversion);
            actions.updateWristFlex(wristFlex);
            actions.updateWristExt(wristExt);
            actions.updateUpperExtermities(upperExterimities);
            actions.updateLowerExtermities(lowerExterimities);
            actions.updateComsModifiedAshworth(asworthsComs);
            actions.updateGmfc(gmfc);
            actions.updateMiniMac(miniMac);
            actions.updateMacs(macs);
            actions.updateCfcs(cfcs);
            actions.updateBodyStructurePositive(bodyStructurePositive);
            actions.updateBodyStructureNegative(bodyStructureNegative);
            actions.updateBodyFunctionPositive(bodyFunctionPositive);
            actions.updateBodyFunctionNegative(bodyFunctionNegative);
            actions.updateActivityParticipation(activitiesParticipation);
            actions.updateActivityLimitation(activitiesLimitation);
            actions.updateEnvironmentalPersonal(environmentalPersonal);
            actions.updateEnvironmentalContextual(environmentalContextual);
            actions.updateShortTermGoals(shortTermGoals);
            actions.updateLongTermGoals(longTermGoals);
            actions.updateIntervention(intervention);
            actions.updateEquipmentsUsed(equipments);
            actions.updateSection17Coms(section17Coms);
            actions.updateAdl(adl);
            actions.updatePosture(posture);
            actions.updateSide(side);
            actions.updateGeneralPosture(generalPosture);
            actions.updateCallosities(callosities);
            actions.updateMovementStrategies(movementStrategies);
            actions.updateAnticipatoryBalanceComs(anticipatoryBalanceComs);
            actions.updateReactiveBalanceComs(reactiveBalanceComs);
            actions.updateCoordinationComs(coordinationComs);
            actions.updateInitiationComs(initiateComs);
            actions.updateSustenanceComs(sustenanceComs);
            actions.updateTerminationComs(terminationComs);
            actions.updateControlGradComs(controlGradComs);
            actions.updateCoContraction(contraction);
            actions.updateReciprocalInhibition(reciprocalInhibition);
            actions.updateMassEnergy(massEnergy);
            actions.updateIsolatedWork(isolatedWork);
            actions.updateDynamicStiffness(dynamicStiffness);
            actions.updateExtraneousMovement(extraneousMovement);
            actions.updateSection15Coms(singleAssesment);
            actions.updateRegistrationComs(registrationComs);
            actions.updateRegistrationOptions(registrationOptions);
            actions.updateGustatoryComs(gustatoryComs);
            actions.updateSensoryProfileComs(sensoryProfileComs);
            actions.updateGravitationInsecurity(gravitationalInsecurity);
            actions.updateAversiveResponse(aversiveResponse);
            actions.updateTactileDefense(tactileDefensiveness);
            actions.updatePosturalInsecurtiy(posturalInsecurity);
            actions.updateSensoryAvoiding(sensoryAvoiding);
            actions.updateStimulation(stimulation);
            actions.updateDistractibility(distractibility);
            actions.updateHyperActivity(hyperActivity);
            actions.updateComs(coms);
            actions.updateFormSpace(formSpace);
            actions.updateVisuoMotor(visuoMotor);
            actions.updateTactileDiscrimination(tactileDiscrimination);
            actions.updateVestibularProcessing(vestibularProcessing);
            actions.updatePraxis(praxis);
            actions.updateComs2(coms2);
            actions.updateFocalVision(focalVision);
            actions.updateAmbientVision(ambientVision);
            actions.updateEyeMovementSystem(eyeMovementSystem);
            actions.updateLocalization(localization);
            actions.updateTracking(tracking);
            actions.updateGMFM(gmfm);
            actions.updatePEDI(pedi);
            actions.updateBalanceScale(pediatricBalanceScale);
            actions.updateWOTA(wotaAquaticScale);
            actions.updateRecommendationOptions(recommendationOptions);
            actions.updateRecommendationOptions(recommendationOptions);
            actions.updateAssessorsName(accessorsName);
            actions.updateAssessorsDesignation(accessorsDesignation);
            if (tactileUnder) {
              actions.updateTactileUnderResponsive(true);
            } else {
              actions.updateTactileOverResponsive(true);
            }
            if (proprioceptiveOver) {
              actions.updateProprioceptiveOverResponsive(true);
            } else {
              actions.updateProprioceptiveUnderResponsive(true);
            }
            if (vestibularOver) {
              actions.updateVestibularOverResponsive(true);
            } else {
              actions.updateVestibularUnderResponsive(true);
            }
            if (auditoryOver) {
              actions.updateAuditoryOverResponsive(true);
            } else {
              actions.updateAuditoryUnderResponsive(true);
            }
            if (visualOver) {
              actions.updateVisualOverResponsive(true);
            } else {
              actions.updateVisualUnderResponsive(true);
            }
            if (gustatoryOver) {
              actions.updateGustatoryOverResponsive(true);
            } else {
              actions.updateGustatoryUnderResponsive(true);
            }
            if (staticBalanceGood) {
              actions.updateStaticBalanceGood(true);
            } else if (staticBalanceFair) {
              actions.updateStaticBalanceFair(true);
            } else {
              actions.updateStaticBalancePoor(true);
            }
            if (anticipatoryBalanceGood) {
              actions.updateAnticipatoryBalanceGood(true);
            } else if (anticipatoryBalanceFair) {
              actions.updateAnticipatoryBalanceFair(true);
            } else {
              actions.updateAnticipatoryBalancePoor(true);
            }
            if (reactiveBalanceGood) {
              actions.updateReactiveBalanceGood(true);
            } else if (reactiveBalanceFair) {
              actions.updateReactiveBalanceFair(true);
            } else {
              actions.updateReactiveBalancePoor(true);
            }
            if (coordinationGood) {
              actions.updateCoordinationGood(true);
            } else if (coordinationFair) {
              actions.updateCoordinationFair(true);
            } else {
              actions.updateCoordinationPoor(true);
            }
            if (canInitiate) {
              actions.updateCanInitiate(true);
            } else {
              actions.updateCantInitiate(true);
            }
            if (sustenanceGood) {
              actions.updateSustenanceGood(true);
            } else if (sustenanceFair) {
              actions.updateSustenanceFair(true);
            } else {
              actions.updateSustenancePoor(true);
            }
            if (terminationPassive) {
              actions.updateTerminationPassive(true);
            } else {
              actions.updateTerminationAbrupt(true);
            }
            if (controlGradGood) {
              actions.updateControlGradGood(true);
            } else if (controlGradFair) {
              actions.updateControlGradFair(true);
            } else {
              actions.updateControlGradPoor(true);
            }
            if (recruitmentPostural) {
              actions.updateRecruitmentSo(true);
            } else {
              actions.updateRecruitmentFf(true);
            }
            if (contractionConcentric) {
              actions.updateContractionConcentric(true);
            } else if (contractionEccentric) {
              actions.updateContractionEccentric(true);
            } else {
              actions.updateContractionIsometric(true);
            }
            if (broad) {
              actions.updateBroad(true);
            } else {
              actions.updateNarrow(true);
            }
            if (asymmetry) {
              actions.updateAlignment(true);
            }
            if (hypotonia) {
              actions.updateToneHypotonia(true);
            } else {
              actions.updateToneHypertonia(true);
            }
            if (sightIntact) {
              actions.updateSightIntact(true);
            } else {
              actions.updateSightNotIntact(true);
            }
            if (hearingIntact) {
              actions.updateHearingIntact(true);
            } else {
              actions.updateHearingNotIntact(true);
            }
            if (speechIntact) {
              actions.updateSpeechIntact(true);
            } else {
              actions.updateSpeechNotIntact(true);
            }
            if (carriedByParent) {
              actions.updateCarriedbyParent(true);
            } else if (walkingSticks) {
              actions.updateWalkingSticks(true);
            } else if (wheelChair) {
              actions.updateWheelChair(true);
            } else if (walkingWalker) {
              actions.updateWalkingWalker(true);
            } else if (walkingIndependently) {
              actions.updateWalkingIndependently(true);
            }
            if (ciabYes) {
              actions.updateCiabYes(true);
            } else {
              actions.updateCiabNo(true);
            }
            if (fullTerm) {
              actions.updateFullTerm(true);
            } else {
              actions.updatePreTerm(true);
            }
            if (consanguinity) {
              actions.updateConsanguinity(true);
            } else {
              actions.updateNonConsanguinity(true);
            }
            if (male) {
              actions.updateGenderMale(true);
            } else {
              actions.updateGenderFemale(true);
            }
            if (day1To7days) {
              actions.updateNICUStayOpt1(true);
            } else if (week1To4weeks) {
              actions.updateNICUStayOpt2(true);
            } else {
              actions.updateNICUStayOpt3(true);
            }
            if (supineToProneImmobile) {
              actions.updateSupineToProneImmobile(true);
            } else if (supineToProneAssistance) {
              actions.updateSupineToProneAssistance(true);
            } else {
              actions.updateSupineToProneIndependent(true);
            }
            if (supineToSitImmobile) {
              actions.updateSupineToSitImmobile(true);
            } else if (supineToSitAssistance) {
              actions.updateSupineToSitAssistance(true);
            } else {
              actions.updateSupineToSitIndependent(true);
            }
            if (sittingImmobile) {
              actions.updateSittingImmobile(true);
            } else if (sittingAssistance) {
              actions.updateSittingAssistance(true);
            } else {
              actions.updateSittingIndependent(true);
            }
            if (quadsImmobile) {
              actions.updateQuadripedImmobile(true);
            } else if (quadsAssistance) {
              actions.updateQuadripedAssistance(true);
            } else {
              actions.updateQuadripedIndependent(true);
            }
            if (standingImmobile) {
              actions.updateStandingImmobile(true);
            } else if (standingAssistance) {
              actions.updateStandingAssistance(true);
            } else {
              actions.updateStandingIndependent(true);
            }
            if (kneelingImmobile) {
              actions.updateKneelingImmobile(true);
            } else if (kneelingAssistance) {
              actions.updateKneelingAssistance(true);
            } else {
              actions.updateKneelingIndependent(true);
            }
            if (halfKneelingImmobile) {
              actions.updateHalfKneelingImmobile(true);
            } else if (halfKneelingAssistance) {
              actions.updateHalfKneelingAssistance(true);
            } else {
              actions.updateHalfKneelingIndependent(true);
            }
            if (ambulationImmobile) {
              actions.updateAmbulationImmobile(true);
            } else if (ambulationAssistance) {
              actions.updateAmbulationAssistance(true);
            } else {
              actions.updateAmbulationIndependent(true);
            }
            console.log('FORM DATA ' + JSON.stringify(formData));
          } else {
            console.error('IFFFFFFFFFFFFFFFFF  ' + selectedPatientId);
            txn.executeSql(
              'SELECT * FROM patient_data WHERE _id = ?',
              [selectedPatientId],
              (_, res) => {
                if (res.rows.length > 0) {
                  const patientData = res.rows.item(0);
                  const patientName = patientData.patient_name;
                  const address = patientData.patient_address;
                  const contact = patientData.patient_contact;
                  actions.updateFirstName(patientName);
                  actions.updateAddress(address);
                  actions.updateContactNumber(contact);
                }
              },
              (_, error) => {
                console.log('Couldnt fetch data ', error);
              },
            );
          }
        },
        (_, error) => {
          console.error('Error executing SQL query: ', error);
        },
      );
    });
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[...sections, {key: 'generate'}]}
        renderItem={renderSectionItem}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
  },
};

export default AssessmentCopy;
