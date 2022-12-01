import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
  },
  headsec: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgsec: {
    flex: 0.3,
    alignItems: 'center',
  },
  imgsize: {
    height: '97%',
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: colors.yellow,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.yellow,
    fontFamily: 'sans-serif-condensed',
  },
  textsec: {
    flex: 0.1,
  },
  bttnsec: {
    flex: 0.4,
    justifyContent: 'center',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    alignItems: 'center',
  },
});
