import React from 'react';
import { View, StyleSheet, Button, TextInput, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function ScreenB() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Home', {name: "Esse conteúdo veio da tela B"})
    }
  
    return (
        <View style={styles.container}>

        <Text style={styles.titulo}>
            Livraria Valentina's
        </Text>

        <Text style={styles.subtitulo}>
            Bem vindo de volta, faça o login!
        </Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail ou telefone"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          keyboardType="email-address"
        />
       
       <TouchableOpacity style={styles.botao} onPress={openScreen}>
            <Text style={styles.botaoText}>Entrar</Text>
          </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#edecee",
        justifyContent: "center",
        alignItems: 'center',
    },

    titulo: {
        color: '#000',
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },

    subtitulo: {
        color: '#000',
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 30,
    },

    input: {
        height: 40,
        margin: 12,
        marginLeft: 35,
        padding: 8,
        borderRadius: 4,
        width: '80%',
        backgroundColor: '#ffffff',
        color: '#B5B5B5',
      },

      botao: {
        backgroundColor: '#132407',
        padding: 8,
        borderRadius: 5,
        width: '30%',
        alignItems: 'center',
        marginTop: 15,
        shadowOffset: {
          width: 2,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },

      botaoText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 15,
      },
})