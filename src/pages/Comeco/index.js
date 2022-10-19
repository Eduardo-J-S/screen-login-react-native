import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";



export default function Comeco(){
    const navigation = useNavigation();

    function goLogin(){
        navigation.navigate('Login')
    }

    function goRegister(){
        navigation.navigate('Register')
    }
    

    return(

        <View style={styles.container}>
            <Image 
            source={require('../../img/login.png')}
            style={styles.img}
            />
            <View style={styles.btnArea}> 
                <TouchableOpacity style={styles.btn} onPress={goLogin}>
                    <Text style={styles.btnTexto}>Logar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.btnAreaCad}> 
                <TouchableOpacity style={styles.btn} onPress={goRegister}>
                    <Text style={styles.btnTexto}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center'
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
        width: 320,
        marginTop: 100
    },
    btnTexto:{
        color: '#FFF'
    },
    btnAreaCad:{
        marginTop:10,
        height: 40,
        width: 320
    },
    img:{
        width: 130,
        height: 130,
        marginTop: 160
    }
})