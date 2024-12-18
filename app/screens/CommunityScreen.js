import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const posts = [
  { id: "1", user: "John", message: "How do I solve this math problem?" },
  { id: "2", user: "Jane", message: "React Native is awesome!" },
];

export default CommunityScreen = () => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.user}>{item.user}</Text>
          <Text>{item.message}</Text>
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
  user: {
    fontWeight: "bold",
  },
});
