import React from "react";
import { TextInput, StyleSheet } from "react-native";

const InputComponent = (props) => <TextInput style={styles.input} {...props} />;

const styles = StyleSheet.create({
  input: { width: "80%", padding: 10, borderWidth: 1, marginBottom: 10, borderRadius: 5 },
});

export default InputComponent;
