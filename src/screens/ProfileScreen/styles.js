import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
  },
  detview: {
    flex: 0.85,
    backgroundColor: colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  headview: {
    flex: 0.15,
    flexDirection: 'row',
  },
  menu: {
    height: 50,
    width: 50,
    backgroundColor: colors.red,
    borderRadius: 100,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  menuimg: {
    height: '60%',
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  hismlltext: {
    color: colors.white,
    fontSize: 25,
    fontWeight: '800',
    letterSpacing: 3,
  },
  smlltext: {
    color: colors.grey,
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 3,
    textDecorationLine: 'underline',
  },
  icn: {
    height: '40%',
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  nameview: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
  },
  profileimgview: {
    height: 50,
    width: 50,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.yellow,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  profileimg: {
    height: '60%',
    resizeMode: 'contain',
    tintColor: colors.yellow,
  },
  grphview: {
    flex: 0.55,
    padding: 5,
    justifyContent: 'center',
    backgroundColor: colors.darkblue,
    margin: 20,
    borderRadius: 20,
  },
  grphtxtview: {
    height: '10%',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  colection: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  part: {
    flex: 0.4,
    borderRadius: 20,
    backgroundColor: colors.darkblue,
    padding: 10,
  },
  parttxt: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.yellow,
    textAlign: 'center',
  },
  partsmlltxt: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.white,
    textAlign: 'center',
  },
});
