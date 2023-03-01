import { createSlice } from "@reduxjs/toolkit";
import {PayloadAction} from '@reduxjs/toolkit'
import {SkillType, eduType, ExperienceType} from '../components/Experience'
interface State {
  personalInfo: Info;
  experience: ExperienceType[];
  skill: SkillType[]; 
  education: eduType[];
  summary: string
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
  summary: '',
  experience: [],
  education: [],
  skill: []
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    getPersonalInfo: (state, action: PayloadAction<Info>) => {
      state.personalInfo = action.payload;
      localStorage.setItem('personalInfo', JSON.stringify({okey: 'this is crazy'}))
    },
    getSummary: (state, action)=>{
      state.summary = action.payload
    },
    getExperience: (state, action)=>{
      state.experience = action.payload
    },
    getEducation: (state, action)=>{
      state.education = action.payload
    },
    getSkills: (state, action)=>{
      state.skill = action.payload
    }
  },
  extraReducers: (builder) => {},
});

export const {getPersonalInfo, getSummary, getExperience, getEducation, getSkills} = userInfoSlice.actions;
export default userInfoSlice.reducer;
// export const userInfoReducer = userInfoSlice.reducer
