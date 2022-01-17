import React from 'react';
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
            backgroundColor: 'Pink',
            fontSize: 24,
            marginHorizontal: 10,
            marginTop: 24,

        }

    });
    const imgIDs = [100, 1003, 1000, 1001, 1002]
    const DATA = useState(
        {}
        
    ); // key property by default. id is also fine with keyExtractor property
    const ImgCard = () => {
        return (
            
                <View style={styles.imgContainer} >
                    <TouchableOpacity onPress={navigateImgview}>
                        <Image
                            source={{ uri: `https://picsum.photos/id/${imgIDs[1]}/200` }}
                            style={{ height: 200, width: 200 }}
                        />
                    </TouchableOpacity>
                </View>
            
        );
    };

    const navigateImgview = () => {
        console.log("opening image!");
        navigation.navigate('Imgview', { id: imgIDs[1]}); //better to take id as parameter
        
    };

    return (
        <SafeAreaView >

            <FlatList
                numColumns={1}
                keyExtractor={(item) => item.id}
                data={ DATA }
                renderitem={ <ImgCard id=item.name/> }
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
        </SafeAreaView>
    );

    

};