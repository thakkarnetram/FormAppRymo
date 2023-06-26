const initialState = {
  gravitationInsecurity: '',
  aversiveResponse: '',
  posturalInsecurtiy: '',
  tactileDefense: '',
  sensoryAvoiding: '',
  stimulation: '',
  distractibility: '',
  hyperActivity: '',
  coms: '',
  formSpace: '',
  visuoMotor: '',
  tactileDiscrimination: '',
  vestibularProcessing: '',
  praxis: '',
  coms2: '',
  focalVision: '',
  ambientVision: '',
  eyeMovementSystem: '',
  localization: '',
  tracking: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateGravitationInsecurity':
      return {...state, gravitationInsecurity: action.payload};
    case 'updateAversiveResponse':
      return {...state, aversiveResponse: action.payload};
    case 'updatePosturalInsecurtiy':
      return {...state, posturalInsecurtiy: action.payload};
    case 'updateTactileDefense':
      return {...state, tactileDefense: action.payload};
    case 'updateSensoryAvoiding':
      return {...state, sensoryAvoiding: action.payload};
    case 'updateStimulation':
      return {...state, stimulation: action.payload};
    case 'updateDistractibility':
      return {...state, distractibility: action.payload};
    case 'updateHyperActivity':
      return {...state, hyperActivity: action.payload};
    case 'updateComs':
      return {...state, coms: action.payload};
    case 'updateFormSpace':
      return {...state, formSpace: action.payload};
    case 'updateVisuoMotor':
      return {...state, visuoMotor: action.payload};
    case 'updateTactileDiscrimination':
      return {...state, tactileDiscrimination: action.payload};
    case 'updateVestibularProcessing':
      return {...state, vestibularProcessing: action.payload};
    case 'updateComs2':
      return {...state, coms2: action.payload};
    case 'updateFocalVision':
      return {...state, focalVision: action.payload};
    case 'updateAmbientVision':
      return {...state, ambientVision: action.payload};
    case 'updateEyeMovementSystem':
      return {...state, eyeMovementSystem: action.payload};
    case 'updateLocalization':
      return {...state, localization: action.payload};
    case 'updateTracking':
      return {...state, tracking: action.payload};
    case 'updatePraxis':
      return {...state, praxis: action.payload};
    default:
      return state;
  }
};

export default reducer;
