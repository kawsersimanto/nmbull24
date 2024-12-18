import { createSlice } from '@reduxjs/toolkit'
// Define a type for the slice state
interface CounterState {
    name: string,
    role: string,
}

// Define the initial state using that type
const initialState: CounterState = {
    name: "",
    role: "",
}

export const adminAuth = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name
            state.role = action.payload.role
        },
        logOut: (state) => {
            state.name = ""
            state.role = ""
        }
    },
})

export const { setUser, logOut } = adminAuth.actions



export default adminAuth.reducer