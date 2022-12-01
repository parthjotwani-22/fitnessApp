import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
  },
  headsec: {
    flex: 0.2,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: colors.yellow,
    fontFamily: 'sans-serif-condensed',
  },
  smlltext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.yellow,
    fontFamily: 'sans-serif-condensed',
    textAlign: 'center',
  },
  inpsec: {
    flex: 0.5,
    marginVertical: 10,
  },
  bottomsec: {
    flex: 0.3,
    paddingTop: '15%',
    paddingHorizontal: '10%',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
});
