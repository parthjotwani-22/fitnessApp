import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
  },
  back: {
    height: 50,
    width: 50,
    position: 'absolute',
    backgroundColor: colors.red,
    borderRadius: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    left: 20,
    top: 20,
  },
  backimg: {
    height: '60%',
    resizeMode: 'contain',
    tintColor: colors.white,
    transform: [{rotate: '180deg'}],
  },
  amtview: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  amttxt: {
    fontSize: 90,
    fontWeight: 'bold',
    color: colors.yellow,
    fontFamily: 'sans-serif-condensed',
  },
  smllamttxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
    fontFamily: 'sans-serif-condensed',
  },
  detview: {
    flex: 0.6,
    backgroundColor: colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 30,
  },
  dettxt: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.black,
    fontFamily: 'sans-serif-condensed',
  },
  smlldettxt: {
    fontWeight: '700',
    color: colors.black,
    fontFamily: 'sans-serif-condensed',
  },
  smlldetview: {
    marginHorizontal: 10,
    marginTop: 5,
    flex: 1,
  },
  inp: {
    backgroundColor: colors.offwhite,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.greyish,
    marginTop: 10,
    width: '100%',
  },
});
