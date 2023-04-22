import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {Black, Primary, White} from '../utils/warna';
import {RootStackParams} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const Product = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.utama}>
      <View style={styles.pertama}>
        <TouchableOpacity>
          <Image
            style={styles.back}
            source={require('../asset/icon/back.png')}
          />
        </TouchableOpacity>
        {/* <Text style={styles.header}>Categories</Text> */}
        <TouchableOpacity>
          <View style={styles.bungkusicon}>
            <Image
              style={styles.cari}
              source={require('../asset/icon/keranjang.png')}
            />
            <Image
              style={styles.titikbiru}
              source={require('../asset/icon/titikbiru.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.kedua}>
        <Image
          style={styles.bergaya}
          source={require('../asset/image/bergaya.png')}
        />
        <View style={styles.bungkus2}>
          <View style={styles.bungkusteks}>
            <TouchableOpacity>
              <Text style={styles.zipper}>Black Zipper</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.rs}>Rs. 1,299</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View style={styles.bungkusicon2}>
              <Text style={styles.angka}>4.0/5</Text>
              <Image
                style={styles.bintang}
                source={require('../asset/icon/bintang.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.replace('Productpage')}>
        <View style={styles.ketiga}>
          <Text style={styles.add}>Add to cart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  utama: {
    flex: 1,
  },
  pertama: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor:'red',
    backgroundColor: '#F9FAFB',
    paddingBottom: 14,
    paddingTop: 14,
  },
  back: {
    width: 18.41,
    height: 15.41,
    right: 76,
  },
  // header: {
  // fontSize:20,
  // fontFamily:'Poppins-SemiBold',
  // },
  cari: {
    width: 19,
    height: 19,
  },
  bungkusicon: {
    flexDirection: 'row',
    left: 76,
  },
  titikbiru: {
    width: 8,
    height: 8,
    right: 5,
  },
  kedua: {
    // backgroundColor:'yellow',
    left: 35,
    top: 10,
  },
  bergaya: {
    width: 366,
    height: 581,
    borderRadius: 16,
  },
  bungkusteks: {
    flexDirection: 'column',
    backgroundColor: 'puple',
  },
  zipper: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 22,
    color: Black,
  },
  rs: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 20,
    bottom: 5,
  },
  bungkusicon2: {
    flexDirection: 'row',
    left: 160,
  },
  angka: {
    color: Primary,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 18.64,
  },
  bintang: {
    width: 19.56,
    height: 18.68,
  },
  bungkus2: {
    flexDirection: 'row',
    top: 5,
  },
  ketiga: {
    backgroundColor: Primary,
    width: 366,
    height: 64,
    left: 35,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
  },
  add: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    fontSize: 18,
  },
});
