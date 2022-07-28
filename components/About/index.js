import React from "react";
import { Text, Image, View, ScrollView } from "react-native";
import CardAbout from "../Cardabout";

export default function About() {
  return (
    <>
      <View style={{ backgroundColor: "white" }}>
        <ScrollView>
          <Image
            source={require("../../assets/aboutTuring.png")}
            style={{ width: "100%" }}
          />
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "#5D3BFA",
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 15,
                textAlign: "center",
              }}
            >
              Olá, somos a Turing
            </Text>
            <Text
              style={{
                color: "#2B3445",
                fontSize: 21,
                fontWeight: "bold",
                marginBottom: 15,
                textAlign: "center",
              }}
            >
              Nosso Manifesto
            </Text>
            <Text
              style={{
                width: "90%",
                color: "#2B3445",
                fontSize: 14,
                marginBottom: 15,
                textAlign: "center",
              }}
            >
              Fizemos um trabalho incansável para catalogar toda a indústria
              financeira, processamos milhões de números, calculamos inúmeros
              indicadores e usamos inteligência humana e computacional para
              criar o nosso algoritmo e encontrar os melhores portfólios! E por
              que fizemos tudo isso?
            </Text>
            <Text
              style={{
                width: "90%",
                color: "#2B3445",
                fontSize: 12,
                marginBottom: 35,
                textAlign: "center",
              }}
            >
              Estávamos muito insatisfeitos com a forma como as pessoas investem
              e tomam suas decisões. O mercado financeiro é dominado por poucos
              bancos e corretoras, que limitam produtos, oferecem alternativas
              ruins e são pouco transparentes. Decidimos então desenvolver
              ferramentas simples, que possibilitem qualquer pessoa avaliar,
              comparar e decidir de maneira muito mais consciente onde investir.
              Desta forma você se torna livre para encontrar aquelas aplicações
              que são mais rentáveis, e que melhor atendem o seu perfil. Não se
              limite mais à aquelas opções que são oferecidas a você, amplie seu
              horizonte e pesquise todos os produtos no mesmo lugar.
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#343F51",
              weight: 15,
              height: 950,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          >
            <CardAbout></CardAbout>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
