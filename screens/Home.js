import React from "react";
import { View, StyleSheet, Text } from "react-native";
import HeaderTabs from "../components/HeaderTabs";

function Home(props) {
  return (
    <View style={styles.container}>
      <HeaderTabs />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default Home;
