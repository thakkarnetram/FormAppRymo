const initialState = {
  hypotonia: '',
  hypertonia: '',
  deformitiesR: '',
  deformitiesL: '',
  contractureR: '',
  contractureL: '',
  tightnessR: '',
  tightnessL: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateToneHypotonia':
      return {
        ...state,
        hypotonia: action.payload,
        hypertonia: '',
      };
    case 'updateToneHypertonia':
      return {
        ...state,
        hypertonia: action.payload,
        hypotonia: '',
      };
    case 'updateDeformitiesRight':
      return {
        ...state,
        deformitiesR: action.payload,
      };
    case 'updateDeformitiesLeft':
      return {
        ...state,
        deformitiesL: action.payload,
      };
    case 'updateContractureRight':
      return {
        ...state,
        contractureR: action.payload,
      };
    case 'updateContractureLeft':
      return {
        ...state,
        contractureL: action.payload,
      };
    case 'updateTightnessRight':
      return {
        ...state,
        tightnessR: action.payload,
      };
    case 'updateTightnessLeft':
      return {
        ...state,
        tightnessL: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
