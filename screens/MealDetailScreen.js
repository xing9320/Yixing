import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealDetailScreen = (props) => {
    const mealId = props.route.params.mealId;
    const selectMeal = MEALS.find(meal => meal.id === mealId);

    useEffect(() => {
        props.navigation.setOptions({
            title: selectMeal.title            
        })
    }, [props.navigation])
    return (
        <View style={styles.screen}>
            <Text>The Meal Detail Screen!</Text>
            <Button title="Bo Back!" onPress={() => props.navigation.popToTop()} />
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

export default MealDetailScreen;