import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Modal,
} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import assets from '../../utils/assets';
import colors from '../../utils/colors';
import CustomButton from '../../components/customButton';
import CustomCard from '../../components/customCard';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import CustomInput from '../../components/customInput';
const Edit = props => {
  const data = useSelector(value => value.userReducer);
  const [mod, setmod] = useState(false);
  const fields = [
    {name: 'E-mail', data: data.loginData.email, key: 1},
    {name: 'Phone', data: data.loginData.phone, key: 2},
    {name: 'Subscription', data: 'PRO', key: 3},
    {name: 'Start Date', data: '22-11-2022', key: 4},
    {name: 'End Date', data: '23-12-2022', key: 5},
  ];
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <Modal visible={mod} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#000000a1',
          }}>
          <View style={styles.contentContainer}>
            <View style={styles.optionTab}>
              <View
                style={{
                  flex: 0.2,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Text style={styles.modtext1}>Select Image</Text>
                <Text>Select profile photo for your account</Text>
              </View>
              <View style={styles.modoptions}>
                <TouchableOpacity style={styles.modbttn}>
                  <Text style={styles.modtext2}>Select from gallery</Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderBottomColor: colors.grey,
                    borderBottomWidth: 0.5,
                  }}
                />
                <TouchableOpacity style={styles.modbttn}>
                  <Text style={styles.modtext2}>Open Camera</Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderBottomColor: colors.grey,
                    borderBottomWidth: 0.5,
                  }}
                />
                <TouchableOpacity style={styles.modbttn}>
                  <Text style={styles.modtext2}>Clear</Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderBottomColor: colors.grey,
                    borderBottomWidth: 0.5,
                  }}
                />
              </View>
              <View style={styles.modcancel}>
                <CustomButton
                  name={'Cancel'}
                  onPress={() => {
                    setmod(false);
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
          <TouchableOpacity
            style={styles.profileimgview}
            onPress={() => {
              setmod(true);
            }}>
            <Image source={assets.person} style={styles.profileimg} />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 2,
                backgroundColor: colors.yellow,
                borderWidth: 2,
                borderColor: colors.white,
                borderRadius: 15,
                padding: 2,
              }}>
              <Image
                source={assets.edit}
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                  tintColor: colors.white,
                }}></Image>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.nametxtview}>
          <Text style={styles.nametxt}>Name:</Text>
          <TextInput
            placeholder={data.loginData.name}
            style={{
              padding: 10,
              height: 40,
              width: '80%',
              borderRadius: 10,
              backgroundColor: colors.lightorange,
            }}
          />
          {/* <Text style={styles.nametxt}>{data.loginData.name}</Text> */}
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.detview}>
          <FlatList
            data={fields}
            renderItem={({item}) => (
              <CustomInput plac={item.data} name={item.name} />
            )}
          />
          {/* <Text style={styles.dettext}> E-mail: {data.loginData.email}</Text>
          <Text style={styles.dettext}> Phone: {data.loginData.phone}</Text> */}
        </View>
        <TouchableOpacity style={styles.editbttn}>
          <Text style={styles.dettext}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Edit;
