import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import {FlatList} from 'react-native-gesture-handler';
import CountDown from 'react-native-countdown-component';
import colors from '../../utils/colors';
import {useSelector} from 'react-redux';
import CustomButton from '../../components/customButton';
import {useFocusEffect} from '@react-navigation/native';
const WorkoutScreen = props => {
  const [time, settime] = useState(0);

  const [start, setstart] = useState(false);
  const [bttn, setbttn] = useState(false);
  const data = useSelector(value => value.activityReducer);
  const temp = data.activities;
  const temptime = data.time;
  useEffect(() => {
    // var sum = 0;
    // sum = data.activities.reduce((acc, item) => {
    //   return acc + item.time;
    // }, 0);
    // for (x in data.activities) {
    //   sum = sum + x.time;
    // }

    // if (!data.activities) {
    //   setitem(emp);
    // } else {
    //   setitem(emp[1]);
    // }
    // var sum = item.time;
    // React.useCallback(() => {
    //   alert(data.time);
    //   settime(data.time);
    // }, []),
    alert(data.time);
    settime(data.time);
    //settime(sum);
  });

  return (
    <View style={styles.container}>
      <View style={styles.headsec}>
        <View style={styles.headtxtsec}>
          <Text style={styles.text}>Workout Queue</Text>
        </View>
        <View style={styles.headbttnsec}>
          <TouchableOpacity
            style={styles.bttn}
            onPress={() => {
              props.navigation.navigate('AddWorkout');
            }}>
            <Image source={assets.plus} style={styles.bttnimg} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.listsec}>
        <View
          style={{
            flex: 0.3,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 30,
          }}>
          <CountDown
            size={15}
            until={time}
            onFinish={() => alert('Finished')}
            digitStyle={{
              backgroundColor: colors.red,
              borderWidth: 2,
              borderColor: colors.white,
            }}
            digitTxtStyle={{color: colors.white}}
            timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
            separatorStyle={{color: colors.yellow}}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{m: null, s: null}}
            showSeparator
            running={start}
          />
          <CustomButton
            onPress={() => {
              setstart(!start);
              setbttn(!bttn);
            }}
            name={bttn ? 'Pause' : 'Start'}
            btnstyle={StyleSheet.create({width: '60%'})}
          />
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        <View style={{flex: 0.7, marginTop: 20, paddingBottom: 100}}>
          <FlatList
            data={data.activities}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.flview}>
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
          {/* <TouchableOpacity style={styles.flview}>
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
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default WorkoutScreen;
