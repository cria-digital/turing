import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CardAbout from '../Cardabout';

// import { Container } from './styles';

export default function Noticias() {
    return (
        <ScrollView>
            <View style={{ padding: 25 }} >

                <Text style={{ color: '#63646C', fontSize: 16 }}>Veja conteúdos sobre assuntos que impactam o mercado direto dos principais portais de notícia.</Text>
                <CardAbout />
            </View>
        </ScrollView>
    )
}
