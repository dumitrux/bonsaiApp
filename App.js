import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from './assets/colors/colors';

import Home from './screens/Home';
import Hitos from './screens/Hitos';
import Itinerarios from './screens/Itinerarios';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeItinerarios"
      tabBarOptions={{
        //activeTintColor: '#e91e63',
        //inactiveBackgroundColor: '#B0DADA',
        activeBackgroundColor: '#FFFFFF',
        tabStyle: styles.bottomNav,
      }}
      labelStyle={{ fontSize: 12 }}

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
