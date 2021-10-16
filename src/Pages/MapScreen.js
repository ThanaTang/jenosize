import React from "react"
import { StyleSheet, Text, View, Image, Button, Dimensions } from "react-native"
import MapView, { Marker } from "react-native-maps"
import { NavigationBar } from "../Components/NavigationBar"

export const MapScreen = ({ onChange }) => {
  return (
    <View style={styles.container}>
      <NavigationBar onPress={() => onChange(1)} />
      <View style={{ marginTop: 50 }} />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 13.894180873810596,
          longitude: 100.51630272613636,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 13.894180873810596,
            longitude: 100.51630272613636,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          title={"Jenosize"}
          // description={marker.description}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  map: {
    alignSelf: "center",
    width: Dimensions.get("window").width / 1.25,
    height: Dimensions.get("window").height / 1.25,
  },
})
