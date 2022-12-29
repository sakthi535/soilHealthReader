import React from 'react'
import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

import Home from './home/home.jsx'
import Result from './Results/Result.jsx'
import Setting from './Settings/Setting.jsx'
import { Test } from './Test/Test.jsx';

import {
  TestIconInactive,
  TestIconActive,
  SettingsIconInactive,
  SettingsIconActive,
  ResultsIconInactive,
  ResultsIconActive,
  HomeIconInactive,
  HomeIconActive,


} from './Vector.jsx';

import { NavigationContainer } from '@react-navigation/native';
import dashboard from './dashboard/dashboard.jsx'

/*
tabBarIcon: ({ size, focused, color }) => {
          return (
            <HomeIconActive/>
          );
        }
*/

const dashboardName = "Dashboard";
const resultsName = "Results";
const testName = "Test";
const settingsName = "Setting";


export const Nav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({ size, focused, color }) => {

          if (route.name == dashboardName) {
            if(focused){
              return(<HomeIconActive/>)
            }
            else{
              return(<HomeIconInactive/>)

            }
          
          }

          if(route.name == resultsName){
            
            if(focused){
              console.log(true)
              return(
                <ResultsIconActive/>
              );

            }
            return(
              <ResultsIconInactive/>
            );
          }
          if(route.name == settingsName){
            if(focused){
              return(
                <SettingsIconActive/>
              );
            }
            return(
              <SettingsIconInactive/>
            );
          }
          if(route.name == testName){
            if(focused){
              return(
                <TestIconActive/>
              );
            }
            return(
              <TestIconInactive/>
            );

          }

          return (

            <ResultsIconActive />
          );
        }
      })} >
      <Tab.Screen name= {dashboardName} component={dashboard} />
      <Tab.Screen name= {resultsName} component={Result} />
      <Tab.Screen name= {settingsName} component={Setting} />
      <Tab.Screen name= {testName} component={Test} />



    </Tab.Navigator>
    </NavigationContainer >
  )
}


