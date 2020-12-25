import { React, useState } from "react";

import "../styles/login.css";
import linkedin_logo from "../logos/linkedin_text.svg";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    profileURL: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const register = (e) => {
    if (!userDetails.name) return alert("Please Enter Your Name");
    auth
      .createUserWithEmailAndPassword(userDetails.email, userDetails.password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: userDetails.name,
            photoURL: userDetails.profileURL,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userDetails.profileURL,
              })
            );
          });
      })
      .catch((err) => alert(err.message));
  };
  const userLogin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(userDetails.email, userDetails.password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.name,
            photoUrl: userDetails.photoURL,
          })
        );
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="brand-logo">
        <img src={linkedin_logo} alt="linkedin" />
        <h4>Clone App</h4>
      </div>

      <form method="post">
        <input
          value={userDetails.name}
          onChange={(e) =>
            setUserDetails({ ...userDetails, name: e.target.value })
          }
          placeholder="Full Name (required if registering)"
          type="text"
        />
        <input
          value={userDetails.profileURL}
          placeholder="Profile pic URL (optional)"
          type="text"
          onChange={(e) =>
            setUserDetails({ ...userDetails, profileURL: e.target.value })
          }
        />
        <input
          value={userDetails.email}
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
          placeholder="Email"
          type="email"
          required
        />
        <input
          value={userDetails.password}
          placeholder="Password"
          type="password"
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
        />
        <button type="submit" onClick={userLogin}>
          Sign in
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
