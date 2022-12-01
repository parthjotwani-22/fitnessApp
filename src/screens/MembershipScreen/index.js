import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import {ScrollView} from 'react-native-gesture-handler';
import colors from '../../utils/colors';
const Membership = props => {
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
        <View style={styles.headtxtview}>
          <Text style={styles.headtxt}>Membership Plan's</Text>
        </View>
      </View>
      <View style={styles.detview}>
        <ScrollView style={{marginTop: 20, overflow: 'hidden'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.sec3}
            onPress={() => {
              props.navigation.navigate('Payment');
            }}>
            <View style={styles.subsec3}>
              <Text style={styles.hismlltext}>Basic</Text>
              <Text style={styles.smlltext}>$5.00</Text>
            </View>
            <View style={{flex: 0.8, padding: 20}}>
              <Text style={styles.smlltext}>Benefits :</Text>
              <View style={styles.part}>
                <Image style={styles.pointimg} source={assets.point} />
                <Text style={styles.smlltext}>
                  Access to FD Gym for 3 months
                </Text>
              </View>
              <View style={styles.part}>
                <Image style={styles.pointimg} source={assets.point} />
                <Text style={styles.smlltext}>Access to FD App Features</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.sec1}
            onPress={() => {
              props.navigation.navigate('Payment');
            }}>
            <View style={styles.subsec1}>
              <Text style={styles.hismlltext}>Premium</Text>
              <Text style={styles.smlltext}>$7.50</Text>
            </View>
            <View style={{flex: 0.8, padding: 20}}>
              <Text style={styles.smlltext}>Benefits :</Text>
              <View style={styles.part}>
                <Image style={styles.pointimg} source={assets.point} />
                <Text style={styles.smlltext}>
                  Access to FD Gym for 5 months
                </Text>
              </View>
              <View style={styles.part}>
                <Image style={styles.pointimg} source={assets.point} />
                <Text style={styles.smlltext}>
                  Access to Premium FD App Features
                </Text>
              </View>
              <View style={styles.part}>
                <Image style={styles.pointimg} source={assets.point} />
                <Text style={styles.smlltext}>
                  15 Days Personnel Trainer every month
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.sec2}
            onPress={() => {
              props.navigation.navigate('Payment');
            }}>
            <View style={styles.subsec2}>
              <Text style={styles.hismlltext}>Pro</Text>
              <Text style={styles.smlltext}>$15</Text>
            </View>
            <View style={{flex: 0.8, padding: 20}}>
              <Text style={styles.smlltext}>Benefits :</Text>
              <View style={styles.part}>
                <Image style={styles.pointimg} source={assets.point} />
                <Text style={styles.smlltext}>
                  Access to FD Gym for 10 months
                </Text>
              </View>
              <View style={styles.part}>
                <Image style={styles.pointimg} source={assets.point} />
                <Text style={styles.smlltext}>
                  Premium FD app features and Gym kit
                </Text>
              </View>
              <View style={styles.part}>
                <Image style={styles.pointimg} source={assets.point} />
                <Text style={styles.smlltext}>All Days Personnel Trainer</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Membership;
