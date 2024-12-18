import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const courses = [
  { id: "1", title: "Learn React Native", description: "A beginner-friendly guide to React Native.", image: "https://via.placeholder.com/150" },
  { id: "2", title: "Master Math Basics", description: "Sharpen your math skills with interactive lessons.", image: "https://via.placeholder.com/150" },
];

export default CoursesScreen = () => {
  return (
    <FlatList
      data={courses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  image: {
    height: 100,
    width: "100%",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
