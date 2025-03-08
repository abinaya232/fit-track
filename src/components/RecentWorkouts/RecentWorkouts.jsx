import React from "react";
import { View, Text, ScrollView,Image } from "react-native";
import styles from "./RecentWorkoutsStyles"; // Import styles

const workouts = [
  { id: "1", title: "Morning Run", type: "Cardio", duration: "25 min", calories: "320 cal", color: "#FF5733",image: require("../../../assets/run.jpg") },
  { id: "2", title: "Hiit", type: "Strength", duration: "45 min", calories: "400 cal", color: "#335BFF",image: require("../../../assets/hiit.jpg") },
  { id: "3", title: "Cycling", type: "Endurance", duration: "35 min", calories: "280 cal", color: "#33A1FF",image: require("../../../assets/cycling.jpg") },
  { id: "4", title: "Yoga Flow", type: "Flexibility", duration: "30 min", calories: "180 cal", color: "#33FF57",image: require("../../../assets/yoga.jpg") },
  { id: "5", title: "skipping", type: "Strength", duration:"45min",calories:"250 cal",color:"#FFC0CB",image:require("../../../assets/skipping.jpg")},
];

 export const RecentWorkouts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recent Workouts</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {workouts.map((workout) => (
          <View key={workout.id} style={[styles.card, { backgroundColor: workout.color }]}>
            <Image source={workout.image} style={styles.image} />
            <Text style={styles.title}>{workout.title}</Text>
            <Text style={styles.subtitle}>{workout.type}</Text>
            <View style={styles.footer}>
              <Text style={styles.duration}>{workout.duration}</Text>
              <Text style={styles.calories}>{workout.calories}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};


