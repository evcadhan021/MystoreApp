import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {Black, Primary, White} from '../utils/warna';
import {Poppins} from '../router';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  setTimeout(() => {
    navigation.replace('Login');
  }, 2500);
  return (
    <View style={styles.utama}>
      <View style={styles.pertama}>
        <Text style={styles.splash}>几ᗪ卂几.丂ㄒㄖ尺乇</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  utama: {
    flex: 1,
    backgroundColor: Primary,
  },
  pertama: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  splash: {
    fontSize: 42,
    // fontFamily:'Poppins-SemiBold',
    color: White,
    fontWeight: 'bold',
  },
});
