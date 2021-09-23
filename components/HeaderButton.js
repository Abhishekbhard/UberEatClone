import React from "react";

import { StyleSheet, Text, TouchableOpacity } from "react-native";

const HeaderButton = ({
  activeTab,
  btnColor,
  setActiveTab,
  text,
  textColor,
}) => (
  <TouchableOpacity
    style={[
      styles.container,
      { backgroundColor: activeTab === text ? "black" : "white" },
    ]}
    onPress={() => setActiveTab(text)}
  >
    <Text
      style={[styles.text, { color: activeTab === text ? "white" : "black" }]}
    >
      {text}
    </Text>
  </TouchableOpacity>
);
export default HeaderButton;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  text: {
    fontSize: 15,
    fontWeight: "900",
  },
});
