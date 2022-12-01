import types from './types';

export const loginSuccessfull = resposejson => {
  console.log('Data in Action', resposejson);
  return dispatch => {
    dispatch({type: types.loginSuccess, playload: {resposejson}});
  };
};

export const LoginFailed = responseJson => {
  console.log('Signup in Action', responseJson);
  return dispatch => {
    dispatch({type: types.loginFailed, payload: {responseJson}});
  };
};
// export const LoginFail = payload => ({type: types.loginFailed, payload});

export const logout = () => {
  return dispatch => {
    dispatch({type: types.logout});
  };
};
