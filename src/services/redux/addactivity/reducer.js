import types from './types';
const intialstate = {
  activities: [],
  time: 0,
};

const activityReducer = (state = intialstate, action) => {
  switch (action.type) {
    case types.activityAdded:
      console.log('Activity in my reducer', action);
      return {
        activities: action.payload.responsejson,
        time: action.payload.responsetime,
      };
    case types.activityRejected:
      console.log('Activity not in my reducer', action);
      return {
        ...state,
        activities: action.payload.responsejson,
      };
    case types.clear:
      return intialstate;
    default:
      return state;
  }
};
export default activityReducer;
