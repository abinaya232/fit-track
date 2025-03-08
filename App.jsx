import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import Picture from "./src/components/Image/Picture";
import ButtonComponent from "./src/components/Button/Button";
import InputComponent from "./src/components/Input/Input";
import AlertComponent from "./src/components/Alert/Alert";
import FlatListComponent from "./src/components/FlatList/FlatList";
import ThemeSwitcher from "./src/components/Switch/Switch";
import Content from "./src/components/Text/Text";
import ProgressCard from "./src/components/ProgressCard/ProgressCard";
import {RecentWorkouts} from "./src/components/RecentWorkouts/RecentWorkouts";
import { WorkoutPlans } from "./src/components/WorkoutPlans/WorkoutPlans";
import ActIndicator from "./src/components/Activity/Activity";

  

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        contentContainerStyle={styles.scrollViewContent} 
        keyboardShouldPersistTaps="handled"
      >
        <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
          <ThemeSwitcher isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Picture />
          <Content />
          <ProgressCard />
          <RecentWorkouts />
          <InputComponent/>
        </View>
        <ButtonComponent />
          
          <AlertComponent />
          <FlatListComponent />
          <WorkoutPlans />
          <ActIndicator />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 20, 
  },
  lightBackground: {
    backgroundColor: "#ffffff",
  },
  darkBackground: {
    backgroundColor: "#222222",
  },
});

export default App;
