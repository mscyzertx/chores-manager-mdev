import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { AuthContext } from './components/context'
import RootStackScreen from './screens/RootStackScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const OnboardingNavigator = () => {
//   return (
//      <Stack.Navigator>
//         <Stack.Screen name='Onboarding' component={OnboardingScreen}/>
//         <Stack.Screen name='Home' component={HomeScreen}/>
//       </Stack.Navigator>
//   )
// };

// const TabNavigator = () => {
//   return (
//      <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Acitvity" component={ActivityScreen} />
//       </Tab.Navigator>
//   )
// }


export default function App() {
  return (
    <NavigationContainer>
      
        <RootStackScreen/>
 
     </NavigationContainer>


  );
}

