import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../assets/colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ItinerarioStack = createStackNavigator();
const windowHeight = Dimensions.get('window').height;

const Itinerario = ({ route, navigation }) => {
  let itinerario = route.params.item;

  let renderItemList = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.itemList}
      onPress={() => {
        navigation.navigate('ItinerarioContent', { itinerario });
      }}
    >
      {item.id % 2 == 0 ? (
        <MaterialIcons
          name="radio-button-unchecked"
          style={styles.iconItem}
          color={color}
          size={26}
        />
      ) : (
        <MaterialIcons
          name="check-circle"
          style={styles.iconItem}
          color={color}
          size={26}
        />
      )}
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.main}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.btnBack}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <MaterialIcons name="arrow-back-ios" color={color} size={26} />
      </TouchableOpacity>

      <View style={styles.header}>
        <View style={styles.itinerarioDefinition}>
          <Image source={itinerario.image} style={styles.image} />
          <View style={styles.itinerarioText}>
            <Text style={styles.title}>{itinerario.name}</Text>
            <Text style={styles.description}>{itinerario.description}</Text>
          </View>
        </View>
      </View>

      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#1DB6B6"
        style={styles.btnContinue}
        onPress={() => {
          console.log('press');
        }}
      >
        <Text style={styles.textBtnConintue}>CONTINUAR</Text>
      </TouchableHighlight>

      <View style={styles.content}>
        <Text>CONTENIDOS</Text>
        <FlatList
          data={itinerario.contents}
          renderItem={renderItemList}
          keyExtractor={(itinerario) => itinerario.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnBack: {
    borderRadius: 15,
    width: 26,
    marginLeft: 20,
    marginTop: 20,
    position: 'absolute',
    zIndex: 1,
    elevation: 50,
  },
  main: {
    flex: 1,
  },
  header: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  itinerarioDefinition: {
    marginVertical: 40,
    marginHorizontal: '10%',
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  itinerarioText: {
    marginTop: 15,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    color: colors.TextDark,
    fontSize: 26,
    marginBottom: 15,
  },
  description: {
    fontFamily: 'Nunito-Bold',
    color: colors.TextDark,
  },
  btnContinue: {
    alignSelf: 'center',
    width: 140,
    bottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.ColorPrincipal,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 19,
  },
  textBtnConintue: {
    alignSelf: 'center',
    fontFamily: 'Nunito-Bold',
    color: '#FFFFFF',
  },

  content: {
    justifyContent: 'center',
    // marginVertical: 10,
    marginHorizontal: 30,
    flex: 2,
  },
  itemList: {
    flexDirection: 'row',
    marginTop: 20,
  },
  iconItem: { marginRight: 10 },
  textItem: {},
});

export default Itinerario;
