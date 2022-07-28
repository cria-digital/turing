import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import React from 'react';
import About from '../components/About';
import Navigation from '../components/BottomNavigation';
import Login from '../components/Login';
import Register from '../components/Register';

const Auth = createStackNavigator();






const MyAuth = ({setLogin, login}) => {
    return (
        <>
        <Auth.Navigator>
            <Auth.Screen options={{headerShown:false}} initialParams={{setValue: setLogin, value: login }} name="Home" component={Login} />
            <Auth.Screen options={{headerShown:false}} name="Register" component={Register} />
        </Auth.Navigator>
        </>
    )
}
export default MyAuth