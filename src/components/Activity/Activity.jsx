import React from "react";
import { ActivityIndicator, View } from "react-native";
import styles from "./Activitystyles.jsx"; 

const ActIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#00f" />
    </View>
  );
};

export default ActIndicator;
