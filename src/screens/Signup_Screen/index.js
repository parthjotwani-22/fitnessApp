import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import validation from '../../utils/validate';
import {useDispatch} from 'react-redux';
import {loginSuccessfull} from '../../services/redux/login/action';
import Snackbar from 'react-native-snackbar';

const SignupScreen = props => {
  const [data, setdata] = useState({
    name: null,
    email: null,
    phone: null,
    pass: null,
  });
  const [err, seterr] = useState({
    name: null,
    email: null,
    phone: null,
    pass: null,
  });
  const [see, setsee] = useState(false);

  const dispatch = useDispatch();

  const valid = () => {
    validation(data).then(msg => {
      if (msg.status == 1) {
        apicall();
      } else {
        setsee(true);
        seterr(msg.error);
      }
    });
    validation(data).catch(err => {
      console.log(err);
    });
  };
  const apicall = () => {
    fetch('https://638463d63fa7acb14ff31db1.mockapi.io/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(() => props.navigation.navigate('Login'))
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={styles.headsec}>
          <Text style={styles.text}>Signup</Text>
          <View style={{marginVertical: '5%'}}>
            <Text style={styles.smlltext}>
              {' '}
              Start your journey and achieve your {'\n'} desired physique
            </Text>
          </View>
        </View>
        <View style={styles.inpsec}>
          <CustomInput
            name={'Name'}
            plac={'abcdefg'}
            onChangeText={text => {
              setdata({...data, name: text});
            }}
          />
          {see && (
            <Text style={{color: colors.red, marginLeft: 40}}>{err.name}</Text>
          )}
          <CustomInput
            name={'Email'}
            plac={'abcd@gmail.com'}
            onChangeText={text => {
              setdata({...data, email: text});
            }}
          />
          {see && (
            <Text style={{color: colors.red, marginLeft: 40}}>{err.email}</Text>
          )}
          <CustomInput
            name={'Phone no'}
            plac={'1234567890'}
            onChangeText={text => {
              setdata({...data, phone: text});
            }}
          />
          {see && (
            <Text style={{color: colors.red, marginLeft: 40}}>{err.phone}</Text>
          )}
          <CustomInput
            name={'Password'}
            onChangeText={text => {
              setdata({...data, pass: text});
            }}
          />
          {see && (
            <Text style={{color: colors.red, marginLeft: 40}}>{err.pass}</Text>
          )}
        </View>

        <LinearGradient colors={colors.grad2} style={styles.bottomsec}>
          <CustomButton
            name={'Signup'}
            onPress={() => {
              // valid().then(props => {
              //   dispatch(loginSuccessfull(data));
              //   props.navigation.navigate('HomeTab');
              // });
              valid();
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
              props.navigation.navigate('Login');
            }}>
            <Text style={styles.smlltext}>
              {' '}
              <Text style={{color: colors.black}}>
                {' '}
                Already have an account ?
              </Text>{' '}
              Login
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
