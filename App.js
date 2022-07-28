import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import Navigation from './components/BottomNavigation/index.js';
import MyStack from './routes/index';
import { Text, Button } from 'react-native';


export default function App() {

  const [logged, setLogged] = useState(true)

  return (
    <>



      <NavigationContainer>
        <MyStack setLogin={setLogged} login={logged} />
      </NavigationContainer>





    </>
  );
}