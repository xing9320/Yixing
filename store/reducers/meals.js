import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existinIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if (existinIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existinIndex, 1);
                return {...state, favoriteMeals: updatedFavMeals};
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return {...state, favoriteMeals:state.favoriteMeals.concat(meal)};
            }
            case SET_FILTERS:
                const applidedFilters = action.filters;
                const updatedFilteredMeals = state.meals.filter(meal => {
                    if (applidedFilters.glutenFree && !meal.isGlutenFree) {
                        return false;
                    }
                    else if (applidedFilters.lactoseFree && !meal.isLactoseFree) {
                        return false;
                    }
                    else if (applidedFilters.vegetarian && !meal.isVegetarian) {
                        return false;
                    }
                    else if (applidedFilters.vegan && !meal.isVegan) {
                        return false;
                    }
                    else return true;
                });
                return {...state, filteredMeals: updatedFilteredMeals}
        default:
            return state;
    }
}

export default mealsReducer;