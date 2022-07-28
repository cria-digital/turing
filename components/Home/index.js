import React from 'react'
import { Text, Button, View, ScrollView, Pressable } from 'react-native';
import Navigation from '../BottomNavigation';
import MyComponent from '../Cards';
import Cardlist from '../Cardlist';



export default function Home({ navigation, route }) {

    const pressHandlera = () => {
        navigation.push("Register")
    }
    const pressHandlers = () => {
        route.params.setValue(true)
    }
    return (
        <View style={{ marginTop: 20 }}>
            <ScrollView>
                <Text style={{ marginLeft: 25, color: '#151B26', fontSize: 21, fontWeight: 'bold', marginBottom: 15 }}>Últimas notícias</Text>
                
                <View>
                    <MyComponent></MyComponent>
                    <MyComponent></MyComponent>
                    <MyComponent></MyComponent>
                </View>

                <Pressable style={{
                    alignItems: 'center',
                    paddingVertical: 15,
                    paddingHorizontal: 32,
                    width: '90%',
                    borderRadius: 35,
                    elevation: 3,
                    backgroundColor: '#5D3BFA',
                    marginTop: 35,
                    marginLeft: '5%',
                    marginBottom: 25
                }} onPress={() => { }}>
                    <Text style={{
                        fontSize: 16,
                        lineHeight: 21,
                        letterSpacing: 0.25,
                        color: 'white',

                    }}>Ver mais notícias</Text>
                </Pressable>

                <View>
                    <Cardlist></Cardlist>
                </View>
            </ScrollView>
        </View>
    )
}