import React from 'react';
import BgImage from "../assets/bg.png";
as;
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import bg3 from "../assets/bg2.png"
import o3 from "../assets/o2.png"
export default function Login2(props) {
  return (
    <>
      <ImageBackground style={{ flex: 1 }} source={BgImage}>
        <View style={styles.container}>
          <View style={styles.upper}>
              <ImageBackground source={bg3}>
                  <View>
                      <ImageBackground source={o3}>

                      </ImageBackground>
                  </View>
              </ImageBackground>
          </View>
          <View style={styles.lower}>
              
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   backgroundImage:
  },
  upper: {

  },
  lower: {
    
  }
});