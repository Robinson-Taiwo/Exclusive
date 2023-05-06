import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSignup: true
};

const signupSlice = createSlice({
    name: 'toggleForm',
    initialState,
    reducers: {
        toggleForm: (state) => {
            state.isSignup = !isSignup;
        }
    }
});

// exporting reducers
export const { toggleForm } = signupSlice.actions;
export default signupSlice.reducer;