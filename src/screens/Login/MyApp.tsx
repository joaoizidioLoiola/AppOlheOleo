import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TextInput, TouchableOpacity } from 'react-native';
import Header from "../../components/Header";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

import { stylesIni } from '../../styles/styleIni';
const MyApp = () => {
  const EsqueceuConta = () => {

  };

  const EsqueceuSenha = () => {

  };
  const CriarConta = () => {

  };

  const Login = () => {

  };

  const IrGoogle = () => {

  }
  const IrApple = () => {

  };

  const IrPhone = () => {

  };

  return (

    <ImageBackground
      source={require("../../assets/Background.jpg")}
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
                Esqueceu a Conta?
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
        <View >
          <TouchableOpacity onPress={EsqueceuSenha} >
            <Text style={stylesIni.linkTextESenha}>
              Esqueceu a Senha?
            </Text>
          </TouchableOpacity>
        </View>
        <View >
          <Text style={stylesIni.socialText}>
            Redes Sociais Para Login
          </Text>
        </View>
        <View style={stylesIni.icons}>
          <TouchableOpacity onPress={IrGoogle} >
            <AntDesign name="google" size={30} color="white"  />
          </TouchableOpacity>
          <TouchableOpacity onPress={IrApple} >
            <AntDesign name="apple1" size={27} color="white" />
          </TouchableOpacity >
          <TouchableOpacity onPress={IrPhone} >
            <FontAwesome5 name="phone" size={30} color="white" />
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>

  );
}



export default MyApp;