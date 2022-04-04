import { View, Text, Image, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  
  return (
    <View>
      <Image />
      <Text></Text>
      <View></View>
      <Text>Ingredients</Text>
      <Text>Steps</Text>
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({});
