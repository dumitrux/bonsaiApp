import * as React from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../assets/colors/colors';
import Header from '../components/Header';

const Itinerario = () => {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}>
            <Header />
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