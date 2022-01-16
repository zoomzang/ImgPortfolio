import React from 'react';
import { SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Button } from '@ui-kitten/components';

export const PortfolioScreen = ({ navigation }) => {

    const styles = StyleSheet.create({
        imgContainer: {
            top: 50,
            left: 50,
            height: 200,
            width: 200
        },
        page: {


        }
    });
    const imgIDs = [100, 1003, 1000, 1001, 1002]
    const ImgCard = () => {
        return (
            <>
                <SafeAreaView style={styles.imgContainer} >
                    <TouchableOpacity onPress={navigateImgview}>
                        <Image
                            source={{ uri: `https://picsum.photos/id/${imgIDs[1]}/200` }}
                            style={{ height: 200, width: 200 }}
                        />
                    </TouchableOpacity>
                </SafeAreaView>
            </>
        );
    };

    const navigateImgview = () => {
        console.log("opening image!");
        navigation.navigate('Imgview', { id: imgIDs[1]});
        
    };

    return (
        <SafeAreaView >

            <ImgCard />
        </SafeAreaView>
    );

    

};