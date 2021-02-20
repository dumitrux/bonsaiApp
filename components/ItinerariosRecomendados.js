import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, TouchableHighlight } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/colors/colors';
import { useNavigation } from '@react-navigation/native';


const ItinerariosRecomendados = ({ item }) => {
    //const navigation = useNavigation();
    console.log(this.image);

    return (
        <View style={styles.wrapper}>
            <View style={styles.container} >
                <Image source={item.image} style={styles.image} />
                <Text style={styles.textTitulo}>{item.name}</Text>
                <View style={styles.wrapperBtnEmpezar}>
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#1DB6B6"
                        style={styles.styleOnPress}
                        onPress={() => {
                            console.log("PRESS");
                            //console.log(navigation);
                            //navigation.navigate('Itinerario')
                        }}>
                        <View style={styles.btnEmpezar}>
                            <Text style={styles.textEmpezar}>Empezar</Text>
                        </View>
                    </TouchableHighlight >
                </View>
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
        color: '#1DB6B6',
    },
    wrapperBtnEmpezar: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -9,
    },
    styleOnPress: {
        borderRadius: 15,
    }
});

export default ItinerariosRecomendados;