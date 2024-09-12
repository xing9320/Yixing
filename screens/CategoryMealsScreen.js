import React,{useEffect} from 'react';
import {View, Text,Button, StyleSheet} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
    const catId = props.route.params.categoryId;

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    useEffect(() => {
        props.navigation.setOptions({title: selectedCategory.title})
    },[props.navigation])
    return (
        <View style={ styles.screen}>
        <Text>The Category Meals Screen!</Text>
        <Button title="Go to Detail" onPress={() => props.navigation.navigate('MealDetail')}/>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;