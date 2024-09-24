import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import { StyleSheet, View } from 'react-native';
import {DefaultText} from '../components/DefaultText'

const FavoritesScren = (props) => {
    const favMeals = useSelector(state => state.meals. favoriteMeals)

    if (favMeals.length === 0 || !favMeals) {
        return <View style={styles.content}>
            <DefaultText>No favorite meals fond. Start adding smoe!</DefaultText>
        </View>
    }

    return (
        <MealList listData={favMeals} navigation={props.navigation}/>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default FavoritesScren;