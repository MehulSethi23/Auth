import React from "react";
import "./App.css";
import Login from "./Login";
import Logout from "./Logout";

import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUser,
  setUserLogoutState,
  selectUserEmail,
  selectUserName,
} from "./features/userSlice";

function App() {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  return <>{userName ? <Logout /> : <Login />}</>;
}

export default App;
