import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Keyboard } from "react-native";
import firebase from '../../firebase/firebaseConnection';

console.disableYellowBox=true;

import { useNavigation } from "@react-navigation/native";

export default function Login(){
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

   

    async function cadastrar(){
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((value)=>{
            alert('Usuário criado! '+ value.user.email);
        })
        .catch((error)=>{
            if(error.code === 'auth/weak-password'){
                alert('Sua senha deve ter pelo menos 6 caracteres.');
                return;
            }
            if(error.code === 'auth/invalid-email'){
                alert('email inválido!')
                return;
            }else{
                alert('Algo deu errado!')
                return;
            }
        })

        Keyboard.dismiss();
        setEmail('')
        setPassword('')
    }

    async function logar(){
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((value)=>{
            alert('Bem-vindo! '+ value.user.email);
            navigation.navigate('Home', {email: value.user.email})
        })
        .catch(()=>{
            alert('Algo deu errado!')
            return;
        })

        Keyboard.dismiss();
        setEmail('')
        setPassword('')
    }

    return(
        <View style={styles.container}>
            <Image 
            source={require('../../img/login.png')}
            style={styles.img}
            />

            <View style={styles.viewInput}>
                <TextInput 
                style={styles.input}
                placeholder="Email"
                underlineColorAndroid='transparent'
                onChangeText={ (texto) => setEmail(texto) }
                value={email}
                />

                <TextInput 
                style={styles.input}
                placeholder="Password"
                underlineColorAndroid='transparent'
                onChangeText={ (texto) => setPassword(texto) }
                value={password}
                />
            </View>
           
            <View style={styles.btnArea}> 
                <TouchableOpacity style={styles.btn} onPress={logar}>
                    <Text style={styles.btnTexto}>Sign In</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.btnAreaCad}> 
                <TouchableOpacity style={styles.btn} onPress={cadastrar}>
                    <Text style={styles.btnTexto}>register</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
    },
    img:{
        width: 130,
        height: 130,
        marginTop: 70
    },
    input:{
        height: 40,
        borderWidth: 1,
        borderColor: '#222',
        margin: 10,
        fontSize: 10,
        padding: 10,
        borderRadius: 15,
        width: 320,
        backgroundColor: '#FFF',
        marginTop: 7
    },
    viewInput:{
        marginTop: 70
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
    },
    btnAreaCad:{
        marginTop:10,
        height: 40,
        width: 320
    }
})