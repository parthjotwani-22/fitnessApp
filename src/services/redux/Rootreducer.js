import {combineReducers} from 'redux';
import userReducer from './login/reducer';
import activityReducer from './addactivity/reducer';
const rootReducer = combineReducers({
  userReducer: userReducer,
  activityReducer: activityReducer,
});
export default rootReducer;
