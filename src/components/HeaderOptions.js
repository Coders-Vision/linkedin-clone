import React from "react";
import { useSelector} from "react-redux";
import "../styles/headerOptions.css";
import { Avatar } from "@material-ui/core";

import { selectUser } from "../features/userSlice";
function HeaderOptions({ avatar, Icon, title, onClick, profilePic }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOptions">
      {Icon && <Icon className="headerOptions_icon" />}
      {avatar && (
        <Avatar src={profilePic} className="headerOptions_icon">{user.email[0].toUpperCase()}</Avatar>
      )}
      <h3 className="headerOptions_title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
