import React from "react"
import { StyleSheet, Text, View, Image, Button } from "react-native"

export const NavigationBar = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Button title="Back" onPress={() => onPress(1)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: "100%",
    backgroundColor: "red",
    justifyContent: "flex-start",
  },
})
