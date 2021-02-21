import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View, FlatList, Image, TouchableHighlight } from 'react-native';

import styles from '../styles/HomeItinerarios.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import itinerariosEncursoData from '../assets/data/itinerariosEncursoData';
import itinerariosRecomendadosData from '../assets/data/itinerariosRecomendadosData';
import itinerariosCategoriasData from '../assets/data/itinerariosCategoriasData';

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
        </View>
    );

    let renderRecomendado = ({ item }) => (
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

    let renderCategoria = ({ item }) => (
        <View style={styles.boxCategoria} >
            <MaterialIcons name={item.icon} color={color = '#4B75B1'} size={26} />
            <Text style={styles.textCategoriaName}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.wrapperItinerarios}>
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
                        renderItem={renderRecomendado}
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

export default HomeItinerarios;