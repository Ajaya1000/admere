import React from 'react';
import BgImage from "../assets/bg.png";
as;
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import bg2 from "../assets/bg2.png"
import o2 from "../assets/o2.png"
export default function Login1(props) {
  return (
    <>
      <ImageBackground style={{ flex: 1 }} source={BgImage}>
        <View style={styles.container}>
          <View style={styles.upper}>
              <ImageBackground source={bg2}>
                  <View >
                      <ImageBackground source={o2}>

                      </ImageBackground>
                  </View>
              </ImageBackground>
          </View>
          <View style={styles.lower}>
              <View>
                    <TouchableHighlight>
                    <View>
                    <Text>Enter Your Mobile Number</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View>
                    <Text>Continue With Facebook</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View>
                    <Text>Continue With Google</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View>
                    <Text>Continue With Email</Text>
                    </View>
                </TouchableHighlight>
              </View>
              <View>
                  <View>
                      <Text>By Contnuing, You Agree To Our</Text> <Text>Terms of Services</Text><Text> &amp; </Text><Text>Privacy Policy</Text> 
                  </View>
              </View>
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