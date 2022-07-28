import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';


const CardAbout = () => (
    <>
        <View style={{ marginTop: 15 }}>
            <Card style={{ borderRadius: 8 }}>
                <Card.Image source={require('../../assets/unsplash.png')} />
                <Text style={{ color: '#7B67AB', fontSize: 16, fontWeight: 'bold', marginTop: 15 }}>
                    Nosso time
                </Text>
                <Text style={{ color: 'black', fontSize: 21, fontWeight: 'bold', marginTop: 10 }}>
                    Quem somos
                </Text>
                <Text style={{ color: '#2B3445', fontSize: 16, marginTop: 10, marginBottom: 10 }}>
                    A Turing é uma empresa de Tecnologia que busca transformar a forma como as pessoas investem.
                </Text>
                <Text style={{ color: '#848995', fontSize: 12, marginTop: 10, marginBottom: 10 }}>
                    Nós não somos um banco, não somos uma instituição financeira e nem recebemos comissão por indicação de aplicações. Temos orgulho do nosso caráter independente, e entendemos que é apenas desta forma que podemos realizar um trabalho imparcial e focado na nossa missão.
                </Text>
            </Card >

        </View>

        <View>

            <Card style={{ borderRadius: 8 }}>
                <Card.Image source={require('../../assets/cardinspira.png')} />
                <Text style={{ color: '#7B67AB', fontSize: 16, fontWeight: 'bold', marginTop: 15 }}>
                    Inspiração
                </Text>
                <Text style={{ color: 'black', fontSize: 21, fontWeight: 'bold', marginTop: 10 }}>
                    Por que Turing?
                </Text>
                <Text style={{ color: '#2B3445', fontSize: 16, marginTop: 10, marginBottom: 10 }}>
                    Alan Turing foi um brilhante matemático, lógico e criptoanalista, cujas descobertas se tornaram a base para a tecnologia atual.
                </Text>
                <Text style={{ color: '#848995', fontSize: 12, marginTop: 10, marginBottom: 10 }}>
                    Sua vida foi retratada no filme "O jogo da imitação". Devido ao seu pionerismo na ciência da computação e na formalização do conceito de algoritmo, Turing se tornou a marca para a empresa e a inspiração para o nosso negócio.
                </Text>
            </Card >
        </View>
    </>
);

export default CardAbout;