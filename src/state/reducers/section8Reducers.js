const initialState = {
  tendoachillesRTR1: '',
  tendoachillesRTR2: '',
  tendoachillesLTR1: '',
  tendoachillesLTR2: '',
  hamstringsRTR1: '',
  hamstringsRTR2: '',
  hamstringsLTR1: '',
  hamstringsLTR2: '',
  hipAdductorsRTR1: '',
  hipAdductorsRTR2: '',
  hipAdductorsLTR1: '',
  hipAdductorsLTR2: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateTendoachillesRTR1':
      return {
        ...state,
        tendoachillesRTR1: action.payload,
      };
    case 'updateTendoachillesRTR2':
      return {
        ...state,
        tendoachillesRTR2: action.payload,
      };
    case 'updateTendoachillesLTR1':
      return {
        ...state,
        tendoachillesLTR1: action.payload,
      };
    case 'updateTendoachillesLTR2':
      return {
        ...state,
        tendoachillesLTR2: action.payload,
      };
    case 'updateHamstringsRTR1':
      return {
        ...state,
        hamstringsRTR1: action.payload,
      };
    case 'updateHamstringsRTR2':
      return {
        ...state,
        hamstringsRTR2: action.payload,
      };
    case 'updateHamstringsLTR1':
      return {
        ...state,
        hamstringsLTR1: action.payload,
      };
    case 'updateHamstringsLTR2':
      return {
        ...state,
        hamstringsLTR2: action.payload,
      };
    case 'updateHipAdductorsRTR1':
      return {
        ...state,
        hipAdductorsRTR1: action.payload,
      };
    case 'updateHipAdductorsRTR2':
      return {
        ...state,
        hipAdductorsRTR2: action.payload,
      };
    case 'updateHipAdductorsLTR1':
      return {
        ...state,
        hipAdductorsLTR1: action.payload,
      };
    case 'updateHipAdductorsLTR2':
      return {
        ...state,
        hipAdductorsLTR2: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
