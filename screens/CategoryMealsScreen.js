import React, { useEffect } from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {
    const renderMealItem = (itemData) => {
        return (
        <MealItem 
        title={itemData.item.title} 
        itemDetial={itemData.item}
        onSelectMeal={() => {
            props.navigation.navigate('MealDetail',{mealId: itemData.item.id})
        }}
        />
    );
    };
    const catId = props.route.params.categoryId;

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    useEffect(() => {
        props.navigation.setOptions({ title: selectedCategory.title })
    }, [props.navigation])
    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%'}}
            />
            <Button title="Go to Detail" onPress={() => props.navigation.navigate('MealDetail')} />
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