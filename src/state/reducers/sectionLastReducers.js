const initialState = {
  recommendationOptions: {
    Physiotherapy: false,
    OccupationalTherapy: false,
    SpeechTherapy: false,
    SensoryIntegration: false,
    AquaticTherapy: false,
    RemidialTherapy: false,
    BehavioralTherapy: false,
  },
  assessorsName: '',
  assessorsDesignation: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateRecommendationOptions':
      return {...state, recommendationOptions: action.payload};
    case 'updateAssessorsName':
      return {...state, assessorsName: action.payload};
    case 'updateAssessorsDesignation':
      return {...state, assessorsDesignation: action.payload};
    default:
      return state;
  }
};

export default reducer;
