import * as React from 'react';
import 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../assets/colors/colors';
import Header from '../components/Header';
import HomeItinerarios from './HomeItinerarios';
import Itinerario from './Itinerario';
import { createStackNavigator } from '@react-navigation/stack';

const ItinerariosStack = createStackNavigator();

const Itinerarios = () => {
    return (
        <ItinerariosStack.Navigator initialRouteName="HomeItinerarios">
            <ItinerariosStack.Screen
                name="HomeItinerarios"
                component={HomeItinerarios}
                options={{ headerTitle: props => <Header /> }}
            />
            <ItinerariosStack.Screen
                name="Itinerario"
                component={Itinerario}
                options={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#F8FBFF'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: colors.AccentLight,
                    },
                    headerBackImage: () => (<MaterialIcons name="arrow-back-ios" color={color} size={26} />),
                }}
            />
        </ItinerariosStack.Navigator>
    );
};

export default Itinerarios; 