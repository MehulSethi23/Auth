import React from "react";
import "./Logout.css";
import { auth, provider1, provider2 } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUser,
  setUserLogoutState,
  selectUserEmail,
  selectUserName,
} from "./features/userSlice";

import { Button, message } from "antd";

function Logout() {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  return (
    <div className="container">
      <div className="form-container">
        <div className="logo"></div>
        <div className="non-logo">
          <h2 className="h2">
            Thank You <h3 className="h1">{userName}</h3> for visiting my
            website. <p>&nbsp;</p> You have Logged in with
            <h3 className="h1">{userEmail}</h3>
          </h2>

          {/* {errorText && <p className="error">{errorText}</p>} */}
          <div className="form">
            <button
              className="btn"
              onClick={() => {
                auth
                  .signOut()
                  .then((result) => {
                    dispatch(setUserLogoutState());
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              LogOut
            </button>
          </div>
          <p className="forgotten"></p>
          <p className="create-account"></p>
        </div>
      </div>
    </div>
  );
}

export default Logout;
