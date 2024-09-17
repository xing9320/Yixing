import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { enableScreens } from 'react-native-screens';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen'
import Colors from '../constans/Colors';
import HeaderButton from '../components/HeaderButton';
//import { NavigationContainer } from '@react-navigation/native';

enableScreens();

const Stack = createNativeStackNavigator();

function MealsNavigator() {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerMode: 'screen',
                headerStyle: { backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white' },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
                
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

function FavNavigator() {
    return (
        <Stack.Navigator initialRouteName="FavoritesStack"
            screenOptions={{
                headerMode: 'screen',
                headerStyle: { backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white' },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
                headerBackTitleVisible: false
            }}
        >
            <Stack.Screen
                name="FavoritesStack"
                component={FavoritesScreen}
                options={{
                    title: 'Your Favorites',

                }}
            />
            <Stack.Screen
                name="MealDetail"
                component={MealDetailScreen}
            />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MealsFavTabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.accentColor }}>
            <Tab.Screen name='Meals' component={MealsNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="restaurant" size={25} color={color} />
                    )
                }} />
            <Tab.Screen name="Favorites" component={FavNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="star" size={25} color={color} />
                    )
                }} />
        </Tab.Navigator>
    )
}

const Drawer = createDrawerNavigator();

function MainNavigator() {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name='MealsFav' component={MealsFavTabNavigator}/>
            <Drawer.Screen name='Filters' component={FiltersScreen}
                options={{
                    title: 'Filter Meals',
                    drawerStyle: { backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white' },
                    drawerInactiveTintColorTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,

                }} />
        </Drawer.Navigator>
    )
}

export default MainNavigator;


