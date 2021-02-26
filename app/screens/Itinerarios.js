import * as React from 'react';
import 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../assets/colors/colors';
import HeaderDrawer from '../components/HeaderDrawer';
import HomeItinerarios from './HomeItinerarios';
import Itinerario from './Itinerario';
import { createStackNavigator } from '@react-navigation/stack';

const ItinerariosStack = createStackNavigator();

const Itinerarios = ({ navigation }) => {
  return (
    <ItinerariosStack.Navigator initialRouteName="HomeItinerarios">
      <ItinerariosStack.Screen
        name="HomeItinerarios"
        component={HomeItinerarios}
        options={{
          headerShown: false,
        }}
      />
      <ItinerariosStack.Screen
        name="Itinerario"
        component={Itinerario}
        options={{
          headerShown: false,
        }}
      />
    </ItinerariosStack.Navigator>
  );
};

export default Itinerarios;
