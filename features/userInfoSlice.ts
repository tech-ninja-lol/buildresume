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
  linkedin?: string;
}


const initialState:State = {
  storeInfo: typeof window !== 'undefined' && localStorage.getItem("personalInfo") 
  ? JSON.parse(localStorage.getItem("personalInfo") || '{}')
  : {},
  summary: typeof window !== 'undefined' && localStorage.getItem("summary") 
  ? JSON.parse(localStorage.getItem("summary") || '')
  : '',
  experience: typeof window !== 'undefined' && localStorage.getItem("experience")
  ? JSON.parse(localStorage.getItem("experience") || '[]')
  : [{
    id: 1,
    title: "",
    city: "",
    company: "",
    description: "",
  }],
  education: typeof window !== 'undefined' && localStorage.getItem("education")
  ? JSON.parse(localStorage.getItem("education") || '[]')
  : [{
    id: 1,
    specialization: "",
    school: "",
    description: "",
    to: '',
    from: ''
  }],
  skill: typeof window !== 'undefined' && localStorage.getItem("skill")
  ? JSON.parse(localStorage.getItem("skill") || '[]')
  : [{
    id: 1,
    level: "",
    skill: "",
  }],
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    getPersonalInfo: (state, action: PayloadAction<Info>) => {
      state.storeInfo = action.payload;
      typeof window !== 'undefined' && localStorage.setItem('personalInfo', JSON.stringify(state.storeInfo))
    },
    addStoreExperience: (state, action)=>{
      state.experience.push(action.payload)
    },
    getSummary: (state, action)=>{
      state.summary = action.payload
      typeof window !== 'undefined' && localStorage.setItem('summary', JSON.stringify(state.summary))
    },
    getExperience: (state, action)=>{
      state.experience = action.payload
      typeof window !== 'undefined' && localStorage.setItem('experience', JSON.stringify(state.experience))
    },
    getEducation: (state, action)=>{
      state.education = action.payload
      typeof window !== 'undefined' && localStorage.setItem('education', JSON.stringify(state.education))
    },
    addStoreEducation: (state, action)=>{
      state.experience.push(action.payload)
    },
    getSkills: (state, action)=>{
      state.skill = action.payload
      typeof window !== 'undefined' && localStorage.setItem('skill', JSON.stringify(state.skill))
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
