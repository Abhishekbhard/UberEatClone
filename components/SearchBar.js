import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

function SearchBar(props) {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.searchContainer}>
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
        placeholder="Search"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: "row",
  },
  searchContainer: {
    backgroundColor: "white",
    borderRadius: 30,
    flexDirection: "row",
    marginRight: 8,
    padding: 9,
    alignItems: "center",
  },
});

export default SearchBar;
