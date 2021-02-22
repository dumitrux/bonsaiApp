import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from './assets/colors/colors';

import Home from './screens/Home';
import Hitos from './screens/Hitos';
import Itinerarios from './screens/Itinerarios';

import Itinerario from './screens/Itinerario';
import CustomDrawerContent from './components/CustomDrawerContent';


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


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={MyTabs}
        options={
          {
            drawerIcon: () => (<MaterialIcons name="home" color={'#79A6EB'} size={26} />)
          }
        }
      />
      <Drawer.Screen name="Itinerario" component={Itinerario} />
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
