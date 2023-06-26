const initialState = {
  canInitiate: '',
  cantInitiate: '',
  initiationComs: '',
  sustenancePoor: '',
  sustenanceGood: '',
  sustenanceFair: '',
  sustenanceComs: '',
  terminationPassive: '',
  terminationAbrupt: '',
  terminationComs: '',
  controlGradPoor: '',
  controlGradFair: '',
  controlGradGood: '',
  controlGradComs: '',
  recruitmentSo: '',
  recruitmentFf: '',
  contractionConcentric: '',
  contractionIsometric: '',
  contractionEccentric: '',
  coContraction: '',
  reciprocalInhibition: '',
  massEnergy: '',
  isolatedWork: '',
  dynamicStiffness: '',
  extraneousMovement: '',
  section15Coms: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateCanInitiate':
      return {...state, canInitiate: action.payload};
    case 'updateCantInitiate':
      return {...state, cantInitiate: action.payload};
    case 'updateInitiationComs':
      return {...state, initiationComs: action.payload};
    case 'updateSustenancePoor':
      return {...state, sustenancePoor: action.payload};
    case 'updateSustenanceGood':
      return {...state, sustenanceGood: action.payload};
    case 'updateSustenanceFair':
      return {...state, sustenanceFair: action.payload};
    case 'updateSustenanceComs':
      return {...state, sustenanceComs: action.payload};
    case 'updateTerminationPassive':
      return {...state, terminationPassive: action.payload};
    case 'updateTerminationAbrupt':
      return {...state, terminationAbrupt: action.payload};
    case 'updateTerminationComs':
      return {...state, terminationComs: action.payload};
    case 'updateControlGradPoor':
      return {...state, controlGradPoor: action.payload};
    case 'updateControlGradFair':
      return {...state, controlGradFair: action.payload};
    case 'updateControlGradGood':
      return {...state, controlGradGood: action.payload};
    case 'updateControlGradComs':
      return {...state, controlGradComs: action.payload};
    case 'updateRecruitmentSo':
      return {...state, recruitmentSo: action.payload};
    case 'updateRecruitmentFf':
      return {...state, recruitmentFf: action.payload};
    case 'updateContractionConcentric':
      return {...state, contractionConcentric: action.payload};
    case 'updateContractionIsometric':
      return {...state, contractionIsometric: action.payload};
    case 'updateContractionEccentric':
      return {...state, contractionEccentric: action.payload};
    case 'updateCoContraction':
      return {...state, coContraction: action.payload};
    case 'updateReciprocalInhibition':
      return {...state, reciprocalInhibition: action.payload};
    case 'updateMassEnergy':
      return {...state, massEnergy: action.payload};
    case 'updateIsolatedWork':
      return {...state, isolatedWork: action.payload};
    case 'updateDynamicStiffness':
      return {...state, dynamicStiffness: action.payload};
    case 'updateExtraneousMovement':
      return {...state, extraneousMovement: action.payload};
    case 'updateSection15Coms':
      return {...state, section15Coms: action.payload};
    default:
      return state;
  }
};

export default reducer;
