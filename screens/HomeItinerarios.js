import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../assets/colors/colors';
import itinerariosEnCursoData from '../assets/data/itinerariosEnCursoData';
import itinerariosRecomendadosData from '../assets/data/itinerariosRecomendadosData';
import itinerariosCategoriasData from '../assets/data/itinerariosCategoriasData';

import ItinerariosEnCurso from '../components/ItinerariosEnCurso';
import ItinerariosRecomendados from '../components/ItinerariosRecomendados';
import CategoriasItinerarios from '../components/CategoriasItinerarios';
import Header from '../components/Header';

const HomeItinerarios = ({ navigation }) => {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}>
            <View style={styles.wrapper}>
                <Text style={styles.text}>EN CURSO</Text>
                <View style={styles.enCursoList}>
                    <FlatList
                        data={itinerariosEnCursoData}
                        renderItem={ItinerariosEnCurso}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <Text style={styles.text}>RECOMENDADOS</Text>
                <View style={styles.recomendadosList}>
                    <FlatList
                        data={itinerariosRecomendadosData}
                        renderItem={ItinerariosRecomendados}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Itinerario')
                    }}>
                    <Text style={styles.text}>POR CATEGORIAS</Text>
                </TouchableOpacity>
                <View style={styles.categoriesList}>
                    <FlatList
                        data={itinerariosCategoriasData}
                        renderItem={CategoriasItinerarios}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View >
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        marginHorizontal: 10,
        marginTop: 15,
    },
    enCursoList: {
        backgroundColor: '#4B75B1',
        marginTop: 10,
        marginBottom: 35,
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#4B75B1',
    },
    recomendadosList: {
        marginTop: 5,
        marginBottom: 10,
    },
    categoriesList: {
        marginTop: 5,
        marginBottom: 10,
    },
    text: {
        fontFamily: 'Nunito-Bold',
        color: colors.TextDark,
        marginLeft: 15,
    }
});

export default HomeItinerarios;