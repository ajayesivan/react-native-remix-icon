import React from "react";
import { View, StyleSheet } from "react-native";
import RemixIcon from "./src";

const App = () => {
  return (
    <View style={style.container}>
      <RemixIcon name="dv-line" color="grey" size="30" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default App;
