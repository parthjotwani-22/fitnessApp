import types from './types';
const intialstate = {
  islogin: false,
  loginData: {},
  token: undefined,
};

const userReducer = (state = intialstate, action) => {
  switch (action.type) {
    case types.loginSuccess:
      console.log('Data in My Reducer', action);
      return {
        ...state,
        loginData: action.playload.resposejson,
        islogin: true,
      };
    case types.loginFailed:
      return {
        ...state,
        loginData: action.payload.responseJson,
        islogin: true,
      };
    case types.Editsuccess:
      return {
        ...state,
      };
    case types.logout:
      return intialstate;
    default:
      return state;
  }
};
export default userReducer;
