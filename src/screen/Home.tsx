import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {RootStackParams} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {Black, Primary, Secondary, White} from '../utils/warna';

const Home = () => {
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
      <View style={styles.bungkusutama}>
        <ScrollView>
          <View style={styles.bungkusview}>
            <ScrollView horizontal style={styles.scroll}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Categories')}>
                <View style={styles.ketiga}>
                  <Text style={styles.men}>men</Text>
                  <Image
                    style={styles.gambar1}
                    source={require('../asset/image/men.png')}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Categories')}>
                <View style={styles.keempat}>
                  <Text style={styles.woman}>woman</Text>
                  <Image
                    style={styles.gambar2}
                    source={require('../asset/image/woman.png')}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Categories')}>
                <View style={styles.kelima}>
                  <Text style={styles.animal}>animal</Text>
                  <Image
                    style={styles.gambar3}
                    source={require('../asset/image/animal.png')}
                  />
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.keenam}>
            <TouchableOpacity>
              <Text style={styles.recomend}>Recommended</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.see}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bungkus}>
            <View style={styles.ketujuh}>
              <TouchableOpacity>
                <Image
                  style={styles.jaket}
                  source={require('../asset/image/rectangle.png')}
                />
                <Text style={styles.olive}>Olive Zip-Front Jacket</Text>
                <Text style={styles.rs}>Rs. 3,499</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View style={styles.ketujuh}>
                <Image
                  style={styles.jaket}
                  source={require('../asset/image/parka.png')}
                />
                <Text style={styles.olive}>Parka Style'</Text>
                <Text style={styles.rs}>Rs. 2,505</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bungkus}>
            <TouchableOpacity>
              <View style={styles.ketujuh}>
                <Image
                  style={styles.jaket}
                  source={require('../asset/image/erigo.png')}
                />
                <Text style={styles.olive}>CN-Erigo</Text>
                <Text style={styles.rs}>Rs. 4,459</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ketujuh}>
                <Image
                  style={styles.jaket}
                  source={require('../asset/image/hoodie.png')}
                />
                <Text style={styles.olive}>Hoodie Style</Text>
                <Text style={styles.rs}>Rs. 7,889</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bungkus}>
            <TouchableOpacity>
              <View style={styles.ketujuh}>
                <Image
                  style={styles.jaket}
                  source={require('../asset/image/sukajan.png')}
                />
                <Text style={styles.olive}>SUKAJAN / Bomber /</Text>
                <Text style={styles.rs}>Rs. 5,499</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ketujuh}>
                <Image
                  style={styles.jaket}
                  source={require('../asset/image/erigo1.png')}
                />
                <Text style={styles.olive}>sweater ERIGO</Text>
                <Text style={styles.rs}>Rs. 1,799</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bungkus}>
            <View style={styles.ketujuh}>
              <TouchableOpacity>
                <Image
                  style={styles.jaket}
                  source={require('../asset/image/jaket.png')}
                />
                <Text style={styles.olive}>JAzt style Cool men'</Text>
                <Text style={styles.rs7}>Rs. 2,222</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ketujuh}>
              <TouchableOpacity>
                <Image
                  style={styles.jaket}
                  source={require('../asset/image/varsity.png')}
                />
                <Text style={styles.olive}>Olive Zip-Front Jacket</Text>
                <Text style={styles.rs7}>Rs. 3,499</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttom}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={styles.icon}
            source={require('../asset/icon/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeFull')}>
          <Image
            style={styles.icon}
            source={require('../asset/icon/heart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
          <Image
            style={styles.icon}
            source={require('../asset/icon/cart.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  utama: {
    flex: 1,
    // backgroundColor:'pink'
  },
  pertama: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    // backgroundColor:'yellow'
  },
  header: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  vector1: {
    width: 18.67,
    height: 14,
  },
  vector2: {
    width: 19.5,
    height: 21,
  },
  kedua: {
    backgroundColor: '#EDEEEF',
    // backgroundColor:'blue',
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 16,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    top: 10,
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
  scroll: {
    // backgroundColor:'purple',
    // padding:20,
  },
  ketiga: {
    backgroundColor: Primary,
    width: 309,
    height: 186,
    borderRadius: 16,
    marginLeft: 20,
    marginRight: 20,
    // left:20,
    // top:30
  },
  men: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    fontSize: 26,
    color: White,
    top: 10,
    left: 15,
  },
  gambar1: {
    position: 'absolute',
    bottom: 0,
    width: 160,
    height: 200,
    left: 120,
    // backgroundColor:Black
  },
  woman: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    fontSize: 26,
    color: White,
    top: 10,
    left: 15,
  },
  keempat: {
    backgroundColor: Secondary,
    width: 309,
    height: 186,
    borderRadius: 16,
    marginRight: 20,
  },
  gambar2: {
    position: 'absolute',
    bottom: 0,
    width: 130,
    height: 190,
    left: 140,
    // backgroundColor:Black
  },
  kelima: {
    backgroundColor: 'silver',
    width: 340,
    height: 186,
    borderRadius: 16,
    marginRight: 20,
    // left:54,
    // top:50
  },
  animal: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    fontSize: 26,
    color: White,
    top: 10,
    left: 15,
  },
  gambar3: {
    position: 'absolute',
    bottom: 0,
    width: 140,
    height: 185,
    left: 140,
  },
  bungkusview: {
    flexDirection: 'row',
    top: 20,
    // backgroundColor:'yellow',
  },
  keenam: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor:'red',
    paddingBottom: 10,
    paddingTop: 10,
    top: 25,
  },
  recomend: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '500',
    fontSize: 20,
    color: Black,
    right: 30,
  },
  see: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '500',
    fontSize: 16,
    left: 30,
  },
  ketujuh: {
    justifyContent: 'center',
  },
  jaket: {
    width: 175,
    height: 178,
    borderRadius: 16,
  },
  // jaket7: {
  //   width:175,
  //   height:178,
  //   borderRadius:16,
  //   // marginBottom:150
  // },
  olive: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 16,
    color: Black,
  },
  rs: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 14,
  },
  rs7: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 250,
  },
  bungkus: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: 20,
  },
  bungkusutama: {
    flexDirection: 'column',
    top: 20,
  },
  buttom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: White,
    bottom: 180,
    height: 65,
    borderTopWidth: 1,
  },
  icon: {
    width: 28,
    height: 25,
  },
});
