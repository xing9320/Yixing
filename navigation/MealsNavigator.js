import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constans/Colors'

enableScreens();

const Stack = createNativeStackNavigator();

export default function MealsNavigator() {
    return (
        <Stack.Navigator initialRouteName="Categories"
            screenOptions={{
                headerMode: 'screen',
                headerStyle: { backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white' },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
                headerBackTitleVisible: false
            }}
        >
            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: 'Meal Categories'
                }}
            />
            <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen}/>
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
    )
}

