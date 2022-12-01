import types from './types';

export const activityAdded = (responsejson, responsetime) => {
  console.log('Data Here');
  return dispatch => {
    dispatch({
      type: types.activityAdded,
      payload: {responsejson, responsetime},
    });
  };
};

export const activityRejected = responsejson => {
  console.log('Activity Error');
  return dispatch => {
    dispatch({type: types.activityRejected, payload: {responsejson}});
  };
};

export function clear() {
  return dispatch => {
    dispatch({type: types.clear});
  };
}
