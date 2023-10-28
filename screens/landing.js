import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Ronaldo's Recipes!</Text>
      <Image source={require("../images/ronaldo.png")} />
      <Button title="Recipe Time" onPress={() => navigation.navigate("Home", {screen: "HomeScreen"})} />
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
