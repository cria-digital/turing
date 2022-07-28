import React from 'react';
import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
// import { Container } from './styles';

function MelhoresFundos() {
    return (
        <ScrollView>

            <Card style={{ borderRadius: 8, marginTop: 15, marginBottom: "100%" }}>
                <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold', marginTop: 15 }}>
                    Fundos
                </Text>
                <Text style={{ color: '#2B3445', fontSize: 12, fontWeight: 'regular', marginTop: 5, marginBottom: 20 }}>
                    Confira aqui os TOP fundos do mês
                </Text>
                <Card.Divider />
                <Pressable onPress={() => { setClick(true) }}>

                    <Text style={{ fontSize: 16, width: '70%' }}>
                        1. RXTX - Textil Renauxview e metálicos S/A
                    </Text>

                    <Pressable style={{
                        alignItems: 'center',
                        width: 125,
                        borderRadius: 35,
                        backgroundColor: '#5D3BFA',
                        marginTop: 20,
                        marginBottom: 25
                    }} onPress={() => { }}>
                        <Text style={{
                            fontSize: 12,
                            letterSpacing: 0.25,
                            color: 'white',
                            padding: 15

                        }}>Renda fixa</Text>
                    </Pressable>
                </Pressable>
                <Card.Divider />
                <Pressable onPress={() => { setClick(true) }}>

                    <Text style={{ fontSize: 16, width: '70%' }}>
                        2. RXTX - Textil Renauxview e metálicos S/A
                    </Text>

                    <Pressable style={{
                        alignItems: 'center',
                        width: 125,
                        borderRadius: 35,
                        backgroundColor: '#5D3BFA',
                        marginTop: 20,
                        marginBottom: 25
                    }} onPress={() => { }}>
                        <Text style={{
                            fontSize: 12,
                            letterSpacing: 0.25,
                            color: 'white',
                            padding: 15

                        }}>Renda fixa</Text>
                    </Pressable>
                </Pressable>
                <Card.Divider />
                <Pressable onPress={() => { setClick(true) }}>

                    <Text style={{ fontSize: 16, width: '70%' }}>
                        3. RXTX - Textil Renauxview e metálicos S/A
                    </Text>

                    <Pressable style={{
                        alignItems: 'center',
                        width: 125,
                        borderRadius: 35,
                        backgroundColor: '#5D3BFA',
                        marginTop: 20,
                        marginBottom: 25
                    }} onPress={() => { }}>
                        <Text style={{
                            fontSize: 12,
                            letterSpacing: 0.25,
                            color: 'white',
                            padding: 15

                        }}>Renda fixa</Text>
                    </Pressable>
                </Pressable>

            </Card >
        </ScrollView>

    );
}

export default MelhoresFundos;