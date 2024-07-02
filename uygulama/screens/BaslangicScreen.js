import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import Anasayfa from './Anasayfa';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function BaslangicScreen() {
    return (
       
        <Tab.Navigator>
          <Tab.Screen name="Anasayfa" component={Anasayfa} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
     
    
    );

}