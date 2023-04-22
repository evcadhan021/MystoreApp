import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Black} from '../utils/warna';

const Google = () => {
  return (
    <View style={styles.utama}>
      <Image
        style={styles.logogoogle}
        source={require('../asset/image/Google.png')}
      />
      <Text style={styles.text1}>satu akun untuk seluruh Google.</Text>
      <Text style={styles.text2}>Masuk untuk melanjutkan ke Blogger</Text>
      <View style={styles.inputdata}>
        <Image
          style={styles.profile}
          source={require('../asset/icon/user.png')}
        />
      </View>
    </View>
  );
};

export default Google;

const styles = StyleSheet.create({
  utama: {
    flex: 1,
    alignItems: 'center',
  },
  logogoogle: {
    width: 150,
    height: 50,
  },
  text1: {
    fontSize: 25,
    fontFamily: 'Poppins-Light',
    fontWeight: 'normal',
    color: Black,
  },
  text2: {
    fontSize: 15,
  },
  inputdata: {
    backgroundColor: '#dfe4ea',
    width: 350,
    height: 350,
    alignItems: 'center',
  },
  profile: {
    width: 70,
    height: 70,
    // backgroundColor:'red'
  },
});
