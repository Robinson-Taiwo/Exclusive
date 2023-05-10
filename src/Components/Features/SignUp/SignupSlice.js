import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    email: null,
    password: null
}


const signupSlice = createSlice({
    name: "signup",
    initialState,
    // reducers:{

    // }


})


console.log(signupSlice)


export default signupSlice.reducer