import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";
import DadosScreen from "../screens/DadosScreen";
import ContatoScreen from "../screens/ContatoScreen";
import FormacaoScreen from "../screens/FormacaoScreen";
import InformacaoScreen from "../screens/InformacaoScreen";
import LocalizacaoScreen from "../screens/LocalizacaoScreen";
import ExperienciaScreen from "../screens/ExperienciaScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator 
      initialRouteName="Dados"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Dados"
        component={Dados}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user-tie" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Contato"
        component={Contato}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="phone-square" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Formação"
        component={Formacao}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user-graduate" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Experiência"
        component={Experiencia}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="tools" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Informação"
        component={Informacao}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Localização"
        component={Localizacao}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="map-marker-alt" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <FontAwesome5 size={27} style={{ marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

const DadosStack = createStackNavigator();
function Dados() {
  return (
    <DadosStack.Navigator >
      <DadosStack.Screen
        name="DadosScreen"
        component={DadosScreen}
        options={{ headerTitle: "Meus Dados" }}
      />
    </DadosStack.Navigator>
  );
}

const ContatoStack = createStackNavigator();
function Contato() {
  return (
    <ContatoStack.Navigator>
      <ContatoStack.Screen
        name="ContatoScreen"
        component={ContatoScreen}
        options={{ headerTitle: "Contato" }}
      />
    </ContatoStack.Navigator>
  );
}

const FormacaoStack = createStackNavigator();
function Formacao() {
  return (
    <FormacaoStack.Navigator>
      <FormacaoStack.Screen
        name="FormacaoScreen"
        component={FormacaoScreen}
        options={{ headerTitle: "Formação" }}
      />
    </FormacaoStack.Navigator>
  );
}

const ExperienciaStack = createStackNavigator();
function Experiencia() {
  return (
    <ExperienciaStack.Navigator>
      <ExperienciaStack.Screen
        name="ExperienciaScreen"
        component={ExperienciaScreen}
        options={{ headerTitle: "Experiência" }}
      />
    </ExperienciaStack.Navigator>
  );
}

const InformacaoStack = createStackNavigator();
function Informacao() {
  return (
    <InformacaoStack.Navigator>
      <InformacaoStack.Screen
        name="InformacaoScreen"
        component={InformacaoScreen}
        options={{ headerTitle: "Informação" }}
      />
    </InformacaoStack.Navigator>
  );
}

const LocalizacaoStack = createStackNavigator();
function Localizacao() {
  return (
    <LocalizacaoStack.Navigator>
      <LocalizacaoStack.Screen
        name="LocalizacaoScreen"
        component={LocalizacaoScreen}
        options={{ headerTitle: "Localização" }}
      />
    </LocalizacaoStack.Navigator>
  );
}
