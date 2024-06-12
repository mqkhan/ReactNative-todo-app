import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTodos } from "../context/TodosContext";

const DetailScreen = ({ route, navigation }) => {
  const { todoId } = route.params;
  const { todos, markAsDone, deleteTodo } = useTodos();
  const todo = todos.find((t) => t.id === todoId);

  if (!todo) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.title}</Text>
      <Button
        title="Mark as Done"
        onPress={() => {
          markAsDone(todo.id);
          navigation.goBack();
        }}
      />
      <Button
        title="Delete"
        onPress={() => {
          deleteTodo(todo.id);
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DetailScreen;
