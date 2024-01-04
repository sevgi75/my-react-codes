import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {email: "", password: ""},
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setUser: function(state, {payload}) {
            state.user = payload
        },
        clearUser: (state) => {
            state.user = {email: "", password: ""}
        },
    }
})

export const {setUser, clearUser} = authSlice.actions

export default authSlice.reducer