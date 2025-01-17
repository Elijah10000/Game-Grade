/* eslint-disable prettier/prettier */

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const DetailsScreen: React.FC<{ navigation: any }> = ({
  navigation,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default DetailsScreen;
