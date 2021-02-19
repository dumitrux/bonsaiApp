import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/colors/colors';
import { useNavigation } from '@react-navigation/native';


const ItinerariosRecomendados = ({ item }) => {
    //const navigation = useNavigation();

    return (
        <View style={styles.wrapper}>
            <View style={styles.container} >
                <Image source={item.image} style={styles.image} />
                <Text style={styles.textTitulo}>{item.name}</Text>
                <View style={styles.wrapperBtnEmpezar}>
                    <View style={styles.btnEmpezar}>
                        <Text styles={styles.textEmpezar}>Empezar</Text>
                    </View>
                </View>
                {/* <TouchableOpacity
                    onPress={() => {
                        //console.log(navigation);
                        //navigation.navigate('Itinerario')
                    }}>
                    <Text style={styles.text}>POR CATEGORIAS</Text>
                </TouchableOpacity> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        height: 180,
    },
    container: {
        backgroundColor: 'white',
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 5,
        width: 150,
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
    image: {
        width: 40,
        height: 45,
        alignSelf: 'center',
        marginTop: 10,
    },
    textTitulo: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 16,
        color: '#4B75B1',
        textAlign: 'center',
        flexGrow: 1,
    },
    btnEmpezar: {
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
    textEmpezar: {
        textDecorationColor: '#1DB6B6',
        color: '#1DB6B6',
    },
    wrapperBtnEmpezar: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -9,
    }
});

export default ItinerariosRecomendados;