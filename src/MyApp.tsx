import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TextInput, TouchableOpacity } from 'react-native';
import Header from "../src/components/Header";

import { stylesIni } from './styles/styleIni';
const MyApp = () => {
  const EsqueceuConta = () => {

  };

  const CriarConta = () =>{

  };

  const Login = () => {

  }
  
  return (

    <ImageBackground
      source={require("../src/assets/Background.jpg")}
      style={stylesIni.imageBackground}

    >

      <View style={stylesIni.container}>
        <Header />

        <Text style={stylesIni.textBemVindo}>
          Bem Vindo
        </Text>

        <Text style={stylesIni.textToThe}>
          To the future of transportation
        </Text>

        <TextInput
          style={stylesIni.input}
          placeholder="E-mail"
        />

        <TextInput
          style={stylesIni.input}
          placeholder="Senha"
          secureTextEntry={true}
        />

        <View style={stylesIni.buttonRow}>
            <View style={stylesIni.leftSection}>
              <TouchableOpacity onPress={EsqueceuConta}>
                <Text style={stylesIni.linkText}>
                Esqueceu a conta?
                </Text>
              </TouchableOpacity >
              <TouchableOpacity onPress={CriarConta}>
              <Text style={stylesIni.linkText}>
                Criar Conta?
              </Text>
              </TouchableOpacity>
            </View>
            <View style={stylesIni.rightSection}>
              <TouchableOpacity style={stylesIni.button} onPress={Login}>
                <Text style={stylesIni.buttonText}> 
                  Login
                </Text>
              </TouchableOpacity>
            </View>
        </View>


      </View>

    </ImageBackground>

  );
}



export default MyApp;