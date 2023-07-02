const initialState = {
  patientList: [],
  patientName: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updatePatientList':
      return {...state, patientList: action.payload};
    case 'updatePatientName':
      return {...state, patientName: action.payload};
    default:
      return state;
  }
};

export default reducer;
