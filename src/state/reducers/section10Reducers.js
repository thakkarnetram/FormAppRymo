const initialState = {
  upperExterimities: '',
  lowerExterimities: '',
  comsModifiedAshworth: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateUpperExtermities':
      return {
        ...state,
        upperExterimities: action.payload,
      };
    case 'updateLowerExtermities':
      return {
        ...state,
        lowerExterimities: action.payload,
      };
    case 'updateComsModifiedAshworth':
      return {
        ...state,
        comsModifiedAshworth: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
