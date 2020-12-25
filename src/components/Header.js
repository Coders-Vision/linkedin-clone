import React from "react";
import {
  Search,
  Home,
  SupervisorAccount,
  BusinessCenter,
  Chat,
  Notifications,
} from "@material-ui/icons";
import linkedin_logo from "../logos/linkedin.svg";
import "../styles/header.css";
import HeaderOptions from "../components/HeaderOptions";
import { logout } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header-left">
        <div className="brand-logo">
          <img src={linkedin_logo} alt="linkedin-clone" />
          <h4>Clone</h4>
        </div>

        <div className="search">
          <Search className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header-right">
        <HeaderOptions title={"Home"} Icon={Home} />
        <HeaderOptions title={"My Network"} Icon={SupervisorAccount} />
        <HeaderOptions title={"Jobs"} Icon={BusinessCenter} />
        <HeaderOptions title={"Messaging"} Icon={Chat} />
        <HeaderOptions title={"Notifications"} Icon={Notifications} />

        {user ? (
          <HeaderOptions
            onClick={logoutOfApp}
            title={"Me"}
            avatar={Notifications}
            profilePic={user.photoUrl}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Header;
