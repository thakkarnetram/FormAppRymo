const initialState = {
  sightIntact: '',
  sightNotIntact: '',
  hearingIntact: '',
  hearingNotIntact: '',
  speechIntact: '',
  speechNotIntact: '',
  carriedByParent: '',
  walkingSticks: '',
  wheelChair: '',
  walkingWalker: '',
  walkingIndependently: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateSightIntact':
      return {
        ...state,
        sightIntact: action.payload,
        sightNotIntact: '',
      };
    case 'updateSightNotIntact':
      return {
        ...state,
        sightNotIntact: action.payload,
        sightIntact: '',
      };
    case 'updateHearingIntact':
      return {
        ...state,
        hearingIntact: action.payload,
        hearingNotIntact: '',
      };
    case 'updateHearingNotIntact':
      return {
        ...state,
        hearingNotIntact: action.payload,
        hearingIntact: '',
      };
    case 'updateSpeechIntact':
      return {
        ...state,
        speechIntact: action.payload,
        speechNotIntact: '',
      };
    case 'updateSpeechNotIntact':
      return {
        ...state,
        speechNotIntact: action.payload,
        speechIntact: '',
      };
    case 'updateCarriedbyParent':
      return {
        ...state,
        carriedByParent: action.payload,
        walkingSticks: '',
        wheelChair: '',
        walkingWalker: '',
        walkingIndependently: '',
      };
    case 'updateWalkingSticks':
      return {
        ...state,
        walkingSticks: action.payload,
        carriedByParent: '',
        wheelChair: '',
        walkingWalker: '',
        walkingIndependently: '',
      };
    case 'updateWheelChair':
      return {
        ...state,
        wheelChair: action.payload,
        carriedByParent: '',
        walkingSticks: '',
        walkingWalker: '',
        walkingIndependently: '',
      };
    case 'updateWalkingWalker':
      return {
        ...state,
        walkingWalker: action.payload,
        carriedByParent: '',
        walkingSticks: '',
        wheelChair: '',
        walkingIndependently: '',
      };
    case 'updateWalkingIndependently':
      return {
        ...state,
        walkingIndependently: action.payload,
        carriedByParent: '',
        walkingSticks: '',
        wheelChair: '',
        walkingWalker: '',
      };
    default:
      return state;
  }
};

export default reducer;
