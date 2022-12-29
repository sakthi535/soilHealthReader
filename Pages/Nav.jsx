import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

import Home from './home/home.jsx'
import Result from './Results/Result.jsx'
import Setting from './Settings/Setting.jsx'
import { NavigationContainer } from '@react-navigation/native';
import dashboard from './dashboard/dashboard.jsx'

export const Nav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Dashboard" component={dashboard} />
        <Tab.Screen name="Results" component={Result} />
        <Tab.Screen name="Setting" component={Setting} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}


