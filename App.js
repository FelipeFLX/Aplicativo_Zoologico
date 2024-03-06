import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  
  return (
    <ImageBackground source={require('./assets/Imagens/Fundo.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Cadastro</Text>
        <View styles="contInput">
        <FontAwesomeIcon icon="fa-solid fa-user" style={{color: "#63E6BE",}} />
        <TextInput style={styles.input} placeholder="Nome Completo" />
        </View>
        <TextInput style={styles.input} placeholder="Data de Nascimento" />
        <TextInput style={styles.input} placeholder="Número de Telefone" />
        <TextInput style={styles.input} placeholder="Endereço de Email" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />  
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  titulo:{
    fontSize:40,
    marginBottom:30,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    width: '100%',
    padding: 10,
    marginBottom: 20,
  },

  button: {
    borderWidth:1,
    backgroundColor: 'green',
    borderRadius: 30,
    width: '100%',
    padding: 10,
    marginBottom: 10,
    alignItems:'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
