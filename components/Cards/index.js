import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const MyComponent = () => (
    <View>
        <Card style={{ borderRadius: 8 }}>
            <Card.Image source={require('../../assets/unsplash.png')} />
            <Text style={{ color: '#7B67AB', fontSize: 16, fontWeight: 'bold', marginTop: 15 }}>
                Negócios
            </Text>
            <Text style={{ color: '#2B3445', fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>
                Imposto para empresas de diversos segmentos aumenta em todo o pais
            </Text>
            <Text style={{ color: '#848995', fontSize: 14, fontWeight: 'regular', marginTop: 5, marginBottom: 10 }}>
                Descubra as tarifas que irão aumentar e como isso pode afetar o mercado
            </Text>
        </Card >
    </View>
);

export default MyComponent;