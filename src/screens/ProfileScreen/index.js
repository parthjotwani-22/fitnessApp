import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import colors from '../../utils/colors';
import {BarChart} from 'react-native-chart-kit';
import {useSelector} from 'react-redux';
const ProfileScreen = props => {
  const chartConfig = {
    backgroundGradientFrom: colors.darkblue,
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: colors.darkblue,
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(247, 202, 24, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.8,
    useShadowColorFromDataset: false, // optional
    fillShadowGradient: colors.yellow,
    fillShadowGradientOpacity: 1,
  };
  const data = useSelector(value => value.userReducer);

  return (
    <View style={styles.container}>
      <View style={styles.headview}>
        <View style={{flex: 0.2, justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.menu}
            onPress={() => {
              props.navigation.openDrawer();
            }}>
            <Image source={assets.menu} style={styles.menuimg} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.8,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 0.8,
              justifyContent: 'center',
              paddingLeft: 5,
            }}>
            <TouchableOpacity
              style={styles.nameview}
              onPress={() => {
                props.navigation.navigate('Details');
              }}>
              <View>
                <Text style={styles.hismlltext}>Hello,</Text>
                <Text style={styles.smlltext}>{data.loginData.name}</Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Image style={styles.icn} source={assets.edit} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.3, justifyContent: 'center'}}>
            <TouchableOpacity style={styles.profileimgview}>
              <Image style={styles.profileimg} source={assets.person} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.detview}>
        <View style={styles.grphview}>
          <View style={styles.grphtxtview}>
            <Text style={styles.hismlltext}>Calorie Chart</Text>
          </View>
          <BarChart
            data={assets.calories}
            width={290}
            height={250}
            yAxisSuffix="Cal"
            chartConfig={chartConfig}
            verticalLabelRotation={30}></BarChart>
        </View>
        <View style={styles.colection}>
          <View style={styles.part}>
            <Text style={styles.parttxt}>BMI</Text>
            <Text style={styles.partsmlltxt}>20.8</Text>
          </View>
          <View style={styles.part}>
            <Text style={styles.parttxt}>Days</Text>
            <Text style={styles.partsmlltxt}>46</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
