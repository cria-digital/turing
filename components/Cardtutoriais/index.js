import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const CardTutoriais = () => (
    <View>
        <Card style={{ borderRadius: 8 }}>
            <Card.Image source={require('../../assets/FotoTutoriais.png')} />
            <Text style={{ color: '#2B3445', fontSize: 16, fontWeight: 'bold', marginTop: 15 }}>
                Como ultilizar a ferramenta comparar investimentos
            </Text>
            <Text style={{ color: '#848995', fontSize: 14, fontWeight: 'regular', marginTop: 10, marginBottom: 10 }}>
                Nesse video explicamos com você pode usar a ferramenta comparar investimentos e descobrir qual é o melhor investimento para sua carteira.
            </Text>
        </Card >
    </View>
);

export default CardTutoriais;