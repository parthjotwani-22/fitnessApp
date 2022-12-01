import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import colors from '../utils/colors';
import assets from '../utils/assets';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView, VibrancyView} from '@react-native-community/blur';
import CustomButton from '../components/customButton';
import {useDispatch} from 'react-redux';
import {logout} from '../services/redux/login/action';
import thunk from 'redux-thunk';

const CustomDrawer = props => {
  const [options, setoptions] = useState([
    {key: 1, path: 'Home', name: 'Home'},
    {key: 2, path: 'Profile', name: 'Membership'},
  ]);
  const [crr, setcrr] = useState({
    Home: true,
    Membership: false,
  });
  const dispatch = useDispatch();
  let check = {};

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Image source={assets.logo} style={styles.img} />
      </View>
      <View style={styles.lsview}>
        <TouchableOpacity
          style={crr.Home ? styles.acbttn : styles.bttn}
          onPress={() => {
            props.navigation.navigate('Home'),
              setcrr({Home: true, Membership: false});
          }}>
          <View style={{flex: 0.3}}>
            <Image
              source={assets.home}
              style={crr.Home ? styles.acsmllimg : styles.smllimg}
            />
          </View>
          <View style={{flex: 0.7}}>
            <Text style={crr.Home ? styles.acsmlltext : styles.smlltext}>
              Home
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={crr.Membership ? styles.acbttn : styles.bttn}
          onPress={() => {
            props.navigation.navigate('Membership'),
              setcrr({Home: false, Membership: true});
          }}>
          <View style={{flex: 0.3}}>
            <Image
              source={assets.home}
              style={crr.Membership ? styles.acsmllimg : styles.smllimg}
            />
          </View>
          <View style={{flex: 0.7}}>
            <Text style={crr.Membership ? styles.acsmlltext : styles.smlltext}>
              Membership
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.btview}>
        <CustomButton
          name={'Logout'}
          onPress={() => {
            dispatch(logout());
            props.navigation.navigate('Login');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  header: {
    flex: 0.4,
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.yellow,
    fontFamily: 'sans-serif-condensed',
    textAlign: 'center',
  },
  smlltext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.black,
    fontFamily: 'sans-serif-condensed',
  },
  acsmlltext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.yellow,
    fontFamily: 'sans-serif-condensed',
  },
  img: {
    height: '60%',
    resizeMode: 'contain',
    tintColor: colors.yellow,
    alignSelf: 'center',
  },
  smllimg: {
    height: '100%',
    resizeMode: 'contain',
    tintColor: colors.black,
  },
  acsmllimg: {
    height: '100%',
    resizeMode: 'contain',
    tintColor: colors.yellow,
  },
  lsview: {
    flex: 0.4,
  },
  btview: {
    flex: 0.2,
    width: '100%',
    justifyContent: 'center',
  },
  bttn: {
    height: '25%',
    backgroundColor: colors.grey,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 20,
  },
  acbttn: {
    height: '25%',
    backgroundColor: colors.darkblue,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 20,
  },
});

{
  /* <FlatList
          data={options}
          style={{flex: 1}}
          renderItem={({item}) => (
            <TouchableOpacity
              style={crr[item.name] ? styles.acbttn : styles.bttn}
              onPress={() => {
                props.navigation.navigate(item.path);
              }}>
              <View style={{flex: 0.3}}>
                <Image
                  source={assets.home}
                  style={crr[item.name] ? styles.acsmllimg : styles.smllimg}
                />
              </View>
              <View style={{flex: 0.7}}>
                <Text
                  style={crr[item.name] ? styles.acsmlltext : styles.smlltext}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        /> */
}
export default CustomDrawer;
