import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Black, Primary, White} from '../utils/warna';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';

const Categories = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View>
      <View style={styles.pertama}>
        <TouchableOpacity onPress={() => navigation.replace('Home')}>
          <Image
            style={styles.back}
            source={require('../asset/icon/back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Categories</Text>
        <TouchableOpacity>
          <Image
            style={styles.cari}
            source={require('../asset/icon/cari.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.kedua}>
        <TouchableOpacity>
          <Text style={styles.men}>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.woman}>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.kids}>Kids</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.garisungu}></View>
      <TouchableOpacity>
        <View style={styles.ketiga}>
          {/* <Image 
        style={styles.icon2}
        source={require('../asset/icon/Polygon 2.png')}/>
        <Image 
        style={styles.icon1}
        source={require('../asset/icon/Polygon 1.png')}/> */}
          <Text style={styles.sale}>SEASON SALE</Text>
          <Text style={styles.up}>UP TO 25% OFF</Text>
          <Text style={styles.terms}>Terms & Conditions apply*</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.bungkus3}>
        <View style={styles.keempat}>
          <TouchableOpacity onPress={() => navigation.navigate('Product')}>
            <Image
              style={styles.tshirt}
              source={require('../asset/image/tshirt.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.hoodi}
              source={require('../asset/image/hoodi.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.kelima}>
          <TouchableOpacity>
            <Image
              style={styles.jeans}
              source={require('../asset/image/jeans.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.shorts}
              source={require('../asset/image/shorts.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.keenam}>
          <TouchableOpacity>
            <Image
              style={styles.sweater}
              source={require('../asset/image/sweater.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.tracks}
              source={require('../asset/image/tracks.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttom}>
        <TouchableOpacity onPress={() => navigation.replace('Home')}>
          <Image
            style={styles.icon}
            source={require('../asset/icon/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace('HomeFull')}>
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

export default Categories;

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
  },
  header: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  cari: {
    width: 19,
    height: 19,
  },
  kedua: {
    flexDirection: 'row',
    // backgroundColor:'yellow',
    justifyContent: 'space-around',
    top: 20,
    // padding:10
  },
  men: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '500',
    fontSize: 14,
    color: Black,
  },
  woman: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '500',
    fontSize: 14,
    color: Black,
  },
  kids: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '500',
    fontSize: 14,
    color: Black,
  },
  garisungu: {
    width: 138,
    height: 3,
    backgroundColor: Primary,
    top: 30,
  },
  ketiga: {
    backgroundColor: '#90B6FF',
    width: 366,
    height: 144,
    borderRadius: 16,
    top: 50,
    left: 35,
  },
  sale: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 30,
    color: '#FFFFFF',
    left: 33,
    top: 29,
  },
  up: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 22,
    color: '#7BCFFF',
    left: 33,
    top: 29,
  },
  terms: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 10,
    color: '#FFFFFF',
    left: 33,
    top: 29,
  },
  //   icon2: {
  //     width:191,
  //     height:191,
  //     borderRadius:16,
  //     backgroundColor:'#7BCFFF',
  //     marginBottom:20,
  //     left:24,
  //     rotation:90

  //   },
  //   icon1: {
  //     width:20,
  //     height:20,
  //     // borderRadius:16,
  //     backgroundColor:'#7BCFFF'
  //   },
  bungkus3: {
    top: 70,
  },
  keempat: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor:'yellow',
  },
  tshirt: {
    width: 175,
    height: 164,
    borderRadius: 16,
    gap: 10,
  },
  hoodi: {
    width: 175,
    height: 164,
    borderRadius: 16,
    gap: 10,
  },
  kelima: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor:'yellow'
  },
  jeans: {
    width: 175,
    height: 164,
    borderRadius: 16,
    gap: 10,
  },
  shorts: {
    width: 175,
    height: 164,
    borderRadius: 16,
    gap: 10,
  },
  keenam: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor:'yellow'
  },
  sweater: {
    width: 175,
    height: 164,
    borderRadius: 16,
    gap: 10,
  },
  tracks: {
    width: 175,
    height: 164,
    borderRadius: 16,
    gap: 10,
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
