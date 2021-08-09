import * as React from 'react';
import Iconicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ActivityScreen from './ActivityScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Activity') {
              iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
            } else if (route.name === 'Profile') {
                iconName = focused ? 'ios-person' : 'ios-person-outline';
              } 
            return <Iconicons name={iconName} size={size} color={color}/>;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Activity" component={ActivityScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
      </Tab.Navigator>

    )
}

export default MainScreen;