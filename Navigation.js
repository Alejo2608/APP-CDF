import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

// SCREENS
import Home from './Screens/HomeScreen.js';
import Register from './Screens/Register.js';
import Event from './Screens/EventScreen.js';
import Collab from './Screens/Collab.js';
import Pacient from './Screens/PacientScreen.js';
import EditEvent from './Screens/EditEvent.js';
import SaveEvent from './Screens/SaveEvent.js';
import EditPacient from './Screens/EditPacient.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function EventosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Event" component={Event} />
      <Stack.Screen name="EditEvent" component={EditEvent} />
      <Stack.Screen name="AddEvent" component={SaveEvent} />
    </Stack.Navigator>
  );
}

function PacientsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PacientsScreen" component={Pacient} />
      <Stack.Screen name="EditPacient" component={EditPacient} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Eventos"
        component={EventosStack}
        options={{
          tabBarLabel: 'Eventos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="folder-home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Pacients"
        component={PacientsStack}
        options={{
          tabBarLabel: 'Pacientes',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-injured" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Colaboraciones"
        component={Collab}
        options={{
          tabBarLabel: 'Colaboradores',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="hands-helping" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return <MyTabs />;
}