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
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../assets/colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ItinerarioStack = createStackNavigator();
const windowHeight = Dimensions.get('window').height;

const Itinerario = ({ route, navigation }) => {
  let item = route.params.item;
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.main}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.onPressBack}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialIcons name="arrow-back-ios" color={color} size={26} />
          </TouchableOpacity>

          <View style={styles.itinerarioDefinition}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.itinerarioText}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </View>

          <View style={styles.wrapperBtnRecomendados}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#1DB6B6"
              style={styles.onPressRecomendados}
              onPress={() => {
                console.log('press');
              }}
            >
              <View style={styles.btnRecomendados}>
                <Text style={styles.empezarRecomendados}>Empezar</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.content}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {},
  header: {
    flexDirection: 'column',
    height: windowHeight * 0.4,
    backgroundColor: '#FFFFFF',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  itinerarioDefinition: {
    marginTop: 10,
    marginHorizontal: '10%',
  },
  image: {
    alignSelf: 'center',
  },
  itinerarioText: {
    marginTop: 10,
  },
  wrapperBtnRecomendados: {
    // justifyContent: 'flex-end',
    // alignSelf: 'flex-end',
    // alignContent: 'flex-end',
    // alignItems: 'flex-end',
    backgroundColor: 'red',
  },
  btnRecomendados: {
    padding: 7,
    borderRadius: 5,
    backgroundColor: colors.Background,
    shadowColor: '#000',
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
    borderRadius: 30,
  },

  content: {
    justifyContent: 'center',
    marginVertical: 10,
    marginLeft: 10,
    flex: 2,
  },
  text: {
    fontFamily: 'Nunito-Bold',
    color: colors.TextDark,
  },
  onPressBack: {
    borderRadius: 15,
    width: 26,
    marginLeft: 20,
    marginTop: 20,
  },
});

export default Itinerario;
