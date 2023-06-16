const initialState = {
  bodyStructurePositive: '',
  bodyStructureNegative: '',
  bodyFunctionPositive: '',
  bodyFunctionNegative: '',
  activityParticipation: '',
  activityLimitation: '',
  environmentalPersonal: '',
  environmentalContextual: '',
  shortTermGoals: '',
  longTermGoals: '',
  intervention: '',
  equipmentsUsed: '',
  section17Coms: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateBodyStructurePositive':
      return {
        ...state,
        bodyStructurePositive: action.payload,
      };
    case 'updateBodyStructureNegative':
      return {
        ...state,
        bodyStructureNegative: action.payload,
      };
    case 'updateBodyFunctionPositive':
      return {
        ...state,
        bodyFunctionPositive: action.payload,
      };
    case 'updateBodyFunctionNegative':
      return {
        ...state,
        bodyFunctionNegative: action.payload,
      };
    case 'updateActivityParticipation':
      return {
        ...state,
        activityParticipation: action.payload,
      };
    case 'updateActivityLimitation':
      return {
        ...state,
        activityLimitation: action.payload,
      };
    case 'updateEnvironmentalPersonal':
      return {
        ...state,
        environmentalPersonal: action.payload,
      };
    case 'updateEnvironmentalContextual':
      return {
        ...state,
        environmentalContextual: action.payload,
      };
    case 'updateShortTermGoals':
      return {
        ...state,
        shortTermGoals: action.payload,
      };
    case 'updateLongTermGoals':
      return {
        ...state,
        longTermGoals: action.payload,
      };
    case 'updateIntervention':
      return {
        ...state,
        intervention: action.payload,
      };
    case 'updateEquipmentsUsed':
      return {
        ...state,
        equipmentsUsed: action.payload,
      };
    case 'updateSection17Coms':
      return {
        ...state,
        section17Coms: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
