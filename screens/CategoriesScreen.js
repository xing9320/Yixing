import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';



const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return <CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color}
        onSelect={() => {
            props.navigation.navigate('CategoryMeals', {
                categoryId: itemData.item.id
            })
        }}/>;
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
    }
});

export default CategoriesScreen;