import React, { useState, useEffect, useCallback } from 'react'
//import { View, Text } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import MealsNavigator from './navigation/MealsNavigator';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import CategoriesScreen from './screens/CategoriesScreen';
//import CategoryMealsScreen from './screens/CategoryMealsScreen';
//import MealDetailScreen from './screens/MealDetailScreen';

SplashScreen.preventAutoHideAsync();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

//const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await fetchFonts;
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setFontLoaded(true);
      }
    }
    prepare();
  }, []);

  const onLayOutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);


  if (!fontLoaded) {
    return null;
  }
  return (
    <NavigationContainer onReady={onLayOutRootView}>
      <MealsNavigator/>
    </NavigationContainer>
  )
}
