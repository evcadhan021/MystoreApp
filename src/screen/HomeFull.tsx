import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Black, White} from '../utils/warna';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';

const HomeFull = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.utama}>
      <View style={styles.pertama}>
        <TouchableOpacity>
          <Image
            style={styles.vector1}
            source={require('../asset/icon/Vector.png')}
          />
        </TouchableOpacity>
        <Text style={styles.header}>几ᗪ卂几.丂ㄒㄖ尺乇</Text>
        <TouchableOpacity>
          <Image
            style={styles.vector2}
            source={require('../asset/icon/Vector1.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.kedua}>
        <Image
          style={styles.searching}
          source={require('../asset/icon/search.png')}
        />
        <TextInput
          style={styles.pencarian}
          placeholder=" Search for tshirts, jeans, shorts, jackets"></TextInput>
      </View>
      <ScrollView>
        <View style={styles.ketiga}>
          <Image
            style={styles.oliv}
            source={require('../asset/image/oliv.png')}
          />
          <View style={styles.bungkus}>
            <Text style={styles.nama}>Olive Zip-Front Jacket</Text>
            <Image
              style={styles.plus}
              source={require('../asset/icon/plus.png')}
            />
          </View>
          <Text style={styles.rs}>Rs. 3,499</Text>
        </View>
        <View style={styles.ketiga}>
          <Image
            style={styles.oliv}
            source={require('../asset/image/bomber.png')}
          />
          <View style={styles.bungkus}>
            <Text style={styles.nama}>Olive Zip-Front Jacket</Text>
            <Image
              style={styles.plus}
              source={require('../asset/icon/plus.png')}
            />
          </View>
          <Text style={styles.rs}>Rs. 3,499</Text>
        </View>
        <View style={styles.ketiga}>
          <Image
            style={styles.oliv}
            source={require('../asset/image/erigo.png')}
          />
          <View style={styles.bungkus}>
            <Text style={styles.nama}>Olive Zip-Front Jacket</Text>
            <Image
              style={styles.plus}
              source={require('../asset/icon/plus.png')}
            />
          </View>
          <Text style={styles.rs}>Rs. 3,499</Text>
        </View>
        <View style={styles.ketiga}>
          <Image
            style={styles.oliv}
            source={require('../asset/image/sukajan.png')}
          />
          <View style={styles.bungkus}>
            <Text style={styles.nama}>Olive Zip-Front Jacket</Text>
            <Image
              style={styles.plus}
              source={require('../asset/icon/plus.png')}
            />
          </View>
          <Text style={styles.rs}>Rs. 3,499</Text>
        </View>
        <View style={styles.ketiga}>
          <Image
            style={styles.oliv}
            source={require('../asset/image/parka.png')}
          />
          <View style={styles.bungkus}>
            <Text style={styles.nama}>Olive Zip-Front Jacket</Text>
            <Image
              style={styles.plus}
              source={require('../asset/icon/plus.png')}
            />
          </View>
          <Text style={styles.rs}>Rs. 3,499</Text>
        </View>
        <View style={styles.ketiga}>
          <Image
            style={styles.oliv}
            source={require('../asset/image/jaket.png')}
          />
          <View style={styles.bungkus}>
            <Text style={styles.nama}>Olive Zip-Front Jacket</Text>
            <Image
              style={styles.plus}
              source={require('../asset/icon/plus.png')}
            />
          </View>
          <Text style={styles.rs}>Rs. 3,499</Text>
        </View>
        <View style={styles.ketiga}>
          <Image
            style={styles.oliv}
            source={require('../asset/image/hoodie.png')}
          />
          <View style={styles.bungkus}>
            <Text style={styles.nama}>Olive Zip-Front Jacket</Text>
            <Image
              style={styles.plus}
              source={require('../asset/icon/plus.png')}
            />
          </View>
          <Text style={styles.rs}>Rs. 3,499</Text>
        </View>
      </ScrollView>
      <View style={styles.buttom}>
        <TouchableOpacity onPress={() => navigation.replace('Home')}>
          <Image
            style={styles.icon}
            source={require('../asset/icon/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace('Categories')}>
          <Image
            style={styles.icon}
            source={require('../asset/icon/heart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace('Checkout')}>
          <Image
            style={styles.icon}
            source={require('../asset/icon/cart.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeFull;

const styles = StyleSheet.create({
  utama: {
    flex: 1,
    backgroundColor: White,
  },
  pertama: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  vector1: {
    width: 18.67,
    height: 14,
  },
  header: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  vector2: {
    width: 19.5,
    height: 21,
  },
  kedua: {
    backgroundColor: '#EDEEEF',
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 16,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    top: 10,
    marginBottom: 10,
  },
  searching: {
    width: 15,
    height: 15,
  },
  pencarian: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    paddingLeft: 5,
    width: '95%',
  },
  ketiga: {
    justifyContent: 'center',
    left: 22,
    // top:20,
    marginBottom: 30,
    marginTop: 25,
    paddingBottom: 25,
  },
  oliv: {
    height: 273,
    width: 390,
    borderRadius: 16,
  },
  bungkus: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor:'yellow',
    top: 20,
  },
  nama: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 20,
    color: Black,
    right: 40,
  },
  plus: {
    width: 16,
    height: 16,
  },
  rs: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 18,
    left: 10,
    top: 15,
  },
  keempat: {
    justifyContent: 'center',
    left: 22,
  },
  buttom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: White,
    // bottom:40,
    height: 65,
    borderTopWidth: 1,
  },
  icon: {
    width: 28,
    height: 25,
  },
});
