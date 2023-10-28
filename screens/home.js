import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import axios from "axios";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);
  const [preferenceText, setPreferenceText] = useState("");

  // Define the URL and headers
  const apiUrl =
    "https://api.edamam.com/api/recipes/v2?type=public&app_id=b58c06ef&app_key=74e9fb5988754518dc17dc9eb42bb2fe&cuisineType=Asian";
  const headers = {
    Accept: "application/json",
    AcceptLanguage: "en",
  };
  const params = {
    from: 1,
    to: 20,
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Make the GET request
        axios
          .get(apiUrl, { params: params, headers: headers })
          .then((response) => {
            // Handle the API response data
            setRecipes(response.data.hits);
          })
          .catch((error) => {
            // Handle any errors
            console.error("API Error:", error);
          });
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
    >
      <TextInput
        value={preferenceText}
      />
      <Text>Recipes</Text>
      {Object.values(recipes).map((recipe) => (
        <>
          <Text>{recipe["recipe"]["label"]}</Text>
          <Image
            source={{ uri: recipe["recipe"]["image"] }}
            style={{ width: 200, height: 200 }}
          />
        </>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 100,
  },
});
