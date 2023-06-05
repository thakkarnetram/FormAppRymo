const initialState = {
  mri: '',
  selectedImageMRI: '',
  clickedImageMRI: '',
  eeg: '',
  selectedImageEEG: '',
  clickedImageEEG: '',
  bera: '',
  selectedImageBERA: '',
  clickedImageBERA: '',
  opthalmalogy: '',
  selectedImageOPT: '',
  clickedImageOPT: '',
  xRays: '',
  selectedImageXRAYS: '',
  clickedImageXRAYS: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateMRI':
      return {
        ...state,
        mri: action.payload,
      };
    case 'updateselectedImageMRI':
      return {
        ...state,
        selectedImageMRI: action.payload,
      };
    case 'updateclickedImageMRI':
      return {
        ...state,
        clickedImageMRI: action.payload,
      };
    case 'updateEEG':
      return {
        ...state,
        eeg: action.payload,
      };
    case 'updateselectedImageEEG':
      return {
        ...state,
        selectedImageEEG: action.payload,
      };
    case 'updateclickedImageEEG':
      return {
        ...state,
        clickedImageEEG: action.payload,
      };
    case 'updateBERA':
      return {
        ...state,
        bera: action.payload,
      };
    case 'updateselectedImageBERA':
      return {
        ...state,
        selectedImageBERA: action.payload,
      };
    case 'updateclickedImageBERA':
      return {
        ...state,
        clickedImageBERA: action.payload,
      };
    case 'updateOpthalmalogy':
      return {
        ...state,
        opthalmalogy: action.payload,
      };
    case 'updateselectedImageOPT':
      return {
        ...state,
        selectedImageOPT: action.payload,
      };
    case 'updateclickedImageOPT':
      return {
        ...state,
        clickedImageOPT: action.payload,
      };
    case 'updateXRays':
      return {
        ...state,
        xRays: action.payload,
      };
    case 'updateselectedImageXRAYS':
      return {
        ...state,
        selectedImageXRAYS: action.payload,
      };
    case 'updateclickedImageXRAYS':
      return {
        ...state,
        clickedImageXRAYS: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
