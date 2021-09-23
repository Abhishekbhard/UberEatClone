import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import HeaderButton from "./HeaderButton";

function HeaderTabs(props) {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="PickUp"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default HeaderTabs;
