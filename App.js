import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Navigation from './Navigation'; // Tu configuración de tabs
import Login from './Screens/Login';
import Register from './Screens/Register';
import SavePacient from './Screens/SavePacient';
import SaveEvent from './Screens/SaveEvent';

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);


  return (
    <NavigationContainer>
      <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={Navigation} options={{ headerShown: false }} />
            <Stack.Screen name="AddPacient" component={SavePacient} options={{ headerShown: false }} />
            <Stack.Screen name="AddEvent" component={SaveEvent} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}