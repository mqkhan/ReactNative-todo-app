import React from "react";
import StackNavigator from "./navigation/StackNavigator";
import { TodosProvider } from "./context/TodosContext";

const App = () => {
  return (
    <TodosProvider>
      <StackNavigator />
    </TodosProvider>
  );
};

export default App;
