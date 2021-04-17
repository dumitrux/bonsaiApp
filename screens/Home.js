import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/colors/colors';
import HeaderDrawer from '../components/HeaderDrawer';

const Home = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <HeaderDrawer navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.text}>HomeV2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  container: {
    flex: 1,
  },
  text: {
    fontFamily: 'Nunito-Bold',
  },
});

export default Home;
