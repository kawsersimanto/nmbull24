import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  destination?: boolean; // Indicates if the form process is completed
  lifecicle?:boolean;
  mytop?:boolean;
  userUpd?:boolean;
}

const initialState: FormState = {
  destination: undefined, // Default state
  lifecicle:undefined,
  mytop:undefined,
  userUpd:undefined
};

export const formSlice = createSlice({
  name: "formDetails",
  initialState,
  reducers: {
    saveDestinationData: (state, action: PayloadAction<boolean>) => {
      state.destination = action.payload; // Update completion status for destination
    },
    saveLifeCicleData: (state, action: PayloadAction<boolean>) => {
      state.lifecicle = action.payload; 
    },
    mytopData: (state, action: PayloadAction<boolean>) => {
      state.mytop = action.payload; 
    },
    userUpd: (state, action: PayloadAction<boolean>) => {
      state.userUpd = action.payload; 
    },
    clearFormData: (state) => {
      state.destination = undefined; 
      state.lifecicle = undefined; 
      state.mytop = undefined; 


    },
  },
});

export const { saveDestinationData, saveLifeCicleData,mytopData,userUpd, clearFormData } = formSlice.actions;
export default formSlice.reducer;
