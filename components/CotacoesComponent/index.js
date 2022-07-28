import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { TextInput } from 'react-native';
import { Checkbox } from 'react-native-paper';
// import { Container } from './styles';

function CotacoesComponent() {
    const [checked, setChecked] = React.useState(false);
    return (
        <ScrollView>
            <View style={{ padding: 25 }} >
                <Text style={{ color: '#63646C', fontSize: 16 }}>Acompanhe o mercado em tempo real.</Text>
                <Text style={{ color: '#63646C', fontSize: 16, paddingTop: 10 }}>Acesse os paineis de ações,FIIs, Bolsas e Moedas.</Text>
            </View>
            <View>
                <TextInput style={{ margin: 25, borderWidth: 1, padding: 10, borderRadius: 15, borderColor: '#cdcdcd' }} placeholder='Pesquise per nome, CNPJ ou código' />
            </View>
            <View style={{
                backgroundColor: '#fff',
                margin: 25,
                borderRadius: 15,
                padding: 15
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Mercado</Text>
                <View style={{ backgroundColor: '#fff', borderWidth: 1, borderColor: '#5D3BFA', borderRadius: 5, padding: 15, marginTop: 15, borderLeftWidth: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 6 }}>HK50</Text>
                    <View style={{ borderWidth: 1, borderRadius: 5, width: 38, borderColor: '#5D3BFA', backgroundColor: checked ? '#5D3BFA' : '#fff' }}>
                        <Checkbox
                            style={{ borderWidth: 1 }}
                            status={checked ? 'checked' : 'unchecked'}
                            color={"#fff"}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                    </View>
                </View>
            </View>
            <View style={{
                backgroundColor: '#fff',
                margin: 25,
                borderRadius: 15,
                padding: 15
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Bolsas mundias</Text>
                <View style={{ backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                    <Text style={{ fontWeight: '100', fontSize: 12 }}>COTAÇÃO</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ borderLeftWidth: 0.5, marginRight: 5, }}></View>
                        <Text style={{ fontWeight: '100', fontSize: 12 }}>PREÇO</Text>
                        <View style={{ borderLeftWidth: 0.5, marginLeft: 5, }}></View>
                        <Text style={{ marginLeft: 5, fontWeight: '100', fontSize: 12 }}>VAR %</Text>

                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#848995', marginTop: 1 }}></View>
                <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>

                            <Image
                                style={{
                                    width: 35,
                                    height: 35,
                                    borderRadius: '50%'
                                }}
                                source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                }}
                            />
                            <View style={{ marginLeft: 5 }}>

                                <Text style={{ color: '#5D3BFA', fontSize: 14 }}>SPX</Text>
                                <Text style={{ fontSize: 12, fontWeight: '100' }}>Índice S&P 500</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 8 }}>

                            <Text style={{ fontSize: 12, marginRight: 10 }}>4704.19</Text>
                            <Text style={{ fontSize: 12, color: 'green' }}>0.17%</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, marginTop: 5, borderBottomColor: '#cdcdcd' }} />
                </View>
            </View>

        </ScrollView>
    );
}

export default CotacoesComponent;