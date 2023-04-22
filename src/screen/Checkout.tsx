import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {RootStackParams} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {Black, Primary} from '../utils/warna';

const Checkout = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.utama}>
      <View style={styles.pertama}>
        <TouchableOpacity onPress={() => navigation.replace('Home')}>
          <Image
            style={styles.back}
            source={require('../asset/icon/back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Cart</Text>
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
          <View style={styles.bungkusicon2}>
            <TouchableOpacity>
              <Image
                style={styles.ples}
                source={require('../asset/icon/ples.png')}
              />
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity>
              <Image
                style={styles.min}
                source={require('../asset/icon/minus.png')}
              />
            </TouchableOpacity>
          </View>
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
          <View style={styles.bungkusicon2}>
            <TouchableOpacity>
              <Image
                style={styles.ples}
                source={require('../asset/icon/ples.png')}
              />
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity>
              <Image
                style={styles.min}
                source={require('../asset/icon/minus.png')}
              />
            </TouchableOpacity>
          </View>
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
          <View style={styles.bungkusicon2}>
            <TouchableOpacity>
              <Image
                style={styles.ples}
                source={require('../asset/icon/ples.png')}
              />
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity>
              <Image
                style={styles.min}
                source={require('../asset/icon/minus.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.tongsampah}
            source={require('../asset/icon/tongsampah.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.kelima}>
        <View style={styles.text1}>
          <Text style={styles.subtotal}>Subtotal:</Text>
          <Text style={styles.shipping}>Shipping:</Text>
          <Text style={styles.total}>Total Price:</Text>
        </View>
        <View style={styles.text2}>
          <Text style={styles.rupe}>Rs. 6,027.00</Text>
          <Text style={styles.rupiah}>Rs. 100.00</Text>
          <View style={styles.harga}>
            <Text style={styles.items}>(3 items)</Text>
            <Text style={styles.jumlah}>Rs. 6,127.00</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.replace('Splash')}>
        <View style={styles.keenam}>
          <Text style={styles.checkout}>Checkout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  utama: {
    flex: 1,
  },
  pertama: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
  bungkusicon2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    right: 20,
  },
  ples: {
    width: 16.5,
    height: 16.5,
  },
  min: {
    width: 16.5,
    height: 16.5,
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
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  kelima: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 35,
    top: 90,
  },
  text1: {
    flexDirection: 'column',
  },
  subtotal: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 16,
  },
  shipping: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
  },
  total: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 16,
    color: Black,
  },
  text2: {
    flexDirection: 'column',
  },
  rupe: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 16,
    left: 42,
  },
  rupiah: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 16,
    left: 60,
    marginBottom: 10,
    marginTop: 10,
  },
  harga: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    right: 57,
  },
  items: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 12,
    // marginRight:6
  },
  jumlah: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 24,
    color: Black,
    marginLeft: 6,
  },
  keenam: {
    backgroundColor: Primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    width: 366,
    height: 64,
    left: 35,
    top: 100,
  },
  checkout: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    fontSize: 18,
    color: '#FFFFFF',
  },
});
