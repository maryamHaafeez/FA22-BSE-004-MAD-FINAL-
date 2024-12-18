import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Education App!</Text>
      <Button title="Go to Courses" onPress={() => navigation.navigate("Courses")} />
      <Button title="Go to Quizzes" onPress={() => navigation.navigate("Quizzes")} />
      <Button title="Go to Community" onPress={() => navigation.navigate("Community")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
