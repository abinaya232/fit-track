import React from "react";
import { Image, View, Text } from "react-native";
import styles from "./PictureStyles"; 

const Picture = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/fit.jpg")} style={styles.image} />
      <Text style={styles.text}>🏃🏃‍♂️🏃‍♀️</Text>
    </View>
  );
};

export default Picture;
