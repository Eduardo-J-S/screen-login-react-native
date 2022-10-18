import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

export default function Routes() {
  
  return (
      <Stack.Navigator>

        <Stack.Screen 
        name='Login'
        component={Login}
        options={{
          headerShown: false
        }}
        />

        <Stack.Screen 
        name='Home'
        component={Home}
        />
      </Stack.Navigator>
  );
}