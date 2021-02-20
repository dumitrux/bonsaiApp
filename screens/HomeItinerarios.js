import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
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
    let renderRecommended = ({ item }) => (
        <View style={styles.wrapperRecommended}>
            <View style={styles.boxRecommended} >
                <Image source={item.image} style={styles.imageRecommended} />
                <Text style={styles.textRecommended}>{item.name}</Text>
                <View style={styles.wrapperBtnRecommended}>
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#1DB6B6"
                        style={styles.onPressRecommended}
                        onPress={() => {
                            console.log("PRESS");
                            navigation.navigate('Itinerario', item)
                        }}>
                        <View style={styles.btnRecommended}>
                            <Text style={styles.empezarRecommended}>Empezar</Text>
                        </View>
                    </TouchableHighlight >
                </View>
            </View>
        </View>
    );

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
                        renderItem={renderRecommended}
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
    },
    wrapperRecommended: {
        height: 180,
    },
    boxRecommended: {
        backgroundColor: 'white',
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 5,
        width: 180,
        height: 140,
        marginVertical: 10,
        elevation: 2,
        flexDirection: 'column',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    imageRecommended: {
        width: 40,
        height: 45,
        alignSelf: 'center',
        marginTop: 10,
    },
    textRecommended: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 16,
        color: '#4B75B1',
        textAlign: 'center',
        flexGrow: 1,
    },
    wrapperBtnRecommended: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -9,
    },
    btnRecommended: {
        borderRadius: 15,
        backgroundColor: colors.Background,
        width: 95,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    empezarRecommended: {
        color: '#1DB6B6',
    },
    onPressRecommended: {
        borderRadius: 15,
    }

});

export default HomeItinerarios;