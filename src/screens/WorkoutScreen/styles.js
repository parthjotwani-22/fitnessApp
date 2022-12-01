import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
  },
  headsec: {
    flex: 0.15,
    flexDirection: 'row',
  },
  headtxtsec: {
    flex: 0.7,
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  headbttnsec: {
    flex: 0.3,
    justifyContent: 'center',
  },
  bttn: {
    height: '50%',
    width: '50%',
    borderRadius: 100,
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bttnimg: {
    height: '40%',
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.yellow,
    fontFamily: 'sans-serif-condensed',
  },
  listsec: {
    flex: 0.85,
    backgroundColor: colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  flview: {
    flex: 0.5,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 70,
    borderRadius: 10,
    backgroundColor: colors.grey,
    borderColor: colors.greyish,
    borderWidth: 3,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  fltxt: {
    fontSize: 20,
    color: colors.black,
    fontWeight: '600',
  },
  flimg: {
    height: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  txtview: {
    textAlign: 'left',
  },
});
