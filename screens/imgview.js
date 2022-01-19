import React from 'react';
import { SafeAreaView, StyleSheet, Image} from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

export const ImgviewScreen = ({ navigation, route }) => {

    const navigateBack = () => {
        navigation.goBack();
    };
    const uriLink =  `https://picsum.photos/id/${ route.params.name }/800`; //https://picsum.photos/id/1003/200
    console.log(`opening image! id: ${route.params.name}`);

    return (
        <>
            <SafeAreaView >
                <Image
                    source={{ uri: uriLink }}
                    style={{ height: 400, width: 400, top: 100}}
                />
            </SafeAreaView>
        </>
    );
    
};