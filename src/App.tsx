import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import Login from './screen/Login';
import Splash from './screen/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screen/Home';
import HomeFull from './screen/HomeFull';
import Categories from './screen/Categories';
import Product from './screen/Product';
import Productpage from './screen/Productpage';
import Favourites from './screen/Favourites';
import Checkout from './screen/Checkout';
import Facebook from './screen/Facebook';
import Google from './screen/Google';
import Crud from './screen/Splash';

const Stack = createNativeStackNavigator();

export type RootStackParams = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
  HomeFull: undefined;
  Categories: undefined;
  Product: undefined;
  Productpage: undefined;
  Favourites: undefined;
  Checkout: undefined;
  Facebook: undefined;
  Google: undefined;
};

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeFull"
            component={HomeFull}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Product"
            component={Product}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Productpage"
            component={Productpage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Favourites"
            component={Favourites}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Facebook"
            component={Facebook}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Google"
            component={Google}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
