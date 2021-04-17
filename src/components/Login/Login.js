import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import "./Login.css";
import { useController } from "react-hook-form";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import loginPage from "../../images/loginPage.png";
import googleImage from "../../images/search.png";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  console.log(user);
  const provider = new firebase.auth.GoogleAuthProvider();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;
        const { displayName, email, photoURL } = user;
        const userInfo = {
          name: displayName,
          email: email,
          photoURL: photoURL,
          isLoggedIn: true,
        };
        setUser(userInfo);
        storeToken();
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
      });
  };

  const storeToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
      })
      .catch(function (error) {
        // Handle error
      });
  };
  return (
    <div className="signIn-div row d-flex justify-content align-items-center ">
      <div className="text-center google-div col-md-6">
        <div className="input-div">
          <input
            className="login-input-field"
            type="text"
            placeholder="Email"
          />
          <br />
          <input
            className="login-input-field"
            type="password"
            name=""
            placeholder="Password"
            id=""
          />
          <br />
          <button className="login-button">Login</button>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="btn login-btn google-btn"
        >
          <img className="mr-4" style={{ width: "30px" }} src={googleImage} alt="" />
          Continue with Google
        </button>
      </div>
      <div className="col-md-6">
        <div className="loginPage-img">
          <img src={loginPage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
