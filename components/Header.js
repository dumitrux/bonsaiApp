import * as React from 'react';
import { View, StyleSheet, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/colors/colors';


const Header = () => {
    return (
        <SafeAreaView>
            <View style={styles.headerWrapper} >
                <MaterialIcons name="menu" color={'#79A6EB'} size={26} />
                <Image source={require('../assets/images/text-bonsai.jpg')} style={styles.textBonsai} />
                <MaterialIcons name="more-vert" color={'#79A6EB'} size={26} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
        alignItems: 'center',
    },
    textBonsai: {
        width: 120,
        height: 45,
    }
});

export default Header;