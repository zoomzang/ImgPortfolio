import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image, TouchableOpacity, View, ScrollView, FlatList } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Button } from '@ui-kitten/components';

export const PortfolioScreen = ({ navigation }) => {

    const styles = StyleSheet.create({
        imgContainer: {
            height: 200,
            width: 200,
            flex: 1,
        },
        cardScroll: {    
        },
        cardView: {
            flex:1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",

        },
        container: {
            paddingTop: 40,
            paddingHorizontal: 20,
        },
        item: {
            marginTop: 24,
            padding: 30,
            backgroundColor: 'red',
            fontSize: 24,
            marginHorizontal: 10,
            marginTop: 24,
        },
        title: {
            fontSize: 32,
        },

    });
    const imgIDs = [100, 1003, 1000, 1001, 1002];
    const DATA = [
        { name: '100a', key: '100' },
        { name: '1003a', key: '1003' },
        { name: '1000a', key: '1000' },
        { name: '1001a', key: '1001' },
        { name: '1002a', key: '1002' },
        { name: '1004a', key: '1004' },
        { name: '1005a', key: '1005' },
        { name: '1006a', key: '1006' },
        { name: '1007a', key: '1007' },
        { name: '1008a', key: '1008' },

        
    ]; // key property by default. id is also fine with keyExtractor property
    const ImgCard = ({ id }) => {
        return (
            
                <View style={styles.imgContainer} >
                    <TouchableOpacity onPress={navigateImgview}>
                        <Image
                            source={{ uri: `https://picsum.photos/id/${id}/200` }}
                            style={{ height: 150, width: 150 }}
                        />
                    </TouchableOpacity>
                </View>
            
        );
    };

    const navigateImgview = () => {
        console.log("opening image!");
        navigation.navigate('Imgview', { id: imgIDs[1]}); //better to take id as parameter
        
    };

    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    const renderItem = ({ item }) => (
        <ImgCard id={item.key} />
    );
    return (
        <View style={styles.container} >

            <FlatList
                data={DATA}
                renderItem={renderItem}
                numColumns={2}
            />

            {/*<ScrollView style={styles.cardScroll}>*/}
            {/*    <View style={styles.cardView}>*/}
            {/*        <ImgCard />*/}
            {/*        <ImgCard />*/}
            {/*        <ImgCard />*/}
            {/*        <ImgCard />*/}
            {/*        <ImgCard />*/}
            {/*    </View>*/}

            {/*</ScrollView>*/}
        </View>
    );

    

};