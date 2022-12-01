// import React from 'react';
// import {View, Text} from 'react-native';
// import AuthStack from './src/navigation/AuthStack';
// import screens from './src/utils/screens';

// const App = props => {
//   return <AuthStack />;
// };

// export default App;

import React, {useEffect} from 'react';
import {View, Text, LogBox} from 'react-native';
import AuthStack from './src/navigation/AuthStack';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store from './src/services/redux/store';

const persistStore = store();
LogBox.ignoreAllLogs();

const App = () => {
  // const apicall = () => {
  //   fetch('https://638463d63fa7acb14ff31db1.mockapi.io/users', {method: 'GET'})
  //     .then(res => res.json())
  //     .then(val => {
  //       console.log('data', val);
  //     })
  //     .catch(e => {
  //       console.log('err', e);
  //     });
  // };

  // useEffect(() => {
  //   apicall();
  // }, []);
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <AuthStack />
      </PersistGate>
    </Provider>
    //<View></View>
  );
};

export default App;
