// import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from './features/userInfoSlice'
const store = configureStore({
  reducer: {
    userInfo:userInfoSlice
  },
});
// export const wrapper = createWrapper(() => store);
// export const store_0001 = store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
