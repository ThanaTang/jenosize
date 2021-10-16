import React from "react"
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from "react-native"

export const HomeScreen = ({ onChange }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../Assets/jenosize_logo.png")} />
      <TouchableHighlight
        style={styles.button}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => onChange(2)}
      >
        <Text>{"แผนที่ บริษัท Jenosize"}</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  logo: {},
  button: {
    width: 300,
    height: 50,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
})
