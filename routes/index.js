import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import React from 'react';
import About from '../components/About';
import Login from '../components/Login';
import Register from '../components/Register';
import MyAuth from './authRoutes';
import MyApp from './appRoutes';
import Navigation from '../components/BottomNavigation/index';


const MyStack = ({ setLogin, login }) => {

    return login ?
        <MyAuth setLogin={setLogin} login={login} />
        :
            <Navigation>
                <MyApp setLogin={setLogin} login={login} />
            </Navigation>
}
export default MyStack