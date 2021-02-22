import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';

import colors from '../assets/colors/colors';

const BoxRecomendado = ({ item, navigation }) => {
    // console.log(item);
    return (
        <View style={styles.boxRecommended} >
            <View style={styles.topRecomendados}>
                <Image source={item.image} style={styles.imageRecommended} />
                <Text style={styles.textRecomendadosName}>{item.name}</Text>
            </View>
            <View style={styles.wrapperBtnRecomendados}>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#1DB6B6"
                    style={styles.onPressRecomendados}
                    onPress={() => {
                        navigation.navigate('Itinerario', item)
                    }}>
                    <View style={styles.btnRecomendados}>
                        <Text style={styles.empezarRecomendados}>Empezar</Text>
                    </View>
                </TouchableHighlight >
            </View>
        </View>
    );
}

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    boxRecommended: {
        flexDirection: 'column',
        width: windowHeight * 0.21,
        marginRight: 10,
        marginBottom: 20,

        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    topRecomendados: {
        flex: 1,
    },
    imageRecommended: {
        alignSelf: 'center',
        marginTop: 10,
    },
    textRecomendadosName: {
        fontFamily: 'Nunito-SemiBold',
        color: '#4B75B1',
        textAlign: 'center',
        marginHorizontal: 10,
    },
    wrapperBtnRecomendados: {
        alignItems: 'center',
        marginBottom: -15,
    },
    btnRecomendados: {
        padding: 7,
        borderRadius: 5,
        backgroundColor: colors.Background,
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
    empezarRecomendados: {
        fontFamily: 'Nunito-Bold',
        color: '#1DB6B6',
    },
    onPressRecomendados: {
        borderRadius: 15,
    },
});

export default BoxRecomendado;