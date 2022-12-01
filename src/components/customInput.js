import React from 'react';
import {Text, StyleSheet, TextInput, View, TextInputProps} from 'react-native';
import colors from '../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
interface CustomInputProps {
  name?: String | undefined;
  plac?: String | undefined;
  onChangeText: TextInputProps['onChangeText'] | undefined;
}

const CustomInput = (props: CustomInputProps) => {
  return (
    <View>
      <Text style={styles.txt}>{props.name}</Text>
      <TextInput
        onChangeText={props.onChangeText}
        style={styles.inp}
        placeholder={props.plac}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 15,
    paddingVertical: '5%',
    paddingHorizontal: '10%',
    color: colors.yellow,
    fontWeight: '700',
  },
  inp: {
    width: '80%',
    backgroundColor: colors.greyish,
    alignSelf: 'center',
    padding: 10,
  },
});
export default CustomInput;
