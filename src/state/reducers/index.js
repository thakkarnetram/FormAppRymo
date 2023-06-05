import {combineReducers} from 'redux';
import section1Reducer from '../reducers/section1Reducers';
import section2Reducer from '../reducers/section2Reducers';
import section3Reducer from '../reducers/section3Reducers';
import section4Reducer from '../reducers/section4Reducers';
import section5Reducer from '../reducers/section5Reducers';
import section6Reducer from '../reducers/section6Reducers';
import section7Reducer from '../reducers/section7Reducers';

const reducers = combineReducers({
  section1: section1Reducer,
  section2: section2Reducer,
  section3: section3Reducer,
  section4: section4Reducer,
  section5: section5Reducer,
  section6: section6Reducer,
  section7: section7Reducer,
});

export default reducers;
