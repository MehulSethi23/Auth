import React from "react";
import "./Login.css";
import { auth, provider1, provider2 } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUser,
  setUserLogoutState,
  selectUserEmail,
  selectUserName,
} from "./features/userSlice";

function Login() {
  const key = "updatable";
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  return (
    <div className="container">
      <div className="form-container">
        <div className="logo"></div>
        <div className="non-logo">
          <h2 className="h1">Sign In</h2>

          {/* {errorText && <p className="error">{errorText}</p>} */}
          <div className="form">
            <button
              className="btn"
              onClick={() => {
                signInWithPopup(auth, provider1)
                  .then((result) => {
                    dispatch(
                      setActiveUser({
                        userName: result.user.displayName,
                        userEmail: result.user.email,
                      })
                    );
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.9851 14.2618C27.9851 13.1146 27.8899 12.2775 27.6837 11.4094H14.2788V16.5871H22.1472C21.9886 17.8738 21.132 19.8116 19.2283 21.1137L19.2016 21.287L23.44 24.4956L23.7336 24.5242C26.4304 22.0904 27.9851 18.5093 27.9851 14.2618Z"
                  fill="#4285F4"
                />
                <path
                  d="M14.279 27.904C18.1338 27.904 21.37 26.6637 23.7338 24.5245L19.2285 21.114C18.0228 21.9356 16.4047 22.5092 14.279 22.5092C10.5034 22.5092 7.29894 20.0754 6.15663 16.7114L5.9892 16.7253L1.58205 20.0583L1.52441 20.2149C3.87224 24.7725 8.69486 27.904 14.279 27.904Z"
                  fill="#34A853"
                />
                <path
                  d="M6.15656 16.7113C5.85516 15.8432 5.68072 14.913 5.68072 13.9519C5.68072 12.9907 5.85516 12.0606 6.14071 11.1925L6.13272 11.0076L1.67035 7.62109L1.52435 7.68896C0.556704 9.58024 0.00146484 11.7041 0.00146484 13.9519C0.00146484 16.1997 0.556704 18.3234 1.52435 20.2147L6.15656 16.7113Z"
                  fill="#FBBC05"
                />
                <path
                  d="M14.279 5.3947C16.9599 5.3947 18.7683 6.52635 19.7995 7.47204L23.8289 3.6275C21.3542 1.37969 18.1338 0 14.279 0C8.69485 0 3.87223 3.1314 1.52441 7.68899L6.14077 11.1925C7.29893 7.82856 10.5034 5.3947 14.279 5.3947Z"
                  fill="#EB4335"
                />
              </svg>
              Login with Google
            </button>
            <button
              className="btn2"
              type="submit"
              onClick={() => {
                signInWithPopup(auth, provider2)
                  .then((result) => {
                    dispatch(
                      setActiveUser({
                        userName: result.user.displayName,
                        userEmail: result.user.email,
                      })
                    );
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 0H2.5C1.12125 0 0 1.12125 0 2.5V17.5C0 18.8787 1.12125 20 2.5 20H17.5C18.8787 20 20 18.8787 20 17.5V2.5C20 1.12125 18.8787 0 17.5 0Z"
                  fill="#1976D2"
                />
                <path
                  d="M16.875 10H13.75V7.5C13.75 6.81 14.31 6.875 15 6.875H16.25V3.75H13.75C11.6788 3.75 10 5.42875 10 7.5V10H7.5V13.125H10V20H13.75V13.125H15.625L16.875 10Z"
                  fill="#FAFAFA"
                />
              </svg>
              Login with Facebook
            </button>
          </div>
          <p className="forgotten"></p>
          <p className="create-account"></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
