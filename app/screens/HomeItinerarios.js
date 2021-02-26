import * as React from 'react';
import 'react-native-gesture-handler';
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import colors from '../assets/colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import itinerariosEncursoData from '../assets/data/itinerariosEncursoData';
import itinerariosRecomendadosData from '../assets/data/itinerariosRecomendadosData';
import itinerariosData from '../assets/data/itinerariosData';
import itinerariosCategoriasData from '../assets/data/itinerariosCategoriasData';
import BoxEncurso from '../components/BoxEncurso';
import BoxRecomendado from '../components/BoxRecomendado';
import HeaderDrawer from '../components/HeaderDrawer';

const HomeItinerarios = ({ navigation }) => {
  let renderCategoria = ({ item }) => (
    <View style={styles.boxCategoria}>
      <MaterialIcons name={item.icon} color={(color = '#4B75B1')} size={26} />
      <Text style={styles.textCategoriaName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.wrapperItinerarios}>
      <HeaderDrawer navigation={navigation} />
      <View style={styles.encursoWrapper}>
        <Text style={styles.textEncurso}>EN CURSO</Text>
        <View style={styles.enCursoList}>
          <FlatList
            data={itinerariosEncursoData}
            renderItem={({ item }) => (
              <BoxEncurso item={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ flex: 1 }}></View>
      </View>

      <View style={{ flex: 0.2 }}></View>

      <View style={styles.recomendadosWrapper}>
        <Text style={styles.textRecomendados}>RECOMENDADOS</Text>
        <View style={styles.recomendadosList}>
          <FlatList
            data={itinerariosData}
            renderItem={({ item }) => (
              <BoxRecomendado item={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ flex: 1 }}></View>
      </View>

      <View style={{ flex: 0.2 }}></View>

      <View style={styles.categoriasWrapper}>
        <Text style={styles.textPorcategoria}>POR CATEGORÍA</Text>
        <View style={styles.categoriesList}>
          <FlatList
            data={itinerariosCategoriasData}
            renderItem={renderCategoria}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  wrapperItinerarios: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },

  // En curso
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
    width: windowHeight * 0.2,
    marginBottom: 10,

    shadowColor: '#000',
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
