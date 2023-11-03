import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TextInput } from 'react-native';
import Header from "../src/components/Header";

const MyApp = () => {
  return (

    <ImageBackground
      source={require("../src/assets/4.jpg")}
      style={styles.imageBackground}

    >
      <View style={styles.container}>
        <Header />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />

      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#090F13",
    fontSize: 45,
    textAlign: "justify",
  },
  container: {
    width: "80%"
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    width: 250,
    height:45,
    marginBottom: 20,
    borderRadius: 5,
    paddingLeft: 10,

  },
});

export default MyApp;