import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home/Home';
import InternetLost from '../screens/InternetLost/InternetLost';

const Stack = createStackNavigator()
const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={Home} options={{ headerShown: false }} />
                <Stack.Screen name={'InternetLost'} component={InternetLost} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator