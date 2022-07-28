import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Checkbox } from 'react-native-paper';
// import { Container } from './styles';

function Search({ setClick }) {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [checked, setChecked] = React.useState(false);
    return (
        <>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff' }}>
                    <Text onPress={() => setClick(false)} style={{ fontSize: 25, padding: 15, fontWeight: '100' }}>←</Text>
                    <Text style={{ fontSize: 25, padding: 15, fontWeight: '100' }}> Pesquisar</Text>
                </View>
                <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#cdcdcd' }} />
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <TextInput placeholder='Digite aqui ...' style={{ width: '95%', borderWidth: 1, borderRadius: 20, padding: 8, borderColor: '#cdcdcd', padding: 15, marginTop: 25, marginBottom: 10 }} />
                </View>
                <View style={{ backgroundColor: '#fff', width: 80, padding: 15, margin: 15, borderRadius: 10, alignItems: 'center' }}>
                    <Text style={{ fontWeight: '200' }}>Filtrar</Text>
                </View>
                <View style={{ marginLeft: 15 }}>
                    <Text style={{ fontWeight: 'bold' }}>Resultados da pesquisa:</Text>
                    <Text style={{ color: '#cdcdcd' }}>Ativos Encontrados: <Text style={{ color: '#000', fontWeight: '500' }}>10</Text></Text>
                </View>
                <View style={{ margin: 5 }}>
                    <Text style={{ color: '#cdcdcd', marginLeft: 10, marginTop: 15 }}>Período de tempo:</Text>
                    <Picker
                        style={{ marginTop: -70 }}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Último ano" value="java" />
                    </Picker>
                </View>
                <View style={{ backgroundColor: checked ? 'rgba(93, 59, 250, 0.05)' : '#fff', margin: 15, borderRadius: 15, padding: 25, borderWidth: 1, borderColor: '#5D3BFA' }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginTop: 8, fontSize: 15, color: "#848995" }}>Fundo imobiliário</Text>
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
                    <View style={{ alignItems: 'center', marginTop: 30 }}>

                        <Text style={{ fontSize: 21, fontWeight: 'bold' }}>IBIUMA Galpões logisticos</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 }}>
                        <Text style={{ marginTop: 8, fontSize: 15, color: "#35C772" }}>14,76%</Text>
                        <Text style={{ marginTop: 8, fontSize: 15, color: "#000", fontWeight: 'bold' }}>R$ 312,14 mi</Text>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={{ marginTop: 8, fontSize: 15, color: "#848995" }}>Retorno em 12 meses</Text>
                        <Text style={{ marginTop: 8, fontSize: 15, color: "#848995" }}>Patrimônio</Text>

                    </View>
                </View>
            </ScrollView>
        </>
    );
}

export default Search;