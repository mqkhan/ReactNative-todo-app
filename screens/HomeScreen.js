import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { useTodos } from "../context/TodosContext";

const HomeScreen = ({ navigation }) => {
  const { todos } = useTodos();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("Detail", { todoId: item.id })}
    >
      <Text style={[styles.title, item.done && styles.doneTitle]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button title="Add Todo" onPress={() => navigation.navigate("Add")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
  doneTitle: {
    textDecorationLine: "line-through",
    color: "red",
  },
});

export default HomeScreen;
