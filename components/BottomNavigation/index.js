import { useState, useEffect } from 'react';
import BottomNavigation, {
    FullTab
} from 'react-native-material-bottom-navigation'
import { View, Text, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


export default function Navigation({ children  }) {
    const [activeTab, setActiveTab] = useState("home");
    const [logged, setLogged] = useState(false)
    const [tabs, setTabs] = useState([
        {
            key: 'home',
            icon: 'home',
            label: 'Home',
            barColor: '#151B26',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            subTabs: [
                {
                    icon: "compass",
                    label: "Resumo",
                    route: "Dashboard"
                },
                {
                    icon: "compass",
                    label: "A Turing",
                    route: "About"
                },
                {
                    icon: "compass",
                    label: "Contato",
                    route: "Contact"
                },
                {
                    icon: "compass",
                    label: "Tutoriais",
                    route: "Tutoriais"
                },

            ]
        },
        {
            key: 'analises',
            icon: 'bar-chart-o',
            label: 'Análises',
            barColor: '#151B26',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            subTabs: [
                {
                    icon: "compass",
                    label: "Cotações & Notícias",
                    route: "Cotacoes"
                },
                {
                    icon: "compass",
                    label: "Ranking",
                    route: "Ranking"
                }
            ]
        },
        {
            key: 'ferramentas',
            icon: 'gears',
            label: 'Ferramentas',
            barColor: '#151B26',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            subTabs: [
                {
                    icon: "compass",
                    label: "Consultar",
                    route: "About"
                },
                {
                    icon: "compass",
                    label: "Comparar",
                    route: "About"
                },
                {
                    icon: "compass",
                    label: "Consolidar",
                    route: "About"
                }
            ]
        },
        {
            key: 'conta',
            icon: 'user',
            label: 'Minha Conta',
            barColor: '#151B26',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            subTabs: [
                {
                    icon: "compass",
                    label: "Itens salvos",
                    route: "About"
                },
                {
                    icon: "compass",
                    label: "Meu perfil",
                    route: "About"
                },
                {
                    icon: "compass",
                    label: "Sair",
                    route: "About"
                }
            ]
        }]);
    const [press, setPress] = useState(false);
    const navigation = useNavigation(); 


    const renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="white" name={icon} />

    )
    const teste = (a) => {
        setActiveTab(a)
        if (a == activeTab) {
            setPress(false)
        }

        if (!press) {
            setPress(true)

        }
    }

    const renderTab = ({ tab, isActive }) => (
        <FullTab
            isActive={isActive}
            label={tab.label}
            renderIcon={renderIcon(tab.icon)}

        />
    )

    return (
        <>
            <View style={{ flex: 1 }}>
                <View style={{ padding: 25, paddingTop: 50, backgroundColor: "#fffff", height: 120, borderRadius: 15 }}>
                    <Text style={{ color: 'black', fontSize: 15 }}>Investidor</Text>
                    <Text style={{ color: '#5D3BFA', fontSize: 17, fontWeight: 'bold' }}>Nome do Investidor</Text>
                </View>
                <View style={{ flex: 1 }}>
                    {children}
                </View>
                <View style={{ padding: 10, backgroundColor: "#cdcdcd", height: 120, borderTopLeftRadius: 25, borderTopRightRadius: 25, display: press ? "" : "none" }}>
                    <ScrollView style={{ flexDirection: "row" }}>
                        <View style={{ flexDirection: "row" }}>
                            {tabs.find(tab => tab.key == activeTab).subTabs.map(item => (
                                <Pressable onPress={() => {navigation.navigate(item.route)} }>
                                    <View style={{ alignItems: 'center', borderColor: "white", backgroundColor: 'white', borderWidth: 1, padding: 5, margin: 5, width: 110, height: 95, borderRadius: 10 }}>
                                        <Icon style={{ marginTop: 5 }} size={40} color="black" name={item.icon} />
                                        <Text style={{ marginTop: 10, textAlign: "center", fontSize: 12 }}>{item.label}</Text>
                                    </View>
                                </Pressable>
                            ))}
                        </View>
                    </ScrollView>

                </View>
                <BottomNavigation
                    activeTab={activeTab}
                    onTabPress={newTab => teste(newTab.key)}
                    renderTab={renderTab}
                    tabs={tabs}

                />
            </View>
        </>
    )

} 