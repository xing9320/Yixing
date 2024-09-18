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
import HeaderButton from '../components/HeaderButton'

enableScreens();

const defaultStackNavOptions = {
    headerMode: 'screen',
    headerStyle: { backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white' },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
}

const Stack = createNativeStackNavigator();

function MealsNavigator() {
    return (
        <Stack.Navigator
            screenOptions={defaultStackNavOptions}
        >
            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
                options={({ navigation }) => ({
                    title: 'Meal Category',
                    headerLeft: () => (
                        <HeaderButton title="Menu" onPress={() => { navigation.toggleDrawer() }}>
                            <Ionicons
                                name="menu"
                                size={25}
                                color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
                            />
                        </HeaderButton>),
                })}
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
            screenOptions={defaultStackNavOptions}
        >
            <Stack.Screen
                name="FavoritesStack"
                component={FavoritesScreen}
                options={({ navigation }) => ({
                    title: 'Your Favorites',
                    headerLeft: () => (
                        <HeaderButton title="Menu" onPress={() => { navigation.toggleDrawer() }}>
                            <Ionicons
                                name="menu"
                                size={25}
                                color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
                            />
                        </HeaderButton>),

                })}
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
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.accentColor,
            tabBarLabelStyle: { fontFamily: 'open-sans-bold'}
         }}>
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

function FiltersNavigator() {
    return (
        <Stack.Navigator initialRouteName="FiltersStack"
            screenOptions={defaultStackNavOptions}
        >
            <Stack.Screen
                name="FiltersStack"
                component={FiltersScreen}
                options={({ navigation, route }) => ({
                    title: 'Filter',
                    headerLeft: () => (
                        <HeaderButton title="Menu" onPress={() => { navigation.toggleDrawer() }}>
                            <Ionicons
                                name="menu"
                                size={25}
                                color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
                            />
                        </HeaderButton>),
                        headerRight: () => (
                            <HeaderButton title="SaveFilter" onPress={() => {
                                route.params.save()
                                //console.log("save filter", route.params.save())
                            }}>
                                <Ionicons
                                    name="save"
                                    size={23}
                                    color={Platform.OS === 'android' ? 'white' : Colors.primaryColor} />
                            </HeaderButton>
                        )

                })}
            />
        </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator();

function MainNavigator() {
    return (
        <Drawer.Navigator initialRouteName='MealsFav'
            screenOptions={{ headerShown: false, headerBackTitleVisible: false,
                drawerActiveTintColor: Colors.accentColor,
                drawerLabelStyle: {
                    fontFamily:'open-sans-bold'
                }
             }}>
            <Drawer.Screen name='MealsFav' component={MealsFavTabNavigator}
                options={{ title: 'Meals' }} />
            <Drawer.Screen name='Filters' component={FiltersNavigator}
            />
        </Drawer.Navigator>
    )
}

export default MainNavigator;


