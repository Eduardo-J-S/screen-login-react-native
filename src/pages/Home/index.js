import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import firebase from '../../firebase/firebaseConnection';

import { useNavigation, useRoute, StackActions } from "@react-navigation/native";

export default function Home(){
    const navigation = useNavigation();
    const route = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
          title: route.params?.name === '' ? 'Pagina Inicial' : route.params?.name
        })
    
      }, [navigation])

      async function deslogar(){
        await firebase.auth().signOut();
        navigation.dispatch(StackActions.popToTop())
        alert('Deslogado com sucesso!');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Bem-Vindo!</Text>
            <Text style={styles.text}>{route.params?.email}</Text>
            <Text style={styles.text}>{route.params?.name}</Text>

            <View style={styles.btnArea}> 
                <TouchableOpacity style={styles.btn} onPress={deslogar}>
                    <Text style={styles.btnTexto}>log out</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
    },
    text:{
        alignItems: 'center',
        fontSize: 20,
        justifyContent: 'center'
    },
    btn:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#222',
        height: 40,
        borderRadius: 20
    },
    btnArea:{
        marginTop:19,
        height: 40,
        width: 320
    },
    btnTexto:{
        color: '#FFF'
    }
})