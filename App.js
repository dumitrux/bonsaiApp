import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from './app//assets/colors/colors';

import Home from './app/screens/Home';
import Hitos from './app//screens/Hitos';
import Itinerarios from './app//screens/Itinerarios';

import Firebase from './app/screens/Firebase';
import StorageScreen from './app/screens/StorageScreen';
import CustomDrawerContent from './app//components/CustomDrawerContent';

const Tab = createBottomTabNavigator();

function MyTabs() {
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
    backgroundColor: colors.ColorPrincipal,
  },
  text: {
    fontFamily: 'Nunito-Bold',
  },
});

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={MyTabs}
        options={{
          drawerIcon: () => (
            <MaterialIcons name="home" color={'#79A6EB'} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Configuración"
        component={Firebase}
        options={{
          drawerIcon: () => (
            <MaterialIcons name="settings" color={'#79A6EB'} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={StorageScreen}
        options={{
          drawerIcon: () => (
            <MaterialIcons name="logout" color={'#79A6EB'} size={26} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
