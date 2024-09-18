import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import { MEALS } from '../data/dummy-data';
import DefaultText from '../components/DefaultText';

const ListItem = (props) => {
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
}

const MealDetailScreen = (props) => {
    const mealId = props.route.params.mealId;
    const selectMeal = MEALS.find(meal => meal.id === mealId);

    useEffect(() => {
        props.navigation.setOptions({
            title: selectMeal.title
        })
    }, [props.navigation])
    return (
        <ScrollView>
            <Image source={{ uri: selectMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectMeal.duration}m</DefaultText>
                <DefaultText>{selectMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectMeal.ingredients.map(ingredient => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
                ))}
            <Text style={styles.title}>Steps</Text>
            {selectMeal.steps.map(step => (
                <ListItem key={step}>{step}</ListItem>
                ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailScreen;