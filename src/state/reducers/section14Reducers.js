const initialState = {
  posture: '',
  asymmetry: '',
  side: '',
  broad: '',
  narrow: '',
  generalPosture: '',
  callosities: '',
  movementStrategies: {
    Momentum: false,
    OveruseOfMs: false,
    IncreasingBos: false,
  },
  staticBalanceGood: '',
  staticBalanceFair: '',
  staticBalancePoor: '',
  anticipatoryBalanceGood: '',
  anticipatoryBalanceFair: '',
  anticipatoryBalancePoor: '',
  anticipatoryBalanceComs: '',
  reactiveBalanceGood: '',
  reactiveBalanceFair: '',
  reactiveBalancePoor: '',
  reactiveBalanceComs: '',
  coordinationGood: '',
  coordinationFair: '',
  coordinationPoor: '',
  coordinationComs: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updatePosture':
      return {
        ...state,
        posture: action.payload,
      };
    case 'updateAlignment':
      return {
        ...state,
        alignment: action.payload,
      };
    case 'updateSide':
      return {
        ...state,
        side: action.payload,
      };
    case 'updateBroad':
      return {
        ...state,
        broad: action.payload,
        narrow: '',
      };
    case 'updateNarrow':
      return {
        ...state,
        narrow: action.payload,
        broad: '',
      };
    case 'updateGeneralPosture':
      return {
        ...state,
        generalPosture: action.payload,
      };
    case 'updateCallosities':
      return {
        ...state,
        callosities: action.payload,
      };
    case 'updateMovementStrategies':
      return {
        ...state,
        movementStrategies: action.payload,
      };
    case 'updateStaticBalanceGood':
      return {
        ...state,
        staticBalanceGood: action.payload,
        staticBalanceFair: '',
        staticBalancePoor: '',
      };
    case 'updateStaticBalanceFair':
      return {
        ...state,
        staticBalanceFair: action.payload,
        staticBalanceGood: '',
        staticBalancePoor: '',
      };
    case 'updateStaticBalancePoor':
      return {
        ...state,
        staticBalancePoor: action.payload,
        staticBalanceGood: '',
        staticBalanceFair: '',
      };
    case 'updateAnticipatoryBalanceGood':
      return {
        ...state,
        anticipatoryBalanceGood: action.payload,
        anticipatoryBalanceFair: '',
        anticipatoryBalancePoor: '',
      };
    case 'updateAnticipatoryBalanceFair':
      return {
        ...state,
        anticipatoryBalanceFair: action.payload,
        anticipatoryBalanceGood: '',
        anticipatoryBalancePoor: '',
      };
    case 'updateAnticipatoryBalancePoor':
      return {
        ...state,
        anticipatoryBalancePoor: action.payload,
        anticipatoryBalanceGood: '',
        anticipatoryBalanceFair: '',
      };
    case 'updateAnticipatoryBalanceComs':
      return {
        ...state,
        anticipatoryBalanceComs: action.payload,
      };
    case 'updateReactiveBalanceGood':
      return {
        ...state,
        reactiveBalanceGood: action.payload,
        reactiveBalanceFair: '',
        reactiveBalancePoor: '',
      };
    case 'updateReactiveBalanceFair':
      return {
        ...state,
        reactiveBalanceFair: action.payload,
        reactiveBalanceGood: '',
        reactiveBalancePoor: '',
      };
    case 'updateReactiveBalancePoor':
      return {
        ...state,
        reactiveBalancePoor: action.payload,
        reactiveBalanceGood: '',
        reactiveBalanceFair: '',
      };
    case 'updateReactiveBalanceComs':
      return {
        ...state,
        reactiveBalanceComs: action.payload,
      };
    case 'updateCoordinationGood':
      return {
        ...state,
        coordinationGood: action.payload,
        coordinationFair: '',
        coordinationPoor: '',
      };
    case 'updateCoordinationFair':
      return {
        ...state,
        coordinationFair: action.payload,
        coordinationGood: '',
        coordinationPoor: '',
      };
    case 'updateCoordinationPoor':
      return {
        ...state,
        coordinationPoor: action.payload,
        coordinationGood: '',
        coordinationFair: '',
      };
    case 'updateCoordinationComs':
      return {
        ...state,
        coordinationComs: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
