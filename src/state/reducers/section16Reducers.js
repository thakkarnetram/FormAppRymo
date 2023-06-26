const initialState = {
  registrationOptions: {
    Arousal: false,
    Attention: false,
    Affect: false,
    Alertness: false,
  },
  registrationComs: '',
  tactileUnderResponsive: '',
  tactileOverResponsive: '',
  proprioceptiveUnderResponsive: '',
  proprioceptiveOverResponsive: '',
  vestibularUnderResponsive: '',
  vestibularOverResponsive: '',
  auditoryUnderResponsive: '',
  auditoryOverResponsive: '',
  visualUnderResponsive: '',
  visualOverResponsive: '',
  gustatoryUnderResponsive: '',
  gustatoryOverResponsive: '',
  gustatoryComs: '',
  sensoryProfileComs: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateRegistrationOptions':
      return {
        ...state,
        registrationOptions: action.payload,
      };
    case 'updateRegistrationComs':
      return {
        ...state,
        registrationComs: action.payload,
      };
    case 'updateTactileUnderResponsive':
      return {
        ...state,
        tactileUnderResponsive: action.payload,
        tactileOverResponsive: '',
      };
    case 'updateTactileOverResponsive':
      return {
        ...state,
        tactileOverResponsive: action.payload,
        tactileUnderResponsive: '',
      };
    case 'updateProprioceptiveUnderResponsive':
      return {
        ...state,
        proprioceptiveUnderResponsive: action.payload,
        proprioceptiveOverResponsive: '',
      };
    case 'updateProprioceptiveOverResponsive':
      return {
        ...state,
        proprioceptiveOverResponsive: action.payload,
        proprioceptiveUnderResponsive: '',
      };
    case 'updateVestibularUnderResponsive':
      return {
        ...state,
        vestibularUnderResponsive: action.payload,
        vestibularOverResponsive: '',
      };
    case 'updateVestibularOverResponsive':
      return {
        ...state,
        vestibularOverResponsive: action.payload,
        vestibularUnderResponsive: '',
      };
    case 'updateAuditoryUnderResponsive':
      return {
        ...state,
        auditoryUnderResponsive: action.payload,
        auditoryOverResponsive: '',
      };
    case 'updateAuditoryOverResponsive':
      return {
        ...state,
        auditoryOverResponsive: action.payload,
        auditoryUnderResponsive: '',
      };
    case 'updateVisualUnderResponsive':
      return {
        ...state,
        visualUnderResponsive: action.payload,
        visualOverResponsive: '',
      };
    case 'updateVisualOverResponsive':
      return {
        ...state,
        visualOverResponsive: action.payload,
        visualUnderResponsive: '',
      };
    case 'updateGustatoryUnderResponsive':
      return {
        ...state,
        gustatoryUnderResponsive: action.payload,
        gustatoryOverResponsive: '',
      };
    case 'updateGustatoryOverResponsive':
      return {
        ...state,
        gustatoryOverResponsive: action.payload,
        gustatoryUnderResponsive: '',
      };
    case 'updateGustatoryComs':
      return {
        ...state,
        gustatoryComs: action.payload,
      };
    case 'updateSensoryProfileComs':
      return {
        ...state,
        sensoryProfileComs: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
