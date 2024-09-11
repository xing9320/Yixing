import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';



const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                    props.navigation.navigate('CategoryMeals')
                }}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            numColumns={2}
            renderItem={renderGridItem}
            data={CATEGORIES}
        />

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;