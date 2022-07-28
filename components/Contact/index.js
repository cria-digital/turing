import React from 'react'
import { Text, View, TextInput, ScrollView, Pressable } from 'react-native';


export default function Contact() {

    return (
        <>
            <View style={{ backgroundColor: 'white' }}>
                <ScrollView>
                    <Text style={{ textAlign: 'center', color: '#151B26', fontSize: 21, fontWeight: 'bold', marginTop: 25, marginBottom: 15 }}>Fale conosco</Text>

                    <Text style={{ marginLeft: 15, marginTop: 15, color: "#848995" }}>E-mail</Text>
                    <View style={{ alignItems: 'center' }}>
                        <TextInput placeholder='Ex.: felipe@gmail.com' style={{ width: '95%', borderWidth: 1, borderRadius: 15, padding: 8, borderColor: '#cdcdcd', padding: 15, marginTop: 5 }} />
                    </View>
                    <Text style={{ marginLeft: 15, marginTop: 15, color: "#848995" }}>Senha</Text>
                    <View style={{ alignItems: 'center' }}>
                        <TextInput placeholder='Digite sua senha' style={{ width: '95%', borderWidth: 1, borderRadius: 15, padding: 8, borderColor: '#cdcdcd', padding: 15, marginTop: 5 }} />
                    </View>
                    <Text style={{ marginLeft: 15, marginTop: 15, color: "#848995" }}>Assunto</Text>
                    <View style={{ alignItems: 'center' }}>
                        <TextInput placeholder='Digite o assunto da sua mensagem' style={{ width: '95%', borderWidth: 1, borderRadius: 15, padding: 8, borderColor: '#cdcdcd', padding: 15, marginTop: 5 }} />
                    </View>
                    <Text style={{ marginLeft: 15, marginTop: 15, color: "#848995" }}>Mensagem</Text>
                    <View style={{ alignItems: 'center' }}>
                        <TextInput placeholder='Digite aqui sua mensagem aqui...' style={{ width: '95%', height: 145, borderWidth: 1, borderRadius: 15, padding: 8, borderColor: '#cdcdcd', padding: 15, marginTop: 5, marginBottom: 10 }} />
                    </View>

                    <Pressable style={{
                        alignItems: 'center',
                        paddingVertical: 15,
                        paddingHorizontal: 32,
                        width: '95%',
                        borderRadius: 35,
                        elevation: 3,
                        backgroundColor: '#5D3BFA',
                        marginTop: 35,
                        marginLeft: '2.5%',
                        marginBottom: 25
                    }} onPress={() => { }}>
                        <Text style={{
                            fontSize: 16,
                            lineHeight: 21,
                            letterSpacing: 0.25,
                            color: 'white',

                        }}>Enviar mensagem</Text>
                    </Pressable>

                    <View style={{ backgroundColor: '#343F51', weight: 15, height: 300, borderTopLeftRadius: 12, borderTopRightRadius: 12, marginTop: 10 }}>
                        <Text style={{ color: 'white', fontSize: 21, fontWeight: 'bold', textAlign: 'center', marginTop: 25 }}>
                            Quer receber nossas notícias?
                        </Text>
                        <Text style={{ color: 'white', fontSize: 14, textAlign: 'center', marginTop: 15 }}>
                            Digite seu e-mail no campo abaixo e receba nossas notícias  em primeira mão!
                        </Text>

                        <Text style={{ marginLeft: 15, marginTop: 30, color: "white" }}>E-mail</Text>
                        <View style={{ alignItems: 'center' }}>
                            <TextInput placeholder='Ex.: felipe@gmail.com' style={{ width: '95%', borderWidth: 1, borderRadius: 15, padding: 8, borderColor: '#cdcdcd', padding: 15, marginTop: 5, backgroundColor: 'white' }} />
                        </View>
                        <Pressable style={{
                            alignItems: 'center',
                            paddingVertical: 15,
                            paddingHorizontal: 32,
                            width: '95%',
                            borderRadius: 35,
                            elevation: 3,
                            backgroundColor: '#5D3BFA',
                            marginTop: 25,
                            marginLeft: '2.5%',
                            marginBottom: 25
                        }} onPress={() => { }}>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 21,
                                letterSpacing: 0.25,
                                color: 'white',

                            }}>Inscrever-se</Text>
                        </Pressable>
                    </View>

                </ScrollView>
            </View>
        </>
    )

}