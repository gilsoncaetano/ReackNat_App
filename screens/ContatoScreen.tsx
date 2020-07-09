import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function DadosScreen() {
  const [dados, setDados] = useState([
    <Image source={require("../img/gilson.png")} />,

    {
      name: "Francisco Gilson Rufino Caetano",
    },
    {
      celular: "CELULAR:  (11) 9 7957-7572 TIM",
      celular2: "CELULAR (2):  (11) 9 8367-7328 TIM",
      email: "E-Mail:  gilsonebcs@gmail.com",
      github: "GITHUB: https://github.com/gilsoncaetano",
      linkedin: "LINKEDIN:  linkedin.com/in/francisco-gilson-caetano-a74266169",
      bairro: "BAIRRO: Parque das Naçoões",
      cidade: "CIDADE: Guarulhos-SP",
    },
    {},
  ]);
  return (
    <View>
      <Text style={{ textAlign: "center", marginTop: 10, marginBottom: 0 }}>
        {" "}
        <Image source={require("../img/gilson.png")} />
      </Text>

      <FlatList
        data={Object.keys(dados)}
        renderItem={({ item, index }) => (
          <View style={{ backgroundColor: "#e0e0e0" }}>
            <Text
              style={{
                fontSize: 24,
                textAlign: "center",
                marginTop: -50,
                marginBottom: -10,
                fontWeight: "bold",
              }}
            >
              {dados[index].name}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 25,
                marginTop: -20,
              }}
            >
              {dados[index].celular}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 25,
                marginTop: -15,
              }}
            >
              {dados[index].celular2}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 25,
                marginTop: -15,
              }}
            >
              {dados[index].email}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 25,
                marginTop: -15,
              }}
            >
              {dados[index].github}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 25,
                marginTop: -15,
              }}
            >
              {dados[index].linkedin}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
