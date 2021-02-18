import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../assets/colors/colors';
import itinerariosEnCursoData from '../assets/data/itinerariosEnCursoData';
import itinerariosRecomendadosData from '../assets/data/itinerariosRecomendadosData';
import ItinerariosEnCurso from '../components/ItinerariosEnCurso';
import ItinerariosRecomendados from '../components/ItinerariosRecomendados';
import Header from '../components/Header';
import HomeItinerarios from './HomeItinerarios';
import Itinerario from './Itinerario';
import { createStackNavigator } from '@react-navigation/stack';

const ItinerariosStack = createStackNavigator();

const Itinerarios = () => {
    return (
        <ItinerariosStack.Navigator initialRouteName="HomeItinerarios">
            <ItinerariosStack.Screen name="HomeItinerarios" component={HomeItinerarios} />
            <ItinerariosStack.Screen name="Itinerario" component={Itinerario} />
        </ItinerariosStack.Navigator>
    );
};

export default Itinerarios; 