import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ProgressScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Dashboard</Text>
      <Text>You have completed 50% of your courses!</Text>
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
  },
});
