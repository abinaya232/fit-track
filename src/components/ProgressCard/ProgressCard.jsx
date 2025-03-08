import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./ProgressCardStyles";

const ProgressCard = () => {
  const [workouts, setWorkouts] = useState(0);
  const [calories, setCalories] = useState(0);
  const [activeTime, setActiveTime] = useState(0);
  const totalWorkouts = 7; 

  const handleWorkout = () => {
    if (workouts < totalWorkouts) {
      setWorkouts(workouts + 1);
      setCalories(calories + 250); 
      setActiveTime(activeTime + 20); 
    }
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.progressCard}>
        <Text style={styles.title}>Today's Progress</Text>
        <View style={styles.row}>
          <View style={styles.stat}>
            <Text style={styles.value}>{workouts}/{totalWorkouts}</Text>
            <Text style={styles.label}>Workouts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.value}>{calories}</Text>
            <Text style={styles.label}>Calories</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.value}>{activeTime} min</Text>
            <Text style={styles.label}>Active Time</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.workoutButton} onPress={handleWorkout}>
          <Text style={styles.buttonText}>Add Progress</Text>
        </TouchableOpacity>
      </View>

      {/* Weekly Progress */}
      <View style={styles.weeklyCard}>
        <Text style={styles.weeklyTitle}>Weekly Progress</Text>
        <View style={styles.weeklyRow}>
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
            <View key={index} style={styles.dayContainer}>
              <View style={[styles.circle, index < workouts && styles.filledCircle]} />
              <Text style={styles.dayLabel}>{day}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ProgressCard;
