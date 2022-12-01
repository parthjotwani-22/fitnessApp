import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import colors from '../utils/colors';
import assets from '../utils/assets.js';
const CustomTab = props => {
  const [crr, setcrr] = useState({
    Workout: false,
    Home: true,
    Profile: false,
  });
  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={crr.Workout ? styles.acbutton : styles.button}
        onPress={() => {
          props.navigation.navigate('Workout');
          setcrr({Workout: true, Home: false, Profile: false});
        }}>
        <Image
          source={assets.workout}
          style={crr.Workout ? styles.acimg : styles.img}></Image>
        <Text style={crr.Workout ? styles.actext : styles.text}>Workout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={crr.Home ? styles.acbutton : styles.button}
        onPress={() => {
          props.navigation.navigate('Home');
          setcrr({Workout: false, Home: true, Profile: false});
        }}>
        <Image
          source={assets.home}
          style={crr.Home ? styles.acimg : styles.img}></Image>
        <Text style={crr.Home ? styles.actext : styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={crr.Profile ? styles.acbutton : styles.button}
        onPress={() => {
          props.navigation.navigate('Profile');
          setcrr({Workout: false, Home: false, Profile: true});
        }}>
        <Image
          source={assets.person}
          style={crr.Profile ? styles.acimg : styles.img}></Image>
        <Text style={crr.Profile ? styles.actext : styles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    borderRadius: 10,
    marginHorizontal: 20,
    bottom: 20,
    flexDirection: 'row',
    backgroundColor: colors.red,
    justifyContent: 'space-between',
    position: 'absolute',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    color: colors.white,
  },
  actext: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    color: colors.yellow,
  },
  img: {
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: colors.white,
  },
  acimg: {
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: colors.yellow,
    margin: 3,
  },
  button: {
    borderRadius: 10,
    flex: 0.4,
    padding: 10,
  },
  acbutton: {
    borderRadius: 10,
    flex: 0.4,
    padding: 10,
    backgroundColor: colors.white,
  },
});

export default CustomTab;
