import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screens from '../utils/screens';
import colors from '../utils/colors';
import {Image, View, Text} from 'react-native';
import assets from '../utils/assets';
import CustomTab from './CustomTab';
const Tab = createBottomTabNavigator();

const TabBar = props => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <CustomTab {...props} />}>
      <Tab.Screen
        name="Workout"
        component={screens.Workout}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Home"
        component={screens.Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={screens.Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabBar;

// import * as React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import screens from '../utils/screens';
// import colors from '../utils/colors';
// import {Image, View, Text} from 'react-native';
// import assets from '../utils/assets';
// const Tab = createBottomTabNavigator();

// const TabBar = props => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarStyle: {
//           position: 'absolute',
//           margin: 20,
//           height: 70,
//           borderRadius: 20,
//           overflow: 'hidden',
//         },
//         tabBarActiveTintColor: colors.white,
//         tabBarInactiveTintColor: colors.yellow,
//         tabBarActiveBackgroundColor: colors.yellow,
//         tabBarInactiveBackgroundColor: colors.white,
//         tabBarHideOnKeyboard: true,
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = assets.home;
//           } else if (route.name === 'Profile') {
//             iconName = assets.person;
//           } else if (route.name === 'Workout') {
//             iconName = assets.workout;
//           }
//           if (focused) {
//             color = colors.white;
//           }
//           return (
//             <Image
//               source={iconName}
//               style={{height: '50%', resizeMode: 'contain', tintColor: color}}
//             />
//           );
//         },
//       })}>
//       <Tab.Screen
//         name="Workout"
//         component={screens.Workout}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         name="Home"
//         component={screens.Home}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={screens.Profile}
//         options={{headerShown: false}}
//       />
//     </Tab.Navigator>
//   );
// };

//export default TabBar;
