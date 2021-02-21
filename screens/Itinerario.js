import * as React from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';

import colors from '../assets/colors/colors';

const Itinerario = ({ route }) => {
    //console.log(route);
    const item = route.params;
    console.log(item);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}>
            <View style={styles.wrapper}>
                <Text style={styles.text}>EN CURSO</Text>
                <Text style={styles.text}>RECOMENDADOS</Text>
                <Text style={styles.text}>POR CATEGORIAS</Text>
            </View >
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        marginVertical: 10,
        marginLeft: 10,
    },
    text: {
        fontFamily: 'Nunito-Bold',
        color: colors.TextDark,
    }
});

export default Itinerario;