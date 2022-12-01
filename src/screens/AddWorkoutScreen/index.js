import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/customButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  activityAdded,
  clear,
  clearActivity,
} from '../../services/redux/addactivity/action';
const AddWorkout = props => {
  const orgdata = useSelector(value => value.activityReducer);
  const [data, setdata] = useState(orgdata.activities);
  const [time, settime] = useState(orgdata.time);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  console.log(data);
  const check = x => {
    if (orgdata.activities.includes(x)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.headsec}>
        <View style={{flex: 0.3}}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Image source={assets.point} style={styles.bcimg} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.7}}>
          <Text style={styles.text}>Add Activities</Text>
        </View>
      </View>
      <View style={styles.listsec}>
        <View style={{paddingVertical: 30, flex: 1}}>
          <FlatList
            data={assets.exe}
            renderItem={({item}) => (
              <TouchableOpacity
                style={check(item) ? styles.flinview : styles.flview}
                onPress={() => {
                  // if (item.sel == false) {
                  //   item.sel = true;
                  // } else {
                  //   item.sel = false;
                  // }
                  if (check(item)) {
                    var temp = data.filter(function (e) {
                      return e.key !== item.key;
                    });
                    setdata(temp);
                    var temptime = time - item.time;
                    settime(temptime);
                    dispatch(activityAdded(temp, temptime));
                  } else {
                    var x = data;
                    x.push(item);
                    setdata(x);
                    var temptime = time + item.time;
                    settime(temptime);
                    dispatch(activityAdded(x, temptime));
                  }
                }}>
                <View style={{flex: 0.25}}>
                  <Image source={item.img} style={styles.flimg} />
                </View>
                <View style={{flex: 0.75, marginLeft: 10}}>
                  <Text style={styles.fltxt}>{item.data}</Text>
                  <View
                    style={{
                      alignSelf: 'flex-end',
                      flexDirection: 'row',
                      marginTop: 15,
                    }}>
                    <Text>Tap to know More </Text>
                    <Image
                      source={assets.arrow}
                      style={{height: '40%', width: '10%', marginTop: 5}}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <CustomButton
            name={'Add'}
            onPress={() => {
              props.navigation.navigate('Workout');
            }}
          />
        </View>
        <View>
          <CustomButton
            name={'Clear'}
            onPress={() => {
              setdata([]);
              dispatch(clear());
              // for (x in assets.exe) {
              //   x.sel == false;
              // }
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AddWorkout;
