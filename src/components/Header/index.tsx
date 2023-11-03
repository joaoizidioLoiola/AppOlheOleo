import { View, Text , Image, StyleSheet} from 'react-native'
import React from 'react'
import {styles} from "./styles"

const Header = () => {
  return (
    
    <View style={styles.header}>
      <Image
      source={require("../../assets/logo.png")}
      style={styles.logo}>

      </Image>
    </View> 
  )
};


export default Header;