import { createSlice } from '@reduxjs/toolkit'
// Define a type for the slice state
interface CounterState {
    token:string
    role: string,
}

// Define the initial state using that type
const initialState: CounterState = {
    role: "",
    token:"",
}

export const adminAuth = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.role = action.payload.role
            state.token = action.payload.token
        },
        logOut: (state) => {
            state.role = ""
            state.token = ""

        }
    },
})

export const { setUser, logOut } = adminAuth.actions



export default adminAuth.reducer