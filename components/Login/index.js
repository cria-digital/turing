import React from "react";
import {
  Text,
  Button,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Login({ navigation, route }) {
  const pressHandler = () => {
    navigation.push("About");
  };

  return (
    <View>
      <View style={{ height: 180, padding: 50, paddingTop: 100 }}>
        <LinearGradient
          colors={["#2B3445", "#7B60FF"]}
          style={{
            height: 180,
            marginTop: -100,
            width: "140%",
            marginLeft: -50,
          }}
        >
          <Image
            source={require("../../assets/logotipo_turing.png")}
            style={{ marginTop: 80, marginLeft: "auto", marginRight: "auto" }}
          />
        </LinearGradient>
      </View>
      <ScrollView style={{ padding: "10%" }}>
        <Pressable
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 35,
            elevation: 3,
            backgroundColor: "#fff",
            marginTop: 35,
          }}
          onPress={() => {}}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/simboloGoogle.png")}
              style={{}}
            />
            <Text
              style={{
                fontSize: 16,
                lineHeight: 21,
                fontWeight: "100",
                letterSpacing: 0.25,
                color: "#000",
                marginTop: 5,
                marginLeft: 15,
              }}
            >
              Entrar com o Google
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 35,
            elevation: 3,
            backgroundColor: "#fff",
            marginTop: 10,
            marginBottom: 10,
          }}
          onPress={() => {}}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/simboloLinkedin.png")}
              style={{}}
            />
            <Text
              style={{
                fontSize: 16,
                lineHeight: 21,
                fontWeight: "100",
                letterSpacing: 0.25,
                color: "#000",
                marginTop: 5,
                marginLeft: 15,
              }}
            >
              Entrar com o Linkedin
            </Text>
          </View>
        </Pressable>
        <View
          style={{ marginTop: 15, flexDirection: "row", alignItems: "center" }}
        >
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: "#848995",
              width: 125,
            }}
          ></View>
          <Text style={{ color: "#848995", marginLeft: 15, marginRight: 15 }}>
            Ou
          </Text>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: "#848995",
              width: 125,
            }}
          ></View>
        </View>
        <Text style={{ marginLeft: 15, marginTop: 15, color: "#848995" }}>
          E-mail
        </Text>
        <TextInput
          placeholder="Ex.: felipe@gmail.com"
          style={{
            borderWidth: 1,
            borderRadius: 15,
            padding: 8,
            borderColor: "#cdcdcd",
            padding: 15,
            marginTop: 5,
          }}
        />
        <Text style={{ marginLeft: 15, marginTop: 15, color: "#848995" }}>
          Senha
        </Text>
        <TextInput
          placeholder="Digite sua senha"
          style={{
            borderWidth: 1,
            borderRadius: 15,
            padding: 8,
            borderColor: "#cdcdcd",
            padding: 15,
            marginTop: 5,
          }}
        />

        <Pressable
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 35,
            elevation: 3,
            backgroundColor: "#5D3BFA",
            marginTop: 35,
            marginBottom: 25,
          }}
          onPress={() => {
            route.params.setValue(false);
          }}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 21,
              fontWeight: "bold",
              letterSpacing: 0.25,
              color: "white",
            }}
          >
            Entrar
          </Text>
        </Pressable>
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>
          Não tem uma conta ainda ?
        </Text>
        <Pressable
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 35,
            elevation: 3,
            backgroundColor: "transparente",
            marginTop: 25,
            marginBottom: 80,
            borderWidth: 1,
            marginBottom: 200,
          }}
          onPress={() => {
            navigation.push("Register");
          }}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 21,
              fontWeight: "bold",
              letterSpacing: 0.25,
              color: "#000",
            }}
          >
            Cadastre-se agora
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
