import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useTodos } from "../context/TodosContext";

const AddScreen = ({ navigation }) => {
  const { addTodo } = useTodos();
  const [title, setTitle] = useState("");

  const handleAddTodo = () => {
    addTodo(title);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Todo title"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Add" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default AddScreen;
