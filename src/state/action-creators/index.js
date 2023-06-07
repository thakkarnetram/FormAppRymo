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

export const updateMiniMac = miniMac => {
  return dispatch => {
    dispatch({
      type: 'updateMiniMac',
      payload: miniMac,
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
