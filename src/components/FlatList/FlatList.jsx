import React from "react";
import { FlatList, Text, View, StyleSheet, SafeAreaView } from "react-native";

const exercises = [
  { id: "1", name: "Push-ups" },
  { id: "2", name: "Squats" },
  { id: "3", name: "Lunges" },
  { id: "4", name: "Plank" },
];

const FlatListComponent = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          nestedScrollEnabled={true} 
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    backgroundColor: "#fff",
  },
  container: {
    flex: 1, 
    padding: 10,
  },
  listContainer: {
    paddingBottom: 20, 
  },
  item: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#f8f9fa",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, 
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FlatListComponent;
