import React, { useEffect } from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
    const catId = props.route.params.categoryId;

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    useEffect(() => {
        props.navigation.setOptions({ title: selectedCategory.title })
    }, [props.navigation])
    return <MealList listData={displayedMeals} navigation={props.navigation}/>
}

export default CategoryMealsScreen;