import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/colors/colors';


const ItinerariosRecomendados = ({ item }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container} >
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.name}</Text>
                <View >
                    <Text>Empezar</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
    },
    container: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        borderRadius: 5,
        width: 150,
        height: 140,
        marginVertical: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2
    },
    image: {
        width: 40,
        height: 45,
        alignSelf: 'center',
        marginTop: 10,
    },
    text: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 16,
        color: '#4B75B1',
        textAlign: 'center',
    },
});

export default ItinerariosRecomendados;