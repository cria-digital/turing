import React from 'react'
import { Text, Button, View, ScrollView, TextInput, Pressable, Image } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';
import Navigation from '../BottomNavigation';
import { LinearGradient } from 'expo-linear-gradient';


export default function Register({ navigation }) {
    const pressHandler = () => {
        navigation.push("About")
    }
    return (
        <View>
            <View style={{ height: 180, padding: 50, paddingTop: 100 }}>
                <LinearGradient colors={['#2B3445', '#7B60FF']} style={{ height: 180, marginTop: -100, width: '140%', marginLeft: -50 }}>
                    <Image source={require('../../assets/logotipo_turing.png')} style={{ marginTop: 80, marginLeft: 75 }} />
                </LinearGradient>
            </View>
            <ScrollView style={{ padding: '10%' }} >
                <Pressable style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 32,
                    borderRadius: 35,
                    elevation: 3,
                    backgroundColor: '#fff',
                    marginTop: 35
                }} onPress={() => { }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/simboloGoogle.png')} style={{}} />
                        <Text style={{
                            fontSize: 16,
                            lineHeight: 21,
                            fontWeight: '100',
                            letterSpacing: 0.25,
                            color: '#000',
                            marginTop: 5,
                            marginLeft: 15
                        }}>Continuar com o Google</Text>
                    </View>
                </Pressable>
                <Pressable style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 32,
                    borderRadius: 35,
                    elevation: 3,
                    backgroundColor: '#fff',
                    marginTop: 10,
                    marginBottom: 10,
                }} onPress={() => { }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/simboloLinkedin.png')} style={{}} />
                        <Text style={{
                            fontSize: 16,
                            lineHeight: 21,
                            fontWeight: '100',
                            letterSpacing: 0.25,
                            color: '#000',
                            marginTop: 5,
                            marginLeft: 15
                        }}>Continuar com o Linkedin</Text>
                    </View>
                </Pressable>
                <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#848995', width: 125 }}></View>
                    <Text style={{ color: "#848995", marginLeft: 15, marginRight: 15 }}>Ou</Text>
                    <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#848995', width: 125 }}></View>
                </View>

                <Text style={{ marginLeft: 15, marginTop: 15, color: "#848995" }}>Nome completo</Text>
                <TextInput placeholder='Ex.: Felipe da Cunha Macedo' style={{ borderWidth: 1, borderRadius: 15, padding: 8, borderColor: '#cdcdcd', padding: 15, marginTop: 5 }} />

                <Text style={{ marginLeft: 15, marginTop: 15, color: "#848995" }}>E-mail</Text>
                <TextInput placeholder='Ex.: felipe@gmail.com' style={{ borderWidth: 1, borderRadius: 15, padding: 8, borderColor: '#cdcdcd', padding: 15, marginTop: 5 }} />

                <Text style={{ marginLeft: 15, marginTop: 15, color: "#848995" }}>Telefone</Text>
                <TextInput placeholder='+55 (51) 99999-9999' style={{ borderWidth: 1, borderRadius: 15, padding: 8, borderColor: '#cdcdcd', padding: 15, marginTop: 5 }} />

                <Text style={{ marginLeft: 15, marginTop: 15, color: "#848995" }}>Senha</Text>
                <TextInput placeholder='Digite sua senha' style={{ borderWidth: 1, borderRadius: 15, padding: 8, borderColor: '#cdcdcd', padding: 15, marginTop: 5 }} />

                <Text style={{ marginLeft: 15, marginTop: 15, color: "#848995" }}>Confirmar senha</Text>
                <TextInput placeholder='Confirmar sua senha' style={{ borderWidth: 1, borderRadius: 15, padding: 8, borderColor: '#cdcdcd', padding: 15, marginTop: 5 }} />

                <Text style={{ textAlign: 'center', marginTop: 50, fontWeight: 'bold', marginBottom: 30 }}>Tipo de Investidor</Text>
                <View style={{alignItems: 'center'}}>
                    <RadioGroup
                        radioButtons={[{
                            id: '1',
                            label: 'Investidor',
                            value: 'option1'
                        }, {
                            id: '2',
                            label: 'Profissional do mercado',
                            value: 'option2'
                        }]}
                        onPress={() => { }}
                        layout='row'
                    />
                </View>
                
                <View
                    style={{
                        borderBottomColor: '#c4c4c4',
                        borderBottomWidth: 1,
                        marginTop: 50
                    }}
                />
                <Text style={{ marginTop: 30, textAlign: 'center', padding: 5, fontSize:12 }}>Ao clicar em "Criar Conta" você concorda com os <Text style={{ color: '#52C3EE', textDecorationLine: 1, marginTop: 2 }}>Termos de uso e Politica de privacidade</Text></Text>

                <Pressable style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 32,
                    borderRadius: 35,
                    elevation: 3,
                    backgroundColor: '#5D3BFA',
                    marginTop: 35,
                    marginBottom: 250
                }} onPress={() => { }}>
                    <Text style={{
                        fontSize: 16,
                        lineHeight: 21,
                        fontWeight: 'bold',
                        letterSpacing: 0.25,
                        color: 'white',
                    }}>Criar Conta</Text>
                </Pressable>
            </ScrollView>

        </View>
    )
}