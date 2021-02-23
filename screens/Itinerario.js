import * as React from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderDrawer from '../components/HeaderDrawer';

import colors from '../assets/colors/colors';

const ItinerarioStack = createStackNavigator();

const Itinerario = () => {
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