const initialState = {
  fatherAgeConception: '',
  motherAgeConception: '',
  workLoad: '',
  workLoadComs: '',
  stressLevel: '',
  stressLevelComs: '',
  consanguinity: '',
  nonConsanguinity: '',
  children: '',
  preNatalOptions: {
    HyperTension: false,
    Diabetes: false,
    Convulsion: false,
    Any_Medication: false,
    Hyperthyroidism: false,
    Infections: false,
  },
  fullTerm: '',
  preTerm: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updatefatherAgeConception':
      return {
        ...state,
        fatherAgeConception: action.payload,
      };
    case 'updatemotherAgeConception':
      return {
        ...state,
        motherAgeConception: action.payload,
      };
    case 'updateWorkLoad':
      return {
        ...state,
        workLoad: action.payload,
      };
    case 'updateWorkLoadComs':
      return {
        ...state,
        workLoadComs: action.payload,
      };
    case 'updateStressLevelComs':
      return {
        ...state,
        stressLevelComs: action.payload,
      };
    case 'updateStressLevel':
      return {
        ...state,
        stressLevel: action.payload,
      };
    case 'updateConsanguinity':
      return {
        ...state,
        consanguinity: action.payload,
        nonConsanguinity: '',
      };
    case 'updateNonConsanguinity':
      return {
        ...state,
        nonConsanguinity: action.payload,
        consanguinity: '',
      };
    case 'updateChildren':
      return {
        ...state,
        children: action.payload,
      };
    case 'updatePreNatalOptions':
      return {
        ...state,
        preNatalOptions: action.payload,
      };
    case 'updateFullTerm':
      return {
        ...state,
        fullTerm: action.payload,
        preTerm: '',
      };
    case 'updatePreTerm':
      return {
        ...state,
        preTerm: action.payload,
        fullTerm: '',
      };
    default:
      return state;
  }
};

export default reducer;
