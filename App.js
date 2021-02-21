import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from './assets/colors/colors';

import Home from './screens/Home';
import Hitos from './screens/Hitos';
import Itinerarios from './screens/Itinerarios';


const Tab = createBottomTabNavigator();

function MyTabs() {
  // const windowWidth = Dimensions.get('window').width;
  // const windowHeight = Dimensions.get('window').height;
  // console.log(windowWidth, windowHeight);

  // const windowWidth2 = Dimensions.get('screen').width;
  // const windowHeight2 = Dimensions.get('screen').height;
  // console.log(windowWidth2, windowHeight2);


  return (
    <Tab.Navigator
      initialRouteName="Itinerarios"
      tabBarOptions={{
        inactiveBackgroundColor: colors.ColorPrincipal,
        activeBackgroundColor: '#6FBBBB',
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#FFFFFF',
      }}
      labelStyle={{ fontSize: 22 }}

    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Itinerarios"
        component={Itinerarios}
        options={{
          tabBarLabel: 'Itinerarios',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="timeline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Hitos"
        component={Hitos}
        options={{
          tabBarLabel: 'Hitos',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="clear-all" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    backgroundColor: colors.ColorPrincipal
  },
  text: {
    fontFamily: 'Nunito-Bold'
  }
});

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
