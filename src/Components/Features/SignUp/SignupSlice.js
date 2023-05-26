import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    password: "",
    isAuthenticated: false
}


const signupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        setName(state, action) {
            state.name = action.payload
        },

        setEmail(state, action) {
            state.email = action.payload
        },

        setPassword(state, action) {
            state.password = action.payload
        },

        setIsAuthenticated(state, action) {
            state.isAuthenticated = action.payload;
          },
          
        logout: (state) => {
            state.isAuthenticated = false;
            state.email = "";
            state.password = "";
            state.name = "";
        },


        clearForm: (state) => {
            state.name = initialState.name;
            state.email = initialState.email;
            state.password = initialState.password;
        },
    }


})


console.log(signupSlice)

export const { setName, setEmail, clearForm, setPassword, setIsAuthenticated, logout } = signupSlice.actions
export default signupSlice.reducer