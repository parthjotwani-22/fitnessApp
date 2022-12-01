import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  head: {
    flex: 0.15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  nameview: {
    flex: 0.15,
    flexDirection: 'row',
    backgroundColor: colors.yellow,
    borderRadius: 30,
  },
  nameimgview: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nametxtview: {
    flex: 0.7,
    justifyContent: 'center',
  },
  nametxt: {
    fontSize: 30,
    color: colors.white,
    fontWeight: 'bold',
  },
  details: {
    flex: 0.65,
    backgroundColor: colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  Text: {
    color: colors.yellow,
    fontSize: 40,
    fontWeight: '700',
  },
  detview: {
    flex: 0.8,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  profileimgview: {
    height: 70,
    width: 70,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.offwhite,
    borderRadius: 70 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileimg: {
    height: '60%',
    resizeMode: 'contain',
    tintColor: colors.yellow,
  },
  back: {
    height: 50,
    width: 50,
    backgroundColor: colors.red,
    borderRadius: 100,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  backimg: {
    height: '60%',
    resizeMode: 'contain',
    tintColor: colors.white,
    transform: [{rotate: '180deg'}],
  },
  editbttn: {
    flex: 0.2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: colors.yellow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dettext: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
});
