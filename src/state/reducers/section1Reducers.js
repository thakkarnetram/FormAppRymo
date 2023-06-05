const initialState = {
  firstName: '',
  lastName: '',
  age: '',
  fatherName: '',
  userDob: new Date(),
  evaluationDate: new Date(),
  motherName: '',
  address: '',
  contactNumber: '',
  male: '',
  female: '',
  informant: '',
  assessedBy: '',
  diagnosis: '',
  referredBy: '',
  chiefComplaint: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateFirstName':
      return {
        ...state,
        firstName: action.payload,
      };
    case 'updateLastName':
      return {
        ...state,
        lastName: action.payload,
      };
    case 'updateAge':
      return {
        ...state,
        age: action.payload,
      };
    case 'updateFatherName':
      return {
        ...state,
        fatherName: action.payload,
      };
    case 'updateMotherName':
      return {
        ...state,
        motherName: action.payload,
      };
    case 'updateAddress':
      return {
        ...state,
        address: action.payload,
      };
    case 'updateContactNumber':
      return {
        ...state,
        contactNumber: action.payload,
      };
    case 'updateGenderMale':
      return {
        ...state,
        male: action.payload,
        female: '',
      };
    case 'updateDob':
      return {
        ...state,
        userDob: action.payload,
      };
    case 'updateEvaluationDate':
      return {
        ...state,
        evaluationDate: action.payload,
      };
    case 'updateGenderFemale':
      return {
        ...state,
        female: action.payload,
        male: '',
      };
    case 'updateInformant':
      return {
        ...state,
        informant: action.payload,
      };
    case 'updateAssessedBy':
      return {
        ...state,
        assessedBy: action.payload,
      };
    case 'updateDiagnosis':
      return {
        ...state,
        diagnosis: action.payload,
      };
    case 'updateReferredBy':
      return {
        ...state,
        referredBy: action.payload,
      };
    case 'updateChiefComplaint':
      return {
        ...state,
        chiefComplaint: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
