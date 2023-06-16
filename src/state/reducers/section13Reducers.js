const initialState = {
  adl: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateAdl':
      return {
        ...state,
        adl: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;