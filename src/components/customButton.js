import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import colors from '../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
interface CustomButtonProps {
  onPress: TouchableOpacityProps['onPress'] | undefined;
  name?: String | undefined;
  btnstyle: StyleSheet | undefined;
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.bttn, props.btnstyle]}
      onPress={props.onPress}>
      <LinearGradient
        colors={[colors.red, colors.yellow]}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.txt}>{props.name}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bttn: {
    borderRadius: 30,
    overflow: 'hidden',
    shadowColor: colors.yellow,
    shadowOffset: {
      width: 6,
      height: 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    margin: 20,
  },
  txt: {
    fontSize: 20,
    paddingVertical: '5%',
    textAlign: 'center',
    color: colors.white,
    fontWeight: '700',
  },
});
export default CustomButton;
