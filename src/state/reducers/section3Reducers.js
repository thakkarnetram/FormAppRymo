const initialState = {
  ciabYes: '',
  ciabNo: '',
  birthWeight: '',
  headCircumference: '',
  nicuStayOpt1: '',
  nicuStayOpt2: '',
  nicuStayOpt3: '',
  reasonforNICUStay: '',
  presentHistory: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateCiabYes':
      return {
        ...state,
        ciabYes: action.payload,
        ciabNo: '',
      };
    case 'updateCiabNo':
      return {
        ...state,
        ciabNo: action.payload,
        ciabYes: '',
      };
    case 'updateBirthWeight':
      return {
        ...state,
        birthWeight: action.payload,
      };
    case 'updateHeadCircumference':
      return {
        ...state,
        headCircumference: action.payload,
      };
    case 'updateNICUStayOpt1':
      return {
        ...state,
        nicuStayOpt1: action.payload,
        nicuStayOpt2: '',
        nicuStayOpt3: '',
      };
    case 'updateNICUStayOpt2':
      return {
        ...state,
        nicuStayOpt2: action.payload,
        nicuStayOpt1: '',
        nicuStayOpt3: '',
      };
    case 'updateNICUStayOpt3':
      return {
        ...state,
        nicuStayOpt3: action.payload,
        nicuStayOpt1: '',
        nicuStayOpt2: '',
      };
    case 'updateReasonforNICUStay':
      return {
        ...state,
        reasonforNICUStay: action.payload,
      };
    case 'updatePresentHistory':
      return {
        ...state,
        presentHistory: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
