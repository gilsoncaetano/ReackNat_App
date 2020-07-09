import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function CardapioScreen() {
  const [dados, setDados] = useState([
    <Image source={require("../img/gilson.png")} />,
    {
      name: "Francisco Gilson Rufino Caetano",
    },
    {
      name: "•	Ensino Médio Completo concluído",
      escola: " ESCOLA:   E.E. Parque jurema III Concluído em 12/2014.",
    },
    {
      name: "•	Cursando Técnico: Técnico em Informática.",
      escola:
        "ESCOLA: SENAC-TATUAPÈ, Carga Horária 1200 horas início 04/2019 a 11/2020.",
    },
    {
      name: "CURSO:  Eletricista de Instalação",
    },
    {
      name: "CURSO: NR-10",
    },
    {
      name: "CURSO: NR-35",
    },

    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
  ]);

  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          marginBottom: 0,
        }}
      >
        {" "}
        <Image source={require("../img/gilson.png")} />
      </Text>

      <FlatList
        data={Object.keys(dados)}
        renderItem={({ item, index }) => (
          <View style={{ backgroundColor: "#e0e0e0" }}>
            <Text
              style={{
                fontSize: 23,
                marginTop: -10,
                paddingLeft: 10,
                paddingRight: 5,
                fontWeight: "bold",
              }}
            >
              {dados[index].name}
            </Text>
            <Text
              style={{
                fontSize: 20,
                marginTop: 5,
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              {dados[index].escola}
            </Text>
            <Text
              style={{
                fontSize: 20,
                marginTop: 0,
                paddingLeft: 10,
                marginBottom: 10,
              }}
            >
              {dados[index].curso}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
