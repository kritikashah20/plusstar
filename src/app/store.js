import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/movieSlice";
import userReducer from "../features/users/userSlice";

export default configureStore({
    reducer:{
        user: userReducer,
        movie:movieReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});