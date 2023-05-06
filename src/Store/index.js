import { configureStore } from '@reduxjs/toolkit';
import SignupReducer from './SignupReducer';

// defining my store and reducer
const store = configureStore({
    reducer: {
        SignupReducer:SignupReducer
    }
});

export default store;
