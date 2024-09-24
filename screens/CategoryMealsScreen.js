import React, { useEffect} from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = (props) => {
    const catId = props.route.params.categoryId;

    const availbeMeals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = availbeMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    if (displayedMeals.length === 0) {
        return   (
            <View style={styles.content} >
                <DefaultText>No meals found, maybe check your filter?</DefaultText>
            </View >
        );
    } 

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    useEffect(() => {
        props.navigation.setOptions({ title: selectedCategory.title });
    }, [props.navigation])
    
    return <MealList listData={displayedMeals} navigation={props.navigation}/>
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen;