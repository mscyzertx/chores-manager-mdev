import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './OnboardingScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import MainScreen from './MainScreen';
import CleaningScreen from './CleaningScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'> 
        <RootStack.Screen name='OnboardingScreen' component={OnboardingScreen}/>
        <RootStack.Screen name='SignInScreen' component={SignInScreen}/>
        <RootStack.Screen name='SignUpScreen' component={SignUpScreen}/>
        <RootStack.Screen name='MainScreen' component={MainScreen}/>
        <RootStack.Screen name='CleaningScreen' component={CleaningScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;