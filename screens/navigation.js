import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PortfolioScreen } from './portfolio';
import { ImgviewScreen } from './imgview';

const Stack = createStackNavigator();
//moved code from navigation.js into App.js for convenience
const HomeNavigator = () => {
    <Stack.Navigator headerMode='none'>
        <Stack.Screen
            name='Portfolio'
            component={PortfolioScreen}
        />
        <Stack.Screen
            name='Imgview'
            component={ImgviewScreen}
        />
    </Stack.Navigator>
};

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator/>
    </NavigationContainer>
);
