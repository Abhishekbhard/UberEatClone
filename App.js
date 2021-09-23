import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import Home from "./screens/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
