import React, { useState, useEffect } from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";

const ButtonComponent = () => {
  const [name, setName] = useState("");
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    setSeconds(0); 
    setHasStarted(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      {!isNameEntered ? (
        <>
          <Text style={styles.greeting}>Welcome! What's your name?</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
          <Button
            title="Submit"
            onPress={() => {
              if (name.trim() !== "") {
                setIsNameEntered(true);
              }
            }}
          />
        </>
      ) : (
        <>
          <Text style={styles.welcome}>Hello, {name}! Ready for your workout?</Text>
          {!isRunning ? (
            <Button title="Start Workout" onPress={handleStart} />
          ) : (
            <Button title="Stop Workout" onPress={handleStop} color="red" />
          )}

          {hasStarted && (
            <Text style={styles.timer}>
              {isRunning
                ? `Your Workout Time: ${seconds} sec`
                : `Your Workout Time: ${seconds} sec`}
            </Text>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  greeting: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  welcome: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: 200,
    marginBottom: 10,
    borderRadius: 5,
    textAlign: "center",
  },
  timer: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
  },
});

export default ButtonComponent;
