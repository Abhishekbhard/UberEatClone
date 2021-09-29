import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";

const items = [
  { image: require("../assets/images/shopping-bag.png"), text: "Pick-up" },
  { image: require("../assets/images/bread.png"), text: "Bakery Items" },
  { image: require("../assets/images/fast-food.png"), text: "Fast Foods" },
  { image: require("../assets/images/deals.png"), text: "Deals" },
  { image: require("../assets/images/coffee.png"), text: "Coffee and Tea" },
  { image: require("../assets/images/desserts.png"), text: "Desserts" },
];

function Categories(props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ alignItems: "center", marginRight: 30 }}>
        <Image source={items[0].image} style={styles.image} />
        <Text style={styles.text}>{items[0].text}</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {},
  image: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default Categories;
