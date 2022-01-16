import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, IconRegistry, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const BackIcon = () => (
    <>
    < />
);

export const DetailsScreen = ({ navigation }) => {

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction onPress={navigateBack} />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction} />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>DETAILS</Text>
            </Layout>
        </SafeAreaView>
    );
};