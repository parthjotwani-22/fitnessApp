import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from 'react-native';
import colors from '../../utils/colors';
import styles from './styles';
import assets from '../../utils/assets';
import CustomButton from '../../components/customButton';
import validcard from '../../utils/validatecard';
const Payment = props => {
  const [data, setdata] = useState({
    numb: null,
    name: null,
    expire: null,
    cvv: null,
  });
  const [err, seterr] = useState({
    numb: null,
    name: null,
    expire: null,
    cvv: null,
  });
  const [see, setsee] = useState(false);
  const valid = () => {
    validcard(data).then(msg => {
      if (msg.status == 1) {
        seterr({numb: null, name: null, expire: null, cvv: null});
        props.navigation.navigate('Membership');
        //setdata({numb: null, name: null, expire: null, cvv: null});
      } else {
        setsee(true);
        seterr(msg.error);
      }
    });
    validcard(data).catch(err => {
      console.log(err);
    });
  };
  return (
    <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => {
          props.navigation.goBack();
        }}>
        <Image style={styles.backimg} source={assets.point} />
      </TouchableOpacity>
      <View style={styles.amtview}>
        <Text style={styles.smllamttxt}>Total amount</Text>
        <Text style={styles.amttxt}>$5.00</Text>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={styles.detview}>
        <Text style={styles.dettxt}>Enter Card Details :</Text>
        <View style={styles.smlldetview}>
          <Text style={styles.smlldettxt}>Card Number</Text>
          <TextInput
            style={styles.inp}
            placeholder={'XXXX XXXX XXXX XXXX'}
            maxLength={19}
            value={data.numb}
            onChangeText={text => {
              setdata({
                ...data,
                numb: text
                  .replace(/[^0-9]/g, '')
                  .replace(/\W/gi, '')
                  .replace(/(.{4})/g, '$1 '),
              });
            }}
          />
          {see && <Text style={{color: colors.red}}>{err.numb}</Text>}
        </View>
        <View style={styles.smlldetview}>
          <Text style={styles.smlldettxt}>Card Holder's Name</Text>
          <TextInput
            style={styles.inp}
            placeholder={'Name on card'}
            maxLength={35}
            onChangeText={text => {
              setdata({...data, name: text});
            }}
          />
          {see && <Text style={{color: colors.red}}>{err.name}</Text>}
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.smlldetview}>
            <Text style={styles.smlldettxt}>Expires on</Text>
            <TextInput
              style={styles.inp}
              placeholder={'MM/YY'}
              keyboardType={'number-pad'}
              onChangeText={text => {
                setdata({...data, expire: text});
              }}
            />
            {see && <Text style={{color: colors.red}}>{err.expire}</Text>}
          </View>
          <View style={styles.smlldetview}>
            <Text style={styles.smlldettxt}>3-Digit CVV</Text>
            <TextInput
              style={styles.inp}
              placeholder={'Number at the back'}
              maxLength={3}
              secureTextEntry={true}
              keyboardType={'decimal-pad'}
              onChangeText={text => {
                setdata({...data, cvv: text});
              }}
            />
            {see && <Text style={{color: colors.red}}>{err.cvv}</Text>}
          </View>
        </View>
        <CustomButton
          name={'Proceed Payment'}
          onPress={() => {
            valid();
          }}
        />
      </ScrollView>
    </ScrollView>
  );
};

export default Payment;
