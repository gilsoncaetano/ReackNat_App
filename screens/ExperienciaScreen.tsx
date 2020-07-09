import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function DadosScreen() {
  const [dados, setDados] = useState([
    <Image source={require("../img/gilson.png")} />,

    {
      experiencia: "Experiência Profissional",
    },
    {
      empresa: " ENEL – antiga ELETROPAULO",
      periodo: "• Período: 26/10/2015 – 16/03/2020",
      cargo: "• Cargo: Elétricos I e Motorista na categoria AD",
      atividades:
        "• Principais atividades: Infraestrutura de redes elétrica e Manutenção da rede.",
      endereco: "ENDEREÇO:  Av. Dr. Marcos Penteado de Ulhôa Rodrigues, 939",

      bairro: "BAIRRO: Tamboré – 06460-040",
      cidade: "CIDADE: Barueri – SP – Brasil",
      carta: "Carta de Recomendação",
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
      <Text style={{ textAlign: "center", marginTop: 10, marginBottom: 10 }}>
        {" "}
        <Image source={require("../img/logo.png")} />
      </Text>
      <FlatList
        data={Object.keys(dados)}
        renderItem={({ item, index }) => (
          <View style={{ backgroundColor: "#e0e0e0" }}>
            <Text
              style={{
                fontSize: 24,
                textAlign: "center",
                marginTop: -55,
                marginBottom: -40,
                fontWeight: "bold",
              }}
            >
              {dados[index].experiencia}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 25,
                marginTop: -20,
              }}
            >
              {dados[index].empresa}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 25,
                marginTop: -15,
              }}
            >
              {dados[index].periodo}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 25,
                marginTop: -15,
              }}
            >
              {dados[index].cargo}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 25,
                marginTop: -15,
              }}
            >
              {dados[index].atividades}
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

            <Text
              style={{
                fontSize: 24,
                textAlign: "center",
                //marginTop: 0,
                marginBottom: 0,
                fontWeight: "bold",
              }}
            >
              {dados[index].carta}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
