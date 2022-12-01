import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
  },
  menu: {
    height: 50,
    width: 50,
    backgroundColor: colors.red,
    borderRadius: 100,
    justifyContent: 'center',
    position: 'absolute',
    right: 110,
    top: 10,
  },
  menuimg: {
    height: '60%',
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  headsec: {
    marginTop: 10,
    flex: 0.4,
    alignItems: 'center',
  },
  bodysec: {
    height: '90%',
    padding: '10%',
  },
  img: {
    height: '60%',
    resizeMode: 'contain',
    tintColor: colors.red,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: colors.red,
    fontFamily: 'sans-serif-condensed',
  },
  smlltext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.yellow,
    fontFamily: 'sans-serif-condensed',
    textAlign: 'left',
  },
  bview: {
    flex: 0.4,
    marginVertical: 10,
  },
  flview: {
    backgroundColor: colors.white,
    width: 200,
    margin: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  flimage: {
    height: '100%',
    width: '100%',
  },
  fltext: {
    color: colors.black,
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
});
