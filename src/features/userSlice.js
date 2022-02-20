import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: null,
    userEmail: null,
  },
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    setUserLogoutState: (state) => {
      state.userName = null;
      state.userEmail = null;
    },

    // login: (state, action) => {
    //   state.user = action.payload;
    // },

    // logout: (state) => {
    //   state.user = null;
    // },
  },
});

export const { setActiveUser, setUserLogoutState } = userSlice.actions;

export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = (state) => state.user.userEmail;

export default userSlice.reducer;
