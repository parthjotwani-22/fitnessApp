import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import CustomInput from '../../components/customInput';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import CustomButton from '../../components/customButton';
import validlogin from '../../utils/validatelogin';
import {useDispatch} from 'react-redux';
import {loginSuccessfull} from '../../services/redux/login/action';
import Snackbar from 'react-native-snackbar';
const Loginscreen = props => {
  const [alldata, setalldata] = useState([]);
  const apicall = () => {
    fetch('https://638463d63fa7acb14ff31db1.mockapi.io/users', {method: 'GET'})
      .then(res => res.json())
      .then(val => {
        setalldata(val);
        console.log('data', alldata);
      })
      .catch(e => {
        console.log('err', e);
      });
  };

  useEffect(() => {
    apicall();
  }, []);
  const [see, setsee] = useState(false);
  const [dat, setdat] = useState({
    name: null,
    pass: null,
  });
  const [err, seterr] = useState({
    name: null,
    pass: null,
  });
  const check = data => {
    var user = alldata.find(item => {
      return item.name == dat.name && item.pass == dat.pass;
    });
    var checkobj = validlogin(dat);
    if (user) {
      setsee(false);
      dispatch(loginSuccessfull(user));
      props.navigation.navigate('HomeTab');
    } else if (!checkobj.valid) {
      seterr(checkobj.err);
      setsee(true);
      // setsee(true);
      // seterr({
      //   name: 'Enter required data',
      //   pass: 'Enter required data',
      // });
      // Snackbar.show({
      //   text: 'Enter required Credentials',
      //   duration: Snackbar.LENGTH_SHORT,
      // });
    } else {
      // setsee(true);
      seterr({
        name: null,
        pass: null,
      });
      Snackbar.show({
        text: 'User with these credentials does not exist',
        duration: Snackbar.LENGTH_SHORT,
        action: {
          text: 'Create one',
          onPress: () => {
            props.navigation.navigate('Signup');
          },
        },
      });
    }
  };
  const dispatch = useDispatch();
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={styles.headsec}>
          <Text style={styles.text}>Login</Text>
          <View style={{paddingVertical: 10, paddingTop: 20}}>
            <Text style={styles.smlltext}>
              Continue your journey to {'\n'}achieve perfect fitness
            </Text>
          </View>
        </View>
        <View style={styles.inpsec}>
          <CustomInput
            name={'User Name'}
            plac={'Enter your Username'}
            onChangeText={text => {
              setdat({...dat, name: text});
            }}
          />
          {see && (
            <Text style={{color: colors.red, fontSize: 15, marginLeft: 40}}>
              {err.name}
            </Text>
          )}
          <CustomInput
            name={'Password'}
            plac={'Enter your Password '}
            onChangeText={text => {
              setdat({...dat, pass: text});
            }}
          />
          {see && (
            <Text style={{color: colors.red, fontSize: 15, marginLeft: 40}}>
              {err.pass}
            </Text>
          )}
        </View>
        <LinearGradient colors={colors.grad2} style={styles.bottomsec}>
          <CustomButton
            name={'Login'}
            onPress={() => {
              console.log(dat);
              check(dat);
            }}
          />
          <View
            style={{
              height: 1,
              width: '100%',
              marginTop: '5%',
              backgroundColor: 'black',
            }}
          />
          <TouchableOpacity
            style={{marginTop: '5%'}}
            onPress={() => {
              props.navigation.navigate('Signup');
            }}>
            <Text style={styles.smlltext}>
              {' '}
              <Text style={{color: colors.black}}>
                {' '}
                Dont have an account ?
              </Text>{' '}
              Signup
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default Loginscreen;
