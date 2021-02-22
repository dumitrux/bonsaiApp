import * as React from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderDrawer from '../components/HeaderDrawer';

import colors from '../assets/colors/colors';

const ItinerarioStack = createStackNavigator();

const Itinerario2 = () => {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}>
            <View style={styles.wrapper}>
                <Text style={styles.text}>EN CURSO</Text>
                <Text style={styles.text}>RECOMENDADOS</Text>
                <Text style={styles.text}>POR CATEGORIAS</Text>
            </View >
        </ScrollView>
    );
}

const Itinerario = ({ navigation }) => {
    return (
        <ItinerarioStack.Navigator initialRouteName="Itinerario2">
            <ItinerarioStack.Screen
                name="Itinerario2"
                component={Itinerario2}
                options={{ headerTitle: () => <HeaderDrawer navigation={navigation} /> }}
            />
        </ItinerarioStack.Navigator>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        marginVertical: 10,
        marginLeft: 10,
    },
    text: {
        fontFamily: 'Nunito-Bold',
        color: colors.TextDark,
    }
});

export default Itinerario;