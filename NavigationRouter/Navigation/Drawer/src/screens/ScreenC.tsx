import React from 'react';
import { View, StyleSheet, Button, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';

type ParamsProps = {
    name: string
}

export function ScreenC() {
    
    const route = useRoute();
    const { name } = route.params as ParamsProps;
    
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Cadastro')
    }
  
    return (
    <View style={styles.container}>
    


    <Text style={styles.titulo}>
            Livraria Valentina's
        </Text>

        <Text style={styles.subtitulo}>
            Conheça os livros que eu li, leia a resenha de cada um.
        </Text>

        <Image style={styles.image} source={require('../../assets/biblioteca.jpg')}></Image>

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

      image: {
        width: 300,
        height: 300,
        borderRadius: 5,
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



