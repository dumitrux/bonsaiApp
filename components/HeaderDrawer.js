import * as React from 'react';
import { View, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const HeaderDrawer = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.headerWrapper} >
                <TouchableOpacity
                    onPress={() => { navigation.openDrawer() }}
                >
                    <MaterialIcons name="menu" color={'#79A6EB'} size={26} />
                </TouchableOpacity>
                <Image source={require('../assets/images/text-bonsai.png')} style={styles.textBonsai} />
                <MaterialIcons name="more-vert" color={'#79A6EB'} size={26} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
        alignItems: 'center',
    },
    textBonsai: {
        width: 120,
        height: 45,
    }
});

export default HeaderDrawer;