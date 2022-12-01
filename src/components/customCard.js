import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../utils/colors';

interface CustomCardProps {
  name?: String | undefined;
  data?: String | undefined;
  style: StyleSheet | undefined;
}

const CustomCard = (props: CustomCardProps) => {
  return (
    <View style={[styles.crdview, props.style]}>
      <Text style={styles.dettext}>{props.name}</Text>
      <Text style={styles.dettext2}>{props.data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  crdview: {
    height: 60,
    backgroundColor: colors.lightorange,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    alignItems: 'center',
    borderColor: colors.yellow,
    borderWidth: 5,
    marginVertical: 14,
  },
  dettext: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  dettext2: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '400',
  },
});

export default CustomCard;
