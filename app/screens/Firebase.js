import React, { useState, useCallback, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import colors from '../assets/colors/colors';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import firestore from '@react-native-firebase/firestore';

const Firebase = ({ navigation }) => {
  // const [itinerary, setItinerary] = useState(0);

  // const fetchItinerary = useCallback(async () => {
  //   const itineraryDocument = await firestore()
  //     .collection('itineraries')
  //     .doc('jtESvbq3sycnM8hBDYM2')
  //     .get();

  //   console.log(itineraryDocument);
  //   console.log(itineraryDocument._data);
  //   setItinerary(itineraryDocument);
  // }, []);

  // useEffect(() => {
  //   fetchItinerary();
  // }, []);

  return (
    <View style={styles.main}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.btnBack}
        onPress={() => {
          console.log('goBack');
          navigation.goBack();
        }}
      >
        <MaterialIcons name="arrow-back-ios" color={color} size={26} />
      </TouchableOpacity>

      <View style={styles.header}>
        <View style={styles.itinerarioDefinition}>
          <View style={styles.itinerarioText}>
            <Text style={styles.title}>TITLE</Text>
            <Text style={styles.description}>Description</Text>
          </View>
        </View>
      </View>

      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#1DB6B6"
        style={styles.btnContinue}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.textBtnConintue}>BACK</Text>
      </TouchableHighlight>

      <View style={styles.content}>
        <Text>CONTENT</Text>
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
    elevation: 90,
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

export default Firebase;
