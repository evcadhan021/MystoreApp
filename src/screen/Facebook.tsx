import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Black, Primary} from '../utils/warna';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';

const Facebook = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.utama}>
      <TouchableOpacity onPress={() => navigation.replace('Login')}>
        <View style={styles.view}>
          <Image
            style={styles.back}
            source={require('../asset/icon/back.png')}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.pertama}>
        <Image style={styles.fb} source={require('../asset/icon/fb.png')} />
        <Text style={styles.bahasa}>
          Bahasa Indonesia - Espanol -
          <TouchableOpacity>
            <Text style={styles.more}> More...</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <View style={styles.kedua}>
        <View>
          <TextInput
            style={styles.textinput}
            placeholder="Email or Phone"></TextInput>
        </View>
        <View>
          <TextInput
            style={styles.textinput2}
            placeholder="Password"></TextInput>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.ketiga}>
          <Text style={styles.login}>Log in</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.create}>
          <Text style={styles.account}>CREATE NEW FACEBOOK ACCOUNT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Facebook;

const styles = StyleSheet.create({
  utama: {
    flex: 1,
    backgroundColor: '#1e3799',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    backgroundColor: 'silver',
    borderRadius: 5,
    bottom: 130,
    right: 150,
    padding: 10,
  },
  back: {
    width: 30,
    height: 25,
  },
  pertama: {
    alignItems: 'center',
    bottom: 70,
  },
  fb: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  bahasa: {
    color: 'white',
    fontFamily: 'normal',
  },
  more: {
    color: 'silver',
    top: 3,
  },
  kedua: {
    marginTop: 50,
    marginBottom: 50,
    bottom: 30,
  },
  textinput: {
    width: 350,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  textinput2: {
    width: 350,
    height: 50,
    backgroundColor: 'white',
    top: 10,
    borderRadius: 6,
  },
  ketiga: {
    backgroundColor: 'blue',
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
  },
  login: {
    color: 'white',
  },
  forgot: {
    color: 'white',
  },
  create: {
    backgroundColor: '#1e3799',
    width: 350,
    height: 40,
    top: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  account: {
    color: 'white',
    // fontWeight:'bold'
  },
});
