import React from 'react';
import { Image, SafeAreaView, StyleSheet} from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './screens/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { PortfolioScreen } from './screens/portfolio'; //dont use once AppNavigator functioning
import { ImgviewScreen } from './screens/imgview';

const HomeScreen = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>HOME</Text>
    </Layout>
);
const Stack = createStackNavigator();

// link to react-navigation component https://reactnative.dev/docs/navigation
export default () => (
    <>
        
        <ApplicationProvider {...eva} theme={eva.light}>
            <NavigationContainer>
                <Stack.Navigator >
                    <Stack.Screen
                        name='Portfolio'
                        component={PortfolioScreen}
                    />
                    <Stack.Screen
                        name='Imgview'
                        component={ImgviewScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>


        </ApplicationProvider>
    </>

);

const styles = StyleSheet.create({
    imgContainer: {
        top: 50,
        left: 50
    },
}

);

