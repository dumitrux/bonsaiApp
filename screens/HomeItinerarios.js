import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

import colors from '../assets/colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import itinerariosEncursoData from '../assets/data/itinerariosEncursoData';
import itinerariosRecomendadosData from '../assets/data/itinerariosRecomendadosData';
import itinerariosCategoriasData from '../assets/data/itinerariosCategoriasData';
import BoxRecomendado from '../components/BoxRecomendado';
import HeaderDrawer from '../components/HeaderDrawer';

const HomeItinerarios = ({ navigation }) => {
    let renderEncurso = ({ item }) => (
        <View style={styles.boxEncurso} >
            <View style={styles.topEncurso}>
                <Image source={item.image} style={styles.imageEncurso} />
                <Text style={styles.textEncursoName}>{item.name}</Text>
            </View>
            <View style={styles.progressBar}>
                <View style={[styles.progressBarLeft, { width: '80%' }]} />
                <View style={[styles.progressBarRight, { width: '20%' }]} />
            </View>
        </View>)
        ;

    let renderRecomendado = ({ item }) => {
        return <BoxRecomendado item={item} navigation={navigation} />
        // return (
        //     <View style={styles.boxRecommended} >
        //         <View style={styles.topRecomendados}>
        //             <Image source={item.image} style={styles.imageRecommended} />
        //             <Text style={styles.textRecomendadosName}>{item.name}</Text>
        //         </View>
        //         <View style={styles.wrapperBtnRecomendados}>
        //             <TouchableHighlight
        //                 activeOpacity={0.6}
        //                 underlayColor="#1DB6B6"
        //                 style={styles.onPressRecomendados}
        //                 onPress={() => {
        //                     navigation.navigate('Itinerario', item)
        //                 }}>
        //                 <View style={styles.btnRecomendados}>
        //                     <Text style={styles.empezarRecomendados}>Empezar</Text>
        //                 </View>
        //             </TouchableHighlight >
        //         </View>
        //     </View>
        // );
    }

    let renderCategoria = ({ item }) => (
        <View style={styles.boxCategoria} >
            <MaterialIcons name={item.icon} color={color = '#4B75B1'} size={26} />
            <Text style={styles.textCategoriaName}>{item.name}</Text>
        </View>
    );

    return (
        
        <View style={styles.wrapperItinerarios}>
            <HeaderDrawer navigation={navigation}/>
            <View style={styles.encursoWrapper}>
                <Text style={styles.textEncurso}>EN CURSO</Text>
                <View style={styles.enCursoList}>
                    <FlatList
                        data={itinerariosEncursoData}
                        renderItem={renderEncurso}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={{ flex: 1 }}></View>
            </View>

            <View style={{ flex: .2 }}></View>

            <View style={styles.recomendadosWrapper}>
                <Text style={styles.textRecomendados}>RECOMENDADOS</Text>
                <View style={styles.recomendadosList}>
                    <FlatList
                        data={itinerariosRecomendadosData}
                        renderItem={({ item }) => (<BoxRecomendado item={item} navigation={navigation} />)}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={{ flex: 1 }}></View>
            </View>

            <View style={{ flex: .2 }}></View>

            <View style={styles.categoriasWrapper}>
                <Text style={styles.textPorcategoria}>POR CATEGORÍA</Text>
                <View style={styles.categoriesList}>
                    <FlatList
                        data={itinerariosCategoriasData}
                        renderItem={renderCategoria}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
        </View >
    );
}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    wrapperItinerarios: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
    },

    // EN CURSO
    encursoWrapper: {
        flex: 4,
        // backgroundColor: 'red',
    },
    textEncurso: {
        fontFamily: 'Nunito-Bold',
        color: colors.AccentDark,
        flex: 2,
    },
    enCursoList: {
        flex: 8,
        backgroundColor: '#4B75B1',
        borderRadius: 5,
        borderWidth: 4,
        borderColor: '#4B75B1',
    },
    boxEncurso: {
        backgroundColor: 'white',
        marginHorizontal: 4,
        borderRadius: 5,
        width: windowHeight * 0.22,
        marginVertical: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flex: 1,
    },
    topEncurso: {
        flex: 4,
    },
    imageEncurso: {
        alignSelf: 'center',
        marginTop: 10,
    },
    textEncursoName: {
        fontFamily: 'Nunito-SemiBold',
        color: '#4B75B1',
        textAlign: 'center',
    },
    progressBar: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
        alignSelf: 'flex-end'
    },
    progressBarLeft: {
        height: 10,
        backgroundColor: 'steelblue',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    progressBarRight: {
        height: 10,
        backgroundColor: 'skyblue',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

    // RECOMENDADOS
    recomendadosWrapper: {
        flex: 4,
        // backgroundColor: 'blue',
    },
    textRecomendados: {
        flex: 2,
        fontFamily: 'Nunito-Bold',
        color: colors.AccentDark,
    },
    recomendadosList: {
        flex: 8,
    },
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


    // POR CATEGORIA
    categoriasWrapper: {
        flex: 2,
        // backgroundColor: 'green',
    },
    textPorcategoria: {
        flex: 2,
        fontFamily: 'Nunito-Bold',
        color: colors.TextDark,
    },
    categoriesList: {
        flex: 4,
    },
    boxCategoria: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        marginRight: 10,
        borderRadius: 5,
        width: windowHeight * 0.20,
        marginBottom: 10,

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
    textCategoriaName: {
        fontFamily: 'Nunito-SemiBold',
        color: '#4B75B1',
    },
});

export default HomeItinerarios;