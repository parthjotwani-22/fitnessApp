import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import assets from '../../utils/assets';
import colors from '../../utils/colors';
import CustomButton from '../../components/customButton';
import CustomCard from '../../components/customCard';
import {FlatList} from 'react-native-gesture-handler';
const Details = props => {
  const data = useSelector(value => value.userReducer);
  const fields = [
    {name: 'E-mail', data: data.loginData.email, key: 1},
    {name: 'Phone', data: data.loginData.phone, key: 2},
    {name: 'Subscription', data: 'PRO', key: 3},
    {name: 'Start Date', data: '22-11-2022', key: 4},
    {name: 'End Date', data: '23-12-2022', key: 5},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={{flex: 0.2}}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Image style={styles.backimg} source={assets.point} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.8, paddingLeft: 20}}>
          <Text style={styles.Text}>Details</Text>
        </View>
      </View>
      <View style={styles.nameview}>
        <View style={styles.nameimgview}>
          <View style={styles.profileimgview}>
            <Image source={assets.person} style={styles.profileimg} />
          </View>
        </View>
        <View style={styles.nametxtview}>
          <Text style={styles.nametxt}>Hi,</Text>
          <Text style={styles.nametxt}>{data.loginData.name}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.detview}>
          <FlatList
            data={fields}
            renderItem={({item}) => (
              <CustomCard name={item.name} data={item.data} />
            )}
          />
          {/* <Text style={styles.dettext}> E-mail: {data.loginData.email}</Text>
          <Text style={styles.dettext}> Phone: {data.loginData.phone}</Text> */}
        </View>
        <TouchableOpacity
          style={styles.editbttn}
          onPress={() => {
            props.navigation.navigate('Edit');
          }}>
          <Text style={styles.dettext}>EDIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
