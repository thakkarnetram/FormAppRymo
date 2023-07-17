/* eslint-disable prettier/prettier */
const initialState = {
  otp: null,
  otpCode: '',
  otpVerify: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_OTP_CODE':
      return {...state, otpCode: action.payload};
    case 'GET_OTP':
      return {...state, otp: action.payload};
    case 'VERIFY_OTP':
      return {...state, otpVerify: action.payload.success};
    default:
      return state;
  }
};

export default reducer;
