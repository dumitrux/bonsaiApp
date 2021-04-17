import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableHighlight,
} from 'react-native';

import colors from '../assets/colors/colors';

const BoxEncurso = ({ item, navigation }) => {
  // console.log(item);
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate('Itinerario', { item });
      }}
    >
      <View style={styles.boxEncurso}>
        <View style={styles.topEncurso}>
          <Image source={item.image} style={styles.imageEncurso} />
          <Text style={styles.textEncursoName}>{item.name}</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressBarLeft, { width: '80%' }]} />
          <View style={[styles.progressBarRight, { width: '20%' }]} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  boxEncurso: {
    backgroundColor: 'white',
    marginHorizontal: 4,
    borderRadius: 5,
    width: windowHeight * 0.22,
    marginVertical: 5,

    shadowColor: '#000',
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
    alignSelf: 'flex-end',
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
});

export default BoxEncurso;
