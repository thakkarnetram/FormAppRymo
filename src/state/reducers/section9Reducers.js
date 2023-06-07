const initialState = {
  backExt: '',
  backFlex: '',
  backLat: '',
  neckFlex: '',
  neckExt: '',
  neckLat: '',
  hipFlex: '',
  hipExt: '',
  hipAbd: '',
  hipAdd: '',
  kneeFlex: '',
  hipMedRot: '',
  hipLatRot: '',
  shoulderAbd: '',
  shoulderFlex: '',
  shoulderAdd: '',
  shoulderExt: '',
  elbowFlex: '',
  forearmPronation: '',
  forearmSupination: '',
  ankleDF: '',
  anklePF: '',
  ankleInversion: '',
  ankleEversion: '',
  wristFlex: '',
  wristExt: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateBackExt':
      return {
        ...state,
        backExt: action.payload,
      };
    case 'updateBackFlex':
      return {
        ...state,
        backFlex: action.payload,
      };
    case 'updateBackLat':
      return {
        ...state,
        backLat: action.payload,
      };
    case 'updateNeckFlex':
      return {
        ...state,
        neckFlex: action.payload,
      };
    case 'updateNeckExt':
      return {
        ...state,
        neckExt: action.payload,
      };
    case 'updateNeckLat':
      return {
        ...state,
        neckLat: action.payload,
      };
    case 'updateHipFlex':
      return {
        ...state,
        hipFlex: action.payload,
      };
    case 'updateHipExt':
      return {
        ...state,
        hipExt: action.payload,
      };
    case 'updateHipAbd':
      return {
        ...state,
        hipAbd: action.payload,
      };
    case 'updateHipAdd':
      return {
        ...state,
        hipAdd: action.payload,
      };
    case 'updateKneeFlex':
      return {
        ...state,
        kneeFlex: action.payload,
      };
    case 'updateHipMedRot':
      return {
        ...state,
        hipMedRot: action.payload,
      };
    case 'updateHipLatRot':
      return {
        ...state,
        hipLatRot: action.payload,
      };
    case 'updateShoulderAbd':
      return {
        ...state,
        shoulderAbd: action.payload,
      };
    case 'updateShoulderFlex':
      return {
        ...state,
        shoulderFlex: action.payload,
      };
    case 'updateShoulderAdd':
      return {
        ...state,
        shoulderAdd: action.payload,
      };
    case 'updateShoulderExt':
      return {
        ...state,
        shoulderExt: action.payload,
      };
    case 'updateElbowFlex':
      return {
        ...state,
        elbowFlex: action.payload,
      };
    case 'updateForearmPronation':
      return {
        ...state,
        forearmPronation: action.payload,
      };
    case 'updateForearmSupination':
      return {
        ...state,
        forearmSupination: action.payload,
      };
    case 'updateAnkleDF':
      return {
        ...state,
        ankleDF: action.payload,
      };
    case 'updateAnklePF':
      return {
        ...state,
        anklePF: action.payload,
      };
    case 'updateAnkleInversion':
      return {
        ...state,
        ankleInversion: action.payload,
      };
    case 'updateAnkleEversion':
      return {
        ...state,
        ankleEversion: action.payload,
      };
    case 'updateWristFlex':
      return {
        ...state,
        wristFlex: action.payload,
      };
    case 'updateWristExt':
      return {
        ...state,
        wristExt: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
