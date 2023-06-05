const initialState = {
  handHolding: '',
  rolling: '',
  crawling: '',
  sitting: '',
  standing: '',
  walking: '',
  fineMotor: '',
  communication: '',
  socialBehaviour: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateHandHolding':
      return {
        ...state,
        handHolding: action.payload,
      };
    case 'updateRolling':
      return {
        ...state,
        rolling: action.payload,
      };
    case 'updateCrawling':
      return {
        ...state,
        crawling: action.payload,
      };
    case 'updateSitting':
      return {
        ...state,
        sitting: action.payload,
      };
    case 'updateStanding':
      return {
        ...state,
        standing: action.payload,
      };
    case 'updateWalking':
      return {
        ...state,
        walking: action.payload,
      };
    case 'updateFineMotor':
      return {
        ...state,
        fineMotor: action.payload,
      };
    case 'updateCommunication':
      return {
        ...state,
        communication: action.payload,
      };
    case 'updateSocialBehaviour':
      return {
        ...state,
        socialBehaviour: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
