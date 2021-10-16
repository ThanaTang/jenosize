import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native"
import { HomeScreen } from "./src/Pages/Home"
import { MapScreen } from "./src/Pages/MapScreen"

export default function App() {
  const [screenIndex, setscreenIndex] = useState(2)

  const renderScreen = () => {
    if (screenIndex === 1) {
      return <HomeScreen onChange={setscreenIndex} />
    }

    if (screenIndex === 2) {
      return <MapScreen onChange={setscreenIndex} />
    }
  }

  return <View style={styles.container}>{renderScreen()}</View>
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  Logo: {},
  logo: {
    width: 66,
    height: 58,
  },
})
