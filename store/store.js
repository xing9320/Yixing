import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import mealsReducer from "./reducers/meals";

export default configureStore({
    reducer:{
        meals: mealsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})