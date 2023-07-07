const initialState = {
  patientList: [],
  patientName: '',
  patientId: '',
  patientAddress: '',
  patientContact: '',
  patientImage: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updatePatientList':
      return {...state, patientList: action.payload};
    case 'updatePatientName':
      return {...state, patientName: action.payload};
    case 'updatePatientAddress':
      return {...state, patientAddress: action.payload};
    case 'updatePatientContact':
      return {...state, patientContact: action.payload};
    case 'updatePatientImageMain':
      return {...state, patientImage: action.payload};
    case 'updatePatientId':
      return {...state, patientId: action.payload};

    default:
      return state;
  }
};

export default reducer;
