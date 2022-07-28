import { View, Text, Image, Pressable } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';


const Cardlist = () => (
    <>
        <View>
            <Card style={{ borderRadius: 8 }}>
                <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold', marginTop: 15 }}>
                    Fundos
                </Text>
                <Text style={{ color: '#2B3445', fontSize: 12, fontWeight: 'regular', marginTop: 5, marginBottom: 20 }}>
                    Confira aqui os fundos mais acessados na semana
                </Text>
                <Card.Divider />
                <Text style={{ fontSize: 16, width: '70%' }}>
                    1. RXTX - Textil Renauxview e metálicos S/A
                </Text>

                <Pressable style={{
                    alignItems: 'center',
                    paddingVertical: 15,
                    paddingHorizontal: 32,
                    width: 125,
                    height: 20,
                    borderRadius: 35,
                    backgroundColor: '#5D3BFA',
                    marginTop: 20,
                    marginBottom: 25
                }} onPress={() => { }}>
                    <Text style={{
                        fontSize: 12,
                        letterSpacing: 0.25,
                        color: 'white',

                    }}>Renda fixa</Text>
                </Pressable>
                <Card.Divider />
                <Text style={{ fontSize: 16, width: '70%' }}>
                    2. RXTX - Textil Renauxview e metálicos S/A
                </Text>

                <Pressable style={{
                    alignItems: 'center',
                    paddingVertical: 15,
                    paddingHorizontal: 32,
                    width: 125,
                    height: 20,
                    borderRadius: 35,
                    backgroundColor: '#5D3BFA',
                    marginTop: 20,
                    marginBottom: 25
                }} onPress={() => { }}>
                    <Text style={{
                        fontSize: 12,
                        letterSpacing: 0.25,
                        color: 'white',

                    }}>Renda fixa</Text>
                </Pressable>
                <Card.Divider />
                <Text style={{ fontSize: 16, width: '70%' }}>
                    3. RXTX - Textil Renauxview e metálicos S/A
                </Text>

                <Pressable style={{
                    alignItems: 'center',
                    paddingVertical: 15,
                    paddingHorizontal: 32,
                    width: 125,
                    height: 20,
                    borderRadius: 35,
                    backgroundColor: '#5D3BFA',
                    marginTop: 20,
                    marginBottom: 25
                }} onPress={() => { }}>
                    <Text style={{
                        fontSize: 12,
                        letterSpacing: 0.25,
                        color: 'white',

                    }}>Renda fixa</Text>
                </Pressable>
                <Card.Divider />
                <Pressable style={{
                    alignItems: 'center',
                    paddingVertical: 15,
                    paddingHorizontal: 32,
                    width: '90%',
                    borderRadius: 35,
                    elevation: 3,
                    backgroundColor: '#5D3BFA',
                    marginTop: 15,
                    marginLeft: '5%',
                    marginBottom: 15
                }} onPress={() => { }}>
                    <Text style={{
                        fontSize: 16,
                        lineHeight: 21,
                        letterSpacing: 0.25,
                        color: 'white',

                    }}>Ver mais</Text>
                </Pressable>
            </Card >
        </View>
        <View>
            <Card style={{ borderRadius: 8 }}>
                <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold', marginTop: 15 }}>
                    Investimentos
                </Text>
                <Text style={{ color: '#2B3445', fontSize: 12, fontWeight: 'regular', marginTop: 5, marginBottom: 20 }}>
                    Confira aqui os investimentos mais acessados na semana
                </Text>
                <Card.Divider />
                <Text style={{ fontSize: 16, width: '70%' }}>
                    1. RXTX - Textil Renauxview e metálicos S/A
                </Text>

                <Pressable style={{
                    alignItems: 'center',
                    paddingVertical: 15,
                    paddingHorizontal: 32,
                    width: 125,
                    height: 20,
                    borderRadius: 35,
                    backgroundColor: '#5D3BFA',
                    marginTop: 20,
                    marginBottom: 25
                }} onPress={() => { }}>
                    <Text style={{
                        fontSize: 12,
                        letterSpacing: 0.25,
                        color: 'white',

                    }}>Renda fixa</Text>
                </Pressable>
                <Card.Divider />
                <Text style={{ fontSize: 16, width: '70%' }}>
                    2. RXTX - Textil Renauxview e metálicos S/A
                </Text>

                <Pressable style={{
                    alignItems: 'center',
                    paddingVertical: 15,
                    paddingHorizontal: 32,
                    width: 125,
                    height: 20,
                    borderRadius: 35,
                    backgroundColor: '#5D3BFA',
                    marginTop: 20,
                    marginBottom: 25
                }} onPress={() => { }}>
                    <Text style={{
                        fontSize: 12,
                        letterSpacing: 0.25,
                        color: 'white',

                    }}>Renda fixa</Text>
                </Pressable>
                <Card.Divider />
                <Text style={{ fontSize: 16, width: '70%' }}>
                    3. RXTX - Textil Renauxview e metálicos S/A
                </Text>

                <Pressable style={{
                    alignItems: 'center',
                    paddingVertical: 15,
                    paddingHorizontal: 32,
                    width: 125,
                    height: 20,
                    borderRadius: 35,
                    backgroundColor: '#5D3BFA',
                    marginTop: 20,
                    marginBottom: 25
                }} onPress={() => { }}>
                    <Text style={{
                        fontSize: 12,
                        letterSpacing: 0.25,
                        color: 'white',

                    }}>Renda fixa</Text>
                </Pressable>
                <Card.Divider />
                <Pressable style={{
                    alignItems: 'center',
                    paddingVertical: 15,
                    paddingHorizontal: 32,
                    width: '90%',
                    borderRadius: 35,
                    elevation: 3,
                    backgroundColor: '#5D3BFA',
                    marginTop: 15,
                    marginLeft: '5%',
                    marginBottom: 15
                }} onPress={() => { }}>
                    <Text style={{
                        fontSize: 16,
                        lineHeight: 21,
                        letterSpacing: 0.25,
                        color: 'white',

                    }}>Ver mais</Text>
                </Pressable>
            </Card >

        </View>
    </>
);

export default Cardlist;
