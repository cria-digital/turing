import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/Home";
import React from "react";
import About from "../components/About";

import Contact from "../components/Contact";
import Tutoriais from "../components/Tutoriais";
import Cotacoes from "../components/Cotacoes";
import Ranking from "../components/Ranking";

const App = createStackNavigator();

const MyApp = ({ setLogin, login }) => {
  return (
    <>
      <App.Navigator>
        <App.Screen
          options={{ headerShown: false }}
          initialParams={{ setValue: setLogin, value: login }}
          name="Dashboard"
          component={Home}
        />
        <App.Screen
          options={{ headerShown: false }}
          name="About"
          component={About}
        />
        <App.Screen
          options={{ headerShown: false }}
          name="Contact"
          component={Contact}
        />
        <App.Screen
          options={{ headerShown: false }}
          name="Tutoriais"
          component={Tutoriais}
        />
        <App.Screen
          options={{ headerShzown: false }}
          name="Cotacoes"
          component={Cotacoes}
        />
        <App.Screen
          options={{ headerShown: false }}
          name="Ranking"
          component={Ranking}
        />
      </App.Navigator>
    </>
  );
};
export default MyApp;
