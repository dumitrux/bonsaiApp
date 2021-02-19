import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/colors/colors';


const CategoriasItinerarios = ({ item }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container} >
                <MaterialIcons name={item.icon} color={color = '#4B75B1'} size={26} />
                <Text style={styles.name}>{item.name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        marginHorizontal: 5,
        borderRadius: 5,
        width: 140,
        height: 50,
        marginVertical: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 16,
        color: '#4B75B1',
    },
});

export default CategoriasItinerarios;