import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface RegisterState {
  firstName: string;
  lastName: string;
  email: string;
}

const initialState: RegisterState = {
  firstName: "",
  lastName: "",
  email: "",
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setRegister: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
    clearRegister: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
    }
  },
});

export const { setRegister, clearRegister } = registerSlice.actions;

export default registerSlice.reducer;
