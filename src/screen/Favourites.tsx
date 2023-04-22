import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Black, Primary, White} from '../utils/warna';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';

const Favourites = () => {
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
        <Text style={styles.header}>Favourites</Text>
        <TouchableOpacity>
          <Image
            style={styles.cari}
            source={require('../asset/icon/cari.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.kedua}>
        <TouchableOpacity>
          <Image
            style={styles.blor}
            source={require('../asset/image/blor.png')}
          />
        </TouchableOpacity>
        <View style={styles.bungkus}>
          <TouchableOpacity>
            <Text style={styles.oliv}>Olive Zip-Front Jacket</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.rs}>Rs. 3,499</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.bungkusicon2}>
              <Text style={styles.angka}>4.5/5</Text>
              <Image
                style={styles.bintang}
                source={require('../asset/icon/bintang.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.tongsampah}
            source={require('../asset/icon/tongsampah.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.ketiga}>
        <TouchableOpacity>
          <Image
            style={styles.blor}
            source={require('../asset/image/bro.png')}
          />
        </TouchableOpacity>
        <View style={styles.bungkus}>
          <TouchableOpacity>
            <Text style={styles.oliv}>Black Zipper</Text>
          </TouchableOpacity>
          <View style={styles.garis}></View>
          <Text style={styles.rs}>Rs. 2,299</Text>
          <TouchableOpacity>
            <Text style={styles.rs}>Rs. 1,299</Text>
          </TouchableOpacity>
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
        <TouchableOpacity>
          <Image
            style={styles.tongsampah}
            source={require('../asset/icon/tongsampah.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.keempat}>
        <TouchableOpacity>
          <Image
            style={styles.blor}
            source={require('../asset/image/celana.png')}
          />
        </TouchableOpacity>
        <View style={styles.bungkus}>
          <TouchableOpacity>
            <Text style={styles.oliv}>Olive Zip-Front Jacket</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.rs}>Rs. 1,299</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.bungkusicon2}>
              <Text style={styles.angka}>4.7/5</Text>
              <Image
                style={styles.bintang}
                source={require('../asset/icon/bintang.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.tongsampah}
            source={require('../asset/icon/tongsampah.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bungkusgaris}>
        <View style={styles.garis1}></View>
        <Text style={styles.text}>Add more to the list</Text>
        <View style={styles.garis2}></View>
      </View>
      <View style={styles.pembungkus}>
        <View style={styles.image}>
          <TouchableOpacity>
            <Image
              style={styles.berjas}
              source={require('../asset/image/berjas.png')}
            />
          </TouchableOpacity>
          <View style={styles.bungkusicon}>
            <TouchableOpacity>
              <Image
                style={styles.lope}
                source={require('../asset/icon/lope.png')}
              />
              <Image
                style={styles.titikputih}
                source={require('../asset/icon/titikputih.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.image}>
          <TouchableOpacity>
            <Image
              style={styles.berjas}
              source={require('../asset/image/mastot.png')}
            />
          </TouchableOpacity>
          <View style={styles.bungkusicon}>
            <TouchableOpacity>
              <Image
                style={styles.lope}
                source={require('../asset/icon/lope.png')}
              />
              <Image
                style={styles.titikputih}
                source={require('../asset/icon/titikputih.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.buttom}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../asset/icon/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace('Checkout')}>
          <Image
            style={styles.icon}
            source={require('../asset/icon/heart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../asset/icon/cart.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Favourites;

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
  bungkusicon2: {
    flexDirection: 'row',
  },
  angka: {
    color: Primary,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 12,
  },
  bintang: {
    width: 13.23,
    height: 12.64,
  },
  kedua: {
    width: 366,
    height: 132,
    left: 35,
    top: 24,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  blor: {
    width: 100,
    height: 100,
    top: 16,
    left: 16,
    borderRadius: 12,
    // backgroundColor:'#C4C4C4'
  },
  bungkus: {
    flexDirection: 'column',
    // backgroundColor:'yellow',
    width: 120,
    left: 32,
    top: 16,
  },
  oliv: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 16,
    color: Black,
  },
  garis: {
    borderBottomWidth: 1,
    width: 60,
    top: 10,
  },
  rs: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 14,
  },
  tongsampah: {
    width: 18,
    height: 18.75,
    left: 110,
    top: 16,
  },
  ketiga: {
    width: 366,
    height: 132,
    left: 35,
    top: 24,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    marginBottom: 16,
    marginTop: 16,
  },
  keempat: {
    width: 366,
    height: 132,
    left: 35,
    top: 24,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  bungkusgaris: {
    flexDirection: 'row',
    // backgroundColor:'yellow',
    top: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  garis1: {
    borderWidth: 1,
    width: 25,
  },
  garis2: {
    borderWidth: 1,
    width: 25,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 18,
    color: Black,
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    // backgroundColor:'purple',
    flexDirection: 'row',
  },
  berjas: {
    width: 175,
    height: 178,
    borderRadius: 16,
  },
  bungkusicon: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'green',
    right: 45,
    bottom: 70,
  },
  lope: {
    width: 13.5,
    height: 12.09,
    top: 20,
    left: 6,
  },
  titikputih: {
    width: 28,
    height: 28,
  },
  pembungkus: {
    flexDirection: 'row',
    left: 35,
    top: 55,
  },
  buttom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: White,
    // bottom:40,
    height: 65,
    borderTopWidth: 1,
    top: 35,
  },
  icon: {
    width: 28,
    height: 25,
  },
});
