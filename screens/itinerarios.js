import * as React from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../assets/colors/colors';
import itinerariosEnCursoData from '../assets/data/itinerariosEnCursoData';
import ItinerariosEnCurso from '../components/ItinerariosEnCurso';
import Header from '../components/Header';

const Itinerarios = () => {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}>
            <Header />
            <View style={styles.wrapper}>
                <Text style={styles.text}>EN CURSO</Text>
                <View style={styles.enCursoList}>
                    <FlatList
                        data={itinerariosEnCursoData}
                        renderItem={ItinerariosEnCurso}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>
                <Text style={styles.text}>RECOMENDADOS</Text>
                <View></View>
                <Text style={styles.text}>POR CATEGORIAS</Text>
                <View></View>
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
    enCursoList: {
        backgroundColor: '#4B75B1',
        marginTop: 10,
        marginBottom: 15,
        borderRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        borderWidth: 5,
        borderColor: '#4B75B1',
    },
    text: {
        fontFamily: 'Nunito-Bold',
        color: colors.TextDark,
    }
});

export default Itinerarios;