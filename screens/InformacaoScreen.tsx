import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function DadosScreen() {
  const [dados, setDados] = useState([
    <Image source={require("../img/gilson.png")} />,

    {
      name: "INFORMAÇÕES ADICIONAIS",
    },
    {
      nocoes:
        " Noções de Conhecimento de Infraestrutura de Redes de Computadores",
      conecimento:
        "• Em Windows, GNU/Linux, Ubuntu, e Manutenção de hardware, Instalação de",
      redes:
        "software, Instalação de Redes Locais de Computadores, Instalação e",
      locais:
        "configuração de sistemas e operacionais de redes locais de Router, Switch,",
      pint:
        "Access Point, Conhecimento básico em Administração de Redes, Windows",

      server: "Server, Ubuntu Server, pfSenser-Firewall, E linguagem de Programação nível",

      react: "básico em HTML + CSS + JAVA + REACT + JAVAScript + Banco de dados.",

      escritorio:"• Aplicações de escritório (Word, Excel, PowerPoint).",
      carta: "Conhecimento Adiquerido no Curso Técnico no SENAC-Tatuapé",
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
      <Text style={{ textAlign: "center", marginTop: 10, marginBottom: 0 }}>
        {" "}
        <Image source={require("../img/senac.png")} />
      </Text>
      <FlatList
        data={Object.keys(dados)}
        renderItem={({ item, index }) => (
          <View style={{ backgroundColor: "#e0e0e0", marginRight: 0 }}>
            <Text
              style={{
                fontSize: 24,
                textAlign: "center",
                marginTop: -55,
                marginBottom: -60,
                fontWeight: "bold",
              }}
            >
              {dados[index].name}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 18,
                marginTop: -20,
                color: "red",
              }}
            >
              {dados[index].nocoes}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 25,
                marginTop: -15,
              }}
            >
              {dados[index].conecimento}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 25,
                marginTop: -15,
              }}
            >
              {dados[index].redes}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 25,
                marginTop: -15,
              }}
            >
              {dados[index].locais}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 10,
                marginTop: -19,
              }}
            >
              {dados[index].point}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 10,
                marginTop: -15,
              }}
            >
              {dados[index].server}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 29,
                marginTop: 0,
              }}
            >
              {dados[index].react}
            </Text>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 29,
                marginTop: 0,
              }}
            >
              {dados[index].escritorio}
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
