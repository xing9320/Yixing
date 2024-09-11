import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constans/Colors'

const Stack = createNativeStackNavigator();

export default function MealsNavigator() {
    return (
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: 'Meal Categories',
                    headerStyle: { backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'},
                    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
                }} />
            <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
    )
}

