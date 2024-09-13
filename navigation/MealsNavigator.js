import React from 'react';
import { Platform} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constans/Colors';
import HeaderButton from '../components/HeaderButton';

enableScreens();

const Stack = createNativeStackNavigator();

function MealsNavigator() {
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
                    title: 'Meal Categories',

                }}
            />
            <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
            <Stack.Screen
                name="MealDetail"
                component={MealDetailScreen}
                options={{
                    headerRight: () => (
                        <HeaderButton title="Favourite" onPress={() => { }}>
                            <Ionicons
                                name="star-outline"
                                size={23}
                                color={Platform.OS === 'android' ? 'white' : Colors.primaryColor} />
                        </HeaderButton>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MealsFavTabNavigator () {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name='Stack' component={MealsNavigator}/>
            <Tab.Screen name="favorites" component={FavoritesScreen} />
        </Tab.Navigator>
    )
}

export default MealsFavTabNavigator;


