import {combineReducers} from 'redux';
import section1Reducer from '../reducers/section1Reducers';
import section2Reducer from '../reducers/section2Reducers';
import section3Reducer from '../reducers/section3Reducers';
import section4Reducer from '../reducers/section4Reducers';
import section5Reducer from '../reducers/section5Reducers';
import section6Reducer from '../reducers/section6Reducers';
import section7Reducer from '../reducers/section7Reducers';
import section8Reducer from '../reducers/section8Reducers';
import section9Reducer from '../reducers/section9Reducers';
import section10Reducer from '../reducers/section10Reducers';
import section11Reducer from '../reducers/section11Reducers';
import section12Reducer from '../reducers/section12Reducers';
import section13Reducer from '../reducers/section13Reducers';
import section14Reducer from '../reducers/section14Reducers';
import section15Reducer from '../reducers/section15Reducers';
import section16Reducer from '../reducers/section16Reducers';
import section17Reducer from '../reducers/section17Reducers';
import section18Reducer from '../reducers/section18Reducers';
import lastReducer from '../reducers/sectionLastReducers';
import PatientReducer from '../reducers/patientReducers';
import LoginReducer from '../reducers/loginReducer';

const reducers = combineReducers({
  section1: section1Reducer,
  section2: section2Reducer,
  section3: section3Reducer,
  section4: section4Reducer,
  section5: section5Reducer,
  section6: section6Reducer,
  section7: section7Reducer,
  section8: section8Reducer,
  section9: section9Reducer,
  section10: section10Reducer,
  section11: section11Reducer,
  section12: section12Reducer,
  section13: section13Reducer,
  section14: section14Reducer,
  section15: section15Reducer,
  section16: section16Reducer,
  section17: section17Reducer,
  section18: section18Reducer,
  lastSection: lastReducer,
  patient: PatientReducer,
  login: LoginReducer,
});

export default reducers;
