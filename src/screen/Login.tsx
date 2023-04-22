import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import {Black, Primary, White} from '../utils/warna';
import {Poppins} from '../router';
import {RootStackParams} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.utama}>
      <View style={styles.pertama}>
        <TouchableOpacity>
          <Text style={styles.r}>尺</Text>
        </TouchableOpacity>
        <Text style={styles.login}>Login to • 几ᗪ卂几.丂ㄒㄖ尺乇 •</Text>
      </View>
      <View style={styles.kedua}>
        <View style={styles.bungkus1}>
          <Image
            style={styles.user}
            source={require('../asset/icon/user.png')}
          />
          <TextInput
            style={styles.username}
            placeholder=" username"></TextInput>
        </View>
        <View style={styles.bungkus2}>
          <Image
            style={styles.user}
            source={require('../asset/icon/padlock.png')}
          />
          <TextInput
            style={styles.password}
            placeholder=" password"></TextInput>
        </View>
      </View>
      <View style={styles.ketiga}>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.keempat}>
          <Text style={styles.button}>Login</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.kelima}>
        <TouchableOpacity onPress={() => navigation.replace('Facebook')}>
          <Image
            style={styles.facebook}
            source={require('../asset/icon/facebook.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Google')}>
          <Image
            style={styles.google}
            source={require('../asset/icon/google-plus.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.apple}
            source={require('../asset/icon/apple.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.keenam}>
        <Text style={styles.akun}>Don’t have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.have}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bungkusgaris}>
        <View style={styles.garis}></View>
        <Text style={styles.text}> Or </Text>
        <View style={styles.garis2}></View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  utama: {
    flex: 1,
  },
  pertama: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 60,
  },
  r: {
    fontSize: 40,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    color: White,
    backgroundColor: Primary,
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 50,
  },
  login: {
    top: 105,
    color: 'black',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
  },
  kedua: {
    top: 200,
  },
  bungkus1: {
    borderWidth: 1,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 16,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: White,
  },
  bungkus2: {
    borderWidth: 1,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 16,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    top: 15,
    backgroundColor: White,
  },
  user: {
    width: 15,
    height: 15,
  },
  username: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    paddingLeft: 5,
    width: '95%',
  },
  password: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    paddingLeft: 5,
    width: '95%',
  },
  ketiga: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 230,
  },
  forgot: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: Black,
  },
  keempat: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 250,
    backgroundColor: Primary,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 16,
    padding: 15,
  },
  button: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: White,
  },
  kelima: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: 300,
  },
  facebook: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  google: {
    width: 45,
    height: 45,
  },
  apple: {
    width: 45,
    height: 45,
  },
  keenam: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 340,
  },
  akun: {
    fontSize: 14,
    color: Black,
    fontFamily: 'Poppins-Medium',
  },
  have: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'blue',
  },
  bungkusgaris: {
    flexDirection: 'row',
    // backgro`undColor:'yellow',
    top: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  garis: {
    borderWidth: 1,
    width: 175,
  },
  garis2: {
    borderWidth: 1,
    width: 175,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
  },
});
