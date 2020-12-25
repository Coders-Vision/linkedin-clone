import { Avatar } from "@material-ui/core";
import backImg from "../backImg.jpg";
import React from "react";
import { useSelector } from "react-redux";
import "../styles/sidebar.css";
import { selectUser } from "../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItems = (topic) => (
    <div className="recentItem">
      <span className="hashTag">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src={backImg} alt="" className="back-image" />
        <Avatar src={user.photoUrl} className="profile-pic" > {user.email[0].toUpperCase()}</Avatar>
        <h2>{user.displayName}</h2>
        <h3>{user.email}</h3>
      </div>
      <div className="stats">
        <div className="stat">
          <p>Who viewed you</p>
          <p className="stat-number">1,588</p>
        </div>
        <div className="stat">
          <p>View on Posts</p>
          <p className="stat-number">2,457</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItems("javascript")}
        {recentItems("webdev")}
        {recentItems("developer")}
        {recentItems("reactjs")}
        {recentItems("vuejs")}
        {recentItems("fullstack")}
      </div>
    </div>
  );
}

export default Sidebar;
