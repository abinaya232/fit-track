// src/components/Alert/Alert.js
import React from "react";
import { Button, Alert, View, StyleSheet } from "react-native";

const AlertComponent = () => {
  return (
    <View style={styles.container}>
      <Button title="Results" onPress={() => Alert.alert("Workout Completed!", "Good Job!")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default AlertComponent;
