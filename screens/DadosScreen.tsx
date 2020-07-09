import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function DadosScreen() {
  const [dados, setDados] = useState([
    <Image source={require("../img/gilson.png")} />,

    {
      name: "Francisco Gilson Rufino Caetano",
    },
    {
      idade: "IDADE: 27 Anos",
      nacionalidade: "NACIONALIDADE: Brasileiro",
      data: "DATA NASC.: 20/11/1993",
      estado: "ESTADO CIVIL: Solteiro",
      endereco: "ENDEREÇO:  Rua Primeira Cruz Nº281",
      bairro: "BAIRRO: Parque das Naçoões",
      cidade: "CIDADE: Guarulhos-SP",
    },
    {},
  ]);

  return (
    

    <View >
      <Text style={{ textAlign: "center", marginTop: 10, marginBottom: 0 }}>
        {" "}
        <Image source={require("../img/gilson.png")} />
      </Text>

      <FlatList
        data={Object.keys(dados)}
        renderItem={({ item, index }) => (
          <View style={{backgroundColor: "#e0e0e0",}}>
            <Text style={{ fontSize: 24, textAlign: "center", marginTop: -55, marginBottom:-40,fontWeight:"bold" }}>
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
              {dados[index].idade}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 25,
                marginTop: -15,
              }}
            >
              {dados[index].nacionalidade}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 25,
                marginTop: -15,
              }}
            >
              {dados[index].data}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 25,
                marginTop: -15,
              }}
            >
              {dados[index].estado}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 25,
                marginTop: -15,
              }}
            >
              {dados[index].endereco}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 25,
                marginTop: -15,
              }}
            >
              {dados[index].bairro}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 25,
                marginTop: -15,
              }}
            >
              {dados[index].cidade}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

