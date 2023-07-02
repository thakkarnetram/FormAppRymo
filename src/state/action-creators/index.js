// section 1 Patient Details
export const updateFirstName = firstName => {
  return dispatch => {
    dispatch({
      type: 'updateFirstName',
      payload: firstName,
    });
  };
};
export const updateLastName = lastName => {
  return dispatch => {
    dispatch({
      type: 'updateLastName',
      payload: lastName,
    });
  };
};
export const updateAge = age => {
  return dispatch => {
    dispatch({
      type: 'updateAge',
      payload: age,
    });
  };
};
export const updateFatherName = fatherName => {
  return dispatch => {
    dispatch({
      type: 'updateFatherName',
      payload: fatherName,
    });
  };
};
export const updateMotherName = motherName => {
  return dispatch => {
    dispatch({
      type: 'updateMotherName',
      payload: motherName,
    });
  };
};
export const updateAddress = address => {
  return dispatch => {
    dispatch({
      type: 'updateAddress',
      payload: address,
    });
  };
};
export const updateContactNumber = contactNumber => {
  return dispatch => {
    dispatch({
      type: 'updateContactNumber',
      payload: contactNumber,
    });
  };
};
export const updateDob = dob => {
  return dispatch => {
    dispatch({
      type: 'updateDob',
      payload: dob,
    });
  };
};
export const updateEvaluationDate = evaluationDate => {
  return dispatch => {
    dispatch({
      type: 'updateEvaluationDate',
      payload: evaluationDate,
    });
  };
};
export const updateGenderMale = genderMale => {
  return dispatch => {
    dispatch({
      type: 'updateGenderMale',
      payload: genderMale,
    });
  };
};
export const updateGenderFemale = genderFemale => {
  return dispatch => {
    dispatch({
      type: 'updateGenderFemale',
      payload: genderFemale,
    });
  };
};
export const updateInformant = informant => {
  return dispatch => {
    dispatch({
      type: 'updateInformant',
      payload: informant,
    });
  };
};
export const updateAssessedBy = assessedBy => {
  return dispatch => {
    dispatch({
      type: 'updateAssessedBy',
      payload: assessedBy,
    });
  };
};
export const updateDiagnosis = diagnosis => {
  return dispatch => {
    dispatch({
      type: 'updateDiagnosis',
      payload: diagnosis,
    });
  };
};

export const updateReferredBy = referredBy => {
  return dispatch => {
    dispatch({
      type: 'updateReferredBy',
      payload: referredBy,
    });
  };
};

export const updateChiefComplaint = chiefComplaint => {
  return dispatch => {
    dispatch({
      type: 'updateChiefComplaint',
      payload: chiefComplaint,
    });
  };
};

// section 2 History

export const updatefatherAgeConception = fatherAgeConception => {
  return dispatch => {
    dispatch({
      type: 'updatefatherAgeConception',
      payload: fatherAgeConception,
    });
  };
};

export const updatemotherAgeConception = motherAgeConception => {
  return dispatch => {
    dispatch({
      type: 'updatemotherAgeConception',
      payload: motherAgeConception,
    });
  };
};

export const updateWorkLoad = workLoad => {
  return dispatch => {
    dispatch({
      type: 'updateWorkLoad',
      payload: workLoad,
    });
  };
};

export const updateStressLevel = stressLevel => {
  return dispatch => {
    dispatch({
      type: 'updateStressLevel',
      payload: stressLevel,
    });
  };
};

export const updateConsanguinity = consanguinity => {
  return dispatch => {
    dispatch({
      type: 'updateConsanguinity',
      payload: consanguinity,
    });
  };
};

export const updateNonConsanguinity = nonConsanguinity => {
  return dispatch => {
    dispatch({
      type: 'updateNonConsanguinity',
      payload: nonConsanguinity,
    });
  };
};

export const updateChildren = children => {
  return dispatch => {
    dispatch({
      type: 'updateChildren',
      payload: children,
    });
  };
};

export const updatePreNatalOptions = preNatalOptions => {
  return dispatch => {
    dispatch({
      type: 'updatePreNatalOptions',
      payload: preNatalOptions,
    });
  };
};

export const updateFullTerm = fullTerm => {
  return dispatch => {
    dispatch({
      type: 'updateFullTerm',
      payload: fullTerm,
    });
  };
};

export const updatePreTerm = preTerm => {
  return dispatch => {
    dispatch({
      type: 'updatePreTerm',
      payload: preTerm,
    });
  };
};

// Section 3 Post Natal
export const updateCiabYes = ciabYes => {
  return dispatch => {
    dispatch({
      type: 'updateCiabYes',
      payload: ciabYes,
    });
  };
};

export const updateCiabNo = ciabNo => {
  return dispatch => {
    dispatch({
      type: 'updateCiabNo',
      payload: ciabNo,
    });
  };
};

export const updateBirthWeight = birthWeight => {
  return dispatch => {
    dispatch({
      type: 'updateBirthWeight',
      payload: birthWeight,
    });
  };
};

export const updateHeadCircumference = headCircumference => {
  return dispatch => {
    dispatch({
      type: 'updateHeadCircumference',
      payload: headCircumference,
    });
  };
};

export const updateNICUStayOpt1 = nicuStayOpt1 => {
  return dispatch => {
    dispatch({
      type: 'updateNICUStayOpt1',
      payload: nicuStayOpt1,
    });
  };
};

export const updateNICUStayOpt2 = nicuStayOpt2 => {
  return dispatch => {
    dispatch({
      type: 'updateNICUStayOpt2',
      payload: nicuStayOpt2,
    });
  };
};

export const updateNICUStayOpt3 = nicuStayOpt3 => {
  return dispatch => {
    dispatch({
      type: 'updateNICUStayOpt3',
      payload: nicuStayOpt3,
    });
  };
};

export const updateReasonForNICUStay = reasonForNICUStay => {
  return dispatch => {
    dispatch({
      type: 'updateReasonForNICUStay',
      payload: reasonForNICUStay,
    });
  };
};

export const updatePresentHistory = presentHistory => {
  return dispatch => {
    dispatch({
      type: 'updatePresentHistory',
      payload: presentHistory,
    });
  };
};

// Section 4 Developmental Milestones

export const updateHandHolding = handHolding => {
  return dispatch => {
    dispatch({
      type: 'updateHandHolding',
      payload: handHolding,
    });
  };
};

export const updateRolling = rolling => {
  return dispatch => {
    dispatch({
      type: 'updateRolling',
      payload: rolling,
    });
  };
};

export const updateCrawling = crawling => {
  return dispatch => {
    dispatch({
      type: 'updateCrawling',
      payload: crawling,
    });
  };
};

export const updateSitting = sitting => {
  return dispatch => {
    dispatch({
      type: 'updateSitting',
      payload: sitting,
    });
  };
};

export const updateStanding = standing => {
  return dispatch => {
    dispatch({
      type: 'updateStanding',
      payload: standing,
    });
  };
};

export const updateWalking = walking => {
  return dispatch => {
    dispatch({
      type: 'updateWalking',
      payload: walking,
    });
  };
};

export const updateFineMotor = fineMotor => {
  return dispatch => {
    dispatch({
      type: 'updateFineMotor',
      payload: fineMotor,
    });
  };
};

export const updateCommunication = communication => {
  return dispatch => {
    dispatch({
      type: 'updateCommunication',
      payload: communication,
    });
  };
};

export const updateSocialBehaviour = socialBehaviour => {
  return dispatch => {
    dispatch({
      type: 'updateSocialBehaviour',
      payload: socialBehaviour,
    });
  };
};

// Section 5 Subjective assessment

export const updateSightIntact = sightIntact => {
  return dispatch => {
    dispatch({
      type: 'updateSightIntact',
      payload: sightIntact,
    });
  };
};

export const updateSightNotIntact = sightNotIntact => {
  return dispatch => {
    dispatch({
      type: 'updateSightNotIntact',
      payload: sightNotIntact,
    });
  };
};

export const updateHearingIntact = hearingIntact => {
  return dispatch => {
    dispatch({
      type: 'updateHearingIntact',
      payload: hearingIntact,
    });
  };
};

export const updateHearingNotIntact = hearingNotIntact => {
  return dispatch => {
    dispatch({
      type: 'updateHearingNotIntact',
      payload: hearingNotIntact,
    });
  };
};

export const updateSpeechIntact = speechIntact => {
  return dispatch => {
    dispatch({
      type: 'updateSpeechIntact',
      payload: speechIntact,
    });
  };
};
export const updateSpeechNotIntact = speechNotIntact => {
  return dispatch => {
    dispatch({
      type: 'updateSpeechNotIntact',
      payload: speechNotIntact,
    });
  };
};
export const updateCarriedbyParent = carriedbyParent => {
  return dispatch => {
    dispatch({
      type: 'updateCarriedbyParent',
      payload: carriedbyParent,
    });
  };
};
export const updateWalkingSticks = walkingSticks => {
  return dispatch => {
    dispatch({
      type: 'updateWalkingSticks',
      payload: walkingSticks,
    });
  };
};
export const updateWheelChair = wheelChair => {
  return dispatch => {
    dispatch({
      type: 'updateWheelChair',
      payload: wheelChair,
    });
  };
};
export const updateWalkingWalker = walkingWalker => {
  return dispatch => {
    dispatch({
      type: 'updateWalkingWalker',
      payload: walkingWalker,
    });
  };
};
export const updateWalkingIndependently = walkingIndependently => {
  return dispatch => {
    dispatch({
      type: 'updateWalkingIndependently',
      payload: walkingIndependently,
    });
  };
};

// Section 6

export const updateMRI = mri => {
  return dispatch => {
    dispatch({
      type: 'updateMRI',
      payload: mri,
    });
  };
};

export const updateselectedImageMRI = selectedImageMRI => {
  return dispatch => {
    dispatch({
      type: 'updateselectedImageMRI',
      payload: selectedImageMRI,
    });
  };
};

export const updateclickedImageMRI = clickedImageMRI => {
  return dispatch => {
    dispatch({
      type: 'updateclickedImageMRI',
      payload: clickedImageMRI,
    });
  };
};

export const updateEEG = eeg => {
  return dispatch => {
    dispatch({
      type: 'updateEEG',
      payload: eeg,
    });
  };
};

export const updateselectedImageEEG = selectedImageEEG => {
  return dispatch => {
    dispatch({
      type: 'updateselectedImageEEG',
      payload: selectedImageEEG,
    });
  };
};

export const updateclickedImageEEG = clickedImageEEG => {
  return dispatch => {
    dispatch({
      type: 'updateclickedImageEEG',
      payload: clickedImageEEG,
    });
  };
};

export const updateBERA = bera => {
  return dispatch => {
    dispatch({
      type: 'updateBERA',
      payload: bera,
    });
  };
};

export const updateselectedImageBERA = selectedImageBERA => {
  return dispatch => {
    dispatch({
      type: 'updateselectedImageBERA',
      payload: selectedImageBERA,
    });
  };
};

export const updateclickedImageBERA = clickedImageBERA => {
  return dispatch => {
    dispatch({
      type: 'updateclickedImageBERA',
      payload: clickedImageBERA,
    });
  };
};

export const updateOpthalmalogy = opthalmalogy => {
  return dispatch => {
    dispatch({
      type: 'updateOpthalmalogy',
      payload: opthalmalogy,
    });
  };
};

export const updateselectedImageOPT = selectedImageOPT => {
  return dispatch => {
    dispatch({
      type: 'updateselectedImageOPT',
      payload: selectedImageOPT,
    });
  };
};

export const updateclickedImageOPT = clickedImageOPT => {
  return dispatch => {
    dispatch({
      type: 'updateclickedImageOPT',
      payload: clickedImageOPT,
    });
  };
};

export const updateXRays = xRays => {
  return dispatch => {
    dispatch({
      type: 'updateXRays',
      payload: xRays,
    });
  };
};

export const updateselectedImageXRAYS = selectedImageXRAYS => {
  return dispatch => {
    dispatch({
      type: 'updateselectedImageXRAYS',
      payload: selectedImageXRAYS,
    });
  };
};

export const updateclickedImageXRAYS = clickedImageXRAYS => {
  return dispatch => {
    dispatch({
      type: 'updateclickedImageXRAYS',
      payload: clickedImageXRAYS,
    });
  };
};

// Section 7
export const updateToneHypotonia = toneHypotonia => {
  return dispatch => {
    dispatch({
      type: 'updateToneHypotonia',
      payload: toneHypotonia,
    });
  };
};

export const updateToneHypertonia = toneHypertonia => {
  return dispatch => {
    dispatch({
      type: 'updateToneHypertonia',
      payload: toneHypertonia,
    });
  };
};

export const updateDeformitiesRight = deformitiesRight => {
  return dispatch => {
    dispatch({
      type: 'updateDeformitiesRight',
      payload: deformitiesRight,
    });
  };
};

export const updateDeformitiesLeft = deformitiesLeft => {
  return dispatch => {
    dispatch({
      type: 'updateDeformitiesLeft',
      payload: deformitiesLeft,
    });
  };
};

export const updateContractureRight = contractureRight => {
  return dispatch => {
    dispatch({
      type: 'updateContractureRight',
      payload: contractureRight,
    });
  };
};

export const updateContractureLeft = contractureLeft => {
  return dispatch => {
    dispatch({
      type: 'updateContractureLeft',
      payload: contractureLeft,
    });
  };
};

export const updateTightnessRight = tightnessRight => {
  return dispatch => {
    dispatch({
      type: 'updateTightnessRight',
      payload: tightnessRight,
    });
  };
};

export const updateTightnessLeft = tightnessLeft => {
  return dispatch => {
    dispatch({
      type: 'updateTightnessLeft',
      payload: tightnessLeft,
    });
  };
};

// Section 8

export const updateTendoachillesRTR1 = tendoachillesRTR1 => {
  return dispatch => {
    dispatch({
      type: 'updateTendoachillesRTR1',
      payload: tendoachillesRTR1,
    });
  };
};

export const updateTendoachillesRTR2 = tendoachillesRTR2 => {
  return dispatch => {
    dispatch({
      type: 'updateTendoachillesRTR2',
      payload: tendoachillesRTR2,
    });
  };
};

export const updateTendoachillesLTR1 = tendoachillesLTR1 => {
  return dispatch => {
    dispatch({
      type: 'updateTendoachillesLTR1',
      payload: tendoachillesLTR1,
    });
  };
};

export const updateTendoachillesLTR2 = tendoachillesLTR2 => {
  return dispatch => {
    dispatch({
      type: 'updateTendoachillesLTR2',
      payload: tendoachillesLTR2,
    });
  };
};

export const updateHamstringsRTR1 = hamstringsRTR1 => {
  return dispatch => {
    dispatch({
      type: 'updateHamstringsRTR1',
      payload: hamstringsRTR1,
    });
  };
};

export const updateHamstringsRTR2 = hamstringsRTR2 => {
  return dispatch => {
    dispatch({
      type: 'updateHamstringsRTR2',
      payload: hamstringsRTR2,
    });
  };
};

export const updateHamstringsLTR1 = hamstringsLTR1 => {
  return dispatch => {
    dispatch({
      type: 'updateHamstringsLTR1',
      payload: hamstringsLTR1,
    });
  };
};

export const updateHamstringsLTR2 = hamstringsLTR2 => {
  return dispatch => {
    dispatch({
      type: 'updateHamstringsLTR2',
      payload: hamstringsLTR2,
    });
  };
};

export const updateHipAdductorsRTR1 = hipAdductorsRTR1 => {
  return dispatch => {
    dispatch({
      type: 'updateHipAdductorsRTR1',
      payload: hipAdductorsRTR1,
    });
  };
};

export const updateHipAdductorsRTR2 = hipAdductorsRTR2 => {
  return dispatch => {
    dispatch({
      type: 'updateHipAdductorsRTR2',
      payload: hipAdductorsRTR2,
    });
  };
};

export const updateHipAdductorsLTR1 = hipAdductorsLTR1 => {
  return dispatch => {
    dispatch({
      type: 'updateHipAdductorsLTR1',
      payload: hipAdductorsLTR1,
    });
  };
};

export const updateHipAdductorsLTR2 = hipAdductorsLTR2 => {
  return dispatch => {
    dispatch({
      type: 'updateHipAdductorsLTR2',
      payload: hipAdductorsLTR2,
    });
  };
};

// Section 9
export const updateBackExt = backExt => {
  return dispatch => {
    dispatch({
      type: 'updateBackExt',
      payload: backExt,
    });
  };
};

export const updateBackFlex = backFlex => {
  return dispatch => {
    dispatch({
      type: 'updateBackFlex',
      payload: backFlex,
    });
  };
};

export const updateBackLat = backLat => {
  return dispatch => {
    dispatch({
      type: 'updateBackLat',
      payload: backLat,
    });
  };
};

export const updateNeckFlex = neckFlex => {
  return dispatch => {
    dispatch({
      type: 'updateNeckFlex',
      payload: neckFlex,
    });
  };
};

export const updateNeckExt = neckExt => {
  return dispatch => {
    dispatch({
      type: 'updateNeckExt',
      payload: neckExt,
    });
  };
};

export const updateNeckLat = neckLat => {
  return dispatch => {
    dispatch({
      type: 'updateNeckLat',
      payload: neckLat,
    });
  };
};

export const updateHipFlex = hipFlex => {
  return dispatch => {
    dispatch({
      type: 'updateHipFlex',
      payload: hipFlex,
    });
  };
};

export const updateHipExt = hipExt => {
  return dispatch => {
    dispatch({
      type: 'updateHipExt',
      payload: hipExt,
    });
  };
};

export const updateHipAbd = hipAbd => {
  return dispatch => {
    dispatch({
      type: 'updateHipAbd',
      payload: hipAbd,
    });
  };
};

export const updateHipAdd = hipAdd => {
  return dispatch => {
    dispatch({
      type: 'updateHipAdd',
      payload: hipAdd,
    });
  };
};

export const updateKneeFlex = kneeFlex => {
  return dispatch => {
    dispatch({
      type: 'updateKneeFlex',
      payload: kneeFlex,
    });
  };
};

export const updateHipMedRot = hipMedRot => {
  return dispatch => {
    dispatch({
      type: 'updateHipMedRot',
      payload: hipMedRot,
    });
  };
};

export const updateHipLatRot = hipLatRot => {
  return dispatch => {
    dispatch({
      type: 'updateHipLatRot',
      payload: hipLatRot,
    });
  };
};

export const updateShoulderAbd = shoulderAbd => {
  return dispatch => {
    dispatch({
      type: 'updateShoulderAbd',
      payload: shoulderAbd,
    });
  };
};

export const updateShoulderFlex = shoulderFlex => {
  return dispatch => {
    dispatch({
      type: 'updateShoulderFlex',
      payload: shoulderFlex,
    });
  };
};

export const updateShoulderAdd = shoulderAdd => {
  return dispatch => {
    dispatch({
      type: 'updateShoulderAdd',
      payload: shoulderAdd,
    });
  };
};

export const updateShoulderExt = shoulderExt => {
  return dispatch => {
    dispatch({
      type: 'updateShoulderExt',
      payload: shoulderExt,
    });
  };
};

export const updateElbowFlex = elbowFlex => {
  return dispatch => {
    dispatch({
      type: 'updateElbowFlex',
      payload: elbowFlex,
    });
  };
};

export const updateForearmPronation = forearmPronation => {
  return dispatch => {
    dispatch({
      type: 'updateForearmPronation',
      payload: forearmPronation,
    });
  };
};

export const updateForearmSupination = forearmSupination => {
  return dispatch => {
    dispatch({
      type: 'updateForearmSupination',
      payload: forearmSupination,
    });
  };
};

export const updateAnkleDF = ankleDF => {
  return dispatch => {
    dispatch({
      type: 'updateAnkleDF',
      payload: ankleDF,
    });
  };
};

export const updateAnklePF = anklePF => {
  return dispatch => {
    dispatch({
      type: 'updateAnklePF',
      payload: anklePF,
    });
  };
};

export const updateAnkleInversion = ankleInversion => {
  return dispatch => {
    dispatch({
      type: 'updateAnkleInversion',
      payload: ankleInversion,
    });
  };
};

export const updateAnkleEversion = ankleEversion => {
  return dispatch => {
    dispatch({
      type: 'updateAnkleEversion',
      payload: ankleEversion,
    });
  };
};

export const updateWristFlex = wristFlex => {
  return dispatch => {
    dispatch({
      type: 'updateWristFlex',
      payload: wristFlex,
    });
  };
};

export const updateWristExt = wristExt => {
  return dispatch => {
    dispatch({
      type: 'updateWristExt',
      payload: wristExt,
    });
  };
};

// Section 10
export const updateUpperExtermities = upperExtermities => {
  return dispatch => {
    dispatch({
      type: 'updateUpperExtermities',
      payload: upperExtermities,
    });
  };
};

export const updateLowerExtermities = lowerExtermities => {
  return dispatch => {
    dispatch({
      type: 'updateLowerExtermities',
      payload: lowerExtermities,
    });
  };
};

export const updateComsModifiedAshworth = comsModifiedAshworth => {
  return dispatch => {
    dispatch({
      type: 'updateComsModifiedAshworth',
      payload: comsModifiedAshworth,
    });
  };
};

// Section 11
export const updateSupineToProneImmobile = supineToProneImmobile => {
  return dispatch => {
    dispatch({
      type: 'updateSupineToProneImmobile',
      payload: supineToProneImmobile,
    });
  };
};

export const updateSupineToProneAssistance = supineToProneAssistance => {
  return dispatch => {
    dispatch({
      type: 'updateSupineToProneAssistance',
      payload: supineToProneAssistance,
    });
  };
};

export const updateSupineToProneIndependent = supineToProneIndependent => {
  return dispatch => {
    dispatch({
      type: 'updateSupineToProneIndependent',
      payload: supineToProneIndependent,
    });
  };
};

export const updateSupineToSitImmobile = supineToSitImmobile => {
  return dispatch => {
    dispatch({
      type: 'updateSupineToSitImmobile',
      payload: supineToSitImmobile,
    });
  };
};

export const updateSupineToSitAssistance = supineToSitAssistance => {
  return dispatch => {
    dispatch({
      type: 'updateSupineToSitAssistance',
      payload: supineToSitAssistance,
    });
  };
};

export const updateSupineToSitIndependent = supineToSitIndependent => {
  return dispatch => {
    dispatch({
      type: 'updateSupineToSitIndependent',
      payload: supineToSitIndependent,
    });
  };
};

export const updateSittingImmobile = sittingImmobile => {
  return dispatch => {
    dispatch({
      type: 'updateSittingImmobile',
      payload: sittingImmobile,
    });
  };
};

export const updateSittingAssistance = sittingAssistance => {
  return dispatch => {
    dispatch({
      type: 'updateSittingAssistance',
      payload: sittingAssistance,
    });
  };
};

export const updateSittingIndependent = sittingIndependent => {
  return dispatch => {
    dispatch({
      type: 'updateSittingIndependent',
      payload: sittingIndependent,
    });
  };
};

export const updateQuadripedImmobile = quadripedImmobile => {
  return dispatch => {
    dispatch({
      type: 'updateQuadripedImmobile',
      payload: quadripedImmobile,
    });
  };
};

export const updateQuadripedAssistance = quadripedAssistance => {
  return dispatch => {
    dispatch({
      type: 'updateQuadripedAssistance',
      payload: quadripedAssistance,
    });
  };
};

export const updateQuadripedIndependent = quadripedIndependent => {
  return dispatch => {
    dispatch({
      type: 'updateQuadripedIndependent',
      payload: quadripedIndependent,
    });
  };
};

export const updateKneelingImmobile = kneelingImmobile => {
  return dispatch => {
    dispatch({
      type: 'updateKneelingImmobile',
      payload: kneelingImmobile,
    });
  };
};

export const updateKneelingAssistance = kneelingAssistance => {
  return dispatch => {
    dispatch({
      type: 'updateKneelingAssistance',
      payload: kneelingAssistance,
    });
  };
};

export const updateKneelingIndependent = kneelingIndependent => {
  return dispatch => {
    dispatch({
      type: 'updateKneelingIndependent',
      payload: kneelingIndependent,
    });
  };
};

export const updateHalfKneelingImmobile = halfKneelingImmobile => {
  return dispatch => {
    dispatch({
      type: 'updateHalfKneelingImmobile',
      payload: halfKneelingImmobile,
    });
  };
};

export const updateHalfKneelingAssistance = halfKneelingAssistance => {
  return dispatch => {
    dispatch({
      type: 'updateHalfKneelingAssistance',
      payload: halfKneelingAssistance,
    });
  };
};

export const updateHalfKneelingIndependent = halfKneelingIndependent => {
  return dispatch => {
    dispatch({
      type: 'updateHalfKneelingIndependent',
      payload: halfKneelingIndependent,
    });
  };
};

export const updateStandingImmobile = standingImmobile => {
  return dispatch => {
    dispatch({
      type: 'updateStandingImmobile',
      payload: standingImmobile,
    });
  };
};

export const updateStandingAssistance = standingAssistance => {
  return dispatch => {
    dispatch({
      type: 'updateStandingAssistance',
      payload: standingAssistance,
    });
  };
};

export const updateStandingIndependent = standingIndependent => {
  return dispatch => {
    dispatch({
      type: 'updateStandingIndependent',
      payload: standingIndependent,
    });
  };
};

export const updateAmbulationImmobile = ambulationImmobile => {
  return dispatch => {
    dispatch({
      type: 'updateAmbulationImmobile',
      payload: ambulationImmobile,
    });
  };
};

export const updateAmbulationAssistance = ambulationAssistance => {
  return dispatch => {
    dispatch({
      type: 'updateAmbulationAssistance',
      payload: ambulationAssistance,
    });
  };
};

export const updateAmbulationIndependent = ambulationIndependent => {
  return dispatch => {
    dispatch({
      type: 'updateAmbulationIndependent',
      payload: ambulationIndependent,
    });
  };
};

export const updateGmfc = gmfc => {
  return dispatch => {
    dispatch({
      type: 'updateGmfc',
      payload: gmfc,
    });
  };
};

export const updateMacs = macs => {
  return dispatch => {
    dispatch({
      type: 'updateMacs',
      payload: macs,
    });
  };
};

export const updateMiniMac = miniMacs => {
  return dispatch => {
    dispatch({
      type: 'updateMiniMac',
      payload: miniMacs,
    });
  };
};

export const updateCfcs = cfcs => {
  return dispatch => {
    dispatch({
      type: 'updateCfcs',
      payload: cfcs,
    });
  };
};

// section 12
export const updateBodyStructurePositive = bodyStructurePositive => {
  return dispatch => {
    dispatch({
      type: 'updateBodyStructurePositive',
      payload: bodyStructurePositive,
    });
  };
};

export const updateBodyStructureNegative = bodyStructureNegative => {
  return dispatch => {
    dispatch({
      type: 'updateBodyStructureNegative',
      payload: bodyStructureNegative,
    });
  };
};

export const updateBodyFunctionPositive = bodyFunctionPositive => {
  return dispatch => {
    dispatch({
      type: 'updateBodyFunctionPositive',
      payload: bodyFunctionPositive,
    });
  };
};

export const updateBodyFunctionNegative = bodyFunctionNegative => {
  return dispatch => {
    dispatch({
      type: 'updateBodyFunctionNegative',
      payload: bodyFunctionNegative,
    });
  };
};

export const updateActivityParticipation = activityParticipation => {
  return dispatch => {
    dispatch({
      type: 'updateActivityParticipation',
      payload: activityParticipation,
    });
  };
};

export const updateActivityLimitation = activityLimitation => {
  return dispatch => {
    dispatch({
      type: 'updateActivityLimitation',
      payload: activityLimitation,
    });
  };
};

export const updateEnvironmentalPersonal = environmentalPersonal => {
  return dispatch => {
    dispatch({
      type: 'updateEnvironmentalPersonal',
      payload: environmentalPersonal,
    });
  };
};

export const updateEnvironmentalContextual = environmentalContextual => {
  return dispatch => {
    dispatch({
      type: 'updateEnvironmentalContextual',
      payload: environmentalContextual,
    });
  };
};

export const updateShortTermGoals = shortTermGoals => {
  return dispatch => {
    dispatch({
      type: 'updateShortTermGoals',
      payload: shortTermGoals,
    });
  };
};

export const updateLongTermGoals = longTermGoals => {
  return dispatch => {
    dispatch({
      type: 'updateLongTermGoals',
      payload: longTermGoals,
    });
  };
};

export const updateIntervention = intervention => {
  return dispatch => {
    dispatch({
      type: 'updateIntervention',
      payload: intervention,
    });
  };
};

export const updateEquipmentsUsed = equipmentsUsed => {
  return dispatch => {
    dispatch({
      type: 'updateEquipmentsUsed',
      payload: equipmentsUsed,
    });
  };
};

export const updateSection17Coms = section17Coms => {
  return dispatch => {
    dispatch({
      type: 'updateSection17Coms',
      payload: section17Coms,
    });
  };
};

// Adl
export const updateAdl = adl => {
  return dispatch => {
    dispatch({
      type: 'updateAdl',
      payload: adl,
    });
  };
};

// Section 14  - Multi System Assessment
export const updatePosture = posture => {
  return dispatch => {
    dispatch({
      type: 'updatePosture',
      payload: posture,
    });
  };
};

export const updateAlignment = alignment => {
  return dispatch => {
    dispatch({
      type: 'updateAlignment',
      payload: alignment,
    });
  };
};

export const updateSide = side => {
  return dispatch => {
    dispatch({
      type: 'updateSide',
      payload: side,
    });
  };
};

export const updateBroad = broad => {
  return dispatch => {
    dispatch({
      type: 'updateBroad',
      payload: broad,
    });
  };
};

export const updateNarrow = narrow => {
  return dispatch => {
    dispatch({
      type: 'updateNarrow',
      payload: narrow,
    });
  };
};

export const updateGeneralPosture = generalPosture => {
  return dispatch => {
    dispatch({
      type: 'updateGeneralPosture',
      payload: generalPosture,
    });
  };
};

export const updateCallosities = callosities => {
  return dispatch => {
    dispatch({
      type: 'updateCallosities',
      payload: callosities,
    });
  };
};

export const updateMovementStrategies = movementStrategies => {
  return dispatch => {
    dispatch({
      type: 'updateMovementStrategies',
      payload: movementStrategies,
    });
  };
};

export const updateStaticBalanceGood = staticBalanceGood => {
  return dispatch => {
    dispatch({
      type: 'updateStaticBalanceGood',
      payload: staticBalanceGood,
    });
  };
};

export const updateStaticBalanceFair = staticBalanceFair => {
  return dispatch => {
    dispatch({
      type: 'updateStaticBalanceFair',
      payload: staticBalanceFair,
    });
  };
};

export const updateStaticBalancePoor = staticBalancePoor => {
  return dispatch => {
    dispatch({
      type: 'updateStaticBalancePoor',
      payload: staticBalancePoor,
    });
  };
};

export const updateAnticipatoryBalanceGood = anticipatoryBalanceGood => {
  return dispatch => {
    dispatch({
      type: 'updateAnticipatoryBalanceGood',
      payload: anticipatoryBalanceGood,
    });
  };
};

export const updateAnticipatoryBalanceFair = anticipatoryBalanceFair => {
  return dispatch => {
    dispatch({
      type: 'updateAnticipatoryBalanceFair',
      payload: anticipatoryBalanceFair,
    });
  };
};

export const updateAnticipatoryBalancePoor = anticipatoryBalancePoor => {
  return dispatch => {
    dispatch({
      type: 'updateAnticipatoryBalancePoor',
      payload: anticipatoryBalancePoor,
    });
  };
};

export const updateAnticipatoryBalanceComs = anticipatoryBalanceComs => {
  return dispatch => {
    dispatch({
      type: 'updateAnticipatoryBalanceComs',
      payload: anticipatoryBalanceComs,
    });
  };
};

export const updateReactiveBalanceGood = reactiveBalanceGood => {
  return dispatch => {
    dispatch({
      type: 'updateReactiveBalanceGood',
      payload: reactiveBalanceGood,
    });
  };
};

export const updateReactiveBalanceFair = reactiveBalanceFair => {
  return dispatch => {
    dispatch({
      type: 'updateReactiveBalanceFair',
      payload: reactiveBalanceFair,
    });
  };
};

export const updateReactiveBalancePoor = reactiveBalancePoor => {
  return dispatch => {
    dispatch({
      type: 'updateReactiveBalancePoor',
      payload: reactiveBalancePoor,
    });
  };
};

export const updateReactiveBalanceComs = reactiveBalanceComs => {
  return dispatch => {
    dispatch({
      type: 'updateReactiveBalanceComs',
      payload: reactiveBalanceComs,
    });
  };
};

export const updateCoordinationGood = coordinationGood => {
  return dispatch => {
    dispatch({
      type: 'updateCoordinationGood',
      payload: coordinationGood,
    });
  };
};

export const updateCoordinationFair = coordinationFair => {
  return dispatch => {
    dispatch({
      type: 'updateCoordinationFair',
      payload: coordinationFair,
    });
  };
};

export const updateCoordinationPoor = coordinationPoor => {
  return dispatch => {
    dispatch({
      type: 'updateCoordinationPoor',
      payload: coordinationPoor,
    });
  };
};

export const updateCoordinationComs = coordinationComs => {
  return dispatch => {
    dispatch({
      type: 'updateCoordinationComs',
      payload: coordinationComs,
    });
  };
};

// Section 15
export const updateCanInitiate = canInitiate => {
  return dispatch => {
    dispatch({
      type: 'updateCanInitiate',
      payload: canInitiate,
    });
  };
};

export const updateCantInitiate = cantInitiate => {
  return dispatch => {
    dispatch({
      type: 'updateCantInitiate',
      payload: cantInitiate,
    });
  };
};

export const updateInitiationComs = initiationComs => {
  return dispatch => {
    dispatch({
      type: 'updateInitiationComs',
      payload: initiationComs,
    });
  };
};

export const updateSustenancePoor = sustenancePoor => {
  return dispatch => {
    dispatch({
      type: 'updateSustenancePoor',
      payload: sustenancePoor,
    });
  };
};

export const updateSustenanceGood = sustenanceGood => {
  return dispatch => {
    dispatch({
      type: 'updateSustenanceGood',
      payload: sustenanceGood,
    });
  };
};

export const updateSustenanceFair = sustenanceFair => {
  return dispatch => {
    dispatch({
      type: 'updateSustenanceFair',
      payload: sustenanceFair,
    });
  };
};

export const updateSustenanceComs = sustenanceComs => {
  return dispatch => {
    dispatch({
      type: 'updateSustenanceComs',
      payload: sustenanceComs,
    });
  };
};

export const updateTerminationPassive = terminationPassive => {
  return dispatch => {
    dispatch({
      type: 'updateTerminationPassive',
      payload: terminationPassive,
    });
  };
};

export const updateTerminationAbrupt = terminationAbrupt => {
  return dispatch => {
    dispatch({
      type: 'updateTerminationAbrupt',
      payload: terminationAbrupt,
    });
  };
};

export const updateTerminationComs = terminationComs => {
  return dispatch => {
    dispatch({
      type: 'updateTerminationComs',
      payload: terminationComs,
    });
  };
};

export const updateControlGradPoor = controlGradPoor => {
  return dispatch => {
    dispatch({
      type: 'updateControlGradPoor',
      payload: controlGradPoor,
    });
  };
};

export const updateControlGradFair = controlGradFair => {
  return dispatch => {
    dispatch({
      type: 'updateControlGradFair',
      payload: controlGradFair,
    });
  };
};

export const updateControlGradGood = controlGradGood => {
  return dispatch => {
    dispatch({
      type: 'updateControlGradGood',
      payload: controlGradGood,
    });
  };
};

export const updateControlGradComs = controlGradComs => {
  return dispatch => {
    dispatch({
      type: 'updateControlGradComs',
      payload: controlGradComs,
    });
  };
};

export const updateRecruitmentSo = recruitmentSo => {
  return dispatch => {
    dispatch({
      type: 'updateRecruitmentSo',
      payload: recruitmentSo,
    });
  };
};

export const updateRecruitmentFf = recruitmentFf => {
  return dispatch => {
    dispatch({
      type: 'updateRecruitmentFf',
      payload: recruitmentFf,
    });
  };
};

export const updateContractionConcentric = contractionConcentric => {
  return dispatch => {
    dispatch({
      type: 'updateContractionConcentric',
      payload: contractionConcentric,
    });
  };
};

export const updateContractionIsometric = contractionIsometric => {
  return dispatch => {
    dispatch({
      type: 'updateContractionIsometric',
      payload: contractionIsometric,
    });
  };
};

export const updateContractionEccentric = contractionEccentric => {
  return dispatch => {
    dispatch({
      type: 'updateContractionEccentric',
      payload: contractionEccentric,
    });
  };
};

export const updateCoContraction = coContraction => {
  return dispatch => {
    dispatch({
      type: 'updateCoContraction',
      payload: coContraction,
    });
  };
};

export const updateReciprocalInhibition = reciprocalInhibition => {
  return dispatch => {
    dispatch({
      type: 'updateReciprocalInhibition',
      payload: reciprocalInhibition,
    });
  };
};

export const updateMassEnergy = massEnergy => {
  return dispatch => {
    dispatch({
      type: 'updateMassEnergy',
      payload: massEnergy,
    });
  };
};

export const updateIsolatedWork = isolatedWork => {
  return dispatch => {
    dispatch({
      type: 'updateIsolatedWork',
      payload: isolatedWork,
    });
  };
};

export const updateDynamicStiffness = dynamicStiffness => {
  return dispatch => {
    dispatch({
      type: 'updateDynamicStiffness',
      payload: dynamicStiffness,
    });
  };
};

export const updateExtraneousMovement = extraneousMovement => {
  return dispatch => {
    dispatch({
      type: 'updateExtraneousMovement',
      payload: extraneousMovement,
    });
  };
};

export const updateSection15Coms = section15Coms => {
  return dispatch => {
    dispatch({
      type: 'updateSection15Coms',
      payload: section15Coms,
    });
  };
};

// Section 16

export const updateRegistrationOptions = registrationOptions => {
  return dispatch => {
    dispatch({
      type: 'updateRegistrationOptions',
      payload: registrationOptions,
    });
  };
};

export const updateRegistrationComs = registrationComs => {
  return dispatch => {
    dispatch({
      type: 'updateRegistrationComs',
      payload: registrationComs,
    });
  };
};

export const updateTactileUnderResponsive = tactileUnderResponsive => {
  return dispatch => {
    dispatch({
      type: 'updateTactileUnderResponsive',
      payload: tactileUnderResponsive,
    });
  };
};

export const updateTactileOverResponsive = tactileOverResponsive => {
  return dispatch => {
    dispatch({
      type: 'updateTactileOverResponsive',
      payload: tactileOverResponsive,
    });
  };
};

export const updateProprioceptiveUnderResponsive =
  proprioceptiveUnderResponsive => {
    return dispatch => {
      dispatch({
        type: 'updateProprioceptiveUnderResponsive',
        payload: proprioceptiveUnderResponsive,
      });
    };
  };

export const updateProprioceptiveOverResponsive =
  proprioceptiveOverResponsive => {
    return dispatch => {
      dispatch({
        type: 'updateProprioceptiveOverResponsive',
        payload: proprioceptiveOverResponsive,
      });
    };
  };

export const updateVestibularUnderResponsive = vestibularUnderResponsive => {
  return dispatch => {
    dispatch({
      type: 'updateVestibularUnderResponsive',
      payload: vestibularUnderResponsive,
    });
  };
};

export const updateVestibularOverResponsive = vestibularOverResponsive => {
  return dispatch => {
    dispatch({
      type: 'updateVestibularOverResponsive',
      payload: vestibularOverResponsive,
    });
  };
};

export const updateAuditoryUnderResponsive = auditoryUnderResponsive => {
  return dispatch => {
    dispatch({
      type: 'updateAuditoryUnderResponsive',
      payload: auditoryUnderResponsive,
    });
  };
};

export const updateAuditoryOverResponsive = auditoryOverResponsive => {
  return dispatch => {
    dispatch({
      type: 'updateAuditoryOverResponsive',
      payload: auditoryOverResponsive,
    });
  };
};

export const updateVisualUnderResponsive = visualUnderResponsive => {
  return dispatch => {
    dispatch({
      type: 'updateVisualUnderResponsive',
      payload: visualUnderResponsive,
    });
  };
};

export const updateVisualOverResponsive = visualOverResponsive => {
  return dispatch => {
    dispatch({
      type: 'updateVisualOverResponsive',
      payload: visualOverResponsive,
    });
  };
};

export const updateGustatoryUnderResponsive = gustatoryUnderResponsive => {
  return dispatch => {
    dispatch({
      type: 'updateGustatoryUnderResponsive',
      payload: gustatoryUnderResponsive,
    });
  };
};

export const updateGustatoryOverResponsive = gustatoryOverResponsive => {
  return dispatch => {
    dispatch({
      type: 'updateGustatoryOverResponsive',
      payload: gustatoryOverResponsive,
    });
  };
};

export const updateGustatoryComs = gustatoryComs => {
  return dispatch => {
    dispatch({
      type: 'updateGustatoryComs',
      payload: gustatoryComs,
    });
  };
};

export const updateSensoryProfileComs = sensoryProfileComs => {
  return dispatch => {
    dispatch({
      type: 'updateSensoryProfileComs',
      payload: sensoryProfileComs,
    });
  };
};

// Section 17
export const updateGravitationInsecurity = gravitationInsecurity => {
  return dispatch => {
    dispatch({
      type: 'updateGravitationInsecurity',
      payload: gravitationInsecurity,
    });
  };
};

export const updateAversiveResponse = aversiveResponse => {
  return dispatch => {
    dispatch({
      type: 'updateAversiveResponse',
      payload: aversiveResponse,
    });
  };
};

export const updatePosturalInsecurtiy = posturalInsecurtiy => {
  return dispatch => {
    dispatch({
      type: 'updatePosturalInsecurtiy',
      payload: posturalInsecurtiy,
    });
  };
};

export const updateTactileDefense = tactileDefense => {
  return dispatch => {
    dispatch({
      type: 'updateTactileDefense',
      payload: tactileDefense,
    });
  };
};

export const updateSensoryAvoiding = sensoryAvoiding => {
  return dispatch => {
    dispatch({
      type: 'updateSensoryAvoiding',
      payload: sensoryAvoiding,
    });
  };
};

export const updateStimulation = stimulation => {
  return dispatch => {
    dispatch({
      type: 'updateStimulation',
      payload: stimulation,
    });
  };
};

export const updateDistractibility = distractibility => {
  return dispatch => {
    dispatch({
      type: 'updateDistractibility',
      payload: distractibility,
    });
  };
};

export const updateHyperActivity = hyperActivity => {
  return dispatch => {
    dispatch({
      type: 'updateHyperActivity',
      payload: hyperActivity,
    });
  };
};

export const updateComs = coms => {
  return dispatch => {
    dispatch({
      type: 'updateComs',
      payload: coms,
    });
  };
};

// Sensory Processing
export const updateFormSpace = formSpace => {
  return dispatch => {
    dispatch({
      type: 'updateFormSpace',
      payload: formSpace,
    });
  };
};

export const updateVisuoMotor = visuoMotor => {
  return dispatch => {
    dispatch({
      type: 'updateVisuoMotor',
      payload: visuoMotor,
    });
  };
};

export const updateTactileDiscrimination = tactileDiscrimination => {
  return dispatch => {
    dispatch({
      type: 'updateTactileDiscrimination',
      payload: tactileDiscrimination,
    });
  };
};

export const updatePraxis = praxis => {
  return dispatch => {
    dispatch({
      type: 'updatePraxis',
      payload: praxis,
    });
  };
};

export const updateVestibularProcessing = vestibularProcessing => {
  return dispatch => {
    dispatch({
      type: 'updateVestibularProcessing',
      payload: vestibularProcessing,
    });
  };
};

export const updateComs2 = coms2 => {
  return dispatch => {
    dispatch({
      type: 'updateComs2',
      payload: coms2,
    });
  };
};

// Visual System
export const updateFocalVision = focalVision => {
  return dispatch => {
    dispatch({
      type: 'updateFocalVision',
      payload: focalVision,
    });
  };
};

export const updateAmbientVision = ambientVision => {
  return dispatch => {
    dispatch({
      type: 'updateAmbientVision',
      payload: ambientVision,
    });
  };
};

export const updateEyeMovementSystem = eyeMovementSystem => {
  return dispatch => {
    dispatch({
      type: 'updateEyeMovementSystem',
      payload: eyeMovementSystem,
    });
  };
};

export const updateLocalization = localization => {
  return dispatch => {
    dispatch({
      type: 'updateLocalization',
      payload: localization,
    });
  };
};

export const updateTracking = tracking => {
  return dispatch => {
    dispatch({
      type: 'updateTracking',
      payload: tracking,
    });
  };
};

// other Scales
export const updateGMFM = GMFM => {
  return dispatch => {
    dispatch({
      type: 'updateGMFM',
      payload: GMFM,
    });
  };
};

export const updatePEDI = PEDI => {
  return dispatch => {
    dispatch({
      type: 'updatePEDI',
      payload: PEDI,
    });
  };
};

export const updateBalanceScale = balanceScale => {
  return dispatch => {
    dispatch({
      type: 'updateBalanceScale',
      payload: balanceScale,
    });
  };
};

export const updateWOTA = WOTA => {
  return dispatch => {
    dispatch({
      type: 'updateWOTA',
      payload: WOTA,
    });
  };
};

export const updateRecommendationOptions = recommendationOptions => {
  return dispatch => {
    dispatch({
      type: 'updateRecommendationOptions',
      payload: recommendationOptions,
    });
  };
};

export const updateAssessorsName = assessorsName => {
  return dispatch => {
    dispatch({
      type: 'updateAssessorsName',
      payload: assessorsName,
    });
  };
};

export const updateAssessorsDesignation = assessorsDesignation => {
  return dispatch => {
    dispatch({
      type: 'updateAssessorsDesignation',
      payload: assessorsDesignation,
    });
  };
};

// patient action - creators
export const updatePatientList = patientList => {
  return dispatch => {
    dispatch({
      type: 'updatePatientList',
      payload: patientList,
    });
  };
};

export const updatePatientName = patientName => {
  return dispatch => {
    dispatch({
      type: 'updatePatientName',
      payload: patientName,
    });
  };
};
