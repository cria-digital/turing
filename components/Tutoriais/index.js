import React from 'react';
import { Text, View, TextInput, ScrollView, Pressable } from 'react-native';
import CardTutoriais from '../Cardtutoriais';


export default function Tutoriais() {

    return (
        <>
            <View style={{ backgroundColor: 'white' }}>
                <ScrollView>
                <Text style={{ marginLeft: 25, color: '#151B26', fontSize: 21, fontWeight: 'bold', marginBottom: 15 }}>Tutoriais</Text>
                <Text style={{ marginLeft: 25, color: '#63646C', fontSize: 16, marginBottom: 15 }}>Veja tutoriais e dicas de uso sobre como ultilizar nossas ferramentas.</Text>

                <CardTutoriais></CardTutoriais>
                <CardTutoriais></CardTutoriais>
                <CardTutoriais></CardTutoriais>
                <CardTutoriais></CardTutoriais>
                <CardTutoriais></CardTutoriais>

                </ScrollView>
            </View>
        </>
    )

}