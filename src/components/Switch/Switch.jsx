import React from "react";
import { View, Switch, Text, Image } from "react-native";
import styles from "./Switchstyles";

const ThemeSwitcher = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
      {/* Profile Image */}
      <Image 
        source={{ uri: "https://www.w3schools.com/howto/img_avatar.png" }} 
        style={styles.profileImage} 
      />
      
      {/* Text and Switch */}
      <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
        EnerGize
      </Text>

      {/* Optimized Switch */}
      <Switch 
        value={isDarkMode} 
        onValueChange={() => setIsDarkMode(!isDarkMode)} 
        trackColor={{ false: "#4CAF50", true: "#ccc" }} // Custom track colors
        thumbColor={isDarkMode ? "#fff" : "#000"} // Thumb color
      />
    </View>
  );
};

export default ThemeSwitcher;
