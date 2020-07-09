import React from "react";
import { View, Text, Dimensions} from "react-native";
import MapView from "react-native-maps";

export default function LocalizacaoScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MapView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        initialRegion={{
          latitude: -23.4425293,
          longitude: -46.4171745,
          longitudeDelta: 0.0045,
          latitudeDelta: 0.0045,
        }}
      />
    </View>
  );
}
