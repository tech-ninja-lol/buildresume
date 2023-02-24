import { createSlice } from "@reduxjs/toolkit";
import {PayloadAction} from '@reduxjs/toolkit'
interface State {
  personalInfo: any 
}

export interface Info {
  title?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  address?: string;
  phone?: number;
  postalCode?: number
}
const initialState:State = {
  personalInfo: {},
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    getPersonalInfo: (state, action: PayloadAction<Info>) => {
      state.personalInfo = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {getPersonalInfo} = userInfoSlice.actions;
export default userInfoSlice.reducer;
// export const userInfoReducer = userInfoSlice.reducer
