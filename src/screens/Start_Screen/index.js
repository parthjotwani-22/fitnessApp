import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {StyleSheet} from 'react-native';
import logo from '../../assets/pngs/Fitness_Logo.png';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import CustomButton from '../../components/customButton';
const Startscreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.headsec}>
        <Text style={styles.text}>Fitness Destination</Text>
      </View>
      <View style={styles.imgsec}>
        <Image source={logo} style={styles.imgsize} />
      </View>
      <View style={styles.textsec}></View>
      <LinearGradient
        colors={[colors.white, colors.grey]}
        start={{x: 0.5, y: 0.3}}
        end={{x: 0.3, y: 1}}
        style={styles.bttnsec}>
        <CustomButton
          name={'Log In'}
          onPress={() => {
            props.navigation.navigate('Login');
          }}
          btnstyle={StyleSheet.create({width: '60%'})}
        />
        <CustomButton
          name={'Signup'}
          onPress={() => {
            props.navigation.navigate('Signup');
          }}
          btnstyle={StyleSheet.create({width: '60%'})}
        />
      </LinearGradient>
    </View>
  );
};

export default Startscreen;
