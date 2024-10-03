import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: "LoggedOut",
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    //decrement: (state) => {
    // state.value -= 1
    //},
    //incrementByAmount: (state, action) => {
    // state.value += action.payload
    //},
    logOut: (state) => {
      state.value = "LoggedOut"
    },
    logIn: (state) => {
      state.value = "LoggedIn"
    },
  },
})
// Action creators are generated for each case reducer function
export const { logOut, logIn } = counterSlice.actions

export default counterSlice.reducer
