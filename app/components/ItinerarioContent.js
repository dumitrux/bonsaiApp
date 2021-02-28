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

const ItinerarioContent = ({ route, navigation }) => {
  console.log(route.params);
  let content = route.params;
  //   console.log(itinerario);

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
          <Text style={styles.title}>{content.name}</Text>
          {/* <Image source={itinerario.image} style={styles.image} /> */}
        </View>
      </View>
      <View style={styles.content}>
        <Text>CONTENIDO</Text>
        <View style={styles.progressIndicator}></View>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#1DB6B6"
          style={styles.btnNext}
          onPress={() => {
            // navigation.navigate('ItinerarioContent', { content });
          }}
        >
          <Text style={styles.textBtnConintue}>SIGUIENTE</Text>
        </TouchableHighlight>
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
  title: {
    fontFamily: 'Nunito-Bold',
    color: colors.TextDark,
    fontSize: 26,
    marginBottom: 15,
  },
  btnNext: {
    alignSelf: 'center',
    width: 140,
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.AccentDark,

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
  progressIndicator: {},
});

export default ItinerarioContent;
