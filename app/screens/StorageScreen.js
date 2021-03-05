import React, { useState, useCallback, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Button,
} from 'react-native';
import colors from '../assets/colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageScreen = ({ navigation }) => {
  const [stored, setStored] = useState(0);

  useEffect(() => {
    if (!stored) {
      storeData({ id: '1', name: 'itinerario 1' });
    }
  }, []);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storedData', jsonValue);
      setStored(value);
    } catch (e) {
      console.warn('ERROR: ', e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storedData');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.warn('ERROR: ', e);
    }
  };

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
        <Text style={styles.textBtnConintue}>GO BACK</Text>
      </TouchableHighlight>

      <Button
        title="SAVE"
        onPress={() => {
          console.log('SET DATA');
          // storeData();
        }}
      />

      <Button
        title="GET"
        onPress={() => {
          console.log('GET DATA');
          setStored(getData());
          alert(stored.name);
        }}
      />

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

export default StorageScreen;
