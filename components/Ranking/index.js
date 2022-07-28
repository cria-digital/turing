import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import MelhoresFundos from './MelhoresFundos';
import MelhoresInvestimentos from './MelhoresInvestimentos';
import Search from './Search';

function Ranking() {
    const[click, setClick] = useState(false)
    return (
        <>
            {click ? <Search setClick={setClick} /> : (

                <>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                        <Text style={{ marginLeft: 25, color: '#151B26', fontSize: 21, fontWeight: 'bold', marginBottom: 15, }}>Ranking</Text>
                        <Text style={{ marginLeft: 25, color: '#5D3BFA', fontSize: 14, fontWeight: 'bold', marginBottom: 15, marginTop: 5, marginRight: 15 }}>Dicas de uso</Text>
                    </View>
                    <View style={{ padding: 25, paddingTop: 10 }} >
                        <Text style={{ color: '#63646C', fontSize: 16 }}>Encontre as principais modalidades de Fundos e investimentos mais relevantes no momento.</Text>
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
                        <MelhoresFundos setClick={setClick} tabLabel={'Melhores Fundos'} />
                        <MelhoresInvestimentos setClick={setClick} tabLabel={'Melhores Investimentos'} />

                    </ScrollableTabView>
                </>
            )}
        </ >
    );
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

export default Ranking;