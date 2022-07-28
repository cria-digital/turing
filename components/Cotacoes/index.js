import React from 'react'
import { Text, Button, View, ScrollView, Pressable, StyleSheet } from 'react-native';
import Navigation from '../BottomNavigation';
import MyComponent from '../Cards';
import Cardlist from '../Cardlist';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Noticias from '../Noticias';
import CotacoesComponent from '../CotacoesComponent';


export default function Home({ navigation, route }) {

    const pressHandlera = () => {
        navigation.push("Register")
    }
    const pressHandlers = () => {
        route.params.setValue(true)
    }
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ marginLeft: 25, color: '#151B26', fontSize: 21, fontWeight: 'bold', marginBottom: 15, marginTop: 20 }}>Cotações & Notícias</Text>
                <Text style={{ marginLeft: 25, color: '#5D3BFA', fontSize: 14, fontWeight: 'bold', marginBottom: 15, marginTop: 25, marginRight: 15 }}>Dicas de uso</Text>
            </View>
            <ScrollableTabView

                renderTabBar={() => (
                    <ScrollableTabBar
                        style={styles.scrollStyle}
                        tabStyle={styles.tabStyle}
                    />
                )}
                tabBarTextStyle={styles.tabBarTextStyle}
                tabBarInactiveTextColor={'black'}
                tabBarActiveTextColor={'black'}
                tabBarUnderlineStyle={styles.underlineStyle}
                initialPage={1}
            >
                <CotacoesComponent tabLabel={'Cotações'} />
                <Noticias tabLabel={'Notícias'} />

            </ScrollableTabView>

        </>
    )
}


const styles = StyleSheet.create({
    tabStyle: {},
    scrollStyle: {
        // justifyContent: 'center',
    },
    tabBarTextStyle: {
        fontSize: 14,
        fontWeight: 'normal',
    },
    underlineStyle: {
        height: 3,
        backgroundColor: '#52C3EE',
        borderRadius: 3,
    },
});