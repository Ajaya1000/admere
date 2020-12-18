import React from "react";
import BgImage from "../assets/bg.png";
as;
import { ImageBackground, StyleSheet, Text, View,TouchableHighlight } from "react-native";
// import { TouchableHighlight } from "react-native-gesture-handler";
import bg1 from "../assets/bg1.png";
import o1 from "../assets/o1.png";
export default function Home(props) {
  return (
    <>
      <ImageBackground style={{ flex: 1 }} source={BgImage}>
        <View style={styles.container}>
          <View style={styles.upper}>
              <ImageBackground source={bg1}>
                  <View >
                      <ImageBackground source={o1}>

                      </ImageBackground>
                  </View>
              </ImageBackground>
          </View>
          <View style={styles.lower}>
              <TouchableHighlight style={{backgroundColor:'#fff'}}>
                <View>
                  <Text>GET STARTED</Text>
                  <Text> Avail Best Offers &amp; Discounts Only For You </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight>
                <View>
                  <Text>Continue Without Login</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight>
                <View>
                  <Text>Already A Tiffina Member</Text>
                  <Text>Login</Text>
                </View>
              </TouchableHighlight>
              {/* <TouchableHighlight>
                <View>
                  <Text>1</Text>
                </View>
              </TouchableHighlight> */}
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
    flex: 3

  },
  lower: {
    flex: 2
  }
});
