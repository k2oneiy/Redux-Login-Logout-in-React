import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value:{
            name:'',
            email:'',
            password:'1234'
        }
    },
    reducers:{
        login: (state,action) =>{
            state.value = action.payload
        },
        logout: (state) =>{
            state.value = {
                    name:'',
                    email:'',
                    password:'1234'
            }
        }
    }
})

export const { login,logout } = userSlice.actions;
export default userSlice.reducer;