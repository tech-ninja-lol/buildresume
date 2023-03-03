import { createSlice } from "@reduxjs/toolkit";
import {PayloadAction} from '@reduxjs/toolkit'
import {SkillType, eduType, ExperienceType} from '../components/Experience'
interface State {
  storeInfo: Info 
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
  storeInfo: localStorage.getItem("personalInfo")
  ? JSON.parse(localStorage.getItem("personalInfo"))
  : {},
  summary: localStorage.getItem("summary")
  ? JSON.parse(localStorage.getItem("summary"))
  : '',
  experience: localStorage.getItem("experience")
  ? JSON.parse(localStorage.getItem("experience"))
  : [],
  education: localStorage.getItem("education")
  ? JSON.parse(localStorage.getItem("education"))
  : [],
  skill: localStorage.getItem("skill")
  ? JSON.parse(localStorage.getItem("skill"))
  : [],
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    getPersonalInfo: (state, action: PayloadAction<Info>) => {
      state.storeInfo = action.payload;
      localStorage.setItem('personalInfo', JSON.stringify(state.storeInfo))
    },
    addStoreExperience: (state, action)=>{
      state.experience.push(action.payload)
    },
    getSummary: (state, action)=>{
      state.summary = action.payload
      localStorage.setItem('summary', JSON.stringify(state.summary))
    },
    getExperience: (state, action)=>{
      state.experience = action.payload
      localStorage.setItem('experience', JSON.stringify(state.experience))
    },
    getEducation: (state, action)=>{
      state.education = action.payload
      localStorage.setItem('education', JSON.stringify(state.education))
    },
    addStoreEducation: (state, action)=>{
      state.experience.push(action.payload)
    },
    getSkills: (state, action)=>{
      state.skill = action.payload
      localStorage.setItem('skill', JSON.stringify(state.skill))
    },
    addStoreSkill: (state, action)=>{
      state.experience.push(action.payload)
    },
  },
  extraReducers: (builder) => {},
});

export const {getPersonalInfo, addStoreExperience, addStoreEducation, addStoreSkill, getSummary, getExperience, getEducation, getSkills} = userInfoSlice.actions;
export default userInfoSlice.reducer;
// export const userInfoReducer = userInfoSlice.reducer
