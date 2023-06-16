const initialState = {
  supineToProneImmobile: '',
  supineToProneAssistance: '',
  supineToProneIndependent: '',
  supineToSitImmobile: '',
  supineToSitAssistance: '',
  supineToSitIndependent: '',
  sittingImmobile: '',
  sittingAssistance: '',
  sittingIndependent: '',
  quadripedImmobile: '',
  quadripedAssistance: '',
  quadripedIndependent: '',
  kneelingImmobile: '',
  kneelingAssistance: '',
  kneelingIndependent: '',
  halfKneelingImmobile: '',
  halfKneelingAssistance: '',
  halfKneelingIndependent: '',
  standingImmobile: '',
  standingAssistance: '',
  standingIndependent: '',
  ambulationImmobile: '',
  ambulationAssistance: '',
  ambulationIndependent: '',
  gmfc: '',
  miniMacs: '',
  macs: '',
  cfcs: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateSupineToProneImmobile':
      return {
        ...state,
        supineToProneImmobile: action.payload,
        supineToProneAssistance: '',
        supineToProneIndependent: '',
      };
    case 'updateSupineToProneAssistance':
      return {
        ...state,
        supineToProneAssistance: action.payload,
        supineToProneImmobile: '',
        supineToProneIndependent: '',
      };
    case 'updateSupineToProneIndependent':
      return {
        ...state,
        supineToProneIndependent: action.payload,
        supineToProneImmobile: '',
        supineToProneAssistance: '',
      };
    case 'updateSupineToSitImmobile':
      return {
        ...state,
        supineToSitImmobile: action.payload,
        supineToSitAssistance: '',
        supineToSitIndependent: '',
      };
    case 'updateSupineToSitAssistance':
      return {
        ...state,
        supineToSitAssistance: action.payload,
        supineToSitImmobile: '',
        supineToSitIndependent: '',
      };
    case 'updateSupineToSitIndependent':
      return {
        ...state,
        supineToSitIndependent: action.payload,
        supineToSitImmobile: '',
        supineToSitAssistance: '',
      };
    case 'updateSittingImmobile':
      return {
        ...state,
        sittingImmobile: action.payload,
        sittingAssistance: '',
        sittingIndependent: '',
      };
    case 'updateSittingAssistance':
      return {
        ...state,
        sittingAssistance: action.payload,
        sittingImmobile: '',
        sittingIndependent: '',
      };
    case 'updateSittingIndependent':
      return {
        ...state,
        sittingIndependent: action.payload,
        sittingImmobile: '',
        sittingAssistance: '',
      };
    case 'updateQuadripedImmobile':
      return {
        ...state,
        quadripedImmobile: action.payload,
        quadripedAssistance: '',
        quadripedIndependent: '',
      };
    case 'updateQuadripedAssistance':
      return {
        ...state,
        quadripedAssistance: action.payload,
        quadripedImmobile: '',
        quadripedIndependent: '',
      };
    case 'updateQuadripedIndependent':
      return {
        ...state,
        quadripedIndependent: action.payload,
        quadripedImmobile: '',
        quadripedAssistance: '',
      };
    case 'updateKneelingImmobile':
      return {
        ...state,
        kneelingImmobile: action.payload,
        kneelingAssistance: '',
        kneelingIndependent: '',
      };
    case 'updateKneelingAssistance':
      return {
        ...state,
        kneelingAssistance: action.payload,
        kneelingImmobile: '',
        kneelingIndependent: '',
      };
    case 'updateKneelingIndependent':
      return {
        ...state,
        kneelingIndependent: action.payload,
        kneelingImmobile: '',
        kneelingAssistance: '',
      };
    case 'updateHalfKneelingImmobile':
      return {
        ...state,
        halfKneelingImmobile: action.payload,
        halfKneelingAssistance: '',
        halfKneelingIndependent: '',
      };
    case 'updateHalfKneelingAssistance':
      return {
        ...state,
        halfKneelingAssistance: action.payload,
        halfKneelingImmobile: '',
        halfKneelingIndependent: '',
      };
    case 'updateHalfKneelingIndependent':
      return {
        ...state,
        halfKneelingIndependent: action.payload,
        halfKneelingImmobile: '',
        halfKneelingAssistance: '',
      };
    case 'updateStandingImmobile':
      return {
        ...state,
        standingImmobile: action.payload,
        standingAssistance: '',
        standingIndependent: '',
      };
    case 'updateStandingAssistance':
      return {
        ...state,
        standingAssistance: action.payload,
        standingImmobile: '',
        standingIndependent: '',
      };
    case 'updateStandingIndependent':
      return {
        ...state,
        standingIndependent: action.payload,
        standingImmobile: '',
        standingAssistance: '',
      };
    case 'updateAmbulationImmobile':
      return {
        ...state,
        ambulationImmobile: action.payload,
        ambulationAssistance: '',
        ambulationIndependent: '',
      };
    case 'updateAmbulationAssistance':
      return {
        ...state,
        ambulationAssistance: action.payload,
        ambulationImmobile: '',
        ambulationIndependent: '',
      };
    case 'updateAmbulationIndependent':
      return {
        ...state,
        ambulationIndependent: action.payload,
        ambulationImmobile: '',
        ambulationAssistance: '',
      };
    case 'updateGmfc':
      return {
        ...state,
        gmfc: action.payload,
      };
    case 'updateMiniMac':
      return {
        ...state,
        miniMacs: action.payload,
      };
    case 'updateMacs':
      return {
        ...state,
        macs: action.payload,
      };
    case 'updateCfcs':
      return {
        ...state,
        cfcs: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
