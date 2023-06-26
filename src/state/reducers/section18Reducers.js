const initialState = {
  GMFM: '',
  PEDI: '',
  balanceScale: '',
  WOTA: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateGMFM':
      return {...state, GMFM: action.payload};
    case 'updatePEDI':
      return {...state, PEDI: action.payload};
    case 'updateBalanceScale':
      return {...state, balanceScale: action.payload};
    case 'updateWOTA':
      return {...state, WOTA: action.payload};
    default:
      return state;
  }
};

export default reducer;
