import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  BackHandler,
  ScrollView,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import {BlurView, VibrancyView} from '@react-native-community/blur';
import {color} from 'react-native-reanimated';
import colors from '../../utils/colors';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = props => {
  const [articles, setarticles] = useState([
    {key: 1, data: 'Benefits of doing yoga', img: assets.yoga},
    {key: 2, data: 'Food with high protein', img: assets.protein},
    {key: 3, data: 'Easy ways to loose weight', img: assets.weight},
  ]);
  const [gyms, setgyms] = useState([
    {key: 1, data: 'Fitness Destination Gym', img: assets.gym},
    {key: 2, data: 'SFW Gym', img: assets.gym},
    {key: 3, data: 'Your Fitness Gym', img: assets.gym},
  ]);
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground source={assets.homebgimg} style={styles.container}>
        <View style={styles.headsec}>
          <View style={{zIndex: 1, position: 'absolute'}}>
            <TouchableOpacity
              style={styles.menu}
              onPress={() => {
                props.navigation.openDrawer();
              }}>
              <Image source={assets.menu} style={styles.menuimg} />
            </TouchableOpacity>
          </View>
          <Image source={assets.logo} style={styles.img}></Image>
          <View style={{marginVertical: '2%'}}>
            <Text style={styles.text}>Fitness Destination</Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.7,
            overflow: 'hidden',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}>
          <BlurView
            blurAmount={20}
            blurType="light"
            style={{height: '100%', width: '100%'}}>
            <View style={styles.bodysec} collapsable={false}>
              <View style={styles.bview}>
                <Text style={styles.smlltext}>Articles for you</Text>
                <FlatList
                  horizontal
                  data={articles}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => (
                    <TouchableOpacity style={styles.flview}>
                      <View style={{flex: 0.8}}>
                        <Image source={item.img} style={styles.flimage}></Image>
                      </View>
                      <View style={{flex: 0.2, padding: 5}}>
                        <Text style={styles.fltext}>{item.data}</Text>
                      </View>
                    </TouchableOpacity>
                  )}></FlatList>
              </View>
              <View style={styles.bview}>
                <Text style={styles.smlltext}>Gyms for you</Text>
                <FlatList
                  horizontal
                  data={gyms}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => (
                    <TouchableOpacity style={styles.flview}>
                      <View style={{flex: 0.8}}>
                        <Image source={item.img} style={styles.flimage}></Image>
                      </View>
                      <View style={{flex: 0.2, padding: 5}}>
                        <Text style={styles.fltext}>{item.data}</Text>
                      </View>
                    </TouchableOpacity>
                  )}></FlatList>
              </View>
            </View>
          </BlurView>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default HomeScreen;
