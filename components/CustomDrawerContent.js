import * as React from 'react';
import { View, StyleSheet, Image,Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';


const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.aa} >
                <Image source={{ uri: "https://picsum.photos/200/300"}} style={styles.avatar} />
                <Text style={styles.name}>Javier F.</Text>
            </View>
            <View style={styles.lineSeparator}></View>
            <DrawerItemList {...props} />
            <DrawerItem 
            label="Help" 
            onPress={() => alert('Link to help')} 
            options={
                {
                  drawerIcon: () => (<MaterialIcons name="info" color={'#79A6EB'} size={26} />)
                }
              }
            />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    aa: {
        flexDirection: "row",
        marginVertical: 20,
        marginLeft: 20,
        alignItems: "center",
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#FFFFFF",
        marginRight: 20,
    },
    name: {
        fontSize: 16,
    },
    lineSeparator: {
        borderBottomColor: '#78A6EB',
        borderBottomWidth: 1,
        width: "80%",
        alignSelf: "center",
        marginBottom: 20,
    },
});

export default CustomDrawerContent;