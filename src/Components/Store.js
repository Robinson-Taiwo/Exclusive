import { configureStore, createSlice } from "@reduxjs/toolkit";
import signupReducer from "./Features/SignUp/SignupSlice";
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'signup',
    storage,
};

const signupPersistedReducer = persistReducer(persistConfig, signupReducer)

const store = configureStore({

    reducer: {

        signup: signupPersistedReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

})



export default store